import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import "./HotelSingle.scss";
// import apartmentsImg from "../../assets/images/apartments.jpg"
import { useEffect, useRef, useState } from "react";
import { db } from "../../firebase.config";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";

import "swiper/css";
import "swiper/css/effect-fade";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper";

import Modal from 'react-modal';

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

    // MODAL 
    Modal.setAppElement('#root');

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const nameRef = useRef()
    const phoneRef = useRef()
    const messageRef = useRef()

    const contactUsCollectionRef = collection(db, "contact_us");

    const hendelSubmit = () => {
        addDoc(contactUsCollectionRef, {
            user_name: nameRef.current.value,
            user_phone: phoneRef.current.value,
            user_message: messageRef.current.value
        }).then(data => {
            console.log(data);
            closeModal()
        }).catch(err => {
            console.log(err);
        })

        
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
                        <div className="hotel-single-img-box">
                            <Swiper
                                spaceBetween={30}
                                effect={"fade"}
                                navigation={true}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[EffectFade, Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img className="hotel-single-img" src={hotel.img} alt="Flat image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="hotel-single-img" src={hotel.img2} alt="Flat image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="hotel-single-img" src={hotel.img3} alt="Flat image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="hotel-single-img" src={hotel.img4} alt="Flat image" />
                                </SwiperSlide>
                            </Swiper>
                        </div>

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
                                    <div class="hotel-single-info">
                                        <span class="hotel-single-name">
                                            Apartment have: 
                                        </span>
                                        <span class="hotel-single-desc">
                                            {hotel.gas ? "Gas •" : ""} {hotel.light ? "Light •" : ""} {hotel.cold_water ? "Cold Water •" : ""} {hotel.hot_water ? "Hot Water" : ""}.
                                        </span>
                                    </div>
                                    <div class="hotel-single-info">
                                        <span class="hotel-single-name">
                                            Adult count: 
                                        </span>
                                        <span class="hotel-single-desc">
                                            {hotel.adult}.
                                        </span>
                                    </div>
                                    <div class="hotel-single-info hotel-single-info-last">
                                        <span class="hotel-single-name">
                                            Children count: 
                                        </span>
                                        <span class="hotel-single-desc">
                                            {hotel.children}.
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
                                            Rooms: 
                                        </span>
                                        <span class="hotel-single-desc">
                                            {hotel.room}
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
                                            {hotel.our_contact}
                                        </span>
                                    </div>

                                    <button className="hotel-single-btn" type="button" onClick={openModal}>
                                        Contact us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={{
                        overlay: {
                            zIndex: 100,
                            backgroundColor: "rgba(0,0,0,0.5)"
                        },
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            maxWidth: "400px",
                            width: "100%",
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                        },
                    }}
                    contentLabel="Example Modal"
                >

                    <form onSubmit={evt => {
                        evt.preventDefault()
                        hendelSubmit()
                    }}>
                        <h2 className="hotel-single-modal-title">Contact us</h2>
                        <label className="hotel-single-modal-label">
                            <span className="hotel-single-modal-text">Your Name:</span>
                            <input className="hotel-single-modal-input" type="text" placeholder="Name:" ref={nameRef}  required/>
                        </label>
                        <label className="hotel-single-modal-label">
                            <span className="hotel-single-modal-text">Phone number:</span>
                            <input className="hotel-single-modal-input" type="number" placeholder="Phone:" ref={phoneRef}  required/>
                        </label>
                        <label className="hotel-single-modal-label">
                            <span className="hotel-single-modal-text">Message:</span>
                            <textarea className="hotel-single-modal-textarea" placeholder="Message:" ref={messageRef} required></textarea>
                        </label>
                        <button className="hotel-single-btn" type="submit">
                            Contact us
                        </button>
                    </form>
                </Modal>
            </section>
        </main>
    </>
}
