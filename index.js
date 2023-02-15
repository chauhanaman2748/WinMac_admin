const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/user.routes');
const eventListRoutes = require('./routes/eventList.routes');
const eventBookRoutes = require('./routes/eventBook.routes');

require('dotenv').config()

const app = express();

app.use((req, res, next) => {
  res.header('Access-control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 
  'Origin , X-Reaquested-With, Content-Type, Accept, Authorization');
  if(req.method === 'OPTIONS') {
      res.header('Accesss-Control-Allow-Methods', 'PUT , POST, PATCH, DELETE, GET' );
      return res.status(200).json({});
  }
  next();
});

app.use(express.json());

app.get('/', (req,res,next) => {
  res.send(`<h1>WinMac Server </h1>`)  
})


// localhost:8080/winmac/auth/
app.use('/winmac/auth', authRoutes);
app.use('/winmac/eventList', eventListRoutes);
app.use('/winmac/eventBook', eventBookRoutes);



mongoose.set("strictQuery", false);
mongoose.connect(
    "mongodb://0.0.0.0:27017/",
    {
      dbName: "WinHub",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) =>
      err ? console.log(err) : console.log(
        "Connected to WinHub database")
  );

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is running at ${PORT}`))
