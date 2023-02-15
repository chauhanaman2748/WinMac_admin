const User = require("../models/user.model");
const validation = require("../middleware/validator");

//Booking events
exports.addEvent = async (req, res) => {
  try {
    
      const existingUser = await User.findOne({ username: req.body.username });
      if (existingUser.eventBooked.includes(req.body.eventBooked)) {
        return res.status(400).send({ error: 'Event already booked' });
      }

      const result = await User.updateOne(
        { username: req.body.username }, 
        { $push: { eventBooked: req.body.eventBooked } }, 
        { upsert: true }
      );

      console.log('Event '+req.body.eventBooked+' added to username '+req.body.username);
      res.send({ message: 'Event added successfully' });
    
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};


//Canceling events
exports.removeEvent = async (req, res) => {
  try {

    const result = await User.updateOne(
      { username: req.body.username }, 
      { $pull: { eventBooked: req.body.eventBooked } }
    );
    if(result.nModified === 0 && result.n === 0){
      // if the record was not modified or created
      res.status(404).send({ error: 'User not found' });
    } else {
      console.log('Event '+req.body.eventBooked+' removed from username '+req.body.username);
      res.send({ message: 'Event removed successfully' });
    }

  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};


//My events
exports.myEvent = async (req, res) => {
  try {
    const userId = req.body.username;
    const user = await User.find({ username: userId });
    if (user && user.length > 0) {
      const eventBookedLength = user[0].eventBooked ? user[0].eventBooked.length : 0;
      res.status(200).json({
        length: eventBookedLength,
        data: user,
      });
    } else {
      res.status(404).send({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
