const { Exemplo,sequelize } = require('../models');
//const { sequelize } = require('../models/index');

module.exports = {

    getOne: async function (req, res) {

        let transaction;

        try {
            // get transaction
            transaction = await sequelize.transaction();

            let item = await Exemplo.findOne({where:{id:req.params.id}}, { transaction });

            // commit
            await transaction.commit();
            res.status(200).send({ res: item });
        } catch (err) {
            console.log(err.message);

            // Rollback transaction only if the transaction object is defined
            if (transaction) await transaction.rollback();

            res.status(500).send({ res: err });
        }

    },

    getAll: async function (req, res) {

        let transaction;

        try {
            // get transaction
            transaction = await sequelize.transaction();

            let item = await Exemplo.findAll({}, { transaction });

            // commit
            await transaction.commit();
            res.status(200).send({ res: item });
        } catch (err) {
            console.log(err.message);

            // Rollback transaction only if the transaction object is defined
            if (transaction) await transaction.rollback();

            res.status(500).send({ res: err });
        }

    }
}