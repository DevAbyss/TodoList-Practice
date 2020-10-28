import React, {FC} from 'react';
import ReactDOM from 'react-dom';
import Img from './images/cloud.jpg';
import './css/index.scss';

const App: FC = () => {
  return (
    <div>
      <p>Hello World</p>
      <img src={Img} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
