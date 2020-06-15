import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Content = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        color: #EE6B26;
    }

    p {
        color: #20295F;
    }
`;

export const QrCodeArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ValidationCode = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px;

    span {
        text-weight: bold;
    }

    input {
        font-size: 18px;
        padding: 10px;
        text-align: center;
    }

    button {
        text-weight: bold;
        background: #EE6B26;
        color: #FFFFFF;
        border: none;
        border-radius: 30px;
        padding: 10px;
        margin-top: 15px;
        cursor: pointer;

        &:hover {
            background: #20295F;
        }
    }
`;