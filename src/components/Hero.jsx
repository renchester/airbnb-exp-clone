function Hero() {
  return (
    <section className="hero">
      <div className="hero__main-wrapper">
        <img src={heroGrid} alt="" className="hero__main" />
      </div>
      <div className="hero__text">
        <h1 className="hero__title">Online Experiences</h1>
        <span className="hero__description">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </span>
      </div>
    </section>
  );
}
