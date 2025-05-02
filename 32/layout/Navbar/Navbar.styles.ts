import styled from 'styled-components';

export const NavbarWrapper = styled.header`
    width: 100%;
    height: 60px;
    background: linear-gradient(90deg, #5f60bb, #6e7db3);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;

    .logo {
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .menu {
        display: flex;
        gap: 20px;
    }

    .menu a {
        text-decoration: none;
        color: white;
        font-size: 16px;
        font-weight: 500;
        transition: 0.3s ease;
        position: relative;
    }

    .menu a:hover {
        color: #f5a623;
    }

    .menu a::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 100%;
        height: 2px;
        background-color: #f5a623;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.3s ease;
    }

    .menu a:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    @media (max-width: 768px) {
        .menu {
            display: none;
        }
    }
`;
