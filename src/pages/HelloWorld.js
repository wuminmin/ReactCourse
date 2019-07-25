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

export default Content;