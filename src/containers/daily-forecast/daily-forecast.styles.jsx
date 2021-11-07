import styled from "styled-components";

export const DailyForecastContainer = styled.div`
    margin: 30px;
`;

export const Description = styled.span`
    font-size: 35px;
`; 

export const DailyDataContainer = styled.div`
    margin: 20px;    
    display: flex;
    justify-content: space-around;

    @media only screen and (max-width: 950px) {
        display: block;
        overflow: auto;
        white-space: nowrap;
    }
`;