//[1]피드 게시물 등록 함수 ( 1.피드게시버튼을 클릭했을때)

function 피드등록(){
    //1.입력
    //각 요소의 입력값 호출.
    const fpwd = document.querySelector('input').value;
    const fcontent = document.querySelector('textarea').value;
    //3.기존 localStorage 호출
    let feedList =JSON.parse(localStorage.getItem('feedList')); console.log(feedList)
    if(feedList==null){feedList=[]}; //만약에 localStorage에 아무것도 없으면 배열 선언
     //2.객체화
    const feed={
                fno : feedList.length >=1 ? feedList[feedList.length-1].fno+1 : 1 , //[!] 게시물 번호를 자동으로 순차적으로 배정 [마지막 게시물의 fno + 1]
                fimg : "img/content1.webp", //[!]input file 로 등록된 사진()
                fdate : new Date(),
                fcontent : fcontent.replaceAll('\n','<br/>'),
                fgood : 0, //등록시 좋아요는 0 부터 시작함
                fbad : 0,   //등록시 싫어요는 0 부터 시작함
                fqwd : fpwd
                }
    //4. 피드목록에 피드 등록
    feedList.push(feed)
    //5. localStorage 저장 [!! : localStorage 는 문자열만 저장 가능하므로.]
    localStorage.setItem('feedList', JSON.stringify(feedList));
}//f end

//이미지 등록함수 (input(file)에서 첨부파일을 등록할때마다)
function 이미지등록(event){ 
    //[!] event : 이벤트를 발생한 결과 정보를 객체로 담아두기
    console.log(event)
    console.log(event.target)
    console.log(event.target.files) //input type file 일때만 가능 
}