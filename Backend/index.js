var express=require("express");
var mysql=require("mysql2");
const app= express();
const cors= require("cors");
var bodyparser = require('body-parser')
var exceljs= require("exceljs")
require("dotenv").config();
app.use(cors());

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
const db=mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    connectionLimit:2
})

const PORT= process.env.PORT || 8000;

app.get("/userdisplay",(req,res)=>{
    db.query("select * from user",[],(err,result,fields)=>{
        if(err){
            return console.log(err);
        }
        return res.send(result)
    })
})


app.get("/task",(req,res)=>{
    const q= "select * from task"
    db.query(q,(err,data)=>{
        if (err) return res.json(err);
        return res.json(data);
    })  
})


app.post("/userinsert",(req,res)=>{
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
})

app.post("/taskinsert",(req,res)=>{
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
})


app.get("/export", (req, res) => {
    try {
        let workbook = new exceljs.Workbook();

        const sheet1 = workbook.addWorksheet("users");
        sheet1.columns = [
            { header: "Name", key: "name", width: 25 },
            { header: "Email Address", key: "email", width: 25 },
            { header: "Mobile Number", key: "mobile", width: 25 },
        ];

        db.query("select * from user", [], (err, users) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Internal Server Error");
            }

            users.forEach(user => {
                sheet1.addRow({ name: user.name, email: user.email, mobile: user.mobile });
            });

            const sheet2 = workbook.addWorksheet("tasks");
            sheet2.columns = [
                { header: "Name", key: "name", width: 25 },
                { header: "Task Details", key: "task", width: 25 },
                { header: "Status", key: "status", width: 25 },
            ];

            db.query("select * from task", [], (err, tasks) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send("Internal Server Error");
                }

                tasks.forEach(task => {
                    sheet2.addRow({ name: task.name, task: task.task, status: task.status });
                });

                res.setHeader(
                    "Content-Type",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                );
                res.setHeader(
                    "Content-Disposition",
                    "attachment;filename=Taskmanagement.xlsx"
                );

                workbook.xlsx.write(res)
                    .then(() => {
                        res.end();
                    })
                    .catch(err => {
                        console.error(err);
                        res.status(500).send("Internal Server Error");
                    });
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});


app.listen(PORT, ()=>{
    console.log("App started on Port 8000");
})