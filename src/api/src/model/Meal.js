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
 * The Meal model module.
 * @module model/Meal
 * @version 1.0.0
 */
class Meal {
    /**
     * Constructs a new <code>Meal</code>.
     * @alias module:model/Meal
     * @param _date {Date} 
     * @param occasion {String} 
     */
    constructor(_date, occasion) { 
        
        Meal.initialize(this, _date, occasion);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _date, occasion) { 
        obj['date'] = _date;
        obj['occasion'] = occasion;
    }

    /**
     * Constructs a <code>Meal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Meal} obj Optional instance to populate.
     * @return {module:model/Meal} The populated <code>Meal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Meal();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('occasion')) {
                obj['occasion'] = ApiClient.convertToType(data['occasion'], 'String');
            }
            if (data.hasOwnProperty('recipeId')) {
                obj['recipeId'] = ApiClient.convertToType(data['recipeId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Meal.prototype['id'] = undefined;

/**
 * @member {Date} date
 */
Meal.prototype['date'] = undefined;

/**
 * @member {String} occasion
 */
Meal.prototype['occasion'] = undefined;

/**
 * @member {Number} recipeId
 */
Meal.prototype['recipeId'] = undefined;






export default Meal;

