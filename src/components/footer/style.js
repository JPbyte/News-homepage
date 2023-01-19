import styled from "styled-components";


export const FooterDiv = styled.div`
    padding: .8rem;
    height: 32rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

        >.container{
            display: flex;
            flex-direction: column;
            height: 30rem;
            justify-content: space-between;
        }

    @media screen and (min-width: 600px) {
        align-items: center;
        justify-content: center;
        flex-direction: row;
        height: 13rem;
            >.container{
                width: 100%;
                max-width: 57rem;
                height: 9rem;
                display: flex;
                flex-direction: row;
            }
    }
`;

export const Card = styled.div`
    display: flex;
        >.img-card {
            width: 100%;
            max-width: 7rem;
            overflow: hidden;
            //animation image-zoom//
                >img{
                    width: 100%;
                    height: 9rem;
                    transition: transform 0.5s ease-in-out;
                        &:hover{
                            transform: scale(1.2);
                        }
                }
        }
        >.card-text{
            height: 9rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0rem 1rem;
                span{
                    font-family: var(--Inter);
                    font-size: 2rem;
                    font-weight: 700;
                    color: var(--Grayish-blue);
                }
                h3{
                    font-size: 1.2rem;
                    font-weight: 900;
                    font-family: var(--Inter);
                }
                p{
                    color: var(--Dark-grayish-blue);
                    font-size: .9rem;
                    font-family: var(--Inter);
                    line-height: 1.3rem;
                }
        }
    
    @media screen and (min-width: 600px){
        >.card-text{
            h3{
                font-size: 1rem;
            }
            p{
                font-size: .8rem;
            }
        }
    }
`;