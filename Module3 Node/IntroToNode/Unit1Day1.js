// console.log(process.argv)
let data =process.argv[2] ;
 sin=(angleDegree)=>{
   const radians = angleDegree * (Math.PI / 180);
  return Math.sin(radians);

 }
 cost=(angleDegree)=>{
    const radians=angleDegree*(Math.PI/180)
    return Math.cos(radians)
 }
 tan=(angleDegree)=>{
    const radians=angleDegree*(Math.PI/180)
        return Math.tan(radians)

 }

if(data=="sum"){
 console.log(add(Number(process.argv[3]),Number(process.argv[4])))
}
else if(data=="sub"){
 console.log(sub(process.argv[3],process.argv[4]))
}
else if(data=="divide"){
console.log(div(process.argv[3],process.argv[4]))
}
else if(process.argv[2]=="mult"){
 console.log(mult(process.argv[3],process.argv[4]))
   }
 else if(process.argv[2]=="sin"){
  console.log(sin(Number(process.argv[3])))

 }
  else if(process.argv[2]=="tan"){
  console.log(tan(Number(process.argv[3])))
}
 else if(process.argv[2]=="cost"){
  console.log(cost(Number(process.argv[3])))

 }
  else if(process.argv[2]=="random"){
  console.log(random())

 }

else{
    console.log("Operation not found")
}
function add (a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mult(a,b){
    return a*b
}
function div(a,b){
    return a/b
}
function random(min = 0, max = 1){
return Math.random()*(max - min) + min;
}