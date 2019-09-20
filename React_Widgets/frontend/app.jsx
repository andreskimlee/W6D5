import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

const App = (props) => {
  const tabs = [{title: 'one', content: 'tow'}, {title: 'two', content:'second pane here'}, {title:'three', content:'third pane'}]
  return (
  <div>
    <Clock/>
    <Tabs tabs={tabs} /> 
  </div>
  )
}

//banna =
export default App;