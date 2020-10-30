import qrious from "qrious";

// see: https://github.com/neocotic/qrious

/**
 * create QrCode by element
 * @param {*} {
 *   value = "",
 *   size = 100,
 *   mime = "image/png",
 *   level = "",
 *   padding = 25,
 *   background = "white",
 *   backgroundAlpha = "1.0",
 *   foreground = "blank",
 *   foregroundAlpha = "1.0"
 * }
 * @return { qrious } qrious object
 */
function QR({
  value = "",
  size = 100,
  mime = "image/png",
  level = "L",
  padding = null,
  background = "white",
  backgroundAlpha = "1.0",
  foreground = "black",
  foregroundAlpha = "1.0",
  element
}) {
  return new qrious({
    value,
    size,
    mime,
    level,
    padding,
    background,
    backgroundAlpha,
    foreground,
    foregroundAlpha,
    element
  });
}

export default QR;
/**
 * get dataURL QrCode default image/png
 */
export function getDataUrlQrCode({
  value,
  size,
  mime,
  level,
  padding,
  background,
  backgroundAlpha,
  foreground,
  foregroundAlpha
}) {
  return QR({
    value,
    size,
    mime,
    level,
    padding,
    background,
    backgroundAlpha,
    foreground,
    foregroundAlpha
  }).toDataURL(mime);
}
