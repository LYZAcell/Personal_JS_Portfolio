import './App.css';
import FirstComponent from './studying/FirstComponent'; // App.js로 사이트 만들시 해당 라인 지우기
import styled, {css} from 'styled-components';
import {MainContainer, MainText} from "./studying/practice_styles"; // styledcomponent모아둔 JSX
import React, {useEffect,useState} from "react";


// 컴포넌트 만들기
function MyFirstComponent(){
  return(
    <div>
      <h1>첫번째 컴포넌트!</h1>
      <h3>외대를 만나면 세계가 보이나?</h3>
    </div>
  )
}

// 중첩컴포넌트: children으로 전달받기
function MountComponent({children}){
  return(
    <div style = {{display : "flex", flexDirection : "column", backgroundColor: "orange"}}>
      {children}
    </div>
  );
}

// 프로미스만들어주기
const promise = new Promise((resolve, reject) => {
  // 오래 걸리는 일 수행중 (통신, 파일 읽기)
  console.log('doing something...');
  setTimeout(() => {
    resolve('data');
    //reject(new Error('no network'));
    }, 2000);
  });

  promise
  .then(value => {
      console.log(value);
  })
  .catch(error => {
      console.log(error);
  })
  .finally(() => {
      console.log('finally'); // 출력
  });


//Promise async
async function getUserName() {
  // 백엔드에서 유저 이름 받아오기 .. (약 10초 소요된다고 가정)
  return 'Gayeong';
}

const user = getUserName();
user.then(console.log);


// async 기다리는 동안 동작하는 await
function fetchData(){
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve('데이터가 도착했어요!');
    }, 2000);
  });
}
// await
async function getData(){
  console.log('데이터 가져오는 중!');
  const result = await fetchData();
  console.log(result);//비동기 완료 후 실행
}
// 실행은 async와 await을 선언해둔 getdata로
getData();

// styled component _ 변수명 무조건 대문자로 정의
// styled.tagName 형식으로 원하는 태그 뒤에 백팁안에 css작성
// 컴포넌트 형식. prop 주기 가능
const SecondComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  background-color: ${(props) => props.color || "blue"};
  ${props => 
    props.small &&
    `
    width:  100px;
    height: 50px;
    `}

  ${props => props.size &&
    css`
    width: 100px;
    height: 50px;
    `}
  div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  background-color: pink;
  }
  `;

function App() {

  //포켓몬에서 피카츄가져오기
  const[pikachu, setPikachu] = useState(null);

  const getData = async() => {
    const response = await fetch ("https://pokeapi.co/api/v2/pokemon/pikachu/");
    const jsonData = await response.json();
    setPikachu(jsonData);
  };
  useEffect(() => {
    getData();
  }, []);

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
  //setter 함수 써보기
  const [ count, setCount] = useState(0);
  function handleClick(){
    setCount((prev) => prev + 1);
    console.log(count);
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
    <MyFirstComponent/>
    {/*univ로 props를 받아 함수 export-import*/}
    <FirstComponent univ = "외대" />
    <FirstComponent univ = "이화여대"/>
    <FirstComponent univ = "시립대"/>
    <br/>
    <MountComponent>
      <h1 style = {{backgroundColor: "red"}}>부모 컴포넌트 호출시에는 children이라는 명목하에 아무거나 넣기 가능</h1>
      <FirstComponent/>
      <div className = "gray-box"></div>
    </MountComponent>
    <p style = {{fontWeight: "bold", fontSize: "24px"}}>부모 컴포넌트를 벗어나면 다시 돌아온다.</p>
    <SecondComponent color = " yellow">styledcomponent를 써보았어요. 까먹지 맙시다~! </SecondComponent>
    <SecondComponent small = {true} color = "lightgreen">멋사 짱짱</SecondComponent>
    <SecondComponent>멋사가 짱이에요. styledcomponen prop값 없을 시 || 사용</SecondComponent>
    <SecondComponent>
      <div>
        props 사용자 연습중입니다. 
      </div>
    </SecondComponent>

    <MainContainer>
      <MainText> styledcomponet를 모은 jsx를 활용해 CSS in JS를 편히 사용해보자!</MainText>
    </MainContainer>
    {/*async setter함수 사용해보기*/}
    <button onClick = {handleClick}>1씩 올라가는 버튼</button>
    <div>버튼을 {count}번 눌렀어용!</div>

    

    {/*비동기처리 예시: 응답성을 높일 수 있지만 코드가 실제로 실행될 때 순서가 바뀜*/}
    {/*console.log('1');
    setTimeout(function(){
      console.log('2')
    }, 1000)
    console.log('3');*/} 
    {/* 1 3 --> 2 순서로 받아옴 : 편하면서도 지연 응답리스크가 있음*/}
    
    {/*콜백함수 : 콜백함수는 다른 함수의 파라미터로(매개변수) 들어가는 함수
    동기적 사용도 가능하다.*/}
    {setTimeout(function(){
      console.log('2')
    }, 1000)};

    {setTimeout(()=>console.log('2'),1000)};


    {/*프로미스* -> 상단기재*/}

    {/*promise와 비동기처리: 만약 서버 정보를 가져오는데에 10초이상걸린다면? 동기처리는 곤란함*/}
    {/*promise로 만들어보기*/}

    <>
    <h1> Pikachu! PIkaPika!</h1>
    <img src ={pikachu.sprites.front_default}/>
    </>
    
    
  </div>
  );
}

export default App;
