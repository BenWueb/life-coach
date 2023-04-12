import styled from "styled-components";

export const FooterBackground = styled.div`
  background-color: #ffcad4;
`;
export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;

  @media screen and (max-width: 430px) {
    flex-direction: column;
  }

  h4 {
    text-align: center;
    margin-bottom: 20px;
  }
`;
export const ContactContainer = styled.div`
  h5 {
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 430px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const CompanyContainer = styled.div`
  margin-top: auto;
  p {
    font-size: 16px;
  }
`;
export const ConnectContainer = styled.div`
  text-align: center;
  margin: auto 0;

  @media screen and (max-width: 430px) {
    margin-top: 20px;
  }
`;
