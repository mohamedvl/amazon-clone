import "./App.css";
import React, { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useAuth } from "./context/GlobalState";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

function App() {
  const { dispatch } = useAuth();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Header />
              <Home />
            </Fragment>
          }
        />

        <Route
          path="/checkout"
          element={
            <Fragment>
              <Header />
              <Checkout />
            </Fragment>
          }
        />
        <Route
          path="payment"
          element={
            <Fragment>
              <Header />
              <Payment />
            </Fragment>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h2>page not found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
