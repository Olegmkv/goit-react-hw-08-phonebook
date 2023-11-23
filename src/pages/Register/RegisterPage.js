import { useDispatch } from 'react-redux';
import { StyledForm, StyledLabel } from './RegisterPage.styled';
import { register } from 'redux/auth/operations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
      );
      form.reset();
  };

  return (
    <div>

        <title>Registration</title>

       <StyledForm onSubmit={handleSubmit} autoComplete="off">
            <StyledLabel>
                Username
                <input type="text" name="name" />
            </StyledLabel>
            <StyledLabel>
                Email
                <input type="email" name="email" />
            </StyledLabel>
            <StyledLabel>
                Password
                <input type="password" name="password" />
            </StyledLabel>
            <button type="submit">Register</button>
        </StyledForm>
    </div>
  );
}

export default RegisterPage