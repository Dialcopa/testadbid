var sendButton = document.querySelector(
  "form.signin-form button.btn.btn-style.btn-primary"
);
sendButton.onclick = function () {
  var name = document.querySelector('input[name="w3lName"]');
  var subject = document.querySelector('input[name="w3lSubject"]');
  var sender = document.querySelector('input[name="w3lSender"]');
  var phone = document.querySelector('input[name="w3lPhone"]');
  var message = document.querySelector('textarea[name="w3lMessage"]');
  var validation = [];
  var validationText = "Algunos campos estan vacios \n\n";
  if (name && name.value == "") {
    validation.push("Campo de nombre es requerido");
  }
  if (subject && subject.value == "") {
    validation.push("Campo de asunto es requerido");
  }
  if (sender && sender.value == "") {
    validation.push("Campo de remitente es requerido");
  }
  if (phone && phone.value == "") {
    validation.push("Campo de Telefono es requerido");
  }
  if (message && message.value == "") {
    validation.push("Descripción del mensaje es requerido");
  }
  for (i = 0; i < validation.length; i++) {
    validationText += validation[i] + "\n";
  }
  if (validation.length > 0) {
    alert(validationText);
  } else {
    alert("¡Formulario enviado exitosamente!");
  }
};
