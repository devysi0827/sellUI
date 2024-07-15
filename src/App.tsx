import setRepeatTimer from "./Utils/Functions/setRepeatTimer";

function App() {
  const { startRepeatTimer, closeRepeatTimer } = setRepeatTimer(
    () => console.log("sell/30001"),
    5000
  );

  return (
    <>
      <h1>최상단페이지</h1>
      <p>아래 원하는 컴포넌트를 배치해서 테스트해보세요.</p>
      <hr />
      <div onClick={() => startRepeatTimer()}>startTimer</div>
      <div onClick={() => closeRepeatTimer()}>endTimer</div>
    </>
  );
}

export default App;
