import {DefaultPlayer as Video} from "react-html5video";
import "react-html5video/dist/styles.css";
import thumbNail from "../assets/images/web.png";
import introVideo from "../assets/images/vid.mp4";

const ReactVideoplayer = () => {
  return (
    <div className="video mt-5">
      <Video poster={thumbNail}>
        <source src={introVideo} type="video/mp4" />
      </Video>
    </div>
  );
};

export default ReactVideoplayer;
