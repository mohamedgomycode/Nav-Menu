import React from "react";
import Menu from "./menu";

import "../App.css";
function nav(props) {
  return (
    <ul className=" dropdown">
      {props.liste.map((el, i) => (
        <div key={i} className={`item item-${el.title}`}>
          <li >
            {el.title}
          </li>
         {el.title === 'Services' &&  <Menu />}
        </div>
      ))}
    </ul>
  );
}
export default nav;
