import React from "react";

const name = "My name is Madhab";

const styleCustom = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

styleCustom.color = "green"; /* On the go styling */

function List() {
  return (
    <>
      <ul className="listStyle">
        <li>Apple</li>
        <li>Mango</li>
        <li>Orange</li>
      </ul>
      <p style={{ color: "blue" }}>This is a paragraph</p>
      {/* inline styling example */}
      <p style={styleCustom}>{name}</p> {/* Style using variable */}
    </>
  );
}

export default List;
