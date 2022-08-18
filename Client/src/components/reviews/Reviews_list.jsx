import React from 'react';
const axios = require('axios');
// const StarRating = require('./components/StarRating.jsx')

const Photo = (props)=>(
      <img src={props.photo.url}
      height= '60'
      width='10%'

      alt={props.photo.id}/>
  )

class Reviews_list extends React.Component {
  constructor(props){
    super(props)
    this.state ={
    }
  }

  render(){
    let d = new Date(`${this.props.product.date}`)
    let date = `${d.toLocaleString('default', { month: 'long' })} ${d.getDate()}, ${d.getFullYear()}`
    return(
      <div className={this.props.product.review_id} >
        <p>rating : {this.props.product.rating}</p>
        <p style={{fontWeight:'bold'}}> {this.props.product.summary.substring(0,60)}</p>
        {this.props.product.photos.length > 0? this.props.product.photos.map((photo)=>(<Photo photo={photo}/>)) : null}
        <p>date : {date} </p>
        <p>summary : {this.props.product.body.substring(0,250)}</p>
      </div>
    )
  }
}



export default Reviews_list;