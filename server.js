// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

var reservation = [{
    name: "hannah",
    phoneNumber: "425-698-8808",
    email: "hannahstar@gmail.com",
    uniqueId: 100
}, {
    name: "tyler",
    phoneNumber: "123-456-7890",
    email: "tyler@gmail.com",
    uniqueId: 101
}, {
    name: "andrew",
    phoneNumber: "123-456-7890",
    email: "andrew@gmail.com",
    uniqueId: 102
}, {
    name: "keon",
    phoneNumber: "123-456-7890",
    email: "keon@gmail.com",
    uniqueId: 103
}];


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

app.get("/api/reservations/:reservations", function (req, res) {
    var resChosen = req.params.reservations;

    console.log(resChosen);

    for (var i = 0; i < reservations.length; i++) {
        if (resChosen === reservations[i].routeName) {
            return res.json(reservations[i]);
        }
    }

    return res.json(false);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});