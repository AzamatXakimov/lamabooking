// import Swiper from "swiper";
import {Swiper, SwiperSlide} from "swiper/react"
import "./CityProperties.scss";
import "swiper/css";

import dublinImg from "../../assets/images/dublin.webp";
import renoImg from "../../assets/images/reno.webp";
import austinImg from "../../assets/images/austin.webp";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";
import { useEffect, useState } from "react";

export const CityProperties = () => {
    const hotelsCountryRef = collection(db, "hotels_countries");

    const [hotelsCoutry, setHotelsCoutry] = useState([])

    const getHotelsCountry = () => {
        getDocs(hotelsCountryRef).then(data => {
            setHotelsCoutry(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }).catch(err => console.log(err));
    }
    useEffect(() => {
        getHotelsCountry()
    }, []);
    return <>
        <section className="city-properties">
            <div className="container">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },

                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    }}
                    className="mySwiper"
                >
                    {hotelsCoutry.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="city-properties-box">
                                <img className="city-properties-img" src={item.img} alt="Dublin image" />
                                <div className="city-properties-textbox">
                                    <h3 className="city-properties-title">
                                        {item.name}
                                    </h3>
                                    <p className="city-properties-desc">
                                        {item.properties} properties
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    </>
}
