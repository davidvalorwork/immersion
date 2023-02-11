import TransAT37 from './TransAT37.js';
import TransAT37_Example from './examples/TransAT37_Example.js';
import mongoose from 'mongoose';

// Singleton function for database connection
class MongoDB {
  // Models
  TransAT37_Mongo_Model

  constructor() {
  }

  init() {
    // Connect to the database
    console.log('☕ Connecting to MongoDB...');
    mongoose.set('strictQuery', false);
    mongoose.connect('mongodb://127.0.0.1:27017/immersion');
  }

  destroyExampleModel() {
    // MongoDB connection: deleting the model for testing purposes
    TransAT37_Mongo_Model.remove({}, function (err) {
      console.log('collection removed')
    });
  }

  createModels() {
    // Model: Creating transfer model for this testing
    console.log('\ueaec Creating Models...');
    console.log('\uf461 Creating TransAT37 model...');
    this.TransAT37_Mongo_Model = mongoose.model('TransAT37', TransAT37);
  }

  createExampleModel() {
    //  creating first model of example
    console.log('\uf461 Creating example model...');
    const example = new TransAT37_Mongo_Model(TransAT37_Example);
    example.save().then(() => console.log('Transfer example created successfully'));

    // Model: printing first collection of example
    TransAT37_Mongo_Model.find({}).then((docs) => {
      console.log('\uf461 Docs', docs);
    })
  }

}

export default MongoDB;

// @Important my friend this is a singleton
// For using this singleton please used like this:
// const singletonInstance = new Singleton();
// Object.freeze(singletonInstance);