// Cách truy xuất phần tử trong DOM (getElementById)
console.log(document.getElementById("heading-3"));
console.log(document.getElementById("facebook-link"));

// Cách truy xuất phần tử trong DOM (getElementByClassName)
console.log(document.getElementsByClassName("heading"));

// Cách truy xuất phần tử trong DOM (querySelector)
console.log(document.querySelector("#heading-3"));
console.log(document.querySelector(".heading"));

// Lấy ra tất cả các phần tử có dùng selector
console.log(document.querySelectorAll(".heading"));

// Truy xuất nội dung của 1 phần từ trong DOM
// Bước 1: Truy xuất phần tử cần lấy
const fullNameElement = document.querySelector("#fullName");

// Bước 2: Dùng phương thức để lấy ra nội dung
console.log(fullNameElement.innerText);
console.log(fullNameElement.textContent);

// Cập nhật, thay đổi nội dung bên trong phần tử
fullNameElement.textContent = "Nguyễn Văn B";

const containerElement = document.querySelector("#container");
containerElement.innerHTML = "<input id='input' type='text'/>";

// Thay đổi style cho phần từ
fullNameElement.style.color = "blue";
fullNameElement.style.backgroundColor = "green";
// fullNameElement.style.display = "none";
fullNameElement.style.fontWeight = 900;
