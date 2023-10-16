class ShareSaleException extends Error {
  constructor() {
    super('Cannot share more shares of a stock than are in the portfolio.')
    this.name = 'ShareSaleException'
    this.stack = (new Error()).stack
  }
}

export default ShareSaleException
