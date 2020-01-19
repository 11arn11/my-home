# LoopBackApplication.StoredItemIngredientControllerApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storedItemIngredientControllerGetIngredient**](StoredItemIngredientControllerApi.md#storedItemIngredientControllerGetIngredient) | **GET** /stored-items/{id}/ingredient | 



## storedItemIngredientControllerGetIngredient

> [Ingredient] storedItemIngredientControllerGetIngredient(id)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.StoredItemIngredientControllerApi();
let id = 3.4; // Number | 
apiInstance.storedItemIngredientControllerGetIngredient(id).then((data) => {
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

