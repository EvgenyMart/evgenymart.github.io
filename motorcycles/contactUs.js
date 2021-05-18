function submitMessage() {
  const comment = document.getElementById("form");
  let firstName = document.querySelector("#firstName").value;
  let secondName = document.querySelector("#secondName").value;
  // let backToTheMainPage = document.createElement("a");
  // backToTheMainPage.text = "Back to the main page";
  // backToTheMainPage.href = "index.html";
  comment.innerHTML = `Hi ${firstName} ${secondName},
   Thank you for contacting us, we will call you soon.`;
  comment.style.width = "fit-content";
  comment.style.backgroundColor = "darkkhaki";
  //comment.appendChild(backToTheMainPage);
  window.setTimeout(function () {
    window.location.href = "index.html";
  }, 4000);
}
