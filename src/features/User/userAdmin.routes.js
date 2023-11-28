import express from "express";
import { getUserAdminDetails } from "./userAdmin.controller.js";
const UserAdminRouter = express.Router();

UserAdminRouter.post("/", getUserAdminDetails);

export default UserAdminRouter;
