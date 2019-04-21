"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Character_1 = require("./Character");
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
            type: [Character_1.Character]
        },
        wikiLink: String
    },
    description: {
        type: String
    },
    picks: {
        ironThrone: {
            type: Character_1.Character
        },
        handOfTheKing: {
            type: Character_1.Character
        },
        nightsWatchLordCommander: {
            type: Character_1.Character
        },
        nightsWatch: {
            type: Character_1.Character
        },
        winterfellLord: {
            type: Character_1.Character
        },
        casterlyRockLord: {
            type: Character_1.Character
        },
        dorneLord: {
            type: Character_1.Character
        },
        reachLord: {
            type: Character_1.Character
        },
        riverrunLord: {
            type: Character_1.Character
        },
        ironIslandsLord: {
            type: Character_1.Character
        },
        wardenNorth: {
            type: Character_1.Character
        },
        wardenEast: {
            type: Character_1.Character
        },
        wardenSouth: {
            type: Character_1.Character
        },
        wardenWest: {
            type: Character_1.Character
        },
        dead: {
            type: [Character_1.Character]
        },
        unpicked: [Character_1.Character]
    },
    currentScore: {
        type: Number,
        required: 'Each Player must have a score'
    }
}, { collection: 'users' });
exports.User = mongoose_1.model('User', UserSchema);
//# sourceMappingURL=User.js.map