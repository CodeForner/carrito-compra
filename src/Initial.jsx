function Initial({ handleClickPage }) {
  return (
    <section className="start-page">
      <div className="start-page-header">
        <h1>Welcome to Tranquil Bazaar!</h1>
        <h2>Where Shopping Meets Serenity.</h2>
        <button onClick={handleClickPage}>Get started!</button>
      </div>
      <p>
        Tranquil Bazaar is your go-to destination for a serene shopping experience. We offer a curated selection of quality, <strong>affordable</strong> products, supporting local artisans and <strong>eco-friendly</strong> practices. Shop with us and enjoy a seamless, tranquil journey.
      </p>
    </section>
  );
}

export default Initial;
