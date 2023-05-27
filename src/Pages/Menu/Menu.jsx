import { Helmet } from "react-helmet-async";
import Cover from "../../SharedPage/Cover";
import menuImg from "../../assets/menu/menu-bg.jpg";
/* eslint-disable no-unused-vars */
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Food Restaurant | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
    </div>
  );
};

export default Menu;
