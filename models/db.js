const mongoose = require('mongoose');

mongoose
    .connect("mongodb+srv://ndoh:171191Yannickndohjules@cluster0.gb05j.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err)); 

require('../models/employee.model'); 