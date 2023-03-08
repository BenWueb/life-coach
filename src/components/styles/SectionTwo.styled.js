import styled from "styled-components";
import imageOne from "../../assets/mohamed-nohassi-odxB5oIG_iA-unsplash.webp";
import imageTwo from "../../assets/peter-conlan-LEgwEaBVGMo-unsplash.webp";
import imageThree from "../../assets/ryan-moreno-IcAtXrAZx8E-unsplash.webp";

export const TwoContainer = styled.div`
  display: flex;
  height: 1200px;
  color: white;
  justify-content: center;
  background-color: black;

  h4 {
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TwoContainerOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    url(${imageOne});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  flex: 1;
  padding: 100px;
  text-align: center;
`;
export const TwoContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    url(${imageTwo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  flex: 1;
  padding: 100px;
  text-align: center;
`;
export const TwoContainerThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    url(${imageThree});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 100px;
  text-align: center;
`;
export const Button = styled.button`
  margin-top: 40px;
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  padding: 10px 40px;
`;
