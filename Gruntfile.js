module.exports = function (grunt) {
  // Loads grunt tasks automatically whenever necessary.
  require('jit-grunt')(grunt, {
    express: 'grunt-express-server'
  });

  // Times how long it takes for each task. Might help when optimizing build times.
  require('time-grunt')(grunt);

  // Defines the configuration for all the tasks.
  grunt.initConfig({
    // Loads project settings.
    pkg: grunt.file.readJSON('package.json'),
    env: {
      dev: {
        NODE_ENV: 'development',
        PORT_NUMBER_HTTPS: '8089', // `PORT` name does not work
        PORT_NUMBER_HTTP: '8088',
        IP_ADDRESS: '127.0.0.1'
      },
      lint: {
        NODE_ENV: 'lint'
      },
      test: {
        NODE_ENV: 'test',
        PORT_NUMBER_HTTPS: '8089', // `PORT` name does not work
        PORT_NUMBER_HTTP: '8088',
        IP_ADDRESS: '127.0.0.1'
      },
      prod: {
        NODE_ENV: 'production',
        PORT_NUMBER_HTTPS: '443', /// `PORT` name does not work
        PORT_NUMBER_HTTP: '8088',
        IP_ADDRESS: '127.0.0.1'
      }
    },
    browserify: {
      options: {
        transform: [
          ['babelify']
        ]
      },
      client: {
        files: {
          'src/lib/client/static/app/index-<%= pkg.version %>.js': [
            'src/lib/client/src/app/app.js'
          ]
        },
        options: {
          watch: true
        }
      }
    },
    express: {
      dev: {
        options: {
          script: 'src/lib/server/app.js',
          debug: true
        }
      },
      prod: {
        options: {
          script: 'dist/lib/server/app.js',
          debug: false
        }
      }
    },
    watch: {
      options: {
        interrupt: true
      },
      gruntfile: {
        files: ['Gruntfile.js'],
        tasks: ['grunt-dev']
      },
      server: {
        files: [
          'src/lib/server/**/*.+(js|jsx|jade|json)',
          'package.json'
        ],
        tasks: ['express:dev', 'wait-for-server'],
        options: {
          nospawn: true,
          livereload: true
        }
      },
      client: {
        files: [
          'src/lib/client/static/index2.html',
          'src/lib/client/static/app/index-<%= pkg.version %>.js',
          'src/lib/client/static/**/*.css'
        ],
        options: {
          livereload: true
        }
      },
      lint: {
        files: [
          '<%= eslint.target %>'
        ],
        tasks: []
      }
    },
    open: {
      dev: {
        url: 'http://localhost:<%= env.dev.PORT_NUMBER_HTTP %>'
      },
      prod: {
        url: 'http://localhost:<%= env.prod.PORT_NUMBER_HTTP %>'
      }
    },
    eslint: {
      options: {
        format: './node_modules/eslint-friendly-formatter'
      },
      target: ['src/lib/client/src/**/*.+(jsx|js)', 'src/lib/server/**/*.+(js|jsx)', 'src/spec/**/*.+(js|jsx)']
    },
    // [TODO]
    jest: {
      coverage: true,
      testPathPattern: /.+\.spec\.js/
    },
    // empties folders to start fresh
    clean: {
      dev: ['src/lib/client/static/app/index-<%= pkg.version %>.js'],
      test: ['spec/'],
      prod: ['src/lib/client/static/app/index-<%= pkg.version %>.js', 'dist/css/', 'dist/js/', 'dist/lib/']
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: true,
        compress: {
          sequences: true,
          dead_code: true,
          unused: true,
          conditionals: true,
          booleans: true,
          if_return: true,
          join_vars: true
        }
      },
      js: {
        src: ['src/lib/client/static/app/index-<%= pkg.version %>.js'],
        dest: 'dist/js/index-<%= pkg.version %>.min.js'
      }
    },
    postcss: {
      options: {
        processors: [
          require('pixrem')(), // Adds fallbacks for `rem` units.
          require('autoprefixer')({ browsers: ['last 2 versions', 'ie 9', 'ie 10'] }), // Adds vendor's prefixes.
          require('cssnano')() // Minifies the result.
        ]
      },
      prod: {
        src: 'src/lib/client/static/**/*.css',
        dest: 'dist/css/index-<%= pkg.version %>.min.css'
      }
    },
    copy: {
      prod: {
        cwd: 'src/lib/client/static/assets/images/',
        src: ['*'],
        dest: 'dist/assets/images/',
        filter: 'isFile',
        expand: true
      }
    }
  });

  // For delaying live reload until after server has restarted.
  grunt.registerTask('wait-for-server', function () {
    grunt.log.ok('Waiting for server reload...');

    var done = this.async();

    setTimeout(function () {
      grunt.log.writeln('Done waiting!');
      done();
    }, 1500);
  });

  grunt.registerTask('express-keep-alive', 'Keep grunt running', function () {
    this.async();
  });

  // For setup Grunt config environment.
  grunt.registerTask('grunt-dev', [
    'clean:dev',
    'env:dev',
    'browserify'
  ]);

  // For setup development environment.
  grunt.registerTask('dev', [
    'clean:dev',
    'env:dev',
    'express:dev',
    'browserify',
    'wait-for-server',
    'open:dev',
    'watch'
  ]);

  // For setup linting environment.
  grunt.registerTask('lint', [
    'env:lint',
    'eslint',
    'watch:lint'
  ]);

  // For setup testing environment.
  grunt.registerTask('test', [
    'clean:test',
    'env:test',
    'jest'
  ]);

  // For setup production environment.
  grunt.registerTask('prod', [
    //'clean:prod', // [TODO] Need to run `$ babel --copy-files src/lib/ --out-dir dist/lib/`.
    'env:prod',
    'express:prod',
    'copy',
    'postcss',
    'browserify',
    'uglify',
    'wait-for-server',
    'open:prod',
    'express-keep-alive'
  ]);

  // For default task.
  grunt.registerTask('default', 'dev');
};
