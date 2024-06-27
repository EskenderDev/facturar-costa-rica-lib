interface XMLMatcher<R = unknown> {
    toEqualXML: () => R
}

declare module 'vitest' {
  interface Assertion<T = any> extends XMLMatcher<T> {}
  interface AsymmetricMatchersContaining extends XMLMatcher {}
}
