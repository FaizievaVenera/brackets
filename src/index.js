module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let number
  const strArr = str.split('')
  const letterArr = bracketsConfig.flat()
  for (let i=0; i<strArr.length; i++){
    if(arr.length==0&&letterArr.indexOf(strArr[i])%2!=0){
      arr.push(strArr[i])
    }
    else if((letterArr.indexOf(strArr[i])==0|| letterArr.indexOf(strArr[i])%2==0)&&letterArr.lastIndexOf(strArr[i])%2!=0 && arr[arr.length-1]!=strArr[i]){
      arr.push(strArr[i])
    }
    else if((letterArr.indexOf(strArr[i])==0|| letterArr.indexOf(strArr[i])%2==0)&&letterArr.lastIndexOf(strArr[i])%2!=0 && arr[arr.length-1]==strArr[i]){
      arr.splice(arr.length-1,1)
    }
    else if(letterArr.indexOf(strArr[i])==0 || letterArr.indexOf(strArr[i])%2==0 ){
      number = letterArr.indexOf(strArr[i])
      arr.push(strArr[i])
    }else{
       if(letterArr.indexOf(arr[arr.length-1])+1==letterArr.indexOf(strArr[i])){
         arr.pop(arr[arr.length-1])
    }
 }
  
}
return arr.length>0? false: true
}
