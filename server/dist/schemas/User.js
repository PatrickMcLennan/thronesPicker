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
    house: {
        type: String,
        required: 'Each user must swear allegiance to a House name.'
    },
    description: {
        type: String
    },
    currentScore: {
        type: Number,
        required: 'Each Player must have a score'
    }
});
exports.User = mongoose_1.model('User', UserSchema);
//# sourceMappingURL=User.js.map