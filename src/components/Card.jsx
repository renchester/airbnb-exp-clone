import katie from '../assets/katie-zaferes.png';
import star from '../assets/icon-star.png';

function Card() {
  return (
    <div className="card">
      <div className="card__img-wrapper">
        <div className="card__buy-status">Sold Out</div>
        <img src={katie} alt="" className="card__img" />
      </div>
      <div className="card__details">
        <div className="card__rating">
          <img src={star} alt="star" className="card__rating-icon" />
          <span className="card__rating-stars">5.0</span>
          <span className="card__rating-amount">(6)</span>
          <span className="card__rating-location">USA</span>
        </div>
        <div className="card__description">Life lessons with Katie Zaferes</div>
        <div className="card__pricing">
          <span className="card__pricing-amount">From $135</span>
          <span className="card__pricing-pax">person</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
