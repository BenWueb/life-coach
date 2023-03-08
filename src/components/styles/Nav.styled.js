import styled from "styled-components";

export const NavContainer = styled.div``;
export const Menu = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    text-align: center;
    padding-top: 20px;
    text-transform: uppercase;
    width: min-content;
    line-height: 40px;
  }

  ol {
    display: flex;
    justify-content: center;
    gap: 40px;
    padding: 20px 0;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 500;
  }
`;
