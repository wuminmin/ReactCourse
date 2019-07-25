import React from 'React';
import ShoppingList from './shoppinglist.js';

class Content extends React.Component {
  render() {
    const picture = {
      src: 'https://cdn.nlark.com/yuque/0/2018/jpeg/84141/1536207007004-59352a41-4ad8-409b-a416-a4f324eb6d0b.jpeg',
    };
    return (
      <div className='container'>
      <Picture src={picture.src}>
        // 这里放置的内容就是 props.children
      </Picture>
      <ShoppingList name="张三" />
      <Square></Square>
      <Clock></Clock>
    </div>
    );
  }
}

const Picture = (props) => {
  return (
    <div>
      <img src={props.src} />
      {props.children}
    </div>
  )
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '未点击',
      count:0,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: '已点击',count:this.state.count+1})}
      >
        {this.state.value}{this.state.count}
      </button>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  componentDidUpdate() {
  
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Content;