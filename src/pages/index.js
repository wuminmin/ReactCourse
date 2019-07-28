import { Card } from 'antd';
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

// export default () => {
//     const style = {
//       width: '400px',
//       margin: '30px',
//       boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
//       border: '1px solid #e8e8e8',
//     };
  
//     return (
//       <Card style={style} actions={[<a>操作一</a>, <a>操作二</a>]}>
//           <Card.Meta
//         avatar={<img 
//           alt=""
//           style={{ width: '64px', height: '64px', borderRadius: '32px' }}
//           src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
//         />}
//         title="Alipay"
//         description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
//       />
//       </Card>
//     );
//   }