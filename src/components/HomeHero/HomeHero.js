import { Link, useNavigate } from "react-router-dom";
import "./HomeHero.scss"
import { useRef, useState } from "react";
import { DateRange } from "react-date-range";
import { useDispatch, useSelector } from "react-redux";
import { addSearchValues } from "../../redux/searchValues/searchValuesActions";

export const HomeHero = () => {
    const {token} = useSelector((state) => state);
    // FOR CALENDAR 
    const [calendarState, setCalendarState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [calendarShow, setCalendarShow] = useState(false)

    
    const monthMap = new Map()
    monthMap.set("Jan", 1)
    monthMap.set("Feb", 2)
    monthMap.set("Mar", 3)
    monthMap.set("Apr", 4)
    monthMap.set("May", 5)
    monthMap.set("Jun", 6)
    monthMap.set("Jul", 7)
    monthMap.set("Aug", 8)
    monthMap.set("Sep", 9)
    monthMap.set("Oct", 10)
    monthMap.set("Nov", 11)
    monthMap.set("Dec", 12)
    
    const firstDate =  calendarState[0].startDate;
    const secondDate =  calendarState[0].endDate;

    // FOR PEOPLE COUNT 
    const [peopleCountShow, setPeopleCountShow] = useState(false)
    const [peopleCount, setPeopleCount] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const searchRef = useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const hendelSubmit = () => {
        dispatch(addSearchValues({
            search: searchRef.current.value,
            startDate: calendarState[0].startDate,
            endDate: calendarState[0].endDate,
            adult: peopleCount.adult,
            children: peopleCount.children,
            room: peopleCount.room
        }));

        navigate("/hotels")
    }
    return <>
        <section className="home-hero">
            <div className="container">
                <h1 className="home-hero-title">
                    A lifetime of discounts? It's Genius.
                </h1>
                <p className="home-hero-desc">
                    Get rewarded for your travels – unlock instant savings of 10% or more with a free Lamabooking account
                </p>

                {token.token ? "" : <>
                    <Link className="home-hero-link" to="/login">
                        Sing in / Register
                    </Link>
                </>}

                <form className="home-hero-form" onSubmit={evt => {
                    evt.preventDefault();
                    hendelSubmit()
                }}>
                    <div className="home-hero-form-inner">
                        <label className="home-hero-input-box">
                            <input className="home-hero-input" type="text" ref={searchRef} aria-label="Write where are you going?" placeholder="Where are you going?" />
                        </label>

                        <div className="home-hero-calendar-box">
                            <button className="home-hero-calendar-button" type="button" onClick={() => {
                                setCalendarShow(!calendarShow)
                            }}>
                                {firstDate.getMonth() + 1}/{firstDate.getDate()}/{firstDate.getFullYear()} to {secondDate.getMonth() + 1}/{secondDate.getDate()}/{secondDate.getFullYear()}
                            </button>

                            <div className={`home-hero-calendar ${calendarShow ? "show" : ""}`}>
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setCalendarState([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={calendarState}
                                />
                            </div>

                        </div>
                    </div>

                    <div className="home-hero-form-inner">
                        <div className="home-hero-people-box">
                            <button className="home-hero-people-btn" type="button" onClick={() => {
                                setPeopleCountShow(!peopleCountShow)
                            }}>
                                {peopleCount.adult} adult · {peopleCount.children} children · {peopleCount.room} room
                            </button>

                            <ul className={`home-hero-people-menu ${peopleCountShow ? "show" : ""}`}>
                                <li className="home-hero-people-item">
                                    <span className="home-hero-people-text">
                                        Adult
                                    </span>

                                    <div className="home-hero-people-btn-box">
                                        <button className={`home-hero-people-menu-btn`} type="button" disabled={peopleCount.adult  == 1} onClick={() => {
                                            setPeopleCount({
                                                ...peopleCount,
                                                adult: peopleCount.adult - 1
                                            })
                                        }}>
                                            -
                                        </button>
                                        <span className="home-hero-people-number">
                                            {peopleCount.adult}
                                        </span>
                                        <button className="home-hero-people-menu-btn" type="button" onClick={() => {
                                            setPeopleCount({
                                                ...peopleCount,
                                                adult: peopleCount.adult + 1
                                            })
                                        }}>
                                            +   
                                        </button>
                                    </div>
                                </li>
                                <li className="home-hero-people-item">
                                    <span className="home-hero-people-text">
                                        Children
                                    </span>

                                    <div className="home-hero-people-btn-box">
                                        <button className={`home-hero-people-menu-btn`} type="button" disabled={peopleCount.children  == 0} onClick={() => {
                                            setPeopleCount({
                                                ...peopleCount,
                                                children: peopleCount.children - 1
                                            })
                                        }}>
                                            -
                                        </button>
                                        <span className="home-hero-people-number">
                                            {peopleCount.children}
                                        </span>
                                        <button className="home-hero-people-menu-btn" type="button" onClick={() => {
                                            setPeopleCount({
                                                ...peopleCount,
                                                children: peopleCount.children + 1
                                            })
                                        }}>
                                            +   
                                        </button>
                                    </div>
                                </li>
                                <li className="home-hero-people-item">
                                    <span className="home-hero-people-text">
                                        Room
                                    </span>

                                    <div className="home-hero-people-btn-box">
                                        <button className={`home-hero-people-menu-btn`} type="button" disabled={peopleCount.room  == 1} onClick={() => {
                                            setPeopleCount({
                                                ...peopleCount,
                                                room: peopleCount.room - 1
                                            })
                                        }}>
                                            -
                                        </button>
                                        <span className="home-hero-people-number">
                                            {peopleCount.room}
                                        </span>
                                        <button className="home-hero-people-menu-btn" type="button" onClick={() => {
                                            setPeopleCount({
                                                ...peopleCount,
                                                room: peopleCount.room + 1
                                            })
                                        }}>
                                            +   
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <button className="home-hero-from-btn" type="submit">
                            Search
                        </button>
                    </div>

                </form>
            </div>
        </section>
    </>
}
