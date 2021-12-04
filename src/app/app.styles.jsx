import styled from "styled-components";
import { Link } from 'react-router-dom';

export const AppContainer = styled.div`
    overflow-x: hidden;
    color: #fff; 
`;

export const RedirectComponent = styled(Link)`
    font-size: 17px;
    margin: 1rem;
    display: block;
    text-decoration: none;
    color: #FFF;
    font-weight: bold;
`;