import "./Base.scss";
import {BaseDigital, BaseNews, BaseProgram, ContactUs} from "../../components";

export default function Base() {
    return (
        <article className={"base"}>
            <BaseDigital/>
            {/*<BaseProgram/>*/}
            <BaseNews/>
            <ContactUs title={"Smart parking - Best parking"}/>
        </article>
    );
};