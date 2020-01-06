module.exports = {
    listaSpesa: {
        'pesce_spada': 0,
        'radicchio': 0,
        'scalogno': 0,
        'branzino': 0,
        'olive': 0,
        'caviale': 0
    },
    ingredienti: {
        'pesce_spada':{
            'name': 'Pesce spada'
        },
        'farina_cocco':{
            'name': 'Farina di cocco'
        },
    },
    dispensa: {
        'pesce_spada': 0,
        'radicchio': 0,
        'scalogno': 0,
        'branzino': 0,
        'olive': 0,
        'caviale': 0,
        'pasta': 700,
        'melanzana': 1400,
        'pomodoro': 1000,
        'tonno': 500,
        'porro': 300,
        'mozzarella': 200,
        'cipolla': 400,
        'aglio': 30
    },
    ricette: {
        1: {
            'main': 'Pesce spada',
            'secondary' : 'pasta, melanzane e pomodori',
            'ingredients': {
                'pesce_spada': 300,
                'pasta': 125,
                'melanzana': 300,
                'pomodoro': 500,
            }
        },
        2: {
            'main': 'Tonno',
            'secondary' : 'pasta e porri',
            'ingredients': {
                'tonno': 300,
                'pasta': 125,
                'porro': 150,
            }
        },
        3: {
            'main': 'Mozzarella',
            'secondary': 'Pane, insalata, pomodori, cipolla',
            'ingredients': {
                'mozzarella': 200,
                'pane': 125,
                'pomodoro': 500,
                'cipolla': 100,
            }
        },
        4: {
            'main': 'Pollo',
            'secondary': 'Riso, cipolla, curry',
            'ingredients': {
                'pollo': 250,
                'riso': 125,
                'cipolla': 100,
            }
        },
        5: {
            'main': 'Zucca',
            'secondary': 'Riso, cipolla, farina di cocco, curry, curcuma, pepe, aglio',
            'ingredients': {
                'zucca': 500,
                'riso': 125,
                'cipolla': 100,
                'farina_cocco': 1,
                'curry': 1,
                'curcuma': 1,
                'pepe': 1,
                'aglio': 3,
            }
        }
    },
    programmazione: {
        '2019-12-28': {
            'pranzo': {
                'id_pasto': 1,
                'status' : true
            },
            'cena': {
                'id_pasto': 2,
                'status' : true
            },
        },
        '2019-12-29': {
            'pranzo': {
                'id_pasto': 3,
                'status' : true
            },
            'cena': {
                'id_pasto': 4,
                'status' : true
            },
        },
        '2019-12-30': {
            'pranzo': {
                'id_pasto': 5,
                'status' : true
            },
            'cena': {
                'id_pasto': 1,
                'status' : true
            },
        },
        '2019-12-31': {
            'pranzo': {
                'id_pasto': 2,
                'status' : true
            },
            'cena': {
                'id_pasto': 3,
                'status' : true
            },
        },
        '2020-01-01': {
            'pranzo': {
                'id_pasto': 4,
                'status' : true
            },
            'cena': {
                'id_pasto': 5,
                'status' : true
            },
        },
        '2020-01-02': {
            'pranzo': {
                'id_pasto': 1,
                'status' : true
            },
            'cena': {
                'id_pasto': 2,
                'status' : true
            },
        },
        '2020-01-03': {
            'pranzo': {
                'id_pasto': 3,
                'status' : true
            },
            'cena': {
                'id_pasto': 4,
                'status' : false
            },
        },
        '2020-01-04': {
            'pranzo': {
                'id_pasto': 5,
                'status' : true
            },
            'cena': {
                'id_pasto': 1,
                'status' : true
            },
        },
        '2020-01-05': {
            'pranzo': {
                'id_pasto': 2,
                'status' : true
            },
            'cena': {
                'id_pasto': 3,
                'status' : true
            },
        },
        '2020-01-06': {
            'pranzo': {
                'id_pasto': 4,
                'status' : true
            },
            'cena': {
                'id_pasto': 5,
                'status' : true
            },
        },
        '2020-01-07': {
            'pranzo': {
                'id_pasto': 1,
                'status' : true
            },
            'cena': {
                'id_pasto': 2,
                'status' : true
            }
        },
        '2020-01-08': {
            'cena': {
                'id_pasto': 1,
                'status' : true
            }
        },
        '2020-01-09': {
            'pranzo': {
                'id_pasto': 1,
                'status' : true
            },
            'cena': {
                'id_pasto': 2,
                'status' : true
            }
        }
    }
}