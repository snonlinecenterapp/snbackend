const express = require("express");
const { createUser, getUser } = require("../Controller/User");
const { createService, getService, deleteService } = require("../Controller/Service");
const { createSubService, getSubService, deleteSubService } = require("../Controller/SubService");
const { createForm, getFormData } = require("../Controller/Form");
const router = express.Router();

router.route("/user").post(createUser).get(getUser);
router.route("/service").post(createService).get(getService).delete(deleteService);
router.route("/subservice").post(createSubService).get(getSubService).delete(deleteSubService);
router.route("/form").post(createForm).get(getFormData);

module.exports = router;
