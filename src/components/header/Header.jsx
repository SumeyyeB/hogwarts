import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Container>
      <Image src={logo} width="150px" style={{ borderRadius: '50%' }} />
      <br />
      <h1
        className="my-2 text-uppercase title"
        style={{
          color: "#8B4513 ",
          textShadow: "4px 4px 4px rgba(212, 11, 11, 0.5)",
        }}
      >
        Dumbeldore's Army
      </h1>
    </Container>
  );
};

export default Header;
