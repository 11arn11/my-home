# loop_back_application

LoopBackApplication - JavaScript client for loop_back_application
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install loop_back_application --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your loop_back_application from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var LoopBackApplication = require('loop_back_application');


var api = new LoopBackApplication.DoseIngredientControllerApi()
var id = 3.4; // {Number} 
api.doseIngredientControllerGetIngredient(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:3000*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*LoopBackApplication.DoseIngredientControllerApi* | [**doseIngredientControllerGetIngredient**](docs/DoseIngredientControllerApi.md#doseIngredientControllerGetIngredient) | **GET** /doses/{id}/ingredient | 
*LoopBackApplication.IngredientControllerApi* | [**ingredientControllerCount**](docs/IngredientControllerApi.md#ingredientControllerCount) | **GET** /ingredients/count | 
*LoopBackApplication.IngredientControllerApi* | [**ingredientControllerCreate**](docs/IngredientControllerApi.md#ingredientControllerCreate) | **POST** /ingredients | 
*LoopBackApplication.IngredientControllerApi* | [**ingredientControllerDeleteById**](docs/IngredientControllerApi.md#ingredientControllerDeleteById) | **DELETE** /ingredients/{id} | 
*LoopBackApplication.IngredientControllerApi* | [**ingredientControllerFind**](docs/IngredientControllerApi.md#ingredientControllerFind) | **GET** /ingredients | 
*LoopBackApplication.IngredientControllerApi* | [**ingredientControllerFindById**](docs/IngredientControllerApi.md#ingredientControllerFindById) | **GET** /ingredients/{id} | 
*LoopBackApplication.IngredientControllerApi* | [**ingredientControllerReplaceById**](docs/IngredientControllerApi.md#ingredientControllerReplaceById) | **PUT** /ingredients/{id} | 
*LoopBackApplication.IngredientControllerApi* | [**ingredientControllerUpdateAll**](docs/IngredientControllerApi.md#ingredientControllerUpdateAll) | **PATCH** /ingredients | 
*LoopBackApplication.IngredientControllerApi* | [**ingredientControllerUpdateById**](docs/IngredientControllerApi.md#ingredientControllerUpdateById) | **PATCH** /ingredients/{id} | 
*LoopBackApplication.PingControllerApi* | [**pingControllerPing**](docs/PingControllerApi.md#pingControllerPing) | **GET** /ping | 
*LoopBackApplication.RecipeControllerApi* | [**recipeControllerCount**](docs/RecipeControllerApi.md#recipeControllerCount) | **GET** /recipes/count | 
*LoopBackApplication.RecipeControllerApi* | [**recipeControllerCreate**](docs/RecipeControllerApi.md#recipeControllerCreate) | **POST** /recipes | 
*LoopBackApplication.RecipeControllerApi* | [**recipeControllerDeleteById**](docs/RecipeControllerApi.md#recipeControllerDeleteById) | **DELETE** /recipes/{id} | 
*LoopBackApplication.RecipeControllerApi* | [**recipeControllerFind**](docs/RecipeControllerApi.md#recipeControllerFind) | **GET** /recipes | 
*LoopBackApplication.RecipeControllerApi* | [**recipeControllerFindById**](docs/RecipeControllerApi.md#recipeControllerFindById) | **GET** /recipes/{id} | 
*LoopBackApplication.RecipeControllerApi* | [**recipeControllerReplaceById**](docs/RecipeControllerApi.md#recipeControllerReplaceById) | **PUT** /recipes/{id} | 
*LoopBackApplication.RecipeControllerApi* | [**recipeControllerUpdateAll**](docs/RecipeControllerApi.md#recipeControllerUpdateAll) | **PATCH** /recipes | 
*LoopBackApplication.RecipeControllerApi* | [**recipeControllerUpdateById**](docs/RecipeControllerApi.md#recipeControllerUpdateById) | **PATCH** /recipes/{id} | 
*LoopBackApplication.RecipeDoseControllerApi* | [**recipeDoseControllerCreate**](docs/RecipeDoseControllerApi.md#recipeDoseControllerCreate) | **POST** /recipes/{id}/doses | 
*LoopBackApplication.RecipeDoseControllerApi* | [**recipeDoseControllerDelete**](docs/RecipeDoseControllerApi.md#recipeDoseControllerDelete) | **DELETE** /recipes/{id}/doses | 
*LoopBackApplication.RecipeDoseControllerApi* | [**recipeDoseControllerFind**](docs/RecipeDoseControllerApi.md#recipeDoseControllerFind) | **GET** /recipes/{id}/doses | 
*LoopBackApplication.RecipeDoseControllerApi* | [**recipeDoseControllerPatch**](docs/RecipeDoseControllerApi.md#recipeDoseControllerPatch) | **PATCH** /recipes/{id}/doses | 


## Documentation for Models

 - [LoopBackApplication.Dose](docs/Dose.md)
 - [LoopBackApplication.DosePartial](docs/DosePartial.md)
 - [LoopBackApplication.DoseWithRelations](docs/DoseWithRelations.md)
 - [LoopBackApplication.Filter](docs/Filter.md)
 - [LoopBackApplication.Filter1](docs/Filter1.md)
 - [LoopBackApplication.Filter2](docs/Filter2.md)
 - [LoopBackApplication.Filter3](docs/Filter3.md)
 - [LoopBackApplication.Ingredient](docs/Ingredient.md)
 - [LoopBackApplication.IngredientPartial](docs/IngredientPartial.md)
 - [LoopBackApplication.IngredientWithRelations](docs/IngredientWithRelations.md)
 - [LoopBackApplication.IngredientsIdFields](docs/IngredientsIdFields.md)
 - [LoopBackApplication.InlineResponse200](docs/InlineResponse200.md)
 - [LoopBackApplication.LoopbackCount](docs/LoopbackCount.md)
 - [LoopBackApplication.NewDoseInRecipe](docs/NewDoseInRecipe.md)
 - [LoopBackApplication.NewIngredient](docs/NewIngredient.md)
 - [LoopBackApplication.NewRecipe](docs/NewRecipe.md)
 - [LoopBackApplication.Recipe](docs/Recipe.md)
 - [LoopBackApplication.RecipePartial](docs/RecipePartial.md)
 - [LoopBackApplication.RecipeWithRelations](docs/RecipeWithRelations.md)
 - [LoopBackApplication.RecipesIdFields](docs/RecipesIdFields.md)
 - [LoopBackApplication.RecipesIdInclude](docs/RecipesIdInclude.md)
 - [LoopBackApplication.RecipesIdScope](docs/RecipesIdScope.md)


## Documentation for Authorization

All endpoints do not require authorization.