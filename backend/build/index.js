import express, { response } from 'express';
// import {Client} from "pg";
import sqlite3 from "sqlite3"
import cors from "cors"
//input few variables to access the database

const filename = "C:\\Users\\andre\\OneDrive\\Documents\\DB\\blog.db"
//connect to database
const conn = new sqlite3.Database(filename)
const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

// path to the hellow world
app.get('/', (req, res) => {
    // response with 'hello world'
    res.send('hello world')
})
// access data 
app.get('/viewdata', (req, res) =>{
        //fetch the data

    const sql = `SELECT * FROM Blog`;
    conn.all(sql, (err, rows) => {
        //if not failed
        if (err){

            return res.status(500).json({error: `Database Query Failed ${err.message}`}) 
        } else {
            return res.status(200).json(rows)
        }
    })
    })

app.get('/blog/:id', (req, res)=>{
    try{ 
        //get the id
        const {id} = req.params
        //get the data

        const sql = `SELECT * FROM Blog WHERE id = ?`

        conn.get(sql, [id] , (err, result)=>{
            //if not failed
            if (err) return res.status(500).json({error: "Database Query Failed"})
            else{
                //if fail
                console.log("Query result:", result)
                return res.status(200).json(result)
            }
        })
    }catch(error){
        // if fail but the program catch it
        console.log("Unexpected error:", error)
        if (!res.headersSent){
            res.status(500).json({error: "Internal server error"})
        }
    }
   
})

// set port to 3000
app.listen(3000, () => {
    console.log("Server is running")
    console.log("\n Open link: http://localhost:3000/")
})