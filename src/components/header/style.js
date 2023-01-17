import styled from "styled-components";


export const DivHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2rem 2rem;
    align-items: center;
    
    //style for Logo//
    > img{
        width: 100%;
        max-width: 3rem;
    }
    
    @media screen and (min-width: 800px){

        .Menu{
            display: none;
        }
    }   
`;

export const Navbar = styled.nav`
    //style for Sidebar//
    content: "";
    position: absolute;
    display: ${({open}) => (open ? "block" : "none" )};;
    width: 60%;
    height: 100%;
    background: var(--Off-white);
    right: 0rem;
    top: 0rem;
        .close{
            display: flex;
            justify-content: flex-end;
            padding: 1rem;
        }
        .close_text{
            height: 18rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 2rem 3rem;
                a{
                    text-decoration: none;
                    font-size: 1.4rem;
                    color: var(--Dark-grayish-blue);
                    transition: .4s;
                        &:hover{
                            color: var(--Very-dark-blue)
                        }
                }
        }

    @media screen and (min-width: 800px){
        position: relative;
        display: block;
        
        .Menu{
            display: none;
        }   
        .close{
            display: none;
        }
        .close_text{
            width: 100%;
            height: 0rem;
            justify-content: flex-end;
            flex-direction: row;
            padding: 0;
            gap: 2rem;
        }
    }
`;