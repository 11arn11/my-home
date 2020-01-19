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
 * The MealsIdFields model module.
 * @module model/MealsIdFields
 * @version 1.0.0
 */
class MealsIdFields {
    /**
     * Constructs a new <code>MealsIdFields</code>.
     * @alias module:model/MealsIdFields
     */
    constructor() { 
        
        MealsIdFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MealsIdFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MealsIdFields} obj Optional instance to populate.
     * @return {module:model/MealsIdFields} The populated <code>MealsIdFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MealsIdFields();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Boolean');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Boolean');
            }
            if (data.hasOwnProperty('occasion')) {
                obj['occasion'] = ApiClient.convertToType(data['occasion'], 'Boolean');
            }
            if (data.hasOwnProperty('recipeId')) {
                obj['recipeId'] = ApiClient.convertToType(data['recipeId'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} id
 */
MealsIdFields.prototype['id'] = undefined;

/**
 * @member {Boolean} date
 */
MealsIdFields.prototype['date'] = undefined;

/**
 * @member {Boolean} occasion
 */
MealsIdFields.prototype['occasion'] = undefined;

/**
 * @member {Boolean} recipeId
 */
MealsIdFields.prototype['recipeId'] = undefined;






export default MealsIdFields;

