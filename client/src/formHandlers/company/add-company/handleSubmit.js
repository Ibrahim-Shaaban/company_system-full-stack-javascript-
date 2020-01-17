const handleSubmit = (event, setValidated, addCompany, history) => {
  event.preventDefault();
  event.stopPropagation();
  const form = event.currentTarget;
  if (form.checkValidity() === true) {
    const { name, address } = form.elements;
    console.log("add new company");
    addCompany({ name: name.value, address: address.value }, history);
  }
  setValidated(true);
};

export default handleSubmit;
