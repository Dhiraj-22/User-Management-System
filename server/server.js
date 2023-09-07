import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express()
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Dhiraj22@",
    database: "crud"
});

db.connect(function(err){
    if(err){
        console.log('Error connecting...',err.message);
        return;
    }

    console.log('Database connected');
})

app.get('/',(req,res) => {
    const sql = "SELECT * FROM users";
    db.query(sql,(err,result) => {
        if(err)
            return res.json({Message: "Error inside server",err})
        return res.json(result);
    })
})

app.post('/create',(req,res) => {
    console.log("create api triggered: ",req.body.email);
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    const values = [req.body.name, req.body.email];

    db.query(sql, values, (err, result) => {
    if (err) return res.json({ err });
    return res.json(result);
    });

})

app.put('/update/:id',(req,res) => {
    //console.log(req.body.email);
    const sql = 'UPDATE users set `name` = ? , `email` = ? where id = ? ';
    const values = [req.body.name, req.body.email];

    const id = req.params.id;

    db.query(sql, [...values,id], (err, result) => {
    if (err) return res.json({ err });
    return res.json(result);
    });
})

app.delete('/student/:id',(req,res) => {
    //console.log(req.body.email);
    const sql = "DELETE FROM users where `id` = ?"

    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
    if (err) return res.json({ err });
    return res.json(result);
    });
})



app.listen(8080,() => {
    console.log('Server is running...');
})
