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
 * The StoredItemsIdFields model module.
 * @module model/StoredItemsIdFields
 * @version 1.0.0
 */
class StoredItemsIdFields {
    /**
     * Constructs a new <code>StoredItemsIdFields</code>.
     * @alias module:model/StoredItemsIdFields
     */
    constructor() { 
        
        StoredItemsIdFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StoredItemsIdFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoredItemsIdFields} obj Optional instance to populate.
     * @return {module:model/StoredItemsIdFields} The populated <code>StoredItemsIdFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoredItemsIdFields();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Boolean');
            }
            if (data.hasOwnProperty('qty')) {
                obj['qty'] = ApiClient.convertToType(data['qty'], 'Boolean');
            }
            if (data.hasOwnProperty('ingredientId')) {
                obj['ingredientId'] = ApiClient.convertToType(data['ingredientId'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} id
 */
StoredItemsIdFields.prototype['id'] = undefined;

/**
 * @member {Boolean} qty
 */
StoredItemsIdFields.prototype['qty'] = undefined;

/**
 * @member {Boolean} ingredientId
 */
StoredItemsIdFields.prototype['ingredientId'] = undefined;






export default StoredItemsIdFields;

