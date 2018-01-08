import * as functions from 'firebase-functions'
import React from 'react'
import { renderToString } from 'react-dom/server'
import getFacts from './src/facts'
import App from './src/App'
import express from 'express'
import fs from 'fs'

const app = express()

const index = fs.readFileSync(`${__dirname}/index.html`, 'utf8')

app.get('**', (req, res) => {
  res.send(index)
})

export const nonssrapp = functions.https.onRequest(app)
