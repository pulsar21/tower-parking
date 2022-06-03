import classNames from "classnames";
import "./Card.scss";

export default function Card(props) {
    const {children, className, width, height, style} = props;
    return (
        <div className={classNames("card", className)} style={{width, height, ...style}}>
            {children}
        </div>
    );
};