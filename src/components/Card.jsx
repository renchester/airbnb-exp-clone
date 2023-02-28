import star from '../assets/icon-star.png';

function Card(props) {
  const { entry } = props;
  let badgeText;

  if (entry.openSpots === 0) {
    badgeText = 'Sold Out';
  } else if (entry.location === 'Online') {
    badgeText = 'Online';
  }

  return (
    <div className="card">
      <div className="card__img-wrapper">
        {badgeText && <div className="card__buy-status">{badgeText}</div>}
        <img src={`../assets/${entry.coverImg}`} alt="" className="card__img" />
      </div>

      <div className="card__details">
        <div className="card__rating">
          <img src={star} alt="star" className="card__rating-icon" />
          <span className="card__rating-stars">{entry.stats.rating}</span>
          <span className="card__rating-amount">
            ({entry.stats.reviewCount})
          </span>
          <span className="card__rating-location">{entry.location}</span>
        </div>

        <div className="card__description">{entry.title}</div>
        <div className="card__pricing">
          <span className="card__pricing-amount">From ${entry.price}</span>
          <span className="card__pricing-pax">person</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
