import { BsStarFill } from "react-icons/bs";
import Toggle from "./components/headlessToggle/Index";

export default function Star({ onStar }) {
    // The toggle component is going to accept as a prop this onToggle function. Just like we did prior to the intro to refs.

    return (
        <Toggle onToggle={() => onStar()}>
            <Toggle.Switch>
                <Toggle.On>
                    <BsStarFill style={{ color: "gold" }} />
                </Toggle.On>
                <Toggle.Off>
                    <BsStarFill style={{ color: "black" }} />
                </Toggle.Off>
            </Toggle.Switch>
        </Toggle>
    );
}
