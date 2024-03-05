import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  let [resList, setResList] = useState([]);
  let [filteredResList, setFilteredResList] = useState([]);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/mapi/homepage/getCards?lat=27.1766701&lng=78.00807449999999"
    );
    const json = await data.json();
    console.log(
      json.data.success.cards[1].gridWidget.gridElements.infoWithStyle
        .restaurants[2].info.name
    );
    setResList(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredResList(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  // conditional Rendering
  // if(resList.length===0){

  //   return <Shimmer/>
  // }
  console.log("body loaded");
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filtered resturant card and update th UI

              console.log(searchText);

              const filteredResturant = resList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilteredResList(filteredResturant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = resList.filter((res) => res.info.avgRating > 3);
            setResList(filterList);
          }}
        >
          Top rated resturants
        </button>
      </div>

      <div className="res-container">
        {filteredResList.map((resturant) => {
          return <ResturantCard key={resturant.info.id} resdata={resturant} />;
        })}
      </div>
    </div>
  );
};
export default Body;
