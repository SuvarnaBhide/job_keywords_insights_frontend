const validateField = (fieldName, value) => {
    let errorObject = {
      error: false,
      message: ''
    };
    
    if (fieldName === 'name' && value.trim().length === 0) {
      errorObject = {
        error: true,
        message: 'Enter a valid name'
      };
    } 
  
    return errorObject;
  };
  
  export const validateForm = (formData, setFormErrors) => {
    const updatedFormErrors = {};
    Object.entries(formData).forEach(([fieldName, value]) => {
      updatedFormErrors[fieldName] = validateField(fieldName, value);
    });
    setFormErrors(updatedFormErrors);
  
    return Object.values(updatedFormErrors).every((error) => error.error === false);
  };
  