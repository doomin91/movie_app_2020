import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// App.js 에 넣은 컨텐츠를 index.html <div> root에 삽입하는 구문
// index.html가 아닌 다른 곳은 들어가지 못하는 것 같다..?
// react application이 하나의 component만을 rendering 해야하기 때문에
// 여러 개의 component는 넣을 수 없다.

ReactDOM.render(<App />, document.getElementById('App'));

