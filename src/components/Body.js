import ResturantCard from "./ResturantCard";
import resobj from "../utils/mockData"
import { useState } from "react";

const Body = () => {
  let [resList,setResList]=useState(resobj);
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
          onClick={()=>{
            const filterList =resList.filter((res)=>res.info.avgRating > 3);
            setResList(filterList)
          }
        }
          >Top rated resturants</button>
        </div>
        <div className="res-container">
          {resList.map((resturant) => {
            return <ResturantCard key={resturant.info.id} resdata={resturant} />;
          })}
        </div>
      </div>
    );
  };
  export default Body;