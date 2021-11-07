import React from "react";

import { DetailsContainer, Row, Wrapper, SingleElement } from './details.styles';

const Details = ({ tempMin, tempMax, humidity, pressure, windSpeed, clouds }) => (
    <DetailsContainer>
        <Row>
            <Wrapper>
                <SingleElement>
                    Temp min
                </SingleElement>
                <SingleElement>
                    {Math.trunc(tempMin)}°C
                </SingleElement>
            </Wrapper>
            <Wrapper>
                <SingleElement>
                    Humidity
                </SingleElement>
                <SingleElement>
                    {humidity}%
                </SingleElement>
            </Wrapper>
            <Wrapper>
                <SingleElement>
                    Wind speed
                </SingleElement>
                <SingleElement>
                    {windSpeed} km/h
                </SingleElement>
            </Wrapper>            
        </Row>
        <Row>
            <Wrapper>
                <SingleElement>
                    Temp max
                </SingleElement>
                <SingleElement>
                    {Math.trunc(tempMax)}°C
                </SingleElement>
            </Wrapper>
            <Wrapper>
                <SingleElement>
                    Pressure
                </SingleElement>
                <SingleElement>
                    {pressure} mb
                </SingleElement>
            </Wrapper>
            <Wrapper>
                <SingleElement>
                    Clouds
                </SingleElement>
                <SingleElement>
                    {clouds}%
                </SingleElement>
            </Wrapper>                        
        </Row>
    </DetailsContainer>
);

export default Details; 