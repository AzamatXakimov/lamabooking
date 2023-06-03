import { useNavigate } from "react-router-dom";
import "./HotelsCard.scss";

export const HotelsCard = ({obj}) => {
    const navigate = useNavigate()
    return <>
        <div className="hotels-card">
            <img className="hotels-card-img" src={obj.img} alt="Hotel image" />

            <div className="hotels-card-box">
                <div className="hotels-card-info-box">
                    <h3 className="hotels-card-title">
                        {obj.location}
                    </h3>
                    <span class="hotels-card-text">
                        {obj.region}
                    </span>
                    <div>
                        <strong class="hotels-card-text">
                            region: {obj.province} 
                        </strong>
                        <strong class="hotels-card-text">
                            area: {obj.area} 
                        </strong>
                    </div>

                    <strong class="hotels-card-text">
                        Apartment with {obj.air_conditioner ? `Air conditioner,` : ""} {obj.fridge ? `Fridge` : ""}. 
                    </strong>
                    <span class="hotels-card-text">
                        Have {obj.gas ? "Gas •" : ""} {obj.light ? "Light •" : ""} {obj.cold_water ? "Cold Water •" : ""} {obj.hot_water ? "Hot Water" : ""}.
                    </span>


                    <strong class="hotels-card-green-text">About flat</strong>
                    <span class="hotels-card-green-text">{obj.total_floors} storey building. The apartment is located on the {obj.flat_floor}th floor</span>
                </div>

                <div className="hotels-card-price-box">
                    <div className="hotels-card-state-box">
                        <span className="hotels-card-state-text">
                            {obj.state}
                        </span>

                        <span className="hotels-card-state-rating">
                            {obj.rating}
                        </span>
                    </div>

                    <div className="hotels-card-button-box">
                        <span className="hotels-card-prise">
                            ${obj.price}
                        </span>
                        <p className="hotels-card-prise-desc">
                            Includes taxes and fees
                        </p>

                        <button className="hotels-card-btn" type="button" onClick={() => {
                            navigate(`/hotels/${obj.id}`)
                        }}> 
                            See availability
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </>
}
