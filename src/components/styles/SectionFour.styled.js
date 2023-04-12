import styled from "styled-components";

export const SectionFourContainer = styled.div`
  background-color: rgba(0, 0, 0);
  color: white;
  text-align: center;
  padding: 80px;

  @media screen and (max-width: 430px) {
    padding: 80px 10px;
  }
  h2 {
    margin-bottom: 40px;

    @media screen and (max-width: 430px) {
      font-size: 24px;
      line-height: 2rem;
    }
  }

  h5 {
    margin-bottom: 40px;
  }

  h4 {
    font-family: "Amanitha", sans-serif;
    font-size: 150px;

    @media screen and (max-width: 430px) {
      font-size: 80px;
    }
  }
`;
