import styled from 'styled-components';
import { NavLink, Outlet} from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.4;
`;

const Link = styled(NavLink)`
  &.active {
    color: orange;
  }
`;

export const Layout = () => {
    
    const dispatch = useDispatch();

    const isLoggedIn = useSelector(selectIsLoggedIn);

    const handleLogout = () => dispatch(logOut())
    
    return (
        <Container>
            <header>
                {isLoggedIn ? (
                    <>
                        <Link to="/contacts">Contacts</Link>
                        <button type="button" onClick={handleLogout}>Log Out</button>
                    </>
                ) : (
                    <>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Log In</Link>
                    </>)   
                }        
            </header>
          
            <Outlet />
       
        </Container>
    );
};

