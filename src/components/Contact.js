import "../styles/contact.css";

const Contact = (props) => {
  return (
    <div id="contact">
      <h1>Contact</h1>
      <hr></hr>
      <div className="links-container">
        <a
          href="https://github.com/Hasan-Iqtedar"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <a
          href="https://www.linkedin.com/in/hasan-iqtedar"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
        <a
          href="https://drive.google.com/file/d/1J8hbxErsLgqKKKkCiQBPCtKW_-WID4py/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Contact;
