import { useRef, useState } from "react";
import "./HotelsSearchBar.scss"
import { DateRange } from "react-date-range";
import { useSelector } from "react-redux";

export const HotelsSearchBar = ({submitFn}) => {
    const {searchValue} = useSelector((state) => state);
    // FOR CALENDAR 
    const [calendarState, setCalendarState] = useState([
        {
            startDate: searchValue.searchValue.startDate ? searchValue.searchValue.startDate : new Date(),
            endDate: searchValue.searchValue.endDate ? searchValue.searchValue.endDate : new Date(),
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


    // INPUTS 
    const searchRef = useRef();
    const minPriceRef = useRef();
    const maxPriceRef = useRef();
    const adultRef = useRef();
    const childrenRef = useRef();
    const roomRef = useRef();


    return <>
        <form className="hotels-form" onSubmit={evt => {
            evt.preventDefault()
            submitFn(searchRef.current.value, minPriceRef.current.value, maxPriceRef.current.value, adultRef.current.value, childrenRef.current.value, roomRef.current.value, )
        }}>
            <h2 className="hotels-form-title">
                Search
            </h2>

            <label className="hotels-label">
                <span className="hotels-label-text">Destination</span>
                <input className="hotels-input" type="text" placeholder="Destination" ref={searchRef} defaultValue={searchValue.searchValue?.search} />
            </label>

            <div className="hotels-calendar-box">
                <span className="hotels-label-text">Check-in Date</span>
                <button className="hotels-calendar-btn" type="button" onClick={() => {
                    setCalendarShow(!calendarShow)
                }}>
                    {firstDate.getMonth() + 1}/{firstDate.getDate()}/{firstDate.getFullYear()} to {secondDate.getMonth() + 1}/{secondDate.getDate()}/{secondDate.getFullYear()}
                </button>

                <div className={`hotels-calendar ${calendarShow ? "show" : ""}`}>
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setCalendarState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={calendarState}
                    />
                </div>

            </div>

            <span className="hotels-label-text">Options</span>
            <div className="hotels-mini-labels-box">
                <label className="hotels-mini-labels">
                    <span className="hotels-mini-labels-text">Min price per night</span>

                    <input className="hotels-number-inputs" type="number" defaultValue={0} aria-label="Enter min price per night" ref={minPriceRef} min={0} />
                </label>
                <label className="hotels-mini-labels">
                    <span className="hotels-mini-labels-text">Max price per night</span>

                    <input className="hotels-number-inputs" type="number" defaultValue={1} aria-label="Enter max price per night" ref={maxPriceRef} min={1}  />
                </label>
                <label className="hotels-mini-labels">
                    <span className="hotels-mini-labels-text">Adult</span>

                    <input className="hotels-number-inputs" type="number" aria-label="Enter adult count" ref={adultRef} min={1} defaultValue={searchValue.searchValue?.adult}/>
                </label>
                <label className="hotels-mini-labels">
                    <span className="hotels-mini-labels-text">Children</span>

                    <input className="hotels-number-inputs" type="number" aria-label="Enter children count" ref={childrenRef} min={0} defaultValue={searchValue.searchValue?.children}/>
                </label>
                <label className="hotels-mini-labels">
                    <span className="hotels-mini-labels-text">Room</span>

                    <input className="hotels-number-inputs" type="number" aria-label="Enter room count" ref={roomRef} min={1} defaultValue={searchValue.searchValue?.room}/>
                </label>
            </div>

            <button className="hotels-from-btn" type="submit">
                Search
            </button>
        </form>
    </>
}
