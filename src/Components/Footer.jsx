import styled from "styled-components";

const Footer = (props) => {
    return (
        <Container>
            <Content>
                <LeftSide>
                    <JioCinema>
                        <h4>Jio Cinema</h4>
                        <a>For You</a>
                        <a>sports</a>
                        <a>Movies</a>
                        <a>Tv Shows</a>
                    </JioCinema>
                    <Suports>
                        <h4>Suports</h4>
                        <a>Help Center</a>
                        <a>Terms of use</a>
                        <a>Privacy Policy</a>
                        <a>Content Complaints</a>
                    </Suports>
                </LeftSide>
                <RightSide>
                    <SoicalLink>
                        <h2>Connect With Us</h2>
                        <a><img src="./images/instagram.svg" alt="" /></a>
                        <a><img src="./images/x.svg" alt="" /></a>
                        <a><img src="./images/facebook.svg" alt="" /></a>
                        <a><img src="./images/youtube.svg" alt="" /></a>
                    </SoicalLink>
                    <Download>
                        <h2>Download the App</h2>
                        <Img>
                            <img src="./images/googlePlay.svg" alt="" />
                            <img src="./images/appleStore.svg" alt="" />

                        </Img>
                    </Download>
                </RightSide>
            </Content>
            <Fead>
                <Line> Copyright © 2024 Viacom18 Media PVT LTD. All rights reserved.</Line>
                <Logo><img src="./images/Logo.png" alt="" /></Logo>
            </Fead>
        </Container>
    )
}

const Container = styled.div`
    color: #fff;
    position: relative;
    overflow-x: hidden;
    display:block;
    padding: 0 calc(3.5vw + 5px);
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 25px;


    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 20px;
    }
`;
const LeftSide = styled.div`
    display: flex;


    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 20px;
    }

`;

const JioCinema = styled.div`
    display: flex;
    flex-direction: column;
    h4{
        font-size: 20px;
        margin-bottom: 15px;
    }
    a{
        cursor: pointer;
        color: #aaa;
        margin-top: 15px;
        font-weight: 600;
        &:hover{
            color: #cccaca;
        }
    }

    @media (max-width: 768px) {
        margin-top: 50px;
        /* margin-left: 50px; */
        h4{
            align-items: center;
            justify-content: center;
            margin-bottom: 5px;
            text-align: center;
        }
        a{
            text-align: center;
            font-size: 14px;
        }
    }

`;

const Suports = styled.div`
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    h4{
        font-size: 20px;
        margin-bottom: 10px;
    }
    a{
        cursor: pointer;
        color: #aaa;
        margin-top: 15px;
        font-weight: 600;
        &:hover{
            color: #cccaca;
        }
    }


    @media (max-width: 768px) {
        margin-top: 50px;
        margin-left: 0;
        h4{
            margin-bottom: 5px;
            text-align: center;
        }
        a{
            text-align: center;
            font-size: 14px;
        }
    }

`;


const RightSide = styled.div`
    display: flex;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 10px;
    }
`;

const SoicalLink = styled.div`

    h2{
        font-size: 30px;
        margin-bottom: 15px;
    }

    a{
        width: 30px;
        height: 30px;
        background-color: #333;
        margin-left: 10px;
        padding: 10px;
        display: inline-block;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.3s ease;

        &:hover{
            transform: translateY(-8px);
        }


        img{
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        h2{
            font-size: 20px;
            align-items: center;
            text-align: center;
            margin-top: 30px;
        }
    }

`;

const Download = styled.div`
    margin-left: 50px;
    h2{
        font-size: 30px;
        margin-bottom: 15px;
    }

    @media (max-width: 768px) {
        margin-top: 50px;
        h2{
            font-size: 20px;
            margin-bottom: 5px;
        }
    }

`;

const Img = styled.div`
    cursor: pointer;
    img{
        padding: 10px;
    }
`;

const Fead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #212121;
    right: 0;
    left: 0;
    margin-top: 20px;
    margin-bottom: 15px;

    @media (max-width: 768px) {
        margin-bottom: 80px;
    }
    
`;

const Line = styled.p`

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    img{

        width: 40px;
    }
`;

export default Footer;