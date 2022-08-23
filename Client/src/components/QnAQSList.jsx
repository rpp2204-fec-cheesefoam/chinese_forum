import React from "React"
import QnAAnsList from "./QnAAnsList.jsx";
import axios from 'axios';

class QnAList extends React.component {
  constructor(props){
    super(props)
    this.state = {
      qs: this.props.qnaSet.question,
      ans: this.props.qnaSet.ans,
      showAnsModal: false,
      numAns: 2
    }
  }

  qshelpful = () => {

  }
  addAnswer = () => {
    this.setState({
      showAnsModal: true
    })
  }

  closeModal = () => {
    this.setState({
      showAnsModal: false
    })
  }

  loadAns = () => {
    this.setState(
      {
        numAns: this.state.numAns + 2
      }
    )
  }

  render(){
    return (
      <div>
        <div>
          <a><b>Q: {this.state.qs}</b></a>
        </div>
        <div id = "qsChoice">
          <a class = "lvl3">Helpful? </a>
          <a class = "lvl4"><p onclick={this.qshelpful}><u>Yes</u></p><p> &#40;{this.state.qs.qsHelpful}&#41;  |  </p><
            <p onclick={this.addAnswer}><u>Add Answer</u></p></a>
            <Modal isOpen={this.state.showAnsModal}>
              <div>
              <button onClose={closeModal}>X</button>
                <form>
                  <input style="color:#888;" placeholder="Enter Answer"></input>
                  <input type="submit" value="Submit"></input>
                </form>
              </div>
            </Modal>
        </div><br/>
        <div>
          <a><b>A: </b></a>
          {this.state.ans.slice(0,this.state.numAns).map(ans => {
            <QnAAnsList ans = {ans}/>
          })}

        <p class = "lvl4" onclick = {this.loadAns}><b>LOAD MORE ANSWERS</b></p>
        </div><br/>
    </div>
    )
  }

}

export default QnAList