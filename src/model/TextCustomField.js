(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ErrorDetails);
  }
}(this, function(module, ErrorDetails) {
  'use strict';

  
  

  
  var TextCustomField = function TextCustomField() { 
    var self = this;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.fieldId) {
        self.fieldId = data.fieldId;
      }
      
      if (data.name) {
        self.name = data.name;
      }
      
      if (data.show) {
        self.show = data.show;
      }
      
      if (data.required) {
        self.required = data.required;
      }
      
      if (data.value) {
        self.value = data.value;
      }
      
      if (data.configurationType) {
        self.configurationType = data.configurationType;
      }
      
      if (data.errorDetails) {
        self.errorDetails = new data.errorDetails.constructor();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
    }

    
    /**
     * get An ID used to specify a custom field.
     * @return {String}
     **/
    self.getFieldId = function() {
      return self.fieldId;
    }

    /**
     * set An ID used to specify a custom field.
     * @param {String} fieldId
     **/
    self.setFieldId = function (fieldId) {
      self.fieldId = fieldId;
    }
    
    /**
     * get The name of the custom field.
     * @return {String}
     **/
    self.getName = function() {
      return self.name;
    }

    /**
     * set The name of the custom field.
     * @param {String} name
     **/
    self.setName = function (name) {
      self.name = name;
    }
    
    /**
     * get A boolean indicating if the value should be displayed.
     * @return {String}
     **/
    self.getShow = function() {
      return self.show;
    }

    /**
     * set A boolean indicating if the value should be displayed.
     * @param {String} show
     **/
    self.setShow = function (show) {
      self.show = show;
    }
    
    /**
     * get When set to **true**, the signer is required to fill out this tab
     * @return {String}
     **/
    self.getRequired = function() {
      return self.required;
    }

    /**
     * set When set to **true**, the signer is required to fill out this tab
     * @param {String} required
     **/
    self.setRequired = function (required) {
      self.required = required;
    }
    
    /**
     * get The value of the custom field.
     * @return {String}
     **/
    self.getValue = function() {
      return self.value;
    }

    /**
     * set The value of the custom field.
     * @param {String} value
     **/
    self.setValue = function (value) {
      self.value = value;
    }
    
    /**
     * get If merge field's are being used, specifies the type of the merge field. The only  supported value is **salesforce**.
     * @return {String}
     **/
    self.getConfigurationType = function() {
      return self.configurationType;
    }

    /**
     * set If merge field's are being used, specifies the type of the merge field. The only  supported value is **salesforce**.
     * @param {String} configurationType
     **/
    self.setConfigurationType = function (configurationType) {
      self.configurationType = configurationType;
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
    module.TextCustomField = TextCustomField;
  }

  return TextCustomField;
  
  
}));
