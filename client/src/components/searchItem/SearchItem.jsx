import "./searchItem.css"
import { Link } from "react-router-dom";

const SearchItem = ({ item, i }) => {
    const images = [
        "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
    ];
    return (
        <div className="searchItem">
            <img src={images[i]} alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">
                    {item.name}</h1>
                <span className="siDistance">${item.distance}</span>
                <span className="siTaxiOp">free airport taxi</span>
                <span className="siSubtitle">
                    Studio Aprtment with Air conditioning</span>
                <span className="siFeatures">
                    Entire stuido + 1 bathroom + 21m2 1 full bed</span>
                <span className="siCancelOp">free cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">{item.cheapestPrice}</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className="siCheckButton">See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SearchItem;
