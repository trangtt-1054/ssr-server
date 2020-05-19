import React from 'react';

const Home = () => {
  return (
    <div className="center-align" style={{ marginTop: '200px'}}>
      <h3>Welcome! My Beautiful Mighty Queen</h3>
      <p>Check out these awesome features</p>
    </div>
  );
};

//export default Home;
export default {
  component: Home,
};

//export an object để tại Routes khi phải import cả component và { loadData } thì còn phân biệt đc, vì sẽ có nhiều component có loadData
