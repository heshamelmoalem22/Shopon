import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Card = styled.div`
  background: linear-gradient(135deg, #ffffff, #f9f9f9); 
  border-radius: 10px;
  padding: 10px;
  width: 220px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 226px) {
    width: 90%;       
    margin: 0 auto;   
  }
`;

const Heart = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 1.4rem;
  color: ${(props) => (props.filled ? "red" : "#ccc")};
`;

const TopSection = styled.div`
  text-align: center;

  img {
    max-width: 100%;
    height: 160px;
    object-fit: contain;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 0.9rem;
    margin: 8px 0;
    min-height: 40px;
  }
`;

const BottomSection = styled.div`
  margin-top: auto; 
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: center;
`;

const Price = styled.p`
  font-weight: bold;
  color: #ff9800;
  margin: 0;
`;

const Rating = styled.div`
  color: #ff9800;
  font-size: 0.9rem;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 6px 10px;
  background: #ff9800;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.8rem;
  transition: background 0.2s;

  &:hover {
    background: #e68900;
  }
`;

function ProductCard({ product }) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
  }, []);

  const toggleWishlist = () => {
    let updated = [...wishlist];
    if (updated.find((item) => item.id === product.id)) {
      updated = updated.filter((item) => item.id !== product.id);
    } else {
      updated.push(product);
    }
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const renderStars = () => {
    const stars = [];
    const rate = Math.round(product.rating.rate);
    for (let i = 1; i <= 5; i++) {
      stars.push(<span key={i}>{i <= rate ? "★" : "☆"}</span>);
    }
    return stars;
  };

  return (
    <Card>
      <Heart
        filled={wishlist.some((item) => item.id === product.id)}
        onClick={toggleWishlist}
      >
        ♥
      </Heart>

      <TopSection>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
      </TopSection>

      <BottomSection>
        <Price>${product.price}</Price>
        <Rating>{renderStars()} ({product.rating.count})</Rating>
        <StyledLink to={`/products/${product.id}`}>View </StyledLink>
      </BottomSection>
    </Card>
  );
}

export default ProductCard;
