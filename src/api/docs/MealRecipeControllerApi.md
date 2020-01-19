# LoopBackApplication.MealRecipeControllerApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mealRecipeControllerGetRecipe**](MealRecipeControllerApi.md#mealRecipeControllerGetRecipe) | **GET** /meals/{id}/recipe | 



## mealRecipeControllerGetRecipe

> [Recipe] mealRecipeControllerGetRecipe(id)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.MealRecipeControllerApi();
let id = 3.4; // Number | 
apiInstance.mealRecipeControllerGetRecipe(id).then((data) => {
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

[**[Recipe]**](Recipe.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

