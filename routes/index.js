const { default: axios } = require('axios')
const express = require('express')
const {ResMsg } = require('../utils')
const bookData = require('../data/db.json')

const Router = express.Router()

Router.get('/books', async (req, res) => {
  try {
    ResMsg(res,200,'success', "successfull", bookData)
  } catch (error) {
    console.log(error)
    ResMsg(res,400,'error', "fail", error)
  }
   
  
})
Router.get('/', async (req, res) => {
  try {
    ResMsg(res,200,'success', "successfull", "welcome")
  } catch (error) {
    console.log(error)
    ResMsg(res,400,'error', "fail", error)
  }
   
  
})

// const pullMore = async (books, res) => {

//     console.log("data")
//     const arr = []
   
//     for (let index = 0; index < books.length; index++) {
    
//         const {data} = await axios.get(`https://api.itbook.store/1.0/books/${books[index].isbn13}`)
       
//         arr.push(data)
        
//     }
//     ResMsg(res,200,'success', "successfull", arr)

// };

module.exports = Router
