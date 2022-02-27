import React from "react";

import { DetailsContainer, Row, Wrapper, BoldElement, ThinElement } from './details.styles';

const Details = ({ tempMin, tempMax, humidity, pressure, windSpeed, clouds }) => (
    <DetailsContainer>
        <Row>
            <Wrapper>
                <BoldElement>
                    Temp min
                </BoldElement>
                <ThinElement>
                    {Math.trunc(tempMin)}°C
                </ThinElement>
            </Wrapper>
            <Wrapper> 
                <BoldElement>
                    Humidity
                </BoldElement>
                <ThinElement>
                    {humidity}%
                </ThinElement>
            </Wrapper>
            <Wrapper>
                <BoldElement>
                    Wind speed
                </BoldElement>
                <ThinElement>
                    {Math.trunc(windSpeed)} km/h
                </ThinElement>
            </Wrapper>            
        </Row>
        <Row>
            <Wrapper>
                <BoldElement>
                    Temp max
                </BoldElement>
                <ThinElement>
                    {Math.trunc(tempMax)}°C
                </ThinElement>
            </Wrapper>
            <Wrapper>
                <BoldElement>
                    Pressure
                </BoldElement>
                <ThinElement>
                    {pressure} mb
                </ThinElement>
            </Wrapper>
            <Wrapper>
                <BoldElement>
                    Clouds
                </BoldElement>
                <ThinElement>
                    {clouds}%
                </ThinElement>
            </Wrapper>                        
        </Row>
    </DetailsContainer>
);

export default Details; 