import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const FilterArea = styled.div`
    margin-top: 40px;
    justify-content: space-around;

    display: flex;
    flex-wrap: wrap;

    button {
        background: none;
        border: none;
    }
`;

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #20295F;
    
    display: flex;
    justify-content: center;

    h3 {
        color: #20295F;
        position: relative;
        top: 30px;
        padding: 0px 10px;
        background: #FFFFFF;
    }
`;

export const Content = styled.div`
    width: 100%;
    margin: 10px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 80px;

    a {
        text-decoration: none;
        color: #000000;
    }
`;

export const InfomationWithoutTask = styled.div`
    width: 100%;
    margin: 100px 0px;
    display: flex;
    justify-content: center;
    font-size: 2em;
`;