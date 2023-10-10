import { useContext } from "react";
import { ToggleContext } from "./Toggle";

export default function On({ children }) {
    const { isToggled } = useContext(ToggleContext);
    return isToggled ? children : null;
}
