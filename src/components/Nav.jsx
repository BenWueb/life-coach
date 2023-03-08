import { NavContainer, Menu } from "./styles/Nav.styled";
import { Container } from "./styles/Container.styled";

function Nav() {
  return (
    <>
      <NavContainer>
        <Container>
          <Menu>
            <ol>
              <ul>Home</ul>
              <ul>About</ul>
              <ul>Conact</ul>
            </ol>
            <h1>Jessica Thompson</h1>
            <ol>
              <ul>Blog</ul>
              <ul>Gallery</ul>
              <ul>Newsletter</ul>
            </ol>
          </Menu>
        </Container>
      </NavContainer>
    </>
  );
}
export default Nav;
