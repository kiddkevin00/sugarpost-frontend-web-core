const StandardErrorWrapper = require('../utility/standard-error-wrapper');
const constants = require('../constants/');
const request = require('request');

class HttpRequest {

  static exec(options) {
    return new Promise((resolve, reject) => {
      request(options, (_err, response) => {
        let err;

        if (_err) {
          const code = response ? response.statusCode :
            constants.SYSTEM.ERROR_CODES.INTERNAL_SERVER_ERROR;
          const message = (_err && _err.message) ? _err.message :
            constants.SYSTEM.ERROR_MSG.PROXY_ERROR;

          err = new StandardErrorWrapper([
            {
              code,
              message,
              name: constants.SYSTEM.ERROR_NAMES.PROXY_ERROR,
              source: constants.SYSTEM.COMMON.CURRENT_SOURCE,
            },
          ]);

          return reject(err);
        } else if (response.statusCode !== constants.SYSTEM.HTTP_STATUS_CODES.OK) {
          // Assumes that the response body follows the standard error format.
          return reject(response.body);
        }
        return resolve(response);
      });
    });
  }

}

class Proxy {

  static get(url, queryString, headers) {
    const options = {
      method: constants.SYSTEM.HTTP_METHODS.GET,
      url: Proxy._getFullUrl(url),
      headers,
      qs: queryString,
      json: true,
    };

    return HttpRequest.exec(options);
  }

  static post(url, body, headers) {
    const options = {
      method: constants.SYSTEM.HTTP_METHODS.POST,
      url: Proxy._getFullUrl(url),
      headers,
      body,
      json: true,
    };

    return HttpRequest.exec(options);
  }

  static put(url, body, headers) {
    const options = {
      method: constants.SYSTEM.HTTP_METHODS.PUT,
      url: Proxy._getFullUrl(url),
      body,
      headers,
      json: true,
    };

    return HttpRequest.exec(options);
  }

  static delete(url, queryString, headers) {
    const options = {
      method: constants.SYSTEM.HTTP_METHODS.DELETE,
      url: Proxy._getFullUrl(url),
      headers,
      qs: queryString,
      json: true,
    };

    return HttpRequest.exec(options);
  }

  static _getFullUrl(url) {
    let fullUrl;

    if (url[0] === '/') {
      const urlBase = (window.location.hostname === 'localhost') ||
        (window.location.hostname === '127.0.0.1') ||
        (window.location.hostname === '0.0.0.0') ?
        constants.SYSTEM.URL_BASES.LOCAL_BACKEND_API : constants.SYSTEM.URL_BASES.PROD_BACKEND_API;

      fullUrl = urlBase + url;
    } else {
      fullUrl = url;
    }

    return fullUrl;
  }
}

module.exports = Proxy;
