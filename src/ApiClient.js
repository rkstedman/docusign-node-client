(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['superagent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('superagent'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ApiClient = factory(root.superagent);
  }
}(this, function(superagent) {
  'use strict';

  var removeNulls = function(obj) {
    var isArray = obj instanceof Array;
    for (var k in obj) {
      if (typeof obj[k] === "object") removeNulls(obj[k]);
      if (isArray && obj.length === k) removeNulls(obj);
      if (obj[k] instanceof Array && obj[k].length === 0) delete obj[k];
    }
    return obj;
  };

  var ApiClient = function ApiClient() {
    /**
     * The base path to put in front of every API call's (relative) path.
     */
    this.basePath = 'https://www.docusign.net/restapi'.replace(/\/+$/, '');

    /**
     * The default HTTP headers to be included for all API calls.
     */
    // Add DocuSign Tracking Header
    this.defaultHeaders = { "X-DocuSign-SDK": "Node" };
  };
    
  /**
   * Sets the API endpoint base URL.
   */  
  ApiClient.prototype.setBasePath = function setBasePath(basePath) {
    this.basePath = basePath;
  };
    
  /**
   * Adds request headers to the API client. Useful for Authentication.
   */  
  ApiClient.prototype.addDefaultHeader = function addDefaultHeader(header, value) {
    this.defaultHeaders[header] = value;
  };

  ApiClient.prototype.paramToString = function paramToString(param) {
    if (param == null) {
      // return empty string for null and undefined
      return '';
    } else {
      return param.toString();
    }
  };

  /**
   * Build full URL by appending the given path to base path and replacing
   * path parameter placeholders with parameter values.
   * NOTE: query parameters are not handled here.
   */
  ApiClient.prototype.buildUrl = function buildUrl(path, pathParams) {
    if (!path.match(/^\//)) {
      path = '/' + path;
    }
    var url = this.basePath + path;
    var _this = this;
    url = url.replace(/\{([\w-]+)\}/g, function(fullMatch, key) {
      var value;
      if (pathParams.hasOwnProperty(key)) {
        value = _this.paramToString(pathParams[key]);
      } else {
        value = fullMatch;
      }
      return encodeURIComponent(value);
    });
    return url;
  };

  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   */
  ApiClient.prototype.isJsonMime = function isJsonMime(mime) {
    return Boolean(mime != null && mime.match(/^application\/json(;.*)?$/i));
  };

  /**
   * Choose a MIME from the given MIMEs with JSON preferred,
   * i.e. return JSON if included, otherwise return the first one.
   */
  ApiClient.prototype.jsonPreferredMime = function jsonPreferredMime(mimes) {
    var len = mimes.length;
    for (var i = 0; i < len; i++) {
      if (this.isJsonMime(mimes[i])) {
        return mimes[i];
      }
    }
    return mimes[0];
  };

  /**
   * Check if the given parameter value is like file content.
   */
  ApiClient.prototype.isFileParam = function isFileParam(param) {
    // Buffer or fs.ReadStream in Node.js
    if (typeof module === 'object' && module.exports &&
        (param instanceof Buffer || param instanceof require('fs').ReadStream)) {
      return true;
    }
    // Blob in browser
    if (typeof Blob === 'function' && param instanceof Blob) {
      return true;
    }
    // File in browser (it seems File object is also instance of Blob, but keep this for safe)
    if (typeof File === 'function' && param instanceof File) {
      return true;
    }
    return false;
  };

  /**
   * Normalize parameters values:
   *   remove nils,
   *   keep files and arrays,
   *   format to string with `paramToString` for other cases.
   */
  ApiClient.prototype.normalizeParams = function normalizeParams(params) {
    var newParams = {};
    for (var key in params) {
      if (params.hasOwnProperty(key) && params[key] != null) {
        var value = params[key];
        if (this.isFileParam(value) || Array.isArray(value)) {
          newParams[key] = value;
        } else {
          newParams[key] = this.paramToString(value);
        }
      }
    }
    return newParams;
  };

  ApiClient.prototype.callApi = function callApi(path, httpMethod, pathParams,
      queryParams, headerParams, formParams, bodyParam, contentTypes, accepts,
      callback) {
    var url = this.buildUrl(path, pathParams);
    var request = superagent(httpMethod, url);

    // set query parameters
    request.query(this.normalizeParams(queryParams));

    // set header parameters
    request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));

    var contentType = this.jsonPreferredMime(contentTypes);
    if (contentType) {
      request.type(contentType);
    } else if (!request.header['Content-Type']) {
      request.type('application/json');
    }

    if (contentType === 'application/x-www-form-urlencoded') {
      request.send(this.normalizeParams(formParams));
    } else if (contentType == 'multipart/form-data') {
      var _formParams = this.normalizeParams(formParams);
      for (var key in _formParams) {
        if (_formParams.hasOwnProperty(key)) {
          if (this.isFileParam(_formParams[key])) {
            // file field
            request.attach(key, _formParams[key]);
          } else {
            request.field(key, _formParams[key]);
          }
        }
      }
    } else if (bodyParam) {
      request.send(removeNulls(bodyParam));
    }

    var accept = this.jsonPreferredMime(accepts);
    if (accept) {
      request.accept(accept);
    }
        
    var data;
    if (request.header['Accept'] === 'application/pdf') {
        request.buffer();
        data = '';
    } else {
        data = '';
    }
        
    if (request.header['Accept'] === 'application/pdf') {
            request.parse( function (res, fn) {
            res.data = '';
            res.setEncoding('binary');
            res.on( 'data', function (chunk) { res.data += chunk; } );
            res.on( 'end', function () {
              try {
                fn( null, res.data );
              } catch ( err ) {
                fn( err );
              }
            });
        })
    }

    request.end(function(error, response) {
      if (callback) {
        if (request.header['Accept'] === 'application/pdf') {
            data = response && response.res.data;
        } else {
            data = response && response.body;
        }
        callback(error, data, response);
      }
    });

    return request;
  };

  ApiClient.default = new ApiClient();

  return ApiClient;
}));
