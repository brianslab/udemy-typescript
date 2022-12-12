import { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

import CodeEditor from './components/CodeEditor';
import Preview from './components/Preview';
import bundler from './bundler';

const App = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const onClick = async () => {
    const output = await bundler(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor
        initialValue='console.log("Hello, World!");'
        onChange={(value) => setInput(value)}
      />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
