var exceljs= require("exceljs")
var db=require("../Mysql");


const excelExport=async(req,res)=>{
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
}

module.exports={
    excelExport,
}