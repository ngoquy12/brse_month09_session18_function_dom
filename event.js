// Bước 1: Lấy ra phần tử cần bất sự kiện
const buttonClickElement = document.querySelector("#button-click");
const courseNameElement = document.querySelector("#course-name");
const emailInputElement = document.querySelector("#email");
const countrySelectElement = document.querySelector("#country");

// Bắt sự kiện của phần từ
buttonClickElement.addEventListener("dblclick", function () {
  courseNameElement.textContent = "CSS";
});

emailInputElement.addEventListener("input", function (event) {
  console.log("changed: ", event.target.value);
});

countrySelectElement.addEventListener("change", function (event) {
  console.log("changed: ", event.target.value);
  courseNameElement.textContent = event.target.value;
});
