const Sequelize=require("sequelize");
const {DataTypes,Op}=Sequelize;



const sequelize=new Sequelize("sequelize_test","root","",{
    dialect:"mysql"
});

//to sync all models at once
sequelize.sync({alter:true})


const User=sequelize.define("user",{
    user_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type:DataTypes.STRING,
        allownull:false,
        validate:{
            len:[4,7]
        }
    },
    password:{
        type:DataTypes.STRING,
    },
    age:{
        type:DataTypes.INTEGER,
        defaultValue:21
    },
    wittCodeRocks:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
},{
    //to create table name as we define above
    freezeTableName:true
});

User.sync({alter:true}).then(async(data)=>{
    console.log("Table and Model synced successfully!");
    // const user=await User.build({username:"alihere",password:"123",age:24,wittCodeRocks:true});
    // return user.save();

    // return User.create({
    //     username:"ahmadhere",
    //     password:"123",
    //     age:12,
    //     wittCodeRocks:false
    // });

    //get all users wit specific fields
    // return User.findAll({
    //     attributes:["username","password"]
    // });

    //EXCLUDE VALUES
    // return User.findAll({attributes:{exclude:["password"]}});

    // return User.findAll({attributes:[[sequelize.fn("Sum",sequelize.col("age")),"howOld"]]});
    // return User.findAll({attributes:[[sequelize.fn("AVG",sequelize.col("age")),"howOld"]]});

    //WHERE CLAUSE
    // return User.findAll({where:{
    //     age:24
    // }})
    // return User.findAll({
    //     attributes:["username"],
    //     where:{
    //         age:24,
    //         username:"alihere"
    //     }
    // });

    //LIMIT CONSTRAINT
    // return User.findAll({limit:2})

    //ORDER BY
    // return User.findAll({order:[["age","DESC"]]});

    //GROUPING

    // return User.findAll({
    //     attributes:["username", [sequelize.fn("SUM",sequelize.col("age")),"sum_age"]],
    //     group:"username"
    // });

    //OPERATORS
    // return User.findAll({
    //     where:{
    //         [Op.or]:{username:"alihere",age:12}
    //     }
    // })
    // return User.findAll({
    //     where:{
    //         [Op.and]:{username:"alihere",age:12}
    //     }
    // })

    // return User.findAll({
    //     where:{
    //         age:{
    //             [Op.gt]:22
    //         }
    //     }
    // })

    // return User.findAll({
    //     where:{
    //         age:{
    //             [Op.or]:{
    //                 [Op.lt]:22,
    //                 [Op.eq]:null
    //             }
    //         }
    //     }
    // })

    //FUNCTIONS
    // return User.findAll({
    //     where:sequelize.where(sequelize.fn("char_length",sequelize.col("username")),7)
    // })

    //UPDATE 
    // return User.update({username:"sadhere"},{
    //     where:{
    //         age:12
    //     }
    // })

    //DELETE
    // return User.destroy({
    //     where:{
    //         username:"sadhere"
    //     }
    // })

    //UTILITY METHODS
    // return User.max("age");
    return User.sum("age",{
        age:22
    });
})
.then(data=>{
    console.log("User added to database!");
    console.log(data);
})
.catch(err=>{
    console.log(err);
});


sequelize.authenticate()
.then(()=>{
    console.log("conncection Successfull");
})
.catch(err=>{
    console.log(err);
})