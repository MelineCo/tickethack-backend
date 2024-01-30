const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://Abeps:VO1I3evrIlExvqg3@abeps.xxkoe0e.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
.then(() => console.log('Database connected'))
.catch(error => console.error(error));


  // A rajouter dans fichier  :


//   require('./models/connection');