import Review from '../models/review.model.js'; // Assuming you have a Review model

// Create a new review
const createReview = async (req, res) => {
  try {
    const { productId, userId, rating, comment } = req.body;

    // Basic validation
    if (!productId || !userId || !rating) {
      return res.status(400).json({ message: 'ProductId, userId, and rating are required' });
    }
    // Check if the rating is within the valid range (1-5)
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be between 1 and 5' });
    }

    // Validate comment length if provided
    if (comment && comment.length > 500) {
      return res.status(400).json({ message: 'Comment must not exceed 500 characters' });
    }

    // TODO: Add logic to check if the user has purchased the product before allowing a review

    // TODO: Add logic to prevent multiple reviews from the same user for the same product

    // Create a new review
    const newReview = new Review({
      productId,
      userId,
      rating,
      comment: comment || ''
    });

    // Save the review to the database
    await newReview.save();

    res.status(201).json({ message: 'Review created successfully', review: newReview });
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ message: 'Error creating review' });
  }
};

// Export the function
export { createReview };