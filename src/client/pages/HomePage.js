import React from 'react';

const Home = () => {
  return (
    <div>
      <div>Welcome! My Beautiful Mighty Queen</div>
      <button onClick={() => console.log('Hi there')}>Press Meee</button>
    </div>
  );
};

//export default Home;
export default {
  component: Home,
};

//export an object để tại Routes khi phải import cả component và { loadData } thì còn phân biệt đc, vì sẽ có nhiều component có loadData
