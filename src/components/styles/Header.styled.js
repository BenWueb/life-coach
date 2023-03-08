import styled from "styled-components";
import header from "../../assets/aditya-saxena-_mIXHvl_wzA-unsplash.webp";

export const HeaderBackground = styled.div`
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(${header}) no-repeat;
  filter: grayscale(100%);
  height: 1000px;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const CtaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 60%;
  height: 100%;
  margin: 0 auto;
  color: white;

  h4 {
    letter-spacing: 5px;
    margin-bottom: 20px;
  }

  h1 {
    text-align: center;

    span {
      font-family: "Amanitha", sans-serif;

      display: inline-block;
      font-size: 170px;
      font-weight: 400;
    }
  }
`;
