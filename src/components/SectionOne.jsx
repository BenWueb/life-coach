import {
  OneBackground,
  OneContainer,
  OneImageContainer,
  ImageOne,
  ImageTwo,
  ImageThree,
  OneTextContainer,
} from "./styles/SectionOne.styled";
import aboutone from "../assets/miguel-bruna-TzVN0xQhWaQ-unsplash.webp";
import abouttwo from "../assets/denys-nevozhai-z0nVqfrOqWA-unsplash.webp";
import aboutthree from "../assets/fuu-j-r2nJPbEYuSQ-unsplash.webp";

function SectionOne() {
  return (
    <>
      <OneBackground>
        <OneContainer>
          <OneImageContainer>
            <ImageOne src={aboutone} />
            <ImageTwo src={abouttwo} />
            <ImageThree src={aboutthree} />
          </OneImageContainer>
          <OneTextContainer>
            <h5>About Me</h5>
            <h2>Hey There!</h2>
            <h3>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus commodi quaerat dolorum, nam magni quis
              accusantium, minus enim dolor optio earum inventore quos non totam
              vel unde eius ipsam numquam. Perferendis nam dignissimos ad itaque
              quibusdam sit neque delectus, esse eos in illum placeat
              praesentium, provident ratione quisquam. Earum maiores ex quia
              perferendis. Adipisci in harum excepturi deleniti tempore fuga
              alias eveniet itaque qui, consequuntur consectetur assumenda,
              aperiam possimus iste minima voluptatibus laboriosam porro
              provident perspiciatis. Harum atque, cupiditate maxime soluta
              aliquam facere! Assumenda modi quisquam dolores fuga nobis in
              quidem id tempore sapiente beatae, nihil inventore nulla
              voluptatem laborum iusto eveniet, hic excepturi placeat unde quis
              rerum! Quas quaerat, fuga nulla tempora incidunt delectus
              adipisci? Eos in, laborum corrupti rerum iste ab cum maiores
              sapiente eum voluptate unde ipsum nulla vitae blanditiis
              consequatur, animi minus repellat dignissimos excepturi! Quibusdam
              odio consequatur officiis voluptatum doloribus dicta deserunt
              neque ab reprehenderit id, porro, ipsa dolorum totam fugiat
              architecto maxime eum doloremque hic autem. Fugiat velit cum esse
              nam officiis sit dolorem assumenda architecto beatae harum fuga
              saepe recusandae in, cumque odit nulla nostrum, laudantium
              voluptatum quisquam natus eum aperiam quae maxime libero. Est
              debitis deserunt molestias saepe, veniam distinctio facilis a.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              dignissimos culpa odit et maiores aut minima pariatur cum! Error
              dignissimos veritatis cum dolore vel. Sapiente temporibus eveniet
              in vel. Nulla accusantium cupiditate esse fugiat voluptate dolore
              labore sequi rem eveniet quibusdam error quaerat laboriosam, vero
              sunt praesentium adipisci possimus voluptates.
            </p>
          </OneTextContainer>
        </OneContainer>
      </OneBackground>
    </>
  );
}
export default SectionOne;
