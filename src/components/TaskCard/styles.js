import styled from 'styled-components';

/** card box-shadow
 *  created with https://www.cssmatic.com/box-shadow
 */

export const Container = styled.div`
    width: 230px;
    max-width: 230px;
    height: 140px;
    background: #FFFFFF;
    box-shadow: 0px 0px 11px 0px rgba(117,117,117,1);
    border-radius: 10px;
    margin: 30px;
    padding: 20px 5px 10px 5px;
    
    cursor: pointer;
    transition: all 0.3s ease;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    opacity: ${props => props.done ? 0.5 : 1};

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
    text-align: center;

    h3 {
        margin: 5px 0px 0px 0px;
        line-height: 1.5em; /* Sets line height to 1.5 times text size */
        height: 3em; /* Sets the div height to 2x line-height (3 times text size) */
        width: 100%; /* Use whatever width you want */
        white-space: normal; /* Wrap lines of text */
        overflow: hidden; /* Hide text that goes beyond the boundaries of the div */
        text-overflow: ellipsis; /* Ellipses (cross-browser) */
        -o-text-overflow: ellipsis; /* Ellipses (cross-browser) */
    }
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