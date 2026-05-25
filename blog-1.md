# Generics in TypeScript

## Introduction
TypeScript-এ **Generics** এমন একটি শক্তিশালী feature যা আমাদেরকে reusable এবং type-safe code লিখতে সাহায্য করে। Generics ব্যবহার করলে একই function বা class বিভিন্ন data type-এর সাথে কাজ করতে পারে, কিন্তু type safety হারায় না। এর ফলে code হয় flexible, scalable এবং bug-free।

## Body

ধরা যাক, আমরা এমন একটি function লিখবো যা input হিসেবে যেকোনো data type-এর array গ্রহণ করবে এবং সেই array-টিকে reverse করে return করবে।

Generics ছাড়া যদি আমরা এই কাজটি করতে চাইতাম, তবে প্রতিটি type-এর array-র জন্য আমাদের আলাদা আলাদা duplicate function লিখতে হতো। যেমন:

```ts
function reverseNumberArray(arr: number[]): number[] {
  return [...arr].reverse();
}

function reverseStringArray(arr: string[]): string[] {
  return [...arr].reverse();
}

function reverseBooleanArray(arr: boolean[]): boolean[] {
  return [...arr].reverse();
}
```

এখানে বড় অসুবিধা হলো প্রচুর duplicate code তৈরি হচ্ছে এবং code size বাড়ার সাথে সাথে codebase maintain করা কঠিন হয়ে পড়বে।

এই সমস্যা এড়াতে আমরা খুব সহজে Generics ব্যবহার করতে পারি। Generics আমাদের যেকোনো data structure-এর array-কে একটি মাত্র dynamic ও reusable function দিয়ে handle করার সুযোগ দেয়:

```ts
function reverseArray<T>(arr: T[]): T[] {
  return [...arr].reverse();
}

const reversedNums = reverseArray<number>([1, 2, 3]);       // Return type: number[]
const reversedStrs = reverseArray<string>(["a", "b", "c"]); // Return type: string[]
const reversedBools = reverseArray<boolean>([true, false]); // Return type: boolean[]
```

এখানে `<T>` হলো একটি **Type Parameter**। আমরা যখন function কল করার সময় নির্দিষ্ট কোনো type pass করি (যেমন- `number` বা `string`), TypeScript compiler নিজে থেকেই `T`-এর জায়গায় সেই type-টি বসিয়ে সেট করে দেয়। ফলে আলাদা কোনো duplicate function লেখার প্রয়োজন ছাড়াই খুব সহজে type safety বজায় রেখে যেকোনো data type handle করতে পারি।

## Generics-এর সুবিধা
* **Reusability:** একবার লিখে বিভিন্ন data type-এর সাথে বারবার ব্যবহার করা যায়।
* **Type Safety:** ভুল type ব্যবহারের কারণে হওয়া bug-গুলো compile-time-এই ধরা পড়ে।
* **Flexibility:** কোনো dynamic casting ছাড়াই বিভিন্ন data structure-এর সাথে সহজে কাজ করে।
* **Maintainability:** duplicate code দূর করে code-কে clean এবং DRY (Don't Repeat Yourself) রাখে।

## Conclusion
TypeScript-এ type-safe এবং clean code লেখার জন্য Generics আসলেই দারুণ একটি feature। এর মাধ্যমে আমরা খুব সহজেই reusable functions, classes ও interfaces তৈরি করতে পারি। আর Generics ব্যবহারের ফলে আমাদের codebase অনেক বেশি scalable ও maintainable হয়। তাই যেকোনো বড় বা মাঝারি আকারের TypeScript project-এ এটি ব্যবহার করা খুবই প্রয়োজন।