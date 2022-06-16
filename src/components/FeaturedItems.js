import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import Product from "./Product";
import Loading from "./Loading";

const FeaturedItems = ({topItems}) => {
  const state = useSelector(state => state.products);


  return (
    <section className="container px-4 lg:px-12 pt-12 pb-6">
      <h2 className='text-2xl font-medium border-b-4 border-blue-600 inline-block pb-1 pr-4'>Featured Items</h2>
      {state.loading === false && topItems !== null ? 
      <>
        <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          380: {
            slidesPerGroup: 1,
            slidesPerView: 1,
            spaceBetween: 20,
          },
          490: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {   
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {  
            slidesPerGroup: 4,
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper pt-8 pb-12 mb-2"
        >
            {topItems.map(item => (
              <SwiperSlide  key={item.id}>
                <Product data={item} />
              </SwiperSlide>
            )) }
        </Swiper> 
        <div className="flex items-start justify-end">
          <Link to='/products' className="btn font-medium">See More</Link>
        </div>
      </> : (
        <div className="min-h-[35vh] flex items-center justify-center">
          <Loading />
        </div>
      )}
    </section>
  );
}


export default FeaturedItems;