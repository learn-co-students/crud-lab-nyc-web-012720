import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  render() {
    
    const filteredReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const reviewList = filteredReviews.map(review => <Review key={review.id} review={review} deleteReview={this.props.deleteReview}/>)
    return (
      <ul>
        {console.log(reviewList)}
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;