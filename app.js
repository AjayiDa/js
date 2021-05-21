function convertFahrToCelsius(fahrTemp){
  if (isNaN(fahrTemp) || fahrTemp === null || typeof(fahrTemp) === 'boolean'){
      if(Array.isArray(fahrTemp)){            
          return(JSON.stringify(fahrTemp)+ " is not a valid number but a/an array");
      } else {
        return(JSON.stringify(fahrTemp) + " is not a valid number but a/an " + typeof(fahrTemp));
      }      
  } else {           
      const celsius = ((fahrTemp-32) * 5 / 9);
      return(celsius.toFixed(4))       
    }
}
   
//convertFahrToCelsius({});
//convertFahrToCelsius(0);
//convertFahrToCelsius("0");
//convertFahrToCelsius([1,2,3]);
//convertFahrToCelsius({temp: 0});      

function checkYuGiOh(Number){
  var Number;
  if (isNaN(Number)==true){
      if (Array.isArray(Number)==true){
          console.log("invalid parameter: " + JSON.stringify(Number));
          return Number;
       } else if (typeof(Number)=="object"){
          console.log("invalid paramter: " + JSON.stringify(Number));
          return Number;
       } else {
          console.log("invalid paramter: " + JSON.stringify(Number));
          return Number;
       }
  }
  else {
      var ans;
      ans = create(Number);
      function create(n){
          var n;
          var arr = [];
          for (let i = 1; i <= n; i++) {
              if (i%2==0 && i%3==0 && i%5==0){
                  arr.push("yu-gi-oh");
               }else  if (i%2==0 && i%3==0){
                  arr.push("yu-gi");
               }else  if (i%2==0 && i%5==0){
                  arr.push("yu-oh");
               } else  if (i%3==0 && i%5==0){
                  arr.push("gi-oh");
               } else  if (i%5==0){
                  arr.push("oh");
               } else  if (i%3==0){
                  arr.push("gi");
               } else  if (i%2==0){
                  arr.push("yu");
               } 
              else{
                  arr.push(i);
                  }
              console.log(arr);
          }
          return arr;
      }
      return ans;
  }
  
}
//checkYuGiOh(10);
//checkYuGiOh("5");
//checkYuGiOh("fizzbuzz is meh");