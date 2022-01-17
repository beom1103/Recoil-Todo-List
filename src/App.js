import "./App.css";
import React from "react";
import { RecoilRoot } from "recoil";
import TodoList from "./todo/TodoList";

function App() {
  // recoil을 사용하려면 최상단 컴포넌트에서 RecoilRoot로 감싸줘야 한다.
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
