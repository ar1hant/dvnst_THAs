var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

var osize = 0, key;
for (key in student) {
    osize++;
}

console.log('Size of the current object : ' + osize);