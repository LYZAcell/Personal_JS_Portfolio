import logo from './logo.svg';
import './App.css';
import FirstComponent from './studying/FirstComponent'; // App.js로 사이트 만들시 해당 라인 지우기


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

function App() {
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
  </div>
  );
}

export default App;
