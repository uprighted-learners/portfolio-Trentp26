//Imports hooks from react
import React from "react";
import "./styles/Style.scss";
import linkedImg from "./IMG/linkedIn.jpg";

export default function Footer() {
  return (
    <div className="Footer">
      
        <div> Contact Info </div>
        <div> (802)777-4398</div>
        <div> Email: trentpoitras@gmail.com</div>
      
      <div>
        <a href="https://www.linkedin.com/in/trenton-poitras-5b5770198/">
          <img src={linkedImg} alt="Linked in img" />
        </a>
        <a href=""></a>
      </div>
    </div>
  );
}