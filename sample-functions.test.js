import Portfolio from './portfolio'
import ShareSaleException from './shareSaleException'

let portfolio;
beforeEach(() => portfolio = new Portfolio())

/* Removed, as this behavior is tested by the beforeEach
test('Testing Portfolio constructor', () => {
  
})
*/

test('Testing Portfolio isEmpty', () => {
  expect(portfolio.isEmpty()).toBeTruthy()

  portfolio.addStock('AMZN')

  expect(portfolio.isEmpty()).toBeFalsy()
})

test('Testing Portfolio symbolCount', () => {
  expect(portfolio.symbolCount()).toBe(0)

  portfolio.addStock('AMZN', 12)

  expect(portfolio.symbolCount()).toBe(1)

  portfolio.addStock('RBLX', 0)

  expect(portfolio.symbolCount()).toBe(1)

  portfolio.addStock('AAPL', 1)

  expect(portfolio.symbolCount()).toBe(2)
})

test('Testing Portfolio symbol selling', () => {
  portfolio.addStock('AMZN', 50)

  expect(portfolio.symbolCount()).toBe(1)

  portfolio.removeStock('AMZN', 50)

  expect(portfolio.symbolCount()).toBe(0)
})

test('Testing Portfolio share by symbol count getting', () => {
  expect(portfolio.shareCount('AMZN')).toBe(0)

  portfolio.addStock('AMZN')

  expect(portfolio.shareCount('AMZN')).toBe(1)
})

test('Testing ShareSaleException on illegal sell', () => {
  portfolio.addStock('AMZN', 1)

  portfolio.removeStock('AMZN')

  expect(() => portfolio.removeStock('AMZN')).toThrow(ShareSaleException)
})
