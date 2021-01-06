const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewProfileSchema = new Schema({
    name: { type: String, required: true },
    countryOfOrigin: { type: String, required: true },
    manufacture: { type: String, required: true },
    postConsumerPer: { type: String, required: true },
    enviroReport: { type: String, required: true },
    isOrganic: { type: Boolean, required: true },
    isPlasticFree: { type: Boolean, required: true }, 
    postConsumer: { type: Boolean, required: true },
    co2: { type: Number, required: true }, 
    endOfLife: { type: Number, required: true },
    materials: { type: Number, required: true },
    ingredients: { type: Number, required: true },
    manufacturing: { type: Number, required: true },
    packaging: { type: Number, required: true },
    transport: { type: Number, required: true },
    use: { type: Number, required: true },
    nutrition: {
        type: [String],
        required: true
    },

    /*longDescription: { type: String, required: true },
    shortDescription: { type: String, required: true },
    lastUpdated: { type: Date, default: Date.now() },
    imageUrl: { type: String, default: '' },
    memberRange: { type: String, required: true },
    acceptingMembers: { type: Boolean, required: true },
    springRecruiting: { type: Boolean, required: true },
    fallRecruiting: { type: Boolean, required: true },
    applicationRequired: { type: Boolean, required: true },
    meetingFrequency: { type: String, required: true },
    socialLinks: {
        facebook: { type: String, default: '' },
        email: { type: String, default: '' },
        website: { type: String, default: '' },
        instagram: { type: String, default: '' },
    },
    tags: {
        type: [String],
        required: true
    },
    highlights: {
        type: [String],
        default: []
    },
    howToJoin: { type: String, default: '' },
    applicationLink: { type: String, default: '' },
    showInstagramFeed: { type: Boolean, required: true },
    similarClubs: {
        type: [Object], default: []
    }*/
});

const reviewProfile = mongoose.model('ReviewProfile', reviewProfileSchema);

module.exports = reviewProfile;
