import './hotel.css';
import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Hotel = () => {
    const images = [
        "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
    ];
    return (
        <div>
            <NavBar />
            <Header type="list" />
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <button className="bookNow">
                        reser or book now</button>
                    <h1 className="hotelTitle">
                        GrandHotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton street</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location from center</span>
                    <span className="hotelPriceHighlight">
                        book a stay ove 114 at this property and get a free airport taxi</span>
                    <div className="hotelImages">
                        {images.map(photo => (
                            <div className="hotelImgWrapper">

                                <img src={photo} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quis dolores, laboriosam quod a harum molestias aliquid laudantium unde explicabo, consectetur dicta nisi distinctio error alias. Tenetur animi doloremque incidunt.</p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>located in the real heart of krakow, this property has an excellent location score of 9.8</span>
                            <h2>
                                <b>$945</b>
                            </h2>
                            <button>reserve or book now</button>
                        </div>

                    </div>

                </div>
            </div>
            <MailList />
            <Footer />
        </div>
    );
}

export default Hotel;
