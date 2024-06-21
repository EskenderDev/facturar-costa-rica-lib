// test file
import fs from 'fs'
import { XMLParser } from 'fast-xml-parser'

const options = {
  ignoreAttributes: false,
  ignoreNameSpace: false,
  parseNodeValue: false
}

const sourceURI = process.env.SOURCE_URI
const outputSourceURI = process.env.SOURCE_URI_JSON_OUTPUT
const xmlString = fs.readFileSync(sourceURI, 'utf8')
const parser = new XMLParser(options)
const json = parser.parse(xmlString)
// const Parser = parser.j2xParser

// const convertToXML = new Parser(options)
// const xml = convertToXML.parse(json)

const data = JSON.stringify(json, null, 2)
fs.writeFile(outputSourceURI, data, err => {
  if (err) throw err
})
