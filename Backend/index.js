var express=require("express");
const app= express();
const cors= require("cors");
var bodyparser = require('body-parser')

require("dotenv").config();


const TaskController= require("./Controllers/TaskController")
const ExcelController=require("./Controllers/ExcelController")

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


const PORT= process.env.PORT || 8000;

app.get("/userdisplay",TaskController.UserDisplay)


app.get("/task",TaskController.TaskDisplay)


app.post("/userinsert",TaskController.UserInsert)

app.post("/taskinsert",TaskController.TaskInsert)


app.get("/export", ExcelController.excelExport);


app.listen(PORT, ()=>{
    console.log("App started on Port 8000");
})