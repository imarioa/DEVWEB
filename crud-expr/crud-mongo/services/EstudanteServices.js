const EstudanteModel = require('../models/EstudanteModels');

class EstudanteService {
    //retorna um objeto que representa um User
    static register(req, res) {
        EstudanteModel.create(req.body).then(
            (user) => {
                res.status(201).json(user);
            }
        )
            .catch(
                (error) => {
                    res.status(500).json(error);
                }
            )
    }
    //retorna um vetor de users
    static list(req, res) {
        EstudanteModel.find().then(
            (users) => {
                res.status(201).json(users);
            }
        )
            .catch(
                (error) => {
                    res.status(500).json(error);
                }
            )
    }
    static update(req, res) {
        EstudanteModel.findByIdAndUpdate(req.params.id, req.body, { 'new': true }).then(
            (user) => {
                res.status(201).json(user);
            }
        );
    }
    //retorna o user deletado
    static delete(req, res) {
        EstudanteModel.findByIdAndRemove(req.params.id).then(
            (user) => {
                res.status(201).json(user);
            }
        );
    }
    //retorna um user
    static retrieve(req, res) {
        EstudanteModel.findById(req.params.id).then(
            (user) => {
                res.status(201).json(user);
            }
        );
    }
}
module.exports = EstudanteService;