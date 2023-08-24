import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import classes from "./AuthForm.module.css";
import { Cart } from "../store/CartContext";

const AuthForm = () => {
  const navigate = useNavigate();
  const authCntx = useContext(Cart);
  const [isSending, setIsSending] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();


  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsSending(true);
    let url;
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA7LLRIjtSq4HgQe99jfMxvMj_V510RQAU";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsSending(false);
        if (res.ok) {
          navigate('/')
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCntx.login(data.idToken,enteredEmail);

      })
      .catch((err) => alert(err.message));
  };

  return (
    <section className={classes.auth}>
      <h1>{"Login" }</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {isSending ? (
            <p style={{ color: "white" }}>Sending Request...</p>
          ) : (
            <button>{ "Login" }</button>
          )}
          <button
            type="button"
            className={classes.toggle}
          >
            
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
