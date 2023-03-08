import styled from "styled-components";

export const OneBackground = styled.div`
  background-color: #ffcad4;
`;
export const OneContainer = styled.div`
  color: black;
  padding: 80px 0;
  max-width: 1500px;
  display: flex;
  position: relative;
  margin: 0 auto;
`;
export const OneImageContainer = styled.div`
  flex: 1;
`;
export const ImageOne = styled.img`
  height: 300px;
  width: 300px;
  position: absolute;
  top: -200px;
  left: 40px;
  transform: rotate(5deg);
  z-index: 1;
  object-fit: cover;
  border: 2px solid black;
`;
export const ImageTwo = styled.img`
  height: 600px;
  width: 500px;
  position: absolute;
  object-fit: cover;
  top: -50px;
  left: 200px;
  border: 2px solid black;
`;

export const ImageThree = styled.img`
  height: 400px;
  width: 400px;
  position: absolute;
  object-fit: cover;
  top: 400px;
  left: 80px;
  transform: rotate(-5deg);
  border: 2px solid black;
`;

export const OneTextContainer = styled.div`
  flex: 1;
  padding: 0 100px;

  h2 {
    font-family: "Amanitha", sans-serif;
    transform: rotate(-10deg) translateY(-70px) translateX(0px);
    color: white;
  }

  h3 {
    margin-bottom: 20px;
  }

  h5 {
    position: absolute;
    right: 0;
    top: 60px;
    transform: rotate(90deg);
    font-size: 16px;
  }

  p {
    margin-bottom: 20px;
  }
`;
