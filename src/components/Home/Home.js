import Address from '../Address/Address';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Products from '../Products/Products';
// import Quotes from '../Quotes/Quotes';
// import Reviews from '../Reviews/Reviews';
import Seperator from '../Seperator/Seperator';
import Video from '../Video/Video';
// import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div className=''>
          <Banner></Banner>
          {/* <div className='md:flex justify-around'>
            <Services></Services>
          </div>
          <Seperator></Seperator>
          <div className='md:flex justify-around'>
            <Quotes></Quotes>
          </div>
          <Seperator></Seperator>
          <div className='md:flex justify-around'>
            <Reviews></Reviews>
          </div> */}
          <Seperator></Seperator>
          <Products></Products>
          <Seperator></Seperator>
          <Video></Video>
          <Seperator></Seperator>
          <Address></Address>
          <Seperator></Seperator>
          <ContactUs></ContactUs>
        </div>
    );
};

export default Home;<h1>Home</h1>