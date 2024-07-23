import { useCart } from "./hooks/useCart";
import { CartIcon } from "./Icons";
import "./App.css";
import "./Header.css";

export const Menu = () => {
  const { totalItems, toggleCartVisibility } = useCart();

  return (
    <>
      <header className="header-list-page">
        <div className="header-info-list-page">
        </div>
        <a href=".initial" style={{color: "#ef2a75", fontSize:"large"}}>About us</a>
        <h1>The Best Shop</h1>
        <button className="main-button cart-button" onClick={toggleCartVisibility}>
          <CartIcon />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </button>
      </header>
    </>
  );
};
