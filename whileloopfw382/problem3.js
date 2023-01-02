//Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit
let given_limit=12;
let i=0;
let sum=0;
while(i<=given_limit)
  {
    if(i%3==0)
    {
      sum+=i
    }
    i++
  }
console.log(sum)