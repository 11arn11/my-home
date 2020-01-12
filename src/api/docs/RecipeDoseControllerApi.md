# LoopBackApplication.RecipeDoseControllerApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipeDoseControllerCreate**](RecipeDoseControllerApi.md#recipeDoseControllerCreate) | **POST** /recipes/{id}/doses | 
[**recipeDoseControllerDelete**](RecipeDoseControllerApi.md#recipeDoseControllerDelete) | **DELETE** /recipes/{id}/doses | 
[**recipeDoseControllerFind**](RecipeDoseControllerApi.md#recipeDoseControllerFind) | **GET** /recipes/{id}/doses | 
[**recipeDoseControllerPatch**](RecipeDoseControllerApi.md#recipeDoseControllerPatch) | **PATCH** /recipes/{id}/doses | 



## recipeDoseControllerCreate

> Dose recipeDoseControllerCreate(id, opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.RecipeDoseControllerApi();
let id = 3.4; // Number | 
let opts = {
  'newDoseInRecipe': new LoopBackApplication.NewDoseInRecipe() // NewDoseInRecipe | 
};
apiInstance.recipeDoseControllerCreate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **newDoseInRecipe** | [**NewDoseInRecipe**](NewDoseInRecipe.md)|  | [optional] 

### Return type

[**Dose**](Dose.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## recipeDoseControllerDelete

> LoopbackCount recipeDoseControllerDelete(id, opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.RecipeDoseControllerApi();
let id = 3.4; // Number | 
let opts = {
  'where': {key: null} // {String: Object} | 
};
apiInstance.recipeDoseControllerDelete(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **where** | [**{String: Object}**](Object.md)|  | [optional] 

### Return type

[**LoopbackCount**](LoopbackCount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recipeDoseControllerFind

> [Dose] recipeDoseControllerFind(id, opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.RecipeDoseControllerApi();
let id = 3.4; // Number | 
let opts = {
  'filter': {key: null} // {String: Object} | 
};
apiInstance.recipeDoseControllerFind(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **filter** | [**{String: Object}**](Object.md)|  | [optional] 

### Return type

[**[Dose]**](Dose.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recipeDoseControllerPatch

> LoopbackCount recipeDoseControllerPatch(id, opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.RecipeDoseControllerApi();
let id = 3.4; // Number | 
let opts = {
  'where': {key: null}, // {String: Object} | 
  'dosePartial': new LoopBackApplication.DosePartial() // DosePartial | 
};
apiInstance.recipeDoseControllerPatch(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **where** | [**{String: Object}**](Object.md)|  | [optional] 
 **dosePartial** | [**DosePartial**](DosePartial.md)|  | [optional] 

### Return type

[**LoopbackCount**](LoopbackCount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

