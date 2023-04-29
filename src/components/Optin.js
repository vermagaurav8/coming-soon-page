import React, { Component } from "react";
import "./Optin.css";

class Optin extends Component {
  modal() {
    const modal = document.getElementById("modal");
    modal.classList.toggle("is_open");
  }

  render() {
    return (
      <div className="optin">
        <p>
          By the way, would you like to take a look at my previous portfolio
          website while we wait?
        </p>
        <button onClick={() => window.open("https://personal-website-2f514.web.app/", "_blank")}>Click Me</button>
        <p>If you need to contact me, feel free to reach out to me at <b>heygaurav8@gmail.com</b>.</p>
      </div>
    );
  }
}

export default Optin;
