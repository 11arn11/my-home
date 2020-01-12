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
 * The NewDoseInRecipe model module.
 * @module model/NewDoseInRecipe
 * @version 1.0.0
 */
class NewDoseInRecipe {
    /**
     * Constructs a new <code>NewDoseInRecipe</code>.
     * (Schema options: { title: &#39;NewDoseInRecipe&#39;, exclude: [ &#39;id&#39; ], optional: [ &#39;recipeId&#39; ] })
     * @alias module:model/NewDoseInRecipe
     * @param qty {Number} 
     */
    constructor(qty) { 
        
        NewDoseInRecipe.initialize(this, qty);
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
     * Constructs a <code>NewDoseInRecipe</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewDoseInRecipe} obj Optional instance to populate.
     * @return {module:model/NewDoseInRecipe} The populated <code>NewDoseInRecipe</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewDoseInRecipe();

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
 * @member {Number} qty
 */
NewDoseInRecipe.prototype['qty'] = undefined;

/**
 * @member {Number} recipeId
 */
NewDoseInRecipe.prototype['recipeId'] = undefined;

/**
 * @member {Number} ingredientId
 */
NewDoseInRecipe.prototype['ingredientId'] = undefined;






export default NewDoseInRecipe;
