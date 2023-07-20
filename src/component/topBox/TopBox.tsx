import { topDealUsers } from "../../data/dummyData";
import "./topBox.scss";
const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>

      {topDealUsers.map((topDealUser) => (
        <div className="list" key={topDealUser.id}>
          <div className="listItem">
            <div className="user">
              <img src={topDealUser.img} alt={topDealUser.username} />
              <div className="userTxt">
                <span className="userName">{topDealUser.username}</span>
                <span className="userEmail">{topDealUser.email}</span>
              </div>
            </div>
            <span className="amount">{topDealUser.amount}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopBox;
