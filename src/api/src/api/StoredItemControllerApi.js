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


import ApiClient from "../ApiClient";
import Filter6 from '../model/Filter6';
import Filter7 from '../model/Filter7';
import LoopbackCount from '../model/LoopbackCount';
import NewStoredItem from '../model/NewStoredItem';
import StoredItem from '../model/StoredItem';
import StoredItemPartial from '../model/StoredItemPartial';
import StoredItemWithRelations from '../model/StoredItemWithRelations';

/**
* StoredItemController service.
* @module api/StoredItemControllerApi
* @version 1.0.0
*/
export default class StoredItemControllerApi {

    /**
    * Constructs a new StoredItemControllerApi. 
    * @alias module:api/StoredItemControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * @param {Object} opts Optional parameters
     * @param {Object.<String, {String: Object}>} opts.where 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoopbackCount} and HTTP response
     */
    storedItemControllerCountWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'where': opts['where']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LoopbackCount;
      return this.apiClient.callApi(
        '/stored-items/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {Object.<String, {String: Object}>} opts.where 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoopbackCount}
     */
    storedItemControllerCount(opts) {
      return this.storedItemControllerCountWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/NewStoredItem} opts.newStoredItem 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StoredItem} and HTTP response
     */
    storedItemControllerCreateWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['newStoredItem'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StoredItem;
      return this.apiClient.callApi(
        '/stored-items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/NewStoredItem} opts.newStoredItem 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StoredItem}
     */
    storedItemControllerCreate(opts) {
      return this.storedItemControllerCreateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    storedItemControllerDeleteByIdWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling storedItemControllerDeleteById");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/stored-items/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    storedItemControllerDeleteById(id) {
      return this.storedItemControllerDeleteByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter7} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/StoredItemWithRelations>} and HTTP response
     */
    storedItemControllerFindWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter': opts['filter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [StoredItemWithRelations];
      return this.apiClient.callApi(
        '/stored-items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter7} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/StoredItemWithRelations>}
     */
    storedItemControllerFind(opts) {
      return this.storedItemControllerFindWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter6} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StoredItemWithRelations} and HTTP response
     */
    storedItemControllerFindByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling storedItemControllerFindById");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'filter': opts['filter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = StoredItemWithRelations;
      return this.apiClient.callApi(
        '/stored-items/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter6} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StoredItemWithRelations}
     */
    storedItemControllerFindById(id, opts) {
      return this.storedItemControllerFindByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/StoredItem} opts.storedItem 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    storedItemControllerReplaceByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['storedItem'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling storedItemControllerReplaceById");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/stored-items/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/StoredItem} opts.storedItem 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    storedItemControllerReplaceById(id, opts) {
      return this.storedItemControllerReplaceByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {Object.<String, {String: Object}>} opts.where 
     * @param {module:model/StoredItemPartial} opts.storedItemPartial 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoopbackCount} and HTTP response
     */
    storedItemControllerUpdateAllWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['storedItemPartial'];

      let pathParams = {
      };
      let queryParams = {
        'where': opts['where']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LoopbackCount;
      return this.apiClient.callApi(
        '/stored-items', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {Object.<String, {String: Object}>} opts.where 
     * @param {module:model/StoredItemPartial} opts.storedItemPartial 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoopbackCount}
     */
    storedItemControllerUpdateAll(opts) {
      return this.storedItemControllerUpdateAllWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/StoredItemPartial} opts.storedItemPartial 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    storedItemControllerUpdateByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['storedItemPartial'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling storedItemControllerUpdateById");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/stored-items/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/StoredItemPartial} opts.storedItemPartial 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    storedItemControllerUpdateById(id, opts) {
      return this.storedItemControllerUpdateByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
