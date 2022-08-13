import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
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
            href="../css/materialize.min.css"
            type="text/css"
            rel="stylesheet"
            media="screen,projection"
          />
          <link
            href="../css/style.css"
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
              <Link href="/dog">Dogs</Link>
            </li>
            <li>
              <Link href="/cat">Cats</Link>
            </li>
            <li>
              <Link href="/food">Food</Link>
            </li>
          </ul>
        </div>
      </nav>
      <br/>
      <br/>
      <div className="container">
        <div className="row">
          <div className="col s12 center">
          Powered By <a
              className="blue-text text-lighten-3"
              href="https://web3.foundation/"
            >
              Web3
            </a>.
          </div>
        </div>
      </div>      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
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
                <Link href="/">Im Ready</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>      
      <br/>
      <br/>
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
        <Script src="../pages/api/materialize.js"></Script>
        <Script src="../pages/api/init.js"></Script>

    </>
  );
}

export default Home;
