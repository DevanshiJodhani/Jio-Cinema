import styled from "styled-components";

const Poster = (props) => {
    return (
        <Wrap>
            <img src="https://v3img.voot.com/resizeMedium,w_1920,h_411/v3Storage/assets/14x3_purple-1700208770230.jpg" alt="" />
        </Wrap>
    )
}



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
`;

export default Poster;