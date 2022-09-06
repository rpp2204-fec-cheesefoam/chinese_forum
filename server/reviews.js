const axios = require('axios');
require("dotenv").config();


const apiurl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=71701&sort=relevant`
const getProductcount =(sort, productId)=>{
  var options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${productId}&sort=${sort}&count=500`,
    headers: {Authorization: process.env.DB_TOKEN}
  };
  return axios(options)
    .catch((err)=>{
      console.log(err)
    })
}


const addHelpful = (id) =>{
  var options = {
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${id}/helpful`,
    headers: {Authorization: process.env.DB_TOKEN}
  };
  return axios(options)
  .catch((err=>{
    console.log(err)
  }))
}

const avgStar = (data) =>{
  var result = {};
  var total = 0;
  var sum = 0;
  Object.entries(data).map((value)=>{
      total += Number(value[0])* Number(value[1])
      sum += Number(value[1])
  })
  return parseFloat(total/sum).toFixed(1)
}

const percentRecommend = (data) =>{
  var total = 0;
  Object.values(data).map((item)=>{
    total += Number(item)
  })
  return parseFloat(Number(data['true'])/total*100).toFixed(0)
}

const breakdownScore = (data) =>{
  var total = 0
  for(var i=1; i<6; i++){
    if(!data[i]){
      data[i] = 0
    } else{
      total += Number(data[i])
    }
  }
  for(let key in data){
    data[key]= parseFloat(Number(data[key])/total*100).toFixed(0)
  }
  return data
}

const getMeta = (id)=>{
  var options={
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${id}`,
    headers: {Authorization: process.env.DB_TOKEN}
  }
  return axios(options)
        .catch((err)=>{
          console.log(err)
        })
}

const postReview = (info) =>{
  var a = {
    "product_id": 71700,
    "rating": 5,
    "summary": "some sum is bad",
    "body": "erfectly",
    "recommend": true,
    "name": "haha",
    "email": "haha@yahoo.com",
    "photos": [],
    "characteristics":  {}
}



  var options={
    method: 'post',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews`,
    headers: {Authorization: process.env.DB_TOKEN},
    data: info
  }
  return axios(options)
  .catch((err)=>{
    console.log(err,  'submit err reviews  line 866666666666666')
  })
}

module.exports ={
  getProductcount,
  addHelpful,
  avgStar,
  percentRecommend,
  breakdownScore,
  getMeta,
  postReview,

}