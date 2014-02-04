var path = require("path");

module.exports = {
    id: "meteor",
    name: "Meteor",

    detector: path.resolve(__dirname, "detector.sh"),
    runner: [
        {
            name: "meteor run",
            id: "run",
            script: path.resolve(__dirname, "run.sh")
        },
        {
            name: "meteorite update",
            id: "update",
            script: path.resolve(__dirname, "mrt_update.sh")
        },
    ],

    ignoreRules: [
        "node_modules",
        ".meteor",
    ]
};
