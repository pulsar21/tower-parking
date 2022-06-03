import React from 'react';
import "./About.scss";
import {Container, List} from "../../ui";
import {ContactUs} from "../../components";

const About = () => {
    const lists = [
        {id: 1, text: "Single Side Tower Parking System"},
        {id: 2, text: "Both Side Tower Parking System (1+1)"},
        {id: 3, text: "Double-Dip Tower Parking System (2+2)"},
        {id: 4, text: " Triple-Dip Tower Parking System (3+3)"},
    ]

    const specifications = [
        {id: 1, text: "Turn-table mechanism at the bottom to rotate the car 180/90 degrees."},
        {id: 2, text: "Enables the car to be driven out without reversing."},
        {id: 3, text: "Can accommodate 20 to 120 cars."},
        {id: 4, text: "Available as Twin, Double and Triple tower models, based on specific customer requirement."},
    ]

    const types = [
        {id: 1, src: "/assets/img/types/type_1.jpg"},
        {id: 3, src: "/assets/img/types/type_3.jpg"},
        {id: 2, src: "/assets/img/types/type_2.jpg"},
    ];
    return (
        <section className={"about"}>
            <Container>
                <div className={"about__info"}>
                    <div className={"info__text"}>
                        <h2 className={"info__title"}>
                            Lift Assisted High Rise Tower Parking System
                        </h2>
                        <p className={"info__desc"}>
                            This is a system wherein a separate tower or building is dedicated (in most cases) for parking
                            spaces. It can accommodate 80 to 120 cars and can be designed to meet any type of car requirements,
                            making it suitable for hatchbacks, SUVs, sedans and MUVs. This system can also be installed within
                            the project building itself.
                        </p>
                        <p className={"info__desc"}>
                            Car parking tower system mainly comprises of vertical columns, a lift for vertical movement of
                            vehicles, and pallets for horizontal movement. As the car enters the building space through the
                            entrance room, it is then raised onto the parking space through the main lift and then moved into
                            empty space using pallet movement. It is completely hassle free as it’s an automated system with no
                            human intervention, making it much safer.
                        </p>
                    </div>
                    <div className={"info__img"}>
                        <img src="/assets/img/sliders/slider_3.jpg" alt=""/>
                    </div>
                </div>
            </Container>
            <Container>
                <div className={"about__list"}>
                    <h3 className={"list__title"}>
                        List of products in this category
                    </h3>
                    <ul className={"list__items"}>
                        {
                            lists.map((list) => (
                                <li className={"list__item"} key={list.id}>
                                    {list.text}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Container>
            <div className={"about__specifications"}>
                <Container>
                    <div className={"specification__content"}>
                        <h3 className={"specification__title"}>
                            Specifications
                        </h3>
                        <ul className={"specification__items"}>
                            {
                                specifications.map((list) => (
                                    <li className={"specification__item"} key={list.id}>
                                        {list.text}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </Container>
            </div>
            <Container>
                <div className={"about__types"}>
                    <h3 className={"type__title"}>
                        System Types
                    </h3>
                    <List
                        className={"type__list"}
                        items={types}
                        renderItem={(type) => (
                            <li key={type.id} className={"type__item"}>
                                <img className={"type__img"} src={type.src} alt="type"/>
                            </li>
                        )}
                    />
                </div>
            </Container>
            <ContactUs title={"Lets Connect To Discuss Your Requirements"}/>
        </section>
    );
};

export default About;