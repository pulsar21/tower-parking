import classNames from "classnames";
import {Container, List} from "../../ui";
import {NavLink, useNavigate} from "react-router-dom";
import "./Header.scss";
import {ABOUT_ROUTE, BASE_ROUTE, PRODUCTS_ROUTE} from "../../routes/consts";

export default function Header(props) {
    const navigate = useNavigate();
    const {className} = props;
    const items = [
        {id: 1, name: "Home", route: BASE_ROUTE},
        {id: 2, name: "About", route: ABOUT_ROUTE},
        {id: 3, name: "Products", route: PRODUCTS_ROUTE},
        {id: 4, name: "Clients", route: "#"},
        {id: 5, name: "Newsroom", route: "#"},
        {id: 6, name: "Blog", route: "#"},
        {id: 7, name: "Careers", route: "#"},
        {id: 8, name: "Contact", route: "#"},
    ];
    return (
        <header className={classNames("header", className)}>
            <Container>
                <div className={"header__content"}>
                    <img
                        className={"header__logo"}
                        src={"/assets/img/logo.jpg"}
                        alt={"logo"}
                        onClick={() => navigate(BASE_ROUTE)}
                    />
                    <nav className={"header__nav"}>
                        <List
                            className={"header__menu"}
                            items={items}
                            renderItem={(item) => (
                                <li key={item.id}>
                                    <NavLink to={item.route}>
                                        {item.name}
                                    </NavLink>
                                </li>
                            )}
                        />
                    </nav>
                </div>
            </Container>
        </header>
    );
};