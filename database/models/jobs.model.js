import { DataTypes } from "sequelize";
import sequelize from "../../config/dbConfig.js";

const Jobs = sequelize.define('Job',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull:FontFaceSetLoadEvent,
        
    },
    description:{
        type:DataTypes.TEXT,
        allowNull: false
    },
    companyId:{
        type:DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: "Company",
            key: "id"
        }
    },
    jobType:{
        type:DataTypes.ENUM('Full-Time', 'Part-Time','Internship'),
        allowNull: false
    },
    location:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type: DataTypes.ENUM('active', 'closed'),
        allowNull: false,
        defaultValue: 'active'
    },
    salary:{
        type:DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: 'Competitive'
    },
    deadline:{
        type:DataTypes.DATEONLY,
        allowNull: true
    }
})


export default Jobs;