import React from "react";
import ReactDOM from "react-dom/client";
const heading=React.createElement("h1",{
    id:"headding",
    xyz:"abc"
},"Hello World from React!!"); // {} it is for giving the attribute to the object. like id:"heading"
// heading is an object not the h1 yet
const root=ReactDOM.createRoot(document.getElementById("root"));

/*
let we want to something like this
<div id="parent">
    <div id="child">
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag </h2>
    </div>
</div>

if you want to make more than one child then you have to create in an array.
other wise just give the normal.

*/ 

const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I,m the h1"),
        React.createElement("h2",{},"I,m the h2....")
    ])
)

root.render(parent);// root.render converting the object into h1 and rendering it into root.