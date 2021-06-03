document.addEventListener("DOMContentLoaded",function() {
  const form= document.querySelector("#compose-form");
  const error= document.querySelector("#error-message");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    recipient= document.querySelector("#compose-recipients");
    subject= document.querySelector("#compose-subject");
    body= document.querySelector("#compose-body");

    fetch(`/emails`, {
      method: "POST",
      body:JSON.stringify({
        recipients: recipient.value,
        subject: subject.value,
        body: body.value,
      })
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.status);
        if (result.status == 201){
          load_mailbox("sent");
        } else {
          error.innerHTML= `<div class="alert alert-danger" role="alert">${result.error}</div>`;
        }
      });
    });
  },
  false
);
