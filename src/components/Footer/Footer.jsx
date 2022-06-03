import "./Footer.scss";
import {Container, List} from "../../ui";
import {Link} from "react-router-dom";
import {ABOUT_ROUTE, PRODUCTS_ROUTE} from "../../routes/consts";

export default function Footer() {
    const links = [
        {
            id: 1,
            text: "CONTACT INFORMATION",
            childrenLinks: [
                {
                    id: 1,
                    text: "Толе би, 59, 1 этаж",
                    route: "#"
                },
                {
                    id: 2,
                    text: "+7(708)362-01-99",
                    route: "#"
                },
                {
                    id: 3,
                    text: "maksimov.rahat@gmail.com",
                    route: "#"
                }
            ]
        },
        {
            id: 2,
            text: "PAGE MAP",
            childrenLinks: [
                {
                    id: 1,
                    text: "About",
                    route: ABOUT_ROUTE
                },
                {
                    id: 2,
                    text: "Products",
                    route: PRODUCTS_ROUTE
                }
            ]
        }
    ]
    return (
        <footer className={"footer"}>
            <Container>
                <List
                    className={"footer__links"}
                    items={links}
                    renderItem={(link) => (
                        <li key={link.id} className={"footer__link"}>
                            <h6 className={"link__title"}>
                                {link.text}
                            </h6>
                            <List
                                className={"link__childrenLinks"}
                                items={link.childrenLinks}
                                renderItem={(childrenLink) => (
                                    <li key={childrenLink.id} className={"link__childrenLink"}>
                                        <Link className={"childrenLink__link"} to={childrenLink.route}>
                                            {childrenLink.text}
                                        </Link>
                                    </li>
                                )}
                            />
                        </li>
                    )}
                />
            </Container>
        </footer>
    );
};