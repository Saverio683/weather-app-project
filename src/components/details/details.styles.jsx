import styled from 'styled-components';
import { rgba } from 'polished';

export const DetailsContainer = styled.div`
    background: ${rgba('#fff', 0.3)};
    border-radius: 10px;
    width: 50%;
    height: 200px;
    margin: 50px;
    margin-right: 2vw;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 950px) {
        justify-content: center;
        margin: 0;
        width: 85%;
        margin-bottom: 1rem;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`;

export const Wrapper = styled.div`
    width: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ThinElement = styled.div`
    color: #000;
`;

export const BoldElement = styled.div`
    color: #000;
    font-weight: 500;
`;