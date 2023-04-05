import React from "react";
import ReactDOM from "react-dom/client";

// Printing nested tags
{
    /* <h1 id="heading" class="heading">Namaste bhaiyon.</h1> */
}

// 👇
// const heading = React.createElement(
//     "h1",
//     { id: "heading", class: "heading" },
//     "Namaste bhaiyon."
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//
//
//
//
//
//
//
//
//
// Printing siblings in nested tags
{
    /* <div id="parent">
    <div id="child">
        <h1 id="head1"></h1>
        <h2 id="head2"></h2>
    </div>
</div>  */
}
// 👇
// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement("div", { id: "child" }, [
//         React.createElement("h1", { id: "head1" }, "I'm h1 tag"),
//         React.createElement("h2", { id: "head2" }, "I'm h2 tag"),
//     ])
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
//
//
//
//
//
//
//
// Printing nested tags inside sibling tags
{
    /* <div id="parent">
    <div id="child1">
        <h1 id="head1"></h1>
        <h2 id="head2"></h2>
    </div>
    <div id="child2">
        <h1 id="head1"></h1>
        <h2 id="head2"></h2>
    </div>
</div>; */
}
// 👇
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", { id: "head1" }, "I'm Aniruddh Singh"),
        React.createElement("h2", { id: "head2" }, "I'm Aniruddh Singh"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", { id: "head1" }, "I'm Namaste React"),
        React.createElement("h2", { id: "head2" }, "I'm Namaste Javascript44"),
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
