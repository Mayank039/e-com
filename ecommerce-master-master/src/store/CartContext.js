import React, { useEffect, useState } from "react";
import axios from "axios";

export const Cart = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (item) => {},
  token: "",
  isLoggedin: false,
  login: (token, mail) => {},
  logout: () => {},
});

const CartContext = (props) => {
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);
  const email = localStorage.getItem("email");
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  let userIsLoggedIn = !!token;

  const loginHandler = (token, mail) => {
    setToken(token);
    localStorage.setItem("token", token);
    const email = mail.replace(/[^a-zA-Z0-9]/g, "").toString();
    localStorage.setItem("email", email);
  };

  const logoutHandler = () => {
    setToken(null);
    userIsLoggedIn = false;
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    alert("logout called");
  };

  useEffect(() => {
    axios
      .get(
        `https://crudcrud.com/api/f4ddc46a933a494abc20745ec63d82f4/cart${email}`
      )
      .then((res) => {
        setData(res.data);
        const newItem = res.data.map(({_id,...rest})=>{
            return rest;
        })
        setItems(newItem);

      })
      .catch((err) => {
        console.log(err);
      });
      
  }, []);

  const addItemHandler = (item) => {
    let addIt = true;
    let index;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === item.id) {
        addIt = false;
        index = i;
        break;
      }
    }

    if (addIt) {
      setItems([...items, item]);
      axios
        .post(
          `https://crudcrud.com/api/f4ddc46a933a494abc20745ec63d82f4/cart${email}`,
          item
        )
        .then((res) => {
          setData([...data, res.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log(`inside else`);
      let newItem = [...items];
      newItem[index].quantity++;
      let quant = newItem[index].quantity;
      setItems([...newItem]);
      let apiIndex = data.findIndex((ele) => ele.id === item.id);
      const mainId = data[apiIndex]._id;

      axios.put(
        `https://crudcrud.com/api/f4ddc46a933a494abc20745ec63d82f4/cart${email}/${mainId}`,
        item,
        (item.quantity = quant)
      ).then(() => console.log(`successfull put`)).catch((err) => console.log(`put failed`))
    }
  };

  const removeItemHandler = (item) => {
    let index;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === item.id) {
        index = i;
      }
    }
    let newItem = [...items];
    if (newItem[index].quantity > 1) {
      newItem[index].quantity--;
      let quant = newItem[index].quantity;
      setItems([...newItem]);
      let apiIndex = data.findIndex((ele) => ele.id === item.id);
      const mainId = data[apiIndex]._id;
      axios.put(
        `https://crudcrud.com/api/f4ddc46a933a494abc20745ec63d82f4/cart${email}/${mainId}`,
        item,
        (item.quantity = quant)
      ).then(() => console.log(`after successfull put`)).catch((err) => console.log(`put failed`))
    } else {
      newItem = newItem.filter((ele) => ele.id !== item.id);
      setItems(newItem);
      let apiIndex = data.findIndex((ele) => ele.id === item.id);
      const mainId = data[apiIndex]._id;
      axios.delete(`https://crudcrud.com/api/f4ddc46a933a494abc20745ec63d82f4/cart${email}/${mainId}`)

    }
  };

  const cartContext = {
    items: items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return <Cart.Provider value={cartContext}>{props.children}</Cart.Provider>;
};

export default CartContext;
