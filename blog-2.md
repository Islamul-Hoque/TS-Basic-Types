# The Four Pillars of OOP

## Introduction
Large-scale এর TypeScript project-গুলোতে কোডের জটিলতা কমানো এবং logic সুনির্দিষ্টভাবে সাজানো সবসময়ই একটি বড় চ্যালেঞ্জ। এই চ্যালেঞ্জ মোকাবেলায় Object-Oriented Programming (OOP) অত্যন্ত কার্যকর সমাধান দেয়। OOP-এর মূল ৪টি Pillar (যেমন- **Inheritance**, **Polymorphism**, **Abstraction**, এবং **Encapsulation**) আমাদের codebase-কে modular, reusable এবং clean রাখতে সাহায্য করে। চলুন দেখে নেওয়া যাক কীভাবে এই ৪টি Pillar আমাদের codebase-এর জটিলতা কমিয়ে maintainability ও scalability বাড়াতে পারে।

## Body

### 1. Inheritance
Inheritance হলো এমন একটি প্রক্রিয়া যার মাধ্যমে একটি class-এর properties ও methods অন্য একটি class-এ শেয়ার বা inherit করা যায়। বড় প্রজেক্টে redundancy বা duplicate code এড়াতে এটি অত্যন্ত কার্যকরী।

```ts
class Person {
  constructor(
    public name: string,
    public age: number,
    public email: string
  ) {}
  
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(
    name: string,
    age: number,
    email: string,
    public roll: number,
    public department: string
  ) {
    super(name, age, email);
  }

  displayStudentInfo() {
    console.log(`Student Roll: ${this.roll}, Department: ${this.department}`);
  }
}

const student = new Student("Ishfak", 20, "islamulhoque2006@gmail.com", 101, "CSE");
student.greet();                // Output: Hello, my name is Ishfak and I am 20 years old.
student.displayStudentInfo();   // Output: Student Roll: 101, Department: CSE
```

এখানে, `Student` class-কে আলাদাভাবে `name`, `age`, `email` properties এবং `greet` method নতুন করে লিখতে হয়নি, সরাসরি parent class `Person` থেকে সে এগুলো inherit করে নিয়েছে। আবার পাশাপাশি, `Student` class-এ তার নিজস্ব `roll`, `department` properties এবং `displayStudentInfo` method যুক্ত করে এক্সট্রা ফিচার বা ফাংশনালিটি অ্যাড করা হয়েছে। এর ফলে common logic এক জায়গায় থাকে এবং code duplication বা redundancy একদমই থাকে না।

---

### 2. Polymorphism
Polymorphism শব্দের সহজ অর্থ হলো 'বহুরূপতা'। প্রোগ্রামিংয়ে এর কাজও ঠিক এমনই। যখন একই মেথড বা ইন্টারফেস বিভিন্ন অবজেক্টের জন্য আলাদা আলাদা আচরণ (behavior) দেখায়, তখন তাকেই Polymorphism বলা হয়। এর ফলে আমাদের কোড অনেক বেশি ফ্লেক্সিবল ও ডাইনামিক হয়ে ওঠে।

```ts
class Shape {
  area(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }
}

// Common Function
const getArea = (param: Shape) => {
  console.log(param.area());
};

// Instances 
const myCircle = new Circle(5);
const myRectangle = new Rectangle(4, 6);

getArea(myCircle);     // Output: 78.53981633974483
getArea(myRectangle);  // Output: 24
```

এখানে, `getArea` function-টি কিন্তু parameter হিসেবে parent class এর `Shape` type-কে রিসিভ করে। কিন্তু আমরা যখন এতে child class-এর objects (`myCircle` এবং `myRectangle`) পাস করছি, তখন এটি কোনো error ছাড়াই নিজ নিজ object-এর `area()` method কল করে সঠিক area হিসাব করে দিচ্ছে। আমাদের আলাদাভাবে ম্যানুয়ালি চেক করতে হচ্ছে না কোনটা `Circle` আর কোনটা `Rectangle`। বড় বড় প্রজেক্টে dynamic logic handle করতে Polymorphism এভাবেই সাহায্য করে।

---

### 3. Abstraction
Abstraction হলো কোনো কাজের মূল **idea** আগে ডিক্লেয়ার করা এবং পরবর্তীতে সেটির **implementation** করা। অর্থাৎ, ভেতরের জটিল বা internal implementation details হাইড করে রেখে, বাইরের ব্যবহারের জন্য শুধু প্রয়োজনীয় method বা আইডিয়াটুকুই expose করা।

```ts
// idea
abstract class Animal {
  abstract makeSound(): void;
}

// implementation
class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}

const myDog = new Dog();
myDog.makeSound(); // Output: Woof!
```

এখানে, `Animal` হলো একটি abstract class, যার সরাসরি কোনো instance বা object তৈরি করা যায় না। এটি মূলত একটি blueprint হিসেবে কাজ করে। এর সুবিধা হলো, বড় টিমে কাজ করার সময় সবাই যেন একই প্যাটার্ন ফলো করে কোড লেখে, তা নিশ্চিত করা যায়।

---

### 4. Encapsulation
Encapsulation হলো `class`-এর ভেতরের properties ও logic বাইরের সরাসরি access থেকে সুরক্ষিত রাখা এবং নির্দিষ্ট `methods` (যেমন `getter` ও `setter`)-এর মাধ্যমে তা control করা। একে data hiding-ও বলা হয়ে থাকে।

```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount();
account.deposit(500);
console.log(account.getBalance()); // Output: 500
```

এখানে `balance` property-টি `private` হওয়ায় বাইরে থেকে কেউ এটি সরাসরি পরিবর্তন করতে পারবে না। এতে data safety নিশ্চিত হয় এবং project-এর যেকোনো অংশ থেকে balance ভুলভাবে পরিবর্তনের সুযোগ বন্ধ হয়।

---

## Conclusion
TypeScript-এ large-scale এর scalable codebase তৈরি করার জন্য OOP-এর এই ৪টি Pillar-এর ব্যবহার অত্যন্ত গুরুত্বপূর্ণ। এগুলো আমাদের কোডবেসকে reusable করে, logic আলাদা রাখতে সাহায্য করে এবং system complexity কমিয়ে দেয়। প্রফেশনাল TypeScript project তৈরি করতে এই OOP concepts-গুলো সঠিকভাবে আয়ত্ত করা অত্যন্ত দরকারী।
