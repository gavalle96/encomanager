const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let encomiendaSchema = new Schema({
    _id: {
        type: String
    },
    pesoLb: {
        type: Number
    },
    nombreCliente: {
        type: String
    },
    contenido: {
        type: String
    },
    nota: {
        type: String
    }
    ,
    responsable: {
        type: String
    }
    ,
    link: {
        type: String
    }
}, {
    collection: 'encomiendas'
})

module.exports = mongoose.model('Encomienda', encomiendaSchema)
