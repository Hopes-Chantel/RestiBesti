
const Restaurant = require("../models/restaurant");

module.exports = {
  create,
  delete: deleteReview
};

function deleteReview(req, res, next){
	
	Restaurant.findOne({'reviews._id': req.params.id}, function(err, restaurantDocument){
		
		const review = restaurantDocument.reviews.id(req.params.id);
		// If the review wasn't made by the user redirect them back to the same page
		if(!review.user.equals(req.user._id)) return res.redirect(`/restaurants/${restaurantDocument._id}`);

		// remove the review
		// 1 way find the review then call remove method
		review.remove()
		// remove the review
		
		restaurantDocument.save(function(err){
			if(err) next(err); // next(err) passes it to the express generator err handler
			res.redirect(`/${restaurantDocument._id}`)
		})


	})


}

function create(req, res) {
  // two things we need to know from the request?
  // req.params.id = id of the movie we want to tadd the review to
  // req.body - contents of the form, which is the review we want to add to the movie
  //
  // console.log(req.params.id)
  // res.send('hello im hitting the create route in the reviews change me later')
  // Find the movie from the database
  // Movie.findById is a mongoose Method
  Restaurant?.findById(req.params.id, function (err, restaurantFromTheDatabase) {
    // add the review (req.body) to the restaurantFromTheDatabase

    // Add the user-centric info to req.body (the new review)
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    restaurantFromTheDatabase.reviews.push(req.body); // mutating a document
    // we have to tell mongodb we changed the document,
    restaurantFromTheDatabase.save(function (err) {
      console.log(restaurantFromTheDatabase);
      // then we want to respond to the client!
      // redirect them to a page, What page makes sense to redirect?
      res.redirect(`/${restaurantFromTheDatabase._id}`);
    });
  });

  // res.send('hello')

  //
}