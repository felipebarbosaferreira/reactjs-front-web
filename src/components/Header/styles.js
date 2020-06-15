import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #20295F;
    border-bottom: 5px solid #EE6B26;
    display: flex;

    @media(max-width: 450px) {
        height: 200px;
    }
`;

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img {
        width: 100px;
        height: 40px;
    }
`;

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media(max-width: 450px) {
        height: 100%;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-around;
        padding-right: 10px;
    }

    a {
        color: #FFFFFF;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;


        @media(max-width: 450px) {
            text-align: end;
        }

        &:hover {
            color: #EE6B26;
        }
    }

    #notification {
        background: none;
        border: none;
        cursor: pointer;

        svg {
            color: #EE6B26;
        }

        span {
            background: #FFFFFF;
            color: #EE6B26;
            padding: 4px 7px;
            border-radius: 50%;
            position: relative;
            top: -10px;
            right: 5px;
            font-weight: bold;
        }

        &:hover {
            opacity: 0.5;
        }
    }

    .separator::after {
        content: "|";
        margin: 0 10px;
        color: #FFFFFF;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 16px;
        color: #FFFFFF;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover {
            color: #EE6B26;
        }
    }
`;