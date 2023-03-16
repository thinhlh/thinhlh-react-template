import './App.scss';
import useAxios from './../hooks/use-axios'
import { useEffect } from 'react';
import { HttpMethod } from './../utils/http-method'
function App() {

  const { data, loading, operation } = useAxios();

  useEffect(() => {
    operation('/users', HttpMethod.GET)
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div className="App">
      <p>
        {loading ? "Loading" : data.toString()}
      </p>
    </div>
  );
}

export default App;
