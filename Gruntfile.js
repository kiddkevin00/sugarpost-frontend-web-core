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
        PORT: '8088',
        IP: '127.0.0.1'
      },
      lint: {
        NODE_ENV: 'lint'
      },
      test: {
        NODE_ENV: 'test',
        PORT: '8088',
        IP: '127.0.0.1'
      },
      prod: {
        NODE_ENV: 'production',
        PORT: '8088',
        IP: '127.0.0.1'
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
      options: {
        port: '',
        node_env: undefined,
        output: 'Express server listening on port: [0-9]+ at IP: [0-9]+.[0-9]+.[0-9]+.[0-9]+, in [a-z]+ mode.',
        debug: false,
        background: true // Sets to false to debug the reason for stopping Express server.
      },
      dev: {
        options: {
          script: 'src/lib/server/app.js'
        }
      },
      prod: {
        options: {
          script: 'dist/lib/server/app.js'
        }
      }
    },
    watch: {
      options: {
        interrupt: true
      },
      // [TODO] Server-side live reload is not working.
      express: {
        files: [
          'src/lib/server/**/*.+(js|jsx|jade|json)',
          'package.json'
        ],
        tasks: ['express:dev', 'wait-for-server'],
        options: {
          spawn: false, // Without this option, specified Express won't be reloaded.
          nospawn: true, // For backward compatiability.
          atBegin: false, // Setting this to `true` will run tasks once when `watch:express` task loads.
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
        url: 'http://<%= env.dev.IP %>:<%= env.dev.PORT %>'
      },
      prod: {
        url: 'http://<%= env.prod.IP %>:<%= env.prod.PORT %>'
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
    // Empties folders to start fresh.
    clean: {
      dev: ['src/lib/client/static/app/index-<%= pkg.version %>.js'],
      test: ['spec/'],
      prod: ['src/lib/client/static/app/index-<%= pkg.version %>.js', 'dist/css/', 'dist/js/', 'dist/lib/', 'dist/assets']
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
    concat: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      prod: {
        src: ['src/lib/client/static/assets/**/*.css', 'src/lib/client/static/app/**/*.css'],
        dest: 'dist/css/index-<%= pkg.version %>.css'
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
        src: 'dist/css/index-<%= pkg.version %>.css',
        dest: 'dist/css/index-<%= pkg.version %>.min.css'
      }
    },
    copy: {
      prod: {
        files: [
          {
            cwd: 'src/lib/client/static/',
            src: ['assets/images/*'],
            dest: 'dist/',
            filter: 'isFile',
            expand: true
          },
          {
            cwd: 'src/',
            src: ['lib/client/static/favicon.ico'],
            dest: 'dist/',
            filter: 'isFile',
            expand: true
          }
        ]
      }
    },
    babel: {
      options: {
        sourceMap: 'both'
      },
      prod: {
        files: [
          {
            cwd: 'src/',
            src: ['lib/**/*.js'],
            dest: 'dist/',
            expand: true
          }
        ]
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
  grunt.registerTask('prod:preview', [
    'clean:prod',
    'env:prod',
    'babel',
    'copy',
    'express:prod',
    'concat',
    'postcss',
    'browserify',
    'uglify',
    'wait-for-server',
    'open:prod',
    'express-keep-alive'
  ]);

  // For "npm" post-install
  grunt.registerTask('postinstall', [
    'clean:prod',
    'env:prod',
    'babel',
    'copy',
    'postcss',
    'browserify',
    'uglify'
  ]);

  // For default task.
  grunt.registerTask('default', 'dev');
};
