const var1={
  first_name: "Arihant"
}

const var2={
  title: "Daga"
}

function invite(temp, a, b){
  console.log(this.first_name + " " + temp.title + ", sum : " + (a + b));
}

invite.call(var1, var2, 5, 10);
invite.apply(var1, [var2, 2, 1]);
const ab = invite.bind(var1, var2, 5, 10);
console.log(ab);