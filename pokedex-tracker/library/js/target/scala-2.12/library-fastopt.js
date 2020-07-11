let Editing,MainApp;
(function(){
'use strict';
const $linkingInfo = Object.freeze({
  "assumingES6": true,
  "productionMode": false,
  "linkerVersion": "1.1.1",
  "fileLevelThis": this
});
const $imul = Math.imul;
const $fround = Math.fround;
const $clz32 = Math.clz32;
let $L0;
function $propertyName(obj) {
  for (const prop in obj) {
    return prop
  }
}
class $Char {
  constructor(c) {
    this.c = c
  };
  toString() {
    return String.fromCharCode(this.c)
  };
}
function $throwClassCastException(instance, classFullName) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ClassCastException(((instance + " is not an instance of ") + classFullName)))
}
function $throwArrayCastException(instance, classArrayEncodedName, depth) {
  while ((--depth)) {
    classArrayEncodedName = ("[" + classArrayEncodedName)
  };
  $throwClassCastException(instance, classArrayEncodedName)
}
function $throwArrayIndexOutOfBoundsException(i) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayIndexOutOfBoundsException(((i === null) ? null : ("" + i))))
}
function $noIsInstance(instance) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object")
}
function $makeNativeArrayWrapper(arrayClassData, nativeArray) {
  return new arrayClassData.constr(nativeArray)
}
function $newArrayObject(arrayClassData, lengths) {
  return $newArrayObjectInternal(arrayClassData, lengths, 0)
}
function $newArrayObjectInternal(arrayClassData, lengths, lengthIndex) {
  const result = new arrayClassData.constr(lengths[lengthIndex]);
  if ((lengthIndex < (lengths.length - 1))) {
    const subArrayClassData = arrayClassData.componentData;
    const subLengthIndex = (lengthIndex + 1);
    const underlying = result.u;
    for (let i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, lengths, subLengthIndex)
    }
  };
  return result
}
function $objectGetClass(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $d_T.getClassOf()
    }
    case "number": {
      if ($isInt(instance)) {
        if ((((instance << 24) >> 24) === instance)) {
          return $d_jl_Byte.getClassOf()
        } else if ((((instance << 16) >> 16) === instance)) {
          return $d_jl_Short.getClassOf()
        } else {
          return $d_jl_Integer.getClassOf()
        }
      } else {
        return $d_jl_Float.getClassOf()
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf()
    }
    case "undefined": {
      return $d_jl_Void.getClassOf()
    }
    default: {
      if ((instance === null)) {
        return instance.getClass__jl_Class()
      } else if ((instance instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf()
      } else if ((instance instanceof $Char)) {
        return $d_jl_Character.getClassOf()
      } else if ((!(!(instance && instance.$classData)))) {
        return instance.$classData.getClassOf()
      } else {
        return null
      }
    }
  }
}
function $objectClassName(instance) {
  switch ((typeof instance)) {
    case "string": {
      return "java.lang.String"
    }
    case "number": {
      if ($isInt(instance)) {
        if ((((instance << 24) >> 24) === instance)) {
          return "java.lang.Byte"
        } else if ((((instance << 16) >> 16) === instance)) {
          return "java.lang.Short"
        } else {
          return "java.lang.Integer"
        }
      } else {
        return "java.lang.Float"
      }
    }
    case "boolean": {
      return "java.lang.Boolean"
    }
    case "undefined": {
      return "java.lang.Void"
    }
    default: {
      if ((instance === null)) {
        return instance.getClass__jl_Class()
      } else if ((instance instanceof $c_RTLong)) {
        return "java.lang.Long"
      } else if ((instance instanceof $Char)) {
        return "java.lang.Character"
      } else if ((!(!(instance && instance.$classData)))) {
        return instance.$classData.name
      } else {
        return null.getName__T()
      }
    }
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString())
}
function $dp_getClass__jl_Class(instance) {
  return instance.getClass__jl_Class()
}
function $dp_clone__O(instance) {
  return instance.clone__O()
}
function $dp_notify__V(instance) {
  return instance.notify__V()
}
function $dp_notifyAll__V(instance) {
  return instance.notifyAll__V()
}
function $dp_finalize__V(instance) {
  return instance.finalize__V()
}
function $dp_equals__O__Z(instance, x0) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    return instance.equals__O__Z(x0)
  } else if (((typeof instance) === "number")) {
    return $f_jl_Double__equals__O__Z(instance, x0)
  } else if ((instance instanceof $Char)) {
    return $f_jl_Character__equals__O__Z(instance, x0)
  } else {
    return $c_O.prototype.equals__O__Z.call(instance, x0)
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance)
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance)
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I()
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance)
      } else {
        return $c_O.prototype.hashCode__I.call(instance)
      }
    }
  }
}
function $dp_compareTo__O__I(instance, x0) {
  return instance.compareTo__O__I(x0)
}
function $dp_length__I(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__length__I(instance)
  } else {
    return instance.length__I()
  }
}
function $dp_charAt__I__C(instance, x0) {
  return instance.charAt__I__C(x0)
}
function $dp_subSequence__I__I__jl_CharSequence(instance, x0, x1) {
  return instance.subSequence__I__I__jl_CharSequence(x0, x1)
}
function $dp_byteValue__B(instance) {
  return instance.byteValue__B()
}
function $dp_shortValue__S(instance) {
  return instance.shortValue__S()
}
function $dp_intValue__I(instance) {
  return instance.intValue__I()
}
function $dp_longValue__J(instance) {
  return instance.longValue__J()
}
function $dp_floatValue__F(instance) {
  return instance.floatValue__F()
}
function $dp_doubleValue__D(instance) {
  return instance.doubleValue__D()
}
function $intDiv(x, y) {
  if ((y === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((x / y) | 0)
  }
}
function $intMod(x, y) {
  if ((y === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((x % y) | 0)
  }
}
function $doubleToInt(x) {
  return ((x > 2147483647) ? 2147483647 : ((x < (-2147483648)) ? (-2147483648) : (x | 0)))
}
function $newJSObjectWithVarargs(ctor, args) {
  const instance = Object.create(ctor.prototype);
  const result = ctor.apply(instance, args);
  switch ((typeof result)) {
    case "string":
    case "number":
    case "boolean":
    case "undefined":
    case "symbol": {
      return instance
    }
    default: {
      return ((result === null) ? instance : result)
    }
  }
}
function $resolveSuperRef(superClass, propName) {
  const getPrototypeOf = Object.getPrototyeOf;
  const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  let superProto = superClass.prototype;
  while ((superProto !== null)) {
    const desc = getOwnPropertyDescriptor(superProto, propName);
    if ((desc !== (void 0))) {
      return desc
    };
    superProto = getPrototypeOf(superProto)
  }
}
function $superGet(superClass, self, propName) {
  const desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    const getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(self) : getter.value)
  }
}
function $superSet(superClass, self, propName, value) {
  const desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    const setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(self, value);
      return (void 0)
    }
  };
  throw new TypeError((("super has no setter '" + propName) + "'."))
}
function $systemArraycopy(src, srcPos, dest, destPos, length) {
  const srcu = src.u;
  const destu = dest.u;
  if ((((((srcPos < 0) || (destPos < 0)) || (length < 0)) || (srcPos > ((srcu.length - length) | 0))) || (destPos > ((destu.length - length) | 0)))) {
    $throwArrayIndexOutOfBoundsException(null)
  };
  if ((((srcu !== destu) || (destPos < srcPos)) || (((srcPos + length) | 0) < destPos))) {
    for (let i = 0; (i < length); i = ((i + 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  } else {
    for (let i = ((length - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  }
}
let $lastIDHash = 0;
const $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "undefined": {
      return $dp_hashCode__I(obj)
    }
    default: {
      if ((obj === null)) {
        return 0
      } else {
        let hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash)
        };
        return hash
      }
    }
  }
}
function $isByte(v) {
  return ((((typeof v) === "number") && (((v << 24) >> 24) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isShort(v) {
  return ((((typeof v) === "number") && (((v << 16) >> 16) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isInt(v) {
  return ((((typeof v) === "number") && ((v | 0) === v)) && ((1 / v) !== (1 / (-0))))
}
function $bC(c) {
  return new $Char(c)
}
const $bC0 = $bC(0);
function $uV(v) {
  return (((v === (void 0)) || (v === null)) ? (void 0) : $throwClassCastException(v, "java.lang.Void"))
}
function $uZ(v) {
  return ((((typeof v) === "boolean") || (v === null)) ? (!(!v)) : $throwClassCastException(v, "java.lang.Boolean"))
}
function $uC(v) {
  return (((v instanceof $Char) || (v === null)) ? ((v === null) ? 0 : v.c) : $throwClassCastException(v, "java.lang.Character"))
}
function $uB(v) {
  return (($isByte(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Byte"))
}
function $uS(v) {
  return (($isShort(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Short"))
}
function $uI(v) {
  return (($isInt(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Integer"))
}
function $uJ(v) {
  return (((v instanceof $c_RTLong) || (v === null)) ? ((v === null) ? $L0 : v) : $throwClassCastException(v, "java.lang.Long"))
}
function $uF(v) {
  return ((((typeof v) === "number") || (v === null)) ? (+v) : $throwClassCastException(v, "java.lang.Float"))
}
function $uD(v) {
  return ((((typeof v) === "number") || (v === null)) ? (+v) : $throwClassCastException(v, "java.lang.Double"))
}
function $uT(v) {
  return ((((typeof v) === "string") || (v === null)) ? ((v === null) ? "" : v) : $throwClassCastException(v, "java.lang.String"))
}
function $byteArray2TypedArray(value) {
  return new Int8Array(value.u)
}
function $typedArray2ByteArray(value) {
  return new ($d_B.getArrayOf().constr)(new Int8Array(value))
}
function $shortArray2TypedArray(value) {
  return new Int16Array(value.u)
}
function $typedArray2ShortArray(value) {
  return new ($d_S.getArrayOf().constr)(new Int16Array(value))
}
function $charArray2TypedArray(value) {
  return new Uint16Array(value.u)
}
function $typedArray2CharArray(value) {
  return new ($d_C.getArrayOf().constr)(new Uint16Array(value))
}
function $intArray2TypedArray(value) {
  return new Int32Array(value.u)
}
function $typedArray2IntArray(value) {
  return new ($d_I.getArrayOf().constr)(new Int32Array(value))
}
function $floatArray2TypedArray(value) {
  return new Float32Array(value.u)
}
function $typedArray2FloatArray(value) {
  return new ($d_F.getArrayOf().constr)(new Float32Array(value))
}
function $doubleArray2TypedArray(value) {
  return new Float64Array(value.u)
}
function $typedArray2DoubleArray(value) {
  return new ($d_D.getArrayOf().constr)(new Float64Array(value))
}
class $TypeData {
  constructor() {
    this.constr = (void 0);
    this.ancestors = null;
    this.componentData = null;
    this.arrayBase = null;
    this.arrayDepth = 0;
    this.zero = null;
    this.arrayEncodedName = "";
    this._classOf = (void 0);
    this._arrayOf = (void 0);
    this.isArrayOf = (void 0);
    this.name = "";
    this.isPrimitive = false;
    this.isInterface = false;
    this.isArrayClass = false;
    this.isJSClass = false;
    this.isInstance = (void 0)
  };
  initPrim(zero, arrayEncodedName, displayName, isArrayOf) {
    this.ancestors = {};
    this.zero = zero;
    this.arrayEncodedName = arrayEncodedName;
    this.isArrayOf = isArrayOf;
    this.name = displayName;
    this.isPrimitive = true;
    this.isInstance = (function(obj) {
      return false
    });
    return this
  };
  initClass(internalNameObj, isInterface, fullName, ancestors, isJSType, parentData, isInstance, isArrayOf) {
    const internalName = $propertyName(internalNameObj);
    this.ancestors = ancestors;
    this.arrayEncodedName = (("L" + fullName) + ";");
    this.isArrayOf = (isArrayOf || (function(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors[internalName])))
    }));
    this.isJSType = (!(!isJSType));
    this.name = fullName;
    this.isInterface = isInterface;
    this.isInstance = (isInstance || (function(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))
    }));
    return this
  };
  initArray(componentData) {
    const componentZero = ((componentData.zero === "longZero") ? $L0 : componentData.zero);
    class ArrayClass extends $c_O {
      constructor(arg) {
        super();
        if (((typeof arg) === "number")) {
          this.u = new Array(arg);
          for (let i = 0; (i < arg); (i++)) {
            this.u[i] = componentZero
          }
        } else {
          this.u = arg
        }
      };
      get(i) {
        if (((i < 0) || (i >= this.u.length))) {
          $throwArrayIndexOutOfBoundsException(i)
        };
        return this.u[i]
      };
      set(i, v) {
        if (((i < 0) || (i >= this.u.length))) {
          $throwArrayIndexOutOfBoundsException(i)
        };
        this.u[i] = v
      };
      clone__O() {
        return new ArrayClass(((this.u instanceof Array) ? this.u.slice(0) : new this.u.constructor(this.u)))
      };
    }
    ArrayClass.prototype.$classData = this;
    const encodedName = ("[" + componentData.arrayEncodedName);
    const componentBase = (componentData.arrayBase || componentData);
    const arrayDepth = (componentData.arrayDepth + 1);
    this.constr = ArrayClass;
    this.ancestors = {
      O: 1,
      jl_Cloneable: 1,
      Ljava_io_Serializable: 1
    };
    this.componentData = componentData;
    this.arrayBase = componentBase;
    this.arrayDepth = arrayDepth;
    this.arrayEncodedName = encodedName;
    this.name = encodedName;
    this.isArrayClass = true;
    this.isInstance = (function(obj) {
      return componentBase.isArrayOf(obj, arrayDepth)
    });
    return this
  };
  getArrayOf() {
    if ((!this._arrayOf)) {
      this._arrayOf = new $TypeData().initArray(this)
    };
    return this._arrayOf
  };
  getClassOf() {
    if ((!this._classOf)) {
      this._classOf = new $c_jl_Class(this)
    };
    return this._classOf
  };
  "isAssignableFrom"(that) {
    if ((this.isPrimitive || that.isPrimitive)) {
      return (this === that)
    } else {
      let thatFakeInstance;
      if ((that === $d_T)) {
        thatFakeInstance = ""
      } else if ((that === $d_jl_Boolean)) {
        thatFakeInstance = false
      } else if ((((((that === $d_jl_Byte) || (that === $d_jl_Short)) || (that === $d_jl_Integer)) || (that === $d_jl_Float)) || (that === $d_jl_Double))) {
        thatFakeInstance = 0
      } else if ((that === $d_jl_Long)) {
        thatFakeInstance = $L0
      } else if ((that === $d_jl_Character)) {
        thatFakeInstance = $bC0
      } else if ((that === $d_jl_Void)) {
        thatFakeInstance = (void 0)
      } else {
        thatFakeInstance = {
          $classData: that
        }
      };
      return this.isInstance(thatFakeInstance)
    }
  };
  "checkCast"(obj) {
    if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
      $throwClassCastException(obj, this.name)
    }
  };
  "getSuperclass"() {
    return (this.parentData ? this.parentData.getClassOf() : null)
  };
  "getComponentType"() {
    return (this.componentData ? this.componentData.getClassOf() : null)
  };
  "newArrayOfThisClass"(lengths) {
    let arrayClassData = this;
    for (let i = 0; (i < lengths.length); (i++)) {
      arrayClassData = arrayClassData.getArrayOf()
    };
    return $newArrayObject(arrayClassData, lengths)
  };
}
function $isArrayOf_V(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_V))))
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))))
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))))
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))))
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))))
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))))
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))))
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))))
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))))
}
function $asArrayOf_V(obj, depth) {
  if (($isArrayOf_V(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "V", depth)
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Z", depth)
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "C", depth)
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "B", depth)
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "S", depth)
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "I", depth)
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "J", depth)
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "F", depth)
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "D", depth)
  }
}
const $d_V = new $TypeData().initPrim((void 0), "V", "void", $isArrayOf_V);
const $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $isArrayOf_Z);
const $d_C = new $TypeData().initPrim(0, "C", "char", $isArrayOf_C);
const $d_B = new $TypeData().initPrim(0, "B", "byte", $isArrayOf_B);
const $d_S = new $TypeData().initPrim(0, "S", "short", $isArrayOf_S);
const $d_I = new $TypeData().initPrim(0, "I", "int", $isArrayOf_I);
const $d_J = new $TypeData().initPrim("longZero", "J", "long", $isArrayOf_J);
const $d_F = new $TypeData().initPrim(0.0, "F", "float", $isArrayOf_F);
const $d_D = new $TypeData().initPrim(0.0, "D", "double", $isArrayOf_D);
class $c_O {
  hashCode__I() {
    return $systemIdentityHashCode(this)
  };
  equals__O__Z(that) {
    return (this === that)
  };
  toString__T() {
    const $$x1 = $objectClassName(this);
    const i = this.hashCode__I();
    return (($$x1 + "@") + $as_T($uD((i >>> 0)).toString(16)))
  };
  "toString"() {
    return this.toString__T()
  };
}
function $is_O(obj) {
  return (obj !== null)
}
function $as_O(obj) {
  return obj
}
function $isArrayOf_O(obj, depth) {
  const data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    const arrayDepth = (data.arrayDepth || 0);
    return ((!(arrayDepth < depth)) && ((arrayDepth > depth) || (!data.arrayBase.isPrimitive)))
  }
}
function $asArrayOf_O(obj, depth) {
  return (($isArrayOf_O(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Object;", depth))
}
const $d_O = new $TypeData().initClass({
  O: 0
}, false, "java.lang.Object", {
  O: 1
}, (void 0), (void 0), $is_O, $isArrayOf_O);
$c_O.prototype.$classData = $d_O;
class $c_LEditing$ extends $c_O {
  main__Lorg_scalajs_dom_raw_HTMLDivElement__V(target) {
    const this$2 = $m_s_Console$();
    const this$3 = $as_Ljava_io_PrintStream(this$2.s_Console$__f_outVar.s_util_DynamicVariable__f_v);
    this$3.java$lang$JSConsoleBasedPrintStream$$printString__T__V("Editing Time!!!\n");
    const x = $m_LUsers$().LUsers$__f_me.printPokes__T();
    const this$5 = $m_s_Console$();
    const this$6 = $as_Ljava_io_PrintStream(this$5.s_Console$__f_outVar.s_util_DynamicVariable__f_v);
    this$6.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"))
  };
  $js$exported$meth$main__Lorg_scalajs_dom_raw_HTMLDivElement__O(target) {
    this.main__Lorg_scalajs_dom_raw_HTMLDivElement__V(target)
  };
  "main"(arg) {
    const prep0 = arg;
    return this.$js$exported$meth$main__Lorg_scalajs_dom_raw_HTMLDivElement__O(prep0)
  };
}
const $d_LEditing$ = new $TypeData().initClass({
  LEditing$: 0
}, false, "Editing$", {
  LEditing$: 1,
  O: 1
});
$c_LEditing$.prototype.$classData = $d_LEditing$;
let $n_LEditing$ = (void 0);
function $m_LEditing$() {
  if ((!$n_LEditing$)) {
    $n_LEditing$ = new $c_LEditing$()
  };
  return $n_LEditing$
}
const $p_LMainApp$__getColour$1__Z__T = (function($thiz, caught) {
  if (caught) {
    return "background-color:#abffcd"
  };
  return "background-color:#ffc2ad"
});
class $c_LMainApp$ extends $c_O {
  makeImgInputs__LUser__ALPokemon__ALorg_scalajs_dom_raw_HTMLInputElement(u, pokes) {
    const inputs = $newArrayObject($d_Lorg_scalajs_dom_raw_HTMLInputElement.getArrayOf(), [30]);
    let i = 0;
    while ((i < pokes.u.length)) {
      const id = pokes.get(i).LPokemon__f_id;
      const this$1 = pokes.get(i);
      const c = this$1.LPokemon__f_isCaught;
      const this$2 = $m_Lscalatags_JsDom$all$();
      const $$x1 = this$2.input__Lscalatags_JsDom$TypedTag();
      const array = [$m_Lscalatags_JsDom$all$().type__Lscalatags_generic_Attr().$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("image", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr), $m_Lscalatags_JsDom$all$().src__Lscalatags_generic_Attr().$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair((("https://www.cpokemon.com/pokes/home/" + id) + ".png"), $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr), $m_Lscalatags_JsDom$all$().style__Lscalatags_generic_Attr().$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair($p_LMainApp$__getColour$1__Z__T(this, c), $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr), $m_Lscalatags_JsDom$all$().height__Lscalatags_generic_StyleMisc$PixelAutoStyle().$colon$eq__O__Lscalatags_generic_PixelStyleValue__Lscalatags_generic_StylePair(100, $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_intPixelStyle), $m_Lscalatags_JsDom$all$().width__Lscalatags_generic_StyleMisc$PixelAutoStyle().$colon$eq__O__Lscalatags_generic_PixelStyleValue__Lscalatags_generic_StylePair(100, $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_intPixelStyle)];
      const inputImage = $$x1.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array)).render__Lorg_scalajs_dom_raw_Element();
      inputImage.onclick = ((u$1, id$1, inputImage$1) => ((arg1$2) => {
        $m_LMainApp$().MainApp$$$anonfun$makeImgInputs$1__Lorg_scalajs_dom_raw_Event__LUser__I__Lorg_scalajs_dom_raw_HTMLInputElement__V(arg1$2, u$1, id$1, inputImage$1)
      }))(u, id, inputImage);
      inputs.set(i, inputImage);
      i = ((1 + i) | 0)
    };
    while ((i < 30)) {
      const $$x3 = i;
      const this$5 = $m_Lscalatags_JsDom$all$();
      const $$x2 = this$5.input__Lscalatags_JsDom$TypedTag();
      const array$1 = [$m_Lscalatags_JsDom$all$().type__Lscalatags_generic_Attr().$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("image", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr), $m_Lscalatags_JsDom$all$().src__Lscalatags_generic_Attr().$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("https://www.cpokemon.com/pokes/swsh/sprites/items/4.png", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr)];
      inputs.set($$x3, $$x2.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$1)).render__Lorg_scalajs_dom_raw_Element());
      i = ((1 + i) | 0)
    };
    return inputs
  };
  makeTable__LUser__ALPokemon__Lorg_scalajs_dom_raw_HTMLTableElement(u, pokes) {
    const urls = this.makeImgInputs__LUser__ALPokemon__ALorg_scalajs_dom_raw_HTMLInputElement(u, pokes);
    const this$1 = $m_Lscalatags_JsDom$all$();
    const $$x67 = this$1.table__Lscalatags_JsDom$TypedTag();
    const this$2 = $m_Lscalatags_JsDom$all$();
    const $$x66 = this$2.tbody__Lscalatags_JsDom$TypedTag();
    const this$3 = $m_Lscalatags_JsDom$all$();
    const $$x65 = this$3.tr__Lscalatags_JsDom$TypedTag();
    const this$4 = $m_Lscalatags_JsDom$all$();
    const $$x64 = this$4.td__Lscalatags_JsDom$TypedTag();
    const this$5 = $m_Lscalatags_JsDom$all$();
    const e = urls.get(0);
    const array = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$5, e)];
    const $$x63 = $$x64.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array));
    const this$8 = $m_Lscalatags_JsDom$all$();
    const $$x62 = this$8.td__Lscalatags_JsDom$TypedTag();
    const this$9 = $m_Lscalatags_JsDom$all$();
    const e$1 = urls.get(1);
    const array$1 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$9, e$1)];
    const $$x61 = $$x62.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$1));
    const this$12 = $m_Lscalatags_JsDom$all$();
    const $$x60 = this$12.td__Lscalatags_JsDom$TypedTag();
    const this$13 = $m_Lscalatags_JsDom$all$();
    const e$2 = urls.get(2);
    const array$2 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$13, e$2)];
    const $$x59 = $$x60.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$2));
    const this$16 = $m_Lscalatags_JsDom$all$();
    const $$x58 = this$16.td__Lscalatags_JsDom$TypedTag();
    const this$17 = $m_Lscalatags_JsDom$all$();
    const e$3 = urls.get(3);
    const array$3 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$17, e$3)];
    const $$x57 = $$x58.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$3));
    const this$20 = $m_Lscalatags_JsDom$all$();
    const $$x56 = this$20.td__Lscalatags_JsDom$TypedTag();
    const this$21 = $m_Lscalatags_JsDom$all$();
    const e$4 = urls.get(4);
    const array$4 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$21, e$4)];
    const array$5 = [$$x63, $$x61, $$x59, $$x57, $$x56.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$4))];
    const $$x55 = $$x65.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$5));
    const this$26 = $m_Lscalatags_JsDom$all$();
    const $$x54 = this$26.tr__Lscalatags_JsDom$TypedTag();
    const this$27 = $m_Lscalatags_JsDom$all$();
    const $$x53 = this$27.td__Lscalatags_JsDom$TypedTag();
    const this$28 = $m_Lscalatags_JsDom$all$();
    const e$5 = urls.get(5);
    const array$6 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$28, e$5)];
    const $$x52 = $$x53.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$6));
    const this$31 = $m_Lscalatags_JsDom$all$();
    const $$x51 = this$31.td__Lscalatags_JsDom$TypedTag();
    const this$32 = $m_Lscalatags_JsDom$all$();
    const e$6 = urls.get(6);
    const array$7 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$32, e$6)];
    const $$x50 = $$x51.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$7));
    const this$35 = $m_Lscalatags_JsDom$all$();
    const $$x49 = this$35.td__Lscalatags_JsDom$TypedTag();
    const this$36 = $m_Lscalatags_JsDom$all$();
    const e$7 = urls.get(7);
    const array$8 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$36, e$7)];
    const $$x48 = $$x49.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$8));
    const this$39 = $m_Lscalatags_JsDom$all$();
    const $$x47 = this$39.td__Lscalatags_JsDom$TypedTag();
    const this$40 = $m_Lscalatags_JsDom$all$();
    const e$8 = urls.get(8);
    const array$9 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$40, e$8)];
    const $$x46 = $$x47.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$9));
    const this$43 = $m_Lscalatags_JsDom$all$();
    const $$x45 = this$43.td__Lscalatags_JsDom$TypedTag();
    const this$44 = $m_Lscalatags_JsDom$all$();
    const e$9 = urls.get(9);
    const array$10 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$44, e$9)];
    const array$11 = [$$x52, $$x50, $$x48, $$x46, $$x45.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$10))];
    const $$x44 = $$x54.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$11));
    const this$49 = $m_Lscalatags_JsDom$all$();
    const $$x43 = this$49.tr__Lscalatags_JsDom$TypedTag();
    const this$50 = $m_Lscalatags_JsDom$all$();
    const $$x42 = this$50.td__Lscalatags_JsDom$TypedTag();
    const this$51 = $m_Lscalatags_JsDom$all$();
    const e$10 = urls.get(10);
    const array$12 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$51, e$10)];
    const $$x41 = $$x42.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$12));
    const this$54 = $m_Lscalatags_JsDom$all$();
    const $$x40 = this$54.td__Lscalatags_JsDom$TypedTag();
    const this$55 = $m_Lscalatags_JsDom$all$();
    const e$11 = urls.get(11);
    const array$13 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$55, e$11)];
    const $$x39 = $$x40.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$13));
    const this$58 = $m_Lscalatags_JsDom$all$();
    const $$x38 = this$58.td__Lscalatags_JsDom$TypedTag();
    const this$59 = $m_Lscalatags_JsDom$all$();
    const e$12 = urls.get(12);
    const array$14 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$59, e$12)];
    const $$x37 = $$x38.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$14));
    const this$62 = $m_Lscalatags_JsDom$all$();
    const $$x36 = this$62.td__Lscalatags_JsDom$TypedTag();
    const this$63 = $m_Lscalatags_JsDom$all$();
    const e$13 = urls.get(13);
    const array$15 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$63, e$13)];
    const $$x35 = $$x36.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$15));
    const this$66 = $m_Lscalatags_JsDom$all$();
    const $$x34 = this$66.td__Lscalatags_JsDom$TypedTag();
    const this$67 = $m_Lscalatags_JsDom$all$();
    const e$14 = urls.get(14);
    const array$16 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$67, e$14)];
    const array$17 = [$$x41, $$x39, $$x37, $$x35, $$x34.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$16))];
    const $$x33 = $$x43.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$17));
    const this$72 = $m_Lscalatags_JsDom$all$();
    const $$x32 = this$72.tr__Lscalatags_JsDom$TypedTag();
    const this$73 = $m_Lscalatags_JsDom$all$();
    const $$x31 = this$73.td__Lscalatags_JsDom$TypedTag();
    const this$74 = $m_Lscalatags_JsDom$all$();
    const e$15 = urls.get(15);
    const array$18 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$74, e$15)];
    const $$x30 = $$x31.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$18));
    const this$77 = $m_Lscalatags_JsDom$all$();
    const $$x29 = this$77.td__Lscalatags_JsDom$TypedTag();
    const this$78 = $m_Lscalatags_JsDom$all$();
    const e$16 = urls.get(16);
    const array$19 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$78, e$16)];
    const $$x28 = $$x29.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$19));
    const this$81 = $m_Lscalatags_JsDom$all$();
    const $$x27 = this$81.td__Lscalatags_JsDom$TypedTag();
    const this$82 = $m_Lscalatags_JsDom$all$();
    const e$17 = urls.get(17);
    const array$20 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$82, e$17)];
    const $$x26 = $$x27.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$20));
    const this$85 = $m_Lscalatags_JsDom$all$();
    const $$x25 = this$85.td__Lscalatags_JsDom$TypedTag();
    const this$86 = $m_Lscalatags_JsDom$all$();
    const e$18 = urls.get(18);
    const array$21 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$86, e$18)];
    const $$x24 = $$x25.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$21));
    const this$89 = $m_Lscalatags_JsDom$all$();
    const $$x23 = this$89.td__Lscalatags_JsDom$TypedTag();
    const this$90 = $m_Lscalatags_JsDom$all$();
    const e$19 = urls.get(19);
    const array$22 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$90, e$19)];
    const array$23 = [$$x30, $$x28, $$x26, $$x24, $$x23.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$22))];
    const $$x22 = $$x32.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$23));
    const this$95 = $m_Lscalatags_JsDom$all$();
    const $$x21 = this$95.tr__Lscalatags_JsDom$TypedTag();
    const this$96 = $m_Lscalatags_JsDom$all$();
    const $$x20 = this$96.td__Lscalatags_JsDom$TypedTag();
    const this$97 = $m_Lscalatags_JsDom$all$();
    const e$20 = urls.get(20);
    const array$24 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$97, e$20)];
    const $$x19 = $$x20.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$24));
    const this$100 = $m_Lscalatags_JsDom$all$();
    const $$x18 = this$100.td__Lscalatags_JsDom$TypedTag();
    const this$101 = $m_Lscalatags_JsDom$all$();
    const e$21 = urls.get(21);
    const array$25 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$101, e$21)];
    const $$x17 = $$x18.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$25));
    const this$104 = $m_Lscalatags_JsDom$all$();
    const $$x16 = this$104.td__Lscalatags_JsDom$TypedTag();
    const this$105 = $m_Lscalatags_JsDom$all$();
    const e$22 = urls.get(22);
    const array$26 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$105, e$22)];
    const $$x15 = $$x16.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$26));
    const this$108 = $m_Lscalatags_JsDom$all$();
    const $$x14 = this$108.td__Lscalatags_JsDom$TypedTag();
    const this$109 = $m_Lscalatags_JsDom$all$();
    const e$23 = urls.get(23);
    const array$27 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$109, e$23)];
    const $$x13 = $$x14.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$27));
    const this$112 = $m_Lscalatags_JsDom$all$();
    const $$x12 = this$112.td__Lscalatags_JsDom$TypedTag();
    const this$113 = $m_Lscalatags_JsDom$all$();
    const e$24 = urls.get(24);
    const array$28 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$113, e$24)];
    const array$29 = [$$x19, $$x17, $$x15, $$x13, $$x12.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$28))];
    const $$x11 = $$x21.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$29));
    const this$118 = $m_Lscalatags_JsDom$all$();
    const $$x10 = this$118.tr__Lscalatags_JsDom$TypedTag();
    const this$119 = $m_Lscalatags_JsDom$all$();
    const $$x9 = this$119.td__Lscalatags_JsDom$TypedTag();
    const this$120 = $m_Lscalatags_JsDom$all$();
    const e$25 = urls.get(25);
    const array$30 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$120, e$25)];
    const $$x8 = $$x9.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$30));
    const this$123 = $m_Lscalatags_JsDom$all$();
    const $$x7 = this$123.td__Lscalatags_JsDom$TypedTag();
    const this$124 = $m_Lscalatags_JsDom$all$();
    const e$26 = urls.get(26);
    const array$31 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$124, e$26)];
    const $$x6 = $$x7.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$31));
    const this$127 = $m_Lscalatags_JsDom$all$();
    const $$x5 = this$127.td__Lscalatags_JsDom$TypedTag();
    const this$128 = $m_Lscalatags_JsDom$all$();
    const e$27 = urls.get(27);
    const array$32 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$128, e$27)];
    const $$x4 = $$x5.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$32));
    const this$131 = $m_Lscalatags_JsDom$all$();
    const $$x3 = this$131.td__Lscalatags_JsDom$TypedTag();
    const this$132 = $m_Lscalatags_JsDom$all$();
    const e$28 = urls.get(28);
    const array$33 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$132, e$28)];
    const $$x2 = $$x3.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$33));
    const this$135 = $m_Lscalatags_JsDom$all$();
    const $$x1 = this$135.td__Lscalatags_JsDom$TypedTag();
    const this$136 = $m_Lscalatags_JsDom$all$();
    const e$29 = urls.get(29);
    const array$34 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$136, e$29)];
    const array$35 = [$$x8, $$x6, $$x4, $$x2, $$x1.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$34))];
    const array$36 = [$$x55, $$x44, $$x33, $$x22, $$x11, $$x10.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$35))];
    const array$37 = [$$x66.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$36))];
    return $$x67.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$37)).render__Lorg_scalajs_dom_raw_Element()
  };
  renderUser__LUser__Lorg_scalajs_dom_raw_HTMLDivElement__V(u, target) {
    const this$1 = $m_Lscalatags_JsDom$all$();
    const $$x1 = this$1.input__Lscalatags_JsDom$TypedTag();
    const array = [$m_Lscalatags_JsDom$all$().type__Lscalatags_generic_Attr().$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("button", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr), $m_Lscalatags_JsDom$all$().value__Lscalatags_generic_Attr().$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("Edit Pokemon", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr)];
    const editButton = $$x1.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array)).render__Lorg_scalajs_dom_raw_Element();
    editButton.onclick = ((arg1$2) => {
      const this$6 = $m_s_Console$();
      const this$7 = $as_Ljava_io_PrintStream(this$6.s_Console$__f_outVar.s_util_DynamicVariable__f_v);
      this$7.java$lang$JSConsoleBasedPrintStream$$printString__T__V("Editing\n")
    });
    target.appendChild(editButton);
    const xs = u.LUser__f_pokes;
    const b = new $c_scm_ArrayBuilder$ofRef($m_s_reflect_ClassTag$().apply__jl_Class__s_reflect_ClassTag($objectGetClass(xs).getComponentType__jl_Class()));
    let i = 0;
    const len = xs.u.length;
    while ((i < len)) {
      const index = i;
      const arg1 = xs.get(index);
      const x$1 = $as_LPokemon(arg1);
      if ((x$1.LPokemon__f_isInList !== false)) {
        b.$plus$eq__O__scm_ArrayBuilder$ofRef(arg1)
      };
      i = ((1 + i) | 0)
    };
    let pokemon = $asArrayOf_LPokemon(b.result__AO(), 1);
    let i$1 = 1;
    while (true) {
      const xs$1 = pokemon;
      if ((!(xs$1.u.length === 0))) {
        const this$14 = $m_Lscalatags_JsDom$all$();
        const $$x2 = this$14.p__Lscalatags_JsDom$TypedTag();
        $m_Lscalatags_JsDom$all$();
        const v = ("Box " + i$1);
        const array$1 = [new $c_Lscalatags_JsDom$StringFrag(v)];
        target.appendChild($$x2.apply__sc_Seq__Lscalatags_JsDom$TypedTag(new $c_sjs_js_WrappedArray(array$1)).render__Lorg_scalajs_dom_raw_Element());
        const this$27 = $m_Lscalatags_JsDom$all$();
        const xs$2 = pokemon;
        const y = xs$2.u.length;
        const hi = ((y > 30) ? 30 : y);
        const size = ((hi > 0) ? hi : 0);
        const componentType = $objectGetClass(xs$2).getComponentType__jl_Class();
        const result = $m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType, size);
        if ((size > 0)) {
          $m_s_Array$().copy__O__I__O__I__I__V(xs$2, 0, result, 0, size)
        };
        const e = this.makeTable__LUser__ALPokemon__Lorg_scalajs_dom_raw_HTMLTableElement(u, $asArrayOf_LPokemon(result, 1));
        target.appendChild(new $c_Lscalatags_LowPriorityImplicits$bindNode(this$27, e).Lscalatags_LowPriorityImplicits$bindNode__f_e);
        const xs$3 = pokemon;
        const until = xs$3.u.length;
        const x = ((until > 0) ? until : 0);
        const y$1 = xs$3.u.length;
        const hi$1 = ((x < y$1) ? x : y$1);
        const x$2 = (((-30) + hi$1) | 0);
        const size$1 = ((x$2 > 0) ? x$2 : 0);
        const componentType$1 = $objectGetClass(xs$3).getComponentType__jl_Class();
        const result$1 = $m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType$1, size$1);
        if ((size$1 > 0)) {
          $m_s_Array$().copy__O__I__O__I__I__V(xs$3, 30, result$1, 0, size$1)
        };
        pokemon = $asArrayOf_LPokemon(result$1, 1);
        i$1 = ((1 + i$1) | 0)
      } else {
        break
      }
    }
  };
  main__Lorg_scalajs_dom_raw_HTMLDivElement__V(target) {
    const this$2 = $m_s_Console$();
    const this$3 = $as_Ljava_io_PrintStream(this$2.s_Console$__f_outVar.s_util_DynamicVariable__f_v);
    this$3.java$lang$JSConsoleBasedPrintStream$$printString__T__V("Hi2\n");
    const me = $m_LUsers$().LUsers$__f_me;
    this.renderUser__LUser__Lorg_scalajs_dom_raw_HTMLDivElement__V(me, target)
  };
  $js$exported$meth$main__Lorg_scalajs_dom_raw_HTMLDivElement__O(target) {
    this.main__Lorg_scalajs_dom_raw_HTMLDivElement__V(target)
  };
  MainApp$$$anonfun$makeImgInputs$1__Lorg_scalajs_dom_raw_Event__LUser__I__Lorg_scalajs_dom_raw_HTMLInputElement__V(e, u$1, id$1, inputImage$1) {
    const index = u$1.findPokemon__I__I(id$1);
    const p = u$1.LUser__f_pokes;
    p.get(index).updateCaught__V();
    const this$1 = p.get(index);
    const c = this$1.LPokemon__f_isCaught;
    inputImage$1.style = $p_LMainApp$__getColour$1__Z__T(this, c);
    inputImage$1.height = "100";
    const x = u$1.printPokes__T();
    const this$3 = $m_s_Console$();
    const this$4 = $as_Ljava_io_PrintStream(this$3.s_Console$__f_outVar.s_util_DynamicVariable__f_v);
    this$4.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"))
  };
  "main"(arg) {
    const prep0 = arg;
    return this.$js$exported$meth$main__Lorg_scalajs_dom_raw_HTMLDivElement__O(prep0)
  };
}
const $d_LMainApp$ = new $TypeData().initClass({
  LMainApp$: 0
}, false, "MainApp$", {
  LMainApp$: 1,
  O: 1
});
$c_LMainApp$.prototype.$classData = $d_LMainApp$;
let $n_LMainApp$ = (void 0);
function $m_LMainApp$() {
  if ((!$n_LMainApp$)) {
    $n_LMainApp$ = new $c_LMainApp$()
  };
  return $n_LMainApp$
}
const $ct_LPokemon__I__ = (function($thiz, id) {
  $thiz.LPokemon__f_id = id;
  $thiz.LPokemon__f_isCaught = false;
  $thiz.LPokemon__f_isInList = true;
  return $thiz
});
class $c_LPokemon extends $c_O {
  constructor() {
    super();
    this.LPokemon__f_id = 0;
    this.LPokemon__f_isCaught = false;
    this.LPokemon__f_isInList = false
  };
  updateCaught__V() {
    this.LPokemon__f_isCaught = (!this.LPokemon__f_isCaught)
  };
}
function $as_LPokemon(obj) {
  return (((obj instanceof $c_LPokemon) || (obj === null)) ? obj : $throwClassCastException(obj, "Pokemon"))
}
function $isArrayOf_LPokemon(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.LPokemon)))
}
function $asArrayOf_LPokemon(obj, depth) {
  return (($isArrayOf_LPokemon(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "LPokemon;", depth))
}
const $d_LPokemon = new $TypeData().initClass({
  LPokemon: 0
}, false, "Pokemon", {
  LPokemon: 1,
  O: 1
});
$c_LPokemon.prototype.$classData = $d_LPokemon;
const $ct_LUser__ = (function($thiz) {
  const this$6 = new $c_sci_Range$Inclusive(1, 50, 1);
  const len = this$6.length__I();
  const result = $newArrayObject($d_I.getArrayOf(), [len]);
  $f_sc_TraversableOnce__copyToArray__O__I__V(this$6, result, 0);
  $thiz.LUser__f_ids = result;
  const xs = $thiz.LUser__f_ids;
  let elems = null;
  elems = [];
  let i = 0;
  const len$1 = xs.u.length;
  while ((i < len$1)) {
    const idx = i;
    const arg1 = xs.get(idx);
    const elem = $ct_LPokemon__I__(new $c_LPokemon(), arg1);
    elems.push(elem);
    i = ((1 + i) | 0)
  };
  $thiz.LUser__f_pokes = $makeNativeArrayWrapper($d_LPokemon.getArrayOf(), elems);
  return $thiz
});
class $c_LUser extends $c_O {
  constructor() {
    super();
    this.LUser__f_ids = null;
    this.LUser__f_pokes = null
  };
  findPokemon__I__I(id) {
    let index = 0;
    while ((this.LUser__f_pokes.get(index).LPokemon__f_id !== id)) {
      index = ((1 + index) | 0)
    };
    return index
  };
  printPokes__T() {
    let elem = null;
    elem = "";
    const xs = this.LUser__f_pokes;
    const b = new $c_scm_ArrayBuilder$ofRef($m_s_reflect_ClassTag$().apply__jl_Class__s_reflect_ClassTag($objectGetClass(xs).getComponentType__jl_Class()));
    let i = 0;
    const len = xs.u.length;
    while ((i < len)) {
      const index = i;
      const arg1 = xs.get(index);
      const x$2 = $as_LPokemon(arg1);
      if ((x$2.LPokemon__f_isInList !== false)) {
        b.$plus$eq__O__scm_ArrayBuilder$ofRef(arg1)
      };
      i = ((1 + i) | 0)
    };
    const xs$1 = b.result__AO();
    let i$1 = 0;
    const len$1 = xs$1.u.length;
    while ((i$1 < len$1)) {
      const index$1 = i$1;
      const arg1$1 = xs$1.get(index$1);
      const p = $as_LPokemon(arg1$1);
      const $$x1 = $as_T(elem);
      const this$9 = p.LPokemon__f_id;
      elem = ($$x1 + ("" + this$9));
      elem = ($as_T(elem) + ": ");
      const $$x2 = $as_T(elem);
      const this$11 = p.LPokemon__f_isCaught;
      elem = ($$x2 + ("" + this$11));
      elem = ($as_T(elem) + ", ");
      i$1 = ((1 + i$1) | 0)
    };
    return $as_T(elem)
  };
}
const $d_LUser = new $TypeData().initClass({
  LUser: 0
}, false, "User", {
  LUser: 1,
  O: 1
});
$c_LUser.prototype.$classData = $d_LUser;
class $c_LUsers$ extends $c_O {
  constructor() {
    super();
    this.LUsers$__f_masterUser = null;
    this.LUsers$__f_me = null;
    $n_LUsers$ = this;
    this.LUsers$__f_masterUser = new $c_LImmutableUser();
    this.LUsers$__f_me = $ct_LUser__(new $c_LUser())
  };
}
const $d_LUsers$ = new $TypeData().initClass({
  LUsers$: 0
}, false, "Users$", {
  LUsers$: 1,
  O: 1
});
$c_LUsers$.prototype.$classData = $d_LUsers$;
let $n_LUsers$ = (void 0);
function $m_LUsers$() {
  if ((!$n_LUsers$)) {
    $n_LUsers$ = new $c_LUsers$()
  };
  return $n_LUsers$
}
class $c_jl_Class extends $c_O {
  constructor(data0) {
    super();
    this.jl_Class__f_data = null;
    this.jl_Class__f_data = data0
  };
  toString__T() {
    return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T())
  };
  isAssignableFrom__jl_Class__Z(that) {
    return $uZ(this.jl_Class__f_data.isAssignableFrom(that.jl_Class__f_data))
  };
  isInterface__Z() {
    return $uZ(this.jl_Class__f_data.isInterface)
  };
  isArray__Z() {
    return $uZ(this.jl_Class__f_data.isArrayClass)
  };
  isPrimitive__Z() {
    return $uZ(this.jl_Class__f_data.isPrimitive)
  };
  getName__T() {
    return $as_T(this.jl_Class__f_data.name)
  };
  getComponentType__jl_Class() {
    return $as_jl_Class(this.jl_Class__f_data.getComponentType())
  };
  newArrayOfThisClass__O__O(dimensions) {
    return this.jl_Class__f_data.newArrayOfThisClass(dimensions)
  };
}
function $as_jl_Class(obj) {
  return (((obj instanceof $c_jl_Class) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Class"))
}
function $isArrayOf_jl_Class(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Class)))
}
function $asArrayOf_jl_Class(obj, depth) {
  return (($isArrayOf_jl_Class(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Class;", depth))
}
const $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
class $c_jl_FloatingPointBits$ extends $c_O {
  constructor() {
    super();
    this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
    this.jl_FloatingPointBits$__f_arrayBuffer = null;
    this.jl_FloatingPointBits$__f_int32Array = null;
    this.jl_FloatingPointBits$__f_float32Array = null;
    this.jl_FloatingPointBits$__f_float64Array = null;
    this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
    this.jl_FloatingPointBits$__f_highOffset = 0;
    this.jl_FloatingPointBits$__f_lowOffset = 0;
    $n_jl_FloatingPointBits$ = this;
    this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
    this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
    this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
    this.jl_FloatingPointBits$__f_float32Array = new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
    this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
    this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
    this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ($uB(new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0]) === 1);
    this.jl_FloatingPointBits$__f_highOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 0 : 1);
    this.jl_FloatingPointBits$__f_lowOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 1 : 0)
  };
  numberHashCode__D__I(value) {
    const iv = $uI((value | 0));
    if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
      return iv
    } else {
      const t = this.doubleToLongBits__D__J(value);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      return (lo ^ hi)
    }
  };
  doubleToLongBits__D__J(value) {
    this.jl_FloatingPointBits$__f_float64Array[0] = value;
    const value$1 = $uI(this.jl_FloatingPointBits$__f_int32Array[this.jl_FloatingPointBits$__f_highOffset]);
    const value$2 = $uI(this.jl_FloatingPointBits$__f_int32Array[this.jl_FloatingPointBits$__f_lowOffset]);
    return new $c_RTLong(value$2, value$1)
  };
}
const $d_jl_FloatingPointBits$ = new $TypeData().initClass({
  jl_FloatingPointBits$: 0
}, false, "java.lang.FloatingPointBits$", {
  jl_FloatingPointBits$: 1,
  O: 1
});
$c_jl_FloatingPointBits$.prototype.$classData = $d_jl_FloatingPointBits$;
let $n_jl_FloatingPointBits$ = (void 0);
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$()
  };
  return $n_jl_FloatingPointBits$
}
class $c_jl_System$Streams$ extends $c_O {
  constructor() {
    super();
    this.jl_System$Streams$__f_out = null;
    this.jl_System$Streams$__f_err = null;
    this.jl_System$Streams$__f_in = null;
    $n_jl_System$Streams$ = this;
    this.jl_System$Streams$__f_out = new $c_jl_JSConsoleBasedPrintStream(false);
    this.jl_System$Streams$__f_err = new $c_jl_JSConsoleBasedPrintStream(true);
    this.jl_System$Streams$__f_in = null
  };
}
const $d_jl_System$Streams$ = new $TypeData().initClass({
  jl_System$Streams$: 0
}, false, "java.lang.System$Streams$", {
  jl_System$Streams$: 1,
  O: 1
});
$c_jl_System$Streams$.prototype.$classData = $d_jl_System$Streams$;
let $n_jl_System$Streams$ = (void 0);
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$()
  };
  return $n_jl_System$Streams$
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined"
}
function $as_jl_Void(obj) {
  return (((obj === (void 0)) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Void"))
}
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Void)))
}
function $asArrayOf_jl_Void(obj, depth) {
  return (($isArrayOf_jl_Void(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Void;", depth))
}
const $d_jl_Void = new $TypeData().initClass({
  jl_Void: 0
}, false, "java.lang.Void", {
  jl_Void: 1,
  O: 1
}, (void 0), (void 0), ((x) => (x === (void 0))));
class $c_jl_reflect_Array$ extends $c_O {
  newInstance__jl_Class__I__O(componentType, length) {
    return componentType.newArrayOfThisClass__O__O([length])
  };
}
const $d_jl_reflect_Array$ = new $TypeData().initClass({
  jl_reflect_Array$: 0
}, false, "java.lang.reflect.Array$", {
  jl_reflect_Array$: 1,
  O: 1
});
$c_jl_reflect_Array$.prototype.$classData = $d_jl_reflect_Array$;
let $n_jl_reflect_Array$ = (void 0);
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$()
  };
  return $n_jl_reflect_Array$
}
class $c_ju_regex_Matcher$ extends $c_O {
  java$util$regex$Matcher$$getGroupCount__sjs_js_RegExp$ExecResult__ju_regex_Pattern__I(lastMatch, pattern) {
    return ((lastMatch !== null) ? (((-1) + $uI(lastMatch.length)) | 0) : pattern.groupCount__I())
  };
}
const $d_ju_regex_Matcher$ = new $TypeData().initClass({
  ju_regex_Matcher$: 0
}, false, "java.util.regex.Matcher$", {
  ju_regex_Matcher$: 1,
  O: 1
});
$c_ju_regex_Matcher$.prototype.$classData = $d_ju_regex_Matcher$;
let $n_ju_regex_Matcher$ = (void 0);
function $m_ju_regex_Matcher$() {
  if ((!$n_ju_regex_Matcher$)) {
    $n_ju_regex_Matcher$ = new $c_ju_regex_Matcher$()
  };
  return $n_ju_regex_Matcher$
}
const $p_Lorg_scalajs_dom_package$__window$lzycompute__Lorg_scalajs_dom_raw_Window = (function($thiz) {
  if (((33554432 & $thiz.Lorg_scalajs_dom_package$__f_bitmap$0) === 0)) {
    $thiz.Lorg_scalajs_dom_package$__f_window = window;
    $thiz.Lorg_scalajs_dom_package$__f_bitmap$0 = (33554432 | $thiz.Lorg_scalajs_dom_package$__f_bitmap$0)
  };
  return $thiz.Lorg_scalajs_dom_package$__f_window
});
const $p_Lorg_scalajs_dom_package$__document$lzycompute__Lorg_scalajs_dom_raw_HTMLDocument = (function($thiz) {
  if (((67108864 & $thiz.Lorg_scalajs_dom_package$__f_bitmap$0) === 0)) {
    $thiz.Lorg_scalajs_dom_package$__f_document = $thiz.window__Lorg_scalajs_dom_raw_Window().document;
    $thiz.Lorg_scalajs_dom_package$__f_bitmap$0 = (67108864 | $thiz.Lorg_scalajs_dom_package$__f_bitmap$0)
  };
  return $thiz.Lorg_scalajs_dom_package$__f_document
});
class $c_Lorg_scalajs_dom_package$ extends $c_O {
  constructor() {
    super();
    this.Lorg_scalajs_dom_package$__f_ApplicationCache = null;
    this.Lorg_scalajs_dom_package$__f_Blob = null;
    this.Lorg_scalajs_dom_package$__f_BlobPropertyBag = null;
    this.Lorg_scalajs_dom_package$__f_DOMException = null;
    this.Lorg_scalajs_dom_package$__f_Event = null;
    this.Lorg_scalajs_dom_package$__f_EventException = null;
    this.Lorg_scalajs_dom_package$__f_EventSource = null;
    this.Lorg_scalajs_dom_package$__f_FileReader = null;
    this.Lorg_scalajs_dom_package$__f_FormData = null;
    this.Lorg_scalajs_dom_package$__f_KeyboardEvent = null;
    this.Lorg_scalajs_dom_package$__f_MediaError = null;
    this.Lorg_scalajs_dom_package$__f_MutationObserverInit = null;
    this.Lorg_scalajs_dom_package$__f_Node = null;
    this.Lorg_scalajs_dom_package$__f_NodeFilter = null;
    this.Lorg_scalajs_dom_package$__f_PerformanceNavigation = null;
    this.Lorg_scalajs_dom_package$__f_PositionError = null;
    this.Lorg_scalajs_dom_package$__f_Range = null;
    this.Lorg_scalajs_dom_package$__f_TextEvent = null;
    this.Lorg_scalajs_dom_package$__f_TextTrack = null;
    this.Lorg_scalajs_dom_package$__f_URL = null;
    this.Lorg_scalajs_dom_package$__f_VisibilityState = null;
    this.Lorg_scalajs_dom_package$__f_WebSocket = null;
    this.Lorg_scalajs_dom_package$__f_WheelEvent = null;
    this.Lorg_scalajs_dom_package$__f_XMLHttpRequest = null;
    this.Lorg_scalajs_dom_package$__f_XPathResult = null;
    this.Lorg_scalajs_dom_package$__f_window = null;
    this.Lorg_scalajs_dom_package$__f_document = null;
    this.Lorg_scalajs_dom_package$__f_console = null;
    this.Lorg_scalajs_dom_package$__f_bitmap$0 = 0
  };
  window__Lorg_scalajs_dom_raw_Window() {
    return (((33554432 & this.Lorg_scalajs_dom_package$__f_bitmap$0) === 0) ? $p_Lorg_scalajs_dom_package$__window$lzycompute__Lorg_scalajs_dom_raw_Window(this) : this.Lorg_scalajs_dom_package$__f_window)
  };
  document__Lorg_scalajs_dom_raw_HTMLDocument() {
    return (((67108864 & this.Lorg_scalajs_dom_package$__f_bitmap$0) === 0) ? $p_Lorg_scalajs_dom_package$__document$lzycompute__Lorg_scalajs_dom_raw_HTMLDocument(this) : this.Lorg_scalajs_dom_package$__f_document)
  };
}
const $d_Lorg_scalajs_dom_package$ = new $TypeData().initClass({
  Lorg_scalajs_dom_package$: 0
}, false, "org.scalajs.dom.package$", {
  Lorg_scalajs_dom_package$: 1,
  O: 1
});
$c_Lorg_scalajs_dom_package$.prototype.$classData = $d_Lorg_scalajs_dom_package$;
let $n_Lorg_scalajs_dom_package$ = (void 0);
function $m_Lorg_scalajs_dom_package$() {
  if ((!$n_Lorg_scalajs_dom_package$)) {
    $n_Lorg_scalajs_dom_package$ = new $c_Lorg_scalajs_dom_package$()
  };
  return $n_Lorg_scalajs_dom_package$
}
class $c_s_DeprecatedConsole extends $c_O {
}
class $c_s_FallbackArrayBuilding extends $c_O {
}
class $c_s_Predef$any2stringadd$ extends $c_O {
  $plus$extension__O__T__T(this$, other) {
    return (("" + this$) + other)
  };
}
const $d_s_Predef$any2stringadd$ = new $TypeData().initClass({
  s_Predef$any2stringadd$: 0
}, false, "scala.Predef$any2stringadd$", {
  s_Predef$any2stringadd$: 1,
  O: 1
});
$c_s_Predef$any2stringadd$.prototype.$classData = $d_s_Predef$any2stringadd$;
let $n_s_Predef$any2stringadd$ = (void 0);
function $m_s_Predef$any2stringadd$() {
  if ((!$n_s_Predef$any2stringadd$)) {
    $n_s_Predef$any2stringadd$ = new $c_s_Predef$any2stringadd$()
  };
  return $n_s_Predef$any2stringadd$
}
class $c_sc_Iterator$ extends $c_O {
  constructor() {
    super();
    this.sc_Iterator$__f_empty = null;
    $n_sc_Iterator$ = this;
    this.sc_Iterator$__f_empty = new $c_sc_Iterator$$anon$2()
  };
}
const $d_sc_Iterator$ = new $TypeData().initClass({
  sc_Iterator$: 0
}, false, "scala.collection.Iterator$", {
  sc_Iterator$: 1,
  O: 1
});
$c_sc_Iterator$.prototype.$classData = $d_sc_Iterator$;
let $n_sc_Iterator$ = (void 0);
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$()
  };
  return $n_sc_Iterator$
}
class $c_scg_GenericCompanion extends $c_O {
}
class $c_sci_StringOps$ extends $c_O {
  equals$extension__T__O__Z(this$, x$1) {
    if ((x$1 instanceof $c_sci_StringOps)) {
      const StringOps$1 = ((x$1 === null) ? null : $as_sci_StringOps(x$1).sci_StringOps__f_repr);
      return (this$ === StringOps$1)
    } else {
      return false
    }
  };
}
const $d_sci_StringOps$ = new $TypeData().initClass({
  sci_StringOps$: 0
}, false, "scala.collection.immutable.StringOps$", {
  sci_StringOps$: 1,
  O: 1
});
$c_sci_StringOps$.prototype.$classData = $d_sci_StringOps$;
let $n_sci_StringOps$ = (void 0);
function $m_sci_StringOps$() {
  if ((!$n_sci_StringOps$)) {
    $n_sci_StringOps$ = new $c_sci_StringOps$()
  };
  return $n_sci_StringOps$
}
class $c_sr_BoxesRunTime$ extends $c_O {
  equals__O__O__Z(x, y) {
    if ((x === y)) {
      return true
    } else if ($is_jl_Number(x)) {
      const x2 = $as_jl_Number(x);
      return this.equalsNumObject__jl_Number__O__Z(x2, y)
    } else if ((x instanceof $Char)) {
      const x3 = $as_jl_Character(x);
      return this.equalsCharObject__jl_Character__O__Z(x3, y)
    } else {
      return ((x === null) ? (y === null) : $dp_equals__O__Z(x, y))
    }
  };
  equalsNumObject__jl_Number__O__Z(xn, y) {
    if ($is_jl_Number(y)) {
      const x2 = $as_jl_Number(y);
      return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2)
    } else if ((y instanceof $Char)) {
      const x3 = $as_jl_Character(y);
      if (((typeof xn) === "number")) {
        const x2$1 = $uD(xn);
        return (x2$1 === $uC(x3))
      } else if ((xn instanceof $c_RTLong)) {
        const t = $uJ(xn);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        const value = $uC(x3);
        const hi$1 = (value >> 31);
        return ((lo === value) && (hi === hi$1))
      } else {
        return ((xn === null) ? (x3 === null) : $dp_equals__O__Z(xn, x3))
      }
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y))
    }
  };
  equalsNumNum__jl_Number__jl_Number__Z(xn, yn) {
    if (((typeof xn) === "number")) {
      const x2 = $uD(xn);
      if (((typeof yn) === "number")) {
        const x2$2 = $uD(yn);
        return (x2 === x2$2)
      } else if ((yn instanceof $c_RTLong)) {
        const t = $uJ(yn);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi))
      } else if ((yn instanceof $c_s_math_ScalaNumber)) {
        const x4 = $as_s_math_ScalaNumber(yn);
        return x4.equals__O__Z(x2)
      } else {
        return false
      }
    } else if ((xn instanceof $c_RTLong)) {
      const t$1 = $uJ(xn);
      const lo$1 = t$1.RTLong__f_lo;
      const hi$1 = t$1.RTLong__f_hi;
      if ((yn instanceof $c_RTLong)) {
        const t$2 = $uJ(yn);
        const lo$2 = t$2.RTLong__f_lo;
        const hi$2 = t$2.RTLong__f_hi;
        return ((lo$1 === lo$2) && (hi$1 === hi$2))
      } else if (((typeof yn) === "number")) {
        const x3$3 = $uD(yn);
        return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3)
      } else if ((yn instanceof $c_s_math_ScalaNumber)) {
        const x4$2 = $as_s_math_ScalaNumber(yn);
        return x4$2.equals__O__Z(new $c_RTLong(lo$1, hi$1))
      } else {
        return false
      }
    } else {
      return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn))
    }
  };
  equalsCharObject__jl_Character__O__Z(xc, y) {
    if ((y instanceof $Char)) {
      const x2 = $as_jl_Character(y);
      return ($uC(xc) === $uC(x2))
    } else if ($is_jl_Number(y)) {
      const x3 = $as_jl_Number(y);
      if (((typeof x3) === "number")) {
        const x2$1 = $uD(x3);
        return (x2$1 === $uC(xc))
      } else if ((x3 instanceof $c_RTLong)) {
        const t = $uJ(x3);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        const value = $uC(xc);
        const hi$1 = (value >> 31);
        return ((lo === value) && (hi === hi$1))
      } else {
        return ((x3 === null) ? (xc === null) : $dp_equals__O__Z(x3, xc))
      }
    } else {
      return ((xc === null) && (y === null))
    }
  };
}
const $d_sr_BoxesRunTime$ = new $TypeData().initClass({
  sr_BoxesRunTime$: 0
}, false, "scala.runtime.BoxesRunTime$", {
  sr_BoxesRunTime$: 1,
  O: 1
});
$c_sr_BoxesRunTime$.prototype.$classData = $d_sr_BoxesRunTime$;
let $n_sr_BoxesRunTime$ = (void 0);
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$()
  };
  return $n_sr_BoxesRunTime$
}
const $d_sr_Null$ = new $TypeData().initClass({
  sr_Null$: 0
}, false, "scala.runtime.Null$", {
  sr_Null$: 1,
  O: 1
});
class $c_sr_ScalaRunTime$ extends $c_O {
  array_apply__O__I__O(xs, idx) {
    if ($isArrayOf_O(xs, 1)) {
      const x2 = $asArrayOf_O(xs, 1);
      return x2.get(idx)
    } else if ($isArrayOf_I(xs, 1)) {
      const x3 = $asArrayOf_I(xs, 1);
      return x3.get(idx)
    } else if ($isArrayOf_D(xs, 1)) {
      const x4 = $asArrayOf_D(xs, 1);
      return x4.get(idx)
    } else if ($isArrayOf_J(xs, 1)) {
      const x5 = $asArrayOf_J(xs, 1);
      return x5.get(idx)
    } else if ($isArrayOf_F(xs, 1)) {
      const x6 = $asArrayOf_F(xs, 1);
      return x6.get(idx)
    } else if ($isArrayOf_C(xs, 1)) {
      const x7 = $asArrayOf_C(xs, 1);
      return $bC(x7.get(idx))
    } else if ($isArrayOf_B(xs, 1)) {
      const x8 = $asArrayOf_B(xs, 1);
      return x8.get(idx)
    } else if ($isArrayOf_S(xs, 1)) {
      const x9 = $asArrayOf_S(xs, 1);
      return x9.get(idx)
    } else if ($isArrayOf_Z(xs, 1)) {
      const x10 = $asArrayOf_Z(xs, 1);
      return x10.get(idx)
    } else if ($isArrayOf_jl_Void(xs, 1)) {
      const x11 = $asArrayOf_jl_Void(xs, 1);
      return x11.get(idx)
    } else if ((xs === null)) {
      throw new $c_jl_NullPointerException()
    } else {
      throw new $c_s_MatchError(xs)
    }
  };
  array_update__O__I__O__V(xs, idx, value) {
    if ($isArrayOf_O(xs, 1)) {
      const x2 = $asArrayOf_O(xs, 1);
      x2.set(idx, value)
    } else if ($isArrayOf_I(xs, 1)) {
      const x3 = $asArrayOf_I(xs, 1);
      x3.set(idx, $uI(value))
    } else if ($isArrayOf_D(xs, 1)) {
      const x4 = $asArrayOf_D(xs, 1);
      x4.set(idx, $uD(value))
    } else if ($isArrayOf_J(xs, 1)) {
      const x5 = $asArrayOf_J(xs, 1);
      x5.set(idx, $uJ(value))
    } else if ($isArrayOf_F(xs, 1)) {
      const x6 = $asArrayOf_F(xs, 1);
      x6.set(idx, $uF(value))
    } else if ($isArrayOf_C(xs, 1)) {
      const x7 = $asArrayOf_C(xs, 1);
      x7.set(idx, $uC(value))
    } else if ($isArrayOf_B(xs, 1)) {
      const x8 = $asArrayOf_B(xs, 1);
      x8.set(idx, $uB(value))
    } else if ($isArrayOf_S(xs, 1)) {
      const x9 = $asArrayOf_S(xs, 1);
      x9.set(idx, $uS(value))
    } else if ($isArrayOf_Z(xs, 1)) {
      const x10 = $asArrayOf_Z(xs, 1);
      x10.set(idx, $uZ(value))
    } else if ($isArrayOf_jl_Void(xs, 1)) {
      const x11 = $asArrayOf_jl_Void(xs, 1);
      x11.set(idx, (void 0))
    } else if ((xs === null)) {
      throw new $c_jl_NullPointerException()
    } else {
      throw new $c_s_MatchError(xs)
    }
  };
  array_length__O__I(xs) {
    if ($isArrayOf_O(xs, 1)) {
      const x2 = $asArrayOf_O(xs, 1);
      return x2.u.length
    } else if ($isArrayOf_I(xs, 1)) {
      const x3 = $asArrayOf_I(xs, 1);
      return x3.u.length
    } else if ($isArrayOf_D(xs, 1)) {
      const x4 = $asArrayOf_D(xs, 1);
      return x4.u.length
    } else if ($isArrayOf_J(xs, 1)) {
      const x5 = $asArrayOf_J(xs, 1);
      return x5.u.length
    } else if ($isArrayOf_F(xs, 1)) {
      const x6 = $asArrayOf_F(xs, 1);
      return x6.u.length
    } else if ($isArrayOf_C(xs, 1)) {
      const x7 = $asArrayOf_C(xs, 1);
      return x7.u.length
    } else if ($isArrayOf_B(xs, 1)) {
      const x8 = $asArrayOf_B(xs, 1);
      return x8.u.length
    } else if ($isArrayOf_S(xs, 1)) {
      const x9 = $asArrayOf_S(xs, 1);
      return x9.u.length
    } else if ($isArrayOf_Z(xs, 1)) {
      const x10 = $asArrayOf_Z(xs, 1);
      return x10.u.length
    } else if ($isArrayOf_jl_Void(xs, 1)) {
      const x11 = $asArrayOf_jl_Void(xs, 1);
      return x11.u.length
    } else if ((xs === null)) {
      throw new $c_jl_NullPointerException()
    } else {
      throw new $c_s_MatchError(xs)
    }
  };
  _toString__s_Product__T(x) {
    const this$1 = x.productIterator__sc_Iterator();
    const start = (x.productPrefix__T() + "(");
    return $f_sc_TraversableOnce__mkString__T__T__T__T(this$1, start, ",", ")")
  };
}
const $d_sr_ScalaRunTime$ = new $TypeData().initClass({
  sr_ScalaRunTime$: 0
}, false, "scala.runtime.ScalaRunTime$", {
  sr_ScalaRunTime$: 1,
  O: 1
});
$c_sr_ScalaRunTime$.prototype.$classData = $d_sr_ScalaRunTime$;
let $n_sr_ScalaRunTime$ = (void 0);
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$()
  };
  return $n_sr_ScalaRunTime$
}
class $c_sr_Statics$ extends $c_O {
  mix__I__I__I(hash, data) {
    let h = this.mixLast__I__I__I(hash, data);
    const i = h;
    h = ((i << 13) | ((i >>> 19) | 0));
    return (((-430675100) + $imul(5, h)) | 0)
  };
  mixLast__I__I__I(hash, data) {
    let k = data;
    k = $imul((-862048943), k);
    const i = k;
    k = ((i << 15) | ((i >>> 17) | 0));
    k = $imul(461845907, k);
    return (hash ^ k)
  };
  finalizeHash__I__I__I(hash, length) {
    return this.avalanche__I__I((hash ^ length))
  };
  avalanche__I__I(h0) {
    let h = h0;
    h = (h ^ ((h >>> 16) | 0));
    h = $imul((-2048144789), h);
    h = (h ^ ((h >>> 13) | 0));
    h = $imul((-1028477387), h);
    h = (h ^ ((h >>> 16) | 0));
    return h
  };
  longHash__J__I(lv) {
    const lo = lv.RTLong__f_lo;
    const lo$1 = lv.RTLong__f_hi;
    return ((lo$1 === (lo >> 31)) ? lo : (lo ^ lo$1))
  };
  doubleHash__D__I(dv) {
    const iv = $doubleToInt(dv);
    if ((iv === dv)) {
      return iv
    } else {
      const this$1 = $m_RTLong$();
      const lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
      const hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv))
    }
  };
  anyHash__O__I(x) {
    if ((x === null)) {
      return 0
    } else if (((typeof x) === "number")) {
      const x3 = $uD(x);
      return this.doubleHash__D__I(x3)
    } else if ((x instanceof $c_RTLong)) {
      const t = $uJ(x);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      return this.longHash__J__I(new $c_RTLong(lo, hi))
    } else {
      return $dp_hashCode__I(x)
    }
  };
}
const $d_sr_Statics$ = new $TypeData().initClass({
  sr_Statics$: 0
}, false, "scala.runtime.Statics$", {
  sr_Statics$: 1,
  O: 1
});
$c_sr_Statics$.prototype.$classData = $d_sr_Statics$;
let $n_sr_Statics$ = (void 0);
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$()
  };
  return $n_sr_Statics$
}
class $c_sjsr_package$ extends $c_O {
  wrapJavaScriptException__O__jl_Throwable(e) {
    if ((e instanceof $c_jl_Throwable)) {
      const x2 = $as_jl_Throwable(e);
      return x2
    } else {
      return new $c_sjs_js_JavaScriptException(e)
    }
  };
  unwrapJavaScriptException__jl_Throwable__O(th) {
    if ((th instanceof $c_sjs_js_JavaScriptException)) {
      const x2 = $as_sjs_js_JavaScriptException(th);
      const e = x2.sjs_js_JavaScriptException__f_exception;
      return e
    } else {
      return th
    }
  };
}
const $d_sjsr_package$ = new $TypeData().initClass({
  sjsr_package$: 0
}, false, "scala.scalajs.runtime.package$", {
  sjsr_package$: 1,
  O: 1
});
$c_sjsr_package$.prototype.$classData = $d_sjsr_package$;
let $n_sjsr_package$ = (void 0);
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$()
  };
  return $n_sjsr_package$
}
class $c_s_util_DynamicVariable extends $c_O {
  constructor(init) {
    super();
    this.s_util_DynamicVariable__f_v = null;
    this.s_util_DynamicVariable__f_v = init
  };
  toString__T() {
    return (("DynamicVariable(" + this.s_util_DynamicVariable__f_v) + ")")
  };
}
const $d_s_util_DynamicVariable = new $TypeData().initClass({
  s_util_DynamicVariable: 0
}, false, "scala.util.DynamicVariable", {
  s_util_DynamicVariable: 1,
  O: 1
});
$c_s_util_DynamicVariable.prototype.$classData = $d_s_util_DynamicVariable;
const $p_s_util_hashing_MurmurHash3__avalanche__I__I = (function($thiz, hash) {
  let h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = $imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = $imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h
});
const $p_s_util_hashing_MurmurHash3__hasher$lzycompute$1__sr_LazyRef__s_util_hashing_MurmurHash3$hasher$1$ = (function($thiz, hasher$module$1) {
  if ((hasher$module$1 === null)) {
    throw new $c_jl_NullPointerException()
  };
  return (hasher$module$1.sr_LazyRef__f__initialized ? $as_s_util_hashing_MurmurHash3$hasher$1$(hasher$module$1.sr_LazyRef__f__value) : $as_s_util_hashing_MurmurHash3$hasher$1$(hasher$module$1.initialize__O__O(new $c_s_util_hashing_MurmurHash3$hasher$1$($thiz))))
});
const $p_s_util_hashing_MurmurHash3__hasher$2__sr_LazyRef__s_util_hashing_MurmurHash3$hasher$1$ = (function($thiz, hasher$module$1) {
  return (hasher$module$1.sr_LazyRef__f__initialized ? $as_s_util_hashing_MurmurHash3$hasher$1$(hasher$module$1.sr_LazyRef__f__value) : $p_s_util_hashing_MurmurHash3__hasher$lzycompute$1__sr_LazyRef__s_util_hashing_MurmurHash3$hasher$1$($thiz, hasher$module$1))
});
const $p_s_util_hashing_MurmurHash3__hasher$lzycompute$2__sr_LazyRef__I__s_util_hashing_MurmurHash3$hasher$3$ = (function($thiz, hasher$module$2, seed$1) {
  if ((hasher$module$2 === null)) {
    throw new $c_jl_NullPointerException()
  };
  return (hasher$module$2.sr_LazyRef__f__initialized ? $as_s_util_hashing_MurmurHash3$hasher$3$(hasher$module$2.sr_LazyRef__f__value) : $as_s_util_hashing_MurmurHash3$hasher$3$(hasher$module$2.initialize__O__O(new $c_s_util_hashing_MurmurHash3$hasher$3$($thiz, seed$1))))
});
const $p_s_util_hashing_MurmurHash3__hasher$4__sr_LazyRef__I__s_util_hashing_MurmurHash3$hasher$3$ = (function($thiz, hasher$module$2, seed$1) {
  return (hasher$module$2.sr_LazyRef__f__initialized ? $as_s_util_hashing_MurmurHash3$hasher$3$(hasher$module$2.sr_LazyRef__f__value) : $p_s_util_hashing_MurmurHash3__hasher$lzycompute$2__sr_LazyRef__I__s_util_hashing_MurmurHash3$hasher$3$($thiz, hasher$module$2, seed$1))
});
class $c_s_util_hashing_MurmurHash3 extends $c_O {
  mix__I__I__I(hash, data) {
    let h = this.mixLast__I__I__I(hash, data);
    const i = h;
    h = ((i << 13) | ((i >>> 19) | 0));
    return (((-430675100) + $imul(5, h)) | 0)
  };
  mixLast__I__I__I(hash, data) {
    let k = data;
    k = $imul((-862048943), k);
    const i = k;
    k = ((i << 15) | ((i >>> 17) | 0));
    k = $imul(461845907, k);
    return (hash ^ k)
  };
  finalizeHash__I__I__I(hash, length) {
    return $p_s_util_hashing_MurmurHash3__avalanche__I__I(this, (hash ^ length))
  };
  productHash__s_Product__I__I(x, seed) {
    const arr = x.productArity__I();
    if ((arr === 0)) {
      return $f_T__hashCode__I(x.productPrefix__T())
    } else {
      let h = seed;
      let i = 0;
      while ((i < arr)) {
        const $$x1 = h;
        const x$1 = x.productElement__I__O(i);
        h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
        i = ((1 + i) | 0)
      };
      return this.finalizeHash__I__I__I(h, arr)
    }
  };
  unorderedHash__sc_TraversableOnce__I__I(xs, seed) {
    if (xs.isEmpty__Z()) {
      let h = seed;
      h = this.mix__I__I__I(h, 0);
      h = this.mix__I__I__I(h, 0);
      h = this.mixLast__I__I__I(h, 1);
      return this.finalizeHash__I__I__I(h, 0)
    } else {
      const hasher$module = new $c_sr_LazyRef();
      xs.foreach__F1__V($p_s_util_hashing_MurmurHash3__hasher$2__sr_LazyRef__s_util_hashing_MurmurHash3$hasher$1$(this, hasher$module));
      let h$2 = seed;
      h$2 = this.mix__I__I__I(h$2, $p_s_util_hashing_MurmurHash3__hasher$2__sr_LazyRef__s_util_hashing_MurmurHash3$hasher$1$(this, hasher$module).s_util_hashing_MurmurHash3$hasher$1$__f_a);
      h$2 = this.mix__I__I__I(h$2, $p_s_util_hashing_MurmurHash3__hasher$2__sr_LazyRef__s_util_hashing_MurmurHash3$hasher$1$(this, hasher$module).s_util_hashing_MurmurHash3$hasher$1$__f_b);
      h$2 = this.mixLast__I__I__I(h$2, $p_s_util_hashing_MurmurHash3__hasher$2__sr_LazyRef__s_util_hashing_MurmurHash3$hasher$1$(this, hasher$module).s_util_hashing_MurmurHash3$hasher$1$__f_c);
      return this.finalizeHash__I__I__I(h$2, $p_s_util_hashing_MurmurHash3__hasher$2__sr_LazyRef__s_util_hashing_MurmurHash3$hasher$1$(this, hasher$module).s_util_hashing_MurmurHash3$hasher$1$__f_n)
    }
  };
  orderedHash__sc_TraversableOnce__I__I(xs, seed) {
    if (xs.isEmpty__Z()) {
      return this.finalizeHash__I__I__I(seed, 0)
    } else {
      const hasher$module = new $c_sr_LazyRef();
      xs.foreach__F1__V($p_s_util_hashing_MurmurHash3__hasher$4__sr_LazyRef__I__s_util_hashing_MurmurHash3$hasher$3$(this, hasher$module, seed));
      return this.finalizeHash__I__I__I($p_s_util_hashing_MurmurHash3__hasher$4__sr_LazyRef__I__s_util_hashing_MurmurHash3$hasher$3$(this, hasher$module, seed).s_util_hashing_MurmurHash3$hasher$3$__f_h, $p_s_util_hashing_MurmurHash3__hasher$4__sr_LazyRef__I__s_util_hashing_MurmurHash3$hasher$3$(this, hasher$module, seed).s_util_hashing_MurmurHash3$hasher$3$__f_n)
    }
  };
  listHash__sci_List__I__I(xs, seed) {
    let n = 0;
    let h = seed;
    let elems = xs;
    while ((!elems.isEmpty__Z())) {
      const head = elems.head__O();
      const this$1 = elems;
      const tail = this$1.tail__sci_List();
      h = this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(head));
      n = ((1 + n) | 0);
      elems = tail
    };
    return this.finalizeHash__I__I__I(h, n)
  };
}
class $c_Lscalatags_Escaping$ extends $c_O {
  constructor() {
    super();
    this.Lscalatags_Escaping$__f_tagRegex = null;
    $n_Lscalatags_Escaping$ = this;
    const this$2 = new $c_sci_StringOps("^[a-z][:\\w0-9-]*$");
    const groupNames = $m_sci_Nil$();
    const this$ = this$2.sci_StringOps__f_repr;
    this.Lscalatags_Escaping$__f_tagRegex = $ct_s_util_matching_Regex__T__sc_Seq__(new $c_s_util_matching_Regex(), this$, groupNames)
  };
  validTag__T__Z(s) {
    const this$1 = this.Lscalatags_Escaping$__f_tagRegex.unapplySeq__jl_CharSequence__s_Option(s);
    return (!this$1.isEmpty__Z())
  };
  validAttrName__T__Z(s) {
    const len = $uI(s.length);
    if ((len === 0)) {
      return false
    };
    const sc = (65535 & $uI(s.charCodeAt(0)));
    const startCharValid = ((((sc >= 97) && (sc <= 122)) || ((sc >= 65) && (sc <= 90))) || (sc === 58));
    if ((!startCharValid)) {
      return false
    };
    let pos = 1;
    while ((pos < len)) {
      const index = pos;
      const c = (65535 & $uI(s.charCodeAt(index)));
      const valid = ((((((((c >= 97) && (c <= 122)) || ((c >= 65) && (c <= 90))) || ((c >= 48) && (c <= 57))) || (c === 45)) || (c === 58)) || (c === 46)) || (c === 95));
      if ((!valid)) {
        return false
      };
      pos = ((1 + pos) | 0)
    };
    return true
  };
}
const $d_Lscalatags_Escaping$ = new $TypeData().initClass({
  Lscalatags_Escaping$: 0
}, false, "scalatags.Escaping$", {
  Lscalatags_Escaping$: 1,
  O: 1
});
$c_Lscalatags_Escaping$.prototype.$classData = $d_Lscalatags_Escaping$;
let $n_Lscalatags_Escaping$ = (void 0);
function $m_Lscalatags_Escaping$() {
  if ((!$n_Lscalatags_Escaping$)) {
    $n_Lscalatags_Escaping$ = new $c_Lscalatags_Escaping$()
  };
  return $n_Lscalatags_Escaping$
}
function $is_Lscalatags_generic_Modifier(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lscalatags_generic_Modifier)))
}
function $as_Lscalatags_generic_Modifier(obj) {
  return (($is_Lscalatags_generic_Modifier(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.Modifier"))
}
function $isArrayOf_Lscalatags_generic_Modifier(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_Modifier)))
}
function $asArrayOf_Lscalatags_generic_Modifier(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_Modifier(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.Modifier;", depth))
}
function $is_Lscalatags_generic_Namespace(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lscalatags_generic_Namespace)))
}
function $as_Lscalatags_generic_Namespace(obj) {
  return (($is_Lscalatags_generic_Namespace(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.Namespace"))
}
function $isArrayOf_Lscalatags_generic_Namespace(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_Namespace)))
}
function $asArrayOf_Lscalatags_generic_Namespace(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_Namespace(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.Namespace;", depth))
}
class $c_Lscalatags_generic_Namespace$ extends $c_O {
  constructor() {
    super();
    this.Lscalatags_generic_Namespace$__f_htmlNamespaceConfig = null;
    this.Lscalatags_generic_Namespace$__f_svgNamespaceConfig = null;
    this.Lscalatags_generic_Namespace$__f_svgXlinkNamespaceConfig = null;
    $n_Lscalatags_generic_Namespace$ = this;
    this.Lscalatags_generic_Namespace$__f_htmlNamespaceConfig = new $c_Lscalatags_generic_Namespace$$anon$1();
    this.Lscalatags_generic_Namespace$__f_svgNamespaceConfig = new $c_Lscalatags_generic_Namespace$$anon$2();
    this.Lscalatags_generic_Namespace$__f_svgXlinkNamespaceConfig = new $c_Lscalatags_generic_Namespace$$anon$3()
  };
}
const $d_Lscalatags_generic_Namespace$ = new $TypeData().initClass({
  Lscalatags_generic_Namespace$: 0
}, false, "scalatags.generic.Namespace$", {
  Lscalatags_generic_Namespace$: 1,
  O: 1
});
$c_Lscalatags_generic_Namespace$.prototype.$classData = $d_Lscalatags_generic_Namespace$;
let $n_Lscalatags_generic_Namespace$ = (void 0);
function $m_Lscalatags_generic_Namespace$() {
  if ((!$n_Lscalatags_generic_Namespace$)) {
    $n_Lscalatags_generic_Namespace$ = new $c_Lscalatags_generic_Namespace$()
  };
  return $n_Lscalatags_generic_Namespace$
}
class $c_LImmutablePokemon extends $c_LPokemon {
  constructor(id) {
    super();
    $ct_LPokemon__I__(this, id)
  };
  updateCaught__V() {
    this.LPokemon__f_isCaught = this.LPokemon__f_isCaught
  };
}
const $d_LImmutablePokemon = new $TypeData().initClass({
  LImmutablePokemon: 0
}, false, "ImmutablePokemon", {
  LImmutablePokemon: 1,
  LPokemon: 1,
  O: 1
});
$c_LImmutablePokemon.prototype.$classData = $d_LImmutablePokemon;
class $c_LImmutableUser extends $c_LUser {
  constructor() {
    super();
    this.LImmutableUser__f_masterPokes = null;
    $ct_LUser__(this);
    const xs = this.LUser__f_ids;
    let elems = null;
    elems = [];
    let i = 0;
    const len = xs.u.length;
    while ((i < len)) {
      const idx = i;
      const arg1 = xs.get(idx);
      const elem = new $c_LImmutablePokemon(arg1);
      elems.push(elem);
      i = ((1 + i) | 0)
    };
    this.LImmutableUser__f_masterPokes = $makeNativeArrayWrapper($d_LImmutablePokemon.getArrayOf(), elems)
  };
}
const $d_LImmutableUser = new $TypeData().initClass({
  LImmutableUser: 0
}, false, "ImmutableUser", {
  LImmutableUser: 1,
  LUser: 1,
  O: 1
});
$c_LImmutableUser.prototype.$classData = $d_LImmutableUser;
class $c_jl_Number extends $c_O {
}
function $is_jl_Number(obj) {
  return ((obj instanceof $c_jl_Number) || ((typeof obj) === "number"))
}
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"))
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)))
}
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth))
}
const $ct_jl_Throwable__T__jl_Throwable__Z__Z__ = (function($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  $thiz.jl_Throwable__f_e = e;
  $thiz.jl_Throwable__f_enableSuppression = enableSuppression;
  $thiz.jl_Throwable__f_writableStackTrace = writableStackTrace;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable()
  };
  return $thiz
});
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null;
    this.jl_Throwable__f_e = null;
    this.jl_Throwable__f_enableSuppression = false;
    this.jl_Throwable__f_writableStackTrace = false;
    this.jl_Throwable__f_stackTraceStateInternal = null;
    this.jl_Throwable__f_stackTrace = null;
    this.jl_Throwable__f_suppressed = null
  };
  getMessage__T() {
    return this.jl_Throwable__f_s
  };
  fillInStackTrace__jl_Throwable() {
    const identifyingString = Object.prototype.toString.call(this);
    if ((identifyingString === "[object Error]")) {
      this.jl_Throwable__f_stackTraceStateInternal = this
    } else if ((Error.captureStackTrace === (void 0))) {
      const e = new Error();
      this.jl_Throwable__f_stackTraceStateInternal = e
    } else {
      Error.captureStackTrace(this);
      this.jl_Throwable__f_stackTraceStateInternal = this
    };
    return this
  };
  toString__T() {
    const className = $objectClassName(this);
    const message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message))
  };
  $js$exported$meth$toString__O() {
    return this.toString__T()
  };
  $js$exported$prop$name__O() {
    return $objectClassName(this)
  };
  $js$exported$prop$message__O() {
    const m = this.getMessage__T();
    return ((m === null) ? "" : m)
  };
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this)
  };
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that)
  };
  get "message"() {
    return this.$js$exported$prop$message__O()
  };
  get "name"() {
    return this.$js$exported$prop$name__O()
  };
  "toString"() {
    return this.$js$exported$meth$toString__O()
  };
}
function $as_jl_Throwable(obj) {
  return (((obj instanceof $c_jl_Throwable) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Throwable"))
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Throwable)))
}
function $asArrayOf_jl_Throwable(obj, depth) {
  return (($isArrayOf_jl_Throwable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Throwable;", depth))
}
const $p_ju_regex_Matcher__ensureLastMatch__sjs_js_RegExp$ExecResult = (function($thiz) {
  if (($thiz.ju_regex_Matcher__f_lastMatch === null)) {
    throw new $c_jl_IllegalStateException("No match available")
  };
  return $thiz.ju_regex_Matcher__f_lastMatch
});
class $c_ju_regex_Matcher extends $c_O {
  constructor(pattern0, input0, regionStart0, regionEnd0) {
    super();
    this.ju_regex_Matcher__f_pattern0 = null;
    this.ju_regex_Matcher__f_input0 = null;
    this.ju_regex_Matcher__f_regionStart0 = 0;
    this.ju_regex_Matcher__f_regionEnd0 = 0;
    this.ju_regex_Matcher__f_regexp = null;
    this.ju_regex_Matcher__f_inputstr = null;
    this.ju_regex_Matcher__f_lastMatch = null;
    this.ju_regex_Matcher__f_lastMatchIsValid = false;
    this.ju_regex_Matcher__f_canStillFind = false;
    this.ju_regex_Matcher__f_appendPos = 0;
    this.ju_regex_Matcher__f_startOfGroupCache = null;
    this.ju_regex_Matcher__f_pattern0 = pattern0;
    this.ju_regex_Matcher__f_input0 = input0;
    this.ju_regex_Matcher__f_regionStart0 = regionStart0;
    this.ju_regex_Matcher__f_regionEnd0 = regionEnd0;
    this.ju_regex_Matcher__f_regexp = this.ju_regex_Matcher__f_pattern0.newJSRegExp__sjs_js_RegExp();
    const this$1 = this.ju_regex_Matcher__f_input0;
    const start = this.ju_regex_Matcher__f_regionStart0;
    const end = this.ju_regex_Matcher__f_regionEnd0;
    const this$2 = $f_T__substring__I__I__T(this$1, start, end);
    this.ju_regex_Matcher__f_inputstr = this$2;
    this.ju_regex_Matcher__f_lastMatch = null;
    this.ju_regex_Matcher__f_lastMatchIsValid = false;
    this.ju_regex_Matcher__f_canStillFind = true;
    this.ju_regex_Matcher__f_appendPos = 0
  };
  matches__Z() {
    this.reset__ju_regex_Matcher();
    this.find__Z();
    let $$x1;
    if ((this.ju_regex_Matcher__f_lastMatch !== null)) {
      if ((this.start__I() !== 0)) {
        $$x1 = true
      } else {
        const $$x2 = this.end__I();
        const this$1 = this.ju_regex_Matcher__f_inputstr;
        $$x1 = ($$x2 !== $uI(this$1.length))
      }
    } else {
      $$x1 = false
    };
    if ($$x1) {
      this.reset__ju_regex_Matcher()
    };
    return (this.ju_regex_Matcher__f_lastMatch !== null)
  };
  find__Z() {
    if (this.ju_regex_Matcher__f_canStillFind) {
      this.ju_regex_Matcher__f_lastMatchIsValid = true;
      this.ju_regex_Matcher__f_lastMatch = this.ju_regex_Matcher__f_regexp.exec(this.ju_regex_Matcher__f_inputstr);
      if ((this.ju_regex_Matcher__f_lastMatch !== null)) {
        const value = this.ju_regex_Matcher__f_lastMatch[0];
        if ((value === (void 0))) {
          throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get")
        };
        const this$5 = $as_T(value);
        if ((this$5 === "")) {
          const ev$1 = this.ju_regex_Matcher__f_regexp;
          ev$1.lastIndex = ((1 + $uI(ev$1.lastIndex)) | 0)
        }
      } else {
        this.ju_regex_Matcher__f_canStillFind = false
      };
      this.ju_regex_Matcher__f_startOfGroupCache = null;
      return (this.ju_regex_Matcher__f_lastMatch !== null)
    } else {
      return false
    }
  };
  reset__ju_regex_Matcher() {
    this.ju_regex_Matcher__f_regexp.lastIndex = 0;
    this.ju_regex_Matcher__f_lastMatch = null;
    this.ju_regex_Matcher__f_lastMatchIsValid = false;
    this.ju_regex_Matcher__f_canStillFind = true;
    this.ju_regex_Matcher__f_appendPos = 0;
    this.ju_regex_Matcher__f_startOfGroupCache = null;
    return this
  };
  start__I() {
    return $uI($p_ju_regex_Matcher__ensureLastMatch__sjs_js_RegExp$ExecResult(this).index)
  };
  end__I() {
    const $$x1 = this.start__I();
    const this$1 = this.group__T();
    return (($$x1 + $uI(this$1.length)) | 0)
  };
  group__T() {
    const value = $p_ju_regex_Matcher__ensureLastMatch__sjs_js_RegExp$ExecResult(this)[0];
    if ((value === (void 0))) {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get")
    };
    return $as_T(value)
  };
  group__I__T(group) {
    const value = $p_ju_regex_Matcher__ensureLastMatch__sjs_js_RegExp$ExecResult(this)[group];
    return $as_T(((value === (void 0)) ? null : value))
  };
}
const $d_ju_regex_Matcher = new $TypeData().initClass({
  ju_regex_Matcher: 0
}, false, "java.util.regex.Matcher", {
  ju_regex_Matcher: 1,
  O: 1,
  ju_regex_MatchResult: 1
});
$c_ju_regex_Matcher.prototype.$classData = $d_ju_regex_Matcher;
const $p_RTLong$__toUnsignedString__I__I__T = (function($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    const this$1 = ((4.294967296E9 * hi) + $uD((lo >>> 0)));
    return ("" + this$1)
  } else {
    return $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2))
  }
});
const $p_RTLong$__unsigned_$div__I__I__I__I__I = (function($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      const aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      const rDouble = (aDouble / bDouble);
      const x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    const pow = ((31 - $clz32(blo)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    const pow$2 = ((31 - $clz32(bhi)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0)
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0))
  }
});
const $p_RTLong$__unsigned_$percent__I__I__I__I__I = (function($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      const aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      const rDouble = (aDouble % bDouble);
      const x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1))
  }
});
const $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O = (function($thiz, alo, ahi, blo, bhi, ask) {
  let shift = ((((bhi !== 0) ? $clz32(bhi) : ((32 + $clz32(blo)) | 0)) - ((ahi !== 0) ? $clz32(ahi) : ((32 + $clz32(alo)) | 0))) | 0);
  const n = shift;
  const lo = (((32 & n) === 0) ? (blo << n) : 0);
  const hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  let bShiftLo = lo;
  let bShiftHi = hi;
  let remLo = alo;
  let remHi = ahi;
  let quotLo = 0;
  let quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    const alo$1 = remLo;
    const ahi$1 = remHi;
    const blo$1 = bShiftLo;
    const bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      const lo$1 = remLo;
      const hi$1 = remHi;
      const lo$2 = bShiftLo;
      const hi$2 = bShiftHi;
      const lo$3 = ((lo$1 - lo$2) | 0);
      const hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift))
      } else {
        quotHi = (quotHi | (1 << shift))
      }
    };
    shift = (((-1) + shift) | 0);
    const lo$4 = bShiftLo;
    const hi$4 = bShiftHi;
    const lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    const hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5
  };
  const alo$2 = remLo;
  const ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    const lo$6 = remLo;
    const hi$6 = remHi;
    const remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0)));
    const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
    if ((ask !== 1)) {
      const x = (remDouble / bDouble);
      const lo$7 = $uI((x | 0));
      const x$1 = (x / 4.294967296E9);
      const hi$7 = $uI((x$1 | 0));
      const lo$8 = quotLo;
      const hi$8 = quotHi;
      const lo$9 = ((lo$8 + lo$7) | 0);
      const hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9
    };
    if ((ask !== 0)) {
      const rem_mod_bDouble = (remDouble % bDouble);
      remLo = $uI((rem_mod_bDouble | 0));
      const x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = $uI((x$2 | 0))
    }
  };
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo
  } else {
    const lo$10 = quotLo;
    const hi$10 = quotHi;
    const quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0)));
    const this$3 = remLo;
    const remStr = ("" + this$3);
    const start = $uI(remStr.length);
    return ((("" + quot) + $as_T("000000000".substring(start))) + remStr)
  }
});
class $c_RTLong$ extends $c_O {
  constructor() {
    super();
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0
  };
  org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(lo, hi) {
    return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)))
  };
  org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) {
    if ((hi < 0)) {
      const x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
      const $$x1 = $uD((x >>> 0));
      const x$1 = ((-lo) | 0);
      return (-((4.294967296E9 * $$x1) + $uD((x$1 >>> 0))))
    } else {
      return ((4.294967296E9 * hi) + $uD((lo >>> 0)))
    }
  };
  fromInt__I__RTLong(value) {
    return new $c_RTLong(value, (value >> 31))
  };
  fromDouble__D__RTLong(value) {
    const lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
    return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value) {
    if ((value < (-9.223372036854776E18))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
      return 0
    } else if ((value >= 9.223372036854776E18)) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
      return (-1)
    } else {
      const rawLo = $uI((value | 0));
      const x = (value / 4.294967296E9);
      const rawHi = $uI((x | 0));
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
      return rawLo
    }
  };
  org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(alo, ahi, blo, bhi) {
    return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
  };
  divideImpl__I__I__I__I__I(alo, ahi, blo, bhi) {
    if (((blo | bhi) === 0)) {
      throw new $c_jl_ArithmeticException("/ by zero")
    };
    if ((ahi === (alo >> 31))) {
      if ((bhi === (blo >> 31))) {
        if (((alo === (-2147483648)) && (blo === (-1)))) {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return (-2147483648)
        } else {
          const lo = $intDiv(alo, blo);
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
          return lo
        }
      } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
        return (-1)
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      }
    } else {
      let aAbs__lo;
      let aAbs__hi;
      if ((ahi < 0)) {
        const lo$1 = ((-alo) | 0);
        const hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
        const $$x1__lo = lo$1;
        const $$x1__hi = hi;
        aAbs__lo = $$x1__lo;
        aAbs__hi = $$x1__hi
      } else {
        const $$x2__lo = alo;
        const $$x2__hi = ahi;
        aAbs__lo = $$x2__lo;
        aAbs__hi = $$x2__hi
      };
      let bAbs__lo;
      let bAbs__hi;
      if ((bhi < 0)) {
        const lo$2 = ((-blo) | 0);
        const hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
        const $$x3__lo = lo$2;
        const $$x3__hi = hi$1;
        bAbs__lo = $$x3__lo;
        bAbs__hi = $$x3__hi
      } else {
        const $$x4__lo = blo;
        const $$x4__hi = bhi;
        bAbs__lo = $$x4__lo;
        bAbs__hi = $$x4__hi
      };
      const absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
      if (((ahi ^ bhi) >= 0)) {
        return absRLo
      } else {
        const hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
        return ((-absRLo) | 0)
      }
    }
  };
  remainderImpl__I__I__I__I__I(alo, ahi, blo, bhi) {
    if (((blo | bhi) === 0)) {
      throw new $c_jl_ArithmeticException("/ by zero")
    };
    if ((ahi === (alo >> 31))) {
      if ((bhi === (blo >> 31))) {
        if ((blo !== (-1))) {
          const lo = $intMod(alo, blo);
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
          return lo
        } else {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return 0
        }
      } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
        return alo
      }
    } else {
      let aAbs__lo;
      let aAbs__hi;
      if ((ahi < 0)) {
        const lo$1 = ((-alo) | 0);
        const hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
        const $$x1__lo = lo$1;
        const $$x1__hi = hi;
        aAbs__lo = $$x1__lo;
        aAbs__hi = $$x1__hi
      } else {
        const $$x2__lo = alo;
        const $$x2__hi = ahi;
        aAbs__lo = $$x2__lo;
        aAbs__hi = $$x2__hi
      };
      let bAbs__lo;
      let bAbs__hi;
      if ((bhi < 0)) {
        const lo$2 = ((-blo) | 0);
        const hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
        const $$x3__lo = lo$2;
        const $$x3__hi = hi$1;
        bAbs__lo = $$x3__lo;
        bAbs__hi = $$x3__hi
      } else {
        const $$x4__lo = blo;
        const $$x4__hi = bhi;
        bAbs__lo = $$x4__lo;
        bAbs__hi = $$x4__hi
      };
      const absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
      if ((ahi < 0)) {
        const hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
        return ((-absRLo) | 0)
      } else {
        return absRLo
      }
    }
  };
}
const $d_RTLong$ = new $TypeData().initClass({
  RTLong$: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong$", {
  RTLong$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_RTLong$.prototype.$classData = $d_RTLong$;
let $n_RTLong$ = (void 0);
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$()
  };
  return $n_RTLong$
}
const $p_sc_TraversableOnce__appender$lzycompute$1__sr_LazyRef__scm_StringBuilder__T__sc_TraversableOnce$appender$1$ = (function($thiz, appender$module$1, b$2, sep$1) {
  if ((appender$module$1 === null)) {
    throw new $c_jl_NullPointerException()
  };
  return (appender$module$1.sr_LazyRef__f__initialized ? $as_sc_TraversableOnce$appender$1$(appender$module$1.sr_LazyRef__f__value) : $as_sc_TraversableOnce$appender$1$(appender$module$1.initialize__O__O(new $c_sc_TraversableOnce$appender$1$($thiz, b$2, sep$1))))
});
const $p_sc_TraversableOnce__appender$2__sr_LazyRef__scm_StringBuilder__T__sc_TraversableOnce$appender$1$ = (function($thiz, appender$module$1, b$2, sep$1) {
  return (appender$module$1.sr_LazyRef__f__initialized ? $as_sc_TraversableOnce$appender$1$(appender$module$1.sr_LazyRef__f__value) : $p_sc_TraversableOnce__appender$lzycompute$1__sr_LazyRef__scm_StringBuilder__T__sc_TraversableOnce$appender$1$($thiz, appender$module$1, b$2, sep$1))
});
function $f_sc_TraversableOnce__copyToArray__O__I__V($thiz, xs, start) {
  $thiz.copyToArray__O__I__I__V(xs, start, (($m_sr_ScalaRunTime$().array_length__O__I(xs) - start) | 0))
}
function $f_sc_TraversableOnce__mkString__T__T__T__T($thiz, start, sep, end) {
  const this$1 = $thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end);
  return this$1.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
}
function $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  const appender$module = new $c_sr_LazyRef();
  b.append__T__scm_StringBuilder(start);
  $thiz.foreach__F1__V($p_sc_TraversableOnce__appender$2__sr_LazyRef__scm_StringBuilder__T__sc_TraversableOnce$appender$1$($thiz, appender$module, b, sep));
  b.append__T__scm_StringBuilder(end);
  return b
}
class $c_sc_TraversableOnce$appender$1$ extends $c_O {
  constructor(outer, b$2, sep$1) {
    super();
    this.sc_TraversableOnce$appender$1$__f_first = false;
    this.sc_TraversableOnce$appender$1$__f_b$2 = null;
    this.sc_TraversableOnce$appender$1$__f_sep$1 = null;
    this.sc_TraversableOnce$appender$1$__f_b$2 = b$2;
    this.sc_TraversableOnce$appender$1$__f_sep$1 = sep$1;
    this.sc_TraversableOnce$appender$1$__f_first = true
  };
  toString__T() {
    return "<function1>"
  };
  apply__O__V(x) {
    if (this.sc_TraversableOnce$appender$1$__f_first) {
      this.sc_TraversableOnce$appender$1$__f_b$2.append__O__scm_StringBuilder(x);
      this.sc_TraversableOnce$appender$1$__f_first = false
    } else {
      this.sc_TraversableOnce$appender$1$__f_b$2.append__T__scm_StringBuilder(this.sc_TraversableOnce$appender$1$__f_sep$1);
      this.sc_TraversableOnce$appender$1$__f_b$2.append__O__scm_StringBuilder(x)
    }
  };
  apply__O__O(v1) {
    this.apply__O__V(v1)
  };
}
function $as_sc_TraversableOnce$appender$1$(obj) {
  return (((obj instanceof $c_sc_TraversableOnce$appender$1$) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.TraversableOnce$appender$1$"))
}
function $isArrayOf_sc_TraversableOnce$appender$1$(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_TraversableOnce$appender$1$)))
}
function $asArrayOf_sc_TraversableOnce$appender$1$(obj, depth) {
  return (($isArrayOf_sc_TraversableOnce$appender$1$(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.TraversableOnce$appender$1$;", depth))
}
const $d_sc_TraversableOnce$appender$1$ = new $TypeData().initClass({
  sc_TraversableOnce$appender$1$: 0
}, false, "scala.collection.TraversableOnce$appender$1$", {
  sc_TraversableOnce$appender$1$: 1,
  O: 1,
  F1: 1
});
$c_sc_TraversableOnce$appender$1$.prototype.$classData = $d_sc_TraversableOnce$appender$1$;
const $ct_scg_GenTraversableFactory__ = (function($thiz) {
  $thiz.scg_GenTraversableFactory__f_ReusableCBFInstance = new $c_scg_GenTraversableFactory$$anon$1($thiz);
  return $thiz
});
class $c_scg_GenTraversableFactory extends $c_scg_GenericCompanion {
  constructor() {
    super();
    this.scg_GenTraversableFactory__f_ReusableCBFInstance = null
  };
}
const $ct_scg_GenTraversableFactory$GenericCanBuildFrom__scg_GenTraversableFactory__ = (function($thiz, outer) {
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.scg_GenTraversableFactory$GenericCanBuildFrom__f_$outer = outer
  };
  return $thiz
});
class $c_scg_GenTraversableFactory$GenericCanBuildFrom extends $c_O {
  constructor() {
    super();
    this.scg_GenTraversableFactory$GenericCanBuildFrom__f_$outer = null
  };
}
class $c_sci_List$$anon$1 extends $c_O {
  toString__T() {
    return "<function1>"
  };
  apply__O__O(x) {
    return this
  };
}
const $d_sci_List$$anon$1 = new $TypeData().initClass({
  sci_List$$anon$1: 0
}, false, "scala.collection.immutable.List$$anon$1", {
  sci_List$$anon$1: 1,
  O: 1,
  F1: 1
});
$c_sci_List$$anon$1.prototype.$classData = $d_sci_List$$anon$1;
class $c_s_util_hashing_MurmurHash3$ extends $c_s_util_hashing_MurmurHash3 {
  constructor() {
    super();
    this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
    this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
    this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
    this.s_util_hashing_MurmurHash3$__f_emptyMapHash = 0;
    $n_s_util_hashing_MurmurHash3$ = this;
    this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
    this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
    this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set");
    this.s_util_hashing_MurmurHash3$__f_emptyMapHash = this.unorderedHash__sc_TraversableOnce__I__I($m_sci_Nil$(), this.s_util_hashing_MurmurHash3$__f_mapSeed)
  };
  seqHash__sc_Seq__I(xs) {
    if ((xs instanceof $c_sci_List)) {
      const x2 = $as_sci_List(xs);
      return this.listHash__sci_List__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    } else {
      return this.orderedHash__sc_TraversableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    }
  };
}
const $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$: 0
}, false, "scala.util.hashing.MurmurHash3$", {
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1,
  O: 1
});
$c_s_util_hashing_MurmurHash3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$;
let $n_s_util_hashing_MurmurHash3$ = (void 0);
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$()
  };
  return $n_s_util_hashing_MurmurHash3$
}
class $c_s_util_hashing_MurmurHash3$hasher$1$ extends $c_O {
  constructor(outer) {
    super();
    this.s_util_hashing_MurmurHash3$hasher$1$__f_a = 0;
    this.s_util_hashing_MurmurHash3$hasher$1$__f_b = 0;
    this.s_util_hashing_MurmurHash3$hasher$1$__f_n = 0;
    this.s_util_hashing_MurmurHash3$hasher$1$__f_c = 0;
    this.s_util_hashing_MurmurHash3$hasher$1$__f_a = 0;
    this.s_util_hashing_MurmurHash3$hasher$1$__f_b = 0;
    this.s_util_hashing_MurmurHash3$hasher$1$__f_n = 0;
    this.s_util_hashing_MurmurHash3$hasher$1$__f_c = 1
  };
  toString__T() {
    return "<function1>"
  };
  apply__O__V(x) {
    const h = $m_sr_Statics$().anyHash__O__I(x);
    this.s_util_hashing_MurmurHash3$hasher$1$__f_a = ((this.s_util_hashing_MurmurHash3$hasher$1$__f_a + h) | 0);
    this.s_util_hashing_MurmurHash3$hasher$1$__f_b = (this.s_util_hashing_MurmurHash3$hasher$1$__f_b ^ h);
    if ((h !== 0)) {
      this.s_util_hashing_MurmurHash3$hasher$1$__f_c = $imul(this.s_util_hashing_MurmurHash3$hasher$1$__f_c, h)
    };
    this.s_util_hashing_MurmurHash3$hasher$1$__f_n = ((1 + this.s_util_hashing_MurmurHash3$hasher$1$__f_n) | 0)
  };
  apply__O__O(v1) {
    this.apply__O__V(v1)
  };
}
function $as_s_util_hashing_MurmurHash3$hasher$1$(obj) {
  return (((obj instanceof $c_s_util_hashing_MurmurHash3$hasher$1$) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.hashing.MurmurHash3$hasher$1$"))
}
function $isArrayOf_s_util_hashing_MurmurHash3$hasher$1$(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_hashing_MurmurHash3$hasher$1$)))
}
function $asArrayOf_s_util_hashing_MurmurHash3$hasher$1$(obj, depth) {
  return (($isArrayOf_s_util_hashing_MurmurHash3$hasher$1$(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.hashing.MurmurHash3$hasher$1$;", depth))
}
const $d_s_util_hashing_MurmurHash3$hasher$1$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$hasher$1$: 0
}, false, "scala.util.hashing.MurmurHash3$hasher$1$", {
  s_util_hashing_MurmurHash3$hasher$1$: 1,
  O: 1,
  F1: 1
});
$c_s_util_hashing_MurmurHash3$hasher$1$.prototype.$classData = $d_s_util_hashing_MurmurHash3$hasher$1$;
class $c_s_util_hashing_MurmurHash3$hasher$3$ extends $c_O {
  constructor(outer, seed$1) {
    super();
    this.s_util_hashing_MurmurHash3$hasher$3$__f_n = 0;
    this.s_util_hashing_MurmurHash3$hasher$3$__f_h = 0;
    this.s_util_hashing_MurmurHash3$hasher$3$__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.s_util_hashing_MurmurHash3$hasher$3$__f_$outer = outer
    };
    this.s_util_hashing_MurmurHash3$hasher$3$__f_n = 0;
    this.s_util_hashing_MurmurHash3$hasher$3$__f_h = seed$1
  };
  toString__T() {
    return "<function1>"
  };
  apply__O__V(x) {
    this.s_util_hashing_MurmurHash3$hasher$3$__f_h = this.s_util_hashing_MurmurHash3$hasher$3$__f_$outer.mix__I__I__I(this.s_util_hashing_MurmurHash3$hasher$3$__f_h, $m_sr_Statics$().anyHash__O__I(x));
    this.s_util_hashing_MurmurHash3$hasher$3$__f_n = ((1 + this.s_util_hashing_MurmurHash3$hasher$3$__f_n) | 0)
  };
  apply__O__O(v1) {
    this.apply__O__V(v1)
  };
}
function $as_s_util_hashing_MurmurHash3$hasher$3$(obj) {
  return (((obj instanceof $c_s_util_hashing_MurmurHash3$hasher$3$) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.hashing.MurmurHash3$hasher$3$"))
}
function $isArrayOf_s_util_hashing_MurmurHash3$hasher$3$(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_hashing_MurmurHash3$hasher$3$)))
}
function $asArrayOf_s_util_hashing_MurmurHash3$hasher$3$(obj, depth) {
  return (($isArrayOf_s_util_hashing_MurmurHash3$hasher$3$(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.hashing.MurmurHash3$hasher$3$;", depth))
}
const $d_s_util_hashing_MurmurHash3$hasher$3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$hasher$3$: 0
}, false, "scala.util.hashing.MurmurHash3$hasher$3$", {
  s_util_hashing_MurmurHash3$hasher$3$: 1,
  O: 1,
  F1: 1
});
$c_s_util_hashing_MurmurHash3$hasher$3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$hasher$3$;
class $c_Lscalatags_JsDom$GenericAttr extends $c_O {
  apply__Lorg_scalajs_dom_raw_Element__Lscalatags_generic_Attr__O__V(t, a, v) {
    const x1 = a.Lscalatags_generic_Attr__f_namespace;
    const x = $m_s_None$();
    if ((x === x1)) {
      if ((!a.Lscalatags_generic_Attr__f_raw)) {
        t.setAttribute(a.Lscalatags_generic_Attr__f_name, $dp_toString__T(v))
      } else {
        const tmpElm = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().createElement("p");
        tmpElm.innerHTML = (((("<p " + a.Lscalatags_generic_Attr__f_name) + "=\"") + $dp_toString__T(v)) + "\"><p>");
        const newAttr = tmpElm.children[0].attributes[0].cloneNode(true);
        t.setAttributeNode(newAttr)
      }
    } else if ((x1 instanceof $c_s_Some)) {
      const x2 = $as_s_Some(x1);
      const namespace = $as_Lscalatags_generic_Namespace(x2.s_Some__f_value);
      t.setAttributeNS(namespace.uri__T(), a.Lscalatags_generic_Attr__f_name, $dp_toString__T(v))
    } else {
      throw new $c_s_MatchError(x1)
    }
  };
}
const $d_Lscalatags_JsDom$GenericAttr = new $TypeData().initClass({
  Lscalatags_JsDom$GenericAttr: 0
}, false, "scalatags.JsDom$GenericAttr", {
  Lscalatags_JsDom$GenericAttr: 1,
  O: 1,
  Lscalatags_generic_AttrValue: 1
});
$c_Lscalatags_JsDom$GenericAttr.prototype.$classData = $d_Lscalatags_JsDom$GenericAttr;
class $c_Lscalatags_JsDom$GenericPixelStyle extends $c_O {
  constructor(ev) {
    super();
    this.Lscalatags_JsDom$GenericPixelStyle__f_ev = null;
    this.Lscalatags_JsDom$GenericPixelStyle__f_ev = ev
  };
  apply__Lscalatags_generic_Style__O__Lscalatags_generic_StylePair(s, v) {
    return new $c_Lscalatags_generic_StylePair(s, v, this.Lscalatags_JsDom$GenericPixelStyle__f_ev)
  };
}
const $d_Lscalatags_JsDom$GenericPixelStyle = new $TypeData().initClass({
  Lscalatags_JsDom$GenericPixelStyle: 0
}, false, "scalatags.JsDom$GenericPixelStyle", {
  Lscalatags_JsDom$GenericPixelStyle: 1,
  O: 1,
  Lscalatags_generic_PixelStyleValue: 1
});
$c_Lscalatags_JsDom$GenericPixelStyle.prototype.$classData = $d_Lscalatags_JsDom$GenericPixelStyle;
class $c_Lscalatags_JsDom$GenericPixelStylePx extends $c_O {
  constructor(ev) {
    super();
    this.Lscalatags_JsDom$GenericPixelStylePx__f_ev = null;
    this.Lscalatags_JsDom$GenericPixelStylePx__f_ev = ev
  };
  apply__Lscalatags_generic_Style__O__Lscalatags_generic_StylePair(s, v) {
    return new $c_Lscalatags_generic_StylePair(s, $m_s_Predef$any2stringadd$().$plus$extension__O__T__T(v, "px"), this.Lscalatags_JsDom$GenericPixelStylePx__f_ev)
  };
}
const $d_Lscalatags_JsDom$GenericPixelStylePx = new $TypeData().initClass({
  Lscalatags_JsDom$GenericPixelStylePx: 0
}, false, "scalatags.JsDom$GenericPixelStylePx", {
  Lscalatags_JsDom$GenericPixelStylePx: 1,
  O: 1,
  Lscalatags_generic_PixelStyleValue: 1
});
$c_Lscalatags_JsDom$GenericPixelStylePx.prototype.$classData = $d_Lscalatags_JsDom$GenericPixelStylePx;
class $c_Lscalatags_JsDom$GenericStyle extends $c_O {
  apply__Lorg_scalajs_dom_raw_Element__Lscalatags_generic_Style__O__V(t, s, v) {
    const qual$1 = t.style;
    const x$1 = s.Lscalatags_generic_Style__f_cssName;
    const x$2 = $dp_toString__T(v);
    qual$1.setProperty(x$1, x$2)
  };
}
const $d_Lscalatags_JsDom$GenericStyle = new $TypeData().initClass({
  Lscalatags_JsDom$GenericStyle: 0
}, false, "scalatags.JsDom$GenericStyle", {
  Lscalatags_JsDom$GenericStyle: 1,
  O: 1,
  Lscalatags_generic_StyleValue: 1
});
$c_Lscalatags_JsDom$GenericStyle.prototype.$classData = $d_Lscalatags_JsDom$GenericStyle;
function $f_Lscalatags_generic_Aggregate__$init$__V($thiz) {
  $thiz.Lscalatags_JsDom$all$__f_stringAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lscalatags_JsDom$all$__f_booleanAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lscalatags_JsDom$all$__f_byteAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lscalatags_JsDom$all$__f_shortAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lscalatags_JsDom$all$__f_intAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lscalatags_JsDom$all$__f_longAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lscalatags_JsDom$all$__f_floatAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lscalatags_JsDom$all$__f_doubleAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lscalatags_JsDom$all$__f_stringStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lscalatags_JsDom$all$__f_booleanStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lscalatags_JsDom$all$__f_byteStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lscalatags_JsDom$all$__f_shortStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lscalatags_JsDom$all$__f_intStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lscalatags_JsDom$all$__f_longStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lscalatags_JsDom$all$__f_floatStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lscalatags_JsDom$all$__f_doubleStyle = new $c_Lscalatags_JsDom$GenericStyle();
  const ev = $thiz.Lscalatags_JsDom$all$__f_stringStyle;
  $thiz.Lscalatags_JsDom$all$__f_stringPixelStyle = new $c_Lscalatags_JsDom$GenericPixelStyle(ev);
  const ev$1 = $thiz.Lscalatags_JsDom$all$__f_booleanStyle;
  $thiz.Lscalatags_JsDom$all$__f_booleanPixelStyle = new $c_Lscalatags_JsDom$GenericPixelStyle(ev$1);
  const ev$2 = $thiz.Lscalatags_JsDom$all$__f_stringStyle;
  $thiz.Lscalatags_JsDom$all$__f_bytePixelStyle = new $c_Lscalatags_JsDom$GenericPixelStylePx(ev$2);
  const ev$3 = $thiz.Lscalatags_JsDom$all$__f_stringStyle;
  $thiz.Lscalatags_JsDom$all$__f_shortPixelStyle = new $c_Lscalatags_JsDom$GenericPixelStylePx(ev$3);
  const ev$4 = $thiz.Lscalatags_JsDom$all$__f_stringStyle;
  $thiz.Lscalatags_JsDom$all$__f_intPixelStyle = new $c_Lscalatags_JsDom$GenericPixelStylePx(ev$4);
  const ev$5 = $thiz.Lscalatags_JsDom$all$__f_stringStyle;
  $thiz.Lscalatags_JsDom$all$__f_longPixelStyle = new $c_Lscalatags_JsDom$GenericPixelStylePx(ev$5);
  const ev$6 = $thiz.Lscalatags_JsDom$all$__f_stringStyle;
  $thiz.Lscalatags_JsDom$all$__f_floatPixelStyle = new $c_Lscalatags_JsDom$GenericPixelStylePx(ev$6);
  const ev$7 = $thiz.Lscalatags_JsDom$all$__f_stringStyle;
  $thiz.Lscalatags_JsDom$all$__f_doublePixelStyle = new $c_Lscalatags_JsDom$GenericPixelStylePx(ev$7)
}
class $c_Lscalatags_generic_Namespace$$anon$1 extends $c_O {
  uri__T() {
    return "http://www.w3.org/1999/xhtml"
  };
}
const $d_Lscalatags_generic_Namespace$$anon$1 = new $TypeData().initClass({
  Lscalatags_generic_Namespace$$anon$1: 0
}, false, "scalatags.generic.Namespace$$anon$1", {
  Lscalatags_generic_Namespace$$anon$1: 1,
  O: 1,
  Lscalatags_generic_Namespace: 1
});
$c_Lscalatags_generic_Namespace$$anon$1.prototype.$classData = $d_Lscalatags_generic_Namespace$$anon$1;
class $c_Lscalatags_generic_Namespace$$anon$2 extends $c_O {
  uri__T() {
    return "http://www.w3.org/2000/svg"
  };
}
const $d_Lscalatags_generic_Namespace$$anon$2 = new $TypeData().initClass({
  Lscalatags_generic_Namespace$$anon$2: 0
}, false, "scalatags.generic.Namespace$$anon$2", {
  Lscalatags_generic_Namespace$$anon$2: 1,
  O: 1,
  Lscalatags_generic_Namespace: 1
});
$c_Lscalatags_generic_Namespace$$anon$2.prototype.$classData = $d_Lscalatags_generic_Namespace$$anon$2;
class $c_Lscalatags_generic_Namespace$$anon$3 extends $c_O {
  uri__T() {
    return "http://www.w3.org/1999/xlink"
  };
}
const $d_Lscalatags_generic_Namespace$$anon$3 = new $TypeData().initClass({
  Lscalatags_generic_Namespace$$anon$3: 0
}, false, "scalatags.generic.Namespace$$anon$3", {
  Lscalatags_generic_Namespace$$anon$3: 1,
  O: 1,
  Lscalatags_generic_Namespace: 1
});
$c_Lscalatags_generic_Namespace$$anon$3.prototype.$classData = $d_Lscalatags_generic_Namespace$$anon$3;
function $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, s, ns, raw) {
  return new $c_Lscalatags_generic_Attr(s, $m_s_Option$().apply__O__s_Option(ns), raw)
}
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($uZ($thiz) ? 1231 : 1237)
}
function $f_jl_Boolean__toString__T($thiz) {
  const b = $uZ($thiz);
  return ("" + b)
}
const $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $uC($thiz)
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  if ((that instanceof $Char)) {
    const $$x1 = $uC($thiz);
    const this$1 = $as_jl_Character(that);
    return ($$x1 === $uC(this$1))
  } else {
    return false
  }
}
function $f_jl_Character__toString__T($thiz) {
  const c = $uC($thiz);
  return $as_T(String.fromCharCode(c))
}
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"))
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)))
}
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth))
}
const $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => (x instanceof $Char)));
class $c_jl_Error extends $c_jl_Throwable {
}
class $c_jl_Exception extends $c_jl_Throwable {
}
const $p_ju_regex_Pattern__jsPattern__T = (function($thiz) {
  return $as_T($thiz.ju_regex_Pattern__f_jsRegExp.source)
});
const $p_ju_regex_Pattern__jsFlags__T = (function($thiz) {
  return ((($uZ($thiz.ju_regex_Pattern__f_jsRegExp.global) ? "g" : "") + ($uZ($thiz.ju_regex_Pattern__f_jsRegExp.ignoreCase) ? "i" : "")) + ($uZ($thiz.ju_regex_Pattern__f_jsRegExp.multiline) ? "m" : ""))
});
const $p_ju_regex_Pattern__groupCount$lzycompute__I = (function($thiz) {
  if (((((1 & $thiz.ju_regex_Pattern__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.ju_regex_Pattern__f_groupCount = (((-1) + $uI(new RegExp(("|" + $p_ju_regex_Pattern__jsPattern__T($thiz))).exec("").length)) | 0);
    $thiz.ju_regex_Pattern__f_bitmap$0 = (((1 | $thiz.ju_regex_Pattern__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.ju_regex_Pattern__f_groupCount
});
class $c_ju_regex_Pattern extends $c_O {
  constructor(jsRegExp, _pattern, _flags) {
    super();
    this.ju_regex_Pattern__f_groupCount = 0;
    this.ju_regex_Pattern__f_groupStartMapper = null;
    this.ju_regex_Pattern__f_jsRegExp = null;
    this.ju_regex_Pattern__f__pattern = null;
    this.ju_regex_Pattern__f__flags = 0;
    this.ju_regex_Pattern__f_bitmap$0 = 0;
    this.ju_regex_Pattern__f_jsRegExp = jsRegExp;
    this.ju_regex_Pattern__f__pattern = _pattern;
    this.ju_regex_Pattern__f__flags = _flags
  };
  groupCount__I() {
    return (((((1 & this.ju_regex_Pattern__f_bitmap$0) << 24) >> 24) === 0) ? $p_ju_regex_Pattern__groupCount$lzycompute__I(this) : this.ju_regex_Pattern__f_groupCount)
  };
  toString__T() {
    return this.ju_regex_Pattern__f__pattern
  };
  newJSRegExp__sjs_js_RegExp() {
    const r = new RegExp(this.ju_regex_Pattern__f_jsRegExp);
    return ((!Object.is(r, this.ju_regex_Pattern__f_jsRegExp)) ? r : new RegExp($p_ju_regex_Pattern__jsPattern__T(this), $p_ju_regex_Pattern__jsFlags__T(this)))
  };
}
const $d_ju_regex_Pattern = new $TypeData().initClass({
  ju_regex_Pattern: 0
}, false, "java.util.regex.Pattern", {
  ju_regex_Pattern: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_ju_regex_Pattern.prototype.$classData = $d_ju_regex_Pattern;
class $c_ju_regex_Pattern$ extends $c_O {
  constructor() {
    super();
    this.ju_regex_Pattern$__f_java$util$regex$Pattern$$splitHackPat = null;
    this.ju_regex_Pattern$__f_java$util$regex$Pattern$$flagHackPat = null;
    $n_ju_regex_Pattern$ = this;
    this.ju_regex_Pattern$__f_java$util$regex$Pattern$$splitHackPat = new RegExp("^\\\\Q(.|\\n|\\r)\\\\E$");
    this.ju_regex_Pattern$__f_java$util$regex$Pattern$$flagHackPat = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)")
  };
  compile__T__I__ju_regex_Pattern(regex, flags) {
    let x1;
    if (((16 & flags) !== 0)) {
      x1 = new $c_T2(this.quote__T__T(regex), flags)
    } else {
      const m = this.ju_regex_Pattern$__f_java$util$regex$Pattern$$splitHackPat.exec(regex);
      let this$5;
      if ((m !== null)) {
        const value = m[1];
        if ((value === (void 0))) {
          throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get")
        };
        this$5 = new $c_s_Some(new $c_T2(this.quote__T__T($as_T(value)), flags))
      } else {
        this$5 = $m_s_None$()
      };
      let this$28;
      if (this$5.isEmpty__Z()) {
        const this$6 = $m_ju_regex_Pattern$();
        const m$1 = this$6.ju_regex_Pattern$__f_java$util$regex$Pattern$$flagHackPat.exec(regex);
        if ((m$1 !== null)) {
          const value$1 = m$1[0];
          if ((value$1 === (void 0))) {
            throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get")
          };
          const this$11 = $as_T(value$1);
          const beginIndex = $uI(this$11.length);
          const newPat = $as_T(regex.substring(beginIndex));
          let elem = 0;
          elem = flags;
          const value$2 = m$1[1];
          if ((value$2 !== (void 0))) {
            const chars = $as_T(value$2);
            const end = $uI(chars.length);
            let i = 0;
            while ((i < end)) {
              const arg1 = i;
              elem = (elem | $m_ju_regex_Pattern$().java$util$regex$Pattern$$charToFlag__C__I((65535 & $uI(chars.charCodeAt(arg1)))));
              i = ((1 + i) | 0)
            }
          };
          const value$3 = m$1[2];
          if ((value$3 !== (void 0))) {
            const chars$3 = $as_T(value$3);
            const end$1 = $uI(chars$3.length);
            let i$1 = 0;
            while ((i$1 < end$1)) {
              const arg1$1 = i$1;
              elem = (elem & (~$m_ju_regex_Pattern$().java$util$regex$Pattern$$charToFlag__C__I((65535 & $uI(chars$3.charCodeAt(arg1$1))))));
              i$1 = ((1 + i$1) | 0)
            }
          };
          this$28 = new $c_s_Some(new $c_T2(newPat, elem))
        } else {
          this$28 = $m_s_None$()
        }
      } else {
        this$28 = this$5
      };
      x1 = $as_T2((this$28.isEmpty__Z() ? new $c_T2(regex, flags) : this$28.get__O()))
    };
    if ((x1 === null)) {
      throw new $c_s_MatchError(x1)
    };
    const jsPattern = $as_T(x1.T2__f__1);
    const flags1 = $uI(x1.T2__f__2);
    const jsFlags = (("g" + (((2 & flags1) !== 0) ? "i" : "")) + (((8 & flags1) !== 0) ? "m" : ""));
    const jsRegExp = new RegExp(jsPattern, jsFlags);
    return new $c_ju_regex_Pattern(jsRegExp, regex, flags1)
  };
  quote__T__T(s) {
    let result = "";
    let i = 0;
    while ((i < $uI(s.length))) {
      const index = i;
      const c = (65535 & $uI(s.charCodeAt(index)));
      const $$x2 = result;
      let $$x1;
      switch (c) {
        case 92:
        case 46:
        case 40:
        case 41:
        case 91:
        case 93:
        case 123:
        case 125:
        case 124:
        case 63:
        case 42:
        case 43:
        case 94:
        case 36: {
          $$x1 = ("\\" + $bC(c));
          break
        }
        default: {
          $$x1 = $bC(c)
        }
      };
      result = (("" + $$x2) + $$x1);
      i = ((1 + i) | 0)
    };
    return result
  };
  java$util$regex$Pattern$$charToFlag__C__I(c) {
    switch (c) {
      case 105: {
        return 2;
        break
      }
      case 100: {
        return 1;
        break
      }
      case 109: {
        return 8;
        break
      }
      case 115: {
        return 32;
        break
      }
      case 117: {
        return 64;
        break
      }
      case 120: {
        return 4;
        break
      }
      case 85: {
        return 256;
        break
      }
      default: {
        throw new $c_jl_IllegalArgumentException("bad in-pattern flag")
      }
    }
  };
}
const $d_ju_regex_Pattern$ = new $TypeData().initClass({
  ju_regex_Pattern$: 0
}, false, "java.util.regex.Pattern$", {
  ju_regex_Pattern$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_ju_regex_Pattern$.prototype.$classData = $d_ju_regex_Pattern$;
let $n_ju_regex_Pattern$ = (void 0);
function $m_ju_regex_Pattern$() {
  if ((!$n_ju_regex_Pattern$)) {
    $n_ju_regex_Pattern$ = new $c_ju_regex_Pattern$()
  };
  return $n_ju_regex_Pattern$
}
class $c_s_Console$ extends $c_s_DeprecatedConsole {
  constructor() {
    super();
    this.s_Console$__f_outVar = null;
    this.s_Console$__f_errVar = null;
    this.s_Console$__f_inVar = null;
    $n_s_Console$ = this;
    this.s_Console$__f_outVar = new $c_s_util_DynamicVariable($m_jl_System$Streams$().jl_System$Streams$__f_out);
    this.s_Console$__f_errVar = new $c_s_util_DynamicVariable($m_jl_System$Streams$().jl_System$Streams$__f_err);
    this.s_Console$__f_inVar = new $c_s_util_DynamicVariable(null)
  };
}
const $d_s_Console$ = new $TypeData().initClass({
  s_Console$: 0
}, false, "scala.Console$", {
  s_Console$: 1,
  s_DeprecatedConsole: 1,
  O: 1,
  s_io_AnsiColor: 1
});
$c_s_Console$.prototype.$classData = $d_s_Console$;
let $n_s_Console$ = (void 0);
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$()
  };
  return $n_s_Console$
}
class $c_s_Option$ extends $c_O {
  apply__O__s_Option(x) {
    return ((x === null) ? $m_s_None$() : new $c_s_Some(x))
  };
}
const $d_s_Option$ = new $TypeData().initClass({
  s_Option$: 0
}, false, "scala.Option$", {
  s_Option$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Option$.prototype.$classData = $d_s_Option$;
let $n_s_Option$ = (void 0);
function $m_s_Option$() {
  if ((!$n_s_Option$)) {
    $n_s_Option$ = new $c_s_Option$()
  };
  return $n_s_Option$
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.T2__f__1;
      break
    }
    case 1: {
      return $thiz.T2__f__2;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
    }
  }
}
function $f_sc_Iterator__foreach__F1__V($thiz, f) {
  while ($thiz.hasNext__Z()) {
    f.apply__O__O($thiz.next__O())
  }
}
function $f_sc_Iterator__copyToArray__O__I__I__V($thiz, xs, start, len) {
  let i = start;
  const y = (($m_sr_ScalaRunTime$().array_length__O__I(xs) - start) | 0);
  const end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && $thiz.hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, $thiz.next__O());
    i = ((1 + i) | 0)
  }
}
class $c_scg_GenSeqFactory extends $c_scg_GenTraversableFactory {
}
class $c_scg_GenTraversableFactory$$anon$1 extends $c_scg_GenTraversableFactory$GenericCanBuildFrom {
  constructor(outer) {
    super();
    this.scg_GenTraversableFactory$$anon$1__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.scg_GenTraversableFactory$$anon$1__f_$outer = outer
    };
    $ct_scg_GenTraversableFactory$GenericCanBuildFrom__scg_GenTraversableFactory__(this, outer)
  };
}
const $d_scg_GenTraversableFactory$$anon$1 = new $TypeData().initClass({
  scg_GenTraversableFactory$$anon$1: 0
}, false, "scala.collection.generic.GenTraversableFactory$$anon$1", {
  scg_GenTraversableFactory$$anon$1: 1,
  scg_GenTraversableFactory$GenericCanBuildFrom: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_scg_GenTraversableFactory$$anon$1.prototype.$classData = $d_scg_GenTraversableFactory$$anon$1;
const $p_sci_Range$__description__I__I__I__Z__T = (function($thiz, start, end, step, isInclusive) {
  return ((((start + (isInclusive ? " to " : " until ")) + end) + " by ") + step)
});
class $c_sci_Range$ extends $c_O {
  constructor() {
    super();
    this.sci_Range$__f_MAX_PRINT = 0;
    this.sci_Range$__f_MAX_PRINT = 512
  };
  scala$collection$immutable$Range$$fail__I__I__I__Z__E(start, end, step, isInclusive) {
    throw new $c_jl_IllegalArgumentException(($p_sci_Range$__description__I__I__I__Z__T(this, start, end, step, isInclusive) + ": seqs cannot contain more than Int.MaxValue elements."))
  };
}
const $d_sci_Range$ = new $TypeData().initClass({
  sci_Range$: 0
}, false, "scala.collection.immutable.Range$", {
  sci_Range$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range$.prototype.$classData = $d_sci_Range$;
let $n_sci_Range$ = (void 0);
function $m_sci_Range$() {
  if ((!$n_sci_Range$)) {
    $n_sci_Range$ = new $c_sci_Range$()
  };
  return $n_sci_Range$
}
class $c_s_math_ScalaNumber {
}
function $as_s_math_ScalaNumber(obj) {
  return (((obj instanceof $c_s_math_ScalaNumber) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"))
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)))
}
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth))
}
class $c_s_reflect_ClassTag$ extends $c_O {
  apply__jl_Class__s_reflect_ClassTag(runtimeClass1) {
    return ((runtimeClass1 === $d_B.getClassOf()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.getClassOf()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.getClassOf()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.getClassOf()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.getClassOf()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.getClassOf()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.getClassOf()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.getClassOf()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.getClassOf()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.getClassOf()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.getClassOf()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.getClassOf()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))))
  };
}
const $d_s_reflect_ClassTag$ = new $TypeData().initClass({
  s_reflect_ClassTag$: 0
}, false, "scala.reflect.ClassTag$", {
  s_reflect_ClassTag$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_reflect_ClassTag$.prototype.$classData = $d_s_reflect_ClassTag$;
let $n_s_reflect_ClassTag$ = (void 0);
function $m_s_reflect_ClassTag$() {
  if ((!$n_s_reflect_ClassTag$)) {
    $n_s_reflect_ClassTag$ = new $c_s_reflect_ClassTag$()
  };
  return $n_s_reflect_ClassTag$
}
class $c_sr_LazyRef extends $c_O {
  constructor() {
    super();
    this.sr_LazyRef__f__initialized = false;
    this.sr_LazyRef__f__value = null
  };
  initialize__O__O(value) {
    this.sr_LazyRef__f__value = value;
    this.sr_LazyRef__f__initialized = true;
    return value
  };
  toString__T() {
    return ("LazyRef " + (this.sr_LazyRef__f__initialized ? ("of: " + this.sr_LazyRef__f__value) : "thunk"))
  };
}
const $d_sr_LazyRef = new $TypeData().initClass({
  sr_LazyRef: 0
}, false, "scala.runtime.LazyRef", {
  sr_LazyRef: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sr_LazyRef.prototype.$classData = $d_sr_LazyRef;
const $d_sr_Nothing$ = new $TypeData().initClass({
  sr_Nothing$: 0
}, false, "scala.runtime.Nothing$", {
  sr_Nothing$: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
const $ct_s_util_matching_Regex__ju_regex_Pattern__sc_Seq__ = (function($thiz, pattern, groupNames) {
  $thiz.s_util_matching_Regex__f_pattern = pattern;
  $thiz.s_util_matching_Regex__f_scala$util$matching$Regex$$groupNames = groupNames;
  return $thiz
});
const $ct_s_util_matching_Regex__T__sc_Seq__ = (function($thiz, regex, groupNames) {
  const this$1 = $m_ju_regex_Pattern$();
  $ct_s_util_matching_Regex__ju_regex_Pattern__sc_Seq__($thiz, this$1.compile__T__I__ju_regex_Pattern(regex, 0), groupNames);
  return $thiz
});
class $c_s_util_matching_Regex extends $c_O {
  constructor() {
    super();
    this.s_util_matching_Regex__f_pattern = null;
    this.s_util_matching_Regex__f_scala$util$matching$Regex$$groupNames = null
  };
  unapplySeq__jl_CharSequence__s_Option(s) {
    if ((s === null)) {
      return $m_s_None$()
    } else {
      const this$1 = this.s_util_matching_Regex__f_pattern;
      const m = new $c_ju_regex_Matcher(this$1, s, 0, $dp_length__I(s));
      return (m.matches__Z() ? $m_s_util_matching_Regex$().scala$util$matching$Regex$$extractGroupsFromMatcher__ju_regex_Matcher__s_Option(m) : $m_s_None$())
    }
  };
  toString__T() {
    return this.s_util_matching_Regex__f_pattern.ju_regex_Pattern__f__pattern
  };
}
const $d_s_util_matching_Regex = new $TypeData().initClass({
  s_util_matching_Regex: 0
}, false, "scala.util.matching.Regex", {
  s_util_matching_Regex: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_matching_Regex.prototype.$classData = $d_s_util_matching_Regex;
class $c_s_util_matching_Regex$ extends $c_O {
  scala$util$matching$Regex$$extractGroupsFromMatcher__ju_regex_Matcher__s_Option(m) {
    $m_sci_List$();
    let res = $m_sci_Nil$();
    let index = $m_ju_regex_Matcher$().java$util$regex$Matcher$$getGroupCount__sjs_js_RegExp$ExecResult__ju_regex_Pattern__I(m.ju_regex_Matcher__f_lastMatch, m.ju_regex_Matcher__f_pattern0);
    while ((index > 0)) {
      const this$2 = res;
      const x = m.group__I__T(index);
      res = new $c_sci_$colon$colon(x, this$2);
      index = (((-1) + index) | 0)
    };
    return new $c_s_Some(res)
  };
}
const $d_s_util_matching_Regex$ = new $TypeData().initClass({
  s_util_matching_Regex$: 0
}, false, "scala.util.matching.Regex$", {
  s_util_matching_Regex$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_matching_Regex$.prototype.$classData = $d_s_util_matching_Regex$;
let $n_s_util_matching_Regex$ = (void 0);
function $m_s_util_matching_Regex$() {
  if ((!$n_s_util_matching_Regex$)) {
    $n_s_util_matching_Regex$ = new $c_s_util_matching_Regex$()
  };
  return $n_s_util_matching_Regex$
}
function $f_Lscalatags_JsDom$Aggregate__$init$__V($thiz) {
  $thiz.Lscalatags_JsDom$all$__f_RawFrag = $m_Lscalatags_JsDom$RawFrag$();
  $thiz.Lscalatags_JsDom$all$__f_StringFrag = $m_Lscalatags_JsDom$StringFrag$();
  $thiz.Lscalatags_JsDom$all$__f_HtmlTag = $m_Lscalatags_JsDom$TypedTag$();
  $thiz.Lscalatags_JsDom$all$__f_SvgTag = $m_Lscalatags_JsDom$TypedTag$();
  $thiz.Lscalatags_JsDom$all$__f_Tag = $m_Lscalatags_JsDom$TypedTag$()
}
class $c_Lscalatags_JsDom$TypedTag$ extends $c_O {
  toString__T() {
    return "TypedTag"
  };
}
const $d_Lscalatags_JsDom$TypedTag$ = new $TypeData().initClass({
  Lscalatags_JsDom$TypedTag$: 0
}, false, "scalatags.JsDom$TypedTag$", {
  Lscalatags_JsDom$TypedTag$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_JsDom$TypedTag$.prototype.$classData = $d_Lscalatags_JsDom$TypedTag$;
let $n_Lscalatags_JsDom$TypedTag$ = (void 0);
function $m_Lscalatags_JsDom$TypedTag$() {
  if ((!$n_Lscalatags_JsDom$TypedTag$)) {
    $n_Lscalatags_JsDom$TypedTag$ = new $c_Lscalatags_JsDom$TypedTag$()
  };
  return $n_Lscalatags_JsDom$TypedTag$
}
class $c_Lscalatags_LowPriorityImplicits$bindNode extends $c_O {
  constructor(outer, e) {
    super();
    this.Lscalatags_LowPriorityImplicits$bindNode__f_e = null;
    this.Lscalatags_LowPriorityImplicits$bindNode__f_$outer = null;
    this.Lscalatags_LowPriorityImplicits$bindNode__f_e = e;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.Lscalatags_LowPriorityImplicits$bindNode__f_$outer = outer
    }
  };
  applyTo__Lorg_scalajs_dom_raw_Element__V(t) {
    t.appendChild(this.Lscalatags_LowPriorityImplicits$bindNode__f_e)
  };
  applyTo__O__V(t) {
    this.applyTo__Lorg_scalajs_dom_raw_Element__V(t)
  };
}
const $d_Lscalatags_LowPriorityImplicits$bindNode = new $TypeData().initClass({
  Lscalatags_LowPriorityImplicits$bindNode: 0
}, false, "scalatags.LowPriorityImplicits$bindNode", {
  Lscalatags_LowPriorityImplicits$bindNode: 1,
  O: 1,
  Lscalatags_generic_Frag: 1,
  Lscalatags_generic_Modifier: 1
});
$c_Lscalatags_LowPriorityImplicits$bindNode.prototype.$classData = $d_Lscalatags_LowPriorityImplicits$bindNode;
function $f_Lscalatags_generic_MouseEventAttrs__$init$__V($thiz) {
  $thiz.Lscalatags_JsDom$all$__f_ondrag = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, "ondrag", null, false)
}
function $f_Lscalatags_generic_TypedTag__build__O__V($thiz, b) {
  let current = $thiz.Lscalatags_JsDom$TypedTag__f_modifiers;
  const this$1 = $thiz.Lscalatags_JsDom$TypedTag__f_modifiers;
  const arr = $newArrayObject($d_sc_Seq.getArrayOf(), [$f_sc_LinearSeqOptimized__length__I(this$1)]);
  let i = 0;
  while (true) {
    const x = current;
    const x$2 = $m_sci_Nil$();
    if ((!((x !== null) && x.equals__O__Z(x$2)))) {
      arr.set(i, $as_sc_Seq(current.head__O()));
      const this$2 = current;
      current = this$2.tail__sci_List();
      i = ((1 + i) | 0)
    } else {
      break
    }
  };
  let j = arr.u.length;
  while ((j > 0)) {
    j = (((-1) + j) | 0);
    const frag = arr.get(j);
    let i$2 = 0;
    while ((i$2 < frag.length__I())) {
      $as_Lscalatags_generic_Modifier(frag.apply__I__O(i$2)).applyTo__O__V(b);
      i$2 = ((1 + i$2) | 0)
    }
  }
}
function $f_Lscalatags_jsdom_Frag__applyTo__Lorg_scalajs_dom_raw_Element__V($thiz, b) {
  b.appendChild($thiz.render__Lorg_scalajs_dom_raw_Node())
}
function $f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag($thiz, s, void$1, ns) {
  if ((!$m_Lscalatags_Escaping$().validTag__T__Z(s))) {
    throw new $c_jl_IllegalArgumentException((("Illegal tag name: " + s) + " is not a valid XML tag name"))
  };
  return new $c_Lscalatags_JsDom$TypedTag(s, $m_sci_Nil$(), void$1, ns)
}
class $c_Ljava_io_OutputStream extends $c_O {
}
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $uB($thiz)
}
function $f_jl_Byte__toString__T($thiz) {
  const b = $uB($thiz);
  return ("" + b)
}
const $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isByte(x)));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Double__hashCode__I($thiz) {
  const value = $uD($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
}
function $f_jl_Double__toString__T($thiz) {
  const d = $uD($thiz);
  return ("" + d)
}
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"))
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)))
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth))
}
const $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Float__hashCode__I($thiz) {
  const value = $uF($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
}
function $f_jl_Float__toString__T($thiz) {
  const f = $uF($thiz);
  return ("" + f)
}
const $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $uI($thiz)
}
function $f_jl_Integer__toString__T($thiz) {
  const i = $uI($thiz);
  return ("" + i)
}
const $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    const x2 = $as_jl_Long(that);
    const t = $uJ($thiz);
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    const b = $uJ(x2);
    return ((lo === b.RTLong__f_lo) && (hi === b.RTLong__f_hi))
  } else {
    return false
  }
}
function $f_jl_Long__hashCode__I($thiz) {
  const t = $uJ($thiz);
  const lo = t.RTLong__f_lo;
  const hi = t.RTLong__f_hi;
  return (lo ^ hi)
}
function $f_jl_Long__toString__T($thiz) {
  const t = $uJ($thiz);
  const lo = t.RTLong__f_lo;
  const hi = t.RTLong__f_hi;
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(lo, hi)
}
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"))
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)))
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth))
}
const $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => (x instanceof $c_RTLong)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Short__hashCode__I($thiz) {
  return $uS($thiz)
}
function $f_jl_Short__toString__T($thiz) {
  const s = $uS($thiz);
  return ("" + s)
}
const $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isShort(x)));
function $f_T__hashCode__I($thiz) {
  let res = 0;
  let mul = 1;
  let i = (((-1) + $uI($thiz.length)) | 0);
  while ((i >= 0)) {
    const $$x1 = res;
    const index = i;
    res = (($$x1 + $imul((65535 & $uI($thiz.charCodeAt(index))), mul)) | 0);
    mul = $imul(31, mul);
    i = (((-1) + i) | 0)
  };
  return res
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_T__length__I($thiz) {
  return $uI($thiz.length)
}
function $f_T__substring__I__I__T($thiz, beginIndex, endIndex) {
  return $as_T($thiz.substring(beginIndex, endIndex))
}
function $f_T__toString__T($thiz) {
  return $thiz
}
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"))
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth))
}
const $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "string")));
const $ct_jl_StringBuilder__ = (function($thiz) {
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
  return $thiz
});
const $ct_jl_StringBuilder__I__ = (function($thiz, initialCapacity) {
  $ct_jl_StringBuilder__($thiz);
  if ((initialCapacity < 0)) {
    throw new $c_jl_NegativeArraySizeException()
  };
  return $thiz
});
class $c_jl_StringBuilder extends $c_O {
  constructor() {
    super();
    this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null
  };
  toString__T() {
    return this.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  length__I() {
    const this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    return $uI(this$1.length)
  };
  charAt__I__C(index) {
    const this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    return (65535 & $uI(this$1.charCodeAt(index)))
  };
  substring__I__I__T(start, end) {
    const this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    return $as_T(this$1.substring(start, end))
  };
}
const $d_jl_StringBuilder = new $TypeData().initClass({
  jl_StringBuilder: 0
}, false, "java.lang.StringBuilder", {
  jl_StringBuilder: 1,
  O: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringBuilder.prototype.$classData = $d_jl_StringBuilder;
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
class $c_RTLong extends $c_jl_Number {
  constructor(lo, hi) {
    super();
    this.RTLong__f_lo = 0;
    this.RTLong__f_hi = 0;
    this.RTLong__f_lo = lo;
    this.RTLong__f_hi = hi
  };
  equals__O__Z(that) {
    if ((that instanceof $c_RTLong)) {
      const x2 = $as_RTLong(that);
      return ((this.RTLong__f_lo === x2.RTLong__f_lo) && (this.RTLong__f_hi === x2.RTLong__f_hi))
    } else {
      return false
    }
  };
  hashCode__I() {
    return (this.RTLong__f_lo ^ this.RTLong__f_hi)
  };
  toString__T() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  toInt__I() {
    return this.RTLong__f_lo
  };
  toDouble__D() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  byteValue__B() {
    return ((this.RTLong__f_lo << 24) >> 24)
  };
  shortValue__S() {
    return ((this.RTLong__f_lo << 16) >> 16)
  };
  intValue__I() {
    return this.RTLong__f_lo
  };
  longValue__J() {
    return $uJ(this)
  };
  floatValue__F() {
    return $fround($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi))
  };
  doubleValue__D() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  compareTo__jl_Long__I(that) {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
  };
  equals__RTLong__Z(b) {
    return ((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi))
  };
  notEquals__RTLong__Z(b) {
    return (!((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi)))
  };
  $less__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
  };
  $less$eq__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
  };
  $greater__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
  };
  $greater$eq__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
  };
  unary_$tilde__RTLong() {
    return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi))
  };
  $bar__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo | b.RTLong__f_lo), (this.RTLong__f_hi | b.RTLong__f_hi))
  };
  $amp__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo & b.RTLong__f_lo), (this.RTLong__f_hi & b.RTLong__f_hi))
  };
  $up__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo ^ b.RTLong__f_lo), (this.RTLong__f_hi ^ b.RTLong__f_hi))
  };
  $less$less__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (this.RTLong__f_lo << n) : 0), (((32 & n) === 0) ? (((((this.RTLong__f_lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (this.RTLong__f_lo << n)))
  };
  $greater$greater$greater__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((this.RTLong__f_hi << 1) << ((31 - n) | 0))) : ((this.RTLong__f_hi >>> n) | 0)), (((32 & n) === 0) ? ((this.RTLong__f_hi >>> n) | 0) : 0))
  };
  $greater$greater__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((this.RTLong__f_hi << 1) << ((31 - n) | 0))) : (this.RTLong__f_hi >> n)), (((32 & n) === 0) ? (this.RTLong__f_hi >> n) : (this.RTLong__f_hi >> 31)))
  };
  unary_$minus__RTLong() {
    const lo = this.RTLong__f_lo;
    const hi = this.RTLong__f_hi;
    return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))
  };
  $plus__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    const lo = ((alo + b.RTLong__f_lo) | 0);
    return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)))
  };
  $minus__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    const lo = ((alo - b.RTLong__f_lo) | 0);
    return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)))
  };
  $times__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const blo = b.RTLong__f_lo;
    const a0 = (65535 & alo);
    const a1 = ((alo >>> 16) | 0);
    const b0 = (65535 & blo);
    const b1 = ((blo >>> 16) | 0);
    const a0b0 = $imul(a0, b0);
    const a1b0 = $imul(a1, b0);
    const a0b1 = $imul(a0, b1);
    const lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    const c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    const hi = (((((((($imul(alo, b.RTLong__f_hi) + $imul(this.RTLong__f_hi, blo)) | 0) + $imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    return new $c_RTLong(lo, hi)
  };
  $div__RTLong__RTLong(b) {
    const this$1 = $m_RTLong$();
    const lo = this$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
    return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  $percent__RTLong__RTLong(b) {
    const this$1 = $m_RTLong$();
    const lo = this$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
    return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  compareTo__O__I(x$1) {
    const that = $as_jl_Long(x$1);
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
  };
}
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"))
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)))
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth))
}
const $d_RTLong = new $TypeData().initClass({
  RTLong: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong", {
  RTLong: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
});
$c_RTLong.prototype.$classData = $d_RTLong;
const $p_s_Array$__slowcopy__O__I__O__I__I__V = (function($thiz, src, srcPos, dest, destPos, length) {
  let i = srcPos;
  let j = destPos;
  const srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest, j, $m_sr_ScalaRunTime$().array_apply__O__I__O(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0)
  }
});
class $c_s_Array$ extends $c_s_FallbackArrayBuilding {
  copy__O__I__O__I__I__V(src, srcPos, dest, destPos, length) {
    const srcClass = $objectGetClass(src);
    if ((srcClass.isArray__Z() && $objectGetClass(dest).isAssignableFrom__jl_Class__Z(srcClass))) {
      $systemArraycopy(src, srcPos, dest, destPos, length)
    } else {
      $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length)
    }
  };
}
const $d_s_Array$ = new $TypeData().initClass({
  s_Array$: 0
}, false, "scala.Array$", {
  s_Array$: 1,
  s_FallbackArrayBuilding: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Array$.prototype.$classData = $d_s_Array$;
let $n_s_Array$ = (void 0);
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$()
  };
  return $n_s_Array$
}
class $c_sc_AbstractIterator extends $c_O {
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  foreach__F1__V(f) {
    $f_sc_Iterator__foreach__F1__V(this, f)
  };
  copyToArray__O__I__I__V(xs, start, len) {
    $f_sc_Iterator__copyToArray__O__I__I__V(this, xs, start, len)
  };
  toString__T() {
    return "<iterator>"
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
}
const $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__ = (function($thiz, out) {
  $thiz.Ljava_io_FilterOutputStream__f_out = out;
  return $thiz
});
class $c_Ljava_io_FilterOutputStream extends $c_Ljava_io_OutputStream {
  constructor() {
    super();
    this.Ljava_io_FilterOutputStream__f_out = null
  };
}
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_ClassCastException = new $TypeData().initClass({
  jl_ClassCastException: 0
}, false, "java.lang.ClassCastException", {
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ClassCastException.prototype.$classData = $d_jl_ClassCastException;
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_IllegalArgumentException = new $TypeData().initClass({
  jl_IllegalArgumentException: 0
}, false, "java.lang.IllegalArgumentException", {
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalArgumentException.prototype.$classData = $d_jl_IllegalArgumentException;
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_IllegalStateException = new $TypeData().initClass({
  jl_IllegalStateException: 0
}, false, "java.lang.IllegalStateException", {
  jl_IllegalStateException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalStateException.prototype.$classData = $d_jl_IllegalStateException;
const $ct_jl_IndexOutOfBoundsException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
const $d_jl_IndexOutOfBoundsException = new $TypeData().initClass({
  jl_IndexOutOfBoundsException: 0
}, false, "java.lang.IndexOutOfBoundsException", {
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IndexOutOfBoundsException.prototype.$classData = $d_jl_IndexOutOfBoundsException;
class $c_jl_JSConsoleBasedPrintStream$DummyOutputStream extends $c_Ljava_io_OutputStream {
}
const $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().initClass({
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 0
}, false, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", {
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 1,
  Ljava_io_OutputStream: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1
});
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype.$classData = $d_jl_JSConsoleBasedPrintStream$DummyOutputStream;
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
const $d_jl_NegativeArraySizeException = new $TypeData().initClass({
  jl_NegativeArraySizeException: 0
}, false, "java.lang.NegativeArraySizeException", {
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NegativeArraySizeException.prototype.$classData = $d_jl_NegativeArraySizeException;
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
const $d_jl_NullPointerException = new $TypeData().initClass({
  jl_NullPointerException: 0
}, false, "java.lang.NullPointerException", {
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NullPointerException.prototype.$classData = $d_jl_NullPointerException;
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_UnsupportedOperationException = new $TypeData().initClass({
  jl_UnsupportedOperationException: 0
}, false, "java.lang.UnsupportedOperationException", {
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_UnsupportedOperationException.prototype.$classData = $d_jl_UnsupportedOperationException;
const $ct_ju_NoSuchElementException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
const $ct_ju_NoSuchElementException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
}
const $d_ju_NoSuchElementException = new $TypeData().initClass({
  ju_NoSuchElementException: 0
}, false, "java.util.NoSuchElementException", {
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_NoSuchElementException.prototype.$classData = $d_ju_NoSuchElementException;
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
  constructor(cause) {
    super();
    const message = ((cause === null) ? null : cause.toString__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
const $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 0
}, false, "org.scalajs.linker.runtime.UndefinedBehaviorError", {
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError.prototype.$classData = $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError;
const $p_s_MatchError__objString$lzycompute__T = (function($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true
  };
  return $thiz.s_MatchError__f_objString
});
const $p_s_MatchError__objString__T = (function($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString)
});
const $p_s_MatchError__ofClass$1__T = (function($thiz) {
  const this$1 = $thiz.s_MatchError__f_obj;
  return ("of class " + $objectClassName(this$1))
});
const $p_s_MatchError__liftedTree1$1__T = (function($thiz) {
  try {
    return ((($dp_toString__T($thiz.s_MatchError__f_obj) + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")")
  } catch (e) {
    const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
    if ((e$2 !== null)) {
      return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz))
    } else {
      throw e
    }
  }
});
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $p_s_MatchError__objString__T(this)
  };
}
const $d_s_MatchError = new $TypeData().initClass({
  s_MatchError: 0
}, false, "scala.MatchError", {
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_MatchError.prototype.$classData = $d_s_MatchError;
class $c_s_Option extends $c_O {
}
class $c_sc_Iterator$$anon$2 extends $c_sc_AbstractIterator {
  hasNext__Z() {
    return false
  };
  next__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator")
  };
  next__O() {
    this.next__E()
  };
}
const $d_sc_Iterator$$anon$2 = new $TypeData().initClass({
  sc_Iterator$$anon$2: 0
}, false, "scala.collection.Iterator$$anon$2", {
  sc_Iterator$$anon$2: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sc_Iterator$$anon$2.prototype.$classData = $d_sc_Iterator$$anon$2;
class $c_sc_LinearSeqLike$$anon$1 extends $c_sc_AbstractIterator {
  constructor(outer) {
    super();
    this.sc_LinearSeqLike$$anon$1__f_these = null;
    this.sc_LinearSeqLike$$anon$1__f_these = outer
  };
  hasNext__Z() {
    return (!this.sc_LinearSeqLike$$anon$1__f_these.isEmpty__Z())
  };
  next__O() {
    if (this.hasNext__Z()) {
      const result = this.sc_LinearSeqLike$$anon$1__f_these.head__O();
      this.sc_LinearSeqLike$$anon$1__f_these = $as_sc_LinearSeqLike(this.sc_LinearSeqLike$$anon$1__f_these.tail__O());
      return result
    } else {
      return $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
    }
  };
}
const $d_sc_LinearSeqLike$$anon$1 = new $TypeData().initClass({
  sc_LinearSeqLike$$anon$1: 0
}, false, "scala.collection.LinearSeqLike$$anon$1", {
  sc_LinearSeqLike$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sc_LinearSeqLike$$anon$1.prototype.$classData = $d_sc_LinearSeqLike$$anon$1;
class $c_sr_ScalaRunTime$$anon$1 extends $c_sc_AbstractIterator {
  constructor(x$2) {
    super();
    this.sr_ScalaRunTime$$anon$1__f_c = 0;
    this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
    this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
    this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
    this.sr_ScalaRunTime$$anon$1__f_c = 0;
    this.sr_ScalaRunTime$$anon$1__f_cmax = x$2.productArity__I()
  };
  hasNext__Z() {
    return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax)
  };
  next__O() {
    const result = this.sr_ScalaRunTime$$anon$1__f_x$2.productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
    this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
    return result
  };
}
const $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass({
  sr_ScalaRunTime$$anon$1: 0
}, false, "scala.runtime.ScalaRunTime$$anon$1", {
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sr_ScalaRunTime$$anon$1.prototype.$classData = $d_sr_ScalaRunTime$$anon$1;
class $c_Lscalatags_JsDom$RawFrag$ extends $c_O {
  toString__T() {
    return "<function1>"
  };
  apply__O__O(v1) {
    const v = $as_T(v1);
    return new $c_Lscalatags_JsDom$RawFrag(v)
  };
}
const $d_Lscalatags_JsDom$RawFrag$ = new $TypeData().initClass({
  Lscalatags_JsDom$RawFrag$: 0
}, false, "scalatags.JsDom$RawFrag$", {
  Lscalatags_JsDom$RawFrag$: 1,
  O: 1,
  Lscalatags_package$Companion: 1,
  F1: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_JsDom$RawFrag$.prototype.$classData = $d_Lscalatags_JsDom$RawFrag$;
let $n_Lscalatags_JsDom$RawFrag$ = (void 0);
function $m_Lscalatags_JsDom$RawFrag$() {
  if ((!$n_Lscalatags_JsDom$RawFrag$)) {
    $n_Lscalatags_JsDom$RawFrag$ = new $c_Lscalatags_JsDom$RawFrag$()
  };
  return $n_Lscalatags_JsDom$RawFrag$
}
class $c_Lscalatags_JsDom$StringFrag$ extends $c_O {
  toString__T() {
    return "<function1>"
  };
  apply__O__O(v1) {
    const v = $as_T(v1);
    return new $c_Lscalatags_JsDom$StringFrag(v)
  };
}
const $d_Lscalatags_JsDom$StringFrag$ = new $TypeData().initClass({
  Lscalatags_JsDom$StringFrag$: 0
}, false, "scalatags.JsDom$StringFrag$", {
  Lscalatags_JsDom$StringFrag$: 1,
  O: 1,
  Lscalatags_package$Companion: 1,
  F1: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_JsDom$StringFrag$.prototype.$classData = $d_Lscalatags_JsDom$StringFrag$;
let $n_Lscalatags_JsDom$StringFrag$ = (void 0);
function $m_Lscalatags_JsDom$StringFrag$() {
  if ((!$n_Lscalatags_JsDom$StringFrag$)) {
    $n_Lscalatags_JsDom$StringFrag$ = new $c_Lscalatags_JsDom$StringFrag$()
  };
  return $n_Lscalatags_JsDom$StringFrag$
}
class $c_Lscalatags_generic_Attr extends $c_O {
  constructor(name, namespace, raw) {
    super();
    this.Lscalatags_generic_Attr__f_name = null;
    this.Lscalatags_generic_Attr__f_namespace = null;
    this.Lscalatags_generic_Attr__f_raw = false;
    this.Lscalatags_generic_Attr__f_name = name;
    this.Lscalatags_generic_Attr__f_namespace = namespace;
    this.Lscalatags_generic_Attr__f_raw = raw;
    if (((!raw) && (!$m_Lscalatags_Escaping$().validAttrName__T__Z(name)))) {
      throw new $c_jl_IllegalArgumentException((("Illegal attribute name: " + name) + " is not a valid XML attribute name"))
    }
  };
  $colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair(v, ev) {
    if ((v === null)) {
      throw new $c_jl_NullPointerException()
    };
    return new $c_Lscalatags_generic_AttrPair(this, v, ev)
  };
  productPrefix__T() {
    return "Attr"
  };
  productArity__I() {
    return 3
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lscalatags_generic_Attr__f_name;
        break
      }
      case 1: {
        return this.Lscalatags_generic_Attr__f_namespace;
        break
      }
      case 2: {
        return this.Lscalatags_generic_Attr__f_raw;
        break
      }
      default: {
        throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    let acc = (-889275714);
    const hash = acc;
    const x = this.Lscalatags_generic_Attr__f_name;
    const data = $m_sr_Statics$().anyHash__O__I(x);
    acc = $m_sr_Statics$().mix__I__I__I(hash, data);
    const hash$1 = acc;
    const x$1 = this.Lscalatags_generic_Attr__f_namespace;
    const data$1 = $m_sr_Statics$().anyHash__O__I(x$1);
    acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
    const hash$2 = acc;
    const data$2 = (this.Lscalatags_generic_Attr__f_raw ? 1231 : 1237);
    acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
    const hash$3 = acc;
    return $m_sr_Statics$().finalizeHash__I__I__I(hash$3, 3)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lscalatags_generic_Attr)) {
      const Attr$1 = $as_Lscalatags_generic_Attr(x$1);
      let $$x1;
      if ((this.Lscalatags_generic_Attr__f_name === Attr$1.Lscalatags_generic_Attr__f_name)) {
        const x = this.Lscalatags_generic_Attr__f_namespace;
        const x$2 = Attr$1.Lscalatags_generic_Attr__f_namespace;
        $$x1 = ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
      } else {
        $$x1 = false
      };
      if ($$x1) {
        return (this.Lscalatags_generic_Attr__f_raw === Attr$1.Lscalatags_generic_Attr__f_raw)
      } else {
        return false
      }
    } else {
      return false
    }
  };
}
function $as_Lscalatags_generic_Attr(obj) {
  return (((obj instanceof $c_Lscalatags_generic_Attr) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.Attr"))
}
function $isArrayOf_Lscalatags_generic_Attr(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_Attr)))
}
function $asArrayOf_Lscalatags_generic_Attr(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_Attr(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.Attr;", depth))
}
const $d_Lscalatags_generic_Attr = new $TypeData().initClass({
  Lscalatags_generic_Attr: 0
}, false, "scalatags.generic.Attr", {
  Lscalatags_generic_Attr: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_generic_Attr.prototype.$classData = $d_Lscalatags_generic_Attr;
const $ct_Lscalatags_generic_PixelStyle__T__T__ = (function($thiz, jsName, cssName) {
  $thiz.Lscalatags_generic_PixelStyle__f_jsName = jsName;
  $thiz.Lscalatags_generic_PixelStyle__f_cssName = cssName;
  $thiz.Lscalatags_generic_PixelStyle__f_realStyle = new $c_Lscalatags_generic_Style(jsName, cssName);
  return $thiz
});
class $c_Lscalatags_generic_PixelStyle extends $c_O {
  constructor() {
    super();
    this.Lscalatags_generic_PixelStyle__f_jsName = null;
    this.Lscalatags_generic_PixelStyle__f_cssName = null;
    this.Lscalatags_generic_PixelStyle__f_realStyle = null
  };
  $colon$eq__O__Lscalatags_generic_PixelStyleValue__Lscalatags_generic_StylePair(v, ev) {
    if ((v === null)) {
      throw new $c_jl_NullPointerException()
    };
    return ev.apply__Lscalatags_generic_Style__O__Lscalatags_generic_StylePair(this.Lscalatags_generic_PixelStyle__f_realStyle, v)
  };
  productPrefix__T() {
    return "PixelStyle"
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lscalatags_generic_PixelStyle__f_jsName;
        break
      }
      case 1: {
        return this.Lscalatags_generic_PixelStyle__f_cssName;
        break
      }
      default: {
        throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__I(this, (-889275714))
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lscalatags_generic_PixelStyle)) {
      const PixelStyle$1 = $as_Lscalatags_generic_PixelStyle(x$1);
      return ((this.Lscalatags_generic_PixelStyle__f_jsName === PixelStyle$1.Lscalatags_generic_PixelStyle__f_jsName) && (this.Lscalatags_generic_PixelStyle__f_cssName === PixelStyle$1.Lscalatags_generic_PixelStyle__f_cssName))
    } else {
      return false
    }
  };
}
function $as_Lscalatags_generic_PixelStyle(obj) {
  return (((obj instanceof $c_Lscalatags_generic_PixelStyle) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.PixelStyle"))
}
function $isArrayOf_Lscalatags_generic_PixelStyle(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_PixelStyle)))
}
function $asArrayOf_Lscalatags_generic_PixelStyle(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_PixelStyle(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.PixelStyle;", depth))
}
class $c_Lscalatags_generic_Style extends $c_O {
  constructor(jsName, cssName) {
    super();
    this.Lscalatags_generic_Style__f_jsName = null;
    this.Lscalatags_generic_Style__f_cssName = null;
    this.Lscalatags_generic_Style__f_jsName = jsName;
    this.Lscalatags_generic_Style__f_cssName = cssName
  };
  productPrefix__T() {
    return "Style"
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lscalatags_generic_Style__f_jsName;
        break
      }
      case 1: {
        return this.Lscalatags_generic_Style__f_cssName;
        break
      }
      default: {
        throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__I(this, (-889275714))
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lscalatags_generic_Style)) {
      const Style$1 = $as_Lscalatags_generic_Style(x$1);
      return ((this.Lscalatags_generic_Style__f_jsName === Style$1.Lscalatags_generic_Style__f_jsName) && (this.Lscalatags_generic_Style__f_cssName === Style$1.Lscalatags_generic_Style__f_cssName))
    } else {
      return false
    }
  };
}
function $as_Lscalatags_generic_Style(obj) {
  return (((obj instanceof $c_Lscalatags_generic_Style) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.Style"))
}
function $isArrayOf_Lscalatags_generic_Style(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_Style)))
}
function $asArrayOf_Lscalatags_generic_Style(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_Style(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.Style;", depth))
}
const $d_Lscalatags_generic_Style = new $TypeData().initClass({
  Lscalatags_generic_Style: 0
}, false, "scalatags.generic.Style", {
  Lscalatags_generic_Style: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_generic_Style.prototype.$classData = $d_Lscalatags_generic_Style;
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass({
  jl_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", {
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayIndexOutOfBoundsException.prototype.$classData = $d_jl_ArrayIndexOutOfBoundsException;
class $c_s_None$ extends $c_s_Option {
  isEmpty__Z() {
    return true
  };
  get__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "None.get")
  };
  productPrefix__T() {
    return "None"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    return 2433880
  };
  toString__T() {
    return "None"
  };
  get__O() {
    this.get__E()
  };
}
const $d_s_None$ = new $TypeData().initClass({
  s_None$: 0
}, false, "scala.None$", {
  s_None$: 1,
  s_Option: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_None$.prototype.$classData = $d_s_None$;
let $n_s_None$ = (void 0);
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$()
  };
  return $n_s_None$
}
class $c_s_Some extends $c_s_Option {
  constructor(value) {
    super();
    this.s_Some__f_value = null;
    this.s_Some__f_value = value
  };
  isEmpty__Z() {
    return false
  };
  get__O() {
    return this.s_Some__f_value
  };
  productPrefix__T() {
    return "Some"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    if ((x$1 === 0)) {
      return this.s_Some__f_value
    } else {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__I(this, (-889275714))
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_s_Some)) {
      const Some$1 = $as_s_Some(x$1);
      return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_value, Some$1.s_Some__f_value)
    } else {
      return false
    }
  };
}
function $as_s_Some(obj) {
  return (((obj instanceof $c_s_Some) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Some"))
}
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Some)))
}
function $asArrayOf_s_Some(obj, depth) {
  return (($isArrayOf_s_Some(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Some;", depth))
}
const $d_s_Some = new $TypeData().initClass({
  s_Some: 0
}, false, "scala.Some", {
  s_Some: 1,
  s_Option: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Some.prototype.$classData = $d_s_Some;
class $c_T2 extends $c_O {
  constructor(_1, _2) {
    super();
    this.T2__f__1 = null;
    this.T2__f__2 = null;
    this.T2__f__1 = _1;
    this.T2__f__2 = _2
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(n) {
    return $f_s_Product2__productElement__I__O(this, n)
  };
  toString__T() {
    return (((("(" + this.T2__f__1) + ",") + this.T2__f__2) + ")")
  };
  productPrefix__T() {
    return "Tuple2"
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__I(this, (-889275714))
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_T2)) {
      const Tuple2$1 = $as_T2(x$1);
      return ($m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__1, Tuple2$1.T2__f__1) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__2, Tuple2$1.T2__f__2))
    } else {
      return false
    }
  };
}
function $as_T2(obj) {
  return (((obj instanceof $c_T2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple2"))
}
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T2)))
}
function $asArrayOf_T2(obj, depth) {
  return (($isArrayOf_T2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Tuple2;", depth))
}
const $d_T2 = new $TypeData().initClass({
  T2: 0
}, false, "scala.Tuple2", {
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_T2.prototype.$classData = $d_T2;
function $f_sc_GenSeqLike__equals__O__Z($thiz, that) {
  if ($is_sc_GenSeq(that)) {
    const x2 = $as_sc_GenSeq(that);
    return ((x2 === $thiz) || $thiz.sameElements__sc_GenIterable__Z(x2))
  } else {
    return false
  }
}
class $c_scg_SeqFactory extends $c_scg_GenSeqFactory {
}
const $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T = (function($thiz, clazz) {
  return (clazz.isArray__Z() ? (("Array[" + $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz.getComponentType__jl_Class())) + "]") : clazz.getName__T())
});
function $f_s_reflect_ClassTag__newArray__I__O($thiz, len) {
  const x1 = $thiz.runtimeClass__jl_Class();
  if ((x1 === $d_B.getClassOf())) {
    return $newArrayObject($d_B.getArrayOf(), [len])
  } else if ((x1 === $d_S.getClassOf())) {
    return $newArrayObject($d_S.getArrayOf(), [len])
  } else if ((x1 === $d_C.getClassOf())) {
    return $newArrayObject($d_C.getArrayOf(), [len])
  } else if ((x1 === $d_I.getClassOf())) {
    return $newArrayObject($d_I.getArrayOf(), [len])
  } else if ((x1 === $d_J.getClassOf())) {
    return $newArrayObject($d_J.getArrayOf(), [len])
  } else if ((x1 === $d_F.getClassOf())) {
    return $newArrayObject($d_F.getArrayOf(), [len])
  } else if ((x1 === $d_D.getClassOf())) {
    return $newArrayObject($d_D.getArrayOf(), [len])
  } else if ((x1 === $d_Z.getClassOf())) {
    return $newArrayObject($d_Z.getArrayOf(), [len])
  } else if ((x1 === $d_V.getClassOf())) {
    return $newArrayObject($d_jl_Void.getArrayOf(), [len])
  } else {
    const componentType = $thiz.runtimeClass__jl_Class();
    return $m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType, len)
  }
}
function $f_s_reflect_ClassTag__equals__O__Z($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    const x$2 = $thiz.runtimeClass__jl_Class();
    const x$3 = $as_s_reflect_ClassTag(x).runtimeClass__jl_Class();
    return (x$2 === x$3)
  } else {
    return false
  }
}
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_reflect_ClassTag)))
}
function $as_s_reflect_ClassTag(obj) {
  return (($is_s_reflect_ClassTag(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.reflect.ClassTag"))
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_reflect_ClassTag)))
}
function $asArrayOf_s_reflect_ClassTag(obj, depth) {
  return (($isArrayOf_s_reflect_ClassTag(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.reflect.ClassTag;", depth))
}
class $c_Lscalatags_JsDom$RawFrag extends $c_O {
  constructor(v) {
    super();
    this.Lscalatags_JsDom$RawFrag__f_v = null;
    this.Lscalatags_JsDom$RawFrag__f_v = v;
    if ((v === null)) {
      throw new $c_jl_NullPointerException()
    }
  };
  applyTo__Lorg_scalajs_dom_raw_Element__V(elem) {
    elem.insertAdjacentHTML("beforeend", this.Lscalatags_JsDom$RawFrag__f_v)
  };
  productPrefix__T() {
    return "RawFrag"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    if ((x$1 === 0)) {
      return this.Lscalatags_JsDom$RawFrag__f_v
    } else {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__I(this, (-889275714))
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lscalatags_JsDom$RawFrag)) {
      const RawFrag$1 = $as_Lscalatags_JsDom$RawFrag(x$1);
      return (this.Lscalatags_JsDom$RawFrag__f_v === RawFrag$1.Lscalatags_JsDom$RawFrag__f_v)
    } else {
      return false
    }
  };
  applyTo__O__V(t) {
    this.applyTo__Lorg_scalajs_dom_raw_Element__V(t)
  };
}
function $as_Lscalatags_JsDom$RawFrag(obj) {
  return (((obj instanceof $c_Lscalatags_JsDom$RawFrag) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.JsDom$RawFrag"))
}
function $isArrayOf_Lscalatags_JsDom$RawFrag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_JsDom$RawFrag)))
}
function $asArrayOf_Lscalatags_JsDom$RawFrag(obj, depth) {
  return (($isArrayOf_Lscalatags_JsDom$RawFrag(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.JsDom$RawFrag;", depth))
}
const $d_Lscalatags_JsDom$RawFrag = new $TypeData().initClass({
  Lscalatags_JsDom$RawFrag: 0
}, false, "scalatags.JsDom$RawFrag", {
  Lscalatags_JsDom$RawFrag: 1,
  O: 1,
  Lscalatags_generic_Modifier: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_JsDom$RawFrag.prototype.$classData = $d_Lscalatags_JsDom$RawFrag;
class $c_Lscalatags_generic_AttrPair extends $c_O {
  constructor(a, v, ev) {
    super();
    this.Lscalatags_generic_AttrPair__f_a = null;
    this.Lscalatags_generic_AttrPair__f_v = null;
    this.Lscalatags_generic_AttrPair__f_ev = null;
    this.Lscalatags_generic_AttrPair__f_a = a;
    this.Lscalatags_generic_AttrPair__f_v = v;
    this.Lscalatags_generic_AttrPair__f_ev = ev
  };
  applyTo__O__V(t) {
    const this$1 = this.Lscalatags_generic_AttrPair__f_ev;
    const a = this.Lscalatags_generic_AttrPair__f_a;
    const v = this.Lscalatags_generic_AttrPair__f_v;
    this$1.apply__Lorg_scalajs_dom_raw_Element__Lscalatags_generic_Attr__O__V(t, a, v)
  };
  productPrefix__T() {
    return "AttrPair"
  };
  productArity__I() {
    return 3
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lscalatags_generic_AttrPair__f_a;
        break
      }
      case 1: {
        return this.Lscalatags_generic_AttrPair__f_v;
        break
      }
      case 2: {
        return this.Lscalatags_generic_AttrPair__f_ev;
        break
      }
      default: {
        throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__I(this, (-889275714))
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lscalatags_generic_AttrPair)) {
      const AttrPair$1 = $as_Lscalatags_generic_AttrPair(x$1);
      const x = this.Lscalatags_generic_AttrPair__f_a;
      const x$2 = AttrPair$1.Lscalatags_generic_AttrPair__f_a;
      let $$x1;
      if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
        const x$3 = this.Lscalatags_generic_AttrPair__f_v;
        const y = AttrPair$1.Lscalatags_generic_AttrPair__f_v;
        $$x1 = $m_sr_BoxesRunTime$().equals__O__O__Z(x$3, y)
      } else {
        $$x1 = false
      };
      if ($$x1) {
        const x$3$1 = this.Lscalatags_generic_AttrPair__f_ev;
        const x$4 = AttrPair$1.Lscalatags_generic_AttrPair__f_ev;
        return (x$3$1 === x$4)
      } else {
        return false
      }
    } else {
      return false
    }
  };
}
function $as_Lscalatags_generic_AttrPair(obj) {
  return (((obj instanceof $c_Lscalatags_generic_AttrPair) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.AttrPair"))
}
function $isArrayOf_Lscalatags_generic_AttrPair(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_AttrPair)))
}
function $asArrayOf_Lscalatags_generic_AttrPair(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_AttrPair(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.AttrPair;", depth))
}
const $d_Lscalatags_generic_AttrPair = new $TypeData().initClass({
  Lscalatags_generic_AttrPair: 0
}, false, "scalatags.generic.AttrPair", {
  Lscalatags_generic_AttrPair: 1,
  O: 1,
  Lscalatags_generic_Modifier: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_generic_AttrPair.prototype.$classData = $d_Lscalatags_generic_AttrPair;
class $c_Lscalatags_generic_StyleMisc$PixelAutoStyle extends $c_Lscalatags_generic_PixelStyle {
  constructor(outer, jsName, cssName) {
    super();
    this.Lscalatags_generic_StyleMisc$PixelAutoStyle__f_auto = null;
    this.Lscalatags_generic_StyleMisc$PixelAutoStyle__f_bitmap$0 = false;
    this.Lscalatags_generic_StyleMisc$PixelAutoStyle__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.Lscalatags_generic_StyleMisc$PixelAutoStyle__f_$outer = outer
    };
    $ct_Lscalatags_generic_PixelStyle__T__T__(this, jsName, cssName)
  };
}
const $d_Lscalatags_generic_StyleMisc$PixelAutoStyle = new $TypeData().initClass({
  Lscalatags_generic_StyleMisc$PixelAutoStyle: 0
}, false, "scalatags.generic.StyleMisc$PixelAutoStyle", {
  Lscalatags_generic_StyleMisc$PixelAutoStyle: 1,
  Lscalatags_generic_PixelStyle: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_generic_StyleMisc$PixelAutoStyle.prototype.$classData = $d_Lscalatags_generic_StyleMisc$PixelAutoStyle;
class $c_Lscalatags_generic_StylePair extends $c_O {
  constructor(s, v, ev) {
    super();
    this.Lscalatags_generic_StylePair__f_s = null;
    this.Lscalatags_generic_StylePair__f_v = null;
    this.Lscalatags_generic_StylePair__f_ev = null;
    this.Lscalatags_generic_StylePair__f_s = s;
    this.Lscalatags_generic_StylePair__f_v = v;
    this.Lscalatags_generic_StylePair__f_ev = ev
  };
  applyTo__O__V(t) {
    const this$1 = this.Lscalatags_generic_StylePair__f_ev;
    const s = this.Lscalatags_generic_StylePair__f_s;
    const v = this.Lscalatags_generic_StylePair__f_v;
    this$1.apply__Lorg_scalajs_dom_raw_Element__Lscalatags_generic_Style__O__V(t, s, v)
  };
  productPrefix__T() {
    return "StylePair"
  };
  productArity__I() {
    return 3
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lscalatags_generic_StylePair__f_s;
        break
      }
      case 1: {
        return this.Lscalatags_generic_StylePair__f_v;
        break
      }
      case 2: {
        return this.Lscalatags_generic_StylePair__f_ev;
        break
      }
      default: {
        throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__I(this, (-889275714))
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lscalatags_generic_StylePair)) {
      const StylePair$1 = $as_Lscalatags_generic_StylePair(x$1);
      const x = this.Lscalatags_generic_StylePair__f_s;
      const x$2 = StylePair$1.Lscalatags_generic_StylePair__f_s;
      let $$x1;
      if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
        const x$3 = this.Lscalatags_generic_StylePair__f_v;
        const y = StylePair$1.Lscalatags_generic_StylePair__f_v;
        $$x1 = $m_sr_BoxesRunTime$().equals__O__O__Z(x$3, y)
      } else {
        $$x1 = false
      };
      if ($$x1) {
        const x$3$1 = this.Lscalatags_generic_StylePair__f_ev;
        const x$4 = StylePair$1.Lscalatags_generic_StylePair__f_ev;
        return (x$3$1 === x$4)
      } else {
        return false
      }
    } else {
      return false
    }
  };
}
function $as_Lscalatags_generic_StylePair(obj) {
  return (((obj instanceof $c_Lscalatags_generic_StylePair) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.StylePair"))
}
function $isArrayOf_Lscalatags_generic_StylePair(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_StylePair)))
}
function $asArrayOf_Lscalatags_generic_StylePair(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_StylePair(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.StylePair;", depth))
}
const $d_Lscalatags_generic_StylePair = new $TypeData().initClass({
  Lscalatags_generic_StylePair: 0
}, false, "scalatags.generic.StylePair", {
  Lscalatags_generic_StylePair: 1,
  O: 1,
  Lscalatags_generic_Modifier: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_generic_StylePair.prototype.$classData = $d_Lscalatags_generic_StylePair;
const $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__ = (function($thiz, _out, autoFlush, charset) {
  $thiz.Ljava_io_PrintStream__f_autoFlush = autoFlush;
  $thiz.Ljava_io_PrintStream__f_charset = charset;
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  $thiz.Ljava_io_PrintStream__f_closing = false;
  $thiz.Ljava_io_PrintStream__f_java$io$PrintStream$$closed = false;
  $thiz.Ljava_io_PrintStream__f_errorFlag = false;
  return $thiz
});
class $c_Ljava_io_PrintStream extends $c_Ljava_io_FilterOutputStream {
  constructor() {
    super();
    this.Ljava_io_PrintStream__f_encoder = null;
    this.Ljava_io_PrintStream__f_autoFlush = false;
    this.Ljava_io_PrintStream__f_charset = null;
    this.Ljava_io_PrintStream__f_closing = false;
    this.Ljava_io_PrintStream__f_java$io$PrintStream$$closed = false;
    this.Ljava_io_PrintStream__f_errorFlag = false;
    this.Ljava_io_PrintStream__f_bitmap$0 = false
  };
}
function $as_Ljava_io_PrintStream(obj) {
  return (((obj instanceof $c_Ljava_io_PrintStream) || (obj === null)) ? obj : $throwClassCastException(obj, "java.io.PrintStream"))
}
function $isArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_io_PrintStream)))
}
function $asArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (($isArrayOf_Ljava_io_PrintStream(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.io.PrintStream;", depth))
}
function $is_sc_GenSetLike(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenSetLike)))
}
function $as_sc_GenSetLike(obj) {
  return (($is_sc_GenSetLike(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenSetLike"))
}
function $isArrayOf_sc_GenSetLike(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenSetLike)))
}
function $asArrayOf_sc_GenSetLike(obj, depth) {
  return (($isArrayOf_sc_GenSetLike(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenSetLike;", depth))
}
const $p_sc_TraversableLike__isPartLikelySynthetic$1__T__I__Z = (function($thiz, fqn$1, partStart$1) {
  const firstChar = (65535 & $uI(fqn$1.charCodeAt(partStart$1)));
  return (((firstChar > 90) && (firstChar < 127)) || (firstChar < 65))
});
function $f_sc_TraversableLike__toString__T($thiz) {
  return $thiz.mkString__T__T__T__T(($thiz.stringPrefix__T() + "("), ", ", ")")
}
function $f_sc_TraversableLike__stringPrefix__T($thiz) {
  const this$1 = $thiz.repr__O();
  const fqn = $objectClassName(this$1);
  let pos = (((-1) + $uI(fqn.length)) | 0);
  while (true) {
    let $$x1;
    if ((pos !== (-1))) {
      const index = pos;
      $$x1 = ((65535 & $uI(fqn.charCodeAt(index))) === 36)
    } else {
      $$x1 = false
    };
    if ($$x1) {
      pos = (((-1) + pos) | 0)
    } else {
      break
    }
  };
  let $$x2;
  if ((pos === (-1))) {
    $$x2 = true
  } else {
    const index$1 = pos;
    $$x2 = ((65535 & $uI(fqn.charCodeAt(index$1))) === 46)
  };
  if ($$x2) {
    return ""
  };
  let result = "";
  while (true) {
    const partEnd = ((1 + pos) | 0);
    while (true) {
      let $$x4;
      if ((pos !== (-1))) {
        const index$2 = pos;
        $$x4 = ((65535 & $uI(fqn.charCodeAt(index$2))) <= 57)
      } else {
        $$x4 = false
      };
      let $$x3;
      if ($$x4) {
        const index$3 = pos;
        $$x3 = ((65535 & $uI(fqn.charCodeAt(index$3))) >= 48)
      } else {
        $$x3 = false
      };
      if ($$x3) {
        pos = (((-1) + pos) | 0)
      } else {
        break
      }
    };
    const lastNonDigit = pos;
    while (true) {
      let $$x6;
      if ((pos !== (-1))) {
        const index$4 = pos;
        $$x6 = ((65535 & $uI(fqn.charCodeAt(index$4))) !== 36)
      } else {
        $$x6 = false
      };
      let $$x5;
      if ($$x6) {
        const index$5 = pos;
        $$x5 = ((65535 & $uI(fqn.charCodeAt(index$5))) !== 46)
      } else {
        $$x5 = false
      };
      if ($$x5) {
        pos = (((-1) + pos) | 0)
      } else {
        break
      }
    };
    const partStart = ((1 + pos) | 0);
    if (((pos === lastNonDigit) && (partEnd !== $uI(fqn.length)))) {
      return result
    };
    while (true) {
      let $$x7;
      if ((pos !== (-1))) {
        const index$6 = pos;
        $$x7 = ((65535 & $uI(fqn.charCodeAt(index$6))) === 36)
      } else {
        $$x7 = false
      };
      if ($$x7) {
        pos = (((-1) + pos) | 0)
      } else {
        break
      }
    };
    let atEnd;
    if ((pos === (-1))) {
      atEnd = true
    } else {
      const index$7 = pos;
      atEnd = ((65535 & $uI(fqn.charCodeAt(index$7))) === 46)
    };
    if ((atEnd || (!$p_sc_TraversableLike__isPartLikelySynthetic$1__T__I__Z($thiz, fqn, partStart)))) {
      const part = $as_T(fqn.substring(partStart, partEnd));
      const this$2 = result;
      if ((this$2 === "")) {
        result = part
      } else {
        result = ((part + ".") + result)
      };
      if (atEnd) {
        return result
      }
    }
  }
}
class $c_scm_ArrayBuilder extends $c_O {
}
class $c_s_reflect_ClassTag$GenericClassTag extends $c_O {
  constructor(runtimeClass) {
    super();
    this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = null;
    this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = runtimeClass
  };
  newArray__I__O(len) {
    return $f_s_reflect_ClassTag__newArray__I__O(this, len)
  };
  equals__O__Z(x) {
    return $f_s_reflect_ClassTag__equals__O__Z(this, x)
  };
  hashCode__I() {
    const x = this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass;
    return $m_sr_Statics$().anyHash__O__I(x)
  };
  toString__T() {
    return $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this, this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass)
  };
  runtimeClass__jl_Class() {
    return this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass
  };
}
const $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().initClass({
  s_reflect_ClassTag$GenericClassTag: 0
}, false, "scala.reflect.ClassTag$GenericClassTag", {
  s_reflect_ClassTag$GenericClassTag: 1,
  O: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ClassTag$GenericClassTag.prototype.$classData = $d_s_reflect_ClassTag$GenericClassTag;
const $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V = (function($thiz, line) {
  if (($as_T((typeof console)) !== "undefined")) {
    let $$x1;
    if ($thiz.jl_JSConsoleBasedPrintStream__f_isErr) {
      const x = console.error;
      $$x1 = $uZ((!(!x)))
    } else {
      $$x1 = false
    };
    if ($$x1) {
      console.error(line)
    } else {
      console.log(line)
    }
  }
});
class $c_jl_JSConsoleBasedPrintStream extends $c_Ljava_io_PrintStream {
  constructor(isErr) {
    super();
    this.jl_JSConsoleBasedPrintStream__f_isErr = false;
    this.jl_JSConsoleBasedPrintStream__f_flushed = false;
    this.jl_JSConsoleBasedPrintStream__f_buffer = null;
    this.jl_JSConsoleBasedPrintStream__f_isErr = isErr;
    const out = new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream();
    $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, out, false, null);
    this.jl_JSConsoleBasedPrintStream__f_flushed = true;
    this.jl_JSConsoleBasedPrintStream__f_buffer = ""
  };
  java$lang$JSConsoleBasedPrintStream$$printString__T__V(s) {
    let rest = s;
    while ((rest !== "")) {
      const this$1 = rest;
      const nlPos = $uI(this$1.indexOf("\n"));
      if ((nlPos < 0)) {
        this.jl_JSConsoleBasedPrintStream__f_buffer = (("" + this.jl_JSConsoleBasedPrintStream__f_buffer) + rest);
        this.jl_JSConsoleBasedPrintStream__f_flushed = false;
        rest = ""
      } else {
        const $$x1 = this.jl_JSConsoleBasedPrintStream__f_buffer;
        const this$3 = rest;
        $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $$x1) + $as_T(this$3.substring(0, nlPos))));
        this.jl_JSConsoleBasedPrintStream__f_buffer = "";
        this.jl_JSConsoleBasedPrintStream__f_flushed = true;
        const this$4 = rest;
        const beginIndex = ((1 + nlPos) | 0);
        rest = $as_T(this$4.substring(beginIndex))
      }
    }
  };
}
const $d_jl_JSConsoleBasedPrintStream = new $TypeData().initClass({
  jl_JSConsoleBasedPrintStream: 0
}, false, "java.lang.JSConsoleBasedPrintStream", {
  jl_JSConsoleBasedPrintStream: 1,
  Ljava_io_PrintStream: 1,
  Ljava_io_FilterOutputStream: 1,
  Ljava_io_OutputStream: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1,
  jl_Appendable: 1
});
$c_jl_JSConsoleBasedPrintStream.prototype.$classData = $d_jl_JSConsoleBasedPrintStream;
class $c_sc_IndexedSeqLike$Elements extends $c_sc_AbstractIterator {
  constructor(outer, start, end) {
    super();
    this.sc_IndexedSeqLike$Elements__f_end = 0;
    this.sc_IndexedSeqLike$Elements__f_index = 0;
    this.sc_IndexedSeqLike$Elements__f_$outer = null;
    this.sc_IndexedSeqLike$Elements__f_end = end;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.sc_IndexedSeqLike$Elements__f_$outer = outer
    };
    this.sc_IndexedSeqLike$Elements__f_index = start
  };
  hasNext__Z() {
    return (this.sc_IndexedSeqLike$Elements__f_index < this.sc_IndexedSeqLike$Elements__f_end)
  };
  next__O() {
    if ((this.sc_IndexedSeqLike$Elements__f_index >= this.sc_IndexedSeqLike$Elements__f_end)) {
      $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
    };
    const x = this.sc_IndexedSeqLike$Elements__f_$outer.apply__I__O(this.sc_IndexedSeqLike$Elements__f_index);
    this.sc_IndexedSeqLike$Elements__f_index = ((1 + this.sc_IndexedSeqLike$Elements__f_index) | 0);
    return x
  };
}
const $d_sc_IndexedSeqLike$Elements = new $TypeData().initClass({
  sc_IndexedSeqLike$Elements: 0
}, false, "scala.collection.IndexedSeqLike$Elements", {
  sc_IndexedSeqLike$Elements: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_BufferedIterator: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sc_IndexedSeqLike$Elements.prototype.$classData = $d_sc_IndexedSeqLike$Elements;
const $p_scm_ArrayBuilder$ofRef__mkArray__I__AO = (function($thiz, size) {
  const newelems = $asArrayOf_O($thiz.scm_ArrayBuilder$ofRef__f_evidence$2.newArray__I__O(size), 1);
  if (($thiz.scm_ArrayBuilder$ofRef__f_size > 0)) {
    $m_s_Array$().copy__O__I__O__I__I__V($thiz.scm_ArrayBuilder$ofRef__f_elems, 0, newelems, 0, $thiz.scm_ArrayBuilder$ofRef__f_size)
  };
  return newelems
});
const $p_scm_ArrayBuilder$ofRef__resize__I__V = (function($thiz, size) {
  $thiz.scm_ArrayBuilder$ofRef__f_elems = $p_scm_ArrayBuilder$ofRef__mkArray__I__AO($thiz, size);
  $thiz.scm_ArrayBuilder$ofRef__f_capacity = size
});
const $p_scm_ArrayBuilder$ofRef__ensureSize__I__V = (function($thiz, size) {
  if ((($thiz.scm_ArrayBuilder$ofRef__f_capacity < size) || ($thiz.scm_ArrayBuilder$ofRef__f_capacity === 0))) {
    let newsize = (($thiz.scm_ArrayBuilder$ofRef__f_capacity === 0) ? 16 : ($thiz.scm_ArrayBuilder$ofRef__f_capacity << 1));
    while ((newsize < size)) {
      newsize = (newsize << 1)
    };
    $p_scm_ArrayBuilder$ofRef__resize__I__V($thiz, newsize)
  }
});
class $c_scm_ArrayBuilder$ofRef extends $c_scm_ArrayBuilder {
  constructor(evidence$2) {
    super();
    this.scm_ArrayBuilder$ofRef__f_evidence$2 = null;
    this.scm_ArrayBuilder$ofRef__f_elems = null;
    this.scm_ArrayBuilder$ofRef__f_capacity = 0;
    this.scm_ArrayBuilder$ofRef__f_size = 0;
    this.scm_ArrayBuilder$ofRef__f_evidence$2 = evidence$2;
    this.scm_ArrayBuilder$ofRef__f_capacity = 0;
    this.scm_ArrayBuilder$ofRef__f_size = 0
  };
  $plus$eq__O__scm_ArrayBuilder$ofRef(elem) {
    $p_scm_ArrayBuilder$ofRef__ensureSize__I__V(this, ((1 + this.scm_ArrayBuilder$ofRef__f_size) | 0));
    this.scm_ArrayBuilder$ofRef__f_elems.set(this.scm_ArrayBuilder$ofRef__f_size, elem);
    this.scm_ArrayBuilder$ofRef__f_size = ((1 + this.scm_ArrayBuilder$ofRef__f_size) | 0);
    return this
  };
  result__AO() {
    if (((this.scm_ArrayBuilder$ofRef__f_capacity !== 0) && (this.scm_ArrayBuilder$ofRef__f_capacity === this.scm_ArrayBuilder$ofRef__f_size))) {
      this.scm_ArrayBuilder$ofRef__f_capacity = 0;
      return this.scm_ArrayBuilder$ofRef__f_elems
    } else {
      return $p_scm_ArrayBuilder$ofRef__mkArray__I__AO(this, this.scm_ArrayBuilder$ofRef__f_size)
    }
  };
  equals__O__Z(other) {
    if ((other instanceof $c_scm_ArrayBuilder$ofRef)) {
      const x2 = $as_scm_ArrayBuilder$ofRef(other);
      return ((this.scm_ArrayBuilder$ofRef__f_size === x2.scm_ArrayBuilder$ofRef__f_size) && (this.scm_ArrayBuilder$ofRef__f_elems === x2.scm_ArrayBuilder$ofRef__f_elems))
    } else {
      return false
    }
  };
  toString__T() {
    return "ArrayBuilder.ofRef"
  };
}
function $as_scm_ArrayBuilder$ofRef(obj) {
  return (((obj instanceof $c_scm_ArrayBuilder$ofRef) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArrayBuilder$ofRef"))
}
function $isArrayOf_scm_ArrayBuilder$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArrayBuilder$ofRef)))
}
function $asArrayOf_scm_ArrayBuilder$ofRef(obj, depth) {
  return (($isArrayOf_scm_ArrayBuilder$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArrayBuilder$ofRef;", depth))
}
const $d_scm_ArrayBuilder$ofRef = new $TypeData().initClass({
  scm_ArrayBuilder$ofRef: 0
}, false, "scala.collection.mutable.ArrayBuilder$ofRef", {
  scm_ArrayBuilder$ofRef: 1,
  scm_ArrayBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuilder$ofRef.prototype.$classData = $d_scm_ArrayBuilder$ofRef;
class $c_s_reflect_AnyValManifest extends $c_O {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = null
  };
  toString__T() {
    return this.s_reflect_AnyValManifest__f_toString
  };
  equals__O__Z(that) {
    return (this === that)
  };
  hashCode__I() {
    return $systemIdentityHashCode(this)
  };
}
class $c_s_reflect_ManifestFactory$ClassTypeManifest extends $c_O {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = null;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = null;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = null
  };
}
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.sjs_js_JavaScriptException__f_exception = null;
    this.sjs_js_JavaScriptException__f_exception = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $dp_toString__T(this.sjs_js_JavaScriptException__f_exception)
  };
  fillInStackTrace__jl_Throwable() {
    this.setStackTraceStateInternal__O__(this.sjs_js_JavaScriptException__f_exception);
    return this
  };
  productPrefix__T() {
    return "JavaScriptException"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    if ((x$1 === 0)) {
      return this.sjs_js_JavaScriptException__f_exception
    } else {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__I(this, (-889275714))
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_sjs_js_JavaScriptException)) {
      const JavaScriptException$1 = $as_sjs_js_JavaScriptException(x$1);
      const x = this.sjs_js_JavaScriptException__f_exception;
      const y = JavaScriptException$1.sjs_js_JavaScriptException__f_exception;
      return $m_sr_BoxesRunTime$().equals__O__O__Z(x, y)
    } else {
      return false
    }
  };
  setStackTraceStateInternal__O__(e) {
    this.jl_Throwable__f_stackTraceStateInternal = e
  };
}
function $as_sjs_js_JavaScriptException(obj) {
  return (((obj instanceof $c_sjs_js_JavaScriptException) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"))
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)))
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth))
}
const $d_sjs_js_JavaScriptException = new $TypeData().initClass({
  sjs_js_JavaScriptException: 0
}, false, "scala.scalajs.js.JavaScriptException", {
  sjs_js_JavaScriptException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1
});
$c_sjs_js_JavaScriptException.prototype.$classData = $d_sjs_js_JavaScriptException;
class $c_Lscalatags_JsDom$StringFrag extends $c_O {
  constructor(v) {
    super();
    this.Lscalatags_JsDom$StringFrag__f_v = null;
    this.Lscalatags_JsDom$StringFrag__f_v = v;
    if ((v === null)) {
      throw new $c_jl_NullPointerException()
    }
  };
  render__Lorg_scalajs_dom_raw_Text() {
    return $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().createTextNode(this.Lscalatags_JsDom$StringFrag__f_v)
  };
  productPrefix__T() {
    return "StringFrag"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    if ((x$1 === 0)) {
      return this.Lscalatags_JsDom$StringFrag__f_v
    } else {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__I(this, (-889275714))
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lscalatags_JsDom$StringFrag)) {
      const StringFrag$1 = $as_Lscalatags_JsDom$StringFrag(x$1);
      return (this.Lscalatags_JsDom$StringFrag__f_v === StringFrag$1.Lscalatags_JsDom$StringFrag__f_v)
    } else {
      return false
    }
  };
  applyTo__O__V(t) {
    $f_Lscalatags_jsdom_Frag__applyTo__Lorg_scalajs_dom_raw_Element__V(this, t)
  };
  render__Lorg_scalajs_dom_raw_Node() {
    return this.render__Lorg_scalajs_dom_raw_Text()
  };
}
function $as_Lscalatags_JsDom$StringFrag(obj) {
  return (((obj instanceof $c_Lscalatags_JsDom$StringFrag) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.JsDom$StringFrag"))
}
function $isArrayOf_Lscalatags_JsDom$StringFrag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_JsDom$StringFrag)))
}
function $asArrayOf_Lscalatags_JsDom$StringFrag(obj, depth) {
  return (($isArrayOf_Lscalatags_JsDom$StringFrag(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.JsDom$StringFrag;", depth))
}
const $d_Lscalatags_JsDom$StringFrag = new $TypeData().initClass({
  Lscalatags_JsDom$StringFrag: 0
}, false, "scalatags.JsDom$StringFrag", {
  Lscalatags_JsDom$StringFrag: 1,
  O: 1,
  Lscalatags_jsdom_Frag: 1,
  Lscalatags_generic_Frag: 1,
  Lscalatags_generic_Modifier: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_JsDom$StringFrag.prototype.$classData = $d_Lscalatags_JsDom$StringFrag;
class $c_sci_List$ extends $c_scg_SeqFactory {
  constructor() {
    super();
    this.sci_List$__f_partialNotApplied = null;
    $ct_scg_GenTraversableFactory__(this);
    $n_sci_List$ = this;
    this.sci_List$__f_partialNotApplied = new $c_sci_List$$anon$1()
  };
}
const $d_sci_List$ = new $TypeData().initClass({
  sci_List$: 0
}, false, "scala.collection.immutable.List$", {
  sci_List$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_List$.prototype.$classData = $d_sci_List$;
let $n_sci_List$ = (void 0);
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$()
  };
  return $n_sci_List$
}
class $c_s_reflect_ManifestFactory$BooleanManifest$ extends $c_s_reflect_AnyValManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Boolean"
  };
  runtimeClass__jl_Class() {
    return $d_Z.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_Z.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$BooleanManifest$: 0
}, false, "scala.reflect.ManifestFactory$BooleanManifest$", {
  s_reflect_ManifestFactory$BooleanManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$BooleanManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$BooleanManifest$;
let $n_s_reflect_ManifestFactory$BooleanManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$BooleanManifest$() {
  if ((!$n_s_reflect_ManifestFactory$BooleanManifest$)) {
    $n_s_reflect_ManifestFactory$BooleanManifest$ = new $c_s_reflect_ManifestFactory$BooleanManifest$()
  };
  return $n_s_reflect_ManifestFactory$BooleanManifest$
}
class $c_s_reflect_ManifestFactory$ByteManifest$ extends $c_s_reflect_AnyValManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Byte"
  };
  runtimeClass__jl_Class() {
    return $d_B.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_B.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ByteManifest$: 0
}, false, "scala.reflect.ManifestFactory$ByteManifest$", {
  s_reflect_ManifestFactory$ByteManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ByteManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ByteManifest$;
let $n_s_reflect_ManifestFactory$ByteManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$ByteManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ByteManifest$)) {
    $n_s_reflect_ManifestFactory$ByteManifest$ = new $c_s_reflect_ManifestFactory$ByteManifest$()
  };
  return $n_s_reflect_ManifestFactory$ByteManifest$
}
class $c_s_reflect_ManifestFactory$CharManifest$ extends $c_s_reflect_AnyValManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Char"
  };
  runtimeClass__jl_Class() {
    return $d_C.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_C.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$CharManifest$: 0
}, false, "scala.reflect.ManifestFactory$CharManifest$", {
  s_reflect_ManifestFactory$CharManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$CharManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$CharManifest$;
let $n_s_reflect_ManifestFactory$CharManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$CharManifest$() {
  if ((!$n_s_reflect_ManifestFactory$CharManifest$)) {
    $n_s_reflect_ManifestFactory$CharManifest$ = new $c_s_reflect_ManifestFactory$CharManifest$()
  };
  return $n_s_reflect_ManifestFactory$CharManifest$
}
class $c_s_reflect_ManifestFactory$DoubleManifest$ extends $c_s_reflect_AnyValManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Double"
  };
  runtimeClass__jl_Class() {
    return $d_D.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_D.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$DoubleManifest$: 0
}, false, "scala.reflect.ManifestFactory$DoubleManifest$", {
  s_reflect_ManifestFactory$DoubleManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$DoubleManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$DoubleManifest$;
let $n_s_reflect_ManifestFactory$DoubleManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$DoubleManifest$() {
  if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
    $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$()
  };
  return $n_s_reflect_ManifestFactory$DoubleManifest$
}
class $c_s_reflect_ManifestFactory$FloatManifest$ extends $c_s_reflect_AnyValManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Float"
  };
  runtimeClass__jl_Class() {
    return $d_F.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_F.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$FloatManifest$: 0
}, false, "scala.reflect.ManifestFactory$FloatManifest$", {
  s_reflect_ManifestFactory$FloatManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$FloatManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$FloatManifest$;
let $n_s_reflect_ManifestFactory$FloatManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$FloatManifest$() {
  if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
    $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$()
  };
  return $n_s_reflect_ManifestFactory$FloatManifest$
}
class $c_s_reflect_ManifestFactory$IntManifest$ extends $c_s_reflect_AnyValManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Int"
  };
  runtimeClass__jl_Class() {
    return $d_I.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_I.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$IntManifest$: 0
}, false, "scala.reflect.ManifestFactory$IntManifest$", {
  s_reflect_ManifestFactory$IntManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$IntManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$IntManifest$;
let $n_s_reflect_ManifestFactory$IntManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$()
  };
  return $n_s_reflect_ManifestFactory$IntManifest$
}
class $c_s_reflect_ManifestFactory$LongManifest$ extends $c_s_reflect_AnyValManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Long"
  };
  runtimeClass__jl_Class() {
    return $d_J.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_J.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$LongManifest$: 0
}, false, "scala.reflect.ManifestFactory$LongManifest$", {
  s_reflect_ManifestFactory$LongManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$LongManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$LongManifest$;
let $n_s_reflect_ManifestFactory$LongManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$LongManifest$() {
  if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
    $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$()
  };
  return $n_s_reflect_ManifestFactory$LongManifest$
}
class $c_s_reflect_ManifestFactory$PhantomManifest extends $c_s_reflect_ManifestFactory$ClassTypeManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null
  };
  toString__T() {
    return this.s_reflect_ManifestFactory$PhantomManifest__f_toString
  };
  equals__O__Z(that) {
    return (this === that)
  };
  hashCode__I() {
    return $systemIdentityHashCode(this)
  };
}
class $c_s_reflect_ManifestFactory$ShortManifest$ extends $c_s_reflect_AnyValManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Short"
  };
  runtimeClass__jl_Class() {
    return $d_S.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_S.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ShortManifest$: 0
}, false, "scala.reflect.ManifestFactory$ShortManifest$", {
  s_reflect_ManifestFactory$ShortManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ShortManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ShortManifest$;
let $n_s_reflect_ManifestFactory$ShortManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$ShortManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ShortManifest$)) {
    $n_s_reflect_ManifestFactory$ShortManifest$ = new $c_s_reflect_ManifestFactory$ShortManifest$()
  };
  return $n_s_reflect_ManifestFactory$ShortManifest$
}
class $c_s_reflect_ManifestFactory$UnitManifest$ extends $c_s_reflect_AnyValManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Unit"
  };
  runtimeClass__jl_Class() {
    return $d_V.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_jl_Void.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$UnitManifest$: 0
}, false, "scala.reflect.ManifestFactory$UnitManifest$", {
  s_reflect_ManifestFactory$UnitManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$UnitManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$UnitManifest$;
let $n_s_reflect_ManifestFactory$UnitManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$UnitManifest$() {
  if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
    $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$()
  };
  return $n_s_reflect_ManifestFactory$UnitManifest$
}
class $c_Lscalatags_JsDom$TypedTag extends $c_O {
  constructor(tag, modifiers, void$1, namespace) {
    super();
    this.Lscalatags_JsDom$TypedTag__f_tag = null;
    this.Lscalatags_JsDom$TypedTag__f_modifiers = null;
    this.Lscalatags_JsDom$TypedTag__f_void = false;
    this.Lscalatags_JsDom$TypedTag__f_namespace = null;
    this.Lscalatags_JsDom$TypedTag__f_tag = tag;
    this.Lscalatags_JsDom$TypedTag__f_modifiers = modifiers;
    this.Lscalatags_JsDom$TypedTag__f_void = void$1;
    this.Lscalatags_JsDom$TypedTag__f_namespace = namespace
  };
  render__Lorg_scalajs_dom_raw_Element() {
    const elem = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().createElementNS(this.Lscalatags_JsDom$TypedTag__f_namespace.uri__T(), this.Lscalatags_JsDom$TypedTag__f_tag);
    $f_Lscalatags_generic_TypedTag__build__O__V(this, elem);
    return elem
  };
  apply__sc_Seq__Lscalatags_JsDom$TypedTag(xs) {
    const x$1 = this.Lscalatags_JsDom$TypedTag__f_tag;
    const x$2 = this.Lscalatags_JsDom$TypedTag__f_void;
    const this$1 = this.Lscalatags_JsDom$TypedTag__f_modifiers;
    const x$3 = new $c_sci_$colon$colon(xs, this$1);
    const x$4 = this.Lscalatags_JsDom$TypedTag__f_namespace;
    return new $c_Lscalatags_JsDom$TypedTag(x$1, x$3, x$2, x$4)
  };
  toString__T() {
    return $as_T(this.render__Lorg_scalajs_dom_raw_Element().outerHTML)
  };
  productPrefix__T() {
    return "TypedTag"
  };
  productArity__I() {
    return 4
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lscalatags_JsDom$TypedTag__f_tag;
        break
      }
      case 1: {
        return this.Lscalatags_JsDom$TypedTag__f_modifiers;
        break
      }
      case 2: {
        return this.Lscalatags_JsDom$TypedTag__f_void;
        break
      }
      case 3: {
        return this.Lscalatags_JsDom$TypedTag__f_namespace;
        break
      }
      default: {
        throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    let acc = (-889275714);
    const hash = acc;
    const x = this.Lscalatags_JsDom$TypedTag__f_tag;
    const data = $m_sr_Statics$().anyHash__O__I(x);
    acc = $m_sr_Statics$().mix__I__I__I(hash, data);
    const hash$1 = acc;
    const x$1 = this.Lscalatags_JsDom$TypedTag__f_modifiers;
    const data$1 = $m_sr_Statics$().anyHash__O__I(x$1);
    acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
    const hash$2 = acc;
    const data$2 = (this.Lscalatags_JsDom$TypedTag__f_void ? 1231 : 1237);
    acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
    const hash$3 = acc;
    const x$2 = this.Lscalatags_JsDom$TypedTag__f_namespace;
    const data$3 = $m_sr_Statics$().anyHash__O__I(x$2);
    acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
    const hash$4 = acc;
    return $m_sr_Statics$().finalizeHash__I__I__I(hash$4, 4)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lscalatags_JsDom$TypedTag)) {
      const TypedTag$1 = $as_Lscalatags_JsDom$TypedTag(x$1);
      let $$x1;
      if ((this.Lscalatags_JsDom$TypedTag__f_tag === TypedTag$1.Lscalatags_JsDom$TypedTag__f_tag)) {
        const x = this.Lscalatags_JsDom$TypedTag__f_modifiers;
        const x$2 = TypedTag$1.Lscalatags_JsDom$TypedTag__f_modifiers;
        $$x1 = ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
      } else {
        $$x1 = false
      };
      if (($$x1 && (this.Lscalatags_JsDom$TypedTag__f_void === TypedTag$1.Lscalatags_JsDom$TypedTag__f_void))) {
        const x$3 = this.Lscalatags_JsDom$TypedTag__f_namespace;
        const x$4 = TypedTag$1.Lscalatags_JsDom$TypedTag__f_namespace;
        return (x$3 === x$4)
      } else {
        return false
      }
    } else {
      return false
    }
  };
  applyTo__O__V(t) {
    $f_Lscalatags_jsdom_Frag__applyTo__Lorg_scalajs_dom_raw_Element__V(this, t)
  };
  render__Lorg_scalajs_dom_raw_Node() {
    return this.render__Lorg_scalajs_dom_raw_Element()
  };
}
function $as_Lscalatags_JsDom$TypedTag(obj) {
  return (((obj instanceof $c_Lscalatags_JsDom$TypedTag) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.JsDom$TypedTag"))
}
function $isArrayOf_Lscalatags_JsDom$TypedTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_JsDom$TypedTag)))
}
function $asArrayOf_Lscalatags_JsDom$TypedTag(obj, depth) {
  return (($isArrayOf_Lscalatags_JsDom$TypedTag(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.JsDom$TypedTag;", depth))
}
const $d_Lscalatags_JsDom$TypedTag = new $TypeData().initClass({
  Lscalatags_JsDom$TypedTag: 0
}, false, "scalatags.JsDom$TypedTag", {
  Lscalatags_JsDom$TypedTag: 1,
  O: 1,
  Lscalatags_generic_TypedTag: 1,
  Lscalatags_generic_Frag: 1,
  Lscalatags_generic_Modifier: 1,
  Lscalatags_jsdom_Frag: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_JsDom$TypedTag.prototype.$classData = $d_Lscalatags_JsDom$TypedTag;
const $d_Lorg_scalajs_dom_raw_HTMLInputElement = new $TypeData().initClass({
  Lorg_scalajs_dom_raw_HTMLInputElement: 0
}, false, "org.scalajs.dom.raw.HTMLInputElement", {
  Lorg_scalajs_dom_raw_HTMLInputElement: 1,
  Lorg_scalajs_dom_raw_HTMLElement: 1,
  Lorg_scalajs_dom_raw_Element: 1,
  Lorg_scalajs_dom_raw_Node: 1,
  Lorg_scalajs_dom_raw_EventTarget: 1,
  sjs_js_Object: 1,
  O: 1,
  sjs_js_Any: 1,
  Lorg_scalajs_dom_raw_NodeSelector: 1,
  Lorg_scalajs_dom_raw_ParentNode: 1,
  Lorg_scalajs_dom_raw_NonDocumentTypeChildNode: 1
}, true, (void 0), ((x) => (x instanceof HTMLInputElement)));
function $f_sc_IterableLike__copyToArray__O__I__I__V($thiz, xs, start, len) {
  let i = start;
  const x = ((start + len) | 0);
  const that = $m_sr_ScalaRunTime$().array_length__O__I(xs);
  const end = ((x < that) ? x : that);
  const it = $thiz.iterator__sc_Iterator();
  while (((i < end) && it.hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, it.next__O());
    i = ((1 + i) | 0)
  }
}
function $f_sc_IterableLike__sameElements__sc_GenIterable__Z($thiz, that) {
  if (($thiz === that)) {
    return true
  } else {
    if ((that instanceof $c_sci_Vector)) {
      const x2 = $as_sci_Vector(that);
      if (($thiz instanceof $c_sci_Vector)) {
        const thisVector = $as_sci_Vector($thiz);
        if ((thisVector === x2)) {
          return true
        } else {
          let equal = (thisVector.length__I() === x2.length__I());
          if (equal) {
            const length = x2.length__I();
            let index = 0;
            while (((index < length) && equal)) {
              equal = $m_sr_BoxesRunTime$().equals__O__O__Z(thisVector.apply__I__O(index), x2.apply__I__O(index));
              index = ((1 + index) | 0)
            }
          };
          return equal
        }
      }
    };
    if ($is_sc_GenSet(that)) {
      const x3 = $as_sc_GenSet(that);
      if ($is_sc_GenSetLike($thiz)) {
        const thisSet = $as_sc_GenSetLike($thiz);
        return ((thisSet.size__I() === x3.size__I()) && thisSet.subsetOf__sc_GenSet__Z(x3))
      }
    };
    const these = $thiz.iterator__sc_Iterator();
    const those = that.iterator__sc_Iterator();
    while ((these.hasNext__Z() && those.hasNext__Z())) {
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(these.next__O(), those.next__O()))) {
        return false
      }
    };
    return ((!these.hasNext__Z()) && (!those.hasNext__Z()))
  }
}
class $c_s_reflect_ManifestFactory$NothingManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Nothing";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_sr_Nothing$.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments
  };
  runtimeClass__jl_Class() {
    return $d_sr_Nothing$.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_O.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$NothingManifest$: 0
}, false, "scala.reflect.ManifestFactory$NothingManifest$", {
  s_reflect_ManifestFactory$NothingManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$NothingManifest$;
let $n_s_reflect_ManifestFactory$NothingManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$NothingManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
    $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$()
  };
  return $n_s_reflect_ManifestFactory$NothingManifest$
}
class $c_s_reflect_ManifestFactory$NullManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Null";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_sr_Null$.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments
  };
  runtimeClass__jl_Class() {
    return $d_sr_Null$.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_O.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$NullManifest$: 0
}, false, "scala.reflect.ManifestFactory$NullManifest$", {
  s_reflect_ManifestFactory$NullManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$NullManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$NullManifest$;
let $n_s_reflect_ManifestFactory$NullManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$NullManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NullManifest$)) {
    $n_s_reflect_ManifestFactory$NullManifest$ = new $c_s_reflect_ManifestFactory$NullManifest$()
  };
  return $n_s_reflect_ManifestFactory$NullManifest$
}
class $c_s_reflect_ManifestFactory$ObjectManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Object";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_O.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments
  };
  runtimeClass__jl_Class() {
    return $d_O.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_O.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ObjectManifest$: 0
}, false, "scala.reflect.ManifestFactory$ObjectManifest$", {
  s_reflect_ManifestFactory$ObjectManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ObjectManifest$;
let $n_s_reflect_ManifestFactory$ObjectManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$()
  };
  return $n_s_reflect_ManifestFactory$ObjectManifest$
}
class $c_sc_AbstractTraversable extends $c_O {
  repr__O() {
    return this
  };
  stringPrefix__T() {
    return $f_sc_TraversableLike__stringPrefix__T(this)
  };
  mkString__T__T__T__T(start, sep, end) {
    return $f_sc_TraversableOnce__mkString__T__T__T__T(this, start, sep, end)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
}
function $is_sc_GenSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenSeq)))
}
function $as_sc_GenSeq(obj) {
  return (($is_sc_GenSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenSeq"))
}
function $isArrayOf_sc_GenSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenSeq)))
}
function $asArrayOf_sc_GenSeq(obj, depth) {
  return (($isArrayOf_sc_GenSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenSeq;", depth))
}
function $is_sc_GenSet(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenSet)))
}
function $as_sc_GenSet(obj) {
  return (($is_sc_GenSet(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenSet"))
}
function $isArrayOf_sc_GenSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenSet)))
}
function $asArrayOf_sc_GenSet(obj, depth) {
  return (($isArrayOf_sc_GenSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenSet;", depth))
}
function $is_sc_LinearSeqLike(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeqLike)))
}
function $as_sc_LinearSeqLike(obj) {
  return (($is_sc_LinearSeqLike(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeqLike"))
}
function $isArrayOf_sc_LinearSeqLike(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeqLike)))
}
function $asArrayOf_sc_LinearSeqLike(obj, depth) {
  return (($isArrayOf_sc_LinearSeqLike(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeqLike;", depth))
}
function $f_sc_IndexedSeqOptimized__isEmpty__Z($thiz) {
  return ($thiz.length__I() === 0)
}
function $f_sc_IndexedSeqOptimized__foreach__F1__V($thiz, f) {
  let i = 0;
  const len = $thiz.length__I();
  while ((i < len)) {
    f.apply__O__O($thiz.apply__I__O(i));
    i = ((1 + i) | 0)
  }
}
function $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z($thiz, that) {
  if ($is_sc_IndexedSeq(that)) {
    const x2 = $as_sc_IndexedSeq(that);
    const len = $thiz.length__I();
    if ((len === x2.length__I())) {
      let i = 0;
      while (((i < len) && $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(i), x2.apply__I__O(i)))) {
        i = ((1 + i) | 0)
      };
      return (i === len)
    } else {
      return false
    }
  } else {
    return $f_sc_IterableLike__sameElements__sc_GenIterable__Z($thiz, that)
  }
}
function $f_sc_IndexedSeqOptimized__copyToArray__O__I__I__V($thiz, xs, start, len) {
  let i = 0;
  let j = start;
  const x = $thiz.length__I();
  const x$1 = ((x < len) ? x : len);
  const that = (($m_sr_ScalaRunTime$().array_length__O__I(xs) - start) | 0);
  const end = ((x$1 < that) ? x$1 : that);
  while ((i < end)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, j, $thiz.apply__I__O(i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0)
  }
}
function $f_sc_LinearSeqOptimized__length__I($thiz) {
  let these = $thiz;
  let len = 0;
  while ((!these.isEmpty__Z())) {
    len = ((1 + len) | 0);
    these = $as_sc_LinearSeqOptimized(these.tail__O())
  };
  return len
}
function $f_sc_LinearSeqOptimized__apply__I__O($thiz, n) {
  const rest = $thiz.drop__I__sc_LinearSeqOptimized(n);
  if (((n < 0) || rest.isEmpty__Z())) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  return rest.head__O()
}
function $f_sc_LinearSeqOptimized__last__O($thiz) {
  if ($thiz.isEmpty__Z()) {
    throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
  };
  let these = $thiz;
  let nx = $as_sc_LinearSeqOptimized(these.tail__O());
  while ((!nx.isEmpty__Z())) {
    these = nx;
    nx = $as_sc_LinearSeqOptimized(nx.tail__O())
  };
  return these.head__O()
}
function $f_sc_LinearSeqOptimized__sameElements__sc_GenIterable__Z($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    const x2 = $as_sc_LinearSeq(that);
    if (($thiz === x2)) {
      return true
    } else {
      let these = $thiz;
      let those = x2;
      while ((((!these.isEmpty__Z()) && (!those.isEmpty__Z())) && $m_sr_BoxesRunTime$().equals__O__O__Z(these.head__O(), those.head__O()))) {
        these = $as_sc_LinearSeqOptimized(these.tail__O());
        those = $as_sc_LinearSeq(those.tail__O())
      };
      return (these.isEmpty__Z() && those.isEmpty__Z())
    }
  } else {
    return $f_sc_IterableLike__sameElements__sc_GenIterable__Z($thiz, that)
  }
}
function $is_sc_LinearSeqOptimized(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeqOptimized)))
}
function $as_sc_LinearSeqOptimized(obj) {
  return (($is_sc_LinearSeqOptimized(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeqOptimized"))
}
function $isArrayOf_sc_LinearSeqOptimized(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeqOptimized)))
}
function $asArrayOf_sc_LinearSeqOptimized(obj, depth) {
  return (($isArrayOf_sc_LinearSeqOptimized(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeqOptimized;", depth))
}
class $c_sc_AbstractIterable extends $c_sc_AbstractTraversable {
  copyToArray__O__I__I__V(xs, start, len) {
    $f_sc_IterableLike__copyToArray__O__I__I__V(this, xs, start, len)
  };
  sameElements__sc_GenIterable__Z(that) {
    return $f_sc_IterableLike__sameElements__sc_GenIterable__Z(this, that)
  };
}
class $c_sci_StringOps extends $c_O {
  constructor(repr) {
    super();
    this.sci_StringOps__f_repr = null;
    this.sci_StringOps__f_repr = repr
  };
  isEmpty__Z() {
    return $f_sc_IndexedSeqOptimized__isEmpty__Z(this)
  };
  foreach__F1__V(f) {
    $f_sc_IndexedSeqOptimized__foreach__F1__V(this, f)
  };
  sameElements__sc_GenIterable__Z(that) {
    return $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
  };
  copyToArray__O__I__I__V(xs, start, len) {
    $f_sc_IndexedSeqOptimized__copyToArray__O__I__I__V(this, xs, start, len)
  };
  iterator__sc_Iterator() {
    const this$ = this.sci_StringOps__f_repr;
    return new $c_sc_IndexedSeqLike$Elements(this, 0, $uI(this$.length))
  };
  stringPrefix__T() {
    return $f_sc_TraversableLike__stringPrefix__T(this)
  };
  mkString__T__T__T__T(start, sep, end) {
    return $f_sc_TraversableOnce__mkString__T__T__T__T(this, start, sep, end)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  toString__T() {
    const this$ = this.sci_StringOps__f_repr;
    return this$
  };
  length__I() {
    const this$ = this.sci_StringOps__f_repr;
    return $uI(this$.length)
  };
  hashCode__I() {
    const this$ = this.sci_StringOps__f_repr;
    return $f_T__hashCode__I(this$)
  };
  equals__O__Z(x$1) {
    return $m_sci_StringOps$().equals$extension__T__O__Z(this.sci_StringOps__f_repr, x$1)
  };
  apply__I__O(idx) {
    const this$ = this.sci_StringOps__f_repr;
    return $bC((65535 & $uI(this$.charCodeAt(idx))))
  };
  repr__O() {
    return this.sci_StringOps__f_repr
  };
}
function $as_sci_StringOps(obj) {
  return (((obj instanceof $c_sci_StringOps) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.StringOps"))
}
function $isArrayOf_sci_StringOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_StringOps)))
}
function $asArrayOf_sci_StringOps(obj, depth) {
  return (($isArrayOf_sci_StringOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.StringOps;", depth))
}
const $d_sci_StringOps = new $TypeData().initClass({
  sci_StringOps: 0
}, false, "scala.collection.immutable.StringOps", {
  sci_StringOps: 1,
  O: 1,
  sci_StringLike: 1,
  sc_IndexedSeqOptimized: 1,
  sc_IndexedSeqLike: 1,
  sc_SeqLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenIterableLike: 1,
  sc_GenSeqLike: 1,
  s_math_Ordered: 1,
  jl_Comparable: 1
});
$c_sci_StringOps.prototype.$classData = $d_sci_StringOps;
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)))
}
function $as_sc_Seq(obj) {
  return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"))
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)))
}
function $asArrayOf_sc_Seq(obj, depth) {
  return (($isArrayOf_sc_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Seq;", depth))
}
const $d_sc_Seq = new $TypeData().initClass({
  sc_Seq: 0
}, true, "scala.collection.Seq", {
  sc_Seq: 1,
  O: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_Iterable: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)))
}
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"))
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)))
}
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth))
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)))
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"))
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)))
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth))
}
class $c_sc_AbstractSeq extends $c_sc_AbstractIterable {
  toString__T() {
    return $f_sc_TraversableLike__toString__T(this)
  };
  equals__O__Z(that) {
    return $f_sc_GenSeqLike__equals__O__Z(this, that)
  };
}
const $p_Lscalatags_JsDom$all$__p$lzycompute__Lscalatags_JsDom$TypedTag = (function($thiz) {
  const b = $thiz.Lscalatags_JsDom$all$__f_bitmap$0;
  const lo = (32768 & b.RTLong__f_lo);
  if ((lo === 0)) {
    const ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
    $thiz.Lscalatags_JsDom$all$__f_p = $as_Lscalatags_JsDom$TypedTag($f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag($thiz, "p", false, ns));
    const b$1 = $thiz.Lscalatags_JsDom$all$__f_bitmap$0;
    const lo$1 = (32768 | b$1.RTLong__f_lo);
    const hi = b$1.RTLong__f_hi;
    $thiz.Lscalatags_JsDom$all$__f_bitmap$0 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lscalatags_JsDom$all$__f_p
});
const $p_Lscalatags_JsDom$all$__table$lzycompute__Lscalatags_JsDom$TypedTag = (function($thiz) {
  const b = $thiz.Lscalatags_JsDom$all$__f_bitmap$0;
  const hi = (33554432 & b.RTLong__f_hi);
  if ((hi === 0)) {
    const ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
    $thiz.Lscalatags_JsDom$all$__f_table = $as_Lscalatags_JsDom$TypedTag($f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag($thiz, "table", false, ns));
    const b$1 = $thiz.Lscalatags_JsDom$all$__f_bitmap$0;
    const lo = b$1.RTLong__f_lo;
    const hi$1 = (33554432 | b$1.RTLong__f_hi);
    $thiz.Lscalatags_JsDom$all$__f_bitmap$0 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lscalatags_JsDom$all$__f_table
});
const $p_Lscalatags_JsDom$all$__tbody$lzycompute__Lscalatags_JsDom$TypedTag = (function($thiz) {
  const b = $thiz.Lscalatags_JsDom$all$__f_bitmap$0;
  const hi = (536870912 & b.RTLong__f_hi);
  if ((hi === 0)) {
    const ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
    $thiz.Lscalatags_JsDom$all$__f_tbody = $as_Lscalatags_JsDom$TypedTag($f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag($thiz, "tbody", false, ns));
    const b$1 = $thiz.Lscalatags_JsDom$all$__f_bitmap$0;
    const lo = b$1.RTLong__f_lo;
    const hi$1 = (536870912 | b$1.RTLong__f_hi);
    $thiz.Lscalatags_JsDom$all$__f_bitmap$0 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lscalatags_JsDom$all$__f_tbody
});
const $p_Lscalatags_JsDom$all$__tr$lzycompute__Lscalatags_JsDom$TypedTag = (function($thiz) {
  const b = $thiz.Lscalatags_JsDom$all$__f_bitmap$1;
  const lo = (1 & b.RTLong__f_lo);
  if ((lo === 0)) {
    const ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
    $thiz.Lscalatags_JsDom$all$__f_tr = $as_Lscalatags_JsDom$TypedTag($f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag($thiz, "tr", false, ns));
    const b$1 = $thiz.Lscalatags_JsDom$all$__f_bitmap$1;
    const lo$1 = (1 | b$1.RTLong__f_lo);
    const hi = b$1.RTLong__f_hi;
    $thiz.Lscalatags_JsDom$all$__f_bitmap$1 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lscalatags_JsDom$all$__f_tr
});
const $p_Lscalatags_JsDom$all$__td$lzycompute__Lscalatags_JsDom$TypedTag = (function($thiz) {
  const b = $thiz.Lscalatags_JsDom$all$__f_bitmap$1;
  const lo = (2 & b.RTLong__f_lo);
  if ((lo === 0)) {
    const ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
    $thiz.Lscalatags_JsDom$all$__f_td = $as_Lscalatags_JsDom$TypedTag($f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag($thiz, "td", false, ns));
    const b$1 = $thiz.Lscalatags_JsDom$all$__f_bitmap$1;
    const lo$1 = (2 | b$1.RTLong__f_lo);
    const hi = b$1.RTLong__f_hi;
    $thiz.Lscalatags_JsDom$all$__f_bitmap$1 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lscalatags_JsDom$all$__f_td
});
const $p_Lscalatags_JsDom$all$__input$lzycompute__Lscalatags_JsDom$TypedTag = (function($thiz) {
  const b = $thiz.Lscalatags_JsDom$all$__f_bitmap$1;
  const lo = (128 & b.RTLong__f_lo);
  if ((lo === 0)) {
    const ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
    $thiz.Lscalatags_JsDom$all$__f_input = $as_Lscalatags_JsDom$TypedTag($f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag($thiz, "input", true, ns));
    const b$1 = $thiz.Lscalatags_JsDom$all$__f_bitmap$1;
    const lo$1 = (128 | b$1.RTLong__f_lo);
    const hi = b$1.RTLong__f_hi;
    $thiz.Lscalatags_JsDom$all$__f_bitmap$1 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lscalatags_JsDom$all$__f_input
});
const $p_Lscalatags_JsDom$all$__height$lzycompute__Lscalatags_generic_StyleMisc$PixelAutoStyle = (function($thiz) {
  const b = $thiz.Lscalatags_JsDom$all$__f_bitmap$1;
  const hi = (16384 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lscalatags_JsDom$all$__f_height = new $c_Lscalatags_generic_StyleMisc$PixelAutoStyle($thiz, "height", "height");
    const b$1 = $thiz.Lscalatags_JsDom$all$__f_bitmap$1;
    const lo = b$1.RTLong__f_lo;
    const hi$1 = (16384 | b$1.RTLong__f_hi);
    $thiz.Lscalatags_JsDom$all$__f_bitmap$1 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lscalatags_JsDom$all$__f_height
});
const $p_Lscalatags_JsDom$all$__width$lzycompute__Lscalatags_generic_StyleMisc$PixelAutoStyle = (function($thiz) {
  const b = $thiz.Lscalatags_JsDom$all$__f_bitmap$2;
  const lo = (8 & b.RTLong__f_lo);
  if ((lo === 0)) {
    $thiz.Lscalatags_JsDom$all$__f_width = new $c_Lscalatags_generic_StyleMisc$PixelAutoStyle($thiz, "width", "width");
    const b$1 = $thiz.Lscalatags_JsDom$all$__f_bitmap$2;
    const lo$1 = (8 | b$1.RTLong__f_lo);
    const hi = b$1.RTLong__f_hi;
    $thiz.Lscalatags_JsDom$all$__f_bitmap$2 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lscalatags_JsDom$all$__f_width
});
const $p_Lscalatags_JsDom$all$__src$lzycompute__Lscalatags_generic_Attr = (function($thiz) {
  const b = $thiz.Lscalatags_JsDom$all$__f_bitmap$2;
  const lo = (1073741824 & b.RTLong__f_lo);
  if ((lo === 0)) {
    $thiz.Lscalatags_JsDom$all$__f_src = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, "src", null, false);
    const b$1 = $thiz.Lscalatags_JsDom$all$__f_bitmap$2;
    const lo$1 = (1073741824 | b$1.RTLong__f_lo);
    const hi = b$1.RTLong__f_hi;
    $thiz.Lscalatags_JsDom$all$__f_bitmap$2 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lscalatags_JsDom$all$__f_src
});
const $p_Lscalatags_JsDom$all$__type$lzycompute__Lscalatags_generic_Attr = (function($thiz) {
  const b = $thiz.Lscalatags_JsDom$all$__f_bitmap$4;
  const lo = (2097152 & b.RTLong__f_lo);
  if ((lo === 0)) {
    $thiz.Lscalatags_JsDom$all$__f_type = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, "type", null, false);
    const b$1 = $thiz.Lscalatags_JsDom$all$__f_bitmap$4;
    const lo$1 = (2097152 | b$1.RTLong__f_lo);
    const hi = b$1.RTLong__f_hi;
    $thiz.Lscalatags_JsDom$all$__f_bitmap$4 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lscalatags_JsDom$all$__f_type
});
const $p_Lscalatags_JsDom$all$__value$lzycompute__Lscalatags_generic_Attr = (function($thiz) {
  const b = $thiz.Lscalatags_JsDom$all$__f_bitmap$4;
  const lo = (8388608 & b.RTLong__f_lo);
  if ((lo === 0)) {
    $thiz.Lscalatags_JsDom$all$__f_value = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, "value", null, false);
    const b$1 = $thiz.Lscalatags_JsDom$all$__f_bitmap$4;
    const lo$1 = (8388608 | b$1.RTLong__f_lo);
    const hi = b$1.RTLong__f_hi;
    $thiz.Lscalatags_JsDom$all$__f_bitmap$4 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lscalatags_JsDom$all$__f_value
});
const $p_Lscalatags_JsDom$all$__style$lzycompute__Lscalatags_generic_Attr = (function($thiz) {
  const b = $thiz.Lscalatags_JsDom$all$__f_bitmap$4;
  const hi = (32 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lscalatags_JsDom$all$__f_style = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, "style", null, false);
    const b$1 = $thiz.Lscalatags_JsDom$all$__f_bitmap$4;
    const lo = b$1.RTLong__f_lo;
    const hi$1 = (32 | b$1.RTLong__f_hi);
    $thiz.Lscalatags_JsDom$all$__f_bitmap$4 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lscalatags_JsDom$all$__f_style
});
class $c_Lscalatags_JsDom$all$ extends $c_O {
  constructor() {
    super();
    this.Lscalatags_JsDom$all$__f_bindJsAny$module = null;
    this.Lscalatags_JsDom$all$__f_RawFrag = null;
    this.Lscalatags_JsDom$all$__f_StringFrag = null;
    this.Lscalatags_JsDom$all$__f_HtmlTag = null;
    this.Lscalatags_JsDom$all$__f_SvgTag = null;
    this.Lscalatags_JsDom$all$__f_Tag = null;
    this.Lscalatags_JsDom$all$__f_stringAttr = null;
    this.Lscalatags_JsDom$all$__f_booleanAttr = null;
    this.Lscalatags_JsDom$all$__f_byteAttr = null;
    this.Lscalatags_JsDom$all$__f_shortAttr = null;
    this.Lscalatags_JsDom$all$__f_intAttr = null;
    this.Lscalatags_JsDom$all$__f_longAttr = null;
    this.Lscalatags_JsDom$all$__f_floatAttr = null;
    this.Lscalatags_JsDom$all$__f_doubleAttr = null;
    this.Lscalatags_JsDom$all$__f_stringStyle = null;
    this.Lscalatags_JsDom$all$__f_booleanStyle = null;
    this.Lscalatags_JsDom$all$__f_byteStyle = null;
    this.Lscalatags_JsDom$all$__f_shortStyle = null;
    this.Lscalatags_JsDom$all$__f_intStyle = null;
    this.Lscalatags_JsDom$all$__f_longStyle = null;
    this.Lscalatags_JsDom$all$__f_floatStyle = null;
    this.Lscalatags_JsDom$all$__f_doubleStyle = null;
    this.Lscalatags_JsDom$all$__f_stringPixelStyle = null;
    this.Lscalatags_JsDom$all$__f_booleanPixelStyle = null;
    this.Lscalatags_JsDom$all$__f_bytePixelStyle = null;
    this.Lscalatags_JsDom$all$__f_shortPixelStyle = null;
    this.Lscalatags_JsDom$all$__f_intPixelStyle = null;
    this.Lscalatags_JsDom$all$__f_longPixelStyle = null;
    this.Lscalatags_JsDom$all$__f_floatPixelStyle = null;
    this.Lscalatags_JsDom$all$__f_doublePixelStyle = null;
    this.Lscalatags_JsDom$all$__f_html = null;
    this.Lscalatags_JsDom$all$__f_head = null;
    this.Lscalatags_JsDom$all$__f_base = null;
    this.Lscalatags_JsDom$all$__f_link = null;
    this.Lscalatags_JsDom$all$__f_meta = null;
    this.Lscalatags_JsDom$all$__f_script = null;
    this.Lscalatags_JsDom$all$__f_body = null;
    this.Lscalatags_JsDom$all$__f_h1 = null;
    this.Lscalatags_JsDom$all$__f_h2 = null;
    this.Lscalatags_JsDom$all$__f_h3 = null;
    this.Lscalatags_JsDom$all$__f_h4 = null;
    this.Lscalatags_JsDom$all$__f_h5 = null;
    this.Lscalatags_JsDom$all$__f_h6 = null;
    this.Lscalatags_JsDom$all$__f_header = null;
    this.Lscalatags_JsDom$all$__f_footer = null;
    this.Lscalatags_JsDom$all$__f_p = null;
    this.Lscalatags_JsDom$all$__f_hr = null;
    this.Lscalatags_JsDom$all$__f_pre = null;
    this.Lscalatags_JsDom$all$__f_blockquote = null;
    this.Lscalatags_JsDom$all$__f_ol = null;
    this.Lscalatags_JsDom$all$__f_ul = null;
    this.Lscalatags_JsDom$all$__f_li = null;
    this.Lscalatags_JsDom$all$__f_dl = null;
    this.Lscalatags_JsDom$all$__f_dt = null;
    this.Lscalatags_JsDom$all$__f_dd = null;
    this.Lscalatags_JsDom$all$__f_figure = null;
    this.Lscalatags_JsDom$all$__f_figcaption = null;
    this.Lscalatags_JsDom$all$__f_div = null;
    this.Lscalatags_JsDom$all$__f_a = null;
    this.Lscalatags_JsDom$all$__f_em = null;
    this.Lscalatags_JsDom$all$__f_strong = null;
    this.Lscalatags_JsDom$all$__f_small = null;
    this.Lscalatags_JsDom$all$__f_s = null;
    this.Lscalatags_JsDom$all$__f_cite = null;
    this.Lscalatags_JsDom$all$__f_code = null;
    this.Lscalatags_JsDom$all$__f_sub = null;
    this.Lscalatags_JsDom$all$__f_sup = null;
    this.Lscalatags_JsDom$all$__f_i = null;
    this.Lscalatags_JsDom$all$__f_b = null;
    this.Lscalatags_JsDom$all$__f_u = null;
    this.Lscalatags_JsDom$all$__f_span = null;
    this.Lscalatags_JsDom$all$__f_br = null;
    this.Lscalatags_JsDom$all$__f_wbr = null;
    this.Lscalatags_JsDom$all$__f_ins = null;
    this.Lscalatags_JsDom$all$__f_del = null;
    this.Lscalatags_JsDom$all$__f_img = null;
    this.Lscalatags_JsDom$all$__f_iframe = null;
    this.Lscalatags_JsDom$all$__f_embed = null;
    this.Lscalatags_JsDom$all$__f_object = null;
    this.Lscalatags_JsDom$all$__f_param = null;
    this.Lscalatags_JsDom$all$__f_video = null;
    this.Lscalatags_JsDom$all$__f_audio = null;
    this.Lscalatags_JsDom$all$__f_source = null;
    this.Lscalatags_JsDom$all$__f_track = null;
    this.Lscalatags_JsDom$all$__f_canvas = null;
    this.Lscalatags_JsDom$all$__f_map = null;
    this.Lscalatags_JsDom$all$__f_area = null;
    this.Lscalatags_JsDom$all$__f_table = null;
    this.Lscalatags_JsDom$all$__f_caption = null;
    this.Lscalatags_JsDom$all$__f_colgroup = null;
    this.Lscalatags_JsDom$all$__f_col = null;
    this.Lscalatags_JsDom$all$__f_tbody = null;
    this.Lscalatags_JsDom$all$__f_thead = null;
    this.Lscalatags_JsDom$all$__f_tfoot = null;
    this.Lscalatags_JsDom$all$__f_tr = null;
    this.Lscalatags_JsDom$all$__f_td = null;
    this.Lscalatags_JsDom$all$__f_th = null;
    this.Lscalatags_JsDom$all$__f_form = null;
    this.Lscalatags_JsDom$all$__f_fieldset = null;
    this.Lscalatags_JsDom$all$__f_legend = null;
    this.Lscalatags_JsDom$all$__f_label = null;
    this.Lscalatags_JsDom$all$__f_input = null;
    this.Lscalatags_JsDom$all$__f_button = null;
    this.Lscalatags_JsDom$all$__f_select = null;
    this.Lscalatags_JsDom$all$__f_datalist = null;
    this.Lscalatags_JsDom$all$__f_optgroup = null;
    this.Lscalatags_JsDom$all$__f_option = null;
    this.Lscalatags_JsDom$all$__f_textarea = null;
    this.Lscalatags_JsDom$all$__f_backgroundAttachment$module = null;
    this.Lscalatags_JsDom$all$__f_background = null;
    this.Lscalatags_JsDom$all$__f_backgroundRepeat = null;
    this.Lscalatags_JsDom$all$__f_backgroundPosition = null;
    this.Lscalatags_JsDom$all$__f_backgroundColor = null;
    this.Lscalatags_JsDom$all$__f_backgroundOrigin$module = null;
    this.Lscalatags_JsDom$all$__f_backgroundClip$module = null;
    this.Lscalatags_JsDom$all$__f_backgroundSize$module = null;
    this.Lscalatags_JsDom$all$__f_backgroundImage = null;
    this.Lscalatags_JsDom$all$__f_borderTopColor = null;
    this.Lscalatags_JsDom$all$__f_borderStyle = null;
    this.Lscalatags_JsDom$all$__f_borderTopStyle = null;
    this.Lscalatags_JsDom$all$__f_borderRightStyle = null;
    this.Lscalatags_JsDom$all$__f_borderRightWidth = null;
    this.Lscalatags_JsDom$all$__f_borderTopRightRadius = null;
    this.Lscalatags_JsDom$all$__f_borderBottomLeftRadius = null;
    this.Lscalatags_JsDom$all$__f_borderRightColor = null;
    this.Lscalatags_JsDom$all$__f_borderBottom = null;
    this.Lscalatags_JsDom$all$__f_border = null;
    this.Lscalatags_JsDom$all$__f_borderBottomWidth = null;
    this.Lscalatags_JsDom$all$__f_borderLeftColor = null;
    this.Lscalatags_JsDom$all$__f_borderBottomColor = null;
    this.Lscalatags_JsDom$all$__f_borderCollapse$module = null;
    this.Lscalatags_JsDom$all$__f_borderLeft = null;
    this.Lscalatags_JsDom$all$__f_borderLeftStyle = null;
    this.Lscalatags_JsDom$all$__f_borderRight = null;
    this.Lscalatags_JsDom$all$__f_borderBottomStyle = null;
    this.Lscalatags_JsDom$all$__f_borderLeftWidth = null;
    this.Lscalatags_JsDom$all$__f_borderTopWidth = null;
    this.Lscalatags_JsDom$all$__f_borderTop = null;
    this.Lscalatags_JsDom$all$__f_borderSpacing$module = null;
    this.Lscalatags_JsDom$all$__f_borderRadius = null;
    this.Lscalatags_JsDom$all$__f_borderWidth = null;
    this.Lscalatags_JsDom$all$__f_borderBottomRightRadius = null;
    this.Lscalatags_JsDom$all$__f_borderTopLeftRadius = null;
    this.Lscalatags_JsDom$all$__f_borderColor = null;
    this.Lscalatags_JsDom$all$__f_boxSizing$module = null;
    this.Lscalatags_JsDom$all$__f_color$module = null;
    this.Lscalatags_JsDom$all$__f_clip$module = null;
    this.Lscalatags_JsDom$all$__f_cursor$module = null;
    this.Lscalatags_JsDom$all$__f_float$module = null;
    this.Lscalatags_JsDom$all$__f_direction$module = null;
    this.Lscalatags_JsDom$all$__f_display$module = null;
    this.Lscalatags_JsDom$all$__f_pointerEvents$module = null;
    this.Lscalatags_JsDom$all$__f_listStyleImage$module = null;
    this.Lscalatags_JsDom$all$__f_listStylePosition$module = null;
    this.Lscalatags_JsDom$all$__f_wordWrap$module = null;
    this.Lscalatags_JsDom$all$__f_opacity = null;
    this.Lscalatags_JsDom$all$__f_maxWidth = null;
    this.Lscalatags_JsDom$all$__f_verticalAlign$module = null;
    this.Lscalatags_JsDom$all$__f_overflow$module = null;
    this.Lscalatags_JsDom$all$__f_mask$module = null;
    this.Lscalatags_JsDom$all$__f_emptyCells$module = null;
    this.Lscalatags_JsDom$all$__f_height = null;
    this.Lscalatags_JsDom$all$__f_paddingRight = null;
    this.Lscalatags_JsDom$all$__f_paddingTop = null;
    this.Lscalatags_JsDom$all$__f_paddingLeft = null;
    this.Lscalatags_JsDom$all$__f_padding = null;
    this.Lscalatags_JsDom$all$__f_paddingBottom = null;
    this.Lscalatags_JsDom$all$__f_right = null;
    this.Lscalatags_JsDom$all$__f_lineHeight = null;
    this.Lscalatags_JsDom$all$__f_left = null;
    this.Lscalatags_JsDom$all$__f_listStyleType$module = null;
    this.Lscalatags_JsDom$all$__f_listStyle = null;
    this.Lscalatags_JsDom$all$__f_overflowY = null;
    this.Lscalatags_JsDom$all$__f_captionSide$module = null;
    this.Lscalatags_JsDom$all$__f_boxShadow = null;
    this.Lscalatags_JsDom$all$__f_position$module = null;
    this.Lscalatags_JsDom$all$__f_quotes$module = null;
    this.Lscalatags_JsDom$all$__f_tableLayout$module = null;
    this.Lscalatags_JsDom$all$__f_fontSize$module = null;
    this.Lscalatags_JsDom$all$__f_fontSizeAdjust = null;
    this.Lscalatags_JsDom$all$__f_fontFamily = null;
    this.Lscalatags_JsDom$all$__f_fontWeight$module = null;
    this.Lscalatags_JsDom$all$__f_font = null;
    this.Lscalatags_JsDom$all$__f_fontFeatureSettings = null;
    this.Lscalatags_JsDom$all$__f_fontStyle$module = null;
    this.Lscalatags_JsDom$all$__f_clear$module = null;
    this.Lscalatags_JsDom$all$__f_marginBottom = null;
    this.Lscalatags_JsDom$all$__f_marginRight = null;
    this.Lscalatags_JsDom$all$__f_marginTop = null;
    this.Lscalatags_JsDom$all$__f_marginLeft = null;
    this.Lscalatags_JsDom$all$__f_margin$module = null;
    this.Lscalatags_JsDom$all$__f_top = null;
    this.Lscalatags_JsDom$all$__f_width = null;
    this.Lscalatags_JsDom$all$__f_bottom = null;
    this.Lscalatags_JsDom$all$__f_letterSpacing = null;
    this.Lscalatags_JsDom$all$__f_maxHeight = null;
    this.Lscalatags_JsDom$all$__f_minWidth = null;
    this.Lscalatags_JsDom$all$__f_minHeight = null;
    this.Lscalatags_JsDom$all$__f_outline = null;
    this.Lscalatags_JsDom$all$__f_outlineStyle = null;
    this.Lscalatags_JsDom$all$__f_outlineWidth$module = null;
    this.Lscalatags_JsDom$all$__f_outlineColor$module = null;
    this.Lscalatags_JsDom$all$__f_overflowX = null;
    this.Lscalatags_JsDom$all$__f_textAlignLast = null;
    this.Lscalatags_JsDom$all$__f_textAlign = null;
    this.Lscalatags_JsDom$all$__f_textDecoration$module = null;
    this.Lscalatags_JsDom$all$__f_textIndent = null;
    this.Lscalatags_JsDom$all$__f_textOverflow$module = null;
    this.Lscalatags_JsDom$all$__f_textUnderlinePosition$module = null;
    this.Lscalatags_JsDom$all$__f_textTransform$module = null;
    this.Lscalatags_JsDom$all$__f_textShadow = null;
    this.Lscalatags_JsDom$all$__f_transitionDelay = null;
    this.Lscalatags_JsDom$all$__f_transition = null;
    this.Lscalatags_JsDom$all$__f_transitionTimingFunction = null;
    this.Lscalatags_JsDom$all$__f_transitionDuration = null;
    this.Lscalatags_JsDom$all$__f_transitionProperty = null;
    this.Lscalatags_JsDom$all$__f_visibility$module = null;
    this.Lscalatags_JsDom$all$__f_whiteSpace$module = null;
    this.Lscalatags_JsDom$all$__f_wordSpacing = null;
    this.Lscalatags_JsDom$all$__f_zIndex = null;
    this.Lscalatags_JsDom$all$__f_flex = null;
    this.Lscalatags_JsDom$all$__f_flexBasis = null;
    this.Lscalatags_JsDom$all$__f_flexGrow = null;
    this.Lscalatags_JsDom$all$__f_flexShrink = null;
    this.Lscalatags_JsDom$all$__f_alignContent$module = null;
    this.Lscalatags_JsDom$all$__f_alignSelf$module = null;
    this.Lscalatags_JsDom$all$__f_flexWrap$module = null;
    this.Lscalatags_JsDom$all$__f_alignItems$module = null;
    this.Lscalatags_JsDom$all$__f_justifyContent$module = null;
    this.Lscalatags_JsDom$all$__f_flexDirection$module = null;
    this.Lscalatags_JsDom$all$__f_href = null;
    this.Lscalatags_JsDom$all$__f_alt = null;
    this.Lscalatags_JsDom$all$__f_rel = null;
    this.Lscalatags_JsDom$all$__f_src = null;
    this.Lscalatags_JsDom$all$__f_xmlns = null;
    this.Lscalatags_JsDom$all$__f_accept = null;
    this.Lscalatags_JsDom$all$__f_charset = null;
    this.Lscalatags_JsDom$all$__f_disabled = null;
    this.Lscalatags_JsDom$all$__f_for = null;
    this.Lscalatags_JsDom$all$__f_rows = null;
    this.Lscalatags_JsDom$all$__f_cols = null;
    this.Lscalatags_JsDom$all$__f_role = null;
    this.Lscalatags_JsDom$all$__f_content = null;
    this.Lscalatags_JsDom$all$__f_httpEquiv = null;
    this.Lscalatags_JsDom$all$__f_media = null;
    this.Lscalatags_JsDom$all$__f_colspan = null;
    this.Lscalatags_JsDom$all$__f_rowspan = null;
    this.Lscalatags_JsDom$all$__f_wrap = null;
    this.Lscalatags_JsDom$all$__f_defer = null;
    this.Lscalatags_JsDom$all$__f_aria$module = null;
    this.Lscalatags_JsDom$all$__f_scoped = null;
    this.Lscalatags_JsDom$all$__f_high = null;
    this.Lscalatags_JsDom$all$__f_low = null;
    this.Lscalatags_JsDom$all$__f_optimum = null;
    this.Lscalatags_JsDom$all$__f_unselectable = null;
    this.Lscalatags_JsDom$all$__f_onblur = null;
    this.Lscalatags_JsDom$all$__f_onchange = null;
    this.Lscalatags_JsDom$all$__f_onfocus = null;
    this.Lscalatags_JsDom$all$__f_onselect = null;
    this.Lscalatags_JsDom$all$__f_onsubmit = null;
    this.Lscalatags_JsDom$all$__f_onreset = null;
    this.Lscalatags_JsDom$all$__f_oncontextmenu = null;
    this.Lscalatags_JsDom$all$__f_oninput = null;
    this.Lscalatags_JsDom$all$__f_oninvalid = null;
    this.Lscalatags_JsDom$all$__f_onsearch = null;
    this.Lscalatags_JsDom$all$__f_selected = null;
    this.Lscalatags_JsDom$all$__f_onload = null;
    this.Lscalatags_JsDom$all$__f_onafterprint = null;
    this.Lscalatags_JsDom$all$__f_onbeforeprint = null;
    this.Lscalatags_JsDom$all$__f_onbeforeunload = null;
    this.Lscalatags_JsDom$all$__f_onhashchange = null;
    this.Lscalatags_JsDom$all$__f_onmessage = null;
    this.Lscalatags_JsDom$all$__f_onoffline = null;
    this.Lscalatags_JsDom$all$__f_ononline = null;
    this.Lscalatags_JsDom$all$__f_onpagehide = null;
    this.Lscalatags_JsDom$all$__f_onpageshow = null;
    this.Lscalatags_JsDom$all$__f_onpopstate = null;
    this.Lscalatags_JsDom$all$__f_onresize = null;
    this.Lscalatags_JsDom$all$__f_onstorage = null;
    this.Lscalatags_JsDom$all$__f_onunload = null;
    this.Lscalatags_JsDom$all$__f_onclick = null;
    this.Lscalatags_JsDom$all$__f_ondblclick = null;
    this.Lscalatags_JsDom$all$__f_ondrag = null;
    this.Lscalatags_JsDom$all$__f_ondragend = null;
    this.Lscalatags_JsDom$all$__f_ondragenter = null;
    this.Lscalatags_JsDom$all$__f_ondragleave = null;
    this.Lscalatags_JsDom$all$__f_ondragover = null;
    this.Lscalatags_JsDom$all$__f_ondragstart = null;
    this.Lscalatags_JsDom$all$__f_ondrop = null;
    this.Lscalatags_JsDom$all$__f_onmousedown = null;
    this.Lscalatags_JsDom$all$__f_onmousemove = null;
    this.Lscalatags_JsDom$all$__f_onmouseout = null;
    this.Lscalatags_JsDom$all$__f_onmouseover = null;
    this.Lscalatags_JsDom$all$__f_onmouseup = null;
    this.Lscalatags_JsDom$all$__f_onscroll = null;
    this.Lscalatags_JsDom$all$__f_onwheel = null;
    this.Lscalatags_JsDom$all$__f_onkeydown = null;
    this.Lscalatags_JsDom$all$__f_onkeyup = null;
    this.Lscalatags_JsDom$all$__f_onkeypress = null;
    this.Lscalatags_JsDom$all$__f_onshow = null;
    this.Lscalatags_JsDom$all$__f_ontoggle = null;
    this.Lscalatags_JsDom$all$__f_onabort = null;
    this.Lscalatags_JsDom$all$__f_oncanplay = null;
    this.Lscalatags_JsDom$all$__f_oncanplaythrough = null;
    this.Lscalatags_JsDom$all$__f_oncuechange = null;
    this.Lscalatags_JsDom$all$__f_ondurationchange = null;
    this.Lscalatags_JsDom$all$__f_onemptied = null;
    this.Lscalatags_JsDom$all$__f_onended = null;
    this.Lscalatags_JsDom$all$__f_onloadeddata = null;
    this.Lscalatags_JsDom$all$__f_onloadedmetadata = null;
    this.Lscalatags_JsDom$all$__f_onloadstart = null;
    this.Lscalatags_JsDom$all$__f_onpause = null;
    this.Lscalatags_JsDom$all$__f_onplay = null;
    this.Lscalatags_JsDom$all$__f_onplaying = null;
    this.Lscalatags_JsDom$all$__f_onprogress = null;
    this.Lscalatags_JsDom$all$__f_onratechange = null;
    this.Lscalatags_JsDom$all$__f_onseeked = null;
    this.Lscalatags_JsDom$all$__f_onseeking = null;
    this.Lscalatags_JsDom$all$__f_onstalled = null;
    this.Lscalatags_JsDom$all$__f_onsuspend = null;
    this.Lscalatags_JsDom$all$__f_ontimeupdate = null;
    this.Lscalatags_JsDom$all$__f_onvolumechange = null;
    this.Lscalatags_JsDom$all$__f_onwaiting = null;
    this.Lscalatags_JsDom$all$__f_onerror = null;
    this.Lscalatags_JsDom$all$__f_oncopy = null;
    this.Lscalatags_JsDom$all$__f_oncut = null;
    this.Lscalatags_JsDom$all$__f_onpaste = null;
    this.Lscalatags_JsDom$all$__f_action = null;
    this.Lscalatags_JsDom$all$__f_autocomplete = null;
    this.Lscalatags_JsDom$all$__f_autofocus = null;
    this.Lscalatags_JsDom$all$__f_checked = null;
    this.Lscalatags_JsDom$all$__f_enctype = null;
    this.Lscalatags_JsDom$all$__f_formA = null;
    this.Lscalatags_JsDom$all$__f_formaction = null;
    this.Lscalatags_JsDom$all$__f_formenctype = null;
    this.Lscalatags_JsDom$all$__f_formmethod = null;
    this.Lscalatags_JsDom$all$__f_formnovalidate = null;
    this.Lscalatags_JsDom$all$__f_formtarget = null;
    this.Lscalatags_JsDom$all$__f_heightA = null;
    this.Lscalatags_JsDom$all$__f_list = null;
    this.Lscalatags_JsDom$all$__f_max = null;
    this.Lscalatags_JsDom$all$__f_min = null;
    this.Lscalatags_JsDom$all$__f_multiple = null;
    this.Lscalatags_JsDom$all$__f_minlength = null;
    this.Lscalatags_JsDom$all$__f_maxlength = null;
    this.Lscalatags_JsDom$all$__f_method = null;
    this.Lscalatags_JsDom$all$__f_name = null;
    this.Lscalatags_JsDom$all$__f_pattern = null;
    this.Lscalatags_JsDom$all$__f_placeholder = null;
    this.Lscalatags_JsDom$all$__f_readonly = null;
    this.Lscalatags_JsDom$all$__f_required = null;
    this.Lscalatags_JsDom$all$__f_size = null;
    this.Lscalatags_JsDom$all$__f_step = null;
    this.Lscalatags_JsDom$all$__f_target = null;
    this.Lscalatags_JsDom$all$__f_type = null;
    this.Lscalatags_JsDom$all$__f_tpe = null;
    this.Lscalatags_JsDom$all$__f_value = null;
    this.Lscalatags_JsDom$all$__f_widthA = null;
    this.Lscalatags_JsDom$all$__f_accesskey = null;
    this.Lscalatags_JsDom$all$__f_class = null;
    this.Lscalatags_JsDom$all$__f_cls = null;
    this.Lscalatags_JsDom$all$__f_contenteditable = null;
    this.Lscalatags_JsDom$all$__f_contextmenu = null;
    this.Lscalatags_JsDom$all$__f_data$module = null;
    this.Lscalatags_JsDom$all$__f_dir = null;
    this.Lscalatags_JsDom$all$__f_draggable = null;
    this.Lscalatags_JsDom$all$__f_dropzone = null;
    this.Lscalatags_JsDom$all$__f_hidden = null;
    this.Lscalatags_JsDom$all$__f_id = null;
    this.Lscalatags_JsDom$all$__f_lang = null;
    this.Lscalatags_JsDom$all$__f_spellcheck = null;
    this.Lscalatags_JsDom$all$__f_style = null;
    this.Lscalatags_JsDom$all$__f_tabindex = null;
    this.Lscalatags_JsDom$all$__f_title = null;
    this.Lscalatags_JsDom$all$__f_translate = null;
    this.Lscalatags_JsDom$all$__f_bitmap$0 = $L0;
    this.Lscalatags_JsDom$all$__f_bitmap$1 = $L0;
    this.Lscalatags_JsDom$all$__f_bitmap$2 = $L0;
    this.Lscalatags_JsDom$all$__f_bitmap$3 = $L0;
    this.Lscalatags_JsDom$all$__f_bitmap$4 = $L0;
    $n_Lscalatags_JsDom$all$ = this;
    $f_Lscalatags_generic_MouseEventAttrs__$init$__V(this);
    $f_Lscalatags_generic_Aggregate__$init$__V(this);
    $f_Lscalatags_JsDom$Aggregate__$init$__V(this)
  };
  p__Lscalatags_JsDom$TypedTag() {
    const b = this.Lscalatags_JsDom$all$__f_bitmap$0;
    const lo = (32768 & b.RTLong__f_lo);
    if ((lo === 0)) {
      return $p_Lscalatags_JsDom$all$__p$lzycompute__Lscalatags_JsDom$TypedTag(this)
    } else {
      return this.Lscalatags_JsDom$all$__f_p
    }
  };
  table__Lscalatags_JsDom$TypedTag() {
    const b = this.Lscalatags_JsDom$all$__f_bitmap$0;
    const hi = (33554432 & b.RTLong__f_hi);
    if ((hi === 0)) {
      return $p_Lscalatags_JsDom$all$__table$lzycompute__Lscalatags_JsDom$TypedTag(this)
    } else {
      return this.Lscalatags_JsDom$all$__f_table
    }
  };
  tbody__Lscalatags_JsDom$TypedTag() {
    const b = this.Lscalatags_JsDom$all$__f_bitmap$0;
    const hi = (536870912 & b.RTLong__f_hi);
    if ((hi === 0)) {
      return $p_Lscalatags_JsDom$all$__tbody$lzycompute__Lscalatags_JsDom$TypedTag(this)
    } else {
      return this.Lscalatags_JsDom$all$__f_tbody
    }
  };
  tr__Lscalatags_JsDom$TypedTag() {
    const b = this.Lscalatags_JsDom$all$__f_bitmap$1;
    const lo = (1 & b.RTLong__f_lo);
    if ((lo === 0)) {
      return $p_Lscalatags_JsDom$all$__tr$lzycompute__Lscalatags_JsDom$TypedTag(this)
    } else {
      return this.Lscalatags_JsDom$all$__f_tr
    }
  };
  td__Lscalatags_JsDom$TypedTag() {
    const b = this.Lscalatags_JsDom$all$__f_bitmap$1;
    const lo = (2 & b.RTLong__f_lo);
    if ((lo === 0)) {
      return $p_Lscalatags_JsDom$all$__td$lzycompute__Lscalatags_JsDom$TypedTag(this)
    } else {
      return this.Lscalatags_JsDom$all$__f_td
    }
  };
  input__Lscalatags_JsDom$TypedTag() {
    const b = this.Lscalatags_JsDom$all$__f_bitmap$1;
    const lo = (128 & b.RTLong__f_lo);
    if ((lo === 0)) {
      return $p_Lscalatags_JsDom$all$__input$lzycompute__Lscalatags_JsDom$TypedTag(this)
    } else {
      return this.Lscalatags_JsDom$all$__f_input
    }
  };
  height__Lscalatags_generic_StyleMisc$PixelAutoStyle() {
    const b = this.Lscalatags_JsDom$all$__f_bitmap$1;
    const hi = (16384 & b.RTLong__f_hi);
    if ((hi === 0)) {
      return $p_Lscalatags_JsDom$all$__height$lzycompute__Lscalatags_generic_StyleMisc$PixelAutoStyle(this)
    } else {
      return this.Lscalatags_JsDom$all$__f_height
    }
  };
  width__Lscalatags_generic_StyleMisc$PixelAutoStyle() {
    const b = this.Lscalatags_JsDom$all$__f_bitmap$2;
    const lo = (8 & b.RTLong__f_lo);
    if ((lo === 0)) {
      return $p_Lscalatags_JsDom$all$__width$lzycompute__Lscalatags_generic_StyleMisc$PixelAutoStyle(this)
    } else {
      return this.Lscalatags_JsDom$all$__f_width
    }
  };
  src__Lscalatags_generic_Attr() {
    const b = this.Lscalatags_JsDom$all$__f_bitmap$2;
    const lo = (1073741824 & b.RTLong__f_lo);
    if ((lo === 0)) {
      return $p_Lscalatags_JsDom$all$__src$lzycompute__Lscalatags_generic_Attr(this)
    } else {
      return this.Lscalatags_JsDom$all$__f_src
    }
  };
  type__Lscalatags_generic_Attr() {
    const b = this.Lscalatags_JsDom$all$__f_bitmap$4;
    const lo = (2097152 & b.RTLong__f_lo);
    if ((lo === 0)) {
      return $p_Lscalatags_JsDom$all$__type$lzycompute__Lscalatags_generic_Attr(this)
    } else {
      return this.Lscalatags_JsDom$all$__f_type
    }
  };
  value__Lscalatags_generic_Attr() {
    const b = this.Lscalatags_JsDom$all$__f_bitmap$4;
    const lo = (8388608 & b.RTLong__f_lo);
    if ((lo === 0)) {
      return $p_Lscalatags_JsDom$all$__value$lzycompute__Lscalatags_generic_Attr(this)
    } else {
      return this.Lscalatags_JsDom$all$__f_value
    }
  };
  style__Lscalatags_generic_Attr() {
    const b = this.Lscalatags_JsDom$all$__f_bitmap$4;
    const hi = (32 & b.RTLong__f_hi);
    if ((hi === 0)) {
      return $p_Lscalatags_JsDom$all$__style$lzycompute__Lscalatags_generic_Attr(this)
    } else {
      return this.Lscalatags_JsDom$all$__f_style
    }
  };
}
const $d_Lscalatags_JsDom$all$ = new $TypeData().initClass({
  Lscalatags_JsDom$all$: 0
}, false, "scalatags.JsDom$all$", {
  Lscalatags_JsDom$all$: 1,
  O: 1,
  Lscalatags_JsDom$Cap: 1,
  Lscalatags_generic_Util: 1,
  Lscalatags_generic_LowPriUtil: 1,
  Lscalatags_jsdom_TagFactory: 1,
  Lscalatags_generic_Attrs: 1,
  Lscalatags_generic_InputAttrs: 1,
  Lscalatags_generic_GlobalAttrs: 1,
  Lscalatags_generic_ClipboardEventAttrs: 1,
  Lscalatags_generic_MediaEventAttrs: 1,
  Lscalatags_generic_SharedEventAttrs: 1,
  Lscalatags_generic_MiscellaneousEventAttrs: 1,
  Lscalatags_generic_KeyboardEventAttrs: 1,
  Lscalatags_generic_MouseEventAttrs: 1,
  Lscalatags_generic_WindowEventAttrs: 1,
  Lscalatags_generic_FormEventAttrs: 1,
  Lscalatags_generic_Styles: 1,
  Lscalatags_generic_StyleMisc: 1,
  Lscalatags_jsdom_Tags: 1,
  Lscalatags_generic_Tags: 1,
  Lscalatags_DataConverters: 1,
  Lscalatags_JsDom$Aggregate: 1,
  Lscalatags_generic_Aggregate: 1,
  Lscalatags_generic_Aliases: 1,
  Lscalatags_LowPriorityImplicits: 1
});
$c_Lscalatags_JsDom$all$.prototype.$classData = $d_Lscalatags_JsDom$all$;
let $n_Lscalatags_JsDom$all$ = (void 0);
function $m_Lscalatags_JsDom$all$() {
  if ((!$n_Lscalatags_JsDom$all$)) {
    $n_Lscalatags_JsDom$all$ = new $c_Lscalatags_JsDom$all$()
  };
  return $n_Lscalatags_JsDom$all$
}
class $c_scm_AbstractSeq extends $c_sc_AbstractSeq {
}
const $p_sci_Range__gap__J = (function($thiz) {
  const value = $thiz.sci_Range__f_end;
  const hi = (value >> 31);
  const value$1 = $thiz.sci_Range__f_start;
  const hi$1 = (value$1 >> 31);
  const lo = ((value - value$1) | 0);
  const hi$2 = ((((-2147483648) ^ lo) > ((-2147483648) ^ value)) ? (((-1) + ((hi - hi$1) | 0)) | 0) : ((hi - hi$1) | 0));
  return new $c_RTLong(lo, hi$2)
});
const $p_sci_Range__isExact__Z = (function($thiz) {
  const t = $p_sci_Range__gap__J($thiz);
  const lo = t.RTLong__f_lo;
  const hi$1 = t.RTLong__f_hi;
  const value = $thiz.sci_Range__f_step;
  const hi = (value >> 31);
  const this$2 = $m_RTLong$();
  const lo$1 = this$2.remainderImpl__I__I__I__I__I(lo, hi$1, value, hi);
  const hi$2 = this$2.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return ((lo$1 === 0) && (hi$2 === 0))
});
const $p_sci_Range__hasStub__Z = (function($thiz) {
  return true
});
const $p_sci_Range__longLength__J = (function($thiz) {
  const t = $p_sci_Range__gap__J($thiz);
  const lo = t.RTLong__f_lo;
  const hi$1 = t.RTLong__f_hi;
  const value = $thiz.sci_Range__f_step;
  const hi = (value >> 31);
  const this$2 = $m_RTLong$();
  const lo$1 = this$2.divideImpl__I__I__I__I__I(lo, hi$1, value, hi);
  const hi$2 = this$2.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  const value$1 = ($p_sci_Range__hasStub__Z($thiz) ? 1 : 0);
  const hi$3 = (value$1 >> 31);
  const lo$2 = ((lo$1 + value$1) | 0);
  const hi$4 = ((((-2147483648) ^ lo$2) < ((-2147483648) ^ lo$1)) ? ((1 + ((hi$2 + hi$3) | 0)) | 0) : ((hi$2 + hi$3) | 0));
  return new $c_RTLong(lo$2, hi$4)
});
const $ct_sci_Range__I__I__I__ = (function($thiz, start, end, step) {
  $thiz.sci_Range__f_start = start;
  $thiz.sci_Range__f_end = end;
  $thiz.sci_Range__f_step = step;
  $thiz.sci_Range__f_isEmpty = (((start > end) && (step > 0)) || ((start < end) && (step < 0)));
  let $$x1;
  if ((step === 0)) {
    throw new $c_jl_IllegalArgumentException("step cannot be 0.")
  } else if ($thiz.sci_Range__f_isEmpty) {
    $$x1 = 0
  } else {
    const t = $p_sci_Range__longLength__J($thiz);
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    $$x1 = (((hi === 0) ? (((-2147483648) ^ lo) > (-1)) : (hi > 0)) ? (-1) : lo)
  };
  $thiz.sci_Range__f_scala$collection$immutable$Range$$numRangeElements = $$x1;
  let $$x2;
  switch (step) {
    case 1: {
      $$x2 = end;
      break
    }
    case (-1): {
      $$x2 = end;
      break
    }
    default: {
      const t$1 = $p_sci_Range__gap__J($thiz);
      const lo$1 = t$1.RTLong__f_lo;
      const hi$2 = t$1.RTLong__f_hi;
      const hi$1 = (step >> 31);
      const this$2 = $m_RTLong$();
      const lo$2 = this$2.remainderImpl__I__I__I__I__I(lo$1, hi$2, step, hi$1);
      $$x2 = ((lo$2 !== 0) ? ((end - lo$2) | 0) : end)
    }
  };
  $thiz.sci_Range__f_scala$collection$immutable$Range$$lastElement = $$x2;
  return $thiz
});
class $c_sci_Range extends $c_sc_AbstractSeq {
  constructor() {
    super();
    this.sci_Range__f_start = 0;
    this.sci_Range__f_end = 0;
    this.sci_Range__f_step = 0;
    this.sci_Range__f_isEmpty = false;
    this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements = 0;
    this.sci_Range__f_scala$collection$immutable$Range$$lastElement = 0
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqLike$Elements(this, 0, this.length__I())
  };
  isEmpty__Z() {
    return this.sci_Range__f_isEmpty
  };
  last__I() {
    if (this.sci_Range__f_isEmpty) {
      const this$1 = $m_sci_Nil$();
      return $uI($f_sc_LinearSeqOptimized__last__O(this$1))
    } else {
      return this.sci_Range__f_scala$collection$immutable$Range$$lastElement
    }
  };
  length__I() {
    return ((this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements < 0) ? $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(this.sci_Range__f_start, this.sci_Range__f_end, this.sci_Range__f_step, true) : this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements)
  };
  scala$collection$immutable$Range$$validateMaxLength__V() {
    if ((this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements < 0)) {
      $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(this.sci_Range__f_start, this.sci_Range__f_end, this.sci_Range__f_step, true)
    }
  };
  foreach__F1__V(f) {
    if ((!this.sci_Range__f_isEmpty)) {
      let i = this.sci_Range__f_start;
      while (true) {
        f.apply__O__O(i);
        if ((i === this.sci_Range__f_scala$collection$immutable$Range$$lastElement)) {
          return (void 0)
        };
        i = ((i + this.sci_Range__f_step) | 0)
      }
    }
  };
  equals__O__Z(other) {
    if ((other instanceof $c_sci_Range)) {
      const x2 = $as_sci_Range(other);
      if (this.sci_Range__f_isEmpty) {
        return x2.sci_Range__f_isEmpty
      } else if (((!x2.sci_Range__f_isEmpty) && (this.sci_Range__f_start === x2.sci_Range__f_start))) {
        const l0 = this.last__I();
        return ((l0 === x2.last__I()) && ((this.sci_Range__f_start === l0) || (this.sci_Range__f_step === x2.sci_Range__f_step)))
      } else {
        return false
      }
    } else {
      return $f_sc_GenSeqLike__equals__O__Z(this, other)
    }
  };
  toString__T() {
    const stepped = ((this.sci_Range__f_step === 1) ? "" : (" by " + this.sci_Range__f_step));
    const prefix = (this.sci_Range__f_isEmpty ? "empty " : ((!$p_sci_Range__isExact__Z(this)) ? "inexact " : ""));
    return (((((prefix + "Range ") + this.sci_Range__f_start) + " to ") + this.sci_Range__f_end) + stepped)
  };
  apply$mcII$sp__I__I(idx) {
    this.scala$collection$immutable$Range$$validateMaxLength__V();
    if (((idx < 0) || (idx >= this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements))) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + idx))
    } else {
      return ((this.sci_Range__f_start + $imul(this.sci_Range__f_step, idx)) | 0)
    }
  };
  apply__O__O(v1) {
    const idx = $uI(v1);
    return this.apply$mcII$sp__I__I(idx)
  };
  apply__I__O(idx) {
    return this.apply$mcII$sp__I__I(idx)
  };
}
function $as_sci_Range(obj) {
  return (((obj instanceof $c_sci_Range) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Range"))
}
function $isArrayOf_sci_Range(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Range)))
}
function $asArrayOf_sci_Range(obj, depth) {
  return (($isArrayOf_sci_Range(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Range;", depth))
}
class $c_sci_List extends $c_sc_AbstractSeq {
  length__I() {
    return $f_sc_LinearSeqOptimized__length__I(this)
  };
  apply__I__O(n) {
    return $f_sc_LinearSeqOptimized__apply__I__O(this, n)
  };
  sameElements__sc_GenIterable__Z(that) {
    return $f_sc_LinearSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  iterator__sc_Iterator() {
    return new $c_sc_LinearSeqLike$$anon$1(this)
  };
  drop__I__sci_List(n) {
    let these = this;
    let count = n;
    while (((!these.isEmpty__Z()) && (count > 0))) {
      const this$1 = these;
      these = this$1.tail__sci_List();
      count = (((-1) + count) | 0)
    };
    return these
  };
  foreach__F1__V(f) {
    let these = this;
    while ((!these.isEmpty__Z())) {
      f.apply__O__O(these.head__O());
      const this$1 = these;
      these = this$1.tail__sci_List()
    }
  };
  stringPrefix__T() {
    return "List"
  };
  apply__O__O(v1) {
    const n = $uI(v1);
    return $f_sc_LinearSeqOptimized__apply__I__O(this, n)
  };
  drop__I__sc_LinearSeqOptimized(n) {
    return this.drop__I__sci_List(n)
  };
}
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"))
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)))
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth))
}
class $c_sci_Range$Inclusive extends $c_sci_Range {
  constructor(start, end, step) {
    super();
    $ct_sci_Range__I__I__I__(this, start, end, step)
  };
}
const $d_sci_Range$Inclusive = new $TypeData().initClass({
  sci_Range$Inclusive: 0
}, false, "scala.collection.immutable.Range$Inclusive", {
  sci_Range$Inclusive: 1,
  sci_Range: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range$Inclusive.prototype.$classData = $d_sci_Range$Inclusive;
class $c_sci_Vector {
}
function $as_sci_Vector(obj) {
  return (((obj instanceof $c_sci_Vector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector"))
}
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector)))
}
function $asArrayOf_sci_Vector(obj, depth) {
  return (($isArrayOf_sci_Vector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector;", depth))
}
class $c_sci_$colon$colon extends $c_sci_List {
  constructor(head, tl) {
    super();
    this.sci_$colon$colon__f_head = null;
    this.sci_$colon$colon__f_tl = null;
    this.sci_$colon$colon__f_head = head;
    this.sci_$colon$colon__f_tl = tl
  };
  head__O() {
    return this.sci_$colon$colon__f_head
  };
  tail__sci_List() {
    return this.sci_$colon$colon__f_tl
  };
  isEmpty__Z() {
    return false
  };
  productPrefix__T() {
    return "::"
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.sci_$colon$colon__f_head;
        break
      }
      case 1: {
        return this.sci_$colon$colon__f_tl;
        break
      }
      default: {
        throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  tail__O() {
    return this.sci_$colon$colon__f_tl
  };
}
const $d_sci_$colon$colon = new $TypeData().initClass({
  sci_$colon$colon: 0
}, false, "scala.collection.immutable.$colon$colon", {
  sci_$colon$colon: 1,
  sci_List: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_LinearSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  s_Product: 1,
  sc_LinearSeqOptimized: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_$colon$colon.prototype.$classData = $d_sci_$colon$colon;
class $c_sci_Nil$ extends $c_sci_List {
  isEmpty__Z() {
    return true
  };
  head__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty list")
  };
  tail__sci_List() {
    throw new $c_jl_UnsupportedOperationException("tail of empty list")
  };
  equals__O__Z(that) {
    if ($is_sc_GenSeq(that)) {
      const x2 = $as_sc_GenSeq(that);
      return x2.isEmpty__Z()
    } else {
      return false
    }
  };
  productPrefix__T() {
    return "Nil"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  tail__O() {
    return this.tail__sci_List()
  };
  head__O() {
    this.head__E()
  };
}
const $d_sci_Nil$ = new $TypeData().initClass({
  sci_Nil$: 0
}, false, "scala.collection.immutable.Nil$", {
  sci_Nil$: 1,
  sci_List: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_LinearSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  s_Product: 1,
  sc_LinearSeqOptimized: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Nil$.prototype.$classData = $d_sci_Nil$;
let $n_sci_Nil$ = (void 0);
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$()
  };
  return $n_sci_Nil$
}
class $c_scm_AbstractBuffer extends $c_scm_AbstractSeq {
}
const $ct_scm_StringBuilder__jl_StringBuilder__ = (function($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz
});
const $ct_scm_StringBuilder__I__T__ = (function($thiz, initCapacity, initValue) {
  const this$1 = $ct_jl_StringBuilder__I__(new $c_jl_StringBuilder(), (($uI(initValue.length) + initCapacity) | 0));
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + initValue);
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, this$1);
  return $thiz
});
const $ct_scm_StringBuilder__ = (function($thiz) {
  $ct_scm_StringBuilder__I__T__($thiz, 16, "");
  return $thiz
});
class $c_scm_StringBuilder extends $c_scm_AbstractSeq {
  constructor() {
    super();
    this.scm_StringBuilder__f_underlying = null
  };
  isEmpty__Z() {
    return $f_sc_IndexedSeqOptimized__isEmpty__Z(this)
  };
  foreach__F1__V(f) {
    $f_sc_IndexedSeqOptimized__foreach__F1__V(this, f)
  };
  sameElements__sc_GenIterable__Z(that) {
    return $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
  };
  copyToArray__O__I__I__V(xs, start, len) {
    $f_sc_IndexedSeqOptimized__copyToArray__O__I__I__V(this, xs, start, len)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqLike$Elements(this, 0, this.scm_StringBuilder__f_underlying.length__I())
  };
  length__I() {
    return this.scm_StringBuilder__f_underlying.length__I()
  };
  substring__I__I__T(start, end) {
    return this.scm_StringBuilder__f_underlying.substring__I__I__T(start, end)
  };
  append__O__scm_StringBuilder(x) {
    const this$2 = this.scm_StringBuilder__f_underlying;
    const str = ("" + x);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content + str);
    return this
  };
  append__T__scm_StringBuilder(s) {
    const this$1 = this.scm_StringBuilder__f_underlying;
    this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + s);
    return this
  };
  toString__T() {
    return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(index))
  };
  apply__I__O(idx) {
    return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(idx))
  };
}
const $d_scm_StringBuilder = new $TypeData().initClass({
  scm_StringBuilder: 0
}, false, "scala.collection.mutable.StringBuilder", {
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  jl_CharSequence: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  sci_StringLike: 1,
  sc_IndexedSeqOptimized: 1,
  s_math_Ordered: 1,
  jl_Comparable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder.prototype.$classData = $d_scm_StringBuilder;
class $c_sjs_js_WrappedArray extends $c_scm_AbstractBuffer {
  constructor(array) {
    super();
    this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = null;
    this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = array
  };
  isEmpty__Z() {
    return $f_sc_IndexedSeqOptimized__isEmpty__Z(this)
  };
  foreach__F1__V(f) {
    $f_sc_IndexedSeqOptimized__foreach__F1__V(this, f)
  };
  sameElements__sc_GenIterable__Z(that) {
    return $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
  };
  copyToArray__O__I__I__V(xs, start, len) {
    $f_sc_IndexedSeqOptimized__copyToArray__O__I__I__V(this, xs, start, len)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqLike$Elements(this, 0, $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length))
  };
  apply__I__O(index) {
    return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
  };
  length__I() {
    return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
  };
  stringPrefix__T() {
    return "WrappedArray"
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
  };
}
const $d_sjs_js_WrappedArray = new $TypeData().initClass({
  sjs_js_WrappedArray: 0
}, false, "scala.scalajs.js.WrappedArray", {
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_BufferLike: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  scg_Shrinkable: 1,
  sc_script_Scriptable: 1,
  scg_Subtractable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  scm_ArrayLike: 1,
  scm_IndexedSeqOptimized: 1,
  sc_IndexedSeqOptimized: 1,
  scm_Builder: 1
});
$c_sjs_js_WrappedArray.prototype.$classData = $d_sjs_js_WrappedArray;
$L0 = new $c_RTLong(0, 0);
Editing = $m_LEditing$();
MainApp = $m_LMainApp$();
}).call(this);
//# sourceMappingURL=library-fastopt.js.map
