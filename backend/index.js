const express = require("express");
const app = express();
const PORT = 3001;

app.use("/",express.json());

app.get("/",(req,res) => {
    res.send("Node.js monitoring in k8s using grafana and prometheus!");
})

app.listen(PORT,() => {
    console.log(`App listening on port ${PORT}`);
})