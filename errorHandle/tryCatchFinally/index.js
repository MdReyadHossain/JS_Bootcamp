/*

error handle 
------------
1. try-catch : only for run-time error
2. finally : run this, even if all code had error 

*/

try {
    alert("Hi World!");
    console.log(x);
} 
catch {
    // alert(error + "\n" + error.name + "\n" + error.message);
    alert("Wrong!");
}
finally{
    alert("Bye World!");
}
