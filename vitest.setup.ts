import * as matchers from 'jest-xml-matcher'
import { server } from './__tests__/mocks/node'

expect.extend(matchers)
// Registrar el matcher de XML
// expect.extend({
//   toMatchXML: (received: string, expected: string) => {
//     const pass = matchers.toMatchXML(received, expected)
//     if (pass) {
//       return {
//         message: () => `expected ${received} not to match XML ${expected}`,
//         pass: true
//       }
//     } else {
//       return {
//         message: () => `expected ${received} to match XML ${expected}`,
//         pass: false
//       }
//     }
//   }
// })
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
