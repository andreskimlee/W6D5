import React from 'react';

class Tabs extends React.Component {
  constructor(props) { 
    super(props);
    this.tabs = this.props.tabs 
    
  }

  render () {
    return (
      <ul>
        {this.props.tabs.map((ele, idx) => 
          <h1>{ele.title}</h1>
            <article>{ele.content}</article>);}
      </ul>
    )
  }

}

export default Tabs;