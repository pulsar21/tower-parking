import "./BaseDigital.scss";
import {Button, Card, Container, SlickSlider} from "../../../ui";
import classNames from "classnames";
import {useNavigate} from "react-router-dom";
import {ABOUT_ROUTE} from "../../../routes/consts";

export default function BaseDigital() {
    const navigate = useNavigate();
    const cardButtons = [
        {id: 1, text: "Read more", className: "btn--outlineDanger"},
        // {id: 2, text: "Онлайн-оплата", className: "btn--danger"}
    ];
    return (
        <section className={"baseDigital"}>
            <Container>
                <div className={"baseDigital__content"}>
                    <Card className={"baseDigital__card"}>
                        <h3 className={"card__title"}>
                            <strong>
                                Company Profile
                            </strong>
                        </h3>
                        <p>
                            Tower Parking is the latest company in the field of automated parking systems that are fully
                            adapted and suitable for all types of passenger vehicles. Tower Parking offers a variety of
                            parking solutions for all residential and commercial needs, using state-of-the-art products
                            that meet international quality standards.
                        </p>
                        <div className={"card__buttons"}>
                            {
                                cardButtons.map(({id, text, className}) => (
                                    <Button
                                        key={id}
                                        className={classNames("card__button", className)}
                                        text={text}
                                        onClick={() => navigate(ABOUT_ROUTE)}
                                    />
                                ))
                            }
                        </div>
                    </Card>
                    <Card className={"baseDigital__slider"}>
                        <SlickSlider/>
                    </Card>
                </div>
            </Container>
        </section>
    );
};