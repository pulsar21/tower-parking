import "./BaseNews.scss";
import {Card, Container, GoLink, List, Tag} from "../../../ui";
import {Link} from "react-router-dom";

export default function BaseNews() {
    const tags = [
        {id: 1, text: "Все"},
        {id: 2, text: "Мероприятие"},
        {id: 3, text: "Абитуриентам"},
        {id: 4, text: "Выпускники"},
        {id: 5, text: "Наука"}
    ];

    const cards = [
        {id: 1, src: "/assets/img/news/news_1.jpg", title: "Stack Park", date: "26.05.2022"},
        {id: 2, src: "/assets/img/news/news_2.jpg", title: "Hydraulic Puzzle Park", date: "26.05.2022"},
        {id: 3, src: "/assets/img/news/news_3.jpg", title: "Mechanical Puzzle Park", date: "26.05.2022"},
    ];
    return (
        <section className={"baseNews"}>
            <Container>
                <div className={"baseNews__header"}>
                    <h2 className={"header__title"}>
                        Future Products
                    </h2>
                    <GoLink
                        to={"#"}
                        text={"More about products"}
                    />
                </div>
                {/*<List*/}
                {/*    className={"baseNews__tags"}*/}
                {/*    items={tags}*/}
                {/*    renderItem={({id, text}) => (*/}
                {/*        <li key={id}>*/}
                {/*            <Tag*/}
                {/*                className={"baseNews__tag"}*/}
                {/*                text={text}*/}
                {/*            />*/}
                {/*        </li>*/}
                {/*    )}*/}
                {/*/>*/}
                <List
                    className={"baseNews__cards"}
                    items={cards}
                    renderItem={({id, src, title, date}) => (
                        <li key={id} className={"baseNews__card"}>
                            <Card
                                className={"card__img"}
                                style={{
                                    backgroundImage: `url(${src})`
                                }}
                            />
                            <div className={"card__content"}>
                                <h3 className={"card__title"}>
                                    {title}
                                </h3>
                            </div>
                        </li>
                    )}
                />
            </Container>
        </section>
    );
};