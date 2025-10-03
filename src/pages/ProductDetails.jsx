import { useParams, useNavigate } from "react-router-dom"; 
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById, addToCart, increaseQty, decreaseQty } from "../redux/productsSlice";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import Spinner from "../ui/Spinner";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    align-items: flex-start;
  }
`;

const ImageBox = styled.div`
  flex: 1;
  text-align: center;

  img {
    max-width: 300px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;

const InfoBox = styled.div`
  flex: 1;
  margin-top: 20px;
  max-width: 500px;

  h2 { margin-bottom: 15px;
      font-size: 1.8rem; 
      color: #333;
     }

  .category { 
      font-size: 0.9rem;
      color: #353434;
      margin-bottom: 15px;
       text-transform: capitalize; 
      }

  p { 
      margin-bottom: 20px;
      line-height: 1.6;
      color: #353434;
     }

  h3 { 
     margin-bottom: 20px;
      font-size: 1.5rem;
      color: #ff9800;
     }

  .rating { 
      display: flex;
      align-items: center;
      gap: 5px; 
      margin-bottom: 20px;
     }

  .rating span { 
    font-size: 1rem;
     color: #333; 
    }

  .qty-box {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 15px;

    button {
      padding: 10px 15px;
      background: #ff9800;
      border: none;
      color: white;
      font-size: 1.2rem;
      font-weight: 600;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover { background: #e68900; }
    }

    span { 
      min-width: 25px;
      text-align: center;
      font-size: 1.2rem;
        }
  }

  button.add-cart,
  button.back-btn {
    padding: 12px 25px;
    border: none;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s ease;
    margin-right: 10px;
  }

  button.add-cart { background: #ff9800; }

  button.add-cart:hover { background: #e68900; }

  button.back-btn { background: #888; }

  button.back-btn:hover { background: #555; }
`;

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { product, cart, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (!product || product.id !== Number(id)) {
      dispatch(fetchProductById(id));
    }
  }, [id, dispatch, product]);

  if (loading) return <Spinner/>;
  if (error) return <p style={{textAlign:"center", color:"red"}}>{error}</p>;
  if (!product) return <p style={{textAlign:"center"}}>Product not found</p>;

  const cartItem = cart.find((p) => p.id === product.id);

  return (
    <Wrapper>
      <ImageBox>
        <img src={product.image} alt={product.title} />
      </ImageBox>
      <InfoBox>
        <h2>{product.title}</h2>
        <p className="category">Category: {product.category}</p>

        {product.rating && (
          <div className="rating">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar 
              key={i} 
              color={i < Math.round(product.rating.rate) ? "#ff9800" : "#ddd"}
               />
            ))}
            <span>({product.rating.rate} / 5, {product.rating.count} reviews)</span>
          </div>
        )}

        <p>{product.description}</p>
        <h3>${product.price}</h3>

        <div style={{ display: "flex", alignItems: "center" }}>
          <button className="back-btn" onClick={() => navigate("/products")}>
            ← Back to Products
          </button>

          {!cartItem ? (
            <button className="add-cart" onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          ) : (
            <div className="qty-box">
              <button onClick={() => dispatch(decreaseQty(product.id))}>-</button>
              <span>{cartItem.quantity}</span>
              <button onClick={() => dispatch(increaseQty(product.id))}>+</button>
            </div>
          )}
        </div>
      </InfoBox>
    </Wrapper>
  );
}

export default ProductDetails;
