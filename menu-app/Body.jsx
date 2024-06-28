import React, { useState, useEffect } from 'react';
import CardsContainer from './CardsContainer';
import ShimmerUI from './ShimmerUI';

function Body() {
    const [searched,setSearched] = useState("");
    const [categories, setCategories] = useState([]);  
    const [filteredList,setFilteredList] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        const apiCall = async () =>  {
            const URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonObj = await response.json();
                setCategories(jsonObj?.categories || []);
                setFilteredList(jsonObj?.categories || []);
                setLoading(true); // Ensure categories is an array
            } catch (error) {
                console.error('Error fetching or parsing data:', error);
                setCategories([]); // Set categories to an empty array in case of an error
            }
        };
        apiCall();
    }, []);



    return loading ? (
        <div className='body'>
            <div className="search-banner">
                <input type="text"  
                    id="search"
                    placeholder='search'
                    value={searched}
                    onChange={
                        (e) => setSearched(e.target.value)
                    }
                />
                <button type="button" className='search-btn'

                onClick={() => {
                    setFilteredList(categories.filter(
                        value => value.strCategory.toLowerCase().includes(searched.toLowerCase()) 
                    ))
                }}>Search</button>
            </div>
            <div className="cards-container">
                <CardsContainer categories={filteredList} />
            </div>
        </div>
    ) : <ShimmerUI/> ;
}

export default Body;
