import React from "react";

import { SearchFieldContainer, SearchInput, OptionalField, FormComponent } from './search-field.styles';

const SearchField = ({ formSubmit, cityChange, countryChange }) => (
    <SearchFieldContainer>
        <FormComponent onSubmit={formSubmit}>
            <SearchInput type="search" placeholder="Search City" aria-label="Search"
                onChange={cityChange}   
            />
        </FormComponent>
        <FormComponent className='country-form' onSubmit={formSubmit}>
            <SearchInput className='country' type="search" placeholder="Country" aria-label="Search"
                onChange={countryChange}
            />
            <OptionalField>OPTIONAL</OptionalField>
        </FormComponent>        
    </SearchFieldContainer>
)

export default SearchField;