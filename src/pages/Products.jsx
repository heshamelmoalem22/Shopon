import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../ui/ProductList";
import { fetchProducts } from "../redux/productsSlice";
import Spinner from "../ui/Spinner";

function Products() {
  const dispatch = useDispatch();
  const { items,loading} = useSelector((state) => state.products);

  useEffect(() => {
    if (items.length === 0) { 
      dispatch(fetchProducts());
    }
  }, [dispatch, items.length]);

  if (loading) return <Spinner/>;

  return <ProductList products={items} />;
}

export default Products;
