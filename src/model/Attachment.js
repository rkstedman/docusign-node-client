(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined);
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign);
  }
}(this, function(module) {
  'use strict';

  
  

  /**
   * Contains information about an attachment.
   **/
  var Attachment = function Attachment() { 
    var self = this;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.attachmentId) {
        self.attachmentId = data.attachmentId;
      }
      
      if (data.label) {
        self.label = data.label;
      }
      
      if (data.attachmentType) {
        self.attachmentType = data.attachmentType;
      }
      
      if (data.accessControl) {
        self.accessControl = data.accessControl;
      }
      
      if (data.data) {
        self.data = data.data;
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getAttachmentId = function() {
      return self.attachmentId;
    }

    /**
     * set 
     * @param {String} attachmentId
     **/
    self.setAttachmentId = function (attachmentId) {
      self.attachmentId = attachmentId;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getLabel = function() {
      return self.label;
    }

    /**
     * set 
     * @param {String} label
     **/
    self.setLabel = function (label) {
      self.label = label;
    }
    
    /**
     * get Specifies the type of the attachment for the recipient.
     * @return {String}
     **/
    self.getAttachmentType = function() {
      return self.attachmentType;
    }

    /**
     * set Specifies the type of the attachment for the recipient.
     * @param {String} attachmentType
     **/
    self.setAttachmentType = function (attachmentType) {
      self.attachmentType = attachmentType;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getAccessControl = function() {
      return self.accessControl;
    }

    /**
     * set 
     * @param {String} accessControl
     **/
    self.setAccessControl = function (accessControl) {
      self.accessControl = accessControl;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getData = function() {
      return self.data;
    }

    /**
     * set 
     * @param {String} data
     **/
    self.setData = function (data) {
      self.data = data;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.Attachment = Attachment;
  }

  return Attachment;
  
  
}));
