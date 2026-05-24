// Problem-1
function filterEvenNumbers(arr:number[]) : number[]{
    return arr.filter(num => num % 2 ==0)
}
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem-2
function reverseString(arr: string): string{
    return arr.split('').reverse().join('');
}
// console.log(reverseString("typescript"));
