import {Sequelize} from "sequelize"
import sequelize from "../database/sequelize.js"

const order = sequelize.define("order", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
    },
    total: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})

export default order