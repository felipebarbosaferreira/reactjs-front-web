import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Content = styled.div`
    width: 50%;
    margin: 10px 0px 100px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const TypeIcons = styled.div`
    width: 100%;
    height: 100px;
    overflow: auto;
    
    display: flex;
    justify-content: space-between;

    .inative {
        opacity: 0.4;
    }

    button {
        background: none;
        border: none;
    }
`;

export const IconTypeTask = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: #EE6B26;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        color: #FFFFFF;
        cursor: pointer;
    }

    &:hover {
        opacity: 0.6;
    }
`;

export const Input = styled.div`
    width: 100%;
    margin: 20px 0px;

    display: flex;
    flex-direction: column;

    span {
        color: #707070;
        margin: 5px 0px;
    }

    input {
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #EE6B26;
    }

    svg {
        position: relative;
        left: 90%;
        bottom: 30px;
    }
`;

export const Textarea = styled.div`
    width: 100%;
    margin: 20px 0px;

    display: flex;
    flex-direction: column;

    span {
        color: #707070;
        margin: 5px 0px;
    }

    textarea {
        font-size: 16px;
        padding: 15px;
        border: 1px solid #EE6B26;
        border-radius: 15px;
    }
`;

export const Options = styled.div`
    width: 100%;
    margin: 20px 0px;
    font-size: 16px;

    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        color: #EE6B26;
        font-weight: bold;
        text-transform: uppercase;

        label {
            cursor: pointer;
        }
        input {
            cursor: pointer;
        }

        &:hover {
            opacity: 0.7;
        }
    }

    button {
        font-weight: bold;
        border: none;
        background: none;
        color: #20295F;
        cursor: pointer;
        font-size: 16px;

        &:hover {
            opacity: 0.7;
        }
    }
`;

export const Save = styled.div`
    width: 100%;
    margin: 20px 0px;

    button {
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        padding: 15px;
        color: #FFFFFF;
        background: #EE6B26;
        border-radius: 25px;
        border: none;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }
`;