import { useEffect, useMemo, useState } from "react";
import { fetchUtil } from "./utils/api";
import { IProduct } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { addItem, emptyCart } from "./redux/slices/cartSlice";
import { moveTab } from "./utils/tabUtil";

const useShop = (changeTab: any) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state?.cart);
  const [products, setProducts] = useState<IProduct[]>([]);

  const chocolates = useMemo(() => {
    return (
      products.find((product) => product?.id === cart.chips)?.chocolates || []
    );
  }, [cart.chips]);

  const drinks = useMemo(() => {
    return products.find((product) => product?.id === cart.chips)?.drinks || [];
  }, [cart.chips]);

  useEffect(() => {
    fetchUtil({
      url: "https://tht-shaxadhere.vercel.app/data.json",
      method: "GET",
    })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addToCart = ({ id, type }: { id: string; type: string }) => {
    dispatch(addItem({ id, type }));
    moveTab(type, changeTab);
  };

  const clearCart = () => {
    dispatch(emptyCart());
    moveTab("reset", changeTab);
  };

  const onBuy = () => {
    setOrderPlaced(true);
    clearCart();
    setTimeout(() => {
      setOrderPlaced(false);
    }, 3000);
  };

  return {
    products,
    chocolates,
    drinks,
    cart,
    addToCart,
    clearCart,
    onBuy,
    orderPlaced
  };
};

export default useShop;
