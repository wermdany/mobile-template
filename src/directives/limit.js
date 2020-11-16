/**
 * @time 2020年11月16日
 *
 * 这个指令是给 input 框增加限制，用来阻止某种输入字符
 *
 * binding.value { RegExp | Function }
 * 一个除去字符的正则匹配 或 过滤方法
 */

import { warn } from "@/utils/error";
import { isFun, isRegExp } from "@/utils/types";
import { findEle } from "@/utils/web";

function defaultFilter(exp) {
  return function(value) {
    return value.replace(new RegExp(exp, "g"), "");
  };
}

export default {
  bind(el, binding) {
    const input = findEle(el, "input");
    if (!input) {
      warn("[limit]", `is not a input tag use ${binding.expression}`);
    }
    let filter = null;
    if (isRegExp(binding.value)) {
      filter = defaultFilter(binding.value);
    } else if (isFun(binding.value)) {
      filter = binding.value;
    } else {
      warn("[limit]", `${binding.expression} is not a function or regexp`);
    }
    input.addEventListener(
      "compositionstart",
      function() {
        input._composing = true;
      },
      false
    );
    input.addEventListener(
      "compositionend",
      function(e) {
        const wish = filter(e.target.value);
        input._composing = false;
        //只有存在不合理的才会格式化，ios光标跳至最后
        if (e.target.value !== wish) {
          e.target.value = wish;
          setTimeout(function() {
            e.target.value = wish;
            e.target.dispatchEvent(new InputEvent("input"));
          });
        }
      },
      false
    );
    input.addEventListener(
      "input",
      function(e) {
        const wish = filter(e.target.value);
        //减少混合输入下input频繁触发，只有存在不合理的才会格式化，ios光标跳至最后
        if (!input._composing && e.target.value !== wish) {
          e.target.value = wish;
          setTimeout(function() {
            e.target.value = wish;
            e.target.dispatchEvent(new InputEvent("input"));
          });
        }
      },
      false
    );
  }
};
