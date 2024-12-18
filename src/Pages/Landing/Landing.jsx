import CarouselEffect from "../../Components/Carousel/CarouselEffect"
import Category from "../../Components/Category/Category";
import LayOut from "../../Components/LayOut/LayOut";
import Product from "../../Components/Product/Product";

function Landing() {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
