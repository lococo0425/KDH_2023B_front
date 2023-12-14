let output = ``;    // - 출력할 내용을 저장하는 임시변수.

/*
// 문제1
const value1 = Number( prompt('문제1 수 입력 ; ') );
for( let i = 1 ; i <= value1 ; i++ ){
    // - i는 1부터 입력받은 수까지 1씩 증가 
    output += `*`;
} // for end 
console.log( output );

// 문제2 
output = ``;        // - 문제가 변경되었기 때문에 출력할 내용 공백으로 수정
const value2 = Number( prompt('문제2 수 입력 ') );
for( let i = 1 ; i<= value2 ; i++ ){
    output += `*`
    // 만약에 i가 3배수이면 줄바꿈 처리.
    if( i % 3 == 0 ){ output +=`\n`; } //  \n : 제어(이스케이프)문자
} // for end 
console.log( output );
*/
/*
// 문제3
output = ``;
const line3 = Number( prompt('문제3 줄수 : ') );
for( let i = 1 ; i<=line3 ; i++ ){ // for1 s    [행]

    // 별찍기
    for( let s = 1 ; s<= i ; s++ ){  // for1 s   [열]
        output += `*`; 
    } // for2 end 

    // 줄바꿈
    output += `\n`

} // for1 end 
console.log( output );
*/
/*
// 문제4
output = ``;
const line4 = Number( prompt('문제4 줄수 : ') );
for( let i = 1 ; i<=line4 ; i++  ){ // 행출력 

    // 별찍기
    for( let s = 1 ; s<=line4-i+1 ; s++ ){ // 열출력
        output +=`*`
    } // for end 

    // 줄바꿈
    output += `\n`;

}; // for end 
console.log( output );
*/


/*
// 문제)5
output = ``;
const line5 = Number( prompt('문제5 줄수 : ') );

for( let i = 1 ; i<=line5 ; i++ ) {// [ 행 ]
    // [ 공백 ]
    for( let b = 1 ; b<=line5-i ; b++ ){ output +=` `;}
    // [ 별 ]
    for( let s = 1 ; s<= i ; s++ ){ output +=`*`;}
    // [줄바꿈=행바꿈]
    output += `\n`
} // foe end 
console.log( output );
*/

/*
// 문제)6
output = ``;
const line6 = Number( prompt('문제6 줄수 : ') );
// [행]
for( let i = 1 ; i<=line6 ; i++ ){
    // [공백]
    for( let b = 1 ; b<=i-1 ; b++ ){ output += ` `;}
    // [별]
    for( let s = 1 ; s<=line6-i+1; s++){ output += `*`; }
    // [줄바꿈]
    output += `\n`;
}
console.log( output );
*/
/*
// 문제)7
output = ``;
const line7 = Number( prompt('문제7 줄수 : ') );
// [행]
for( let i = 1 ; i<=line7 ; i++ ){
    // [공백]
    for( let b = 1 ; b<=line7-i ; b++ ){ output+=` `}
    // [별]
    for( let s = 1 ; s<= i*2 -1 ; s++ ){ output+=`*` }
    // [줄바꿈]
    output += `\n`
} // for end 
console.log( output );
*/
/*
// 문제)8-1
output = ``;
const line8 = Number( prompt('문제8 줄수 : ') );
// [행]
for( let i = 1 ; i<=line8 ; i++ ){
    // [공백]
    for( let b = 1 ; b<= i-1 ; b++ ){ output += ` `; }
    // [별]
    for( let s = 1 ; s<= (line8*2) - ( i*2-1 ) ; s++ ){ output += `*`}
    // [줄바꿈]
    output += `\n`; // 행마다 1개 이므로 반복문 안씀..
}
console.log( output );

// 문제)8-2
output = ``;
const line8 = Number( prompt('문제8 줄수 : ') );
// [행 뒤집기. 수정]
for( let i = line8 ; i<=1 ; i-- ){
    // [공백 수정 ]
    for( let b = 1 ; b<= line8 - i ; b++ ){ output += ` `; }
    // [별 7번 동일]
    for( let s = 1 ; s<=  i*2-1  ; s++ ){ output += `*`}
    // [줄바꿈]
    output += `\n`; // 행마다 1개 이므로 반복문 안씀..
}
console.log( output );
*/
/*
// 문제10
output = ``;
const line10 = Number( prompt('문제10 줄수 : ') );
//[행]      <tr>
for( let r = 1 ; r<=line10 ; r++ ){
    //[열]      <td>
    for( let c = 1 ; c<=line10 ; c++  ){
        // [ 조건1  = 행과 열이 같으면 별 ] 
        if( r == c ){ output += `*`; }
        // [ 조건2 = 행과 열이 더한 값이 입력받은값+1 ]
        else if( r+c == line10+1 ){ output += `*`; }
        // 아니면 공백
        else{ output += ` `;  }
    }
    // 
    output += `\n`;
} // for end 
console.log( output );
*/

// 문제10-2
// 문제 10-2
function 문제10(){
    // [1. 입력 ]
    const line = Number(document.querySelector('#line10').value);
    // [2. 처리 ]
    let html ='';
    for( let r = 1 ; r <= line; r++ ){

    // 행시작
    html += '<tr>';
    for( let c = 1 ; c <= line; c++ ){
        if( c == r  ){html += '<td>★</td>';}
        else if( c+r == line+1 ){html += '<td>★</td>';}
        else{html += '<td> </td>';}
        
    }

    // 행끝
    html += '</tr>';
}
    // [3. 출력 ]
    const tableObj = document.querySelector('#table10');
    tableObj.innerHTML = html;

    console.log(tableObj);

}

function 문제9(){
// 문제9) 입력받은 줄 수 만큼 * 출력  [ ex) 10 ]
let html ='';
let line9 = Number(document.querySelector('#line9').value);
if( line9 % 2 == 0 ){   // 입력된 수가 짝수일 경우
    line9 = line9/2     // 입력된 값을 /2 하여 절반값을 상단 하단에서 사용
    //상단
    for( let i =1 ; i <= line9 ; i++ ){
        html += '<tr>';
        for( let j = line9 ; j > i; j--){
            html += '<td> </td>';
        }
        for( let m = 0; m < (2*i)-1; m++ ){
            html += '<td>★</td>';
        }
        html += '</tr>';

    }
    //하단
    for( let i = line9 ; i >= 1 ; i-- ){
        html += '<tr>';
        for( let j = line9 ; j > i; j--){
            html += '<td> </td>';
        }
        for( let m = 0; m < (2*i)-1; m++ ){
            html += '<td>★</td>';
        }
        html += '</tr>';

    }
   
    const tableObj = document.querySelector('#table9');
    tableObj.innerHTML = html;
    console.log(tableObj);
}else{  
    line9 = parseInt(line9/2)   
    //상단
    for( let i =1 ; i <= line9+1 ; i++ ){
        html += '<tr>';
        for( let j = line9+1 ; j > i; j--){
            html += '<td> </td>';
        }
        for( let m = 0; m < (2*i)-1; m++ ){
            html += '<td>★</td>';
        }
        html += '</tr>';
    }
    //하단
    for( let i = line9 ; i >= 1 ; i-- ){
        html += '<tr>';
        for( let j = line9+1 ; j > i; j--){
            html += '<td> </td>';
        }
        for( let m = 0; m < (2*i)-1; m++ ){
            html += '<td>★</td>';
        }
        html += '</tr>';
    }
   
    const tableObj = document.querySelector('#table9');
    tableObj.innerHTML = html;
    console.log(tableObj);
}

}
