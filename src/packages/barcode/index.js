import BarCode from "jsbarcode";

// see: https://github.com/lindell/JsBarcode

/**
 * create BarCode by element
 * @param {*} {
 *   value = "",
 *   width = 2,
 *   height = 200,
 *   text = "5474",
 *   displayValue = false,
 *   padding = 10,
 *   element
 * }
 * @return { BarCode } BarCode object
 */
function BC({
  value = "",
  width = 2,
  height = 200,
  text = "",
  displayValue = true,
  padding = 10,
  element
}) {
  return BarCode(element, value, {
    width,
    height,
    text,
    displayValue,
    margin: padding
  });
}

export default BC;
/**
 * get dataURL BarCode  default image/png
 */
export function getDataUrlBarCode({
  value,
  width,
  height,
  text,
  displayValue,
  padding,
  mime = "image/png"
}) {
  const element = document.createElement("canvas");
  BC({
    element,
    value,
    width,
    height,
    text,
    displayValue,
    padding
  });
  return element.toDataURL(mime);
}
