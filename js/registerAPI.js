const thisForm = document.getElementById("contact_form");
thisForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  var error = false;
  var name = $("#name").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var message = $("#message").val();
  var job = $("#job").val();
  var company = $("#company").val();

  $("#name,#email,#phone,#message,#job,#company").click(function () {
    $(this).removeClass("error_input");
  });

  // Form field validation
  if (name.length == 0) {
    var error = true;
    $("#name").addClass("error_input");
  } else {
    $("#name").removeClass("error_input");
  }
  if (email.length == 0 || email.indexOf("@") == "-1") {
    var error = true;
    $("#email").addClass("error_input");
  } else {
    $("#email").removeClass("error_input");
  }
  if (phone.length == 0) {
    var error = true;
    $("#phone").addClass("error_input");
  } else {
    $("#phone").removeClass("error_input");
  }
  if (message.length == 0) {
    var error = true;
    $("#message").addClass("error_input");
  } else {
    $("#message").removeClass("error_input");
  }
  if (job.length == 0) {
    var error = true;
    $("#job").addClass("error_input");
  } else {
    $("#job").removeClass("error_input");
  }
  if (company.length == 0) {
    var error = true;
    $("#company").addClass("error_input");
  } else {
    $("#company").removeClass("error_input");
  }

  // If there is no validation error, next to process the mail function
  if (error == false) {
    const formData = new FormData(thisForm).entries();
    const response = await fetch("http://54.243.64.190:8000/api/addRegister", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    const result = await response.json();
    alert(result.message);
    window.location.reload();
  }
});
