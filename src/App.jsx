import './sass/main.scss';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

import data from './data';

function App() {
  const cards = data.map((entry) => (
    <Card
      key={entry.id}
      img={entry.coverImg}
      rating={entry.stats.rating}
      reviewCount={entry.stats.reviewCount}
      location={entry.location}
      title={entry.title}
      price={entry.price}
      openSpots={entry.openSpots}
    />
  ));

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <section className="card__container">{cards}</section>
    </div>
  );
}

export default App;
