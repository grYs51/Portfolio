import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/yves-bulckens/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/grYs51" target="_blank">
        <FaGithub />
      </a>
      {/* <a href="https://www.linkedin.com/in/yves-bulckens/" target="_blank"></a> */}
    </div>
  );
}

export default HeaderSocials;
