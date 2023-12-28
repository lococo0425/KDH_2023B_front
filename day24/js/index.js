/* 
    -카테고리(최상위)
    -게시물(상위)
    -댓글(하위)
        1.관계 파악.        : 게시물 상위 댓글 하위 
        2.데이터            
            게시물 : 대표이미지, 등록날짜, 내용, 좋아요 싫어요수, 비밀번호(삭제/수정 시 사용)
            댓글   : 댓글 내용 , 등록날짜, 비밀번호(삭제시 사용)
        
        3.식별자
            1.인덱스 [인덱스 변화가 있을경우 절대적 식별자 역할 힘듦. 임시용은 가능]
            2.식별자만들기[1.자동번호(1씩증가), 2.데이터조합으로 만들기]중복이 없어야 한다!!!
        
        4.관계데이터 대입 [ 하위에서 상위의 식별을 가지고 있어야 한다. ]
            게시물 : +게시물번호
            댓글   : +댓글번호 +게시물번호
*/

let feedList = [
    {
        fno : 1,
        fimg : "img/content1.webp",
        fdate : '2023-12-28',
        fcontent : `  방탄소년단이 'BTS 2019 SUMMER PACKAGE in KOREA' 촬영으로 다녀온✨ <br/>
        전라북도 완주에 위치한 이곳은 작은 비밀공간을 지나면 볼 수 있는 갤러리부터 주변에 특색 있는 산책길까지 한 편의 수채화 같은 곳이기도 합니다. 
        주말 데이트로 #아원고택 어때요?`,
        fgood : 3,
        fbad : 10,
        fqwd : `1234`
    },
    {
        fno : 2,
        fimg : "img/content1.webp",
        fdate : '2023-12-29',
        fcontent : `  방탄소년단이 'BTS 2019 SUMMER PACKAGE in KOREA' 촬영으로 다녀온✨ <br/>
        전라북도 완주에 위치한 이곳은 작은 비밀공간을 지나면 볼 수 있는 갤러리부터 주변에 특색 있는 산책길까지 한 편의 수채화 같은 곳이기도 합니다. 
        주말 데이트로 #아원고택 어때요?`,
        fgood : 3,
        fbad : 10,
        fqwd : `12345`
    },
    {
        fno : 3,
        fimg : "img/content1.webp",
        fdate : '2023-12-30',
        fcontent : `  방탄소년단이 'BTS 2019 SUMMER PACKAGE in KOREA' 촬영으로 다녀온✨ <br/>
        전라북도 완주에 위치한 이곳은 작은 비밀공간을 지나면 볼 수 있는 갤러리부터 주변에 특색 있는 산책길까지 한 편의 수채화 같은 곳이기도 합니다. 
        주말 데이트로 #아원고택 어때요?`,
        fgood : 3,
        fbad : 10,
        fqwd : `qwe123`
    }
];

let replyList = [
    {
        rno : 1,
        fno : 1, //참조할 게시물 번호 = 상위의 식별번호 -1번 게시물의 댓글
        rdate : `2023-12-30`,
        rcontent : `댓글입니다 ㅋㅋ`,
        rpwd : `1234`
    },
    {
        rno : 2,
        fno : 2, //참조할 게시물 번호 = 상위의 식별번호 -2번 게시물의 댓글
        rdate : `2023-12-30`,
        rcontent : `댓글입니다 ㅎㅎ`,
        rpwd : `1234`
    },
    {
        rno : 3,
        fno : 1, //참조할 게시물 번호 = 상위의 식별번호 -1번 게시물의 댓글
        rdate : `2023-12-30`,
        rcontent : `1번 게시물 두번째 댓글인가요?`,
        rpwd : `1234`
    },
    {
        rno : 4,
        fno : 3, //참조할 게시물 번호 = 상위의 식별번호 -1번 게시물의 댓글
        rdate : `2023-12-30`,
        rcontent : `댓글인가요?`,
        rpwd : `1234`
    }
];

//-------------------------------------------------------------------------------------------------------//
document.addEventListener('DOMContentLoaded', function(){
    모든피드호출()
})


//[1] 모든 피드(게시물) 출력함수 (1.js가 열렸을때 , 2.등록,삭제 댓글 등록/삭제 되었을때 )
function 모든피드호출(){
    //1.어디에
    const feedBox = document.querySelector("#feedBox");
    //2.무엇을
        //2-1 모든 피드 출력 [피드 목록/배열에 있는 객체를 하나씩 출력]
    let html = '';
    for(let i=0; i<feedList.length;i++){
        //2-2 배열 내 하나의 게시물/피드 추출 
        const feed = feedList[i]
        html += `<div class="feed">
                    <img src="${feed.fimg}">
                    <div class="contentBox"> 
                        <div class="date">${feed.fdate}</div>
                        <div class="content">${feed.fcontent}</div>
                    </div>
                    <div class="btnBox"> 
                        <div>
                            <button type="button">수정</button>
                            <button type="button">삭제</button>
                            <button type="button">답글</button>
                        </div>
                        <div>
                            <span>👍 ${feed.fgood}</span> <span>👎 ${feed.fbad}</span>
                        </div>
                    </div>
                    
                    <div class="replyBox">
                        ${댓글출력(feed.fno)}
                    </div>
                </div>`
    }
    //출력
    feedBox.innerHTML = html;
}
//함수 2  피드/게시물의 해당하는 댓글 모두 출력하는 함수 (1.피드/게시물 출력시 같이)
function 댓글출력(fno){ // 매개변수 : 출력한 게시물 번호 
    let html = '';
    //모든 댓글 목록에서 fno를 찾아서 일치하면 댓글 HTML 구성
    for(let i=0; i<replyList.length;i++){
        const reply = replyList[i]
        if(fno == replyList[i].fno){// 댓글 목록에서 동일한 fno 찾기
            html += `<div class="reply">
                        <div>${reply.rcontent}</div>
                        <div>
                            <span class="date">${reply.rdate}</span>
                            <button type="button">X</button>
                        </div>
                    </div>`
        }
    }
    return html;
}