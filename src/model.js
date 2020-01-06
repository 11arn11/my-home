const moment = require('moment')

const store = require('./store')

module.exports = {

    getListaSpesa: () => {
        return store.listaSpesa
    },
    getDispensa: () => {
        return store.dispensa
    },
    getProgrammazione: () => {
        return store.programmazione
    },
    getIngrediente: (name) => {
        return store.ingredienti[name] || { name: name }
    },
    getIngredienteDispensa: (name) => {
        return store.dispensa[name] || 0
    },
    getPasto: (id) => {
        return store.pasti[id]
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
        const pasto = module.exports.getPasto(pasto_programmato.id_pasto)

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