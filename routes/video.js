const Video = require('../models/Video');

const router = require('express').Router();

//get videos
router.get('/get', async (req,res) => {
    const findBy = {};
    
    //category filter
    if(req.query.ct){
        findBy['category'] = req.query.ct.split(",");
    }


    try{
        let videos;
        videos = await Video.find(findBy);
        res.status(200).json(videos);
    }catch(err){
        res.status(401).json(err);
    }
});

module.exports = router;