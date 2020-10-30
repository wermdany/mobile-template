import { isAndroid, isIOS } from "@/utils/types";
/**
 *返回原生页面
 *
 * @export void
 */

export function backToNative() {
  const UA = window.navigator.userAgent;
  if (isIOS(UA)) {
    // eslint-disable-next-line no-undef
    webkit.messageHandlers.backToPageUp.postMessage({});
  }
  if (isAndroid(UA)) {
    // eslint-disable-next-line no-undef
    sysObj.backToPreActivity();
  }
}
