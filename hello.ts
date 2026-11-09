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