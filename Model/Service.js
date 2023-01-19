const mongoose = require("mongoose")


const service = mongoose.Schema({
    name: {
        type: String
    },
    icon: {
        type: String
    }
})

module.exports = mongoose.model("service", service)