import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../Firebase";

const Detail = (props) => {

    const { id } = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        db.collection("dataes").doc(id).get().then((doc) => {
            if (doc.exists) {
                setDetailData(doc.data());
            } else {
                console.log("no such document in firebase");
            }
        }).catch((err) => {
            console.log("Error getting document:", err);
        });
    }, [id]);

    return (
        <Container>
            <Background>
                <img src={detailData.backgroundImg} alt={detailData.title} />
            </Background>

            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="/images/play-icon-white.png" alt="" />
                        <span>Watch</span>
                    </Player>
                    <Description>
                        <h2>{detailData.title}</h2>
                        <p>{detailData.subtitle}</p>
                        <span>{detailData.description}</span>
                    </Description>
                    <Cast>
                        <h2>Cast</h2>
                        <p>{detailData.cast}</p>
                    </Cast>
                </Controls>
            </ContentMeta>

        </Container>

    )
}

const Container = styled.div`
    color: #fff;
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
    left: 0;
    opacity: 0.2;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;

    img{
        width: 100vw;
        height:100vh;

        @media (max-width: 768px) {
            width: initial;
        }
    }
`;

const ContentMeta = styled.div`
max-width: 1800px;
    
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
    margin-top: 600px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        margin-top: 120px;
    }  
`;

const Player = styled.div`
    margin: 0 22px 0 0 ;
    display: flex;
    align-items: center;
    padding: 10px 24px;
    background-color: #ff00f2;
    border-radius: 24px;
    cursor: pointer;

    img{
        width: 30px;
        height: 30px;
        z-index: 1;
    }

    @media (max-width: 768px){
        margin-bottom: 30px;
    }
    
`;

const Description = styled.div`
    margin-left: 25px;
    margin-right: 25px;
    h2{
        font-size: 35px;
        margin-bottom: 15px;
        font-weight: 700;
    }
    p{
        color: #aaa;
        font-weight: 600;
        margin-bottom: 10px;
    }
    span{
        color: #aaa;
        font-weight: 600;
    }

    @media (max-width: 768px){
        display: flex;
        flex-direction: column;

        h2{
            font-size: 20px;
        }
        p{
            font-size: 14px;
        }
        span{
            font-size: 14px;
            margin-bottom: 15px;
        }
    }
`;


const Cast = styled.div`
    margin-left: 20px;

    h2{
        font-size: 35px;
        font-weight: 700;
        margin-bottom: 15px;
    }
    p{
        font-size: 18px;
        color: #aaa;
        font-weight: 700;
    }

    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        h2{
            font-size: 20px;
            margin-top: 15px;
        }
        p{
            font-size: 14px;
        }
        
    }
`;

export default Detail;