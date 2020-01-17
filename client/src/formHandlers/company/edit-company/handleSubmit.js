const handleSubmit = (
  event,
  setValidated,
  editCompany,
  companyId,
  code,
  history
) => {
  event.preventDefault();
  event.stopPropagation();
  const form = event.currentTarget;
  if (form.checkValidity() === true) {
    const { name, address } = form.elements;
    console.log("edit company");
    editCompany(
      { name: name.value, address: address.value, companyId, code },
      history
    );
  }
  setValidated(true);
};

export default handleSubmit;
