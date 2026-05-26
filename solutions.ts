// Problem-1
function filterEvenNumbers(arr:number[]) : number[]{
    return arr.filter(num => num % 2 ==0)
}


// Problem-2
function reverseString(arr: string): string{
    return arr.split('').reverse().join('');
}


// Problem-3
type StringOrNumber = string | number;

function checkType(value : StringOrNumber): string{
    if(typeof value == "string") return "String";
    else return "Number";
}


// Problem-4
function getProperty<T, K extends keyof T>(object: T, key: K) : T[K] {
    return object[key];
}


// Problem-5
interface Book {
    title: string,
    author: string,
    publishedYear: number,
}

type ReadBook = Book & { isRead: boolean };

function toggleReadStatus(book : Book) : ReadBook{
    return { 
        ...book, 
        isRead : true 
    }
}


// Problem-6
class Person {
    name : string;
    age : number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string){
        super(name, age);
        this.grade =grade
    }

    getDetails() : string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}


// Problem-7
function getIntersection(arr1: number[], arr2: number[]): number[]{
    return arr1.filter(num=> arr2.includes(num))
}