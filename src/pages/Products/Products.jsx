import React from 'react';
import "./Products.scss";
import {Container, List} from "../../ui";

const Products = () => {
    const products = [
        {
            id: 1,
            src: "/assets/img/news/news_1.jpg",
            title: "Slack Park",
            desc: "This type of system is suitable for all passenger cars in which 2 cars are simply stacked one above the other using a mechanical or hydraulic lifting system.\nStack Parking system normally comprises of a pallet that moves in vertical direction driven by a hydraulic cylinder/mechanical system. The pallet rests on the ground floor and the car is parked on it. If a second car has to be parked, the pallet is raised to Stroke height above the ground and the second car is parked directly on the ground itself. The second car can directly be removed from the ground floor."
        },
        {
            id: 2,
            src: "/assets/img/news/news_2.jpg",
            title: "Hydraulic Puzzle Park",
            desc: `
                This is a cost-effective hydraulic based system that accommodates 5 to 29 vehicles in a single module. It comprises of 3 levels; A pit level, on-ground level and top pallets. The pit and top move only in a vertical direction and ground level pallets that move only in a horizontal direction. 
                As the name suggests, the functioning of hydraulic parking system is a bit of a puzzle, and an interesting one! The car is parked on ground level pallet and then the system  moves it to top or pit level, depending on the space availability. The cars on ground level pallets can be accessed directly and  driven off. In order to remove the car from its top or pit level, the ground level pallets are moved aside in horizontal direction using mechanical motors attached to the pallets and then the required pallet is lowered or raised to ground level and the car is driven off. 
            `
        },
        {
            id: 3,
            src: "/assets/img/news/news_3.jpg",
            title: "Mechanical Puzzle Park",
            desc: `
                This is a mechanical based car parking system that accommodates 5 to 50 cars per module, having a minimum of 2 and maximum of 8 vertical levels. It consists of top pallets having vertical motion, ground-level pallets with horizontal motion and intermediate pallets with both horizontal and vertical motion. 
                Puzzle Parking system is driven using a mechanical operation. Normally the car is parked on ground level pallet and then it is moved to higher levels depending on space availability. The cars parked on ground level pallets can directly be removed by just driving off. 
                In order to remove the car from its raised position, the lower pallets are moved aside in horizontal direction using a mechanical motor attached to the pallets. The required pallet is then lowered to the ground level and the car is driven off. The system is fully automated and can be customized to accommodate cars of different heights at different levels.
            `
        },
    ];
    return (
        <section className={"products"}>
            <Container>
                <h2 className={"products__title"}>
                    Products
                </h2>
                <List
                    className={"products__list"}
                    items={products}
                    renderItem={(product) => (
                        <li key={product.id} className={"products__item"}>
                            <img src={product.src} alt={product.title}/>
                            <h3>{product.title}</h3>
                            <p>{product.desc}</p>
                        </li>
                    )}
                />
            </Container>
        </section>
    );
};

export default Products;