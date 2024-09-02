import Logo from "./Logo";
import Icon from "./Icon";

const items = ["Home", "About", "Portfolio"];

function Navbar() {
  return (
    <div className="container">
      <ul className="list-group list-group-horizontal">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Logo />
      <Icon />
    </div>
  );
}

export default Navbar;
