import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt, faStar as faStarEmpty } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ rating, ml }: { rating: number,ml?:string }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;

    if (rating >= starValue) {
      return <FontAwesomeIcon key={index} icon={faStar} className={`text-yellow-400 ${ml && "ml-1"} text-[10px]`}/>;
    } else if (rating >= starValue - 0.5) {
      return <FontAwesomeIcon key={index} icon={faStarHalfAlt} className={`text-yellow-400 ${ml && "ml-1"} text-[10px]`} />;
    } else {
      return <FontAwesomeIcon key={index} icon={faStarEmpty} className={`text-gray-300 ${ml && "ml-1"} text-[10px]`} />;
    }
  });

  return <div className="flex">{stars}</div>;
};

export default Rating;
