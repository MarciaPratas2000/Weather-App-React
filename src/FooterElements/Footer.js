import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <p>
          This project was coded by {" "}
          <a href="https://github.com/MarciaPratas2000" target="_blank"   rel="noreferrer" >
            Márcia Pratas
          </a>
          , is {" "}
          <a
            href="https://github.com/MarciaPratas2000/Weather-App-React"
            target="_blank"
            rel="noreferrer" 
          >
            open-sourced on GitHub
          </a>{" "}
          and
          <a
            href="https://weather-app-marcia-react.netlify.app/"
            target="_blank"
            rel="noreferrer" 
          > {" "}
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}
