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
            type: [Object]
        },
        wikiLink: String
    },
    description: {
        type: String
    },
    picks: {
        ironThrone: {
            type: Object
        },
        handOfTheKing: {
            type: Object
        },
        nightsWatchLordCommander: {
            type: Object
        },
        nightsWatch: {
            type: Object
        },
        winterfellLord: {
            type: Object
        },
        casterlyRockLord: {
            type: Object
        },
        dorneLord: {
            type: Object
        },
        reachLord: {
            type: Object
        },
        riverrunLord: {
            type: Object
        },
        ironIslandsLord: {
            type: Object
        },
        wardenNorth: {
            type: Object
        },
        wardenEast: {
            type: Object
        },
        wardenSouth: {
            type: Object
        },
        wardenWest: {
            type: Object
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