export default class PortfolioEquityHelper{

  /*
    This class calculates different values based on the equity.
  */

  /* eslint-disable */
  constructor(equity){
    this.annualPercentReturn = this.getAnnualPercentReturn(equity);
    this.return = this.getReturn(equity);
    this.percentReturn = this.getPercentReturn(equity);
    this.totalValue = this.getTotalValue(equity);
  }

  getReturn(equity){
    return equity.Stockholding * equity.price - equity.TotalPrice;
  }

  getPercentReturn(equity){
    return (equity.price * equity.Stockholding - equity.TotalPrice) / equity.TotalPrice;
  }

  getAnnualPercentReturn(equity){
    const percentChange = equity.price * equity.Stockholding / equity.TotalPrice;
    const msInOneDay = 1000 * 60 * 60 * 24;
    const epochNow = (new Date).getTime();
    const daysSinceInvest = (epochNow - equity.TransactionTimestamp) / msInOneDay;
    return Math.pow(percentChange, (1/(daysSinceInvest/365.25))) - 1;
  }

  getTotalValue(equity){
    return equity.Stockholding * equity.price;
  }
}
