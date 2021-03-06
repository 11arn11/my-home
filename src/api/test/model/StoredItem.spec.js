/**
 * LoopBack Application
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LoopBackApplication);
  }
}(this, function(expect, LoopBackApplication) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LoopBackApplication.StoredItem();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('StoredItem', function() {
    it('should create an instance of StoredItem', function() {
      // uncomment below and update the code to test StoredItem
      //var instane = new LoopBackApplication.StoredItem();
      //expect(instance).to.be.a(LoopBackApplication.StoredItem);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new LoopBackApplication.StoredItem();
      //expect(instance).to.be();
    });

    it('should have the property qty (base name: "qty")', function() {
      // uncomment below and update the code to test the property qty
      //var instane = new LoopBackApplication.StoredItem();
      //expect(instance).to.be();
    });

    it('should have the property ingredientId (base name: "ingredientId")', function() {
      // uncomment below and update the code to test the property ingredientId
      //var instane = new LoopBackApplication.StoredItem();
      //expect(instance).to.be();
    });

  });

}));
