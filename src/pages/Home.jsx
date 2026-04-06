import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BannerContent from "../components/BannerContent";
// import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Home.module.css";
import Header from "../components/Header";

const services = [
  { icon: "https://img.icons8.com/ios/50/home.png", label: "Freehold Conversion" },
  { icon: "https://img.icons8.com/ios/50/park.png", label: "Adopt a Park" },
  { icon: "https://img.icons8.com/ios/50/online.png", label: "Online Booking" },
  { icon: "https://img.icons8.com/ios/50/chat.png", label: "Grievance" },
  { icon: "https://img.icons8.com/ios/50/bank-card.png", label: "Online Payment" },
];

const highlights = [
  { image: "/Master.png", label: "Master Plan" },
  { image: "/Housing.png", label: "Housing" },
  { image: "/landmark.png", label: "Landmark Green" },
];

const recentLaunches = [
  { image: "/img1.png", title: "DDA Green Expo 2026" },
  { image: "/img2.png", title: "DDA Palash Mahotsav 2026" },
  { image: "/img3.jpg", title: "DDA Nagrik Awas Yojna 2026 (FCFS)" },
  { image: "/img4.png", title: "DDA Premium Housing Scheme 2026 (e-Auction)" },
  { image: "/img5.png", title: "DDA Towering Heights Scheme 2026 (FCFS)" },
  { image: "/img6.jpg", title: "DDA Janta Awaas Yojna 2025 (Draw of Lot)" },
  { image: "/img7.jpg", title: "Karmayogi Awaas Yojna 2025" },
  { image: "/img8.jpg", title: "DDA Jan Sadharan Awaas Yojna 2025 (FCFS)" },
];

const Home = () => {
  return (
    <>
    <Header></Header>
      <Navbar />
      <main id="main-content">
        <BannerContent />

        {/* What's New Bar */}
        <div className={styles.newsbar} role="alert" aria-label="Latest updates">
          <div className={styles.newsLeft}>
            <strong>WHAT&apos;S NEW</strong>
            <span className={styles.newsDot} aria-hidden="true"></span>
            <span>
              Extension of last date for Completion of Mandatory Courses...
            </span>
          </div>
          <button className={styles.viewBtn} aria-label="View all news">
            View All
          </button>
        </div>

        {/* Services Section */}
        <section className={styles.serviceBox} aria-label="Our services">
          <h2 className={styles.serviceTitle}>AT YOUR SERVICE</h2>
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <a
                href="#"
                key={service.label}
                className={styles.serviceItem}
                aria-label={service.label}
              >
                <img
                  src={service.icon}
                  alt=""
                  aria-hidden="true"
                  className={styles.serviceIcon}
                  loading="lazy"
                />
                <p className={styles.serviceLabel}>{service.label}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Welcome + Highlights */}
        <div className={styles.mainSection}>
          <section className={styles.welcome}>
            <h2 className={styles.sectionHeading}>WELCOME TO DDA</h2>
            <p>
              The Delhi Development Authority (DDA) was created in 1957 under
              the provisions of the Delhi Development Act to promote and secure
              development of Delhi.
            </p>
            <p>
              The DDA is responsible for planning, development and construction
              of Housing Projects, Commercial Lands, Land Management, Land
              Disposal etc.
            </p>
            <Link to="/aboutus" className={styles.readMore}>
              Read More →
            </Link>
          </section>

          <section className={styles.highlights}>
            <h2 className={styles.sectionHeading}>KEY HIGHLIGHTS</h2>
            <div className={styles.highlightCards}>
              {highlights.map((item) => (
                <a href="#" key={item.label} className={styles.highlightCard}>
                  <img
                    src={item.image}
                    alt={item.label}
                    className={styles.highlightImg}
                    loading="lazy"
                  />
                  <p className={styles.highlightLabel}>{item.label} →</p>
                </a>
              ))}
            </div>
          </section>
        </div>

        {/* Recent Launches */}
        <section className="section" aria-label="Recent launches">
          <h2 className="section__title">RECENT LAUNCHES</h2>
          <div className="grid">
            {recentLaunches.map((item) => (
              <article key={item.title} className="card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card__image"
                  loading="lazy"
                />
                <p className="card__text">{item.title}</p>
              </article>
            ))}
          </div>
          <div className="view-all">
            <button className="view-all__btn">View all</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
