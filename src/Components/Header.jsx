import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { selectUserName, selectUserPhoto, setSignOutState } from "../Featuers/Users/UserSlice";

const Header = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(setSignOutState());
                navigate("/");
            })
            .catch((err) => alert(err.message));
    };

    return (
        <Nav>
            <Logo>
                <img src="./images/jiocinema-logo.svg" alt="" className="desktop-logo" />
                <SmallImg>
                    <img src="./images/Logo.png" alt="" className="mobile-logo" />
                </SmallImg>
            </Logo>

            <NavMenu>
                <Subscribe>Subscribe</Subscribe>
                <a href="/home" className="active">
                    <span>Home</span>
                </a>

                <a href="/sports">
                    <span>Sports</span>
                </a>
                <a href="/movies">
                    <span>Movies</span>
                </a>
                <a href="/tvshows">
                    <span>Tv Shows</span>
                </a>
                <a href="/more">
                    <p>
                        <span>More</span>

                    </p>
                </a>
                <NavListWrap>
                    <Navlist>
                        <a href="/home">
                            <img src="./images/home-icon.svg" className="img" alt="" />
                        </a>
                    </Navlist>
                    <Navlist>
                        <img src="./images/sport-icon.svg" className="img" alt="" />
                    </Navlist>
                    <Navlist>
                        <img src="./images/arrow-up.svg.png" className="img" alt="" />
                    </Navlist>
                    <Navlist>
                        <img src="./images/movie-icon.svg" className="img" alt="" />
                    </Navlist>
                    <Navlist>
                        <img src="./images/tvShow-icon.svg" className="img" alt="" />
                    </Navlist>
                </NavListWrap>

            </NavMenu>
            <UserList>
                <Search>
                    <SrchIcon><img src="./images/search-icon.svg" alt="" /></SrchIcon>
                    <input type="text" placeholder="movies, shows and more..." />
                    <p><img src="./images/voice-icon.svg" alt="" /></p>
                </Search>
            </UserList>
            <SignOut>
                <User>
                    <img src={userPhoto} alt={userName} />
                </User>
                <DropDown>
                    <span onClick={handleSignOut}>Sign Out</span>
                </DropDown>
            </SignOut>

        </Nav>
    )
}

const Nav = styled.div`
    position: fixed;
    background: #000;
    top: 0;
    right: 0;
    left: 0;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    z-index: 3;
    border-bottom: 1px solid #5d5d5d;
`;

const Logo = styled.div`
    padding: 0;
    width: 150px;
    max-height: 70px;
    margin-top: 20px;
    display: inline-block;

    .desktop-logo {
        display: block;
        width: 100%;
    }

    .mobile-logo {
        display: none;
    }

    @media (max-width: 768px) {
        .desktop-logo {
            display: none;
        }
        .mobile-logo {
            display: block;
            width: 100%;
        }
    }
`;

const SmallImg = styled.div`
    width: 50px;
    display: inline-block;
    align-items: center;
    margin-bottom: 20px;

    img {
        display: block;
        width: 100%;
    }
`;

const Subscribe = styled.div`
    color: #ff00f2;
    cursor: pointer;
    margin-right: 20px;
    padding: 8px 24px;
    border: 2px solid #ff00f2;
    border-radius: 24px;

    &:hover {
        background-color: rgba(223, 38, 252, 0.258);
    }

    @media (max-width: 768px) {
        padding: 5px 12px;
        margin-right: 200px;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    margin-right: auto;
    margin-left: 25px;
    position: relative;

    a {
        display: flex;
        padding: 0 12px;
        text-decoration: none;

        span {
            color: #aaa;
            font-size: 18px;
            font-weight: 700;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0;
            white-space: nowrap;
            position: relative;

            &:before {
                content: '';
                position: absolute;
                background-color: #ff00f2;
                bottom: -26px;
                height: 3px;
                left: 0px;
                opacity: 0;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }
        &:hover {
            span:before {
                transform: scale(1);
                visibility: visible;
                opacity: 1 !important;
            }
            span {
                color: #fff;
            }
        }

    }

    

    @media (max-width: 768px) {
        span {
            display: none;
        }
        
        
    }

`;


const NavListWrap = styled.ul`
    display: none;
    @media (max-width: 768px) {
        background-color: #000;
        display: flex;
        flex-wrap: nowrap;
        list-style-type: none;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    @media (max-width: 560px) {
        width: 100%;  
        background-color: #000;
        right: 0px; 
    }

`;

const Navlist = styled.li`
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
        padding: 12px 25px;
        cursor: pointer;

        img{
            display: block;
            width: 35px;
            
        }
    }


    @media (max-width: 560px){
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
        padding: 12px 10px;
        cursor: pointer;

        img{
            display: block;
            width: 35px;
            
        }

    }
    
`;

const UserList = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 5px;
    background-color: #333;
    border-radius: 24px;

    @media (max-width: 768px) {
        margin-left: -150px;
        background: transparent;
        p{
            display: none;
        }
    }

    @media (max-width: 560px) {
        margin-left: -300px;
    }

`;

const Search = styled.div`
    display: flex;
    align-items: center;
    margin-left: 5px;
    margin-right: 5px;
    
    input{
        padding: 10px 20px;
        width: 100%;
        border: none;
        outline: none;    
        background: transparent;
        color:#fff;

        &::placeholder {
            color: #fff;
        }

        @media (max-width: 768px) {
         display: none;
        }
        
    
    }
`;

const SrchIcon = styled.div`
    margin-top: 4px;
    @media (max-width: 768px) {
        img{
            display: block;
            width: 25px;
            align-items: center;
        }
    }
`;

const User = styled.div`
    display: flex;
    margin-left: 30px;

    img{
        width: 40px;
    }
`;
const DropDown = styled.div`

    position: absolute;
    top: 50px;
    right: -30px;
    background: #fff;
    padding: 10px;
    border-radius: 4px;
    color: #000;
    font-size: 15px;
    width: 80px;
    letter-spacing: 1.5px;
    opacity: 0;
`;

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;  
    align-items: center;
    justify-content: center;
    cursor: pointer;

    ${User} {
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }

    &:hover{
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;
        }
    }
`;



export default Header;
