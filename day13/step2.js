const carNumArray = [] ;
const carTimeArray = [] ;

function 입차(){
    const carNum = document.querySelector('#carNum').value;
    const carTime = document.querySelector('#carTime').value;
    // 1. 차량번호 4자리
    if(carNum.length !==4){alert("차량번호 4자리를 입력하세요"); return;}
    // 2. 입차 시간 입력 안하면 입차 불가능
    if(carTime ==""){alert("입차 시간을 선택해 주세요"); return;}
    
    carNumArray.push(carNum);
    carTimeArray.push(carTime);

    alert("입차가 완료되었습니다.")
}

function 출차(){
    const carOutNum = document.querySelector('#carOutNum').value
    const carOutTime = document.querySelector('#carOutTime').value;


    let 요금 = 3000;
//====================================입차시간====================================
    const outIndex = carNumArray.indexOf(carOutNum) // 출차 차량번호의 인덱스

    if(outIndex == -1 ){    alert(`입차한 차량이 없습니다.`) ; return;}
    
    const inTime = carTimeArray[outIndex];//출차차량번호의 인덱스를 이용한 입차배열내 입차시간
    const inMTime = (inTime.split(":")[0]*60 + inTime.split(":")[1]*1)
//====================================출차시간====================================
    const outArray = carOutTime.split(':');
    const outH = outArray[0];
    const outM = outArray[1];

    const outMtime = (outH*60) + (outM*1);

//=====================================시간차이====================================
    const time = outMtime - inMTime;
    if(time<0){alert("출차시간이 더 적을 수 없습니다.")}
    else if( time <= 30){ 요금 = 0;}
    else (요금 = parseInt((time-30)/10) * 1000)

    alert(`출차 완료 : ${요금} `)
}

