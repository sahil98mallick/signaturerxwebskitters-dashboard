export function formatNumber(number: number): string {
  if (number >= 1000) {
    const suffixes = ["", "k", "M", "G", "T"];
    const magnitude = Math.floor(Math.log10(number) / 3);
    const scaledNumber = number / Math.pow(1000, magnitude);
    return scaledNumber.toFixed(1) + suffixes[magnitude];
  } else {
    return number.toString();
  }
}

export const truncateString = (str: string, length: number) => {
  if (str?.length) {
    if (str?.length < length) {
      return str;
    }

    return `${str.substring(0, length)}...`;
  }

  return str;
};

export const calculateUpDownPercentage = (prev?: number, curr?: number) => {
  let obj: {
    percentage: null | number | string;
    up: boolean | null;
  } = {
    percentage: null,
    up: null
  };
  if (typeof prev === "number" && typeof curr === "number") {
    if (prev !== 0) {
      obj.percentage = (((curr - prev) / Math.abs(prev)) * 100).toFixed(2);
      obj.up = curr > prev;
    } else {
      obj.percentage = (curr !== undefined && curr !== 0 ? 100 : 0).toFixed(2);
      obj.up = curr !== undefined && curr > Number(prev);
    }
  }

  return obj;
};