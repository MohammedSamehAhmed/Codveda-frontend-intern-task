import "./Sec.css";
import Img1 from "../../assets/Imgs/img-1.png";
import Img2 from "../../assets/Imgs/img-2.png";
import Img3 from "../../assets/Imgs/img-3.png";
import Img4 from "../../assets/Imgs/img-4.png";

export default function Sec() {
  return (
    <div>
      <div className="up">
        <h1 className="head">BROWSE BY DRESS STYLE</h1>
        <div>
          <div className="imgs-container1">
            <img src={Img1} alt="img1" className="img img-1" />
            <img src={Img2} alt="img2" className="img img-2" />
          </div>
          <div className="imgs-container2">
            <img src={Img3} alt="img1" className="img img-3" />
            <img src={Img4} alt="img2" className="img img-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
