import styled from "styled-components";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  gap: 30px;
  flex-wrap: wrap; 

  &:nth-child(even) {
    flex-direction: row-reverse; 
  }

  img {
    flex: 1 1 300px;
    max-width: 400px;
    width: 100%;
    height: auto;
    border-radius: 15px;
    background-color: #ddd;
  }

  .text {
    flex: 1 1 300px; 
    max-width: 500px;

    h2 {
      font-size: 2rem;
      margin-bottom: 15px;
      color: #ff9800;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #333;
    }
  }

  @media (max-width: 1024px) {
    padding: 40px 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img,
    .text {
      width: 100%;
      max-width: 100%;
      text-align: center;
    }

    img {
      margin-bottom: 20px;
    }
  }
`;

function About() {
  return (
    <>
      <Section>
        <img src="/assets/pic1.jpg" alt="Trust & honesty" />
        <div className="text">
          <h2>Trust & Honesty 🤝</h2>
          <p>
            We believe in the importance of trust and honesty with every customer,
            and we make sure to provide the best possible service to ensure your
            complete satisfaction. Working with us means peace of mind and comfort.
          </p>
        </div>
      </Section>

      <Section>
        <img src="/assets/pic2.jpg" alt="Fast delivery" />
        <div className="text">
          <h2>Fast Delivery 🚀</h2>
          <p>
            We provide fast and efficient delivery to ensure products arrive on
            time. Your convenience and speed of service are always our top priority.
          </p>
        </div>
      </Section>

      <Section>
        <img src="/assets/pic3.jpg" alt="Prices & discounts" />
        <div className="text">
          <h2>Prices & Discounts 💰</h2>
          <p>
            We offer competitive prices with ongoing discounts on our products,
            allowing you to get the best value for your money with ease.
          </p>
        </div>
      </Section>
    </>
  );
}

export default About;
