// <<<<<<< HEAD
// =======
console.log(chalk("red", 500));
// ======================================================
// 10. LIBRARY HELPER FUNCTIONS
// ======================================================

function findBookById(bookId: number): Book | undefined {
  return library.books.find((book) => book.id === bookId);
}

function getActiveMembers(): Member[] {
  return library.members.filter((member) => member.isActive);
}

function getAvailableBooks(): Book[] {
  return library.books.filter((book) => book.isAvailable);
}

function getMemberLoanCount(memberId: number): number {
  return library.loans.filter((loan) => loan.memberId === memberId).length;
}

console.log("Book:", findBookById(23));
console.log("Active members:", getActiveMembers());
console.log("Available books:", getAvailableBooks());

// ======================================================
// 11. CLASSES AND ACCESS MODIFIERS
// ======================================================

class BankAccount {
  private balance: number;

  constructor(
    public accountNumber: string,
    public accountName: string,
    initialBalance: number
  ) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Deposit amount must be greater than zero");
    }

    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= 0 || amount > this.balance) {
      throw new Error("Invalid withdrawal amount");
    }

    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount("1234567890", "John Doe", 50000);

account.deposit(10000);
account.withdraw(5000);

console.log("Account balance:", account.getBalance());

// ======================================================
// 12. INTERFACES
// ======================================================

interface Notification {
  id: number;
  message: string;
  isRead: boolean;
  createdAt: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    message: "Your payment was successful",
    isRead: false,
    createdAt: "2026-11-10",
  },
  {
    id: 2,
    message: "Your account has been updated",
    isRead: true,
    createdAt: "2026-11-09",
  },
];

function getUnreadNotifications(): Notification[] {
  return notifications.filter((notification) => !notification.isRead);
}

// ======================================================
// 13. DECORATORS
// ======================================================

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

function chalk(colour: string, price: number): string {
  return `Chalk: ${colour}, Price: $${price.toFixed(2)}`;
}
console.log(chalk("red", 500));

let chalkColour: string = "blue";
let chalkPrice: number = 300;



// ======================================================
// 3. VARIABLES AND BASIC DATA TYPES
// ======================================================

let courseName: string = "TypeScript";
let numberOfExercises: number = 12;
let isCompleted: boolean = false;

let currentScore: number = 85;
let studentName: string = "John Doe";

// ======================================================
// 4. TYPE ALIASES AND OBJECT STRUCTURES
// ======================================================

type Member = {
  id: number;
  name: string;
  email: string;
  membershipDate: string;
  isActive: boolean;
  phoneNumber?: string;
};

type Book = {
  id: number;
  title: string;
  publishedYear: number;
  isAvailable: boolean;
  category?: string;
};

type Author = {
  id: number;
  name: string;
  nationality: string;
  birthYear: number;
};

type Loan = {
  id: number;
  bookId: number;
  memberId: number;
  borrowedDate: string;
  returnedDate?: string;
};

type Library = {
  name: string;
  books: Book[];
  authors: Author[];
  members: Member[];
  loans: Loan[];
};

// ======================================================
// 5. SAMPLE OBJECTS
// ======================================================

const member: Member = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  membershipDate: "2023-01-01",
  isActive: true,
  phoneNumber: "08012345678",
};

const memberLoan: Loan = {
  id: 1,
  bookId: 23,
  memberId: 45,
  borrowedDate: "2023-01-01",
};

const library: Library = {
  name: "City Library",

  books: [
    {
      id: 23,
      title: "Things Fall Apart",
      publishedYear: 1958,
      isAvailable: true,
      category: "Fiction",
    },
    {
      id: 24,
      title: "The Lion and the Jewel",
      publishedYear: 1959,
      isAvailable: false,
      category: "Drama",
    },
  ],

  authors: [
    {
      id: 1,
      name: "Chinua Achebe",
      nationality: "Nigerian",
      birthYear: 1930,
    },
  ],

  members: [
    member,
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      membershipDate: "2024-02-15",
      isActive: true,
    },
  ],

  loans: [memberLoan],
};

