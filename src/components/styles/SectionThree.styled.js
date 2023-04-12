import styled from "styled-components";
import bg from "../../assets/josefin-HtCgLIDy-2U-unsplash.webp";

export const SectionThreeContainer = styled.div`
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(${bg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  color: white;
  padding: 40px 10px;
  h1 {
    text-align: center;
    line-height: 40px;
    text-transform: uppercase;
    margin: 120px 0;
  }

  h4 {
    font-family: "Amanitha", sans-serif;
    font-size: 60px;
  }
`;
export const ThreeContainerOne = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 80px;

  @media screen and (max-width: 430px) {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
  }
`;
export const ImageOne = styled.img`
  height: 400px;
  width: auto;
  object-fit: cover;
  flex: 1;

  @media screen and (max-width: 430px) {
    height: 200px;
    width: 100%;
  }
`;

export const TextContainerOne = styled.div`
  width: 40%;
  margin: auto 0;

  @media screen and (max-width: 430px) {
    width: 100%;
    text-align: center;
  }
`;
export const ThreeContainerTwo = styled.div`
  display: flex;

  justify-content: space-between;
  padding: 40px;

  @media screen and (max-width: 430px) {
    flex-direction: column-reverse;
    padding: 0;
    gap: 20px;
  }
`;
export const TextContainerTwo = styled.div`
  width: 40%;

  @media screen and (max-width: 430px) {
    width: 100%;
    text-align: center;
  }
`;
export const ImageTwo = styled.img`
  height: 600px;
  width: 600px;
  display: inline-block;
  object-fit: cover;
  border: 2px solid black;
  transform: translateY(-80px) translateX(-80px);

  @media screen and (max-width: 430px) {
    transform: translateY(0) translateX(0);
    height: 200px;
    width: 100%;
  }
`;
