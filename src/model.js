const store = require('./store');

module.exports = {

    getAlimento: (name) => {
        return store.dispensa[name] || 0;
    },
    getPasto: (id) => {
        return store.pasti[id];
    },
    getPastoProgrammato: (giorno, nome_del_pasto) => {
        const pasto_programmato = store.programmazione[giorno][nome_del_pasto];
        const pasto = module.exports.getPasto(pasto_programmato.id_pasto);

        let status = true;
        const missing = {}
        for (const ingredient in pasto.ingredients) {
            const qta_richiesta = pasto.ingredients[ingredient]
            const qta_disponibile = module.exports.getAlimento(ingredient)
            if (qta_disponibile < qta_richiesta) {
                missing[ingredient] = qta_richiesta - qta_disponibile
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
    }

}