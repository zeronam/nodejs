// Print array

let arr = ['1','2','3','5','8'];

// arr.forEach( function(i){
// 	<h1><%= i %></h1>
// })

//Or ES6

// arr.forEach( i => <h1><%= i %></h1> )
arr.map( i => i*2 )    // arr= [2,4,6,10,16]

//Function in function

let getFunction= (num) => {
	if (num>=0) return () => console.log('+');
return () => console.log('-')
}

getFunction(1)(); // +

//Function callback
let add = (a,b,cb) => {
  setTimeout(() => {
    let err, result;
    if(typeof a != 'number' || typeof b != 'number'){
      return cb(new Error('a,b is number'));
    }
    cb(undefined, a+b);
  },1000)
}
let multiply = (a,b,cb) => {
  setTimeout(() => {
    let err, result;
    if(typeof a != 'number' || typeof b != 'number'){
      return cb(new Error('a,b is number'));
    }
    cb(undefined, a*b);
  },1000)
}
let devide = (a,b,cb) => {
  setTimeout(() => {
    let err, result;
    if(typeof a != 'number' || typeof b != 'number'){
      return cb(new Error('a,b is number'));
    }
    if(b==0) return cb(new Error('b > 0'));
    cb(undefined, a / b);
  },1000);
}

// devide(20,5,function(err,result){
//   if(err) return console.log("Error " + err);
//   return console.log("devide " , result);
// })

let squareCal = (a,b,h,cb) => {
  add(a,b,(err,result) => {
    if(err) return cb(err);
    multiply(result,h,(err,result)=>{
      if(err) return cb(err);
      console.log('result ' + result);
      devide(result, 2,(err, square)=>{
        if(err) return cb(err);
        cb(undefined,square);
      });
    });
  });
}
squareCal(2,3,2,(err,result) => {
  if(err) return console.log(err + '');
  console.log("square = " + result);
})
