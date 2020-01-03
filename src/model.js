const store = require('./store');

module.exports = {

    getPasto: (id) => {
        return store.pasti[id];
    },
    getPastoProgrammato: (giorno, nome_del_pasto) => {
        const pasto_programmato = store.programmazione[giorno][nome_del_pasto];
        const pasto = module.exports.getPasto(pasto_programmato.id_pasto);
        return {
            ...pasto,
            status: pasto_programmato.status
        }
    }

}