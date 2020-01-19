# LoopBackApplication.MealControllerApi

All URIs are relative to *https://api.devel.my-home.stage1.ogilvy.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mealControllerCount**](MealControllerApi.md#mealControllerCount) | **GET** /meals/count | 
[**mealControllerCreate**](MealControllerApi.md#mealControllerCreate) | **POST** /meals | 
[**mealControllerDeleteById**](MealControllerApi.md#mealControllerDeleteById) | **DELETE** /meals/{id} | 
[**mealControllerFind**](MealControllerApi.md#mealControllerFind) | **GET** /meals | 
[**mealControllerFindById**](MealControllerApi.md#mealControllerFindById) | **GET** /meals/{id} | 
[**mealControllerReplaceById**](MealControllerApi.md#mealControllerReplaceById) | **PUT** /meals/{id} | 
[**mealControllerUpdateAll**](MealControllerApi.md#mealControllerUpdateAll) | **PATCH** /meals | 
[**mealControllerUpdateById**](MealControllerApi.md#mealControllerUpdateById) | **PATCH** /meals/{id} | 



## mealControllerCount

> LoopbackCount mealControllerCount(opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.MealControllerApi();
let opts = {
  'where': {key: null} // {String: Object} | 
};
apiInstance.mealControllerCount(opts).then((data) => {
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


## mealControllerCreate

> Meal mealControllerCreate(opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.MealControllerApi();
let opts = {
  'newMeal': new LoopBackApplication.NewMeal() // NewMeal | 
};
apiInstance.mealControllerCreate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newMeal** | [**NewMeal**](NewMeal.md)|  | [optional] 

### Return type

[**Meal**](Meal.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## mealControllerDeleteById

> mealControllerDeleteById(id)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.MealControllerApi();
let id = 3.4; // Number | 
apiInstance.mealControllerDeleteById(id).then(() => {
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


## mealControllerFind

> [MealWithRelations] mealControllerFind(opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.MealControllerApi();
let opts = {
  'filter': new LoopBackApplication.Filter3() // Filter3 | 
};
apiInstance.mealControllerFind(opts).then((data) => {
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

[**[MealWithRelations]**](MealWithRelations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mealControllerFindById

> MealWithRelations mealControllerFindById(id, opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.MealControllerApi();
let id = 3.4; // Number | 
let opts = {
  'filter': new LoopBackApplication.Filter2() // Filter2 | 
};
apiInstance.mealControllerFindById(id, opts).then((data) => {
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

[**MealWithRelations**](MealWithRelations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mealControllerReplaceById

> mealControllerReplaceById(id, opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.MealControllerApi();
let id = 3.4; // Number | 
let opts = {
  'meal': new LoopBackApplication.Meal() // Meal | 
};
apiInstance.mealControllerReplaceById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **meal** | [**Meal**](Meal.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## mealControllerUpdateAll

> LoopbackCount mealControllerUpdateAll(opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.MealControllerApi();
let opts = {
  'where': {key: null}, // {String: Object} | 
  'mealPartial': new LoopBackApplication.MealPartial() // MealPartial | 
};
apiInstance.mealControllerUpdateAll(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**{String: Object}**](Object.md)|  | [optional] 
 **mealPartial** | [**MealPartial**](MealPartial.md)|  | [optional] 

### Return type

[**LoopbackCount**](LoopbackCount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## mealControllerUpdateById

> mealControllerUpdateById(id, opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.MealControllerApi();
let id = 3.4; // Number | 
let opts = {
  'mealPartial': new LoopBackApplication.MealPartial() // MealPartial | 
};
apiInstance.mealControllerUpdateById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **mealPartial** | [**MealPartial**](MealPartial.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

