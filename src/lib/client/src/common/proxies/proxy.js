'use strict';

const StandardErrorWrapper = require('../utility/standard-error-wrapper');
const constants = require('../constants/');
const request = require('request');

class HttpRequest {

  static exec(options) {
    return new Promise((resolve, reject) => {
      request(options, (_err, response) => {
        if (_err || (response.statusCode !== constants.HTTP_STATUS_CODES.OK)) {
          const code = response ? response.statusCode : constants.SYSTEM.ERROR_CODES.INTERNAL_SERVER_ERROR;
          const message = (_err && _err.message) ? _err.message : constants.SYSTEM.ERROR_MSG.PROXY_ERROR;

          const err = new StandardErrorWrapper([
            {
              code,
              message,
              name: constants.SYSTEM.ERROR_NAMES.PROXY_ERROR,
              source: constants.SYSTEM.COMMON.CURRENT_SOURCE,
            },
          ]);

          return reject(err);
        }
        return resolve(response);
      });
    });
  }

}

class Proxy {

  static get(url, queryString, headers) {
    const options = {
      method: constants.HTTP_METHODS.GET,
      url,
      headers,
      qs: queryString,
      json: true,
    };

    return HttpRequest.exec(options);
  }

  static post(url, body, headers) {
    const options = {
      method: constants.HTTP_METHODS.POST,
      url,
      headers,
      body,
      json: true,
    };

    return HttpRequest.exec(options);
  }

  static put(url, body, headers) {
    const options = {
      method: constants.HTTP_METHODS.PUT,
      url,
      body,
      headers,
      json: true,
    };

    return HttpRequest.exec(options);
  }

  static delete(url, queryString, headers) {
    const options = {
      method: constants.HTTP_METHODS.DELETE,
      url,
      headers,
      qs: queryString,
      json: true,
    };

    return HttpRequest.exec(options);
  }

}

module.exports = Proxy;
