import React from 'react';

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from '../../components/error-boundary/error-boundary.styles';

const PageNotFound = () => (
    <ErrorImageOverlay>
        <ErrorImageContainer imageUrl='https://i.imgur.com/Q2BAOd2.png'/>
        <ErrorImageText>Page not found</ErrorImageText>
    </ErrorImageOverlay>    
);

export default PageNotFound;