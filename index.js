import React from "react";
import ReactDOM from "react-dom/client";

const reactHeading = React.createElement(
  "div",
  {
    id: "container",
  },
  [
    React.createElement(
      "h1",
      {
        id: "title",
        key: "h1",
      },
      "heading 1 from Parcel"
    ),
    React.createElement(
      "h2",
      {
        id: "title",
        key: "h2",
      },
      "heading 2"
    ),
    React.createElement(
      "h3",
      {
        id: "title",
        key: "h3",
      },
      "heading 3"
    ),
  ]
);

const jsxHeading = (
  <div>
    <h1>heading 1 from JSX</h1>
    <h2>heading 2 from JSX</h2>
    <h3>heading 3 from JSX</h3>
  </div>
);

const Title = () => {
  return <h1>Namaste React</h1>;
};
const ReactComponent = () => {
  return (
    <div>
      {Title()}
      <Title />
      {<Title />}
      <h1>heading 1 from Component</h1>
      <h2>heading 2 from Component</h2>
      <h3>heading 3 from Component</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactHeading);
root.render(jsxHeading);
root.render(<ReactComponent />);
