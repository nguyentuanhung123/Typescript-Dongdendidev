/**
 * Ví dụ 1
 * Tạo 1 mảng hobbies1 bất kỳ có kiểu dữ liệu là 1 mảng string không giới hạn số lượng phần tử
 */
let hobbies1: string[];
hobbies1 = ["Hoc", "Nghe", "Xem", "Hát"];
console.log(hobbies1); // [ 'Hoc', 'Nghe', 'Xem', 'Hát' ]


/**
 * Ví dụ 2
 * Tạo 1 mảng hobbies2 bất kỳ có kiểu dữ liệu là 1 mảng string nhưng giới hạn số lượng phần tử còn 3
 */
let hobbies2: [string, string, string];
hobbies2 = ["Hoc", "Nghe", "Xem"];
console.log(hobbies2); // [ 'Hoc', 'Nghe', 'Xem' ]

/**
 * Ví dụ 3
 * Tạo 1 mảng hobbies3 bất kỳ có kiểu dữ liệu là 1 mảng hỗn hợp gồm string và number nhưng giới hạn số lượng phần tử còn 3
 */
let hobbies3: [string, number, string];
hobbies3 = ["Hoc", 1, "Xem"];
console.log(hobbies3); // [ 'Hoc', 1, 'Xem' ]


/**
 * Ví dụ 4
 * Tạo 1 mảng hobbies4 bất kỳ có kiểu dữ liệu là 1 mảng hỗn hợp gồm string, number, function nhưng giới hạn số lượng phần tử còn 3
 */
let hobbies4: [() => void, number, string];
hobbies4 = [
    () => {
        console.log("Hoc");
        // Todo
    }, 
    1, 
    "Xem"
];
console.log(hobbies4); // [ [Function (anonymous)], 1, 'Xem' ]


