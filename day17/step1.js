
//0.전역변수 [배열]
    //-속성마다 배열을 하나씩 만들면 배열이 너무 많아져. 관리 힘듦....
    //객체지향 나오기전 -> 나온후 : 여러 속성들을 하나의 배열에서 관리!!
        //1. boardArray = [] 하나의 서로다른 유형의 4가지의 데이터 저장 -> 인덱스 관리 어려움
        //2. boardArray = ["작성자/비밀번호/제목/내용", "작성자/비밀번호/제목/내용", "작성자/비밀번호/제목/내용"]  
            //-기준 문자 추가해서 여러개의 데이터를 저장한다. 
            //-여러 유형의 4가지 데이터를 하나의 문자열로 묶음 *단 구분이 있어야함 [구분 문자는 개발자 마음]
            //-입력 데이터에는 구분 문자가 포함 되면 안된다. 
            // 단점 : 분해 하고 분해 후 순서를 기억해야 한다. 
const boardArray = [];

//1.[c]글쓰기 [글쓰기 버튼을 클릭했을때]
function 글쓰기(){ //매개변수 : X, 리턴값 : X
    //1.HTML로 부터 입력받은 값 가져오기
    const writer = document.querySelector('#writer').value
    const password = document.querySelector('#password').value
    const title = document.querySelector('#title').value
    const content = document.querySelector('#content').value
    //2.배열에 저장하기
    const board = `${writer}/${password}/${title}/${content}`; console.log(board)
    boardArray.push(board); console.log(boardArray);
    //3.배열에 HTML에 출력하기
    document.querySelector('#writer').value=''
    document.querySelector('#password').value=''
    document.querySelector('#title').value=''
    document.querySelector('#content').value=''

    모든글출력()


    return;
}
//2-1[r]모든글출력 [js가 최초로 열렸을때, 글쓰기/글수정/글삭제 처리 했을때 새로고침]
function 모든글출력(){ //매개변수 : X, 리턴값 : X

    const tableBody = document.querySelector('table>tbody'); console.log(tableBody)

    let html = ``;
    for(let i =0; i<boardArray.length; i++){
        console.log(boardArray[i]);
        //저장할때 값을 / 로 묶었기 때문에 출력할때 .split을 이용하여 / 기준으로 분해한다.
        html += `   <tr onclick="개별글출력(${i})">
                        <th>${i}</th>
                        <th>${boardArray[i].split('/')[2]}</th>
                        <th>${boardArray[i].split('/')[0]}</th>
                    </tr>`
    }

    tableBody.innerHTML = html;
    return;
}
//2.[r]개별글출력 [해당 글을 선택했을때]
function 개별글출력(index){ //매개변수 : 해당글의 식별번호(보고자 하는번호), 리턴값 : X
    console.log(index)
    const boardBox = document.querySelector("#boardBox")
    //.replaceAll -> 문자열 치환하기 replaceAll("기존문자", "변경할 문자")
    let html = `<div>작성자 : ${boardArray[index].split("/")[0]}</div>
                <div>제목 : ${boardArray[index].split("/")[2]}</div>
                <div>내용 : ${boardArray[index].split("/")[3].replaceAll('/n','<br/>')}</div>
                <div><input onclick="글삭제(${index})" type="button" value="삭제"/></div>
                <div><input onclick="글수정(${index})" type="button" value="수정"/></div>
               `

    boardBox.innerHTML = html;
    return;

}
//3.[u]글수정 [글수정 버튼을 클릭 했을때]
function 글수정(index){ //매개변수 : (대상)수정할 식별번호, 리턴값 : X
    console.log(index)

    //1. 검증 [유효성 검사] - 패스워드를 입력받아.. 해당 게시물의 패스워드와 동일하념
    const checkPw = prompt('비밀번호');

    if(checkPw==boardArray[index].split("/")[1]){
        const updateTitle = prompt("수정할 제목");
        const updateContent = prompt("수정할 내용");
        //수정처리

        boardArray[index] =`${boardArray[index].split('/')[0]}/${boardArray[index].split('/')[1]}/${updateTitle}/${updateContent}`
        alert("수정 성공");
        모든글출력()
        개별글출력(index)
    }else{
        alert("패스워드가 다릅니다. 수정불가.")
    }


    return;
}
//4.[d]글삭제 [글삭제 버튼을 클릭했을때]
function 글삭제(index){ //매개변수 : (대상)수정할 식별번호, 리턴값 : X
    console.log(index)
    const checkPw=prompt('비밀번호');
    if(checkPw==boardArray[index].split('/')[1]){
        boardArray.splice(index,1);
        alert('삭제성공')
        //새로고침
        모든글출력();
        document.querySelector("#boardBox").innerHTML=``;//개별글보기 구역 초기화
    }else{
        alert('패스워드가 다릅니다. 삭제불가')
    }
    return;
}

/* 
    함수 만들때 고민할점.
        1.언제 실행하는 함수인지?
        2.함수 안으로 넣을 매개변수
        3.함수 밖으로 반환할 값
        4.무엇을 실행 하는지
*/