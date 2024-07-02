import React from 'react';
import "./App.css";
import React, {Component} from "react"; // 클래스형 컴포넌트 호출 시

{/*function NameBox(){
    const name = "test";
    return <div>{name}</div>;
}

export default NameBox;*/}

// 함수형 컴포넌트
{/*const NameBox = () => {
    const name = 'test';
    return <div> {name} </div>
}

export default NameBox;*/}

// HOOK을 통해 이제 함수형만 거의씀. 아래와 같은 클래스는 잘 안씀
{/*class NameBox extends Component{
    render(){
        const name = 'react';
        return <div className = "react"> {name} </div>
    }
}
export default NameBox;*/}

// 컴포넌트 만들기
function FirstComponent(){
    return(
      <div>
        <h1>첫번째 컴포넌트!</h1>
        <h3>외대를 만나면 세계가 보이나?</h3>
      </div>
    )
  }
  

function practice() {
    // JS 단일행 주석
    /* Js 여러행 주석*/
    const name = "나는 냥냥멋사"
    // css를 객체 형태로 선언해주기
    const style = {
      backgroundColor : "black",
      color: 'orange',
      fontSize: 24,
      padding: '2rem'
    }
  
    return (
    <div>
        {/*JSX코드 안에서 JS표현식을 {}안에 포함시켜 주석다는 방식*/}
        {/*둘 이상의 태그는 꼭 하나의 태그 안에 감싸져야함 -> 상 하단에 div가 하나 더씌워지는 이유*/}
        <div style = {style}> 멋사 최고야 짱짱</div>
        <br/>
        <input></input> {/*input은 셀프클로징도가능*/}<br/>
        <input/>
        <p> 변수명 보여줄 시 {name}처럼 {"{"}중괄호{"}"}가 필요합니다. </p>
        <p>css는 객체형태로 작성해야하며 카멜케이스로 작성해야함. function-is-pascal, generalTypeIscamelCase</p>
        {/*css 적용 시에는 className으로 입력해야함.class = 이 아님 */}
        <div className = "gray-box"/>
        <FirstComponent/>
     </div>
        {/*굳이 div가 아니더라도 fragment라는 이름없는 태그 활용도 가능*/}
        <> {/*fragment태그*/}
        <input/>
        <p>fragment안에 있는 태그들입니당.</p>
        </>
    );
  }
  
  export default practice;