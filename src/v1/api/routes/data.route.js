import express from "express";

const router = express.Router();

router.get("/data", getData());

function getData() {
  return "data";
}
