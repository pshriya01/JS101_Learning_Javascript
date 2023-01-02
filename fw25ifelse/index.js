let a=5;
let b=6;
if(a>b)
{
  console.log("a is greater")
}
else
  console.log("b is greater")
let price=1000;
let money =999.99;
if(price<=money)
{
  console.log("buy item")
}
else
{
  console.log("too poor")
}
let supermarket="colgate";
let toothpaste="dabur";
function market(toothpaste)//increases time complexity
  {
      console.log("please give me",toothpaste)
  }
if(supermarket==toothpaste)
{
  market(toothpaste);
}
else
{
  console.log("no toothpaste today")
}