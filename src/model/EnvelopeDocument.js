(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ErrorDetails', './NameValue', './SignatureType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ErrorDetails'), require('./NameValue'), require('./SignatureType'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ErrorDetails, root.Docusign.NameValue, root.Docusign.SignatureType);
  }
}(this, function(module, ErrorDetails, NameValue, SignatureType) {
  'use strict';

  
  

  
  var EnvelopeDocument = function EnvelopeDocument() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.documentFields = [];
    
    /**
     * 
     * datatype: Array
     **/
    self.availableDocumentTypes = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.documentId) {
        self.documentId = data.documentId;
      }
      
      if (data.name) {
        self.name = data.name;
      }
      
      if (data.type) {
        self.type = data.type;
      }
      
      if (data.uri) {
        self.uri = data.uri;
      }
      
      if (data.order) {
        self.order = data.order;
      }
      
      if (data.pages) {
        self.pages = data.pages;
      }
      
      if (data.containsPdfFormFields) {
        self.containsPdfFormFields = data.containsPdfFormFields;
      }
      
      if (data.documentFields) {
        self.documentFields = data.documentFields;
      }
      
      if (data.availableDocumentTypes) {
        self.availableDocumentTypes = data.availableDocumentTypes;
      }
      
      if (data.attachmentTabId) {
        self.attachmentTabId = data.attachmentTabId;
      }
      
      if (data.display) {
        self.display = data.display;
      }
      
      if (data.includeInDownload) {
        self.includeInDownload = data.includeInDownload;
      }
      
      if (data.signerMustAcknowledge) {
        self.signerMustAcknowledge = data.signerMustAcknowledge;
      }
      
      if (data.errorDetails) {
        self.errorDetails = new data.errorDetails.constructor();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
    }

    
    /**
     * get Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
     * @return {String}
     **/
    self.getDocumentId = function() {
      return self.documentId;
    }

    /**
     * set Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
     * @param {String} documentId
     **/
    self.setDocumentId = function (documentId) {
      self.documentId = documentId;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getName = function() {
      return self.name;
    }

    /**
     * set 
     * @param {String} name
     **/
    self.setName = function (name) {
      self.name = name;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getType = function() {
      return self.type;
    }

    /**
     * set 
     * @param {String} type
     **/
    self.setType = function (type) {
      self.type = type;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getUri = function() {
      return self.uri;
    }

    /**
     * set 
     * @param {String} uri
     **/
    self.setUri = function (uri) {
      self.uri = uri;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getOrder = function() {
      return self.order;
    }

    /**
     * set 
     * @param {String} order
     **/
    self.setOrder = function (order) {
      self.order = order;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getPages = function() {
      return self.pages;
    }

    /**
     * set 
     * @param {String} pages
     **/
    self.setPages = function (pages) {
      self.pages = pages;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getContainsPdfFormFields = function() {
      return self.containsPdfFormFields;
    }

    /**
     * set 
     * @param {String} containsPdfFormFields
     **/
    self.setContainsPdfFormFields = function (containsPdfFormFields) {
      self.containsPdfFormFields = containsPdfFormFields;
    }
    
    /**
     * get 
     * @return {Array}
     **/
    self.getDocumentFields = function() {
      return self.documentFields;
    }

    /**
     * set 
     * @param {Array} documentFields
     **/
    self.setDocumentFields = function (documentFields) {
      self.documentFields = documentFields;
    }
    
    /**
     * get 
     * @return {Array}
     **/
    self.getAvailableDocumentTypes = function() {
      return self.availableDocumentTypes;
    }

    /**
     * set 
     * @param {Array} availableDocumentTypes
     **/
    self.setAvailableDocumentTypes = function (availableDocumentTypes) {
      self.availableDocumentTypes = availableDocumentTypes;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getAttachmentTabId = function() {
      return self.attachmentTabId;
    }

    /**
     * set 
     * @param {String} attachmentTabId
     **/
    self.setAttachmentTabId = function (attachmentTabId) {
      self.attachmentTabId = attachmentTabId;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getDisplay = function() {
      return self.display;
    }

    /**
     * set 
     * @param {String} display
     **/
    self.setDisplay = function (display) {
      self.display = display;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getIncludeInDownload = function() {
      return self.includeInDownload;
    }

    /**
     * set 
     * @param {String} includeInDownload
     **/
    self.setIncludeInDownload = function (includeInDownload) {
      self.includeInDownload = includeInDownload;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSignerMustAcknowledge = function() {
      return self.signerMustAcknowledge;
    }

    /**
     * set 
     * @param {String} signerMustAcknowledge
     **/
    self.setSignerMustAcknowledge = function (signerMustAcknowledge) {
      self.signerMustAcknowledge = signerMustAcknowledge;
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
    module.EnvelopeDocument = EnvelopeDocument;
  }

  return EnvelopeDocument;
  
  
}));
