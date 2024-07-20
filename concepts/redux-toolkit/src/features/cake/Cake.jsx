import { useSelector, useDispatch } from "react-redux";
import { order, restock } from "./cakeSlice";

const Cake = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <div>Number of Cakes: {numOfCakes}</div>
      <div>
        <button onClick={() => dispatch(order())}>Order</button>
        <button onClick={() => dispatch(restock(5))}>Restock 5 cakes</button>
      </div>
    </div>
  );
};

export default Cake;
