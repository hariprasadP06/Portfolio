import "./Profile.css";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaReddit,
} from "react-icons/fa";

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <img src="/hari.jpg" alt="Hari Prasad" className="profile-image" />
      <h1>
        Hari prasad <span className="role">(Fullstack AI Developer)</span>
      </h1>
      <div className="tags">
        <span className="tag">Developer</span>
        <span className="tag">Creator</span>
      </div>
      <div className="socials">
        <a href="https://www.linkedin.com/in/hari-prasad-5262b927b/">
          <FaLinkedin style={{ color: "#0A66C2" }} />
          LinkedIn
        </a>
        <a href="https://twitter.com">
          <FaTwitter style={{ color: "#1DA1F2" }} />
          Twitter
        </a>
        <a href="https://github.com/hariprasadP06">
          <FaGithub style={{ color: "#ffffff" }} />
          GitHub
        </a>
        <a href="https://instagram.com/hari__prasad_06">
          <FaInstagram style={{ color: "#E1306C" }} />
          Instagram
        </a>
        <a href="https://reddit.com">
          <FaReddit style={{ color: "#FF4500" }} />
          Reddit
        </a>
      </div>
    </div>
  );
};

export default Profile;
