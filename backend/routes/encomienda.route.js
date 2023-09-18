let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// Encomienda Model
let encomiendaSchema = require("../models/Encomienda");

// CREATE Encomienda
router.post("/create-encomienda", (req, res, next) => {
encomiendaSchema.create(req.body, (error, data) => {
	if (error) {
	return next(error);
	} else {
	console.log(data);
	res.json(data);
	}
});
});

// READ Encomiendas
router.get("/", (req, res) => {
encomiendaSchema.find((error, data) => {
	if (error) {
	return next(error);
	} else {
	res.json(data);
	}
});
});

// UPDATE encomienda
router
.route("/update-encomienda/:id")
// Get Single Encomienda
.get((req, res) => {
	encomiendaSchema.findById(
		req.params.id, (error, data) => {
	if (error) {
		return next(error);
	} else {
		res.json(data);
	}
	});
})

// Update Encomienda Data
.put((req, res, next) => {
	encomiendaSchema.findByIdAndUpdate(
	req.params.id,
	{
		$set: req.body,
	},
	(error, data) => {
		if (error) {
		return next(error);
		console.log(error);
		} else {
		res.json(data);
		console.log("Encomienda actualizada correctamente !");
		}
	}
	);
});

// Delete Encomienda
router.delete("/delete-encomienda/:id",
(req, res, next) => {
encomiendaSchema.findByIdAndRemove(
	req.params.id, (error, data) => {
	if (error) {
	return next(error);
	} else {
	res.status(200).json({
		msg: data,
	});
	}
});
});

module.exports = router;
