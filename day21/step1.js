//p.291 : 객체 속성 여부 확인
const object = {
    name : '혼자공부하는파이썬',
    price : 18000,
    publisher : '한빛미디어'
}

if(object.name !== undefined){
    console.log("속성이 있음")
}else{
    console.log("속성 없음")
}

if(object.author !== undefined){
    console.log("속성 있음")
}else{console.log("속성 없음")}