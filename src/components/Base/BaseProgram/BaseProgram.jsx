import "./BaseProgram.scss";
import {Card, Container, GoLink, List} from "../../../ui";

export default function BaseProgram() {
    const cards = [
        {id: 1, src: "/assets/img/program/program_1.png"},
        {id: 2, src: "/assets/img/program/program_2.svg"}
    ];
    return (
        <section className={"baseProgram"}>
            <Container>
                <div className={"baseProgram__header"}>
                    <h2 className={"header__title"}>
                        Программы
                    </h2>
                    <GoLink
                        to={"#"}
                        text={"Подробнее о программах"}
                    />
                </div>
                <List
                    className={"baseProgram__cards"}
                    items={cards}
                    renderItem={({id, src}) => (
                        <Card
                            key={id}
                            className={"baseProgram__card"}
                            style={{
                                backgroundImage: `url(${src})`
                            }}
                        />
                    )}
                />
            </Container>
        </section>
    );
};