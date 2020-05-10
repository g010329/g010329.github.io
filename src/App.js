import React from 'react';
import ReactDOM from 'react-dom';
import logo from './img/iconfinder_Star_5349757.png';
import trigger from './img/iconfinder_basics-12_296823.png';

// const MoreRow = props =>
//   <div className="row" id="more">
//     <div className="box1 col">
//     <h2>Box 5</h2>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.</p></div>
//     <div className="box2 col">
//     <h2>Box 6</h2>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.</p></div>
//     <div className="box3 col">
//     <h2>Box 7</h2>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.</p></div>
//     <div className="box4 col">
//     <h2>Box 8</h2>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.</p></div>
//   </div>


class App extends React.Component {
  state = {
    //導覽列出現
    isTriggerOn:'false',
    displayListDiv: 'none',

    text: "Welcome Message",
    
    //(下方更多內容按鈕)兩個state狀態初始值
    isToggleOn: true,
    display: 'none'
  }
  //(下方更多內容按鈕)記得綁定點擊，不然會有TypeError: Cannot read property 'setState' of undefined
  handleClick = this.handleClick.bind(this);
  listDivClick = this.listDivClick.bind(this);
  
  listDivClick(){
    this.setState(prevState => ({
      isTriggerOn: !prevState.isTriggerOn,
      displayListDiv: prevState.isTriggerOn? 'block':'none',
    }));
  }

  changeText = () => {
    this.setState({text: "Have a Good Time!"});
  }
  
  //(下方更多內容按鈕)兩個 state 狀態互相牽動  點擊時 isToggleOn 狀態會變成前一狀態的相反
  //display 參照 isToggleOn 的值，isToggleOn:true時(prevState.isToggleOn:false)，display:flex
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      display: prevState.isToggleOn ? 'flex': 'none'
    }));
  }

  render(){
    return (
      <div>
        <div className="main-header">
          <div className="container">
            <h1 className="name"><button>Grace<img className="logo" src={logo} alt="logo" /></button></h1>
            <ul className="main-nav">
              <li className="menuTrigger" id="trigger"><img src={trigger} alt="trigger" onClick={this.listDivClick} /></li>
              <li><button>Portfolio</button></li>
              <li><button>Experience</button></li>
              <li><button>Skills</button></li>
              <li><button>Contact</button></li>   
            </ul>
          </div>
        </div>
        {/* ？？？？不懂為何display要兩層{{}} */}
        <div className="list" id="listDiv" style={{display: this.state.displayListDiv}}>
          <button className="X" id="toggleList" onClick={this.listDivClick}>X</button>
          <ul>
            <li>Portfolio</li>
            <li>Experience</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* 點擊時更改文字 */}
        <div className="banner"><div onClick={this.changeText} className="wel" id="welcome">{this.state.text}</div></div>
        <div className="secTitle">Section Title</div>
        <div className="row">
          <div className="box1 col">
            <h2>Box 1 </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.</p></div>
          <div className="box2 col">
            <h2>Box 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.</p></div>
          <div className="box3 col">
            <h2>Box 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.</p></div>
          <div className="box4 col">
            <h2>Box 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.</p></div>
        </div>
        <div className="btn" id="callAction">
          {/* 顯示更多內容按鈕，onClick 讀取 handleClick函式 */}
          <button onClick={this.handleClick}>{this.state.isToggleOn ? 'OPEN' : 'CLOSE'}</button>
        </div>
        {/* 更多內容的HTML，直接在style CSS樣式設定display狀態，由state讀取值為none/block*/}
        <div className="row" id="more" style={{display: this.state.display}}>
          <div className="box1 col">
            <h2>Box 5</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.</p>
          </div>
          <div className="box2 col">
            <h2>Box 6</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.</p>
          </div>
          <div className="box3 col">
            <h2>Box 7</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.</p>
          </div>
          <div className="box4 col">
            <h2>Box 8</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.</p>
          </div>
        </div>


    </div>
    
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root') 
);


export default App;
