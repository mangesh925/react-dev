///HTML------------------------
{
  /* <div id="parent">
  <div id="child">
    <h1>Hi, Hello</h1>
    <h1>Hi, Hello</h1>
  </div>
  <div id="child2">
    <h1>Hi, Hello</h1>
    <h1>Hi, Hello</h1>
  </div>
</div>; */
}

//REACT------------------------

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello World"),
    React.createElement("h1", {}, "Hello World"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello World"),
    React.createElement("h1", {}, "Hello World"),
  ]),
]);

// JSX
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
