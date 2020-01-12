# LoopBackApplication.IngredientControllerApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ingredientControllerCount**](IngredientControllerApi.md#ingredientControllerCount) | **GET** /ingredients/count | 
[**ingredientControllerCreate**](IngredientControllerApi.md#ingredientControllerCreate) | **POST** /ingredients | 
[**ingredientControllerDeleteById**](IngredientControllerApi.md#ingredientControllerDeleteById) | **DELETE** /ingredients/{id} | 
[**ingredientControllerFind**](IngredientControllerApi.md#ingredientControllerFind) | **GET** /ingredients | 
[**ingredientControllerFindById**](IngredientControllerApi.md#ingredientControllerFindById) | **GET** /ingredients/{id} | 
[**ingredientControllerReplaceById**](IngredientControllerApi.md#ingredientControllerReplaceById) | **PUT** /ingredients/{id} | 
[**ingredientControllerUpdateAll**](IngredientControllerApi.md#ingredientControllerUpdateAll) | **PATCH** /ingredients | 
[**ingredientControllerUpdateById**](IngredientControllerApi.md#ingredientControllerUpdateById) | **PATCH** /ingredients/{id} | 



## ingredientControllerCount

> LoopbackCount ingredientControllerCount(opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.IngredientControllerApi();
let opts = {
  'where': {key: null} // {String: Object} | 
};
apiInstance.ingredientControllerCount(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**{String: Object}**](Object.md)|  | [optional] 

### Return type

[**LoopbackCount**](LoopbackCount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ingredientControllerCreate

> Ingredient ingredientControllerCreate(opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.IngredientControllerApi();
let opts = {
  'newIngredient': new LoopBackApplication.NewIngredient() // NewIngredient | 
};
apiInstance.ingredientControllerCreate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newIngredient** | [**NewIngredient**](NewIngredient.md)|  | [optional] 

### Return type

[**Ingredient**](Ingredient.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ingredientControllerDeleteById

> ingredientControllerDeleteById(id)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.IngredientControllerApi();
let id = 3.4; // Number | 
apiInstance.ingredientControllerDeleteById(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## ingredientControllerFind

> [IngredientWithRelations] ingredientControllerFind(opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.IngredientControllerApi();
let opts = {
  'filter': new LoopBackApplication.Filter1() // Filter1 | 
};
apiInstance.ingredientControllerFind(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Filter1**](.md)|  | [optional] 

### Return type

[**[IngredientWithRelations]**](IngredientWithRelations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ingredientControllerFindById

> IngredientWithRelations ingredientControllerFindById(id, opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.IngredientControllerApi();
let id = 3.4; // Number | 
let opts = {
  'filter': new LoopBackApplication.Filter() // Filter | 
};
apiInstance.ingredientControllerFindById(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **filter** | [**Filter**](.md)|  | [optional] 

### Return type

[**IngredientWithRelations**](IngredientWithRelations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ingredientControllerReplaceById

> ingredientControllerReplaceById(id, opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.IngredientControllerApi();
let id = 3.4; // Number | 
let opts = {
  'ingredient': new LoopBackApplication.Ingredient() // Ingredient | 
};
apiInstance.ingredientControllerReplaceById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **ingredient** | [**Ingredient**](Ingredient.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## ingredientControllerUpdateAll

> LoopbackCount ingredientControllerUpdateAll(opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.IngredientControllerApi();
let opts = {
  'where': {key: null}, // {String: Object} | 
  'ingredientPartial': new LoopBackApplication.IngredientPartial() // IngredientPartial | 
};
apiInstance.ingredientControllerUpdateAll(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**{String: Object}**](Object.md)|  | [optional] 
 **ingredientPartial** | [**IngredientPartial**](IngredientPartial.md)|  | [optional] 

### Return type

[**LoopbackCount**](LoopbackCount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ingredientControllerUpdateById

> ingredientControllerUpdateById(id, opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.IngredientControllerApi();
let id = 3.4; // Number | 
let opts = {
  'ingredientPartial': new LoopBackApplication.IngredientPartial() // IngredientPartial | 
};
apiInstance.ingredientControllerUpdateById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **ingredientPartial** | [**IngredientPartial**](IngredientPartial.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

