const BannerContent = () => {
  return (
    <section className="banner" aria-label="Welcome banner">
      <div className="banner__text">
        <div>
          सबका <span className="highlight">साथ</span>
        </div>
        <div>
          सबका <span className="highlight">विकास</span>
        </div>
        <div>
          सबका <span className="highlight">विश्वास</span>
        </div>
        <div>
          सबका <span className="highlight">प्रयास</span>
        </div>
      </div>
      <img
        src="/modijibanner.jpeg"
        alt="Hon'ble Prime Minister of India"
        className="banner__image"
        loading="lazy"
      />
    </section>
  );
};

export default BannerContent;
