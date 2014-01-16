// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.print = parentModule.print;
  Module.printErr = parentModule.printErr;
  Module.cleanups = [];
  var H_BASE = 0;
  // Each module has its own stack
  var STACKTOP = parentModule['_malloc'](TOTAL_STACK);
  assert(STACKTOP % 8 == 0);
  var STACK_MAX = STACKTOP + TOTAL_STACK;
  Module.cleanups.push(function() {
    parentModule['_free'](STACKTOP); // XXX ensure exported
    parentModule['_free'](H_BASE);
  });
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* no memory initializer */
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var __ZN7WebCore20JSSVGElementInstance6s_infoE=env.__ZN7WebCore20JSSVGElementInstance6s_infoE|0;
  var __ZN7WebCore16JSIDBTransaction6s_infoE=env.__ZN7WebCore16JSIDBTransaction6s_infoE|0;
  var __ZN7WebCore26JSSpeechSynthesisUtterance6s_infoE=env.__ZN7WebCore26JSSpeechSynthesisUtterance6s_infoE|0;
  var __ZN7WebCore12JSFileReader6s_infoE=env.__ZN7WebCore12JSFileReader6s_infoE|0;
  var __ZN7WebCore8JSWorker6s_infoE=env.__ZN7WebCore8JSWorker6s_infoE|0;
  var __ZN7WebCore12JSIDBRequest6s_infoE=env.__ZN7WebCore12JSIDBRequest6s_infoE|0;
  var __ZN7WebCore18JSIDBOpenDBRequest6s_infoE=env.__ZN7WebCore18JSIDBOpenDBRequest6s_infoE|0;
  var __ZN7WebCore14JSSharedWorker6s_infoE=env.__ZN7WebCore14JSSharedWorker6s_infoE|0;
  var __ZN7WebCore28JSDedicatedWorkerGlobalScope6s_infoE=env.__ZN7WebCore28JSDedicatedWorkerGlobalScope6s_infoE|0;
  var __ZN7WebCore13JSMessagePort6s_infoE=env.__ZN7WebCore13JSMessagePort6s_infoE|0;
  var __ZN7WebCore13JSEventSource6s_infoE=env.__ZN7WebCore13JSEventSource6s_infoE|0;
  var __ZN7WebCore11JSWebSocket6s_infoE=env.__ZN7WebCore11JSWebSocket6s_infoE|0;
  var __ZN7WebCore16JSDOMWindowShell6s_infoE=env.__ZN7WebCore16JSDOMWindowShell6s_infoE|0;
  var __ZN7WebCore13JSIDBDatabase6s_infoE=env.__ZN7WebCore13JSIDBDatabase6s_infoE|0;
  var __ZN7WebCore21JSDOMApplicationCache6s_infoE=env.__ZN7WebCore21JSDOMApplicationCache6s_infoE|0;
  var __ZN7WebCore6JSNode6s_infoE=env.__ZN7WebCore6JSNode6s_infoE|0;
  var __ZN7WebCore14JSNotification6s_infoE=env.__ZN7WebCore14JSNotification6s_infoE|0;
  var __ZN7WebCore25JSSharedWorkerGlobalScope6s_infoE=env.__ZN7WebCore25JSSharedWorkerGlobalScope6s_infoE|0;
  var __ZN7WebCore22JSXMLHttpRequestUpload6s_infoE=env.__ZN7WebCore22JSXMLHttpRequestUpload6s_infoE|0;
  var __ZN7WebCore16JSXMLHttpRequest6s_infoE=env.__ZN7WebCore16JSXMLHttpRequest6s_infoE|0;
  var __ZN7WebCore13JSEventTarget6s_infoE=env.__ZN7WebCore13JSEventTarget6s_infoE|0;
  var __ZN7WebCore17JSWebKitNamedFlow6s_infoE=env.__ZN7WebCore17JSWebKitNamedFlow6s_infoE|0;
  var __ZN7WebCore11JSDOMWindow6s_infoE=env.__ZN7WebCore11JSDOMWindow6s_infoE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;
  var tempRet1 = 0;
  var tempRet2 = 0;
  var tempRet3 = 0;
  var tempRet4 = 0;
  var tempRet5 = 0;
  var tempRet6 = 0;
  var tempRet7 = 0;
  var tempRet8 = 0;
  var tempRet9 = 0;
  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var abort=env.abort;
  var assert=env.assert;
  var asmPrintInt=env.asmPrintInt;
  var asmPrintFloat=env.asmPrintFloat;
  var Math_min=env.min;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore13toEventTargetEN3JSC7JSValueE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i2 = STACKTOP;
 i3 = i1;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 if ((HEAP32[i1 + 4 >> 2] | 0) != -5) {
  i4 = 0;
  STACKTOP = i2;
  return i4 | 0;
 }
 i3 = HEAP32[i1 >> 2] | 0;
 i5 = i3;
 i6 = (HEAP32[(i3 & -65536) + 1048 >> 2] | 0) == 2;
 if (i6) {
  i7 = i5 + 8 | 0;
 } else {
  i7 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i7 >> 2] | 0;
 L8 : do {
  if ((i3 | 0) != 0) {
   i7 = i3;
   while (1) {
    if ((i7 | 0) == (__ZN7WebCore16JSDOMWindowShell6s_infoE | 0)) {
     break;
    }
    i7 = HEAP32[i7 + 4 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break L8;
    }
   }
   i4 = __ZNK7WebCore16JSDOMWindowShell4implEv(HEAP32[i1 >> 2] | 0) | 0;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i8 = i5 + 8 | 0;
 } else {
  i8 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i8 >> 2] | 0;
 L19 : do {
  if ((i3 | 0) != 0) {
   i8 = i3;
   while (1) {
    if ((i8 | 0) == (__ZN7WebCore13JSEventTarget6s_infoE | 0)) {
     break;
    }
    i8 = HEAP32[i8 + 4 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L19;
    }
   }
   i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] | 0;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i9 = i5 + 8 | 0;
 } else {
  i9 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i9 >> 2] | 0;
 L30 : do {
  if ((i3 | 0) != 0) {
   i9 = i3;
   while (1) {
    if ((i9 | 0) == (__ZN7WebCore21JSDOMApplicationCache6s_infoE | 0)) {
     break;
    }
    i9 = HEAP32[i9 + 4 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break L30;
    }
   }
   i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] | 0;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i10 = i5 + 8 | 0;
 } else {
  i10 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i10 >> 2] | 0;
 L41 : do {
  if ((i3 | 0) != 0) {
   i10 = i3;
   while (1) {
    if ((i10 | 0) == (__ZN7WebCore11JSDOMWindow6s_infoE | 0)) {
     break;
    }
    i10 = HEAP32[i10 + 4 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break L41;
    }
   }
   i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 660 >> 2] | 0;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i11 = i5 + 8 | 0;
 } else {
  i11 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i11 >> 2] | 0;
 L52 : do {
  if ((i3 | 0) != 0) {
   i11 = i3;
   while (1) {
    if ((i11 | 0) == (__ZN7WebCore28JSDedicatedWorkerGlobalScope6s_infoE | 0)) {
     break;
    }
    i11 = HEAP32[i11 + 4 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break L52;
    }
   }
   i11 = HEAP32[(HEAP32[i1 >> 2] | 0) + 660 >> 2] | 0;
   i4 = (i11 | 0) == 0 ? 0 : i11 + 160 | 0;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i12 = i5 + 8 | 0;
 } else {
  i12 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i12 >> 2] | 0;
 L63 : do {
  if ((i3 | 0) != 0) {
   i12 = i3;
   while (1) {
    if ((i12 | 0) == (__ZN7WebCore13JSEventSource6s_infoE | 0)) {
     break;
    }
    i12 = HEAP32[i12 + 4 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break L63;
    }
   }
   i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] | 0;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i13 = i5 + 8 | 0;
 } else {
  i13 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i13 >> 2] | 0;
 L74 : do {
  if ((i3 | 0) != 0) {
   i13 = i3;
   while (1) {
    if ((i13 | 0) == (__ZN7WebCore13JSMessagePort6s_infoE | 0)) {
     break;
    }
    i13 = HEAP32[i13 + 4 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break L74;
    }
   }
   i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] | 0;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i14 = i5 + 8 | 0;
 } else {
  i14 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i14 >> 2] | 0;
 L85 : do {
  if ((i3 | 0) != 0) {
   i14 = i3;
   while (1) {
    if ((i14 | 0) == (__ZN7WebCore6JSNode6s_infoE | 0)) {
     break;
    }
    i14 = HEAP32[i14 + 4 >> 2] | 0;
    if ((i14 | 0) == 0) {
     break L85;
    }
   }
   i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] | 0;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i15 = i5 + 8 | 0;
 } else {
  i15 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i15 >> 2] | 0;
 L96 : do {
  if ((i3 | 0) != 0) {
   i15 = i3;
   while (1) {
    if ((i15 | 0) == (__ZN7WebCore17JSWebKitNamedFlow6s_infoE | 0)) {
     break;
    }
    i15 = HEAP32[i15 + 4 >> 2] | 0;
    if ((i15 | 0) == 0) {
     break L96;
    }
   }
   i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] | 0;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i16 = i5 + 8 | 0;
 } else {
  i16 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i16 >> 2] | 0;
 L107 : do {
  if ((i3 | 0) != 0) {
   i16 = i3;
   while (1) {
    if ((i16 | 0) == (__ZN7WebCore8JSWorker6s_infoE | 0)) {
     break;
    }
    i16 = HEAP32[i16 + 4 >> 2] | 0;
    if ((i16 | 0) == 0) {
     break L107;
    }
   }
   i16 = HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] | 0;
   i4 = (i16 - 16 | 0) == 0 ? 0 : i16;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i17 = i5 + 8 | 0;
 } else {
  i17 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i17 >> 2] | 0;
 L118 : do {
  if ((i3 | 0) != 0) {
   i17 = i3;
   while (1) {
    if ((i17 | 0) == (__ZN7WebCore16JSXMLHttpRequest6s_infoE | 0)) {
     break;
    }
    i17 = HEAP32[i17 + 4 >> 2] | 0;
    if ((i17 | 0) == 0) {
     break L118;
    }
   }
   i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] | 0;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i18 = i5 + 8 | 0;
 } else {
  i18 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i18 >> 2] | 0;
 L129 : do {
  if ((i3 | 0) != 0) {
   i18 = i3;
   while (1) {
    if ((i18 | 0) == (__ZN7WebCore22JSXMLHttpRequestUpload6s_infoE | 0)) {
     break;
    }
    i18 = HEAP32[i18 + 4 >> 2] | 0;
    if ((i18 | 0) == 0) {
     break L129;
    }
   }
   i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] | 0;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i19 = i5 + 8 | 0;
 } else {
  i19 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i19 >> 2] | 0;
 L140 : do {
  if ((i3 | 0) != 0) {
   i19 = i3;
   while (1) {
    if ((i19 | 0) == (__ZN7WebCore12JSFileReader6s_infoE | 0)) {
     break;
    }
    i19 = HEAP32[i19 + 4 >> 2] | 0;
    if ((i19 | 0) == 0) {
     break L140;
    }
   }
   i19 = HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] | 0;
   i4 = (i19 | 0) == 0 ? 0 : i19 + 16 | 0;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i20 = i5 + 8 | 0;
 } else {
  i20 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i20 >> 2] | 0;
 L151 : do {
  if ((i3 | 0) != 0) {
   i20 = i3;
   while (1) {
    if ((i20 | 0) == (__ZN7WebCore13JSIDBDatabase6s_infoE | 0)) {
     break;
    }
    i20 = HEAP32[i20 + 4 >> 2] | 0;
    if ((i20 | 0) == 0) {
     break L151;
    }
   }
   i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] | 0;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i21 = i5 + 8 | 0;
 } else {
  i21 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i21 >> 2] | 0;
 L162 : do {
  if ((i3 | 0) != 0) {
   i21 = i3;
   while (1) {
    if ((i21 | 0) == (__ZN7WebCore18JSIDBOpenDBRequest6s_infoE | 0)) {
     break;
    }
    i21 = HEAP32[i21 + 4 >> 2] | 0;
    if ((i21 | 0) == 0) {
     break L162;
    }
   }
   i21 = HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] | 0;
   i4 = (i21 - 12 | 0) == 0 ? 0 : i21;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i22 = i5 + 8 | 0;
 } else {
  i22 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i22 >> 2] | 0;
 L173 : do {
  if ((i3 | 0) != 0) {
   i22 = i3;
   while (1) {
    if ((i22 | 0) == (__ZN7WebCore12JSIDBRequest6s_infoE | 0)) {
     break;
    }
    i22 = HEAP32[i22 + 4 >> 2] | 0;
    if ((i22 | 0) == 0) {
     break L173;
    }
   }
   i22 = HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] | 0;
   i4 = (i22 - 12 | 0) == 0 ? 0 : i22;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i23 = i5 + 8 | 0;
 } else {
  i23 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i23 >> 2] | 0;
 L184 : do {
  if ((i3 | 0) != 0) {
   i23 = i3;
   while (1) {
    if ((i23 | 0) == (__ZN7WebCore16JSIDBTransaction6s_infoE | 0)) {
     break;
    }
    i23 = HEAP32[i23 + 4 >> 2] | 0;
    if ((i23 | 0) == 0) {
     break L184;
    }
   }
   i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] | 0;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i24 = i5 + 8 | 0;
 } else {
  i24 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i24 >> 2] | 0;
 L195 : do {
  if ((i3 | 0) != 0) {
   i24 = i3;
   while (1) {
    if ((i24 | 0) == (__ZN7WebCore14JSNotification6s_infoE | 0)) {
     break;
    }
    i24 = HEAP32[i24 + 4 >> 2] | 0;
    if ((i24 | 0) == 0) {
     break L195;
    }
   }
   i24 = HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] | 0;
   i4 = (i24 | 0) == 0 ? 0 : i24 + 16 | 0;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i25 = i5 + 8 | 0;
 } else {
  i25 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i25 >> 2] | 0;
 L206 : do {
  if ((i3 | 0) != 0) {
   i25 = i3;
   while (1) {
    if ((i25 | 0) == (__ZN7WebCore14JSSharedWorker6s_infoE | 0)) {
     break;
    }
    i25 = HEAP32[i25 + 4 >> 2] | 0;
    if ((i25 | 0) == 0) {
     break L206;
    }
   }
   i25 = HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] | 0;
   i4 = (i25 - 16 | 0) == 0 ? 0 : i25;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i26 = i5 + 8 | 0;
 } else {
  i26 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i26 >> 2] | 0;
 L217 : do {
  if ((i3 | 0) != 0) {
   i26 = i3;
   while (1) {
    if ((i26 | 0) == (__ZN7WebCore25JSSharedWorkerGlobalScope6s_infoE | 0)) {
     break;
    }
    i26 = HEAP32[i26 + 4 >> 2] | 0;
    if ((i26 | 0) == 0) {
     break L217;
    }
   }
   i26 = HEAP32[(HEAP32[i1 >> 2] | 0) + 660 >> 2] | 0;
   i4 = (i26 | 0) == 0 ? 0 : i26 + 160 | 0;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i27 = i5 + 8 | 0;
 } else {
  i27 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i27 >> 2] | 0;
 L228 : do {
  if ((i3 | 0) != 0) {
   i27 = i3;
   while (1) {
    if ((i27 | 0) == (__ZN7WebCore26JSSpeechSynthesisUtterance6s_infoE | 0)) {
     break;
    }
    i27 = HEAP32[i27 + 4 >> 2] | 0;
    if ((i27 | 0) == 0) {
     break L228;
    }
   }
   i27 = HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] | 0;
   i4 = (i27 | 0) == 0 ? 0 : i27 + 16 | 0;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i28 = i5 + 8 | 0;
 } else {
  i28 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i28 >> 2] | 0;
 L239 : do {
  if ((i3 | 0) != 0) {
   i28 = i3;
   while (1) {
    if ((i28 | 0) == (__ZN7WebCore20JSSVGElementInstance6s_infoE | 0)) {
     break;
    }
    i28 = HEAP32[i28 + 4 >> 2] | 0;
    if ((i28 | 0) == 0) {
     break L239;
    }
   }
   i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] | 0;
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if (i6) {
  i29 = i5 + 8 | 0;
 } else {
  i29 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i5 = HEAP32[i29 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i4 = 0;
  STACKTOP = i2;
  return i4 | 0;
 } else {
  i30 = i5;
 }
 while (1) {
  if ((i30 | 0) == (__ZN7WebCore11JSWebSocket6s_infoE | 0)) {
   break;
  }
  i5 = HEAP32[i30 + 4 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i4 = 0;
   i31 = 188;
   break;
  } else {
   i30 = i5;
  }
 }
 if ((i31 | 0) == 188) {
  STACKTOP = i2;
  return i4 | 0;
 }
 i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] | 0;
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_11EventTargetE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 + 4 >> 2] = -3;
  HEAP32[i1 >> 2] = 0;
  return;
 }
 switch (FUNCTION_TABLE_ii[HEAP32[HEAP32[i4 >> 2] >> 2] & 1](i4) | 0) {
 case 0:
  {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_19DOMApplicationCacheE(i1, i2, i3, i4);
   return;
  }
 case 1:
  {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_9DOMWindowE(i1, i2, i3, i4);
   return;
  }
 case 2:
  {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_17WorkerGlobalScopeE(i1, i2, i3, i4 - 160 | 0);
   return;
  }
 case 3:
  {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_11EventSourceE(i1, i2, i3, i4);
   return;
  }
 case 4:
  {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_11MessagePortE(i1, i2, i3, i4);
   return;
  }
 case 5:
  {
   i5 = i4;
   i6 = HEAP32[(HEAP32[(HEAP32[HEAP32[i2 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0;
   do {
    if ((HEAP8[i6 + 92 | 0] & 1) == 0) {
     i7 = 14;
    } else {
     i8 = HEAP32[i4 + 4 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 14;
      break;
     }
     if ((HEAP32[i8 + 8 >> 2] & 3 | 0) != 0) {
      i7 = 14;
      break;
     }
     i9 = HEAP32[i8 >> 2] | 0;
     if ((i9 | 0) == 0) {
      i7 = 14;
      break;
     }
     i10 = i9 | 0;
     i7 = 23;
    }
   } while (0);
   L22 : do {
    if ((i7 | 0) == 14) {
     i9 = i4;
     i8 = HEAP32[i6 + 12 >> 2] | 0;
     i11 = HEAP32[i6 + 4 >> 2] | 0;
     i12 = i4;
     i13 = i12 + ~(i12 << 15) | 0;
     i12 = (i13 >>> 10 ^ i13) * 9 & -1;
     i13 = i12 >>> 6 ^ i12;
     i12 = i13 + ~(i13 << 11) | 0;
     i13 = i12 >>> 16 ^ i12;
     if ((i11 | 0) == 0) {
      break;
     }
     i12 = i8 & i13;
     i14 = i11 + (i12 << 3) | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     if ((i15 | 0) == (i9 | 0)) {
      i16 = i14;
     } else {
      i14 = (i13 >>> 23) + ~i13 | 0;
      i13 = i14 << 12 ^ i14;
      i14 = i13 >>> 7 ^ i13;
      i13 = i14 << 2 ^ i14;
      i14 = i13 >>> 20 ^ i13 | 1;
      i13 = 0;
      i17 = i12;
      i12 = i15;
      while (1) {
       if ((i12 | 0) == 0) {
        break L22;
       }
       i15 = (i13 | 0) == 0 ? i14 : i13;
       i18 = i15 + i17 & i8;
       i19 = i11 + (i18 << 3) | 0;
       i20 = HEAP32[i19 >> 2] | 0;
       if ((i20 | 0) == (i9 | 0)) {
        i16 = i19;
        break;
       } else {
        i13 = i15;
        i17 = i18;
        i12 = i20;
       }
      }
     }
     if ((i16 | 0) == 0) {
      break;
     }
     i12 = HEAP32[i16 + 4 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] & 3 | 0) != 0) {
      break;
     }
     i10 = HEAP32[i12 >> 2] | 0;
     i7 = 23;
    }
   } while (0);
   do {
    if ((i7 | 0) == 23) {
     if ((i10 | 0) == 0) {
      break;
     }
     HEAP32[i1 + 4 >> 2] = -5;
     HEAP32[i1 >> 2] = i10;
     return;
    }
   } while (0);
   __ZN7WebCore13createWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_4NodeE(i1, i2, i3, i5);
   return;
  }
 case 6:
  {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_15WebKitNamedFlowE(i1, i2, i3, i4);
   return;
  }
 case 7:
  {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_6WorkerE(i1, i2, i3, i4 - 16 | 0);
   return;
  }
 case 8:
  {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_14XMLHttpRequestE(i1, i2, i3, i4);
   return;
  }
 case 9:
  {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_20XMLHttpRequestUploadE(i1, i2, i3, i4);
   return;
  }
 case 10:
  {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_10FileReaderE(i1, i2, i3, i4 - 16 | 0);
   return;
  }
 case 11:
  {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_11IDBDatabaseE(i1, i2, i3, i4);
   return;
  }
 case 12:
  {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_16IDBOpenDBRequestE(i1, i2, i3, i4 - 12 | 0);
   return;
  }
 case 13:
  {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_10IDBRequestE(i1, i2, i3, i4 - 12 | 0);
   return;
  }
 case 14:
  {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_14IDBTransactionE(i1, i2, i3, i4);
   return;
  }
 case 15:
  {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_12NotificationE(i1, i2, i3, i4 - 16 | 0);
   return;
  }
 case 16:
  {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_12SharedWorkerE(i1, i2, i3, i4 - 16 | 0);
   return;
  }
 case 17:
  {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_17WorkerGlobalScopeE(i1, i2, i3, i4 - 160 | 0);
   return;
  }
 case 18:
  {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_24SpeechSynthesisUtteranceE(i1, i2, i3, i4 - 16 | 0);
   return;
  }
 case 19:
  {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_18SVGElementInstanceE(i1, i2, i3, i4);
   return;
  }
 case 20:
  {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_9WebSocketE(i1, i2, i3, i4);
   return;
  }
 default:
  {
   HEAP32[i1 + 4 >> 2] = -3;
   HEAP32[i1 >> 2] = 0;
   return;
  }
 }
}
function _memset(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + i3 | 0;
 if ((i3 | 0) >= 20) {
  i2 = i2 & 255;
  i5 = i1 & 3;
  i6 = i2 | i2 << 8 | i2 << 16 | i2 << 24;
  i7 = i4 & ~3;
  if (i5) {
   i5 = i1 + 4 - i5 | 0;
   while ((i1 | 0) < (i5 | 0)) {
    HEAP8[i1] = i2;
    i1 = i1 + 1 | 0;
   }
  }
  while ((i1 | 0) < (i7 | 0)) {
   HEAP32[i1 >> 2] = i6;
   i1 = i1 + 4 | 0;
  }
 }
 while ((i1 | 0) < (i4 | 0)) {
  HEAP8[i1] = i2;
  i1 = i1 + 1 | 0;
 }
 return i1 - i3 | 0;
}
function _memcpy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 | 0;
 if ((i1 & 3) == (i2 & 3)) {
  while (i1 & 3) {
   if ((i3 | 0) == 0) return i4 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
   i1 = i1 + 1 | 0;
   i2 = i2 + 1 | 0;
   i3 = i3 - 1 | 0;
  }
  while ((i3 | 0) >= 4) {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i1 = i1 + 4 | 0;
   i2 = i2 + 4 | 0;
   i3 = i3 - 4 | 0;
  }
 }
 while ((i3 | 0) > 0) {
  HEAP8[i1] = HEAP8[i2] | 0;
  i1 = i1 + 1 | 0;
  i2 = i2 + 1 | 0;
  i3 = i3 - 1 | 0;
 }
 return i4 | 0;
}
function copyTempDouble(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
 HEAP8[tempDoublePtr + 4 | 0] = HEAP8[i1 + 4 | 0];
 HEAP8[tempDoublePtr + 5 | 0] = HEAP8[i1 + 5 | 0];
 HEAP8[tempDoublePtr + 6 | 0] = HEAP8[i1 + 6 | 0];
 HEAP8[tempDoublePtr + 7 | 0] = HEAP8[i1 + 7 | 0];
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (HEAP8[i2] | 0) {
  i2 = i2 + 1 | 0;
 }
 return i2 - i1 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function setTempRet9(i1) {
 i1 = i1 | 0;
 tempRet9 = i1;
}
function setTempRet8(i1) {
 i1 = i1 | 0;
 tempRet8 = i1;
}
function setTempRet7(i1) {
 i1 = i1 | 0;
 tempRet7 = i1;
}
function setTempRet6(i1) {
 i1 = i1 | 0;
 tempRet6 = i1;
}
function setTempRet5(i1) {
 i1 = i1 | 0;
 tempRet5 = i1;
}
function setTempRet4(i1) {
 i1 = i1 | 0;
 tempRet4 = i1;
}
function setTempRet3(i1) {
 i1 = i1 | 0;
 tempRet3 = i1;
}
function setTempRet2(i1) {
 i1 = i1 | 0;
 tempRet2 = i1;
}
function setTempRet1(i1) {
 i1 = i1 | 0;
 tempRet1 = i1;
}
function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b1() {
 abort(1);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore20JSSVGElementInstance6s_infoE": __ZN7WebCore20JSSVGElementInstance6s_infoE, "__ZN7WebCore16JSIDBTransaction6s_infoE": __ZN7WebCore16JSIDBTransaction6s_infoE, "__ZN7WebCore26JSSpeechSynthesisUtterance6s_infoE": __ZN7WebCore26JSSpeechSynthesisUtterance6s_infoE, "__ZN7WebCore12JSFileReader6s_infoE": __ZN7WebCore12JSFileReader6s_infoE, "__ZN7WebCore8JSWorker6s_infoE": __ZN7WebCore8JSWorker6s_infoE, "__ZN7WebCore12JSIDBRequest6s_infoE": __ZN7WebCore12JSIDBRequest6s_infoE, "__ZN7WebCore18JSIDBOpenDBRequest6s_infoE": __ZN7WebCore18JSIDBOpenDBRequest6s_infoE, "__ZN7WebCore14JSSharedWorker6s_infoE": __ZN7WebCore14JSSharedWorker6s_infoE, "__ZN7WebCore28JSDedicatedWorkerGlobalScope6s_infoE": __ZN7WebCore28JSDedicatedWorkerGlobalScope6s_infoE, "__ZN7WebCore13JSMessagePort6s_infoE": __ZN7WebCore13JSMessagePort6s_infoE, "__ZN7WebCore13JSEventSource6s_infoE": __ZN7WebCore13JSEventSource6s_infoE, "__ZN7WebCore11JSWebSocket6s_infoE": __ZN7WebCore11JSWebSocket6s_infoE, "__ZN7WebCore16JSDOMWindowShell6s_infoE": __ZN7WebCore16JSDOMWindowShell6s_infoE, "__ZN7WebCore13JSIDBDatabase6s_infoE": __ZN7WebCore13JSIDBDatabase6s_infoE, "__ZN7WebCore21JSDOMApplicationCache6s_infoE": __ZN7WebCore21JSDOMApplicationCache6s_infoE, "__ZN7WebCore6JSNode6s_infoE": __ZN7WebCore6JSNode6s_infoE, "__ZN7WebCore14JSNotification6s_infoE": __ZN7WebCore14JSNotification6s_infoE, "__ZN7WebCore25JSSharedWorkerGlobalScope6s_infoE": __ZN7WebCore25JSSharedWorkerGlobalScope6s_infoE, "__ZN7WebCore22JSXMLHttpRequestUpload6s_infoE": __ZN7WebCore22JSXMLHttpRequestUpload6s_infoE, "__ZN7WebCore16JSXMLHttpRequest6s_infoE": __ZN7WebCore16JSXMLHttpRequest6s_infoE, "__ZN7WebCore13JSEventTarget6s_infoE": __ZN7WebCore13JSEventTarget6s_infoE, "__ZN7WebCore17JSWebKitNamedFlow6s_infoE": __ZN7WebCore17JSWebKitNamedFlow6s_infoE, "__ZN7WebCore11JSDOMWindow6s_infoE": __ZN7WebCore11JSDOMWindow6s_infoE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","_memcpy","__ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_11EventTargetE","__ZN7WebCore13toEventTargetEN3JSC7JSValueE","_memset"]