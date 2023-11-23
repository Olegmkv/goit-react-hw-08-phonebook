import ContactForm from "components/ContactForm/ContactForm"
import { ContactList } from "components/ContactList/ContactList"
import { Filter } from "components/Filter/Filter"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectError, selectIsLoading } from "redux/selectors";


const ContactsPage = () => {
    const dispatch = useDispatch();

    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError)

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);
    
    return (
        <main>
             <h1>Phonebook</h1>
            <ContactForm />

            <h2>Contacts</h2>
            <Filter />
            {error && <p> Error loading data, please reload page....</p>}
            {isLoading && <p>Loading data, please wait....</p>}
            {!error && <ContactList />}
        </main>
    )
}

export default ContactsPage