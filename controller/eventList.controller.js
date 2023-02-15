const Post = require("../models/eventList.model");

  
  exports.getAllEvents = async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skipIndex = (page - 1) * limit;
  
    try {
      const event_list = await Post.find().sort({_id: 1}).limit(limit).skip(skipIndex).exec();
  
      res.status(200).json({
        length: event_list.length,
        data: event_list,
      });
    } catch (error) {
      res.status(400).json({
        message: "Something went wrong!",
        error: error
      });
    }
  };