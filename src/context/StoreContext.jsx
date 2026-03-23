import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dummyProducts } from "../assets/assets";
import { toast } from "react-toastify";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isSeller, setIsSeller] = useState(true);

  //===============Load Initial Products=============
  const [products, setProducts] = useState(null);
  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  //==================================================

  //============Load Initial Cart Items===============
  const [cart, setCart] = useState([]);

  //add to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);

      if (existingItem) {
        toast.success("Item addes successfully..!");
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        toast.success("Item addes successfully..!");
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  //update quantity
  const updateQuantity = (id, quantity) => {
    let removed = false;
    setCart((prevCart) => {
      if (quantity < 1) {
        toast.success("Item removed from  cart.");
        return prevCart.filter((item) => item._id !== id);
      }

      return prevCart.map((item) =>
        item._id === id ? { ...item, quantity } : item,
      );
    });
  };

  //remove from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      toast.success("Item removed from cart");
      return prevCart.filter((item) => item._id !== id);
    });
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
    toast.success("Cart has been cleared.");
  };

  // total cart count
  const cartCount = useMemo(
    () => cart.reduce((total, currentItem) => total + currentItem.quantity, 0),
    [cart],
  );

  // total cart amount
  const cartTotal = useMemo(
    () =>
      cart?.reduce(
        (total, currentItem) =>
          total + currentItem.quantity * currentItem.price,
        0,
      ),
    [cart],
  );

  //==================================================================

  //============Search Product by Type===============
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <StoreContext.Provider
      value={{
        products,
        currency,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cart,
        cartCount,
        cartTotal,
        showLoginForm,
        setShowLoginForm,
        searchTerm,
        setSearchTerm,
        isSeller,
        setIsSeller,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => useContext(StoreContext);
