import styled from "styled-components";
import { auth, provider } from "../Firebase"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setUserLoginDetails, selectUserName } from "../Featuers/Users/UserSlice";

const Login = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [userName]);

    const handleSignIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                setUser(result.user);
                navigate("/home");
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );

        navigate('/');
    };


    return (
        <Container>
            <Nav>
                <a href="#">
                    <img src="./images/jiocinema-logo.svg" alt="" />
                </a>
                <div>
                    <SignIn onClick={handleSignIn}>Login</SignIn>
                    <SignUp onClick={handleSignIn}>Sign Up</SignUp>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Login to Watch,
                        <br></br><span>Entertetment, Letset movies, sports....</span>
                    </h1>
                    <img src="./images/Login-img.png" alt="" />
                </Hero>
                <Form>
                    <Google onClick={handleSignIn}>
                        <img src="./images/google.svg" alt="" />
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
    position: fixed;

    @media (max-width: 768px) {
        
        overflow-y: scroll;
    }

`;

const Content = styled.div`
    padding: 0;
`;

const Nav = styled.div`

    position: relative;
    margin: 25px auto;
    max-width: 1128px;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    flex-wrap: nowrap;

    & > a{
        img{
            width: 200px;

            @media (max-width: 768px) {
                width: 135px;   
            }
        }
    }

    @media (max-width: 768px) {
        padding: 0 5px;
    }

`;

const SignIn = styled.a`
    color: #ff00f2;
    padding: 10px 24px;
    font-size: 16px;
    border: 1px solid #ff00f2;
    border-radius: 24px;
    line-height: 40px;
    transition: 0.5s;
    cursor: pointer;
    text-align: center;
    background-color: rgba(0,0,0,0);
    
    &:hover{
        background-color: rgba(223, 38, 252, 0.258);
        text-decoration: none;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 10px 15px;
    }
`;

const SignUp = styled(SignIn)`
    margin-left: 15px;

    @media (max-width: 768px) {
        margin-right: 10px;
    }

`;

const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    max-width: 1128px;
    width: 100%;
    padding-top: 40px;
    padding-bottom: 138px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    align-items: center;
    margin: auto;

    @media (max-width: 768px) {
        margin: auto;
        min-height: 0px;
    }

`;

const Hero = styled.div`
    width: 100%;
    h1{
        font-size: 56px;
        padding-bottom: 0;
        font-weight: 200;
        color: #ff00f2;
        width: 55%;
        line-height: 70px;

        span{
            font-size: 30px;
        }

        @media (max-width: 768px) {
            font-size: 25px;
            text-align: center;
            line-height: 2;
            width: 100%;

            span{
                 font-size: 18px;
            }
        }
    }

    img{
        width: 700px;
        height: 680px;
        position: absolute;
        bottom: 50px;
        right: -180px;

        @media (max-width: 768px) {
            width: 350px;
            height: 350px;
            position: initial;
            top: 238px;
        }
    }

`;

const Form = styled.div`
    margin-top: 150px;
    width: 408px;

    @media (max-width: 768px) {
        margin: 50px; 
    }
`;

const Google = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 56px;
    background-color: transparent;
    color: #ff00f2;
    border-radius: 28px;
    font-size: 20px;
    cursor: pointer;
    border: 1px solid #ff00f2;
    outline: none;
    z-index: 0;
    transition: 0.5s;

    &:hover{
        color: #fff;
        background-color: rgba(223, 38, 252, 0.258);
    }

    img{
        margin-right: 8px;
    }
`;


export default Login;
