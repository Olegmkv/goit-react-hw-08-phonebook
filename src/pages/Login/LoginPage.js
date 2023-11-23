import { useDispatch } from 'react-redux';
import { StyledForm, StyledLabel } from './LoginPage.styled';
import { logIn } from 'redux/auth/operations';

const LoginPage = () => {
  const dispatch = useDispatch();
  
  const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
      );
      form.reset();
  };
  return (
    <div>
      
      <title>Login</title>
      
      <StyledForm onSubmit={handleSubmit} autoComplete="off">
            <StyledLabel>
                Email
                <input type="email" name="email" />
            </StyledLabel>
            <StyledLabel>
                Password
                <input type="password" name="password" />
            </StyledLabel>
            <button type="submit">Log In</button>
        </StyledForm>
    </div>
  );
}

export default LoginPage