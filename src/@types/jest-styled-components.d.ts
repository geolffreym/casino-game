/* eslint-disable  @typescript-eslint/method-signature-style */
declare namespace jest {
  interface AsymmetricMatcher {
    $$typeof: Symbol
    sample?: string | RegExp | object | any[] | Function
  }

  interface Options {
    media?: string
    modifier?: string
    supports?: string
  }

  interface Matchers<R> {
    toHaveStyleRule(property: string, value?: string, options?: Options): R
  }
}
