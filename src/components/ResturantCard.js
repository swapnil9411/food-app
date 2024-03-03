import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const { resdata } = props;
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
      resdata?.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={CDN_URL
            +
            cloudinaryImageId
          }
          alt="res-logo"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} star</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };
export default ResturantCard  