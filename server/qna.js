require("dotenv").config();
const axios = require('axios');


const endPoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions`

const getQuestions = (productId) => {
  //console.log(productId);
  var options = {
    method: 'GET',
    url: endPoint,
    params: {
      product_id: productId,
      count: 50
    },
    headers: {
      Authorization: process.env.DB_TOKEN}
  };
  return axios(options)
}

const getAnswers =(questionId)=>{
  var options = {
    method: 'GET',
    url: endPoint + `/${questionId}/answers`,
    params: {
      count: 50
    },
    headers: {Authorization: process.env.DB_TOKEN}
  };
  return axios(options)
}

const postQuestion =(opt)=>{
  //console.log(opt);
  var options = {
    method: 'post',
    url: endPoint,
    data: opt,
    headers: {Authorization: process.env.DB_TOKEN}
  };
  return axios(options)
}

const postAnswer =(questionId, options)=>{
  var options = {
    method: 'post',
    url: endPoint + `/${questionId}/answers`,
    data: options,
    headers: {Authorization: process.env.DB_TOKEN}
  };
  return axios(options)
}

const markQSHelpful =(questionId)=>{
  var options = {
    method: 'put',
    url: endPoint + `/${questionId}/helpful`,
    headers: {Authorization: process.env.DB_TOKEN}
  };
  return axios(options)
}

const reportQS =(questionId)=>{
  var options = {
    method: 'put',
    url: endPoint + `/${questionId}/report`,
    headers: {Authorization: process.env.DB_TOKEN}
  };
  return axios(options)
}


const markAnsHelpful =(answerId)=>{
  var options = {
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${answerId}/helpful`,
    headers: {Authorization: process.env.DB_TOKEN}
  };
  return axios(options)
}

const reportAns =(answerId)=>{
  var options = {
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${answerId}/report`,
    headers: {Authorization: process.env.DB_TOKEN}
  };
  return axios(options)
}

module.exports ={
  getQuestions,
  getAnswers,
  postQuestion,
  postAnswer,
  reportQS,
  reportAns,
  markQSHelpful,
  markAnsHelpful
}