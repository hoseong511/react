import logo from './logo.svg';
import './App.css';
import { useInput } from "./useInput";
import { useTabs, content } from "./useTabs";

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);  // useTabs의 리턴값은 content[0]
  const contentMap = content.map((section,index) => (
    <button key={index} onClick={() => changeItem(index)}>{section.tab}</button>
    )); // 
  return (
    <div className="App">
      <h1>hello</h1>
      {contentMap}
      <br></br>      
      { currentItem.content }
      { console.log("ho") }
    </div>
  )
}

export default App;
