import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import netflexFont from "../images/netflixFont.png";

import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footerLight centeringBody grayBoderTop">
      <div className="d-flex justify-content-between">
        <a
          href="https://www.facebook.com/netflixmiddleeastnorthafrica/?brand_redir=475822799216240"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon className="footerIcons" icon={faFacebookF} />
        </a>
        <a
          href="https://twitter.com/netflixfilm"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon className="footerIcons" icon={faTwitter} />
        </a>
        <a
          href="https://www.netflix.com/eg-en/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="footerIconsImg" src={netflexFont} alt="" />
        </a>
        <a
          href="https://www.pinterest.com/netflixfamily/_created/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon className="footerIcons" icon={faPinterest} />
        </a>
        <a
          href="https://www.instagram.com/netflix/?hl=en"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon className="footerIcons" icon={faInstagram} />
        </a>
      </div>
      <p className="text-white fs-5 mt-3">© 2022 ITI Netflix Project</p>
    </div>
  );
};

export default Footer;
