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

import ApiClient from '../ApiClient';

/**
 * The RecipePartial model module.
 * @module model/RecipePartial
 * @version 1.0.0
 */
class RecipePartial {
    /**
     * Constructs a new <code>RecipePartial</code>.
     * (Schema options: { partial: true })
     * @alias module:model/RecipePartial
     */
    constructor() { 
        
        RecipePartial.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RecipePartial</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecipePartial} obj Optional instance to populate.
     * @return {module:model/RecipePartial} The populated <code>RecipePartial</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecipePartial();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('main')) {
                obj['main'] = ApiClient.convertToType(data['main'], 'String');
            }
            if (data.hasOwnProperty('secondary')) {
                obj['secondary'] = ApiClient.convertToType(data['secondary'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
RecipePartial.prototype['id'] = undefined;

/**
 * @member {String} name
 */
RecipePartial.prototype['name'] = undefined;

/**
 * @member {String} main
 */
RecipePartial.prototype['main'] = undefined;

/**
 * @member {String} secondary
 */
RecipePartial.prototype['secondary'] = undefined;






export default RecipePartial;

