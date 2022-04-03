import styled from 'styled-components';

export const HistorySection = styled.section`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fafafa;
`;

export const Li = styled.li`
    margin: 2rem 0;
    padding: .5rem;
`;

export const A = styled.a`
    text-transform: capitalize;
    font-size: 1.8rem;
    color: #292827;
    letter-spacing: .3rem;
    border-left: .4rem solid transparent;
    transition: .25s ease-out;
    padding-left: .4rem;
    &:hover {
        cursor: pointer;
        border-left: .4rem solid #d1b18f;
    }
`;


/** DETAILSECTION **/
export const DetailSection = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;
`;

export const Header = styled.h2`
    text-transform: uppercase;
    font-size: clamp(2rem , 5vw, 8rem);
    letter-spacing: clamp(.3rem, 2vw, 2rem);
    color: #292827;
`;

export const Back = styled.a`
    text-transform: uppercase;
    font-size: 1.8rem;
    margin-top: 3rem;
    font-weight: 700;
    letter-spacing: .7rem;
    padding: .6rem 1.8rem;
    border: .1rem solid transparent;
    border-radius: .4rem;
    background-color: #292827;
    color: #fafafa;
    transition: .25s ease-out;
    &:hover{
        cursor: pointer;
        background-color: #fafafa;
        color: #191817;
        border: .1rem solid #291817;
    }
`;