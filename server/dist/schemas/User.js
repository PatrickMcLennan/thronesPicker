"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: 'A users name must be provided'
    },
    facebookId: {
        type: String,
        required: 'A user must have a Facebook ID'
    },
    profilePic: {
        type: String,
        required: 'A user must have a link to a profile picture'
    },
    currentScore: {
        type: Number,
        required: 'Each Player must have a score'
    }
}, { collection: 'users' });
exports.User = mongoose_1.model('User', UserSchema);
//# sourceMappingURL=User.js.map