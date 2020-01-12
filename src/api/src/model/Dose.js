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
 * The Dose model module.
 * @module model/Dose
 * @version 1.0.0
 */
class Dose {
    /**
     * Constructs a new <code>Dose</code>.
     * @alias module:model/Dose
     * @param qty {Number} 
     */
    constructor(qty) { 
        
        Dose.initialize(this, qty);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, qty) { 
        obj['qty'] = qty;
    }

    /**
     * Constructs a <code>Dose</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Dose} obj Optional instance to populate.
     * @return {module:model/Dose} The populated <code>Dose</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Dose();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('qty')) {
                obj['qty'] = ApiClient.convertToType(data['qty'], 'Number');
            }
            if (data.hasOwnProperty('recipeId')) {
                obj['recipeId'] = ApiClient.convertToType(data['recipeId'], 'Number');
            }
            if (data.hasOwnProperty('ingredientId')) {
                obj['ingredientId'] = ApiClient.convertToType(data['ingredientId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Dose.prototype['id'] = undefined;

/**
 * @member {Number} qty
 */
Dose.prototype['qty'] = undefined;

/**
 * @member {Number} recipeId
 */
Dose.prototype['recipeId'] = undefined;

/**
 * @member {Number} ingredientId
 */
Dose.prototype['ingredientId'] = undefined;






export default Dose;
