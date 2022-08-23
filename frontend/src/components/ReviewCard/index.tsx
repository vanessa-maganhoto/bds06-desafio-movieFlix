import { ReactComponent as Star } from 'assets/images/star.svg';
import { Review } from 'types/review';

import './styles.css';

type Props = {
  review: Review[];
};

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="review-container">
      {review.map((reviewItem) => (
        <div key={reviewItem.id} className="review-div">
          <div className="review-username">
            <Star />
            <h4>{reviewItem.user.name}</h4>
          </div>
          <div className="review-comment">
            <p>{reviewItem.text}</p>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default ReviewCard;
