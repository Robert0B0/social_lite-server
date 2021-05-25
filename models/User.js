const { model, Schema } = require("mongoose");

const userSchema = new Schema({
	username: String,
	password: String,
	email: String,
	imageUrl: String,
	createdAt: String,
});

module.exports = model("User", userSchema);
