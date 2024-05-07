const db= require("../Mysql")


const TaskInsert= async(req,res)=>{
    try {

        const q="INSERT INTO `task`.`task` ( `name`, `task`, `status`) VALUES (?)";
        const values=[
            req.body.name,
            req.body.task,
            req.body.status,
        ];
        db.query(q,[values],(err,data)=>{
            if (err) return res.json(err);
            return res.json("Task has been created");
        })
        
    } catch (error) {
        console.log(error)
    }
}

const UserInsert= async(req,res)=>{
    try {
        const q="INSERT INTO `task`.`user` ( `name`, `email`, `mobile`) VALUES (?)";
        const values=[
            req.body.name,
            req.body.email,
            req.body.mobile,
        ];
        db.query(q,[values],(err,data)=>{
            if (err) return res.json(err);
            return res.json("User has been created");
        })
        
    } catch (error) {
        console.log(error)
    }
}



const UserDisplay= async(req,res)=>{
    try {
        db.query("select * from user",[],(err,result,fields)=>{
            if(err){
                return console.log(err);
            }
            return res.send(result)
        })      
    } catch (error) {
        console.log(error)
    }
}


const TaskDisplay= async(req,res)=>{
    try {
        const q= "select * from task"
    db.query(q,(err,data)=>{
        if (err) return res.json(err);
        return res.json(data);
    })  
 
    } catch (error) {
        console.log(error)
    }
}



module.exports={
    TaskInsert,
    UserInsert,
    TaskDisplay,
    UserDisplay,
}