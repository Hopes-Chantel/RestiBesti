const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {type: String, required: true},
    rating: {type: Number, min: 1, max: 5, default: 5},
    dateAttend: {
      type: Number,
      default: function () {
        return new Date().getFullYear();
      }
    },
    // Add the 3 new properties below
    user: {type: Schema.Types.ObjectId, ref: 'User'}, // referencing the user document
    userName: String, // we probably don't need to populate the user everytime, we can just store their username because thats the most common thing we'll display
    // with the review
    userAvatar: String
  }, {
    timestamps: true
  });


const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  dateOpened: {
    type: Number,
    default: function () {
      return new Date().getFullYear();
    }
  },
  nycBoro: {
    type: String,
    enum: ['BKLYN', 'QNS','MAN','BX']
    },
  foodType: {
    type: String,
    enum: ['Italian','American','Bar','Meditteranean','Indian','Latin','Soul Food','Caribbean','Korean','Chinese','Asian Fusion','Bistro','Cafe','French','Ethiopian','Japanese']
      },
  reviews: [reviewSchema],//One movie has many reviews
}, {
  timestamps: true
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
