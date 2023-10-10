import { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import Star from "./Star";

// This is the most simplistic version of the app that we were building. Im using the star component to point out what i was talking about. Star is going to accept a function that will get called when you click on it. Internally its going to use the headless toggle component. There's not really any need per say to use the render props to prove what i was talking about.

function App() {
    return (
        <>
            <Star onStar={() => console.log("I got starred")} />
        </>
    );
}

export default App;
