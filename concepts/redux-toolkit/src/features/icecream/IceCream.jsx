import { useSelector, useDispatch } from "react-redux";
import { order, restock } from "./iceCreamSlice";

const IceCream = () => {
  const numOfIceCreams = useSelector((state) => state.icecream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Number of IceCreams: {numOfIceCreams}</div>
      <div>
        <button onClick={() => dispatch(order())}>Order</button>
        <button onClick={() => dispatch(restock(5))}>
          Restock 5 IceCreams
        </button>
      </div>
    </div>
  );
};

export default IceCream;
