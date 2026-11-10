"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello Yelminho, TypeScript don set!");
function calculateTotal(price, quantity) {
    return price * quantity;
}
function getFullName(firstName, lastName) {
    return firstName + lastName;
}
function isEligibleToVote(age) {
    return age >= 18;
}
let courseName = "TypeScript";
let numberOfExercises = 12;
let isCompleted = false;
const member = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    membershipDate: "2023-01-01",
    isActive: true
};
const memberLoan = {
    id: 1,
    bookId: 23,
    memberId: 45,
    borrowedDate: "2023-01-01",
    returnedDate: "2023-01-01"
};
const library = {
    name: "City Library",
    books: [
        {
            id: 23,
            title: "Things Fall Apart",
            publishedYear: 1958,
            isAvailable: true
        }
    ],
    authors: [
        {
            id: 1,
            name: "Chinua Achebe",
            nationality: "Nigerian",
            birthYear: 1930
        }
    ],
    members: [
        {
            id: 45,
            name: "John Doe",
            email: "john@example.com",
            membershipDate: "2023-01-01",
            isActive: true
        }
    ],
    loans: [
        {
            id: 1,
            bookId: 23,
            memberId: 45,
            borrowedDate: "2023-01-01"
        }
    ]
};
// 1. Union type: fit be string OR number
let myId = "ABC123";
console.log("ID:", myId);
myId = 12345;
console.log("ID now na number:", myId);
// 2. Literal type: e MUST be one of these exact words
let status = "TODO";
console.log("Status:", status);
// 3. Narrowing with typeof - TypeScript go check wetin e be
function printId(id) {
    if (typeof id === "string") {
        console.log("Na string, uppercase:", id.toUpperCase());
    }
    else {
        console.log("Na number, times 2:", id * 2);
    }
}
printId("yelminho");
printId(50);
function describePayment(result) {
    switch (result.status) {
        case "success":
            return Payment;
            success;
            Amount: $;
            {
                result.amount;
            }
            ;
        case "failed":
            return Payment;
            failed: $;
            {
                result.reason;
            }
            ;
        case "pending":
            return Payment;
            still;
            dey;
            pending;
            ;
        default:
            // Exhaustive check - if you add new status for up and no handle am, e go give error here
            const _exhaustive = result;
            return _exhaustive;
    }
}
console.log(describePayment({ status: "success", amount: 5000 }));
console.log(describePayment({ status: "failed", reason: "No money for account" }));
console.log(describePayment({ status: "pending" }));
