import React from "react";

// 컴포넌트 export 해보기
// univ는 받아야할 props를 명시해주는 자리. 
// univ가 입력 안될 시 외대가 default이도록 설정
export default function FirstComponent({univ = "외대"}){
    {/*조건부 렌더링 추가: 렌더링을 변수로 정의*/}
    let ConditionalContent;

    if (univ === "이화여대") {
        ConditionalContent = <h5 style = {{color: "Green"}}>이화 그린그린</h5>
        }
    else{
        ConditionalContent = (
            <div>
                <span>셋 중 어딜갈까 돌려돌려 돌림판~~~!</span>
            </div>
            );}

    return(

        <div>
            {/*<div>
            <h1> My export component</h1>
            <h3> 외대를 만나면 수출용 컴포넌트가 보인다</h3>
            </div>*/}
            
            <h1> export the component to make peace in Troiska</h1>
            <h3>{univ}를 만나면 세계가 보일락말락</h3>
            {ConditionalContent}
            {/*삼항연산자 사용하기*/}
            {/*<h3>{(univ === "시립대")? "오세훈" : ${univ}를 만나면 세계가 보인다</h3>*/}


        </div>

    );
}

// 조건렌더링을 바로 return해준다면 아래와 같이 작성도 가능
{/*
    export default function FirstComponent({univ = '외대'}) {
    if(univ === '시립대') {
        return null
    }
    else{
        return (
            <div>
                <h1>My First Component</h1>
                <h3>{univ}를 만나면 세계가 보인다</h3>
            </div>
        );
    }
}*/}