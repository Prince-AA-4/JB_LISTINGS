import { DataTypes } from "sequelize";
import sequelize from "../../config/dbConfig.js";

const Users = sequelize.define('User',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fullName:{
        type:DataTypes.STRING,
        allowNull: false
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull: false
    },
    contact:{
        type:DataTypes.STRING,
        allowNull: true
    },

    role:{
        type: DataTypes.ENUM('admin', 'employer','applicant'),
        allowNull: false,
    }
})



export default Users;