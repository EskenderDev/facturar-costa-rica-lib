import { XMLParser, XMLBuilder } from 'fast-xml-parser'
import {
  declaration,
  defaultOptions,
  xmlExtructures
} from '@src/lib/genXML/xmlConfig'
import sigXML from '@src/lib/genXML/sigXML/index'

export const objToXML = (xmlStructure: string, obj: object): string => {
  const builder = new XMLBuilder(defaultOptions)
  const mainKey = Object.keys(obj)[0]
  const attribute = xmlExtructures[xmlStructure]
  const attributesWithPrefix = addAttributesPrefix(attribute)
  obj[mainKey] = { ...obj[mainKey], ...attributesWithPrefix }
  return declaration + builder.build(obj)
}

// tipoDocKey = xmlStructure
export async function genXML(
  xmlStructure: string,
  obj: object,
  options?: {
    buffer?: string
    password?: string
    base64?: boolean
  }
): Promise<string> {
  const xml = objToXML(xmlStructure, obj)
  if (!options) return xml
  const signedXML = await sigXML(xml, options.buffer, options.password)
  return signedXML
}

export const xmlToJson = (xml: string): any => {
  const options = {
    ignoreAttributes: false,
    ignoreNameSpace: false,
    parseNodeValue: false
  }
  try {
    const parser = new XMLParser(options)
    const json = parser.parse(xml)
    return json.FacturaElectronica
  } catch (err) {
    return null
  }
}

function addAttributesPrefix(attributes: { [key: string]: string }) {
  return Object.entries(attributes).reduce((acc, [key, value]) => {
    acc[`@_${key}`] = value
    return acc
  }, {} as { [key: string]: string })
}
