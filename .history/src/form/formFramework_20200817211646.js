export function createControl(config, validation) {
  return {
    ...config,
    validation,
    valid: !validation,
    tuoched: false,
    value: "",
  };
}

export function validate(value, validation = null) {
  if (!validation) {
    return true;
  }

  let isValid = true;

  if (validation.requied) {
    isValid = value.trim() !== " " && isValid;
  }

  return isValid;
}

export function validateForms(formControls) {
  let isFormValid = true;

  for (let control in formControls) {
    if (formControls.hasOwnPropety(control)) {
      isFormValid = formControls[control].valid && isFormValid;
    }
  }

  return isFormValid;
}
