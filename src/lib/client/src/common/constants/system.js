// BEGIN - THIS PART SHOULD BE CONSISTENT WITH FRONTEND

const sources = {
  BULLETIN_BOARD_SYSTEM: 'bulletin-board-system',
  SUGARPOST_WEB_FRONTEND: 'sugarpost-web-frontend',
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

exports.USER_TYPES = {
  UNPAID: 'Not Subscribed',
  PAID: 'Paid',
  CANCELLED: 'Cancelled',
  VENDOR: 'Vendor',
  ADMIN: 'Admin',
  INFLUENCER: 'Influencer',
};

// END - THIS PART SHOULD BE CONSISTENT WITH FRONTEND

exports.COMMON = {
  CURRENT_SOURCE: sources.SUGARPOST_WEB_FRONTEND,
};

exports.DEFAULT_CONFIG = {};

// This is the only place aggregating all error codes.
exports.ERROR_CODES = Object.assign({}, httpStatusCodes, {
  UNKNOWN_ERROR: 1000,
  INVALID_RESPONSE_INTERFACE: 1001,
  INVALID_ERROR_INTERFACE: 1002,
});

exports.ERROR_NAMES = {
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
  RESPONSE_OBJ_PARSE_ERROR: 'RESPONSE_OBJ_PARSE_ERROR',
  ERROR_OBJ_PARSE_ERROR: 'RESPONSE_OBJ_PARSE_ERROR',
  PROXY_ERROR: 'PROXY_ERROR',
};

exports.ERROR_MSG = {
  RESPONSE_OBJ_PARSE_ERROR: 'The response object is not able to deserialize back to an instance of Standard Response Wrapper.',
  ERROR_OBJ_PARSE_ERROR: 'The error object is not able to deserialize back to an instance of Standard Error Wrapper.',
  PROXY_ERROR: 'An error occurred in HTTP proxy module.',
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
