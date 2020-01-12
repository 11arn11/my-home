# LoopBackApplication.RecipeControllerApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipeControllerCount**](RecipeControllerApi.md#recipeControllerCount) | **GET** /recipes/count | 
[**recipeControllerCreate**](RecipeControllerApi.md#recipeControllerCreate) | **POST** /recipes | 
[**recipeControllerDeleteById**](RecipeControllerApi.md#recipeControllerDeleteById) | **DELETE** /recipes/{id} | 
[**recipeControllerFind**](RecipeControllerApi.md#recipeControllerFind) | **GET** /recipes | 
[**recipeControllerFindById**](RecipeControllerApi.md#recipeControllerFindById) | **GET** /recipes/{id} | 
[**recipeControllerReplaceById**](RecipeControllerApi.md#recipeControllerReplaceById) | **PUT** /recipes/{id} | 
[**recipeControllerUpdateAll**](RecipeControllerApi.md#recipeControllerUpdateAll) | **PATCH** /recipes | 
[**recipeControllerUpdateById**](RecipeControllerApi.md#recipeControllerUpdateById) | **PATCH** /recipes/{id} | 



## recipeControllerCount

> LoopbackCount recipeControllerCount(opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.RecipeControllerApi();
let opts = {
  'where': {key: null} // {String: Object} | 
};
apiInstance.recipeControllerCount(opts).then((data) => {
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


## recipeControllerCreate

> Recipe recipeControllerCreate(opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.RecipeControllerApi();
let opts = {
  'newRecipe': new LoopBackApplication.NewRecipe() // NewRecipe | 
};
apiInstance.recipeControllerCreate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newRecipe** | [**NewRecipe**](NewRecipe.md)|  | [optional] 

### Return type

[**Recipe**](Recipe.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## recipeControllerDeleteById

> recipeControllerDeleteById(id)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.RecipeControllerApi();
let id = 3.4; // Number | 
apiInstance.recipeControllerDeleteById(id).then(() => {
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


## recipeControllerFind

> [RecipeWithRelations] recipeControllerFind(opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.RecipeControllerApi();
let opts = {
  'filter': new LoopBackApplication.Filter3() // Filter3 | 
};
apiInstance.recipeControllerFind(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Filter3**](.md)|  | [optional] 

### Return type

[**[RecipeWithRelations]**](RecipeWithRelations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recipeControllerFindById

> RecipeWithRelations recipeControllerFindById(id, opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.RecipeControllerApi();
let id = 3.4; // Number | 
let opts = {
  'filter': new LoopBackApplication.Filter2() // Filter2 | 
};
apiInstance.recipeControllerFindById(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **filter** | [**Filter2**](.md)|  | [optional] 

### Return type

[**RecipeWithRelations**](RecipeWithRelations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recipeControllerReplaceById

> recipeControllerReplaceById(id, opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.RecipeControllerApi();
let id = 3.4; // Number | 
let opts = {
  'recipe': new LoopBackApplication.Recipe() // Recipe | 
};
apiInstance.recipeControllerReplaceById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **recipe** | [**Recipe**](Recipe.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## recipeControllerUpdateAll

> LoopbackCount recipeControllerUpdateAll(opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.RecipeControllerApi();
let opts = {
  'where': {key: null}, // {String: Object} | 
  'recipePartial': new LoopBackApplication.RecipePartial() // RecipePartial | 
};
apiInstance.recipeControllerUpdateAll(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**{String: Object}**](Object.md)|  | [optional] 
 **recipePartial** | [**RecipePartial**](RecipePartial.md)|  | [optional] 

### Return type

[**LoopbackCount**](LoopbackCount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## recipeControllerUpdateById

> recipeControllerUpdateById(id, opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.RecipeControllerApi();
let id = 3.4; // Number | 
let opts = {
  'recipePartial': new LoopBackApplication.RecipePartial() // RecipePartial | 
};
apiInstance.recipeControllerUpdateById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **recipePartial** | [**RecipePartial**](RecipePartial.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined
