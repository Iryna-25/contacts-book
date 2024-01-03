import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contacts/contacts-operations";

import ContactsList from "../components/Contacts/ContactsList";
import ContactsForm from "../components/Contacts/ContactsForm";
import Filter from "../components/Contacts/Filter";

import { Wrapper } from "../styles/Elements.styled.jsx";


const ContactsPage = (params) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <Wrapper>
      <ContactsForm />
      <Filter />
      <ContactsList />
    </Wrapper>
  );
};

export default ContactsPage;














// import React from "react";
// import ContactsForm from "../components/Contacts/ContactsForm/ContactsForm";
// import Filter from "../components/Contacts/Filter/Filter";
// // import ContactsList from "../components/Contacts/ContactsList";

// import Wrapper from "../components/wrapper.styled";

// const ContactsPage = () => {
//   return (
//     <Wrapper>
//       <ContactsForm />
//       <Filter />
//       {/* <ContactsList /> */}
//     </Wrapper>
//   );
// };

// export default ContactsPage;
