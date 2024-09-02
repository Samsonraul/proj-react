import Card from "./Card";
import Profile from "./Profile";
import Self from "./Self";


function Body() {
    return (
      <div className="body-con">
        <div className="body-card">
          <Card />
          <Profile />
          <Self />
        </div>
      </div>
    );
  }
  
  export default Body;
  