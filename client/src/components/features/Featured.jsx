import React from 'react';
import "./featured.css"
import useFetch from '../../hooks/useFetch';
const Featured = () => {
    const { data, loading, error } = useFetch("/hotels/countByCity?cities=austin,berlin,london")
    const images = ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80", "https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"]
    console.log(data)
    return (
        <div className="featured">
            {loading ? ("loading please wait") : (<>

                <div className="featuredItem" >
                    <img src={images[0]} />
                    <div className="featuredTitles">
                        <h1>Austin</h1>
                        <h2>{data[0]}</h2>
                    </div>
                </div>
                <div className="featuredItem" >
                    <img src={images[1]} />
                    <div className="featuredTitles">
                        <h1>Berlin</h1>
                        <h2>{data[1]}</h2>
                    </div>
                </div>
                <div className="featuredItem" >
                    <img src={images[2]} />
                    <div className="featuredTitles">
                        <h1>London</h1>
                        <h2>{data[2]}</h2>
                    </div>
                </div>
                )}



            </>)}

        </div>
    );
}

export default Featured;
