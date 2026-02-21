// 1. Write a program to calculate the sum of the first 10 natural numbers using a while loop. 
        
        // what is natural numbers ? 1,2,3,4,5,6,7,8,9,10
        let sum : number=0;
        let i : number =1;
        while(i<=10)
        {
          sum+=i;
          i++;  
        }
        
        console.log("The sum of first 10 natural numbers is: "+sum);
//2. Write a program to calculate the factorial of a given number using a while loop.
     // what is factorial ? 5! = 5*4*3*2*1=120
        let fact : number=1;    
        let j : number =5;
        while(j>=1)
        {
          fact*=j;
          j--;  
        }
        console.log("The factorial of 5 is: "+fact);

// 3. Write a program to reverse a given number using a while loop. 
        // what is reverse number ? 12345 -> 54321
        let num : number =12345;
        let originalNum : number = num;
        let rev : number =0;
        while(num>0)
        {
          let digit = num % 10;              // get last digit
          rev = rev * 10 + digit;    // add digit to reverse
          num = (num - digit) / 10;  //  remove last digit
        }
        console.log("The reverse of the number " + originalNum + " is: " + rev);
        console.log("The reverse of the number " + num + " is: " + rev);

//4, Write a program to check if a given number is a prime number using a while loop. 
        // what is prime number ? 2,3,5,7,11,13,17,19,23,29
        let num1 : number = 9;
        let k :number=2;
        let isPrime : boolean = true;

        while(k<=num1)     // check divisibility from 2 to num1-1
        {
            if(num1%k==0 && k!==num1) // if num1 is divisible by k and k is not num1 itself
            {
                isPrime = false;
                break;
            }
            k++;
        }
        console.log("The number " + num1 + " is " + (isPrime ? "prime" : "not prime"));

// 5. Write a program to find the largest digit in a given number using a while loop. 
        // what is largest digit ?  3792 -> 9
        let number : number = 3792;
        let largestDigit : number = 0;
        while(number>0)
        {
            let digit = number % 10; // get last digit
            if(digit>largestDigit)
            {
                largestDigit = digit;
            }
            number = (number - digit) / 10; // remove last digit
        }       
        console.log("The largest digit in the number is: " + largestDigit);

// 6. Write a program to check if a given number is a palindrome using a while loop.
        // what is palindrome ? 121, 1331, 12321
        let num2 : number = 12321;
        let originalNum2 : number = num2;
        let reverseNum : number = 0;
        while(num2>0)
        {
            let digit = num2 % 10; // get last digit
            reverseNum = reverseNum * 10 + digit; // add digit to reverseNum
            num2 = (num2 - digit) / 10; // remove last digit
        }
        console.log("The number " + originalNum2 + " is " + (originalNum2 === reverseNum ? "a palindrome" : "not a palindrome"));

// 7. Write a program to print the Fibonacci series up to a given number using a while loop.

        // what is Fibonacci series ? 0,1,1,2,3,5,8,13,21,34
        let limit : number = 50;
        let a : number = 0;
        let b : number = 1;
        console.log("Fibonacci series up to " + limit + ":");
        while(a<=limit)
        {
            console.log(a);
            let next : number = a + b;
            a = b;
            b = next;
        }   
// 8. Write a program to count the number of digits in a given number using a while loop.
        // what is number of digits ? 12345 -> 5
        let num3 : number = 12345;  
        let count : number = 0;
        while(num3>0)
        {
            num3 = Math.floor(num3 / 10); // remove last digit
            count++;
        }
        console.log("The number of digits in the given number is: " + count);

// 9. Write a program to calculate the sum of the digits of a given number using a while loop.
        // what is sum of digits ? 1234 -> 1+2+3+4=10
        let num4 : number = 1234;
        let sumOfDigits : number = 0;
        while(num4>0)
        {
            let digit = num4 % 10; // get last digit
            sumOfDigits += digit;
            num4 = Math.floor(num4 / 10); // remove last digit
        }
        console.log("The sum of the digits of the given number is: " + sumOfDigits);

// 10. Write a program to print all the multiples of a given number up to a certain limit using a while loop.
        // what is multiples ? 3 -> 3,6,9,12,15,... up to limit
        let multipleOf : number = 3;
        let limit2 : number = 30;
        let m : number = 1;
        console.log("Multiples of " + multipleOf + " up to " + limit2 + ":");
        while(multipleOf * m <= limit2)
        {
            console.log(multipleOf * m);
            m++;
        }
        
// Assignment end         
        


