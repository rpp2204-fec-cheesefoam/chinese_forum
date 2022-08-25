import React from 'react';
import axios from 'axios';
import QSModal from './QnAQSModal.jsx'
import QnASearch from './QnASearch.jsx'
import QnAList from './QnAQSList.jsx'


class QnA extends React.component {
    constructor(props) {
      super(props)
      this.state = {
        qna: [],
        qsModalshow: false,
        searching: false,
        searchResult: [],
        numQS: 2
      }
    }

    componentDidMount = () => {
      //API call to get questions and answers.
      axios({
        method:'get',
        url:''
      })
    }

    loadMore = () => {
      this.setState({
        numQS: this.state.numQS + 2
      })
      //send
    }

    showQSModal = () => {
      this.setState({
        qsModalshow: true
      })
    }

    Search = (QS) => {
      //write search function
      let searchResult = [];
      this.state.qna.forEach((val) => {
        if(val.results.question_body.includes(QS)){
          searchResult.push(val);
        }
      })
      if(searchResult.length > 0){
        this.setState({
          searchResult: searchResult,
          searching: true
        })
      }
    }

    cancelSearch = () => {
      this.setState({
        searchResult: [],
        searching: false
      })
    }

    render() {

        return ( <>
            <h3> QUESTIONS amp; ANSWERS </h3>
            <div><QnASearch search = {this.Search.bind(this)}/> <input type="button" onclick={this.cancelSearch.bind(this)}>X</input></div>
            <div>
               {this.state.qna.slice(0, this.state.numQS).map((qs, i) =>
                <QnAList qnaSet = {qs}/>
                )}
            </div>
            <div>
              <button id = "loadMore" onClick = {this.loadMore}> MORE ANSWER QUESTIONS </button>
              {this.state.qsModalshow ? <QnAQSModal/> : <button onClick = {showQSModal}> ADD A QUESTION + </button>}
            </div>
            </>)}
}

export default QnA;