import "./styles.css";
import { useState, useCallback } from "react";

const imgList = new Array(8).fill("https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg");
const STEP = 1;

export default function App() {
  const [cIndex, setIndex] = useState(0);

  const onNext = useCallback(() => {
    if (cIndex >= 4) {
      setIndex(0);
    } else {
      setIndex(cIndex+STEP);
    }
  }, [cIndex]);

  const onPrev = useCallback(() => {
    if (cIndex <= 0) {
      setIndex(4);
    } else {
      setIndex(cIndex-STEP);
    }
  }, [cIndex]);

  return (
    <div className="App">
      <div className="carousel-wrapper">
        <button className="carousel-button" onClick={onPrev}>
          <img src="/arrow_left.svg" alt="arrow_left" />
        </button>
        <div className="carousel-div">
          {imgList.slice(cIndex, cIndex+4).map((str, i) => (
            <div className="product">
              <img className="product-img" alt={`dress${i}`} src={str} />
              <p className="product-title">Dress {cIndex+1+i}</p>
              <p className="product-price">$800</p>
            </div>
          ))}
        </div>
        <button className="carousel-button" onClick={onNext}>
          <img src="/arrow_right.svg" alt="arrow_right" />
        </button>
      </div>
    </div>
  );
}
