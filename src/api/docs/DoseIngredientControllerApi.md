# LoopBackApplication.DoseIngredientControllerApi

All URIs are relative to *https://api.devel.my-home.stage1.ogilvy.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**doseIngredientControllerGetIngredient**](DoseIngredientControllerApi.md#doseIngredientControllerGetIngredient) | **GET** /doses/{id}/ingredient | 



## doseIngredientControllerGetIngredient

> [Ingredient] doseIngredientControllerGetIngredient(id)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.DoseIngredientControllerApi();
let id = 3.4; // Number | 
apiInstance.doseIngredientControllerGetIngredient(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**[Ingredient]**](Ingredient.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

