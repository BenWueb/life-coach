import { NavContainer, Menu } from "./styles/Nav.styled";
import { Container } from "./styles/Container.styled";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Nav() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        setWindowSize(window.innerWidth);
      },
      []
    );
  });

  return (
    <>
      <NavContainer>
        <Container>
          <Menu>
            {windowSize >= "430" ? (
              <>
                <ol>
                  <ul>
                    <Link to="/">Home </Link>
                  </ul>

                  <ul>
                    <Link to="/">About</Link>
                  </ul>
                  <ul>
                    <Link to="/">Conact</Link>
                  </ul>
                </ol>
                <h1>Jessica Thompson</h1>
                <ol>
                  <ul>
                    <Link to="/">Blog</Link>
                  </ul>
                  <ul>
                    <Link to="/">Gallery</Link>
                  </ul>
                  <ul>
                    <Link to="/">Newsletter</Link>
                  </ul>
                </ol>
              </>
            ) : (
              <>
                <h1>Jessica Thompson</h1>
              </>
            )}
          </Menu>
        </Container>
      </NavContainer>
    </>
  );
}
export default Nav;
