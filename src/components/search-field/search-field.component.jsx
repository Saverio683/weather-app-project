import React, { useReducer } from "react";
import { useDispatch } from 'react-redux';

import { SET_CITY_FIELD, SET_COUNTRY_FIELD } from '../../redux/search-field/search-field.types';
import { reducer, INITIAL_STATE } from '../../redux/search-field/search-field.reducer';
import { fetchData } from '../../redux/weather-api-data/data.actions';

import { SearchFieldContainer, SearchInput, OptionalField, FormComponent } from './search-field.styles';

const SearchField = () => {
    const dispatchData = useDispatch();
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const { cityField, countryField } = state;

    const onFormSubmit = e => {
        e.preventDefault()
        cityField.length < 1 ?
          alert('Please insert a city')
        :
        dispatchData(fetchData(cityField, countryField));
    }     

    return (
        <SearchFieldContainer>
            <FormComponent onSubmit={onFormSubmit}>
                <SearchInput type="search" placeholder="Search City" aria-label="Search"
                    onChange={event => dispatch({ type: SET_CITY_FIELD, payload: event.target.value })}   
                />
            </FormComponent>
            <FormComponent className='country-form' onSubmit={onFormSubmit}>
                <SearchInput className='country' type="search" placeholder="Country" aria-label="Search"
                    onChange={event => dispatch({ type: SET_COUNTRY_FIELD, payload: event.target.value })}
                />
                <OptionalField>OPTIONAL</OptionalField>
            </FormComponent>        
        </SearchFieldContainer>
    )
}

export default SearchField;