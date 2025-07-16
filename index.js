// const { GoogleGenerativeAI } = require('@google/generative-ai')

// const genAI = new GoogleGenerativeAI('AIzaSyDwlEvGpbBoA8V3uJD7OKdDdxWn8M4u93c')
// const model = genAI.getGenerativeModel({
//     // generation config -> tambahin temperature, top p (1), top k (40), creative (max 2), dll
//     model: "gemini-2.5-flash"
// })

// async function run(){
//     const prompt = "Write a story about javascript"
//     const response = await model.generateContent(prompt)
//     let result = response.response
//     result = result.text()
//     console.log(result)
// }

// run()

const { GoogleGenerativeAI } = require('@google/generative-ai')
const express = require('express');
const 