import "./LoveGuestHome.scss";
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";
import { useNavigate } from "react-router-dom";

export const LoveGuestHome = () => {
    const loveGuestHomeRef = collection(db, "flats");
    const navigate = useNavigate()

    const [loveGuestHomes, setloveGuestHomes] = useState([])

    const getPropertyTypes = () => {
        getDocs(loveGuestHomeRef).then(data => {
            setloveGuestHomes(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }).catch(err => console.log(err));
    }
    useEffect(() => {
        getPropertyTypes()
    }, []);

    return <>
        <section className="guest-love-home">
            <div className="container">
                <h2 className="guest-love-home-title">
                    Homes guests love
                </h2>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{

                    440: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    525: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    780: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    }}
                    className="swiper-hotels"
                >
                    {loveGuestHomes.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="guest-love-home-box">
                                <img className="guest-love-home-img" src={item.img} alt="Hotels image" />
                                <h3 className="guest-love-home-name">
                                    {item.location}
                                </h3>
                                <span className="guest-love-home-text">
                                    {item.province}
                                </span>
                                <p className="guest-love-home-desc">
                                    Starting from ${item.price}
                                </p>

                                <div className="guest-love-home-status-box">
                                    <span className="guest-love-home-rating">
                                        {item.rating}
                                    </span>

                                    <span className="guest-love-home-status">
                                        {item.state}
                                    </span>
                                </div>

                                <div className="guest-love-home-box-overlay" onClick={() => {
                                    navigate(`/hotels/${item.id}`)
                                }}></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    </> 
}
