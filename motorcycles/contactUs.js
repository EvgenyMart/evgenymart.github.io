function submitMessage() {
  const comment = document.getElementById("box-2");
  let firstName = document.querySelector("#firstName").value;
  let secondName = document.querySelector("#secondName").value;
  // let backToTheMainPage = document.createElement("a");
  // backToTheMainPage.text = "Back to the main page";
  // backToTheMainPage.href = "index.html";
  comment.innerHTML = `Hi ${firstName} ${secondName},
   Thank you for contacting us, we will call you soon.`;
  comment.style.width = "fit-content";
  comment.style.backgroundColor = "rgb(34, 169, 199)";
  comment.style.color = "white";
  //comment.appendChild(backToTheMainPage);
  window.setTimeout(function () {
    window.location.href = "index.html";
  }, 4000);
}
