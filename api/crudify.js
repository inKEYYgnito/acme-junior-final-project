const crudify = (app, Model) => {
    app.get('/', (req, res, next) => {
        Model.findAll()
            .then(data => res.send(data))
            .catch(next);
    });

    app.delete('/:id', (req, res, next) => {
        Model.findByPk(req.params.id)
            .then(data => data.destroy())
            .then(() => res.sendStatus(204))
            .catch(next);
    });

    app.put('/:id', (req, res, next) => {
        Model.findByPk(req.params.id)
            .then(data => data.update(req.body))
            .then(data => res.send(data))
            .catch(next);
    });

    app.post('/', (req, res, next) => {
        Model.create(req.body)
            .then(data => res.send(data))
            .catch(next);
    });
}

module.exports = crudify
