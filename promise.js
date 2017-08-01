let aPromise = new Promise((resolve,reject) => {
  // resolve('connected success');
  reject('error connect');
});


aPromise.then((mss) => console.log('connecting'), (errMss) => console.log(errMss + ''));
