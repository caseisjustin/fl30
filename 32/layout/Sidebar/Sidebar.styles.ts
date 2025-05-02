import styled from 'styled-components';

export const SidebarWrapper = styled.div`
    width: 250px;
    height: 100vh;
    background: linear-gradient(135deg, #6e7db3, #5f60bb);
    color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: 4px 0px 15px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    
    nav {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    ul {
        list-style: none;
        padding: 0;
        margin-top: 30px;
    }

    li {
        margin-bottom: 20px;
        position: relative;
        width: 100%;
    }

    li b {
        font-size: 18px;
        font-weight: 600;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
    }

    li a {
        text-decoration: none;
        color: white;
        display: flex;
        align-items: center;
        transition: 0.3s;
    }

    li a:hover b {
        color: #f5a623;
        padding-left: 10px;
    }

    li a::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 5px;
        height: 30px;
        background-color: #f5a623;
        transform: translateY(-50%);
        transition: all 0.3s ease;
        opacity: 0;
    }

    li a:hover::before {
        opacity: 1;
    }
`;
