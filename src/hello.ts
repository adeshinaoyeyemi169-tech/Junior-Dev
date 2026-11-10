console.log("Hello Yelminho, TypeScript don set!");

function calculateTotal( price: number, quantity: number ): number {
    return price * quantity;
}

function getFullName(firstName: string, lastName: string): string {
    return firstName + lastName;
}

function isEligibleToVote(age: number): boolean {
    return age >= 18;   
}

let courseName = "TypeScript";
let numberOfExercises = 12;
let isCompleted = false;

type Member = {
id:	number;
name:	string;
email:	string;
membershipDate:	string;
isActive:	boolean;
};

const member: Member = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  membershipDate: "2023-01-01",
  isActive: true
};

type Loan = {
id:	number;
bookId:	number;
memberId:	number;
borrowedDate:	string;
returnedDate?:	string;
}

const memberLoan: Loan = {
id:	1,
bookId:	23,
memberId: 45,
borrowedDate:	"2023-01-01",
returnedDate:	"2023-01-01"
}

type Library = {
  name: string;
  books: Book[];
  authors: Author[];
  members: Member[];
  loans: Loan[];
};

const library: Library = {
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
let myId: string | number = "ABC123";
console.log("ID:", myId);
myId = 12345;
console.log("ID now na number:", myId);

// 2. Literal type: e MUST be one of these exact words
let status: "TODO" | "DONE" = "TODO";
console.log("Status:", status);

// 3. Narrowing with typeof - TypeScript go check wetin e be
function printId(id: string | number) {
if (typeof id === "string") {
console.log("Na string, uppercase:", id.toUpperCase());
} else {
console.log("Na number, times 2:", id * 2);
}
}
printId("yelminho");
printId(50);

// 4. DISCRIMINATED UNION - This na the main exercise for your doc
type PaymentResult =
| { status: "success"; amount: number }
| { status: "failed"; reason: string }
| { status: "pending" };

function describePayment(result: PaymentResult) {
switch (result.status) {
case "success":
return Payment success! Amount: ${result.amount};
case "failed":
return Payment failed: ${result.reason};
case "pending":
return Payment still dey pending...;
default:
// Exhaustive check - if you add new status for up and no handle am, e go give error here
const _exhaustive: never = result;
return _exhaustive;
}
}

console.log(describePayment({ status: "success", amount: 5000 }));
console.log(describePayment({ status: "failed", reason: "No money for account" }));
console.log(describePayment({ status: "pending" }));

export function LogCall(
  _target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;

  descriptor.value = function (...args: unknown[]) {
    console.log(`Calling ${propertyKey} with`, args);
    const result = original.apply(this, args);
    console.log(`${propertyKey} returned`, result);
    return result;
  };

  return descriptor;
}