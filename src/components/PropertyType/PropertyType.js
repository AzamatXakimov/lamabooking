import "./PropertyType.scss";
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";

// import hotelsImg from "../../assets/images/hotels.webp"
// import apartmentsImg from "../../assets/images/apartments.jpg"
// import resortsImg from "../../assets/images/resorts.jpg"
// import villasImg from "../../assets/images/villas.jpg"
// import cabinsImg from "../../assets/images/cabins.jpg"
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";

export const PropertyType = () => {
    const hotelsCountryRef = collection(db, " property_type_hotels");

    const [propertyTypes, setPropertyTypes] = useState([])

    const getPropertyTypes = () => {
        getDocs(hotelsCountryRef).then(data => {
            setPropertyTypes(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }).catch(err => console.log(err));
    }
    useEffect(() => {
        getPropertyTypes()
    }, []);

    return <>
        <section className="property-type">
            <div className="container">
                <h2 className="property-type-title">
                    Browse by property type
                </h2>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{

                    440: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    840: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    }}
                    className="swiper-hotels"
                >
                    {propertyTypes.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="property-type-box">
                                <img className="property-type-img" src={item.img} alt="Hotels image" />
                                <h3 className="property-type-text">
                                    {item.title}
                                </h3>
                                <p className="property-type-desc">
                                    {item.hotels_count} hotels
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    </> 
}
