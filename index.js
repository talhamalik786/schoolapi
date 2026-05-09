const express = require('express');
const app = express();


const schoolRoutes = require("./Routes/schoolRoutes")
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("talha malik")
})

app.use("/schoolapi",schoolRoutes)

const PORT = 3000;

app.listen(PORT, () => {   
      console.log(`Server running at port ${PORT}`);
});