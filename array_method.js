const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Duyệt qua mảng và in ra các phần tử trong mảng
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// forEach(): Duyệt qua mảng
// Không bị ảnh hưởng bởi từ khóa: return, break, continue
numbers.forEach(function (element, index) {
  console.log("element - index: ", element, index);
});

// map(): Dùng để duyệt qua các phần tử mảng, trả về 1 mảng mới có số lượng phần tử bằng với số lượng phần tử của mảng cũ
// tuy nhiên giá trị của mảng đó bị biến đổi
// Chuyển đổi mảng numbers thành mảng mới có các giá trị được nhân đôi: Biến đổi mảng
const newArray = [];
for (let i = 0; i < numbers.length; i++) {
  newArray.push(numbers[i] * 2);
}
console.log("newArray: ", newArray);

// CHuyển đổi mảng numbers thành 1 mảng mới có giá phần tử có giá trị là ["Phần tử 1", "Phần tử 2",.. "Phàn tử 10"]
const newArrayString = [];
for (let i = 0; i < numbers.length; i++) {
  newArrayString.push(`Phần tử ${numbers[i]}`);
}

console.log("newArrayString: ", newArrayString);

// Dùng map()
const newNumbers = numbers.map(function (element) {
  return `Phần từ thứ ${element}`;
});

console.log("newNumbers: ", newNumbers);
