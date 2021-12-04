import styled from "styled-components";

export const OverallDataContainer = styled.div`
    width: 500px;
    height: 200px;
    margin-top: 3rem;
    display: flex;
    justify-content: center;    

    @media only screen and (max-width: 950px) {
        margin-top: 1rem;
    }
`;

export const Image = styled.img`
    width: 170px;

    @media only screen and (max-width: 950px) {
        width: 150px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Temperature = styled.div`
    font-size: 90px;
    display: flex;

    @media only screen and (max-width: 950px) {
        font-size: 70px;
    }
`;

export const Description = styled.div`
    font-size: 20px;
    text-align: center;
`;