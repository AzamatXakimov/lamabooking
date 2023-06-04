import { useEffect, useState } from "react"
import { Header } from "../../components/Header/Header"
import { HotelsSearchBar } from "../../components/HotelsSearchBar/HotelsSearchBar"
import "./Hotels.scss";
// import apartmentsImg from "../../assets/images/apartments.jpg"
import { HotelsCard } from "../../components/HotelsCard/HotelsCard";
import { db } from "../../firebase.config";
import { collection, getDocs,} from "firebase/firestore";
import { useSelector } from "react-redux";

export const Hotels = () => {
    const {searchValue} = useSelector((state) => state);
    const flatsCollectionRef = collection(db, "flats");

    const [hotels, setHotels] = useState([])
    const [searchHotels, setSearchHotels] = useState([])

    
    const  getFlats = (collection) => {
        
        getDocs(collection).then(data => {
            setHotels(data.docs.map(doc => ({...doc.data(), id: doc.id})))
            setSearchHotels(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }).catch(err => console.log(err));
    }

    const hendelSubmit = (search, minPrice, maxPrice, adultCount, childrenCount, roomCount, country) => {
        console.log(search, minPrice, maxPrice, adultCount, childrenCount, roomCount, country);
        const updateFlats = hotels.filter(item => (item.location.match(search) &&
            (minPrice ? minPrice <= item.price : true) && (maxPrice ? maxPrice >= item.price : true) && (adultCount <= item.adult) && (childrenCount <= item.children) && (roomCount <= item.room) && (country ? country == item.province : true)
        ))
        // const updateFlats = hotels.filter(item => (country ? country == item.province : true)))
        
        setSearchHotels([...updateFlats])
        // const flatsQuery = query(flatsCollectionRef, search ? where("location", "==", search) : "", minPrice ?  where("price", ">=", minPrice) : "", maxPrice ? where("price", "<=", maxPrice) : "", adultCount ? where("adult", ">=", adultCount) : "", childrenCount ? where("children", ">=", childrenCount) : "",roomCount ? where("room", ">=", roomCount) : "" )
    }


    useEffect(() => {
        getFlats(flatsCollectionRef)
    }, []);
    useEffect(() => {
        console.log();
        hendelSubmit(searchValue.searchValue?.search ? searchValue.searchValue?.search : "", "", "", searchValue.searchValue?.adult, searchValue.searchValue?.children, searchValue.searchValue?.room, searchValue.searchValue?.country)
    }, [hotels]);

    return <>
        <Header/>
        <main className="site-main">
            <section className="hotels">
                <div className="container">
                    <div className="hotels-inner">
                        <HotelsSearchBar submitFn={hendelSubmit}/>

                        <ul className="hotels-list">
                            {searchHotels.map((item, i) => (
                                <li className="hotels-item" key={i}>
                                    <HotelsCard obj={item}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    </>
}
