// React.createElement(HTML Tag, attributes, Children / Array of childrens)
const heading = React.createElement("h1", {id:'heading'}, "Hello World from React!!!");

// JS Object (A React element)
console.log(heading);   

const root = ReactDOM.createRoot(document.getElementById('root'));

// render will convert heading JS object convert it into HTML h1 tag and put this inside root.
root.render(heading);



// Suppose you want to create a nested HTML page -

{/* <div id="parent">
    <div id="child">
        <h1>React Nested Heading1 !!</h1>
        <h2>React Nested Heading2 !!</h2>
    </div>
</div> */}


const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        [React.createElement("h1", {id: 'heading'}, "React Nested Heading1 !!"), React.createElement("h2", {}, "React Nested Heading2 !!")]
    )
);

//Replace the root div content with the parent react element (A JS Object).
root.render(parent);
