import {Sequelize} from 'sequelize'
import sequelize from '../database/sequelize.js'
import order from './order.js'
const user = sequelize.define("user",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

user.hasMany(order)

export default user