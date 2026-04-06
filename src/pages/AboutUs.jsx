import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styles from "./AboutUs.module.css";

const ddaMembers = [
  {
    name: "Sh. Om Prakash Sharma",
    role: "DDA Member, MLA",
    phone: "24661182",
    image: "/om_prakash_sharma.jpeg",
  },
  {
    name: "Sh. Kartar Singh Tanwar",
    role: "DDA Member, MLA",
    phone: "24661177",
    image: "/kartar_singh_tanwar.jpeg",
  },
  {
    name: "Sh. Punardeep Singh Sawhney",
    role: "DDA Member, MLA",
    phone: "24661354",
    image: "/punardeep_singh_sawhney.jpeg",
  },
  {
    name: "Sh. Rajiv Babbar",
    role: "DDA Member",
    phone: "24661163",
    image: "/rajiv_babbar.jpeg",
  },
];

const authoritySecretary = {
  name: "Sh. S. K. Meena",
  role: "Commissioner-cum-Secretary",
  location: "INA New Delhi",
  phone: "24623598",
  email: "email@example.com",
  image: "/meena_sir.jpg",
};

const seniorOfficers = [
  { name: "Ravi Shankar", role: "Principal Commissioner", phone: "24697813", image: "/ravi_shankar.jpg" },
  { name: "Chittaranjan Dash", role: "Principal Commissioner", phone: "24624487", image: "/chairman-small-3.png" },
  { name: "Vipul Aggarwal", role: "Principal Commissioner", phone: "24633217", image: "/vipul.jpg" },
  { name: "Amrita Darpan Jain", role: "Chief Vigilance Officer", phone: "24621020", image: "/amrita.png" },
  { name: "Harleen Behl", role: "Chief Architect", phone: "23379031", image: "/harleen.png" },
  { name: "Manju Paul", role: "Commissioner - Planning", phone: "23378167", image: "/manju_paul.png" },
];

const PersonCard = ({ person }) => (
  <article className={styles.card}>
    <img
      src={person.image}
      alt={`Photo of ${person.name}`}
      className={styles.cardImage}
      loading="lazy"
    />
    <h3 className={styles.cardName}>{person.name}</h3>
    <p className={styles.cardRole}>{person.role}</p>
    {person.location && (
      <p className={styles.cardDetail}>
        <span aria-hidden="true">📍</span> {person.location}
      </p>
    )}
    <p className={styles.cardDetail}>
      <span aria-hidden="true">📞</span>{" "}
      <a href={`tel:${person.phone}`} className={styles.cardLink}>
        {person.phone}
      </a>
    </p>
    {person.email && (
      <p className={styles.cardDetail}>
        <span aria-hidden="true">✉️</span>{" "}
        <a href={`mailto:${person.email}`} className={styles.cardLink}>
          {person.email}
        </a>
      </p>
    )}
  </article>
);

const AboutUs = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main id="main-content">
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true"> » </span>
          <span aria-current="page">About Us</span>
        </nav>

        {/* Ministry Header */}
        <section className={styles.ministryHeader} aria-label="Ministry information">
          <img
            src="/logo-1.png"
            alt="Government of India Emblem"
            className={styles.ministryLogo}
          />
          <div>
            <h2 className={styles.ministryTitle}>
              Ministry of Housing
              <br />
              and Urban Affairs
            </h2>
            <p className={styles.ministrySubtitle}>Government of India</p>
          </div>
        </section>

        {/* About Content */}
        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>ABOUT US</h2>
          <p>
            Established in 1957 under the Delhi Development Act, Delhi
            Development Authority (DDA) was founded with the vision to
            &ldquo;promote and secure the development of Delhi.&rdquo; Over the
            decades, DDA has played a pivotal role in transforming the city into
            a dynamic urban hub.
          </p>
          <p>
            DDA is entrusted with key responsibilities including planning,
            development, and construction of residential and commercial
            projects, efficient land management, and strategic land disposal.
          </p>
          <p>
            Our commitment is to ensure that Delhi continues to thrive as a
            vibrant metropolis while addressing evolving needs through
            innovative planning and infrastructure development.
          </p>

          <h2 className={styles.sectionTitle}>CHARTER</h2>
          <p>
            The Delhi Development Authority, under Section 6 of the Delhi
            Development Act, 1957 has been given the following Charter:
            &ldquo;To promote and secure the development of Delhi according to
            the plan and for that purpose the Authority shall have power to
            acquire, hold, manage and dispose of land and other
            property...&rdquo;
          </p>
        </section>

        {/* Members Section */}
        <section className={styles.membersSection} aria-label="DDA Members">
          <h2 className={styles.sectionTitleAlt}>OTHER MEMBERS OF THE DDA</h2>
          <div className={styles.grid}>
            {ddaMembers.map((member) => (
              <PersonCard key={member.name} person={member} />
            ))}
          </div>

          <h2 className={styles.sectionTitleAlt}>AUTHORITY SECRETARY</h2>
          <div className={styles.gridSingle}>
            <PersonCard person={authoritySecretary} />
          </div>

          <h2 className={styles.sectionTitleAlt}>
            OTHER SENIOR OFFICERS OF DDA
          </h2>
          <div className={styles.grid}>
            {seniorOfficers.map((officer) => (
              <PersonCard key={officer.name} person={officer} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
