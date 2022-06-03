import {Link} from "react-router-dom";
import classNames from "classnames";
import "./GoLink.scss";

export default function GoLink(props) {
    return (
        <Link className={classNames("goLink", props.className)} {...props}>
            {props.text} →
        </Link>
    );
};