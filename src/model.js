const sdk = require('./api/src')

const mealApi = new sdk.MealControllerApi()
const recipeApi = new sdk.RecipeControllerApi()
const ingredientApi = new sdk.IngredientControllerApi()
const storedItemApi = new sdk.StoredItemControllerApi()

const recipeDoseApi = new sdk.RecipeDoseControllerApi()

const moment = require('moment')

const store = require('./store')

module.exports = {

    getIngredienti: () => {
        return ingredientApi.ingredientControllerFind()
    },
    addIngredienteRicetta: (recipeId, ingredientId) => {
        return recipeDoseApi.recipeDoseControllerCreate(recipeId, { newDoseInRecipe: {ingredientId, qty: 0} })
    },

    getRicette: () => {
        return recipeApi.recipeControllerFind()
    },
    getRicetta: (id) => {
        const opts = {
            filter: JSON.stringify({
                include: [
                  {
                    relation: 'doses',
                    scope: {
                      include: [{relation: 'ingredient'}],
                    },
                  },
                ],
              })
        }
        return recipeApi.recipeControllerFindById(id, opts)
    },
    saveRicetta: (id, {name, main, secondary}) => {
        if (id) {
            return recipeApi.recipeControllerUpdateById(id, { recipePartial: { name, main, secondary } })
        } else {
            return recipeApi.recipeControllerCreate({ newRecipe: {name, main, secondary} })
        }
    },

    getProgrammazione: (length = 14) => {
        const opts = {
            filter: JSON.stringify({
                include: [
                  {
                    relation: 'recipe',
                  },
                ],
              })
        }
        return mealApi.mealControllerFind(opts)
            .then((items) => {
                console.log('getProgrammazione', items)
                const start = moment().subtract(1, 'd');
                const scheduled_meals = []
                for (let k=1; k<length; k++) {

                    let currDate = start.add(1, 'd').format("YYYY-MM-DD")
                    console.log('currDate', currDate)

                    let lunch = items.filter( ({date, occasion}) => moment(date).format("YYYY-MM-DD") === currDate && occasion === 'lunch')
                    lunch = !lunch[0] 
                        ?  { date: currDate, occasion: 'lunch' }
                        : lunch[0]
                    console.log('lunch', lunch)

                        let dinner = items.filter( ({date, occasion}) => moment(date).format("YYYY-MM-DD") === currDate && occasion === 'dinner')
                    dinner = !dinner[0] 
                        ?  { date: currDate, occasion: 'dinner' }
                        : dinner[0]
                    console.log('dinner', dinner)

                    scheduled_meals.push({
                        date: currDate,
                        pranzo: lunch,
                        cena: dinner
                    })
                }
                return scheduled_meals
            })
    },
    addProgrammazione: (date, occasion, recipeId) => {
        return mealApi.mealControllerCreate({newMeal: {
            date, occasion, recipeId
        }})
    },

    getDispensa: () => {
        const opts = {
            filter: JSON.stringify({
                include: [
                  {
                    relation: 'ingredient',
                  },
                ],
              })
        }
        return storedItemApi.storedItemControllerFind(opts)
    },
    updateDispensa: (id, qty) => {
        return storedItemApi.storedItemControllerUpdateById(id, {
            storedItemPartial: {qty: Number(qty)} 
        })
    },
    addDispensa: (ingredientId, qty) => {
        console.log('addDispensa', ingredientId, qty)
        return storedItemApi.storedItemControllerCreate({newStoredItem: {ingredientId, qty: Number(qty)} })
    },

    getListaSpesa: () => {
        return store.listaSpesa
    },


    getIngrediente: (name) => {
        return store.ingredienti[name] || { name: name }
    },
    getIngredienteDispensa: (name) => {
        return store.dispensa[name] || 0
    },
    getPasto: (id) => {
        return store.ricette[id]
    },
    getMenuSettimana: (begin, length = 21) => {
        const start = moment().subtract(7, 'd');
        const days = []
        for (let k=1; k<length; k++){
            days.push(start.add(1, 'd').format("YYYY-MM-DD"))
        }
        return days
    },
    getPastoProgrammato: (giorno, nome_del_pasto) => {

        if (!store.programmazione[giorno] || !store.programmazione[giorno][nome_del_pasto]){
            return null
        }

        const pasto_programmato = store.programmazione[giorno][nome_del_pasto]
        const pasto = module.exports.getPasto(pasto_programmato.id_ricetta)

        let status = true
        const missing = {}
        for (const ingredient in pasto.ingredients) {
            const qta_richiesta = pasto.ingredients[ingredient]
            const qta_disponibile = module.exports.getIngredienteDispensa(ingredient)
            if (qta_disponibile < qta_richiesta) {
                missing[ingredient] = {
                    name: module.exports.getIngrediente(ingredient).name,
                    qta: qta_richiesta - qta_disponibile
                }
                status = false
                /*
                console.log(pasto.main)
                console.log('ingredient', ingredient)
                console.log('qta_richiesta', qta_richiesta)
                console.log('qta_disponibile', qta_disponibile)
                console.log('manca ' + missing[ingredient] + ' di ' + ingredient)
                */
            }
        }

        return {
            ...pasto,
            id_ricetta: pasto_programmato.id_ricetta,
            status: status,
            missing: missing
        }
    },
    getProssimoPastoProgrammato: () => {
        const nowDateString = moment().format("YYYY-MM-DD")
        for (const giorno in store.programmazione){
          if (nowDateString === giorno) {
            return giorno
          }
        if (nowDateString < giorno) {
            return giorno
          }
        }
    }
    
}