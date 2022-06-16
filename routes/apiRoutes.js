const router = require("express").Router();
const fs = require('fs');
const util = require("util");
const readFile = util.promisify(fs.readFile);

router.get("/notes",(req, res)=>{
    return readFile("db/db.json");
});

router.post("/notes",(req, res)=>{});

router.delete("/notes",(req, res)=>{});

module.exports = router;