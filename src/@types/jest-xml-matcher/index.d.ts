declare module 'jest-xml-matcher' {
  export function toEqualXML (actual:any, expected:any): CustomMatcherResult | Promise<CustomMatcherResult>
}
