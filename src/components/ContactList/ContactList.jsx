import { selectfiltredContacts } from "redux/selectors";
import { StyledUl } from "./ContactList.styled";
import { ContactItem } from "./ContactItem";
import { useSelector } from "react-redux";

export const ContactList = () => {
    const contacts = useSelector(selectfiltredContacts);

    return (
        <StyledUl>
            {contacts.map(({ id, name, number }) => {
                return (
                    <ContactItem key={id} name={name} number={number} id={id} />
                )
            })}
        </StyledUl>
    )
}