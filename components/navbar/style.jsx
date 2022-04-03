import styled from 'styled-components';

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    height: 6rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222;
    z-index: 99;
`;

export const NavUL = styled.ul`
    height: 100%;
    width: 100%;
    max-width: 36rem;
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavLi = styled.li`
    padding: .5rem;
`;

export const NavA = styled.a`
    color: #fafafa;
    font-size: 1.2rem;
    letter-spacing: .1rem;
    text-transform: uppercase;
    &:hover {
        cursor: pointer;
        color: #d1b18f
    }
`;