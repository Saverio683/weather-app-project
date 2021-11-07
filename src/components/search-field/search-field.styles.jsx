import styled from 'styled-components';

export const SearchFieldContainer = styled.nav`
    display: flex;
    justify-content: center;
    opacity: 0.8;
`;

export const SearchInput = styled.input`
    height: 35px;
    width: 40vw;
    margin: 5px;
    padding: 3px;
    border: none;
    border-radius: 10px;
    color: #808080;
    
    &.country { 
        width: 100%;
    }

    @media only screen and (max-width: 950px) {
        width: 60vw;
    }
`;

export const FormComponent = styled.form`
    &.country-form {
        width: 5rem;
    }

    &:hover {
        span {
            visibility: visible;
        }
    }
`;

export const OptionalField = styled.span`
    font-size: 13px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    visibility: hidden;
`;