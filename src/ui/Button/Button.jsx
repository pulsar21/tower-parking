import {Fragment} from "react";
import classNames from "classnames";
import Loader from "../Loader/Loader";
import "./Button.scss";

export default function Button(props) {
    const {
        className, text, iconLeft,
        loading, loaderClassName, width,
        height, ...otherProps
    } = props;
    return (
        <button
            className={classNames("btn", className)}
            style={{width, height}}
            {...otherProps}
        >
            {
                loading
                    ? <Loader className={loaderClassName}/>
                    : <Fragment>
                        {iconLeft && <div className={"btn__icon--left"}>
                            {iconLeft}
                        </div>}
                        {text}
                    </Fragment>
            }
        </button>
    );
};