import coffee from "../assets/images/coffee.svg";
import hasbulla from "../assets/images/hasbi.gif";
import hus from "../assets/images/hus.jpg";

export default function Coffee() {
  return (
    <div className="coffee">
      <img draggable="false" className="coffee__img" src={hus} alt="" />
      <div className="coffee__smoke">
        <div className="coffee__smoke__1"></div>
        <div className="coffee__smoke__2"></div>
        <div className="coffee__smoke__3"></div>
      </div>
    </div>
  );
}
