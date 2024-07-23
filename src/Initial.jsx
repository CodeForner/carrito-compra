function Initial({ handleClickPage }) {
  return (
    <section className="start-page">
      <div className="start-page-header">
        <h1>Welcome to Cachibache Bazaar!</h1>
        <h2>Where Shopping Meets Serenity.</h2>
        <button style={{fontSize:"medium", padding:"5px"}}onClick={handleClickPage}>Get started!</button>
      </div>
      <p>
        Cachibache Bazaar is your go-to destination for a serene shopping experience. We offer a curated selection of quality, <strong>affordable</strong> products, supporting local artisans and <strong>eco-friendly</strong> practices. Shop with us and enjoy a seamless, tranquil journey.
      </p>
    </section>
  );
}

export default Initial;
