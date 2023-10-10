import { useContext } from "react";
import { ToggleContext } from "./Toggle";

export default function Switch({ children }) {
    const { toggle } = useContext(ToggleContext);

    return (
        <button className="star" onClick={() => toggle()}>
            {children}
        </button>
    );
}
