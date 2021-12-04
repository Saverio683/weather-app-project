import styled from 'styled-components';
import { rgba } from 'polished';

export const DailyDataContainer = styled.div`
    background: ${rgba('#fff', 0.3)};
    border-radius: 10px;    
    width: 150px;
    display: block;
    text-align: center;
    margin: 10px;
    padding: 10px;

    &:hover {
        cursor: pointer;
        background: ${rgba('#fff', 0.5)};
    }

    @media only screen and (max-width: 950px) {
        display: inline-block;
    }
`;

export const DateContainer = styled.span`
    padding: 10px;
    display: flex;
    justify-content: center;
`;

export const TemperatureContainer = styled.span`
    font-size: 40px;
    display: flex;
    justify-content: center;    
`;

export const ImageContainer = styled.img`
    width: 100px;
`;