import { deleteContact } from "redux/operations"
import { StyledLi, StyledSpan, StyledSpanTel } from "./Contact.styled"
import { useDispatch } from "react-redux";

export const ContactItem = ({ name, number, id }) => {
    const dispatch = useDispatch();

    // видалення контакту
    const onDeleteForm = id => dispatch(deleteContact(id))

    return (
        <StyledLi>
            <StyledSpan>{name}</StyledSpan>
            <StyledSpanTel>{number}</StyledSpanTel>
            <button onClick={() => { onDeleteForm(id) }} type='button'>Delete</button>
        </StyledLi>
    )
}