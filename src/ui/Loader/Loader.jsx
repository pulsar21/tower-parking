import classNames from "classnames";
import "./Loader.scss";

export default function Loader({className}) {
    return (
        <div className={classNames("loader", className)}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    );
};