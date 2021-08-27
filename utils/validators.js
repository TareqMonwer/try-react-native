export const isHexColor = (hex) =>
  typeof hex === "string" && hex.length === 6 && !isNaN(Number("0x" + hex));
