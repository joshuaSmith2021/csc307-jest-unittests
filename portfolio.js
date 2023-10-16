import ShareSaleException from "./shareSaleException"

class Portfolio {
  constructor() {
    this.sharesBySymbol = {}
  }

  /**
   * Add a number of stocks to a symbol. If quantity is omitted, quantity will
   * be 1.
   */
  addStock(symbol, quantity = 1) {
    const currentCount = this.sharesBySymbol[symbol] || 0
    this.sharesBySymbol[symbol] = currentCount + quantity
  }

  /**
   * Remove a number of stocks from a symbol. If quantity is omitted,
   * quantity will be 1.
   */
  removeStock(symbol, quantity = 1) {
    const currentCount = this.sharesBySymbol[symbol] || 0

    if (quantity > currentCount)
      throw new ShareSaleException()

    this.sharesBySymbol[symbol] = currentCount - quantity
  }

  /** Return how many shares of a certain symbol are in the portfolio. */
  shareCount(symbol) {
    return this.sharesBySymbol[symbol] || 0
  }

  /** Return true if the portfolio has no stocks, false otherwise. */
  isEmpty() {
    let total = 0
    Object.values(this.sharesBySymbol).forEach(n => total += n)

    return total === 0
  }

  /**
   * Return the number of symbols of which the portfolio has at least one
   * share.
   */
  symbolCount() {
    let total = 0

    Object.values(this.sharesBySymbol).forEach(n => {
      if (n > 0)
        total += 1
    })

    return total
  }
}

export default Portfolio
