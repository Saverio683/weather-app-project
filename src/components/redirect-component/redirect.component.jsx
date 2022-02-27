import { useLocation } from 'react-router';

import { Title } from './redirect.styles';

const RedirectComponent = () => {
    const { pathname } = useLocation();
    
    return (
        <Title 
            to='/' 
            className={pathname === '/' ? 'hidden' : null }
        >
            GO TO HOME PAGE
        </Title>
    )
};

export default RedirectComponent;