/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Script from "next/script";
import { buyItem } from "../goodFunctions/buyItems";

const item = "Food";

function Food() {
  return (
    <>
      <Head>
        <>
          <title>Food4Sale</title>
          <link rel="stylesheet" type="text/css" href="css/styles.css" />
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
        </>
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
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/converter">Crypto Conversion</a>
            </li>
          </ul>
        </div>
      </nav>
      <h1 className="hello">Food For Sale</h1>
      <div className="container">
        <div className="child" data-tilt="">
          <h3>Dry Dog Food Turkey and Rice</h3>
          <img
            id={1}
            src="https://media.petsathome.com/wcsstore/pah-cas01//300/5793PL.jpg"
            alt="DryDogFood"
            className="image"
          />
          <p className="hello">
            Size: 15kg
            <br /> Packaging: N/A
            <br /> Price: 0.000051 BTC
            <br /> <br />
            <button className="button1" onClick={buyItem(1)}>
              Buy
            </button>
          </p>
        </div>
        <br />
        <div className="child" data-tilt="">
          <h3>Whiskas Wet Adult Cat Food Poultry</h3>
          <img
            id={2}
            src="https://media.petsathome.com/wcsstore/pah-cas01//300/7135987PL.jpg"
            alt="WetCatFood"
            className="image"
          />
          <p className="hello" />
          <p className="hello">
            Size: 12x85g
            <br /> Packaging: Pouches
            <br /> Price: 0.000051 BTC
            <br />
            <br />{" "}
            <button className="button2" onClick={buyItem(2)}>
              Buy
            </button>
          </p>
        </div>
        <br />
        <div className="child" data-tilt="">
          <h3>Whiskas Complete Dry Kitten Food With Chicken</h3>
          <img
            id={3}
            src="https://media.petsathome.com/wcsstore/pah-cas01//300/15578PL.jpg"
            alt="DryKittenFood"
            className="image"
          />
          <p className="hello">
            Size: 2kg
            <br /> Packaging: N/A
            <br /> Price: 0.00036 BTC
            <br /> <br />
            <button className="button3" onClick={buyItem(3)}>
              Buy
            </button>
          </p>
        </div>
      </div>
      <Script type="text/javascript" src="scripts/vanilla-tilt.min.js"></Script>
    </>
  );
}

export default Food;
