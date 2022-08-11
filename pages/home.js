import React from "react";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
function Home() {
  return (
    <>
      <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Pet Store</title>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            href="css/materialize.min.css"
            type="text/css"
            rel="stylesheet"
            media="screen,projection"
          />
          <link
            href="css/style.css"
            type="text/css"
            rel="stylesheet"
            media="screen,projection"
          />
      </Head>
      <nav>
        <div className="nav-wrapper">
          <a href="images/Knut.png" className="brand-logo right">
            Pet Store
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <a href="/dog">Dogs</a>
            </li>
            <li>
              <a href="/cat">Cats</a>
            </li>
            <li>
              <a href="/food">Food</a>
            </li>
            <li>
              <a href="/converter">Crypto Conversion</a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <br />
            <br />
            <h1 className="header center teal-text text-lighten-2">
              Pet Store
            </h1>
            <div className="row center">
              <h5 className="header col s12 light">
                A modern responsive front-end website for a Pet Shop
              </h5>
            </div>
            <br />
            <br />
          </div>
        </div>
        <div className="parallax">
          <img src="/images/petshop-bg.jpg" alt="petshopbackground"/>
        </div>
      </div>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 center">
              <h3>
                <i className="mdi-content-send brown-text" />
              </h3>
              <h4>Interested?</h4>
              <p className="left-align light">
                Interested in Buying or Selling pets? You have come to the right
                store. Here you can sell and buy pets through the use of
                Cryptocurrency mainly Bitcoin (BTC) but conversions can be made
                to other cryptocurrencys such as Ethereum (ETH) or Solana (SOL)
                and many more!! All whilst being off the grid and avoiding Tax!
                Are you Ready?
              </p>
              <button>
                <a href="converter.html">Im Ready</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="page-footer teal">
        <div className="footer-copyright">
          <div className="container">
            Made by
            <a
              className="brown-text text-lighten-3"
              href="https://github.com/msochalski"
            >
              Mateusz Sochalski
            </a>
          </div>
        </div>
      </footer>

        <Script src="https://code.jquery.com/jquery-2.1.1.min.js"></Script>
        <Script src="./pages/api/materialize.js"></Script>
        <Script src="pages\api\init.js"></Script>

    </>
  );
}

export default Home;
