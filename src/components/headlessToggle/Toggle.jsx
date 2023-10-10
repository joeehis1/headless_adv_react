import { createContext, useEffect, useRef, useState } from "react";

const ToggleContext = createContext();

//In the course we are supposed to be calling onToggle whenever isToggled(in the course this is the "on" state value) changes. The "on" state value changes whenever you click on the star i.e in response to a click event. Event logic belongs in a click handler. But in the course it is placed in an effect. Now look what happens when you try to use a ref to make this code not run on first render.

export default function Toggle({ children, onToggle = function () {} }) {
    const [isToggled, setIsToggled] = useState(false);

    const firstRender = useRef(true);

    function toggle() {
        setIsToggled(!isToggled);

        //If you have any question as to why im setting a boolean state this way, go through the react docs. Also this state value is only ever one or the other. So i think this is more concise than using an updater function.
    }

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
        } else {
            onToggle();
        }
    }, [isToggled]);

    return (
        <ToggleContext.Provider value={{ isToggled, toggle }}>
            {children}
        </ToggleContext.Provider>
    );
}

export { ToggleContext };
