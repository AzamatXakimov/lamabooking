import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import "./HotelSingle.scss";
// import apartmentsImg from "../../assets/images/apartments.jpg"
import { useEffect, useState } from "react";
import { db } from "../../firebase.config";
import { collection, doc, getDoc } from "firebase/firestore";

export const HotelSingle = () => {
    const {hotleId} = useParams();
    const flatCollectionRef = doc(collection(db, "flats"), hotleId);

    const [hotel, setHotel] = useState({})
    const getHotel = async () => {
        try {
            const docSnap = await getDoc(flatCollectionRef);
            if (docSnap.exists()) {
                console.log(docSnap.data());
                setHotel({ id: docSnap.id, ...docSnap.data() });
            } else {
                console.log("Document not found");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getHotel()
    }, [hotleId]);
    return  <>
        <Header/>
        <main className="site-main">
            <section className="hotel-single">
                <div className="container">
                    <div className="hotel-single-inner">
                        <img className="hotel-single-img" src={hotel.img} alt="Flat image" />

                        <div className="hotel-single-info-box">
                            <h2 className="hotel-single-title">
                                {hotel.location}
                            </h2>
                            <div class="hotel-single-box">
                                <div class="hotel-single-textbox">
                                    <div class="hotel-single-info">
                                        <span class="hotel-single-name">
                                            Region: 
                                        </span>
                                        <span class="hotel-single-desc">
                                            {hotel.province}
                                        </span>
                                    </div>
                                    <div class="hotel-single-info">
                                        <span class="hotel-single-name">
                                            District: 
                                        </span>
                                        <span class="hotel-single-desc">
                                            {hotel.area}
                                        </span>
                                    </div>
                                    <div class="hotel-single-info">
                                        <span class="hotel-single-name">
                                            Price: 
                                        </span>
                                        <span class="hotel-single-desc">
                                            ${hotel.price}
                                        </span>
                                    </div>
                                    <div class="hotel-single-info">
                                        <span class="hotel-single-name">
                                            Apartment with: 
                                        </span>
                                        <span class="hotel-single-desc">
                                            {hotel.air_conditioner ? `Air conditioner,` : ""} {hotel.fridge ? `Fridge` : ""}.
                                        </span>
                                    </div>
                                    <div class="hotel-single-info hotel-single-info-last">
                                        <span class="hotel-single-name">
                                            Apartment have: 
                                        </span>
                                        <span class="hotel-single-desc">
                                            {hotel.gas ? "Gas •" : ""} {hotel.light ? "Light •" : ""} {hotel.cold_water ? "Cold Water •" : ""} {hotel.hot_water ? "Hot Water" : ""}.
                                        </span>
                                    </div>
                                </div>
                                <div class="hotel-single-descbox">
                                    <div class="hotel-single-info">
                                        <span class="hotel-single-name">
                                            Total floors: 
                                        </span>
                                        <span class="hotel-single-desc">
                                            {hotel.total_floors}
                                        </span>
                                    </div>
                                    <div class="hotel-single-info">
                                        <span class="hotel-single-name">
                                            Flat floor: 
                                        </span>
                                        <span class="hotel-single-desc">
                                            {hotel.flat_floor}
                                        </span>
                                    </div>
                                    <div class="hotel-single-info">
                                        <span class="hotel-single-name">
                                            Status: 
                                        </span>
                                        <span class="hotel-single-desc">
                                            {hotel.state}
                                        </span>
                                    </div>
                                    <div class="hotel-single-info">
                                        <span class="hotel-single-name">
                                            Reference point: 
                                        </span>
                                        <span class="hotel-single-desc">
                                            {hotel.region}
                                        </span>
                                    </div>
                                    <div class="hotel-single-info">
                                        <span class="hotel-single-name">
                                            Our contact: 
                                        </span>
                                        <span class="hotel-single-desc">
                                            +998 77 777 77 77
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
}
