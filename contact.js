function handleSubmit() {
  let form = document.getElementById("myform");
  let data = new FormData(form);

  let name = data.get("name");
  let email = data.get("email");
  let phone = data.get("phone");
  let message = data.get("message");
  alert(
    "Name : " +
      name +
      ", Email: " +
      email +
      "," +
      " phone : " +
      phone +
      ",   " +
      "Message : " +
      message +
      ", Successfully Submitted"
  );
}
