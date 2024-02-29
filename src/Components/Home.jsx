import styled from "styled-components";
import ImgSlider from './ImgSlider';
import HotRightNow from "./HotRightNow";
import Originals from "./Originals";
import Popular from "./Popular";
import Language from "./Language";
import Cartoon from "./Cartoon";
import Poster from "./Poster";
import Sports from "./Sports";
import Footer from "./Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../Firebase";
import { setDataes } from "../Featuers/Dataes/Data";
import { selectUserName } from "../Featuers/Users/UserSlice";

const Home = (props) => {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let hotRightNow = [];
    let originals = [];
    let populars = [];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await db.collection("dataes").get();

                snapshot.forEach((doc) => {
                    const data = { id: doc.id, ...doc.data() };
                    switch (data.type) {
                        case "hotrightnow":
                            hotRightNow.push(data);
                            break;
                        case "original":
                            originals.push(data);
                            break;
                        case "popular":
                            populars.push(data);
                            break;
                        default:
                            break;
                    }
                });

                dispatch(
                    setDataes({
                        hotrightnow: hotRightNow,
                        original: originals,
                        popular: populars,
                    })
                );
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [dispatch, userName]);


    return (
        <Container>
            <TopLinks>
                <a>For You</a>
                <a>Colors</a>
                <a>Comming Soon</a>
                <a>New & Popular 🔥</a>
                <a>Kids & Family</a>
                <a>Premium</a>
                <a>Hollywood in Hindi</a>
                <a>Romance</a>
                <a>News</a>
                <a>Reality</a>
                <a>Cricket</a>
                <a>Peacock Hub</a>
                <a>Kannada</a>
                <a>Comady</a>
                <a>Originals</a>
                <a>TATA WPL</a>
                <a>ISL</a>
                <a>IPL Classics</a>
                <a>Hindi</a>
                <a>Marathi</a>
                <a>Bengali</a>
                <a>Tamil</a>
            </TopLinks>

            <ImgSlider />
            <HotRightNow />
            <Originals />
            <Language />
            <Popular />
            <Poster />
            <Cartoon />
            <Sports />
            <Footer />

        </Container>
    )
}

const Container = styled.div`
    color: #fff;
    position: relative;
    min-height: calc(100vh - 260px);
    overflow-x: hidden;
    display:block;
    top: 90px;
    height: 100vh;
    padding: 0 calc(3.5vw + 5px);
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display: none;
    }

`;

const TopLinks = styled.div`
    margin-top: 10px;
    cursor: pointer;
    transition: 0.3s ease;
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display: none;
    }

    a{
        margin-left: 15px;
        padding: 10px 12px;
        background-color: rgba(99, 96, 96, 0.5);
        color: #fff;
        border-radius: 24px;
        &:hover{
            background: #fff;
            color: #000;
        }
    }

   

`;

export default Home;