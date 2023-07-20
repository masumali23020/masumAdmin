import "./navbar.scss";
const Navber = () => {
  return (
    <div className="nav">
      {/* logo  */}
      <div className="logo">
        <img src="/logo.svg" alt="logo" />
        <span>MasumAdmin</span>
      </div>

      {/* manu  */}
      <div className="icons">
        <img src="/search.svg" alt="seach" className="icon" />
        <img src="/app.svg" alt="seach" className="icon" />
        <img src="/expand.svg" alt="expand" className="icon" />
        <div className="notifications">
          <img src="/notifications.svg" alt="notifications" />
          <span>1</span>
        </div>
        {/* user image  */}
        <div className="user">
          <img
            src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/348927838_181345704870294_5815972930587038195_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH0OeJWK1UxesvW788e0MVbsCsHk9ZC656wKweT1kLrnnUrZN8YaaFeWjsuZeRmIgpmQS-WDKoSAYXhO4fp0jgM&_nc_ohc=OmxcZ4z1yMgAX-z3uut&_nc_ht=scontent.fdac5-2.fna&oh=00_AfAw9M6Nfk7iB3huPv62ySSkSFpcPt8qwqY5NcDGaCuCJQ&oe=64BCE093"
            alt="seach"
          />
          <span>Masum</span>
        </div>

        <img src="/setting.svg" alt="setting" className="icon" />
      </div>
    </div>
  );
};

export default Navber;
