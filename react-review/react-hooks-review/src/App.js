import sun from './sun.svg'
import './App.css';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import Example4 from './components/Example4';
import Example5 from './components/Example5';
import useWindowWidth from './hooks/useWindowWidth';
import withHasMounted from './hoc/withHasMounted';
import useHasMounted from './hooks/useHasMounted';
import Example6 from './components/Example.6';
import Example7 from './components/Example.7';
import Example8 from './components/Example.8';

function App({ hasMounted }) {
  const width = useWindowWidth();
  const hasMountedFromHooks = useHasMounted()
  console.log(hasMountedFromHooks);


  return (
    <div className="App">
      <header className="App-header">
        <img src={sun} className="App-logo" alt="logo" />
        {/* <Example1 ></Example1>
        <Example2 ></Example2>
        <Example3 ></Example3>
        <Example4 ></Example4>
        <Example5 ></Example5> */}
        <Example6 >UseReducer</Example6>
        <Example7 >Usememo</Example7>
        <Example8 >UseRef</Example8>

        {width}
      </header>
    </div>
  );
}

export default withHasMounted(App);
