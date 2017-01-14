const sources = {
  BULLETIN_BOARD_SYSTEM: 'bulletin-board-system',
};

const httpStatusCodes = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHENTICATED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
};

exports.SOURCES = sources;

exports.HTTP_STATUS_CODES = httpStatusCodes;

exports.ERROR_CODES = Object.assign({}, httpStatusCodes, {
  RESPONSE_INTERFACE_INVALID: 1000,
});

exports.ERROR_NAMES = {
  RESPONSE_OBJ_PARSE_ERROR: 'RESPONSE_OBJ_PARSE_ERROR',
  PROXY_ERROR: 'PROXY_ERROR',
};

exports.ERROR_MSG = {
  RESPONSE_OBJ_PARSE_ERROR: 'The response object is not able to deserialize back to an instance of Standard Reponse Wrapper',
  PROXY_ERROR: 'An error occurred in HTTP proxy.',
};

exports.HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

exports.URL_BASES = {
  LOCAL_BACKEND_API: 'http://127.0.0.1:8087',
  PROD_BACKEND_API: 'https://bulletin-board-system.herokuapp.com',
};

exports.COMMON = {
  CURRENT_SOURCE: sources.BULLETIN_BOARD_SYSTEM,
};

exports.DEFAULT_CONFIG = {};
