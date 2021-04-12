console.log("This is Javascript tutorial");
function greet(name,greetText) //if we have done greetText="Greetings from Javascript then yeh mtlb nhi ki ki yeh print hoga print good night greetings from jaascript ek efault value hai kuch nahi dia toh yeh aa jaegi mtlb maan lo tmmne kahi pass ni ki value toh yeh aajaegif"
{
    
console.log(greetText+" "+ name);
    console.log( name +" is a good person");
}
function sum(a,b,c)
{
    let d=a+b+c;
    return d ; //iske baad agar tmne kch bh likha woh execute nahi hoga since return kr gaya na
}
function no(n1,n2)
{
    if(n1>n2)
    return n1;
    else
    return n2;
}
let name4="Samiksha";
let name1="Shashwat";
let name2="Neelam";
let name3="Jainendra";
let greetText="Good Night";
greet(name4,greetText);
greet(name1,greetText);
greet(name2,greetText);
greet(name3,greetText);
let retval=greet(name3); //kuch return thodi naa hua islye undefined aega
console.log(retval);
let asum=sum(1,2,3);
console.log(asum);
let max=no(2,5);
console.log(max);
console.log(name4 +"is a good girl");
//Usage of functions
