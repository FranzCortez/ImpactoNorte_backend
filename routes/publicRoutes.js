import express from "express";

const router = express.Router();

// public
router.post('/', (req, res) => {
    console.log("hola123")
});

export default router;