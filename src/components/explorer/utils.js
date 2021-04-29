import BigNumber from "bignumber.js";

export function shortenAddress(address) {
  return address.slice(0, 6) + "..." + address.slice(-4);
}

export function formatNum(value, network) {
  if (value == null) {
    return "...";
  }
  const num = new BigNumber(value).div(new BigNumber(10).pow(network.decimals));
  return `${num} ${network.abbreviation}`;
}
