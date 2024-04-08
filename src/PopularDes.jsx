import { Image } from "primereact/image";
import "./PopularDes.css";

const PopularDes = () => {
  const icon = <i className="pi pi-search"></i>;
  return (
    <div id="PopularDestinations" className="card flex justify-content-center">
      <div id="container">
        <h1>Popular Destinations for you</h1>
        <h4>Look for the most popular places</h4>
        <div className="BigImg">
          <div id="image1">
            <a href="">
              <Image
                id="img1"
                src="https://wallpapercave.com/wp/Chk1VFQ.jpg"
                indicatorIcon={icon}
                width="540"
              />
            </a>
            <h3>Lorem ipsum dolor sit amet consectetur</h3>
          </div>
          <div id="image2">
            <a href="">
              <Image
                id="img2"
                src="https://wallpapercave.com/wp/Chk1VFQ.jpg"
                indicatorIcon={icon}
                width="540"
              />
            </a>
            <h3>Lorem ipsum dolor sit amet.</h3>
          </div>
        </div>
        <div className="smallImage">
          <div id="image3">
            <a href="">
              <Image
                src="https://wallpapercave.com/wp/Chk1VFQ.jpg"
                indicatorIcon={icon}
                width="350"
              />
            </a>
            <h4>Lorem ipsum dolor sit amet.</h4>
          </div>
          <div id="image4">
            <a href="">
              <Image
                src="https://wallpapercave.com/wp/Chk1VFQ.jpg"
                indicatorIcon={icon}
                width="350"
              />
            </a>
            <h4>Lorem ipsum dolor sit amet.</h4>
          </div>
          <div id="image5">
            <a href="">
              <Image
                src="https://wallpapercave.com/wp/Chk1VFQ.jpg"
                indicatorIcon={icon}
                width="350"
              />
            </a>
            <h4>Lorem ipsum dolor sit amet.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDes;
