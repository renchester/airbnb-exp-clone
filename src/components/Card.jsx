import star from '../assets/icon-star.png';

function Card(props) {
  let badgeText;

  if (props.openSpots === 0) {
    badgeText = 'Sold Out';
  } else if (props.location === 'Online') {
    badgeText = 'Online';
  }

  return (
    <div className="card">
      <div className="card__img-wrapper">
        {badgeText && <div className="card__buy-status">{badgeText}</div>}
        <img src={`../assets/${props.img}`} alt="" className="card__img" />
      </div>

      <div className="card__details">
        <div className="card__rating">
          <img src={star} alt="star" className="card__rating-icon" />
          <span className="card__rating-stars">{props.rating}</span>
          <span className="card__rating-amount">({props.reviewCount})</span>
          <span className="card__rating-location">{props.location}</span>
        </div>

        <div className="card__description">{props.title}</div>
        <div className="card__pricing">
          <span className="card__pricing-amount">From ${props.price}</span>
          <span className="card__pricing-pax">person</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
