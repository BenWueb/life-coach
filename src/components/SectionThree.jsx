import {
  SectionThreeContainer,
  ThreeContainerOne,
  ImageOne,
  TextContainerOne,
  ThreeContainerTwo,
  TextContainerTwo,
  ImageTwo,
} from "../components/styles/SectionThree.styled";

import { Container } from "../components/styles/Container.styled";

import imageOne from "../assets/priscilla-du-preez-nF8xhLMmg0c-unsplash.webp";
import imageTwo from "../assets/roberto-nickson-oQJO7TpRZj0-unsplash.webp";

function SectionThree() {
  return (
    <>
      <SectionThreeContainer>
        <Container>
          <h1>
            Manifesting <br /> Memeberships
          </h1>
          <ThreeContainerOne>
            <ImageOne src={imageOne} />
            <TextContainerOne>
              <h3>Spiritual Self Development Book Club</h3>
              <h4>- Jessica Thompson</h4>
            </TextContainerOne>
          </ThreeContainerOne>
          <ThreeContainerTwo>
            <TextContainerTwo>
              <h3>Entrepreneurial & Money Manifesting</h3>
              <h4>- Jessica Thompson</h4>
            </TextContainerTwo>
            <ImageTwo src={imageTwo} />
          </ThreeContainerTwo>
        </Container>
      </SectionThreeContainer>
    </>
  );
}
export default SectionThree;
