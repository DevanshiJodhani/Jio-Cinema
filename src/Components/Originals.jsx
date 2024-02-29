import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOriginal } from "../Featuers/Dataes/Data";

const Originals = (props) => {

    const dataes = useSelector(selectOriginal);

    return (
        <Container>
            <h4>India's Top-Rated Originals 🌟</h4>

            <Content>
                {
                    dataes && dataes.map((data, key) => (
                        <Wrap key={key}>
                            <Link to={`/detail/${data.id}`}>
                                <img src={data.cardImg} alt="" />
                            </Link>
                        </Wrap>
                    ))
                }
            </Content>

        </Container>
    )
}

const Container = styled.div`
    color: #fff;
    margin-top: 25px;
    padding: 0 0 26px;
    h4{
        font-size: 22px;
    }  
`;

const Content = styled.div`
    margin-top: 15px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width: 768px){
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 560px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    
    
    
`;

const Wrap = styled.div`
    padding: 5px;
    cursor: pointer;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        border-radius: 10px;
        display: block;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        z-index: 1;
        overflow: hidden;
        top: 0;
    }
    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`;

export default Originals;