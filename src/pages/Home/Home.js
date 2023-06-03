import { Header } from "../../components/Header/Header";
import "./Home.scss"
import { useEffect, } from "react";
import { HomeHero } from "../../components/HomeHero/HomeHero";
import { HomeAside } from "../../components/HomeAside/HomeAside";
import { CityProperties } from "../../components/CityProperties/CityProperties";
import { Footer } from "../../components/Footer/Footer";
import { PropertyType } from "../../components/PropertyType/PropertyType";
import { LoveGuestHome } from "../../components/LoveGuestHome/LoveGuestHome";

export const Home = () => {
    useEffect(() => {

    }, []);
    return <>
        <Header/>
        <main>
            <HomeHero/>
            <CityProperties/>
            <PropertyType/>
            <LoveGuestHome/>
            <HomeAside/>
        </main>
        <Footer/>
    </>
}
