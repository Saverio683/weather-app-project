import styled from "styled-components";

export const OverallDataContainer = styled.div`
    width: 500px;
    height: 200px;
    margin-top: 4rem;
    margin-left: 1rem;
    display: flex;
    justify-content: center;    

    @media only screen and (max-width: 950px) {
        margin-top: 2rem;
        margin-left: 0;
    }
`;

export const Image = styled.img`
    width: 170px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Temperature = styled.div`
    font-size: 90px;
    display: flex;
`;

export const Description = styled.div`
    font-size: 20px;
`;