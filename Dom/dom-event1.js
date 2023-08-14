console.log("seperate js file");

document.getElementById("handler-btn").addEventListener("click", function () {
  document.getElementById("handled-text").innerText =
    "Some Magic Message By Handler";
});

document.getElementById("input-btn").addEventListener("click", function () {
  const inputField = document.getElementById("input-text");
  const inputText = inputField.value;
  const p = document.getElementById("changed-text");
  p.innerText = inputText;
  inputField.value = " ";
});

// comment add korar event
document.getElementById("comment-btn").addEventListener("click", function () {
  const commentField = document.getElementById("comment-text");
  const newComment = commentField.value;
  const newCommentPlace = document.getElementById("comment-container");
  const p = document.createElement("p");
  p.innerText = newComment;
  newCommentPlace.appendChild(p);
  commentField.value = " ";
});

// confirm yor deletion
document.getElementById("confirm-text").addEventListener("keyup", function () {
  const confirm = document.getElementById("confirm-text").value;
  if (confirm === "Confirm") {
    document.getElementById("confirm-btn").removeAttribute("disabled");
  } else {
    document.getElementById("confirm-btn").setAttribute("disabled", true);
  }
});

// parent targeted for child deletion

// const items = document.getElementsByClassName("item");
// for (const item of items) {
//   item.addEventListener("click", function (event) {
//     event.target.parentNode.removeChild(event.target);
//   });
// }

document.getElementById("ul-list").addEventListener("click", function (event) {
  event.target.parentNode.removeChild(event.target);
});

document.getElementById("add-btn").addEventListener("click", function () {
  const liParent = document.getElementById("ul-list");
  const li = document.createElement("li");
  li.innerText = "New Item";
  li.classList.add("item");
  liParent.appendChild(li);
});
