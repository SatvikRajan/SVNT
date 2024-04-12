const{register,login} = require("../controllers/UsersControllers")
const router = require('express').Router();
router.post("/register",register)
router.post("/login",login)
module.exports = router;