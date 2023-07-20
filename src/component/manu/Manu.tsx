import { Link } from "react-router-dom";
import { menu } from "../../data/dummyData";
import "./manu.scss";
const Manu = () => {
  return (
    <div className="manu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title} </span>
          {item.listItems.map((listItem) => (
            <Link key={listItem.id} to={listItem.url} className="listItem">
              <img src={listItem.icon} alt={listItem.title} />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Manu;
