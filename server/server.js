const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const http=require('http')
const {Server}=require("socket.io")

const connectDB=require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const requestRoutes = require("./routes/requestRoutes");
const responseRoutes = require("./routes/responseRoutes");

dotenv.config();

connectDB();

const app=express();

const server=http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:"*"
    }
})
app.set("io",io);

app.use(cors({
    origin:"http://localhost:5173"
}));

app.use(express.json());

app.get("/",(req,res)=>{

    res.send("Blood AI API Running");

});

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/request",requestRoutes)
app.use("/api/response",responseRoutes)

io.on("connection",(socket)=>{
    console.log("User connected:",socket.id);
    socket.on("disconnect",()=>{
        console.log("Disconnected");
    })
})

const PORT=process.env.PORT || 5000;

server.listen(PORT,()=>{

    console.log(
        `Server running on ${PORT}`
    );

});