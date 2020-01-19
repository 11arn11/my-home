# LoopBackApplication.StoredItemControllerApi

All URIs are relative to *https://api.devel.my-home.stage1.ogilvy.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storedItemControllerCount**](StoredItemControllerApi.md#storedItemControllerCount) | **GET** /stored-items/count | 
[**storedItemControllerCreate**](StoredItemControllerApi.md#storedItemControllerCreate) | **POST** /stored-items | 
[**storedItemControllerDeleteById**](StoredItemControllerApi.md#storedItemControllerDeleteById) | **DELETE** /stored-items/{id} | 
[**storedItemControllerFind**](StoredItemControllerApi.md#storedItemControllerFind) | **GET** /stored-items | 
[**storedItemControllerFindById**](StoredItemControllerApi.md#storedItemControllerFindById) | **GET** /stored-items/{id} | 
[**storedItemControllerReplaceById**](StoredItemControllerApi.md#storedItemControllerReplaceById) | **PUT** /stored-items/{id} | 
[**storedItemControllerUpdateAll**](StoredItemControllerApi.md#storedItemControllerUpdateAll) | **PATCH** /stored-items | 
[**storedItemControllerUpdateById**](StoredItemControllerApi.md#storedItemControllerUpdateById) | **PATCH** /stored-items/{id} | 



## storedItemControllerCount

> LoopbackCount storedItemControllerCount(opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.StoredItemControllerApi();
let opts = {
  'where': {key: null} // {String: Object} | 
};
apiInstance.storedItemControllerCount(opts).then((data) => {
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


## storedItemControllerCreate

> StoredItem storedItemControllerCreate(opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.StoredItemControllerApi();
let opts = {
  'newStoredItem': new LoopBackApplication.NewStoredItem() // NewStoredItem | 
};
apiInstance.storedItemControllerCreate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newStoredItem** | [**NewStoredItem**](NewStoredItem.md)|  | [optional] 

### Return type

[**StoredItem**](StoredItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## storedItemControllerDeleteById

> storedItemControllerDeleteById(id)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.StoredItemControllerApi();
let id = 3.4; // Number | 
apiInstance.storedItemControllerDeleteById(id).then(() => {
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


## storedItemControllerFind

> [StoredItemWithRelations] storedItemControllerFind(opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.StoredItemControllerApi();
let opts = {
  'filter': new LoopBackApplication.Filter7() // Filter7 | 
};
apiInstance.storedItemControllerFind(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Filter7**](.md)|  | [optional] 

### Return type

[**[StoredItemWithRelations]**](StoredItemWithRelations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## storedItemControllerFindById

> StoredItemWithRelations storedItemControllerFindById(id, opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.StoredItemControllerApi();
let id = 3.4; // Number | 
let opts = {
  'filter': new LoopBackApplication.Filter6() // Filter6 | 
};
apiInstance.storedItemControllerFindById(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **filter** | [**Filter6**](.md)|  | [optional] 

### Return type

[**StoredItemWithRelations**](StoredItemWithRelations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## storedItemControllerReplaceById

> storedItemControllerReplaceById(id, opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.StoredItemControllerApi();
let id = 3.4; // Number | 
let opts = {
  'storedItem': new LoopBackApplication.StoredItem() // StoredItem | 
};
apiInstance.storedItemControllerReplaceById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **storedItem** | [**StoredItem**](StoredItem.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## storedItemControllerUpdateAll

> LoopbackCount storedItemControllerUpdateAll(opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.StoredItemControllerApi();
let opts = {
  'where': {key: null}, // {String: Object} | 
  'storedItemPartial': new LoopBackApplication.StoredItemPartial() // StoredItemPartial | 
};
apiInstance.storedItemControllerUpdateAll(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**{String: Object}**](Object.md)|  | [optional] 
 **storedItemPartial** | [**StoredItemPartial**](StoredItemPartial.md)|  | [optional] 

### Return type

[**LoopbackCount**](LoopbackCount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## storedItemControllerUpdateById

> storedItemControllerUpdateById(id, opts)



### Example

```javascript
import LoopBackApplication from 'loop_back_application';

let apiInstance = new LoopBackApplication.StoredItemControllerApi();
let id = 3.4; // Number | 
let opts = {
  'storedItemPartial': new LoopBackApplication.StoredItemPartial() // StoredItemPartial | 
};
apiInstance.storedItemControllerUpdateById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **storedItemPartial** | [**StoredItemPartial**](StoredItemPartial.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

