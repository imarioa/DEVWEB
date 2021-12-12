var mongoose = require('mongoose');

var EstudanteSchema = mongoose.Schema(
    {
        nome: { type: String, required: true, max: 100 },
        curso: { type: String, required: true, max: 100 },
        IRA: { type: Number, required: true}
    }
);

var EstudanteModel = mongoose.model('estudantes', EstudanteSchema);

module.exports = EstudanteModel;