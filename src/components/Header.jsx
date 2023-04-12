import { HeaderBackground, CtaContainer } from "./styles/Header.styled.js";
import Nav from "./Nav.jsx";

function Header() {
  return (
    <div>
      <HeaderBackground>
        <Nav />
        <CtaContainer>
          <h4>Learn How To</h4>
          <h1>
            Transform your &nbsp;
            <span>mindset</span>
            &nbsp; & tap into your infinite potential uitilizing &nbsp;{" "}
            <span className="manifest">Manifestation.</span>
          </h1>
        </CtaContainer>
      </HeaderBackground>
    </div>
  );
}
export default Header;
