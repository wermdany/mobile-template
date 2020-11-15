import emojiReg from "emoji-regex";
import { findEle } from "@/utils/web";

/**
 * 过滤 input emoji 表情
 */
export const noEmoji = {
  bind(el, binding, node) {
    const regRule = emojiReg();
    const $inp = findEle(el, "input");
    el.$inp = $inp;
    el.handle = function(e) {
      console.log(e);
      // console.log(el);
      if (!e.isTrusted) {
        const val = e.target.value;
        // $inp.value = val.replace(regRule, "");
        // console.log(node);
        const { componentInstance } = node;
        if (componentInstance) {
          componentInstance.$emit("input", val.replace(regRule, ""));
        }
        // triggerEvent($inp, "input");
      }
    };
    el.addEventListener("input", el.handle);
    el.addEventListener("compositionstart", onCompositionStart);
    el.addEventListener("compositionend", onCompositionEnd);
  },
  unbind(el) {
    el.removeEventListener("input", el.handle);
  }
};

export function onCompositionStart(e) {
  e.target.composing = true;
}

export function onCompositionEnd(e) {
  if (!e.target.composing) return;
  e.target.composing = false;
}
