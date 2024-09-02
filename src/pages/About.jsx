import Navbar from "../main _page/navbar";
import Des from "./Des";
import Content from "./Content";
import ReactVideoplayer from "./Video";


function About() {
    return (
      <div className="cont-body">
        <Navbar />
        <div className="con-body">
          <Des />
          <Content />
        </div>
        <div className="videoPlayer">
          <ReactVideoplayer />
        </div>
      </div>
    );
  }
  export default About;