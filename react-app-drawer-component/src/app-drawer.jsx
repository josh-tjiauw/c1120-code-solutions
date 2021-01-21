import React from "react";
import ReactDOM from "react-dom";

class AppDrawer extends React.Component{
  constructor(props){
    super(props);
    this.state = { isVisible: false };
    this.handleTabClick = this.handleTabClick.bind(this);
    this.handleMainClick = this.handleMainClick.bind(this);
  }

  handleTabClick(){
    this.setState({ isVisible: true });
  }

  handleMainClick(e){
    if(e.target.nodeName === "I" || e.target.nodeName === "H1" || e.target.className === "menuDiv"){
      return null;
    }
    this.setState({ isVisible: false });
  }

  render(){
    let pageContainerClass = this.state.isVisible ? "page-container gray" : "page-container"
    let menuIconClass = this.state.isVisible ? "menuIcon hidden" : "menuIcon";
    let menuDivClass = this.state.isVisible ? "menuDiv" : "menuDiv hidden";
    return(
      <div className={pageContainerClass} onClick={this.handleMainClick}>
        <div className={menuIconClass} onClick={this.handleTabClick}>
          <i class="fas fa-bars"></i>
        </div>

        <div className={menuDivClass}>
          <div className="drawer-text">
            <h1 className="text">Menu</h1>
            <h2 href="#" onClick={this.handleMainClick}>About</h2>
            <h2 href="#" onClick={this.handleMainClick}>Get Started</h2>
            <h2 href="#" onClick={this.handleMainClick}>Sign In</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default AppDrawer;
