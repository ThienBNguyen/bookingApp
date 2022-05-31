import React from 'react';
import "./featured.css"
const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="hotel image" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Reno</h1>
                    <h2>533 properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src=" https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="hotel image" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>tropical</h1>
                    <h2>533 properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src=" https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="hotel image" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>tropical</h1>
                    <h2>533 properties</h2>
                </div>
            </div>

        </div>
    );
}

export default Featured;
