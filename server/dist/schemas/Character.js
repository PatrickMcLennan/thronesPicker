"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var CharacterSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: 'Each character needs a string'
    },
    house: {
        type: String,
        required: 'Each character must belong to a house'
    },
    alive: {
        type: Boolean,
        required: 'Each character must be either alive or dead.'
    },
    placement: {
        type: String
    }
});
exports.Character = mongoose_1.model('Character', CharacterSchema);
//# sourceMappingURL=Character.js.map