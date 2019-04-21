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
    sigilUrl: {
        type: String
    },
    house: {
        name: {
            type: String
        },
        sigil: {
            type: String
        },
        members: {
            type: [this]
        },
        wikiLink: String
    },
    description: {
        type: String
    },
    picks: {
        ironThrone: {
            type: String
        },
        handOfTheKing: {
            type: String
        },
        nightsWatchLordCommander: {
            type: String
        },
        nightsWatch: {
            type: String
        },
        winterfellLord: {
            type: String
        },
        casterlyRockLord: {
            type: String
        },
        dorneLord: {
            type: String
        },
        reachLord: {
            type: String
        },
        riverrunLord: {
            type: String
        },
        ironIslandsLord: {
            type: String
        },
        wardenNorth: {
            type: String
        },
        wardenEast: {
            type: String
        },
        wardenSouth: {
            type: String
        },
        wardenWest: {
            type: String
        },
        dead: {
            type: [Object]
        },
        unpicked: [Object]
    },
    currentScore: {
        type: Number,
        required: 'Each Player must have a score'
    }
}, { collection: 'users' });
exports.User = mongoose_1.model('User', UserSchema);
//# sourceMappingURL=User.js.map