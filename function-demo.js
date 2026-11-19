// Cú pháp khai báo của Function declaration
// function func_name() {
//   // Xử lý các logic nghiệp vụ
// }
// Quy tắc đặt tên hàm:
// 1. Phải là 1 động từ
// 2. Không bát đầu với số, không chứa ký tự đặc biệt (trừ _)
// 3. Sử dụng tiếng anh có ý nghĩa với chức năng
// 4. Sử dụng  quy tắc camel case

// Ví dụ: Xây dựng hàm để in ra thông báo
function showMessage() {
  console.log("Xin chào các bạn");
}

// Để 1 hàm được thực thi, bắt buộc phải gọi hàm
showMessage();

// Ví dụ 2: Xây dựng hàm để in ra thông báo xin chào của từng sinh viên trong lớp
// Tham số: Là những giá trị được truyền vào khi hàm được khai báo
// Đối số: Là Những giá trị được truyền vào khi hàm được gọi
function showMessageStudent(studentName, age, email) {
  console.log(
    `Xin chào bạn ${studentName}, năm nay tôi ${age} tuổi, email là ${email}`,
  );
}

showMessageStudent("Nguyễn Văn B", 15, "nvb@gmail.com");
showMessageStudent("Lê Văn B", 30, "lvb@gmail.com");
showMessageStudent("Lê Văn C", 35, "lvc@gmail.com");

// Ví dụ 3: Xây dựng hàm để tính tổng 2 số a và b
// Để hàm trả về giá trị sau khi xử lý, bắt buộc cần phải dùng tư khóa return
// Những dòng code được viết dưới từ khóa return thì sẽ bị vô hiệu hóa
function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

const result_1 = sum(10, 20);
const result_2 = sum(50, 60);

console.log("result_1: ", result_1);
console.log("result_2: ", result_2);

// Ví dụ 4: Tính tổng các số từ 1 đến n
let total = 0;
for (let i = 1; i <= 10; i++) {
  total += i;
}

function funcTotal(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

// const inputNumber = +prompt("Nhập số n: ");

const total_1 = funcTotal(10);
console.log("total_1: ", total_1);

// const total_2 = funcTotal(20);
// console.log("total_2: ", total_2);

// Ví dụ 5: Xây dựng hàm tính toán 2 số, phép tính sẽ do người dùng truyền vào

function funcOperator(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;

    case "-":
      return firstNumber - secondNumber;

    case "*":
      return firstNumber * secondNumber;

    case "/":
      return firstNumber / secondNumber;

    default:
      console.log("Thao tác không hợp lệ");

      break;
  }
}

console.warn(funcOperator(10, 20, "+"));
console.warn(funcOperator(10, 20, "-"));
console.warn(funcOperator(10, 20, "*"));
console.warn(funcOperator(10, 20, "/"));
