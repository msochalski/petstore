import React from "react";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import {changeImage1, changeImage2, changeImage3} from '/goodFunctions/changeImageDog.js';


function Dog() {
  return (
    <>
    <Head><>
          <title>Dogs4Sale</title>
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
            href="../css/style.css"
            type="text/css"
            rel="stylesheet"
            media="screen,projection"
          />
        </></Head>
  <nav>
    <div className="nav-wrapper">
      <a href="images/Knut.png" className="brand-logo right">
        Pet Store
      </a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li>
          <Link href="/home">Home</Link>
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
  <h1 className="hello">Dogs For Sale</h1>
  <div className="container">
    <div className="child" data-tilt="">
      <h3>Alaskan Malamute</h3>
      <img
        id="imgClickAndChange1"
        src="https://thumbs.dreamstime.com/b/alaskan-malamute-sitting-front-white-background-alaskan-malamute-sitting-front-white-background-141770151.jpg"
        alt="Alaskan Malamute"
        className="image"
      />
      <p className="hello">
        Name: Silver
        <br /> Age: 1<br /> Personality: Vibrant
        <br />
        Price: 0.003621 BTC
        <br /> <br />
        <button onClick={() => changeImage1()} className="button1">
          Buy
        </button>
      </p>
    </div>
    <br />
    <div className="child" data-tilt="">
      <h3>German Shepard</h3>
      <img
        id="imgClickAndChange2"
        src="https://www.purina.co.uk/sites/default/files/2021-02/BREED%20Hero_0053_german_shepherd.jpg"
        alt="GerShep"
        className="image"
      />
      <p className="hello" />
      <p className="hello">
        Name: Silk
        <br /> Age: 3<br /> Personality: Friendly
        <br />
        Price: 0.002917 BTC
        <br /> <br />
        <button onClick={() => changeImage2()} className="button2">
          Buy
        </button>
      </p>
    </div>
    <br />
    <div className="child" data-tilt="">
      <h3>Golden Labrador Retriever</h3>
      <img
        id="imgClickAndChange3"
        src="https://media.istockphoto.com/photos/labrador-panting-picture-id92372094?k=20&m=92372094&s=612x612&w=0&h=ogtfwNCy5a5YXI41ibnI65tKX7iYqKXF7MkNSh7yG_E="
        alt="GoldLab"
        className="image"
      />
      <p className="hello">
        Name: Milly
        <br /> Age: 5<br /> Personality: Lazy
        <br />
        Price: 0.003271 BTC
        <br /> <br />
        <button onClick={() => changeImage3()} className="button3">
          Buy
        </button>
      </p>
    </div>
  </div>
  <Script type="text/javascript" src="../scripts/vanilla-tilt.min.js"></Script>
</>

  )
}

export default Dog;