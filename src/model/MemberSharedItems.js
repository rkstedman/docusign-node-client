(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ErrorDetails', './SharedItem', './TemplateSharedItem', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ErrorDetails'), require('./SharedItem'), require('./TemplateSharedItem'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ErrorDetails, root.Docusign.SharedItem, root.Docusign.TemplateSharedItem, root.Docusign.UserInfo);
  }
}(this, function(module, ErrorDetails, SharedItem, TemplateSharedItem, UserInfo) {
  'use strict';

  
  

  
  var MemberSharedItems = function MemberSharedItems() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.envelopes = [];
    
    /**
     * 
     * datatype: Array
     **/
    self.templates = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.user) {
        self.user = new data.user.constructor();
        self.user.constructFromObject(data.user);
      }
      
      if (data.envelopes) {
        self.envelopes = data.envelopes;
      }
      
      if (data.templates) {
        self.templates = data.templates;
      }
      
      if (data.errorDetails) {
        self.errorDetails = new data.errorDetails.constructor();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
    }

    
    /**
     * @return {UserInfo}
     **/
    self.getUser = function() {
      return self.user;
    }

    /**
     * @param {UserInfo} user
     **/
    self.setUser = function (user) {
      self.user = user;
    }
    
    /**
     * get 
     * @return {Array}
     **/
    self.getEnvelopes = function() {
      return self.envelopes;
    }

    /**
     * set 
     * @param {Array} envelopes
     **/
    self.setEnvelopes = function (envelopes) {
      self.envelopes = envelopes;
    }
    
    /**
     * get 
     * @return {Array}
     **/
    self.getTemplates = function() {
      return self.templates;
    }

    /**
     * set 
     * @param {Array} templates
     **/
    self.setTemplates = function (templates) {
      self.templates = templates;
    }
    
    /**
     * @return {ErrorDetails}
     **/
    self.getErrorDetails = function() {
      return self.errorDetails;
    }

    /**
     * @param {ErrorDetails} errorDetails
     **/
    self.setErrorDetails = function (errorDetails) {
      self.errorDetails = errorDetails;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.MemberSharedItems = MemberSharedItems;
  }

  return MemberSharedItems;
  
  
}));
