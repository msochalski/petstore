import React from "react";
import Head from "next/head";
import { Button, Grid } from "@nextui-org/react";
import Script from "next/script";
import Link from "next/link";
import {changeImage1, changeImage2, changeImage3} from '/goodFunctions/changeImageFood.js';

function Food() {
  return (
    <>
      <Head>
        <>
          <title>Food4Sale</title>
          <link 
            rel="stylesheet" 
            type="text/css" 
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
            media="screen,projection"/>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href='../css/styles.css'
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
              <Link href="/dog">Dogs</Link>
            </li>
            <li>
              <Link href="/cat">Cats</Link>
            </li>
            <li>
              <Link href="/home">Home</Link>
            </li>
          </ul>
        </div>
      </nav>
      <h1 className="hello">Food For Sale</h1>
      <div className="container">
        <div className="child" data-tilt="">
          <h3>Dry Dog Food Turkey and Rice</h3>
          <img
            id="imgClickAndChange1"
            src="https://media.petsathome.com/wcsstore/pah-cas01//300/5793PL.jpg"
            alt="DryDogFood"
            className="image"
          />
          <p className="hello">
            Size: 15kg
            <br /> Packaging: N/A
            <br /> Price: 0.000051 BTC
            <br /> <br />
            <Button shadow color ="secondary" onClick={() => changeImage1()} className="button1">
              Buy
            </Button>
          </p>
        </div>
        <br />
        <div className="child" data-tilt="">
          <h3>Whiskas Wet Adult Cat Food Poultry</h3>
          <img
            id="imgClickAndChange2"
            src="https://media.petsathome.com/wcsstore/pah-cas01//300/7135987PL.jpg"
            alt="WetCatFood"
            className="image"
          />
          <p className="hello" />
          
          <p className="hello">
            Size: 12x85g
            <br /> Packaging: Pouches
            <br /> Price: 0.000051 BTC
            <br /> <br />
            <Button onClick={() => changeImage2()} className="button2">
              Buy
            </Button>
          </p>
        </div>
        <br />
        <div className="child" data-tilt="">
          <h3>Whiskas Complete Dry Kitten Food With Chicken</h3>
          <img
            id="imgClickAndChange3"
            src="https://media.petsathome.com/wcsstore/pah-cas01//300/15578PL.jpg"
            alt="DryKittenFood"
            className="image"
          />

          <p className="hello">
            Size: 2kg
            <br /> Packaging: N/A
            <br /> Price: 0.00036 BTC
            <br /> <br />
            <Button onClick={() => changeImage3()} className="button3">
              Buy
            </Button>
          </p>
        </div>
      </div>
      <Script type="text/javascript" src="../scripts/vanilla-tilt.min.js"></Script>
    </>
  );
}

export default Food;
