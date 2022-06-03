import "./Base.scss";
import {BaseDigital, BaseNews, ContactUs} from "../../components";

export default function Base() {
    return (
        <article className={"base"}>
            <BaseDigital/>
            <BaseNews/>
            <ContactUs title={"Smart parking - Best parking"}/>
        </article>
    );
};