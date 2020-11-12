import emojiReg from "emoji-regex";
import { findEle, triggerEvent } from "@/utils/web";

/**
 * 过滤 input emoji 表情
 */
export const noEmoji = {
  bind(el) {
    const regRule = emojiReg();
    const $inp = findEle(el, "input");
    el.$inp = $inp;
    $inp.handle = function() {
      const val = $inp.value;
      $inp.value = val.replace(regRule, "");
      triggerEvent($inp, "input");
    };
    $inp.addEventListener("keyup", $inp.handle);
  },
  unbind(el) {
    el.$inp.removeEventListener("keyup", el.$inp.handle);
  }
};
