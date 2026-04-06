import styles from "./Footer.module.css";

const footerData = [
  {
    title: "Online Portals",
    links: ["AWAAS", "BHOOMI", "IDLI System", "CPGRAMS", "DRMS", "LGLP", "RNR", "SNS", "PGMS"],
  },
  {
    title: "Minutes of Meeting",
    links: [
      "Authority",
      "Screening Committee",
      "Governing Body of UTTIPEC",
      "Estimate Approval",
      "Technical Committee",
    ],
  },
  {
    sections: [
      {
        title: "Complaints Management",
        links: ["Internal Complaints Committee (ICC)"],
      },
      {
        title: "Right to Information",
        links: [
          "SUO MOTO Disclosure (RTI ACT 2005)",
          "PIO/Appellate Authority in DDA",
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "Miscellaneous",
        links: [
          "Search Property",
          "Employees Corner",
          "DDA News Letter",
          "DDA in News",
          "Mobile App",
          "Annual Admin Reports",
        ],
      },
      {
        title: "Other Important Links",
        links: ["MOHUA", "Raj Niwas/LG House", "MCD", "NIC", "NDMC"],
      },
    ],
  },
];

const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className={styles.heading}>{title}</h3>
    <ul className={styles.list}>
      {links.map((link) => (
        <li key={link} className={styles.listItem}>
          <a href="#" className={styles.link}>
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {footerData.map((col, idx) =>
          col.sections ? (
            <div key={idx}>
              {col.sections.map((section) => (
                <FooterColumn
                  key={section.title}
                  title={section.title}
                  links={section.links}
                />
              ))}
            </div>
          ) : (
            <FooterColumn key={col.title} title={col.title} links={col.links} />
          )
        )}
      </div>
    </footer>
  );
};

export default Footer;
