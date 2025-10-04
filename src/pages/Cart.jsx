import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { increaseQty, decreaseQty } from "../redux/productsSlice";
import styled from "styled-components";
import { Container } from "../ui/ui.styled";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border-radius: 20px;

  td {
    padding: 12px 10px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    font-weight: 600;
  }

  th {
    background: #ff9800;
    color: white;
    font-weight: 600;
    padding: 12px 10px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 5px;
  }

  .qty-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    button {
      padding: 5px 10px;
      background: #ff9800;
      border: none;
      color: white;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      transition: background 0.3s ease;

      &:hover { background: #e68900; }
    }

    span { min-width: 25px; text-align: center; }
  }

  .total {
    font-weight: 600;
    color: #ff9800;
  }

 
  @media (max-width: 471px) {
    font-size: 0.4rem;
    margin-left: -4px;
    display: inline-table !important;

    td, th {
      padding: 8px 5px;
      font-weight: 200;
      font-size: small;
    }

    img {
      width: 40px;
      height: 40px;
    }

    .qty-box{
       display: flex;
    justify-content: center;
    align-items: center;
      gap: 0;
     button {
      padding: 1px 3px;
      font-size: 0.8rem;
    }}
      
    display: block;
    overflow-x: auto;
  }
`;


const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh; 
  font-size: 2rem;
  font-weight: 700;
  color: #ff9800;
  text-align: center;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 12px 25px;
  background: #ff9800;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover { background: #e68900; }
`;

export default function Cart() {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/products");
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container>
      {cart.length === 0 ? (
        <EmptyContainer>
          <p>Your cart is empty</p>
          <Button onClick={handleContinueShopping}>Continue Shopping</Button>
        </EmptyContainer>
      ) : (
        <>
          <Table>
            <thead style={{borderRadius:"20px"}}>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((p) => (
                <tr key={p.id}>
                  <td><img src={p.image} alt={p.title} /></td>
                  <td>{p.title}</td>
                  <td>${p.price}</td>
                  <td>
                    <div className="qty-box">
                      <button onClick={() => dispatch(decreaseQty(p.id))}>-</button>
                      <span>{p.quantity}</span>
                      <button onClick={() => dispatch(increaseQty(p.id))}>+</button>
                    </div>
                  </td>
                  <td className="total">${(p.price * p.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h3 style={{ color:"#ff9800", marginTop: "20px" }}>Total: ${totalPrice.toFixed(2)}</h3>
          <Button onClick={handleContinueShopping}>Continue Shopping</Button>
        </>
      )}
    </Container>
  );
}
