import BigNumber from 'bignumber.js'

export function truncateDecimal(
  num: string | number,
  decimalPlaces: number
): string {
  const bigNum = new BigNumber(num)
  const fixedNum = bigNum.toFixed(decimalPlaces, BigNumber.ROUND_DOWN)
  return fixedNum.toString()
}

// console.log(truncateDecimal(123.456789, 2)) // output: '123.45'



export function truncateFloat(input: number | string, precision: number): string {
  const num = new BigNumber(input);
  const numStr = num.toFixed();
  const decimalIndex = numStr.indexOf('.');

  if (precision === 0) {
    return decimalIndex === -1 ? numStr : numStr.slice(0, decimalIndex);
  } else {
    const end = decimalIndex === -1 ? numStr.length : decimalIndex + precision + 1;
    return numStr.slice(0, end);
  }
}