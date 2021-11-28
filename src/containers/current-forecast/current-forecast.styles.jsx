import styled from "styled-components";

export const CurrentDataContainer = styled.div`
    margin-top: 40px;
    margin-left: 20px;

    @media only screen and (max-width: 950px) {
        margin-left: 0;
    }
`;

export const LocationContainer = styled.div`
    font-size: 80px;
    @media only screen and (max-width: 950px) {
        display: flex;
        justify-content: center;
    }    
`;

export const CurrentTime = styled.span`
    font-size: 35px;
    @media only screen and (max-width: 950px) {
        display: flex;
        justify-content: center;
    }
`;

export const DataContainer  = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;

    @media only screen and (max-width: 950px) {
        flex-direction: column;
        align-items: center;
    }
`;