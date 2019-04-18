"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var compression_1 = __importDefault(require("compression"));
var body_parser_1 = require("body-parser");
var mongoose_1 = require("mongoose");
var cors_1 = __importDefault(require("cors"));
var dotenv = __importStar(require("dotenv"));
var utils_1 = require("./utils");
var controllers_1 = require("./controllers");
dotenv.config();
var PORT = process.env.PORT || 4000;
var app = express_1.default();
app.use(compression_1.default());
app.use(cors_1.default());
app.use(body_parser_1.json());
app.get('/otherUsers', controllers_1.getOtherUsers);
app.post('/login', controllers_1.postLogin);
app.post('/makepicks', controllers_1.postMakePicks);
app.listen(PORT, function () {
    mongoose_1.connect(process.env.MONGO, utils_1.mongoConfig)
        .then(function () { return console.log("Mongo is connected"); })
        .catch(function (err) { return console.error("Mongo is NOT running - " + err); });
    console.log("The server is running on Port " + PORT);
});
//# sourceMappingURL=server.js.map