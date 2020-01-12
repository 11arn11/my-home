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
 * The NewIngredient model module.
 * @module model/NewIngredient
 * @version 1.0.0
 */
class NewIngredient {
    /**
     * Constructs a new <code>NewIngredient</code>.
     * (Schema options: { title: &#39;NewIngredient&#39;, exclude: [ &#39;id&#39; ] })
     * @alias module:model/NewIngredient
     * @param name {String} 
     */
    constructor(name) { 
        
        NewIngredient.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>NewIngredient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewIngredient} obj Optional instance to populate.
     * @return {module:model/NewIngredient} The populated <code>NewIngredient</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewIngredient();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
NewIngredient.prototype['name'] = undefined;






export default NewIngredient;

