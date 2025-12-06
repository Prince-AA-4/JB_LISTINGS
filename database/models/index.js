import Users from "./user.mode";
import Jobs from "./job.model.js";  
import Company from "./company.model.js";


// Create associations

Users.hasMany(Company,
    {foreignKey: 'userId',
        as: 'companies',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
);

Company.belongsTo(Users,{
    foreignKey: 'userId',
    as: 'User'
});



Company.hasMany(Jobs,{
    foreignKey: 'companyId',
    as: 'jobs',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Jobs.belongsTo(Company,{
    foreignKey: 'companyId',
    as:'company'
})