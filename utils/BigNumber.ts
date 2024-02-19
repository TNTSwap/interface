import BigNumber from 'bignumber.js'
BigNumber.config({ DECIMAL_PLACES: 20 })

export function isNaN(value: string | number): boolean {
  return new BigNumber(`${value}`).isNaN()
}


export function isNumber(value: string | number): boolean {
  const isNaNResult = isNaN(value)
  return !isNaNResult
}

export function isInteger(value: string | number): boolean {
  return new BigNumber(`${value}`).isInteger()
}

export function isPositive(value: string | number): boolean {
  return new BigNumber(`${value}`).isPositive()
}

export function isNegative(value: string | number): boolean {
  return new BigNumber(`${value}`).isNegative()
}

export function isZero(value: string | number): boolean {
  return new BigNumber(`${value}`).isZero()
}

export function countDecimalPlaces(value: string | number): number | string {
  const res = new BigNumber(`${value}`).dp()
  if (res) {
    return res
  }
  return ''
}

export function convertNumberToString(value: string | number): string {
  return new BigNumber(`${value}`).toString()
}

export function convertStringToNumber(value: string | number): number {
  return new BigNumber(`${value}`).toNumber()
}

export function convertHexToString(hex: string): string {
  return new BigNumber(`${hex}`).toString()
}

export function convertStringToHex(value: string | number): string {
  return new BigNumber(`${value}`).toString(16)
}

export function convertHexToNumber(hex: string): number {
  return convertStringToNumber(convertHexToString(hex))
}

export function greaterThan(
  numberOne: number | string,
  numberTwo: number | string
): boolean {
  return (
    new BigNumber(`${numberOne}`).comparedTo(new BigNumber(`${numberTwo}`)) ===
    1
  )
}

export function greaterThanOrEqual(
  numberOne: number,
  numberTwo: number
): boolean {
  return (
    new BigNumber(`${numberOne}`).comparedTo(new BigNumber(`${numberTwo}`)) >= 0
  )
}

export function smallerThan(
  numberOne: number | string,
  numberTwo: number | string
): boolean {
  return (
    new BigNumber(`${numberOne}`).comparedTo(new BigNumber(`${numberTwo}`)) ===
    -1
  )
}

export function smallerThanOrEqual(
  numberOne: number,
  numberTwo: number
): boolean {
  return (
    new BigNumber(`${numberOne}`).comparedTo(new BigNumber(`${numberTwo}`)) <= 0
  )
}

export function multiply(
  numberOne: number | string,
  numberTwo: number | string
): string {
  return _truncateFloat(new BigNumber(`${numberOne}`)
    .times(new BigNumber(`${numberTwo}`)).toString(), 18)
}

export function divide(
  numberOne: number | string,
  numberTwo: number | string
): string {
  return _truncateFloat((new BigNumber(`${numberOne}`)
    .dividedBy(new BigNumber(`${numberTwo}`))
    .toString()), 18)
}

export function floorDivide(
  numberOne: number | string,
  numberTwo: number | string
): string {
  return new BigNumber(`${numberOne}`)
    .dividedToIntegerBy(new BigNumber(`${numberTwo}`))
    .toString()
}

export function mod(
  numberOne: number | string,
  numberTwo: number | string
): string {
  return new BigNumber(`${numberOne}`)
    .mod(new BigNumber(`${numberTwo}`))
    .toString()
}

export function add(
  numberOne: number | string,
  numberTwo: number | string
): string {
  return new BigNumber(`${numberOne}`)
    .plus(new BigNumber(`${numberTwo}`))
    .toString()
}

export function subtract(
  numberOne: number | string,
  numberTwo: number | string
): string {
  return new BigNumber(`${numberOne}`)
    .minus(new BigNumber(`${numberTwo}`))
    .toString()
}

export function convertAmountToRawNumber(
  value: string | number,
  decimals: number = 18
): string {
  return new BigNumber(`${value}`)
    .times(new BigNumber('10').pow(decimals))
    .toString()
}

export function convertAmountFromRawNumber(
  value: string | number,
  decimals: number = 18
): string {
  return new BigNumber(`${value}`)
    .dividedBy(new BigNumber('10').pow(decimals))
    .toString()
}

export function handleSignificantDecimals(
  value: string,
  decimals: number,
  buffer?: number
): string | null {
  if (
    !new BigNumber(`${decimals}`).isInteger() ||
    (buffer && !new BigNumber(`${buffer}`).isInteger())
  ) {
    return null
  }
  buffer = buffer ? convertStringToNumber(buffer) : 3
  decimals = convertStringToNumber(decimals)
  const absolute = new BigNumber(`${value}`).abs().toNumber()
  if (smallerThan(absolute, 1)) {
    decimals = value.slice(2).search(/[^0]/g) + buffer
    decimals = decimals < 8 ? decimals : 8
  } else {
    decimals = decimals < buffer ? decimals : buffer
  }
  let result = new BigNumber(`${value}`).toFixed(decimals)
  result = new BigNumber(`${result}`).toString()

  return Number(new BigNumber(`${result}`).dp()) <= 2
    ? new BigNumber(`${result}`).toFormat(2)
    : new BigNumber(`${result}`).toFormat()
}

export function formatFixedDecimals(value: string, decimals: number): string {
  const _value = convertNumberToString(value)
  const _decimals = convertStringToNumber(decimals)
  const result = new BigNumber(
    new BigNumber(_value).toFixed(_decimals)
  ).toString()
  return result
}


export function formatInputDecimals(
  inputOne: string,
  inputTwo: string
): string {
  const _nativeAmountDecimalPlaces = countDecimalPlaces(inputTwo)
  const decimals =
    Number(_nativeAmountDecimalPlaces) > 8
      ? Number(_nativeAmountDecimalPlaces)
      : 8
  const result = new BigNumber(formatFixedDecimals(inputOne, decimals))
    .toFormat()
    .replace(/,/g, '')
  return result
}



export const toNumber = (n: number | string) => {
  return new BigNumber(n)
}




/**
 * Truncates a number or string to a specified precision.
 *
 * @param {number | string} input - The number or string to truncate.
 * @param {number} precision - The number of decimal places to keep.
 * @return {string} - The truncated number or string.
 */

export function _truncateFloat(input: number | string, precision: number): string {
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



export function _truncateDecimal(input: string | number, decimalPlaces: number): string {
  const bigNumber = new BigNumber(input.toString());
  return bigNumber.toFixed(decimalPlaces);
}



export function compareAndFormatNumber(input: number | string, decimal?: number): string {
  if (input === '0' || input === 0) {
    return '0'
  }
  // 
  const inputValue = new BigNumber(input);

  // init
  const thresholdValue = new BigNumber('0.0000001');

  const _decimal = decimal ? decimal : 6



  // value< 0.0000001?
  if (inputValue.isLessThan(thresholdValue)) {
    return `< ${_decimal / (100000 * _decimal)}`;
  } else {

    // const formattedValue = inputValue.toFixed(6, BigNumber.ROUND_DOWN);
    return _truncateFloat(input, _decimal);

  }
}