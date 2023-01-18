import styled from "styled-components";


export const Central = styled.div`
    height: 100%;
    height: 45rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerGrid = styled.div`
    display: grid;
    padding: .8rem;
    grid-gap: 1rem;
    grid-template-areas:
        "img"
        "title"
        "article"
        "new";

        .title{
            grid-area: title;
        }
        .article{
            grid-area: article;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 9rem;
                > p{
                    font-size: 1rem;
                    line-height: 1.4rem;
                    color: var(--Dark-grayish-blue);
                }
                > button{
                    width: 100%;
                    max-width: 10rem;
                    height: 2rem;
                    background-color: var(--Soft-red);
                    color: var(--Off-white);
                    border: none;
                    font-family: var(--Inter);
                    font-size: .9rem;
                    font-weight: 700;
                    letter-spacing: 0.2rem;
                    cursor: pointer;
                    transition: .4s;
                        &:hover{
                            background-color: red;
                            transform: scale(1.01);
                        }
                }
        }
        .new{
            height: 30rem;
            grid-area: new;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--Very-dark-blue);
            padding: 1rem;
                > h2{
                    color: var(--Soft-orange);
                }
                .new-text{
                    display: flex;
                    flex-direction: column;
                    gap: 0.7rem;
                        > h3{
                            font-size: 1.3rem;
                            color: var(--Off-white);
                        }
                        > p{
                            font-size: 0.95rem;
                            color: var(--Grayish-blue);
                        }
                }
                hr{
                    border: 0.01rem var(--Dark-grayish-blue) solid
                }
        }

    @media screen and (min-width: 600px) {
        width: 100%;
        max-width: 58rem;
        height: 100%;
        grid-template-areas: 
        "img img new"
        "title article new";
    }
`;

export const DivImg = styled.div`
    width: 100%;
    max-width: 25rem;
    grid-area: img;
        >img{
            width: 100%;
        }
    
    @media screen and (min-width: 600px) {
        max-width: 100%;
            >img{
                height: 25rem;
            }
    } 
`;

export const Title = styled.h1`
    color: var(--Very-dark-blue);
    font-family: var(--Inter);
    font-weight: 900;
    font-size: 2.3rem;

    @media screen and (min-width: 600px) {
        width: 100%;
        max-width: 17rem;
    }
`;
