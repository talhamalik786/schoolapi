const express = require('express');
const app = express();

app.set("trust proxy", 1);
const schoolRoutes = require("./Routes/schoolRoutes")
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("talha malik")
})

app.use("/schoolapi",schoolRoutes)

const PORT =  process.env.PORT||3000;

app.listen(PORT, () => {   
      console.log(`Server running at port ${PORT}`);
});