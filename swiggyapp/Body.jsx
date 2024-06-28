import { useEffect, useState } from "react";
import restaurantData from "../assets/mockData";
import ResCardContainer from "./ResCardContainer";

const Body = () => {

    useEffect(
        () => {
        async function swiggy () {

            const URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    
            const data = await fetch(URL);
    
            const jsonObj = await data.json();
    
            console.log(jsonObj);
            
        }
        swiggy();
    },[]
    );

    const [res,setRes] = useState(restaurantData);


    const filterResBasedOnRating = () => {
        setRes( res.filter(
            restaurant => (restaurant.stars > 4)
        ))
        console.log(res);
    }

    return (
      <div className="res-body">
        <div className="res-search">
          <input type="text" id="search" placeholder="search here" />
          <button type="button">Search</button>
        </div>
        <div className="filterRes">
            <button type="button"
            className="rating-filter-btn"
            onClick={filterResBasedOnRating}
            >
                Rating above 4
            </button>
        </div>
        <div className="res-container">
            <ResCardContainer list = {res} />
        </div>
      </div>
    );
};

export default Body;