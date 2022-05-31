import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import Featured from '../../components/features/Featured';
import "./home.css"
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import Footer from '../../components/footer/Footer';
import MailList from '../../components/mailList/MailList';
const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">
                    Browse By property type
                </h1>
                <PropertyList />
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />

            </div>
        </div>
    );
}

export default Home;
