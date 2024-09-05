import { useDispatch, useSelector } from 'react-redux';
import './OrderValue.css';
import { RiDeleteBinLine } from 'react-icons/ri';
import { incrementQuantity, decrementQuantity, removeProduct } from '../../redux/BasketSlice';


const getTotal = (cartItem) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  cartItem.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });
  return { totalPrice, totalQuantity };
};

const OrderValue = () => {
  const { products } = useSelector((state) => state.basketSlice);
  const dispatch = useDispatch();

  const { totalQuantity } = getTotal(products);
  const { totalPrice } = getTotal(products);

  const incrementCount = (item) => {
    dispatch(incrementQuantity(item));
  };
  const decrementCount = (item) => {
    dispatch(decrementQuantity(item));
  };
  const deleteProduct = (item) => {
    dispatch(removeProduct(item));
  };

  return (
    <div className="mt-8 w-full">
      <div className="w-full">
        {products && products.map((item, index) => <div className="order-value" key={index}>
          <div className="order-left">
            <img src={item.image} alt="" />
            <p className="mr-8 truncate">{item.title}</p>
          </div>

          <div className="order-right">
            <p className="mr-8 text-[#fb923c]">{item.price} ₺ </p>
            <div className="flex mr-8 items-center justify-around w-20">
              <button disabled={item.quantity === 1} onClick={() => decrementCount(item)}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => incrementCount(item)}>+</button>
            </div>
            <RiDeleteBinLine className="cursor-pointer" onClick={() => deleteProduct(item)} />
          </div>
        </div>)}
      </div>

      {
        totalQuantity > 0 ?
          <div>
            <h2 className="font-bold text-center text-2xl mb-5">Sipariş Özeti</h2>

            <h3 className="text-xl text-center  ">
              Sipariş Miktarı: <span className="font-bold"> {totalQuantity}</span>
            </h3>
            <h3 className="text-xl text-center mt-5  ">
              Sipariş Tutarı:
              <span className="font-bold"> {totalPrice} ₺</span>
            </h3>
          </div> : <div>Lütfen sepetinizi duldurunuz...</div>
      }

    </div>);

};

export default OrderValue;
