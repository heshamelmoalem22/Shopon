import { useState, useEffect } from "react";
import styled from "styled-components";
import Products from "./Products";

const images = [
  "/assets/sale2.jpg",
  "/assets/sale.jpg",
  "/assets/sale3.jpg",
];

const Hero = styled.section`
  position: relative;
  width: 100%;
  height: 75vh;
  margin-bottom: 14px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  overflow: hidden;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: opacity 1s ease-in-out;
  }

  .bg.hidden {
    opacity: 0;
  }

  .bg.visible {
    opacity: 1;
  }

 
  @media (max-width: 600px) {
    height: 40vh;  
    margin-bottom: 0;
    border-radius: 0cap;

    .bg {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;



function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;
    if (index === images.length - 1) {
      timer = setTimeout(() => setIndex(0), 500); 
    } else {
      timer = setTimeout(() => setIndex(index + 1), 3500);
    }

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <>
      <Hero>
        {images.map((img, i) => (
          <div
            key={i}
            className={`bg ${i === index ? "visible" : "hidden"}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </Hero>
      <Products />
    </>
  );
}

export default Home;
