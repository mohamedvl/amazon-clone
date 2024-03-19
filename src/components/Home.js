import React from "react";
import home from "../imeges/home.jpg";
import Product from "./Product";
import "./Home.css";
import shortid from "shortid";
import Product1 from "../imeges/1.png"
import Product2 from "../imeges/2.png"
import Product3 from "../imeges/3.png"
import Product4 from "../imeges/4.png"
import Product5 from "../imeges/5.png"
import Product6 from "../imeges/6.png"




const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image" alt="" src={home} />

        <div className="home-row">
          <Product
            id={shortid.generate()}
            image={Product1}
            price={64}
            title="Rzer Kraken Toutnament Edtion Surround"
            rating={5}
          />
          <Product 
          id={shortid.generate()}
          image={Product2}
          price={64}
          title="Rzer Kraken Toutnament Edtion Surround"
          rating={5}/>
        </div>

        <div className="home-row">
          <Product 
            id={shortid.generate()}
            image={Product3}
            price={64}
            title="Rzer Kraken Toutnament Edtion Surround"
            rating={5}/>
          <Product 
            id={shortid.generate()}
            image={Product4}
            price={64}
            title="Rzer Kraken Toutnament Edtion Surround"
            rating={5}/>
          <Product 
            id={shortid.generate()}
            image={Product5}
            price={64}
            title="Rzer Kraken Toutnament Edtion Surround"
            rating={5}/>
        </div>

        <div className="home-row">
          <Product 
            id={shortid.generate()}
            image={Product6}
            price={64}
            title="Rzer Kraken Toutnament Edtion Surround"
            rating={5}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
