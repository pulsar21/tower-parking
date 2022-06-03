import "./ContactUs.scss";
import {Button, Container, Input} from "../../ui";
import {useState} from "react";
import {toast} from "react-toastify";

export default function ContactUs({title}) {
    const [email, setEmail] = useState("");

    const onSubscribe = () => {
        if (email.length > 0) {
            toast("Email send!", {
                type: "success",
                position: "top-right"
            })
            setEmail("");
        }
    };
    return (
        <section className={"contactUs"}>
            <Container>
                <div className={"contactUs__content"}>
                    <img
                        className={"contactUs__img"}
                        src={"/assets/img/logo.jpg"}
                        alt={"logo"}
                    />
                    <div className={"contactUs__info"}>
                        <h3 className={"info__title"}>
                            {title}
                        </h3>
                        <p className={"info__desc"}>
                            For additional information
                        </p>
                        <div className={"info__mailing"}>
                            <div className={"info__field"}>
                                <Input
                                    className={"info__input"}
                                    placeholder={"mail@example.com"}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Button
                                    className={"btn--danger info__btn"}
                                    text={"Subscribe"}
                                    onClick={onSubscribe}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};