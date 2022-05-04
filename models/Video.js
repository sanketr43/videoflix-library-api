const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    videoId: { type: String, required: true },
    title: { type: String, required: true },
    description:  { type: String, required: true },
    videoThumbnail:  { type: String, required: true },
    channelTitle:  { type: String, required: true },
    channelLogo:  { type: String, required: true },
    category:  { type: String, required: true }
},{ timestamps: true});

module.exports = mongoose.model('Video',VideoSchema);