// ======================================================
// 6. UNION TYPES AND LITERAL TYPES
// ======================================================

// A variable can hold either a string or a number.
let myId: string | number = "ABC123";

console.log("ID:", myId);

myId = 12345;

console.log("ID now na number:", myId);

// A variable can only contain the specified values.
type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";

let status: TaskStatus = "TODO";

console.log("Task status:", status);

// ======================================================
// 7. TYPE NARROWING
// ======================================================

function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log("Na string, uppercase:", id.toUpperCase());
  } else {
    console.log("Na number, times 2:", id * 2);
  }
}

printId("yelminho");
printId(50);

// ======================================================
// 8. DISCRIMINATED UNIONS
// ======================================================

type PaymentResult =
  | { status: "success"; amount: number; transactionId: string }
  | { status: "failed"; reason: string }
  | { status: "pending" };

function describePayment(result: PaymentResult) {
switch (result.status) {
case "success": 
return `Payment success! Amount: ${result.amount}`;
case "failed":
return `Payment failed: ${result.reason}`;
case "pending":
return `Payment still dey pending...`;
default:
// Exhaustive check - if you add new status for up and no handle am, e go give error here
const _exhaustive: never = result;
return _exhaustive;
}
function describePayment(result: PaymentResult): string {
  switch (result.status) {
    case "success":
      return `Payment success! Amount: ${result.amount}. Transaction: ${result.transactionId}`;

    case "failed":
      return `Payment failed: ${result.reason}`;

    case "pending":
      return "Payment still dey pending...";

    default: {
      const exhaustive: never = result;
      return exhaustive;
    }
  }
}

console.log(
  describePayment({
    status: "success",
    amount: 5000,
    transactionId: "TXN001",
  })
);

console.log(
  describePayment({
    status: "failed",
    reason: "No money for account",
  })
);

console.log(describePayment({ status: "pending" }));

// ======================================================
// 9. ARRAY OPERATIONS
// ======================================================

const scores: number[] = [45, 78, 90, 65, 88];

function getHighestScore(numbers: number[]): number {
  return Math.max(...numbers);
}

function getLowestScore(numbers: number[]): number {
  return Math.min(...numbers);
}

function getPassedScores(numbers: number[]): number[] {
  return numbers.filter((score) => score >= 50);
}

console.log("Highest score:", getHighestScore(scores));
console.log("Lowest score:", getLowestScore(scores));
console.log("Passed scores:", getPassedScores(scores));

// ======================================================
// 1. BASIC OUTPUT
// ======================================================

console.log("Hello Yelminho, TypeScript don set!");

// ======================================================
// 2. BASIC FUNCTIONS
// ======================================================

class BankAccount {
  private balance: number;

  constructor(
    public accountNumber: string,
    public accountName: string,
    initialBalance: number
  ) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Deposit amount must be greater than zero");
    }

    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= 0 || amount > this.balance) {
      throw new Error("Invalid withdrawal amount");
    }

    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
 calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

 getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

 isEligibleToVote(age: number): boolean {
  return age >= 18;
}

 calculateDiscount(price: number, discountPercentage: number): number {
  return price - (price * discountPercentage) / 100;
}


 calculateAverage(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
}
  const total = numbers.reduce((sum, number) => sum + number, 0);
  return total / numbers.length;
}
}
}

const transactions = [
  { amount: 100, type: "credit" },
  { amount: 20, type: "cash" },
  { amount: 150, type: "credit" },
  { amount: 50, type: "cash" },
  { amount: 75, type: "credit" }
];

const totalCreditWithBonus = transactions
  .filter((transaction) => transaction.type === "credit")
  .map((transaction) => transaction.amount * 1.1)
  .reduce((sum, amount) => sum + amount, 0);

console.log(totalCreditWithBonus); // 357.5