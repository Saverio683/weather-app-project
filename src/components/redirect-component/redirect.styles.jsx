import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Title = styled(Link)`
    font-size: 17px;
    margin: 1rem;
    display: block;
    text-decoration: none;
    color: #FFF;
    font-weight: bold;

    &.hidden {
        visibility: hidden;
    }
`;