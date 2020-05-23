import styled from 'styled-components';

/** card box-shadow
 *  created with https://www.cssmatic.com/box-shadow
 */

export const Container = styled.div`
    width: 270px;
    height: 140px;
    background: #FFFFFF;
    box-shadow: 0px 0px 11px 0px rgba(117,117,117,1);
    border-radius: 10px;
    margin: 30px;
    padding: 20px 0px 10px 0px;
    
    cursor: pointer;
    transition: all 0.3s ease;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    svg {
        color: #EE6B26;
    }

    &:hover {
        opacity: 0.5;
    }
`;

export const TopCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const BottomCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    b {
        color: #EE6B26;
        font-weight: bold;
    }

    span {
        color: #707070;
    }
`;