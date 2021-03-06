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
import Filter from '../model/Filter';
import Filter1 from '../model/Filter1';
import Ingredient from '../model/Ingredient';
import IngredientPartial from '../model/IngredientPartial';
import IngredientWithRelations from '../model/IngredientWithRelations';
import LoopbackCount from '../model/LoopbackCount';
import NewIngredient from '../model/NewIngredient';

/**
* IngredientController service.
* @module api/IngredientControllerApi
* @version 1.0.0
*/
export default class IngredientControllerApi {

    /**
    * Constructs a new IngredientControllerApi. 
    * @alias module:api/IngredientControllerApi
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
    ingredientControllerCountWithHttpInfo(opts) {
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
        '/ingredients/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {Object.<String, {String: Object}>} opts.where 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoopbackCount}
     */
    ingredientControllerCount(opts) {
      return this.ingredientControllerCountWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/NewIngredient} opts.newIngredient 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ingredient} and HTTP response
     */
    ingredientControllerCreateWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['newIngredient'];

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
      let returnType = Ingredient;
      return this.apiClient.callApi(
        '/ingredients', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/NewIngredient} opts.newIngredient 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ingredient}
     */
    ingredientControllerCreate(opts) {
      return this.ingredientControllerCreateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    ingredientControllerDeleteByIdWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling ingredientControllerDeleteById");
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
        '/ingredients/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    ingredientControllerDeleteById(id) {
      return this.ingredientControllerDeleteByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter1} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/IngredientWithRelations>} and HTTP response
     */
    ingredientControllerFindWithHttpInfo(opts) {
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
      let returnType = [IngredientWithRelations];
      return this.apiClient.callApi(
        '/ingredients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter1} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/IngredientWithRelations>}
     */
    ingredientControllerFind(opts) {
      return this.ingredientControllerFindWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IngredientWithRelations} and HTTP response
     */
    ingredientControllerFindByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling ingredientControllerFindById");
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
      let returnType = IngredientWithRelations;
      return this.apiClient.callApi(
        '/ingredients/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IngredientWithRelations}
     */
    ingredientControllerFindById(id, opts) {
      return this.ingredientControllerFindByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Ingredient} opts.ingredient 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    ingredientControllerReplaceByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['ingredient'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling ingredientControllerReplaceById");
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
        '/ingredients/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Ingredient} opts.ingredient 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    ingredientControllerReplaceById(id, opts) {
      return this.ingredientControllerReplaceByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {Object.<String, {String: Object}>} opts.where 
     * @param {module:model/IngredientPartial} opts.ingredientPartial 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoopbackCount} and HTTP response
     */
    ingredientControllerUpdateAllWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['ingredientPartial'];

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
        '/ingredients', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {Object.<String, {String: Object}>} opts.where 
     * @param {module:model/IngredientPartial} opts.ingredientPartial 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoopbackCount}
     */
    ingredientControllerUpdateAll(opts) {
      return this.ingredientControllerUpdateAllWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/IngredientPartial} opts.ingredientPartial 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    ingredientControllerUpdateByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['ingredientPartial'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling ingredientControllerUpdateById");
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
        '/ingredients/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/IngredientPartial} opts.ingredientPartial 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    ingredientControllerUpdateById(id, opts) {
      return this.ingredientControllerUpdateByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
