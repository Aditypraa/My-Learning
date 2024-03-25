const input = "123456";
const number = Number(input);

console.log(typeof input);
console.log(number);
console.log(typeof number);

// =========================== NUMBER STATIC PROPERTIES =====================================
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.NaN);

// ============================== NUMBER STATIC METHOD ==================================
const data = Number("12345");
console.log(Number.isInteger(data));
console.log(Number.isNaN(data));

// =============================== NUMBER Instance Method =================================
const value = Number("12345");
console.log(value.toLocaleString("id-ID"));
console.log(value.toLocaleString("en-US"));
