import {
  TwoContainer,
  LeftContainer,
  TwoContainerOne,
  TwoContainerTwo,
  TwoContainerThree,
  Button,
} from "../components/styles/SectionTwo.styled";

function SectionTwo() {
  return (
    <>
      <TwoContainer>
        <LeftContainer>
          <TwoContainerOne>
            <h4>Don't Wait</h4>
            <h2>Master Manifestor Academy</h2>
            <Button>Join Waitlist</Button>
          </TwoContainerOne>
          <TwoContainerTwo>
            <h2>Be The Master of Your Life</h2>
            <h4>Join & Live</h4>
          </TwoContainerTwo>
        </LeftContainer>
        <TwoContainerThree>
          <h4>Now Enrolling</h4>
          <h2>Life By Design 1:1 Coaching</h2>
          <Button>Learn More</Button>
        </TwoContainerThree>
      </TwoContainer>
    </>
  );
}
export default SectionTwo;
