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
  if (((typeof instance) === "string")) {
    return $f_T__subSequence__I__I__jl_CharSequence(instance, x0, x1)
  } else {
    return instance.subSequence__I__I__jl_CharSequence(x0, x1)
  }
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
    const this$3 = this$2.out__Ljava_io_PrintStream();
    this$3.java$lang$JSConsoleBasedPrintStream$$printString__T__V("Editing Time!!!\n");
    const x = $m_LUsers$().LUsers$__f_me.printPokes__T();
    const this$5 = $m_s_Console$();
    const this$6 = this$5.out__Ljava_io_PrintStream();
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
      const inputImage = $$x1.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array)).render__Lorg_scalajs_dom_raw_Element();
      inputImage.onclick = ((u$1, id$1, inputImage$1) => ((arg1$2) => {
        $m_LMainApp$().MainApp$$$anonfun$makeImgInputs$1__Lorg_scalajs_dom_raw_Event__LUser__I__Lorg_scalajs_dom_raw_HTMLInputElement__V(arg1$2, u$1, id$1, inputImage$1)
      }))(u, id, inputImage);
      inputs.set(i, inputImage);
      i = ((1 + i) | 0)
    };
    while ((i < 30)) {
      const $$x3 = i;
      const this$6 = $m_Lscalatags_JsDom$all$();
      const $$x2 = this$6.input__Lscalatags_JsDom$TypedTag();
      const array$1 = [$m_Lscalatags_JsDom$all$().type__Lscalatags_generic_Attr().$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("image", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr), $m_Lscalatags_JsDom$all$().src__Lscalatags_generic_Attr().$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("https://www.cpokemon.com/pokes/swsh/sprites/items/4.png", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr)];
      inputs.set($$x3, $$x2.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$1)).render__Lorg_scalajs_dom_raw_Element());
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
    const $$x63 = $$x64.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array));
    const this$9 = $m_Lscalatags_JsDom$all$();
    const $$x62 = this$9.td__Lscalatags_JsDom$TypedTag();
    const this$10 = $m_Lscalatags_JsDom$all$();
    const e$1 = urls.get(1);
    const array$1 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$10, e$1)];
    const $$x61 = $$x62.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$1));
    const this$14 = $m_Lscalatags_JsDom$all$();
    const $$x60 = this$14.td__Lscalatags_JsDom$TypedTag();
    const this$15 = $m_Lscalatags_JsDom$all$();
    const e$2 = urls.get(2);
    const array$2 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$15, e$2)];
    const $$x59 = $$x60.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$2));
    const this$19 = $m_Lscalatags_JsDom$all$();
    const $$x58 = this$19.td__Lscalatags_JsDom$TypedTag();
    const this$20 = $m_Lscalatags_JsDom$all$();
    const e$3 = urls.get(3);
    const array$3 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$20, e$3)];
    const $$x57 = $$x58.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$3));
    const this$24 = $m_Lscalatags_JsDom$all$();
    const $$x56 = this$24.td__Lscalatags_JsDom$TypedTag();
    const this$25 = $m_Lscalatags_JsDom$all$();
    const e$4 = urls.get(4);
    const array$4 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$25, e$4)];
    const array$5 = [$$x63, $$x61, $$x59, $$x57, $$x56.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$4))];
    const $$x55 = $$x65.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$5));
    const this$32 = $m_Lscalatags_JsDom$all$();
    const $$x54 = this$32.tr__Lscalatags_JsDom$TypedTag();
    const this$33 = $m_Lscalatags_JsDom$all$();
    const $$x53 = this$33.td__Lscalatags_JsDom$TypedTag();
    const this$34 = $m_Lscalatags_JsDom$all$();
    const e$5 = urls.get(5);
    const array$6 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$34, e$5)];
    const $$x52 = $$x53.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$6));
    const this$38 = $m_Lscalatags_JsDom$all$();
    const $$x51 = this$38.td__Lscalatags_JsDom$TypedTag();
    const this$39 = $m_Lscalatags_JsDom$all$();
    const e$6 = urls.get(6);
    const array$7 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$39, e$6)];
    const $$x50 = $$x51.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$7));
    const this$43 = $m_Lscalatags_JsDom$all$();
    const $$x49 = this$43.td__Lscalatags_JsDom$TypedTag();
    const this$44 = $m_Lscalatags_JsDom$all$();
    const e$7 = urls.get(7);
    const array$8 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$44, e$7)];
    const $$x48 = $$x49.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$8));
    const this$48 = $m_Lscalatags_JsDom$all$();
    const $$x47 = this$48.td__Lscalatags_JsDom$TypedTag();
    const this$49 = $m_Lscalatags_JsDom$all$();
    const e$8 = urls.get(8);
    const array$9 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$49, e$8)];
    const $$x46 = $$x47.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$9));
    const this$53 = $m_Lscalatags_JsDom$all$();
    const $$x45 = this$53.td__Lscalatags_JsDom$TypedTag();
    const this$54 = $m_Lscalatags_JsDom$all$();
    const e$9 = urls.get(9);
    const array$10 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$54, e$9)];
    const array$11 = [$$x52, $$x50, $$x48, $$x46, $$x45.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$10))];
    const $$x44 = $$x54.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$11));
    const this$61 = $m_Lscalatags_JsDom$all$();
    const $$x43 = this$61.tr__Lscalatags_JsDom$TypedTag();
    const this$62 = $m_Lscalatags_JsDom$all$();
    const $$x42 = this$62.td__Lscalatags_JsDom$TypedTag();
    const this$63 = $m_Lscalatags_JsDom$all$();
    const e$10 = urls.get(10);
    const array$12 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$63, e$10)];
    const $$x41 = $$x42.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$12));
    const this$67 = $m_Lscalatags_JsDom$all$();
    const $$x40 = this$67.td__Lscalatags_JsDom$TypedTag();
    const this$68 = $m_Lscalatags_JsDom$all$();
    const e$11 = urls.get(11);
    const array$13 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$68, e$11)];
    const $$x39 = $$x40.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$13));
    const this$72 = $m_Lscalatags_JsDom$all$();
    const $$x38 = this$72.td__Lscalatags_JsDom$TypedTag();
    const this$73 = $m_Lscalatags_JsDom$all$();
    const e$12 = urls.get(12);
    const array$14 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$73, e$12)];
    const $$x37 = $$x38.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$14));
    const this$77 = $m_Lscalatags_JsDom$all$();
    const $$x36 = this$77.td__Lscalatags_JsDom$TypedTag();
    const this$78 = $m_Lscalatags_JsDom$all$();
    const e$13 = urls.get(13);
    const array$15 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$78, e$13)];
    const $$x35 = $$x36.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$15));
    const this$82 = $m_Lscalatags_JsDom$all$();
    const $$x34 = this$82.td__Lscalatags_JsDom$TypedTag();
    const this$83 = $m_Lscalatags_JsDom$all$();
    const e$14 = urls.get(14);
    const array$16 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$83, e$14)];
    const array$17 = [$$x41, $$x39, $$x37, $$x35, $$x34.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$16))];
    const $$x33 = $$x43.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$17));
    const this$90 = $m_Lscalatags_JsDom$all$();
    const $$x32 = this$90.tr__Lscalatags_JsDom$TypedTag();
    const this$91 = $m_Lscalatags_JsDom$all$();
    const $$x31 = this$91.td__Lscalatags_JsDom$TypedTag();
    const this$92 = $m_Lscalatags_JsDom$all$();
    const e$15 = urls.get(15);
    const array$18 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$92, e$15)];
    const $$x30 = $$x31.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$18));
    const this$96 = $m_Lscalatags_JsDom$all$();
    const $$x29 = this$96.td__Lscalatags_JsDom$TypedTag();
    const this$97 = $m_Lscalatags_JsDom$all$();
    const e$16 = urls.get(16);
    const array$19 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$97, e$16)];
    const $$x28 = $$x29.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$19));
    const this$101 = $m_Lscalatags_JsDom$all$();
    const $$x27 = this$101.td__Lscalatags_JsDom$TypedTag();
    const this$102 = $m_Lscalatags_JsDom$all$();
    const e$17 = urls.get(17);
    const array$20 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$102, e$17)];
    const $$x26 = $$x27.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$20));
    const this$106 = $m_Lscalatags_JsDom$all$();
    const $$x25 = this$106.td__Lscalatags_JsDom$TypedTag();
    const this$107 = $m_Lscalatags_JsDom$all$();
    const e$18 = urls.get(18);
    const array$21 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$107, e$18)];
    const $$x24 = $$x25.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$21));
    const this$111 = $m_Lscalatags_JsDom$all$();
    const $$x23 = this$111.td__Lscalatags_JsDom$TypedTag();
    const this$112 = $m_Lscalatags_JsDom$all$();
    const e$19 = urls.get(19);
    const array$22 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$112, e$19)];
    const array$23 = [$$x30, $$x28, $$x26, $$x24, $$x23.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$22))];
    const $$x22 = $$x32.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$23));
    const this$119 = $m_Lscalatags_JsDom$all$();
    const $$x21 = this$119.tr__Lscalatags_JsDom$TypedTag();
    const this$120 = $m_Lscalatags_JsDom$all$();
    const $$x20 = this$120.td__Lscalatags_JsDom$TypedTag();
    const this$121 = $m_Lscalatags_JsDom$all$();
    const e$20 = urls.get(20);
    const array$24 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$121, e$20)];
    const $$x19 = $$x20.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$24));
    const this$125 = $m_Lscalatags_JsDom$all$();
    const $$x18 = this$125.td__Lscalatags_JsDom$TypedTag();
    const this$126 = $m_Lscalatags_JsDom$all$();
    const e$21 = urls.get(21);
    const array$25 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$126, e$21)];
    const $$x17 = $$x18.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$25));
    const this$130 = $m_Lscalatags_JsDom$all$();
    const $$x16 = this$130.td__Lscalatags_JsDom$TypedTag();
    const this$131 = $m_Lscalatags_JsDom$all$();
    const e$22 = urls.get(22);
    const array$26 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$131, e$22)];
    const $$x15 = $$x16.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$26));
    const this$135 = $m_Lscalatags_JsDom$all$();
    const $$x14 = this$135.td__Lscalatags_JsDom$TypedTag();
    const this$136 = $m_Lscalatags_JsDom$all$();
    const e$23 = urls.get(23);
    const array$27 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$136, e$23)];
    const $$x13 = $$x14.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$27));
    const this$140 = $m_Lscalatags_JsDom$all$();
    const $$x12 = this$140.td__Lscalatags_JsDom$TypedTag();
    const this$141 = $m_Lscalatags_JsDom$all$();
    const e$24 = urls.get(24);
    const array$28 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$141, e$24)];
    const array$29 = [$$x19, $$x17, $$x15, $$x13, $$x12.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$28))];
    const $$x11 = $$x21.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$29));
    const this$148 = $m_Lscalatags_JsDom$all$();
    const $$x10 = this$148.tr__Lscalatags_JsDom$TypedTag();
    const this$149 = $m_Lscalatags_JsDom$all$();
    const $$x9 = this$149.td__Lscalatags_JsDom$TypedTag();
    const this$150 = $m_Lscalatags_JsDom$all$();
    const e$25 = urls.get(25);
    const array$30 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$150, e$25)];
    const $$x8 = $$x9.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$30));
    const this$154 = $m_Lscalatags_JsDom$all$();
    const $$x7 = this$154.td__Lscalatags_JsDom$TypedTag();
    const this$155 = $m_Lscalatags_JsDom$all$();
    const e$26 = urls.get(26);
    const array$31 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$155, e$26)];
    const $$x6 = $$x7.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$31));
    const this$159 = $m_Lscalatags_JsDom$all$();
    const $$x5 = this$159.td__Lscalatags_JsDom$TypedTag();
    const this$160 = $m_Lscalatags_JsDom$all$();
    const e$27 = urls.get(27);
    const array$32 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$160, e$27)];
    const $$x4 = $$x5.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$32));
    const this$164 = $m_Lscalatags_JsDom$all$();
    const $$x3 = this$164.td__Lscalatags_JsDom$TypedTag();
    const this$165 = $m_Lscalatags_JsDom$all$();
    const e$28 = urls.get(28);
    const array$33 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$165, e$28)];
    const $$x2 = $$x3.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$33));
    const this$169 = $m_Lscalatags_JsDom$all$();
    const $$x1 = this$169.td__Lscalatags_JsDom$TypedTag();
    const this$170 = $m_Lscalatags_JsDom$all$();
    const e$29 = urls.get(29);
    const array$34 = [new $c_Lscalatags_LowPriorityImplicits$bindNode(this$170, e$29)];
    const array$35 = [$$x8, $$x6, $$x4, $$x2, $$x1.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$34))];
    const array$36 = [$$x55, $$x44, $$x33, $$x22, $$x11, $$x10.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$35))];
    const array$37 = [$$x66.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$36))];
    return $$x67.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$37)).render__Lorg_scalajs_dom_raw_Element()
  };
  renderUser__LUser__Lorg_scalajs_dom_raw_HTMLDivElement__V(u, target) {
    const this$1 = $m_Lscalatags_JsDom$all$();
    const $$x1 = this$1.input__Lscalatags_JsDom$TypedTag();
    const array = [$m_Lscalatags_JsDom$all$().type__Lscalatags_generic_Attr().$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("button", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr), $m_Lscalatags_JsDom$all$().value__Lscalatags_generic_Attr().$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("Edit Pokemon", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr)];
    const editButton = $$x1.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array)).render__Lorg_scalajs_dom_raw_Element();
    editButton.onclick = ((arg1$2) => {
      const this$7 = $m_s_Console$();
      const this$8 = this$7.out__Ljava_io_PrintStream();
      this$8.java$lang$JSConsoleBasedPrintStream$$printString__T__V("Editing\n")
    });
    target.appendChild(editButton);
    const xs = u.LUser__f_pokes;
    const evidence$1 = $m_s_reflect_ClassTag$().apply__jl_Class__s_reflect_ClassTag($objectGetClass(xs).getComponentType__jl_Class());
    let capacity = 0;
    let size = 0;
    let jsElems = null;
    const elementClass = evidence$1.runtimeClass__jl_Class();
    capacity = 0;
    size = 0;
    const isCharArrayBuilder = (elementClass === $d_C.getClassOf());
    jsElems = [];
    let i = 0;
    while ((i < xs.u.length)) {
      const x = xs.get(i);
      const x$1 = $as_LPokemon(x);
      if (x$1.LPokemon__f_isInList) {
        const unboxedElem = (isCharArrayBuilder ? $uC(x) : ((x === null) ? elementClass.jl_Class__f_data.zero : x));
        jsElems.push(unboxedElem)
      };
      i = ((1 + i) | 0)
    };
    const elemRuntimeClass = ((elementClass === $d_V.getClassOf()) ? $d_jl_Void.getClassOf() : (((elementClass === $d_sr_Null$.getClassOf()) || (elementClass === $d_sr_Nothing$.getClassOf())) ? $d_O.getClassOf() : elementClass));
    let pokemon = $asArrayOf_LPokemon($makeNativeArrayWrapper(elemRuntimeClass.jl_Class__f_data.getArrayOf(), jsElems), 1);
    let i$1 = 1;
    while (true) {
      const xs$1 = pokemon;
      if ((!(xs$1.u.length === 0))) {
        const this$16 = $m_Lscalatags_JsDom$all$();
        const $$x2 = this$16.p__Lscalatags_JsDom$TypedTag();
        $m_Lscalatags_JsDom$all$();
        const v = ("Box " + i$1);
        const array$1 = [new $c_Lscalatags_JsDom$StringFrag(v)];
        target.appendChild($$x2.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$1)).render__Lorg_scalajs_dom_raw_Element());
        const this$23 = $m_Lscalatags_JsDom$all$();
        const xs$2 = pokemon;
        const e = this.makeTable__LUser__ALPokemon__Lorg_scalajs_dom_raw_HTMLTableElement(u, $asArrayOf_LPokemon($m_sc_ArrayOps$().slice$extension__O__I__I__O(xs$2, 0, 30), 1));
        target.appendChild(new $c_Lscalatags_LowPriorityImplicits$bindNode(this$23, e).Lscalatags_LowPriorityImplicits$bindNode__f_e);
        const $$x3 = $m_sc_ArrayOps$();
        const xs$3 = pokemon;
        pokemon = $asArrayOf_LPokemon($$x3.drop$extension__O__I__O(xs$3, 30), 1);
        i$1 = ((1 + i$1) | 0)
      } else {
        break
      }
    }
  };
  main__Lorg_scalajs_dom_raw_HTMLDivElement__V(target) {
    const this$2 = $m_s_Console$();
    const this$3 = this$2.out__Ljava_io_PrintStream();
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
    const this$4 = this$3.out__Ljava_io_PrintStream();
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
  $m_s_reflect_ManifestFactory$IntManifest$();
  const destination = $newArrayObject($d_I.getArrayOf(), [50]);
  const xsLen = destination.u.length;
  const it = new $c_sci_RangeIterator(1, 1, 50, false);
  let i = 0;
  while (((i < xsLen) && it.sci_RangeIterator__f__hasNext)) {
    destination.set(i, it.next__I());
    i = ((1 + i) | 0)
  };
  $thiz.LUser__f_ids = destination;
  const xs = $thiz.LUser__f_ids;
  const f = ((this$7) => ((x$1$2) => {
    const x$1 = $uI(x$1$2);
    return $ct_LPokemon__I__(new $c_LPokemon(), x$1)
  }))($thiz);
  const len = xs.u.length;
  const ys = $newArrayObject($d_LPokemon.getArrayOf(), [len]);
  if ((len > 0)) {
    let i$1 = 0;
    if ($isArrayOf_O(xs, 1)) {
      const x2 = $asArrayOf_O(xs, 1);
      while ((i$1 < len)) {
        const $$x1 = i$1;
        const arg1 = x2.get(i$1);
        ys.set($$x1, f(arg1));
        i$1 = ((1 + i$1) | 0)
      }
    } else if ((xs !== null)) {
      while ((i$1 < len)) {
        const $$x2 = i$1;
        const arg1$1 = xs.get(i$1);
        ys.set($$x2, f(arg1$1));
        i$1 = ((1 + i$1) | 0)
      }
    } else if ($isArrayOf_D(xs, 1)) {
      const x4 = $asArrayOf_D(xs, 1);
      while ((i$1 < len)) {
        const $$x3 = i$1;
        const arg1$2 = x4.get(i$1);
        ys.set($$x3, f(arg1$2));
        i$1 = ((1 + i$1) | 0)
      }
    } else if ($isArrayOf_J(xs, 1)) {
      const x5 = $asArrayOf_J(xs, 1);
      while ((i$1 < len)) {
        const $$x4 = i$1;
        const t = x5.get(i$1);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        ys.set($$x4, f(new $c_RTLong(lo, hi)));
        i$1 = ((1 + i$1) | 0)
      }
    } else if ($isArrayOf_F(xs, 1)) {
      const x6 = $asArrayOf_F(xs, 1);
      while ((i$1 < len)) {
        const $$x5 = i$1;
        const arg1$3 = x6.get(i$1);
        ys.set($$x5, f(arg1$3));
        i$1 = ((1 + i$1) | 0)
      }
    } else if ($isArrayOf_C(xs, 1)) {
      const x7 = $asArrayOf_C(xs, 1);
      while ((i$1 < len)) {
        const $$x6 = i$1;
        const arg1$4 = x7.get(i$1);
        ys.set($$x6, f($bC(arg1$4)));
        i$1 = ((1 + i$1) | 0)
      }
    } else if ($isArrayOf_B(xs, 1)) {
      const x8 = $asArrayOf_B(xs, 1);
      while ((i$1 < len)) {
        const $$x7 = i$1;
        const arg1$5 = x8.get(i$1);
        ys.set($$x7, f(arg1$5));
        i$1 = ((1 + i$1) | 0)
      }
    } else if ($isArrayOf_S(xs, 1)) {
      const x9 = $asArrayOf_S(xs, 1);
      while ((i$1 < len)) {
        const $$x8 = i$1;
        const arg1$6 = x9.get(i$1);
        ys.set($$x8, f(arg1$6));
        i$1 = ((1 + i$1) | 0)
      }
    } else if ($isArrayOf_Z(xs, 1)) {
      const x10 = $asArrayOf_Z(xs, 1);
      while ((i$1 < len)) {
        const $$x9 = i$1;
        const arg1$7 = x10.get(i$1);
        ys.set($$x9, f(arg1$7));
        i$1 = ((1 + i$1) | 0)
      }
    } else {
      throw new $c_s_MatchError(xs)
    }
  };
  $thiz.LUser__f_pokes = ys;
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
    const output = new $c_sr_ObjectRef("");
    const xs = this.LUser__f_pokes;
    const evidence$1 = $m_s_reflect_ClassTag$().apply__jl_Class__s_reflect_ClassTag($objectGetClass(xs).getComponentType__jl_Class());
    let capacity = 0;
    let size = 0;
    let jsElems = null;
    const elementClass = evidence$1.runtimeClass__jl_Class();
    capacity = 0;
    size = 0;
    const isCharArrayBuilder = (elementClass === $d_C.getClassOf());
    jsElems = [];
    let i = 0;
    while ((i < xs.u.length)) {
      const x = xs.get(i);
      const x$2 = $as_LPokemon(x);
      if (x$2.LPokemon__f_isInList) {
        const unboxedElem = (isCharArrayBuilder ? $uC(x) : ((x === null) ? elementClass.jl_Class__f_data.zero : x));
        jsElems.push(unboxedElem)
      };
      i = ((1 + i) | 0)
    };
    const elemRuntimeClass = ((elementClass === $d_V.getClassOf()) ? $d_jl_Void.getClassOf() : (((elementClass === $d_sr_Null$.getClassOf()) || (elementClass === $d_sr_Nothing$.getClassOf())) ? $d_O.getClassOf() : elementClass));
    const xs$1 = $asArrayOf_O($makeNativeArrayWrapper(elemRuntimeClass.jl_Class__f_data.getArrayOf(), jsElems), 1);
    const f = ((this$2$1, output$1) => ((p$2) => {
      const p = $as_LPokemon(p$2);
      const $$x1 = $as_T(output$1.sr_ObjectRef__f_elem);
      const this$8 = p.LPokemon__f_id;
      output$1.sr_ObjectRef__f_elem = ($$x1 + ("" + this$8));
      output$1.sr_ObjectRef__f_elem = ($as_T(output$1.sr_ObjectRef__f_elem) + ": ");
      const $$x2 = $as_T(output$1.sr_ObjectRef__f_elem);
      const this$10 = p.LPokemon__f_isCaught;
      output$1.sr_ObjectRef__f_elem = ($$x2 + ("" + this$10));
      output$1.sr_ObjectRef__f_elem = ($as_T(output$1.sr_ObjectRef__f_elem) + ", ")
    }))(this, output);
    const len = xs$1.u.length;
    let i$1 = 0;
    if ((xs$1 !== null)) {
      while ((i$1 < len)) {
        const arg1 = xs$1.get(i$1);
        f(arg1);
        i$1 = ((1 + i$1) | 0)
      }
    } else if ($isArrayOf_I(xs$1, 1)) {
      const x3 = $asArrayOf_I(xs$1, 1);
      while ((i$1 < len)) {
        const arg1$1 = x3.get(i$1);
        f(arg1$1);
        i$1 = ((1 + i$1) | 0)
      }
    } else if ($isArrayOf_D(xs$1, 1)) {
      const x4 = $asArrayOf_D(xs$1, 1);
      while ((i$1 < len)) {
        const arg1$2 = x4.get(i$1);
        f(arg1$2);
        i$1 = ((1 + i$1) | 0)
      }
    } else if ($isArrayOf_J(xs$1, 1)) {
      const x5 = $asArrayOf_J(xs$1, 1);
      while ((i$1 < len)) {
        const t = x5.get(i$1);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        f(new $c_RTLong(lo, hi));
        i$1 = ((1 + i$1) | 0)
      }
    } else if ($isArrayOf_F(xs$1, 1)) {
      const x6 = $asArrayOf_F(xs$1, 1);
      while ((i$1 < len)) {
        const arg1$3 = x6.get(i$1);
        f(arg1$3);
        i$1 = ((1 + i$1) | 0)
      }
    } else if ($isArrayOf_C(xs$1, 1)) {
      const x7 = $asArrayOf_C(xs$1, 1);
      while ((i$1 < len)) {
        const arg1$4 = x7.get(i$1);
        f($bC(arg1$4));
        i$1 = ((1 + i$1) | 0)
      }
    } else if ($isArrayOf_B(xs$1, 1)) {
      const x8 = $asArrayOf_B(xs$1, 1);
      while ((i$1 < len)) {
        const arg1$5 = x8.get(i$1);
        f(arg1$5);
        i$1 = ((1 + i$1) | 0)
      }
    } else if ($isArrayOf_S(xs$1, 1)) {
      const x9 = $asArrayOf_S(xs$1, 1);
      while ((i$1 < len)) {
        const arg1$6 = x9.get(i$1);
        f(arg1$6);
        i$1 = ((1 + i$1) | 0)
      }
    } else if ($isArrayOf_Z(xs$1, 1)) {
      const x10 = $asArrayOf_Z(xs$1, 1);
      while ((i$1 < len)) {
        const arg1$7 = x10.get(i$1);
        f(arg1$7);
        i$1 = ((1 + i$1) | 0)
      }
    } else {
      throw new $c_s_MatchError(xs$1)
    };
    return $as_T(output.sr_ObjectRef__f_elem)
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
const $p_jl_System$SystemProperties$__loadSystemProperties__O = (function($thiz) {
  const result = {};
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  const value = $as_T($linkingInfo.linkerVersion);
  result["java.vm.version"] = value;
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result
});
class $c_jl_System$SystemProperties$ extends $c_O {
  constructor() {
    super();
    this.jl_System$SystemProperties$__f_dict = null;
    this.jl_System$SystemProperties$__f_properties = null;
    $n_jl_System$SystemProperties$ = this;
    this.jl_System$SystemProperties$__f_dict = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
    this.jl_System$SystemProperties$__f_properties = null
  };
  getProperty__T__T__T(key, default$1) {
    return ((this.jl_System$SystemProperties$__f_dict !== null) ? $as_T($m_jl_Utils$().dictGetOrElse__O__T__O__O(this.jl_System$SystemProperties$__f_dict, key, default$1)) : this.jl_System$SystemProperties$__f_properties.getProperty__T__T__T(key, default$1))
  };
}
const $d_jl_System$SystemProperties$ = new $TypeData().initClass({
  jl_System$SystemProperties$: 0
}, false, "java.lang.System$SystemProperties$", {
  jl_System$SystemProperties$: 1,
  O: 1
});
$c_jl_System$SystemProperties$.prototype.$classData = $d_jl_System$SystemProperties$;
let $n_jl_System$SystemProperties$ = (void 0);
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$()
  };
  return $n_jl_System$SystemProperties$
}
class $c_jl_Utils$ extends $c_O {
  dictGetOrElse__O__T__O__O(dict, key, default$1) {
    return ($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, key)) ? dict[key] : default$1)
  };
}
const $d_jl_Utils$ = new $TypeData().initClass({
  jl_Utils$: 0
}, false, "java.lang.Utils$", {
  jl_Utils$: 1,
  O: 1
});
$c_jl_Utils$.prototype.$classData = $d_jl_Utils$;
let $n_jl_Utils$ = (void 0);
function $m_jl_Utils$() {
  if ((!$n_jl_Utils$)) {
    $n_jl_Utils$ = new $c_jl_Utils$()
  };
  return $n_jl_Utils$
}
class $c_jl_Utils$Cache$ extends $c_O {
  constructor() {
    super();
    this.jl_Utils$Cache$__f_safeHasOwnProperty = null;
    $n_jl_Utils$Cache$ = this;
    this.jl_Utils$Cache$__f_safeHasOwnProperty = Object.prototype.hasOwnProperty
  };
}
const $d_jl_Utils$Cache$ = new $TypeData().initClass({
  jl_Utils$Cache$: 0
}, false, "java.lang.Utils$Cache$", {
  jl_Utils$Cache$: 1,
  O: 1
});
$c_jl_Utils$Cache$.prototype.$classData = $d_jl_Utils$Cache$;
let $n_jl_Utils$Cache$ = (void 0);
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$()
  };
  return $n_jl_Utils$Cache$
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
  getLength__O__I(array) {
    if ($isArrayOf_O(array, 1)) {
      const x2 = $asArrayOf_O(array, 1);
      return x2.u.length
    } else if ($isArrayOf_Z(array, 1)) {
      const x3 = $asArrayOf_Z(array, 1);
      return x3.u.length
    } else if ($isArrayOf_C(array, 1)) {
      const x4 = $asArrayOf_C(array, 1);
      return x4.u.length
    } else if ($isArrayOf_B(array, 1)) {
      const x5 = $asArrayOf_B(array, 1);
      return x5.u.length
    } else if ($isArrayOf_S(array, 1)) {
      const x6 = $asArrayOf_S(array, 1);
      return x6.u.length
    } else if ($isArrayOf_I(array, 1)) {
      const x7 = $asArrayOf_I(array, 1);
      return x7.u.length
    } else if ($isArrayOf_J(array, 1)) {
      const x8 = $asArrayOf_J(array, 1);
      return x8.u.length
    } else if ($isArrayOf_F(array, 1)) {
      const x9 = $asArrayOf_F(array, 1);
      return x9.u.length
    } else if ($isArrayOf_D(array, 1)) {
      const x10 = $asArrayOf_D(array, 1);
      return x10.u.length
    } else {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch")
    }
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
class $c_ju_Arrays$ extends $c_O {
  binarySearch__AI__I__I(a, key) {
    let startIndex = 0;
    let endIndex = a.u.length;
    while (true) {
      if ((startIndex === endIndex)) {
        return (((-1) - startIndex) | 0)
      } else {
        const mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
        const elem = a.get(mid);
        if ((key < elem)) {
          endIndex = mid
        } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, elem)) {
          return mid
        } else {
          startIndex = ((1 + mid) | 0)
        }
      }
    }
  };
  copyOf__AO__I__AO(original, newLength) {
    const tagT = $m_s_reflect_ClassTag$().apply__jl_Class__s_reflect_ClassTag($objectGetClass(original).getComponentType__jl_Class());
    if ((newLength < 0)) {
      throw new $c_jl_NegativeArraySizeException()
    };
    const b = original.u.length;
    const copyLength = ((newLength < b) ? newLength : b);
    const ret = tagT.newArray__I__O(newLength);
    $systemArraycopy(original, 0, ret, 0, copyLength);
    return $asArrayOf_O(ret, 1)
  };
  copyOfRange__AO__I__I__AO(original, from, to) {
    const evidence$6 = $m_s_reflect_ClassTag$().apply__jl_Class__s_reflect_ClassTag($objectGetClass(original).getComponentType__jl_Class());
    if ((from > to)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to))
    };
    const retLength = ((to - from) | 0);
    const b = ((original.u.length - from) | 0);
    const copyLength = ((retLength < b) ? retLength : b);
    const ret = evidence$6.newArray__I__O(retLength);
    $systemArraycopy(original, from, ret, 0, copyLength);
    return $asArrayOf_O(ret, 1)
  };
  copyOfRange__AB__I__I__AB(original, start, end) {
    $m_s_reflect_ManifestFactory$ByteManifest$();
    if ((start > end)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end))
    };
    const retLength = ((end - start) | 0);
    const b = ((original.u.length - start) | 0);
    const copyLength = ((retLength < b) ? retLength : b);
    const ret = $newArrayObject($d_B.getArrayOf(), [retLength]);
    $systemArraycopy(original, start, ret, 0, copyLength);
    return ret
  };
  copyOfRange__AS__I__I__AS(original, start, end) {
    $m_s_reflect_ManifestFactory$ShortManifest$();
    if ((start > end)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end))
    };
    const retLength = ((end - start) | 0);
    const b = ((original.u.length - start) | 0);
    const copyLength = ((retLength < b) ? retLength : b);
    const ret = $newArrayObject($d_S.getArrayOf(), [retLength]);
    $systemArraycopy(original, start, ret, 0, copyLength);
    return ret
  };
  copyOfRange__AI__I__I__AI(original, start, end) {
    $m_s_reflect_ManifestFactory$IntManifest$();
    if ((start > end)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end))
    };
    const retLength = ((end - start) | 0);
    const b = ((original.u.length - start) | 0);
    const copyLength = ((retLength < b) ? retLength : b);
    const ret = $newArrayObject($d_I.getArrayOf(), [retLength]);
    $systemArraycopy(original, start, ret, 0, copyLength);
    return ret
  };
  copyOfRange__AJ__I__I__AJ(original, start, end) {
    $m_s_reflect_ManifestFactory$LongManifest$();
    if ((start > end)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end))
    };
    const retLength = ((end - start) | 0);
    const b = ((original.u.length - start) | 0);
    const copyLength = ((retLength < b) ? retLength : b);
    const ret = $newArrayObject($d_J.getArrayOf(), [retLength]);
    $systemArraycopy(original, start, ret, 0, copyLength);
    return ret
  };
  copyOfRange__AC__I__I__AC(original, start, end) {
    $m_s_reflect_ManifestFactory$CharManifest$();
    if ((start > end)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end))
    };
    const retLength = ((end - start) | 0);
    const b = ((original.u.length - start) | 0);
    const copyLength = ((retLength < b) ? retLength : b);
    const ret = $newArrayObject($d_C.getArrayOf(), [retLength]);
    $systemArraycopy(original, start, ret, 0, copyLength);
    return ret
  };
  copyOfRange__AF__I__I__AF(original, start, end) {
    $m_s_reflect_ManifestFactory$FloatManifest$();
    if ((start > end)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end))
    };
    const retLength = ((end - start) | 0);
    const b = ((original.u.length - start) | 0);
    const copyLength = ((retLength < b) ? retLength : b);
    const ret = $newArrayObject($d_F.getArrayOf(), [retLength]);
    $systemArraycopy(original, start, ret, 0, copyLength);
    return ret
  };
  copyOfRange__AD__I__I__AD(original, start, end) {
    $m_s_reflect_ManifestFactory$DoubleManifest$();
    if ((start > end)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end))
    };
    const retLength = ((end - start) | 0);
    const b = ((original.u.length - start) | 0);
    const copyLength = ((retLength < b) ? retLength : b);
    const ret = $newArrayObject($d_D.getArrayOf(), [retLength]);
    $systemArraycopy(original, start, ret, 0, copyLength);
    return ret
  };
  copyOfRange__AZ__I__I__AZ(original, start, end) {
    $m_s_reflect_ManifestFactory$BooleanManifest$();
    if ((start > end)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end))
    };
    const retLength = ((end - start) | 0);
    const b = ((original.u.length - start) | 0);
    const copyLength = ((retLength < b) ? retLength : b);
    const ret = $newArrayObject($d_Z.getArrayOf(), [retLength]);
    $systemArraycopy(original, start, ret, 0, copyLength);
    return ret
  };
}
const $d_ju_Arrays$ = new $TypeData().initClass({
  ju_Arrays$: 0
}, false, "java.util.Arrays$", {
  ju_Arrays$: 1,
  O: 1
});
$c_ju_Arrays$.prototype.$classData = $d_ju_Arrays$;
let $n_ju_Arrays$ = (void 0);
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$()
  };
  return $n_ju_Arrays$
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
class $c_sc_ArrayOps$ extends $c_O {
  slice$extension__O__I__I__O(this$, from, until) {
    const lo = ((from > 0) ? from : 0);
    const b = $m_sr_ScalaRunTime$().array_length__O__I(this$);
    const hi = ((until < b) ? until : b);
    if ((hi > lo)) {
      if ($isArrayOf_O(this$, 1)) {
        const x2 = $asArrayOf_O(this$, 1);
        return $m_ju_Arrays$().copyOfRange__AO__I__I__AO(x2, lo, hi)
      } else if ($isArrayOf_I(this$, 1)) {
        const x3 = $asArrayOf_I(this$, 1);
        return $m_ju_Arrays$().copyOfRange__AI__I__I__AI(x3, lo, hi)
      } else if ($isArrayOf_D(this$, 1)) {
        const x4 = $asArrayOf_D(this$, 1);
        return $m_ju_Arrays$().copyOfRange__AD__I__I__AD(x4, lo, hi)
      } else if ($isArrayOf_J(this$, 1)) {
        const x5 = $asArrayOf_J(this$, 1);
        return $m_ju_Arrays$().copyOfRange__AJ__I__I__AJ(x5, lo, hi)
      } else if ($isArrayOf_F(this$, 1)) {
        const x6 = $asArrayOf_F(this$, 1);
        return $m_ju_Arrays$().copyOfRange__AF__I__I__AF(x6, lo, hi)
      } else if ($isArrayOf_C(this$, 1)) {
        const x7 = $asArrayOf_C(this$, 1);
        return $m_ju_Arrays$().copyOfRange__AC__I__I__AC(x7, lo, hi)
      } else if ($isArrayOf_B(this$, 1)) {
        const x8 = $asArrayOf_B(this$, 1);
        return $m_ju_Arrays$().copyOfRange__AB__I__I__AB(x8, lo, hi)
      } else if ($isArrayOf_S(this$, 1)) {
        const x9 = $asArrayOf_S(this$, 1);
        return $m_ju_Arrays$().copyOfRange__AS__I__I__AS(x9, lo, hi)
      } else if ($isArrayOf_Z(this$, 1)) {
        const x10 = $asArrayOf_Z(this$, 1);
        return $m_ju_Arrays$().copyOfRange__AZ__I__I__AZ(x10, lo, hi)
      } else {
        throw new $c_s_MatchError(this$)
      }
    } else {
      return $m_s_reflect_ClassTag$().apply__jl_Class__s_reflect_ClassTag($objectGetClass(this$).getComponentType__jl_Class()).newArray__I__O(0)
    }
  };
  drop$extension__O__I__O(this$, n) {
    return $m_sc_ArrayOps$().slice$extension__O__I__I__O(this$, n, $m_sr_ScalaRunTime$().array_length__O__I(this$))
  };
}
const $d_sc_ArrayOps$ = new $TypeData().initClass({
  sc_ArrayOps$: 0
}, false, "scala.collection.ArrayOps$", {
  sc_ArrayOps$: 1,
  O: 1
});
$c_sc_ArrayOps$.prototype.$classData = $d_sc_ArrayOps$;
let $n_sc_ArrayOps$ = (void 0);
function $m_sc_ArrayOps$() {
  if ((!$n_sc_ArrayOps$)) {
    $n_sc_ArrayOps$ = new $c_sc_ArrayOps$()
  };
  return $n_sc_ArrayOps$
}
function $is_sc_IterableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)))
}
function $as_sc_IterableOnce(obj) {
  return (($is_sc_IterableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnce"))
}
function $isArrayOf_sc_IterableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnce)))
}
function $asArrayOf_sc_IterableOnce(obj, depth) {
  return (($isArrayOf_sc_IterableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnce;", depth))
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  return (!$as_sc_IterableOnce($thiz).iterator__sc_Iterator().hasNext__Z())
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I($thiz, xs, start) {
  const xsLen = $m_sr_ScalaRunTime$().array_length__O__I(xs);
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  let i = start;
  while (((i < xsLen) && it.hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, it.next__O());
    i = ((1 + i) | 0)
  };
  return ((i - start) | 0)
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, xs, start, len) {
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  let i = start;
  const y = (($m_sr_ScalaRunTime$().array_length__O__I(xs) - start) | 0);
  const end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && it.hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, it.next__O());
    i = ((1 + i) | 0)
  };
  return ((i - start) | 0)
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  if ($thiz.isEmpty__Z()) {
    return (("" + start) + end)
  } else {
    const this$1 = $thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end);
    return this$1.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  }
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  const jsb = b.scm_StringBuilder__f_underlying;
  if (($uI(start.length) !== 0)) {
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start)
  };
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  if (it.hasNext__Z()) {
    const obj = it.next__O();
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    while (it.hasNext__Z()) {
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      const obj$1 = it.next__O();
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1)
    }
  };
  if (($uI(end.length) !== 0)) {
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end)
  };
  return b
}
const $p_sci_IndexedSeqDefaults$__liftedTree1$1__I = (function($thiz) {
  try {
    const x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64");
    const this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if ((e instanceof $c_jl_SecurityException)) {
      return 64
    } else {
      throw e
    }
  }
});
class $c_sci_IndexedSeqDefaults$ extends $c_O {
  constructor() {
    super();
    this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = 0;
    $n_sci_IndexedSeqDefaults$ = this;
    this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = $p_sci_IndexedSeqDefaults$__liftedTree1$1__I(this)
  };
}
const $d_sci_IndexedSeqDefaults$ = new $TypeData().initClass({
  sci_IndexedSeqDefaults$: 0
}, false, "scala.collection.immutable.IndexedSeqDefaults$", {
  sci_IndexedSeqDefaults$: 1,
  O: 1
});
$c_sci_IndexedSeqDefaults$.prototype.$classData = $d_sci_IndexedSeqDefaults$;
let $n_sci_IndexedSeqDefaults$ = (void 0);
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$()
  };
  return $n_sci_IndexedSeqDefaults$
}
const $p_sci_VectorSliceBuilder__addSlice__I__AO__I__I__V = (function($thiz, n, a, lo, hi) {
  while (true) {
    if ((n === 1)) {
      const a$1 = a;
      const start = lo;
      const end = hi;
      $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, 1, (((start === 0) && (end === a$1.u.length)) ? a$1 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$1, start, end)))
    } else {
      const bitsN = $imul(5, (((-1) + n) | 0));
      const widthN = (1 << bitsN);
      const loN = ((lo >>> bitsN) | 0);
      const hiN = ((hi >>> bitsN) | 0);
      const loRest = (lo & (((-1) + widthN) | 0));
      const hiRest = (hi & (((-1) + widthN) | 0));
      if ((loRest === 0)) {
        if ((hiRest === 0)) {
          const $$x1 = n;
          const a$2 = a;
          $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, $$x1, (((loN === 0) && (hiN === a$2.u.length)) ? a$2 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$2, loN, hiN)))
        } else {
          if ((hiN > loN)) {
            const $$x2 = n;
            const a$3 = a;
            $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, $$x2, (((loN === 0) && (hiN === a$3.u.length)) ? a$3 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$3, loN, hiN)))
          };
          const temp$n = (((-1) + n) | 0);
          const temp$a = $asArrayOf_O(a.get(hiN), 1);
          n = temp$n;
          a = temp$a;
          lo = 0;
          hi = hiRest;
          continue
        }
      } else if ((hiN === loN)) {
        const temp$n$2 = (((-1) + n) | 0);
        const temp$a$2 = $asArrayOf_O(a.get(loN), 1);
        n = temp$n$2;
        a = temp$a$2;
        lo = loRest;
        hi = hiRest;
        continue
      } else {
        $p_sci_VectorSliceBuilder__addSlice__I__AO__I__I__V($thiz, (((-1) + n) | 0), $asArrayOf_O(a.get(loN), 1), loRest, widthN);
        if ((hiRest === 0)) {
          if ((hiN > ((1 + loN) | 0))) {
            const $$x3 = n;
            const a$4 = a;
            const start$1 = ((1 + loN) | 0);
            $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, $$x3, (((start$1 === 0) && (hiN === a$4.u.length)) ? a$4 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, start$1, hiN)))
          }
        } else {
          if ((hiN > ((1 + loN) | 0))) {
            const $$x4 = n;
            const a$5 = a;
            const start$2 = ((1 + loN) | 0);
            $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, $$x4, (((start$2 === 0) && (hiN === a$5.u.length)) ? a$5 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$5, start$2, hiN)))
          };
          const temp$n$3 = (((-1) + n) | 0);
          const temp$a$3 = $asArrayOf_O(a.get(hiN), 1);
          n = temp$n$3;
          a = temp$a$3;
          lo = 0;
          hi = hiRest;
          continue
        }
      }
    };
    return (void 0)
  }
});
const $p_sci_VectorSliceBuilder__add__I__AO__V = (function($thiz, n, a) {
  let idx;
  if ((n <= $thiz.sci_VectorSliceBuilder__f_maxDim)) {
    idx = ((11 - n) | 0)
  } else {
    $thiz.sci_VectorSliceBuilder__f_maxDim = n;
    idx = (((-1) + n) | 0)
  };
  $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.set(idx, a)
});
const $p_sci_VectorSliceBuilder__balancePrefix__I__V = (function($thiz, n) {
  if (($thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get((((-1) + n) | 0)) === null)) {
    if ((n === $thiz.sci_VectorSliceBuilder__f_maxDim)) {
      $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.set((((-1) + n) | 0), $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(((11 - n) | 0)));
      $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.set(((11 - n) | 0), null)
    } else {
      $p_sci_VectorSliceBuilder__balancePrefix__I__V($thiz, ((1 + n) | 0));
      const $$x1 = $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
      const n$1 = ((1 + n) | 0);
      const preN1 = $asArrayOf_O($$x1.get((((-1) + n$1) | 0)), 2);
      $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.set((((-1) + n) | 0), preN1.get(0));
      if ((preN1.u.length === 1)) {
        const $$x2 = $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
        const n$2 = ((1 + n) | 0);
        $$x2.set((((-1) + n$2) | 0), null);
        let $$x3;
        if (($thiz.sci_VectorSliceBuilder__f_maxDim === ((1 + n) | 0))) {
          const $$x4 = $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
          const n$3 = ((1 + n) | 0);
          $$x3 = ($$x4.get(((11 - n$3) | 0)) === null)
        } else {
          $$x3 = false
        };
        if ($$x3) {
          $thiz.sci_VectorSliceBuilder__f_maxDim = n
        }
      } else {
        const $$x5 = $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
        const n$4 = ((1 + n) | 0);
        const to = preN1.u.length;
        $$x5.set((((-1) + n$4) | 0), $m_ju_Arrays$().copyOfRange__AO__I__I__AO(preN1, 1, to))
      }
    }
  }
});
const $p_sci_VectorSliceBuilder__balanceSuffix__I__V = (function($thiz, n) {
  if (($thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(((11 - n) | 0)) === null)) {
    if ((n === $thiz.sci_VectorSliceBuilder__f_maxDim)) {
      $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.set(((11 - n) | 0), $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get((((-1) + n) | 0)));
      $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.set((((-1) + n) | 0), null)
    } else {
      $p_sci_VectorSliceBuilder__balanceSuffix__I__V($thiz, ((1 + n) | 0));
      const $$x1 = $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
      const n$1 = ((1 + n) | 0);
      const sufN1 = $asArrayOf_O($$x1.get(((11 - n$1) | 0)), 2);
      $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.set(((11 - n) | 0), sufN1.get((((-1) + sufN1.u.length) | 0)));
      if ((sufN1.u.length === 1)) {
        const $$x2 = $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
        const n$2 = ((1 + n) | 0);
        $$x2.set(((11 - n$2) | 0), null);
        let $$x3;
        if (($thiz.sci_VectorSliceBuilder__f_maxDim === ((1 + n) | 0))) {
          const $$x4 = $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
          const n$3 = ((1 + n) | 0);
          $$x3 = ($$x4.get((((-1) + n$3) | 0)) === null)
        } else {
          $$x3 = false
        };
        if ($$x3) {
          $thiz.sci_VectorSliceBuilder__f_maxDim = n
        }
      } else {
        const $$x5 = $thiz.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
        const n$4 = ((1 + n) | 0);
        const to = (((-1) + sufN1.u.length) | 0);
        $$x5.set(((11 - n$4) | 0), $m_ju_Arrays$().copyOfRange__AO__I__I__AO(sufN1, 0, to))
      }
    }
  }
});
class $c_sci_VectorSliceBuilder extends $c_O {
  constructor(lo, hi) {
    super();
    this.sci_VectorSliceBuilder__f_lo = 0;
    this.sci_VectorSliceBuilder__f_hi = 0;
    this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices = null;
    this.sci_VectorSliceBuilder__f_len = 0;
    this.sci_VectorSliceBuilder__f_pos = 0;
    this.sci_VectorSliceBuilder__f_maxDim = 0;
    this.sci_VectorSliceBuilder__f_lo = lo;
    this.sci_VectorSliceBuilder__f_hi = hi;
    this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices = $newArrayObject($d_O.getArrayOf().getArrayOf(), [11]);
    this.sci_VectorSliceBuilder__f_len = 0;
    this.sci_VectorSliceBuilder__f_pos = 0;
    this.sci_VectorSliceBuilder__f_maxDim = 0
  };
  consider__I__AO__V(n, a) {
    const count = $imul(a.u.length, (1 << $imul(5, (((-1) + n) | 0))));
    const a$1 = ((this.sci_VectorSliceBuilder__f_lo - this.sci_VectorSliceBuilder__f_pos) | 0);
    const lo0 = ((a$1 > 0) ? a$1 : 0);
    const a$2 = ((this.sci_VectorSliceBuilder__f_hi - this.sci_VectorSliceBuilder__f_pos) | 0);
    const hi0 = ((a$2 < count) ? a$2 : count);
    if ((hi0 > lo0)) {
      $p_sci_VectorSliceBuilder__addSlice__I__AO__I__I__V(this, n, a, lo0, hi0);
      this.sci_VectorSliceBuilder__f_len = ((this.sci_VectorSliceBuilder__f_len + ((hi0 - lo0) | 0)) | 0)
    };
    this.sci_VectorSliceBuilder__f_pos = ((this.sci_VectorSliceBuilder__f_pos + count) | 0)
  };
  result__sci_Vector() {
    if ((this.sci_VectorSliceBuilder__f_len <= 32)) {
      if ((this.sci_VectorSliceBuilder__f_len === 0)) {
        return $m_sci_Vector0$()
      } else {
        const prefix1 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(0);
        const suffix1 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(10);
        let a;
        if ((prefix1 !== null)) {
          if ((suffix1 !== null)) {
            const newLength = ((prefix1.u.length + suffix1.u.length) | 0);
            const dest = $m_ju_Arrays$().copyOf__AO__I__AO(prefix1, newLength);
            const destPos = prefix1.u.length;
            const length = suffix1.u.length;
            $systemArraycopy(suffix1, 0, dest, destPos, length);
            a = dest
          } else {
            a = prefix1
          }
        } else if ((suffix1 !== null)) {
          a = suffix1
        } else {
          const prefix2 = $asArrayOf_O(this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(1), 2);
          if ((prefix2 !== null)) {
            a = prefix2.get(0)
          } else {
            const suffix2 = $asArrayOf_O(this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(9), 2);
            a = suffix2.get(0)
          }
        };
        return new $c_sci_Vector1(a)
      }
    } else {
      $p_sci_VectorSliceBuilder__balancePrefix__I__V(this, 1);
      $p_sci_VectorSliceBuilder__balanceSuffix__I__V(this, 1);
      let resultDim = this.sci_VectorSliceBuilder__f_maxDim;
      if ((resultDim < 6)) {
        const $$x1 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
        const n = this.sci_VectorSliceBuilder__f_maxDim;
        const pre = $$x1.get((((-1) + n) | 0));
        const $$x2 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
        const n$1 = this.sci_VectorSliceBuilder__f_maxDim;
        const suf = $$x2.get(((11 - n$1) | 0));
        if (((pre !== null) && (suf !== null))) {
          if ((((pre.u.length + suf.u.length) | 0) <= 30)) {
            const $$x3 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
            const n$2 = this.sci_VectorSliceBuilder__f_maxDim;
            const newLength$1 = ((pre.u.length + suf.u.length) | 0);
            const dest$1 = $m_ju_Arrays$().copyOf__AO__I__AO(pre, newLength$1);
            const destPos$1 = pre.u.length;
            const length$1 = suf.u.length;
            $systemArraycopy(suf, 0, dest$1, destPos$1, length$1);
            $$x3.set((((-1) + n$2) | 0), dest$1);
            const $$x4 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices;
            const n$3 = this.sci_VectorSliceBuilder__f_maxDim;
            $$x4.set(((11 - n$3) | 0), null)
          } else {
            resultDim = ((1 + resultDim) | 0)
          }
        } else {
          const one = ((pre !== null) ? pre : suf);
          if ((one.u.length > 30)) {
            resultDim = ((1 + resultDim) | 0)
          }
        }
      };
      const prefix1$2 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(0);
      const suffix1$2 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(10);
      const len1 = prefix1$2.u.length;
      const x1 = resultDim;
      let res;
      switch (x1) {
        case 2: {
          const a$1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
          const p = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(1);
          let $$x5;
          if ((p !== null)) {
            $$x5 = p
          } else {
            const s = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(9);
            $$x5 = ((s !== null) ? s : a$1)
          };
          const data2 = $asArrayOf_O($$x5, 2);
          res = new $c_sci_Vector2(prefix1$2, len1, data2, suffix1$2, this.sci_VectorSliceBuilder__f_len);
          break
        }
        case 3: {
          const a$2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
          const p$1 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(1);
          const prefix2$2 = $asArrayOf_O(((p$1 !== null) ? p$1 : a$2), 2);
          const a$3 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
          const p$2 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(2);
          let $$x6;
          if ((p$2 !== null)) {
            $$x6 = p$2
          } else {
            const s$1 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(8);
            $$x6 = ((s$1 !== null) ? s$1 : a$3)
          };
          const data3 = $asArrayOf_O($$x6, 3);
          const a$4 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
          const s$2 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(9);
          const suffix2$2 = $asArrayOf_O(((s$2 !== null) ? s$2 : a$4), 2);
          const len12 = ((len1 + (prefix2$2.u.length << 5)) | 0);
          res = new $c_sci_Vector3(prefix1$2, len1, prefix2$2, len12, data3, suffix2$2, suffix1$2, this.sci_VectorSliceBuilder__f_len);
          break
        }
        case 4: {
          const a$5 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
          const p$3 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(1);
          const prefix2$3 = $asArrayOf_O(((p$3 !== null) ? p$3 : a$5), 2);
          const a$6 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
          const p$4 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(2);
          const prefix3 = $asArrayOf_O(((p$4 !== null) ? p$4 : a$6), 3);
          const a$7 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
          const p$5 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(3);
          let $$x7;
          if ((p$5 !== null)) {
            $$x7 = p$5
          } else {
            const s$3 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(7);
            $$x7 = ((s$3 !== null) ? s$3 : a$7)
          };
          const data4 = $asArrayOf_O($$x7, 4);
          const a$8 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
          const s$4 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(8);
          const suffix3 = $asArrayOf_O(((s$4 !== null) ? s$4 : a$8), 3);
          const a$9 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
          const s$5 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(9);
          const suffix2$3 = $asArrayOf_O(((s$5 !== null) ? s$5 : a$9), 2);
          const len12$2 = ((len1 + (prefix2$3.u.length << 5)) | 0);
          const len123 = ((len12$2 + (prefix3.u.length << 10)) | 0);
          res = new $c_sci_Vector4(prefix1$2, len1, prefix2$3, len12$2, prefix3, len123, data4, suffix3, suffix2$3, suffix1$2, this.sci_VectorSliceBuilder__f_len);
          break
        }
        case 5: {
          const a$10 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
          const p$6 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(1);
          const prefix2$4 = $asArrayOf_O(((p$6 !== null) ? p$6 : a$10), 2);
          const a$11 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
          const p$7 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(2);
          const prefix3$2 = $asArrayOf_O(((p$7 !== null) ? p$7 : a$11), 3);
          const a$12 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
          const p$8 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(3);
          const prefix4 = $asArrayOf_O(((p$8 !== null) ? p$8 : a$12), 4);
          const a$13 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty5;
          const p$9 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(4);
          let $$x8;
          if ((p$9 !== null)) {
            $$x8 = p$9
          } else {
            const s$6 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(6);
            $$x8 = ((s$6 !== null) ? s$6 : a$13)
          };
          const data5 = $asArrayOf_O($$x8, 5);
          const a$14 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
          const s$7 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(7);
          const suffix4 = $asArrayOf_O(((s$7 !== null) ? s$7 : a$14), 4);
          const a$15 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
          const s$8 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(8);
          const suffix3$2 = $asArrayOf_O(((s$8 !== null) ? s$8 : a$15), 3);
          const a$16 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
          const s$9 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(9);
          const suffix2$4 = $asArrayOf_O(((s$9 !== null) ? s$9 : a$16), 2);
          const len12$3 = ((len1 + (prefix2$4.u.length << 5)) | 0);
          const len123$2 = ((len12$3 + (prefix3$2.u.length << 10)) | 0);
          const len1234 = ((len123$2 + (prefix4.u.length << 15)) | 0);
          res = new $c_sci_Vector5(prefix1$2, len1, prefix2$4, len12$3, prefix3$2, len123$2, prefix4, len1234, data5, suffix4, suffix3$2, suffix2$4, suffix1$2, this.sci_VectorSliceBuilder__f_len);
          break
        }
        case 6: {
          const a$17 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
          const p$10 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(1);
          const prefix2$5 = $asArrayOf_O(((p$10 !== null) ? p$10 : a$17), 2);
          const a$18 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
          const p$11 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(2);
          const prefix3$3 = $asArrayOf_O(((p$11 !== null) ? p$11 : a$18), 3);
          const a$19 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
          const p$12 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(3);
          const prefix4$2 = $asArrayOf_O(((p$12 !== null) ? p$12 : a$19), 4);
          const a$20 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty5;
          const p$13 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(4);
          const prefix5 = $asArrayOf_O(((p$13 !== null) ? p$13 : a$20), 5);
          const a$21 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty6;
          const p$14 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(5);
          let $$x9;
          if ((p$14 !== null)) {
            $$x9 = p$14
          } else {
            const s$10 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(5);
            $$x9 = ((s$10 !== null) ? s$10 : a$21)
          };
          const data6 = $asArrayOf_O($$x9, 6);
          const a$22 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty5;
          const s$11 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(6);
          const suffix5 = $asArrayOf_O(((s$11 !== null) ? s$11 : a$22), 5);
          const a$23 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
          const s$12 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(7);
          const suffix4$2 = $asArrayOf_O(((s$12 !== null) ? s$12 : a$23), 4);
          const a$24 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
          const s$13 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(8);
          const suffix3$3 = $asArrayOf_O(((s$13 !== null) ? s$13 : a$24), 3);
          const a$25 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
          const s$14 = this.sci_VectorSliceBuilder__f_scala$collection$immutable$VectorSliceBuilder$$slices.get(9);
          const suffix2$5 = $asArrayOf_O(((s$14 !== null) ? s$14 : a$25), 2);
          const len12$4 = ((len1 + (prefix2$5.u.length << 5)) | 0);
          const len123$3 = ((len12$4 + (prefix3$3.u.length << 10)) | 0);
          const len1234$2 = ((len123$3 + (prefix4$2.u.length << 15)) | 0);
          const len12345 = ((len1234$2 + (prefix5.u.length << 20)) | 0);
          res = new $c_sci_Vector6(prefix1$2, len1, prefix2$5, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, len12345, data6, suffix5, suffix4$2, suffix3$3, suffix2$5, suffix1$2, this.sci_VectorSliceBuilder__f_len);
          break
        }
        default: {
          throw new $c_s_MatchError(x1)
        }
      };
      return res
    }
  };
  toString__T() {
    return (((((((((("VectorSliceBuilder(lo=" + this.sci_VectorSliceBuilder__f_lo) + ", hi=") + this.sci_VectorSliceBuilder__f_hi) + ", len=") + this.sci_VectorSliceBuilder__f_len) + ", pos=") + this.sci_VectorSliceBuilder__f_pos) + ", maxDim=") + this.sci_VectorSliceBuilder__f_maxDim) + ")")
  };
}
const $d_sci_VectorSliceBuilder = new $TypeData().initClass({
  sci_VectorSliceBuilder: 0
}, false, "scala.collection.immutable.VectorSliceBuilder", {
  sci_VectorSliceBuilder: 1,
  O: 1
});
$c_sci_VectorSliceBuilder.prototype.$classData = $d_sci_VectorSliceBuilder;
class $c_sci_VectorStatics$ extends $c_O {
  constructor() {
    super();
    this.sci_VectorStatics$__f_empty1 = null;
    this.sci_VectorStatics$__f_empty2 = null;
    this.sci_VectorStatics$__f_empty3 = null;
    this.sci_VectorStatics$__f_empty4 = null;
    this.sci_VectorStatics$__f_empty5 = null;
    this.sci_VectorStatics$__f_empty6 = null;
    $n_sci_VectorStatics$ = this;
    this.sci_VectorStatics$__f_empty1 = $newArrayObject($d_O.getArrayOf(), [0]);
    this.sci_VectorStatics$__f_empty2 = $newArrayObject($d_O.getArrayOf().getArrayOf(), [0]);
    this.sci_VectorStatics$__f_empty3 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [0]);
    this.sci_VectorStatics$__f_empty4 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [0]);
    this.sci_VectorStatics$__f_empty5 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [0]);
    this.sci_VectorStatics$__f_empty6 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [0])
  };
  copyPrepend__O__AO__AO(elem, a) {
    const componentType = $objectGetClass(a).getComponentType__jl_Class();
    const length = ((1 + a.u.length) | 0);
    const ac = $asArrayOf_O($m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType, length), 1);
    const length$1 = a.u.length;
    $systemArraycopy(a, 0, ac, 1, length$1);
    ac.set(0, elem);
    return ac
  };
  foreachRec__I__AO__F1__V(level, a, f) {
    let i = 0;
    const len = a.u.length;
    if ((level === 0)) {
      while ((i < len)) {
        f.apply__O__O(a.get(i));
        i = ((1 + i) | 0)
      }
    } else {
      const l = (((-1) + level) | 0);
      while ((i < len)) {
        this.foreachRec__I__AO__F1__V(l, $asArrayOf_O(a.get(i), 1), f);
        i = ((1 + i) | 0)
      }
    }
  };
}
const $d_sci_VectorStatics$ = new $TypeData().initClass({
  sci_VectorStatics$: 0
}, false, "scala.collection.immutable.VectorStatics$", {
  sci_VectorStatics$: 1,
  O: 1
});
$c_sci_VectorStatics$.prototype.$classData = $d_sci_VectorStatics$;
let $n_sci_VectorStatics$ = (void 0);
function $m_sci_VectorStatics$() {
  if ((!$n_sci_VectorStatics$)) {
    $n_sci_VectorStatics$ = new $c_sci_VectorStatics$()
  };
  return $n_sci_VectorStatics$
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
    return $m_jl_reflect_Array$().getLength__O__I(xs)
  };
  _toString__s_Product__T(x) {
    const this$1 = x.productIterator__sc_Iterator();
    const start = (x.productPrefix__T() + "(");
    return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, start, ",", ")")
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
  ioobe__I__O(n) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
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
class $c_sr_Statics$PFMarker$ extends $c_O {
}
const $d_sr_Statics$PFMarker$ = new $TypeData().initClass({
  sr_Statics$PFMarker$: 0
}, false, "scala.runtime.Statics$PFMarker$", {
  sr_Statics$PFMarker$: 1,
  O: 1
});
$c_sr_Statics$PFMarker$.prototype.$classData = $d_sr_Statics$PFMarker$;
let $n_sr_Statics$PFMarker$ = (void 0);
function $m_sr_Statics$PFMarker$() {
  if ((!$n_sr_Statics$PFMarker$)) {
    $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$()
  };
  return $n_sr_Statics$PFMarker$
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
    return this.scala$util$hashing$MurmurHash3$$avalanche__I__I((hash ^ length))
  };
  scala$util$hashing$MurmurHash3$$avalanche__I__I(hash) {
    let h = hash;
    h = (h ^ ((h >>> 16) | 0));
    h = $imul((-2048144789), h);
    h = (h ^ ((h >>> 13) | 0));
    h = $imul((-1028477387), h);
    h = (h ^ ((h >>> 16) | 0));
    return h
  };
  productHash__s_Product__I__Z__I(x, seed, ignorePrefix) {
    const arr = x.productArity__I();
    if ((arr === 0)) {
      return $f_T__hashCode__I(x.productPrefix__T())
    } else {
      let h = seed;
      if ((!ignorePrefix)) {
        h = this.mix__I__I__I(h, $f_T__hashCode__I(x.productPrefix__T()))
      };
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
  unorderedHash__sc_IterableOnce__I__I(xs, seed) {
    let a = 0;
    let b = 0;
    let n = 0;
    let c = 1;
    const iterator = xs.iterator__sc_Iterator();
    while (iterator.hasNext__Z()) {
      const x = iterator.next__O();
      const h = $m_sr_Statics$().anyHash__O__I(x);
      a = ((a + h) | 0);
      b = (b ^ h);
      c = $imul(c, (1 | h));
      n = ((1 + n) | 0)
    };
    let h$2 = seed;
    h$2 = this.mix__I__I__I(h$2, a);
    h$2 = this.mix__I__I__I(h$2, b);
    h$2 = this.mixLast__I__I__I(h$2, c);
    return this.finalizeHash__I__I__I(h$2, n)
  };
  orderedHash__sc_IterableOnce__I__I(xs, seed) {
    const it = xs.iterator__sc_Iterator();
    let h = seed;
    if ((!it.hasNext__Z())) {
      return this.finalizeHash__I__I__I(h, 0)
    };
    const x0 = it.next__O();
    if ((!it.hasNext__Z())) {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1)
    };
    const x1 = it.next__O();
    const initial = $m_sr_Statics$().anyHash__O__I(x0);
    h = this.mix__I__I__I(h, initial);
    const h0 = h;
    let prev = $m_sr_Statics$().anyHash__O__I(x1);
    const rangeDiff = ((prev - initial) | 0);
    let i = 2;
    while (it.hasNext__Z()) {
      h = this.mix__I__I__I(h, prev);
      const x = it.next__O();
      const hash = $m_sr_Statics$().anyHash__O__I(x);
      if ((rangeDiff !== ((hash - prev) | 0))) {
        h = this.mix__I__I__I(h, hash);
        i = ((1 + i) | 0);
        while (it.hasNext__Z()) {
          const $$x1 = h;
          const x$1 = it.next__O();
          h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
          i = ((1 + i) | 0)
        };
        return this.finalizeHash__I__I__I(h, i)
      };
      prev = hash;
      i = ((1 + i) | 0)
    };
    return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
  };
  rangeHash__I__I__I__I__I(start, step, last, seed) {
    return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last))
  };
  indexedSeqHash__sc_IndexedSeq__I__I(a, seed) {
    let h = seed;
    const l = a.length__I();
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        const $$x1 = h;
        const x = a.apply__I__O(0);
        return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x)), 1);
        break
      }
      default: {
        const x$1 = a.apply__I__O(0);
        const initial = $m_sr_Statics$().anyHash__O__I(x$1);
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        const x$2 = a.apply__I__O(1);
        let prev = $m_sr_Statics$().anyHash__O__I(x$2);
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const x$3 = a.apply__I__O(i);
          const hash = $m_sr_Statics$().anyHash__O__I(x$3);
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              const $$x2 = h;
              const x$4 = a.apply__I__O(i);
              h = this.mix__I__I__I($$x2, $m_sr_Statics$().anyHash__O__I(x$4));
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  listHash__sci_List__I__I(xs, seed) {
    let n = 0;
    let h = seed;
    let rangeState = 0;
    let rangeDiff = 0;
    let prev = 0;
    let initial = 0;
    let elems = xs;
    while ((!elems.isEmpty__Z())) {
      const head = elems.head__O();
      const tail = $as_sci_List(elems.tail__O());
      const hash = $m_sr_Statics$().anyHash__O__I(head);
      h = this.mix__I__I__I(h, hash);
      const x1 = rangeState;
      switch (x1) {
        case 0: {
          initial = hash;
          rangeState = 1;
          break
        }
        case 1: {
          rangeDiff = ((hash - prev) | 0);
          rangeState = 2;
          break
        }
        case 2: {
          if ((rangeDiff !== ((hash - prev) | 0))) {
            rangeState = 3
          };
          break
        }
      };
      prev = hash;
      n = ((1 + n) | 0);
      elems = tail
    };
    return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n))
  };
}
class $c_Lscalatags_Escaping$ extends $c_O {
  constructor() {
    super();
    this.Lscalatags_Escaping$__f_tagRegex = null;
    $n_Lscalatags_Escaping$ = this;
    const groupNames = $m_sci_Nil$();
    this.Lscalatags_Escaping$__f_tagRegex = $ct_s_util_matching_Regex__T__sci_Seq__(new $c_s_util_matching_Regex(), "^[a-z][:\\w0-9-]*$", groupNames)
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
    const f = ((this$2) => ((x$3$2) => {
      const x$3 = $uI(x$3$2);
      return new $c_LImmutablePokemon(x$3)
    }))(this);
    const len = xs.u.length;
    const ys = $newArrayObject($d_LImmutablePokemon.getArrayOf(), [len]);
    if ((len > 0)) {
      let i = 0;
      if ($isArrayOf_O(xs, 1)) {
        const x2 = $asArrayOf_O(xs, 1);
        while ((i < len)) {
          const $$x1 = i;
          const arg1 = x2.get(i);
          ys.set($$x1, f(arg1));
          i = ((1 + i) | 0)
        }
      } else if ((xs !== null)) {
        while ((i < len)) {
          const $$x2 = i;
          const arg1$1 = xs.get(i);
          ys.set($$x2, f(arg1$1));
          i = ((1 + i) | 0)
        }
      } else if ($isArrayOf_D(xs, 1)) {
        const x4 = $asArrayOf_D(xs, 1);
        while ((i < len)) {
          const $$x3 = i;
          const arg1$2 = x4.get(i);
          ys.set($$x3, f(arg1$2));
          i = ((1 + i) | 0)
        }
      } else if ($isArrayOf_J(xs, 1)) {
        const x5 = $asArrayOf_J(xs, 1);
        while ((i < len)) {
          const $$x4 = i;
          const t = x5.get(i);
          const lo = t.RTLong__f_lo;
          const hi = t.RTLong__f_hi;
          ys.set($$x4, f(new $c_RTLong(lo, hi)));
          i = ((1 + i) | 0)
        }
      } else if ($isArrayOf_F(xs, 1)) {
        const x6 = $asArrayOf_F(xs, 1);
        while ((i < len)) {
          const $$x5 = i;
          const arg1$3 = x6.get(i);
          ys.set($$x5, f(arg1$3));
          i = ((1 + i) | 0)
        }
      } else if ($isArrayOf_C(xs, 1)) {
        const x7 = $asArrayOf_C(xs, 1);
        while ((i < len)) {
          const $$x6 = i;
          const arg1$4 = x7.get(i);
          ys.set($$x6, f($bC(arg1$4)));
          i = ((1 + i) | 0)
        }
      } else if ($isArrayOf_B(xs, 1)) {
        const x8 = $asArrayOf_B(xs, 1);
        while ((i < len)) {
          const $$x7 = i;
          const arg1$5 = x8.get(i);
          ys.set($$x7, f(arg1$5));
          i = ((1 + i) | 0)
        }
      } else if ($isArrayOf_S(xs, 1)) {
        const x9 = $asArrayOf_S(xs, 1);
        while ((i < len)) {
          const $$x8 = i;
          const arg1$6 = x9.get(i);
          ys.set($$x8, f(arg1$6));
          i = ((1 + i) | 0)
        }
      } else if ($isArrayOf_Z(xs, 1)) {
        const x10 = $asArrayOf_Z(xs, 1);
        while ((i < len)) {
          const $$x9 = i;
          const arg1$7 = x10.get(i);
          ys.set($$x9, f(arg1$7));
          i = ((1 + i) | 0)
        }
      } else {
        throw new $c_s_MatchError(xs)
      }
    };
    this.LImmutableUser__f_masterPokes = ys
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
const $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI = (function($thiz) {
  if (((((16 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints = $makeNativeArrayWrapper($d_I.getArrayOf(), [1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43600, 44016, 65296, 66720, 69734, 69872, 69942, 70096, 71360, 120782, 120792, 120802, 120812, 120822]);
    $thiz.jl_Character$__f_bitmap$0 = (((16 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints
});
const $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI = (function($thiz) {
  return (((((16 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints)
});
class $c_jl_Character$ extends $c_O {
  constructor() {
    super();
    this.jl_Character$__f_java$lang$Character$$charTypesFirst256 = null;
    this.jl_Character$__f_charTypeIndices = null;
    this.jl_Character$__f_charTypes = null;
    this.jl_Character$__f_isMirroredIndices = null;
    this.jl_Character$__f_nonASCIIZeroDigitCodePoints = null;
    this.jl_Character$__f_bitmap$0 = 0
  };
  digitWithValidRadix__I__I__I(codePoint, radix) {
    let value;
    if ((codePoint < 256)) {
      value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))))
    } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
      value = (((-65303) + codePoint) | 0)
    } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
      value = (((-65335) + codePoint) | 0)
    } else {
      const a = $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this);
      const p = $m_ju_Arrays$().binarySearch__AI__I__I(a, codePoint);
      const zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
      if ((zeroCodePointIndex < 0)) {
        value = (-1)
      } else {
        const v = ((codePoint - $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this).get(zeroCodePointIndex)) | 0);
        value = ((v > 9) ? (-1) : v)
      }
    };
    return ((value < radix) ? value : (-1))
  };
}
const $d_jl_Character$ = new $TypeData().initClass({
  jl_Character$: 0
}, false, "java.lang.Character$", {
  jl_Character$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Character$.prototype.$classData = $d_jl_Character$;
let $n_jl_Character$ = (void 0);
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$()
  };
  return $n_jl_Character$
}
const $p_jl_Integer$__fail$1__T__E = (function($thiz, s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""))
});
class $c_jl_Integer$ extends $c_O {
  parseInt__T__I__I(s, radix) {
    const len = ((s === null) ? 0 : $uI(s.length));
    if ((((len === 0) || (radix < 2)) || (radix > 36))) {
      $p_jl_Integer$__fail$1__T__E(this, s)
    };
    const firstChar = (65535 & $uI(s.charCodeAt(0)));
    const negative = (firstChar === 45);
    const maxAbsValue = (negative ? 2.147483648E9 : 2.147483647E9);
    let i = ((negative || (firstChar === 43)) ? 1 : 0);
    if ((i >= $uI(s.length))) {
      $p_jl_Integer$__fail$1__T__E(this, s)
    };
    let result = 0.0;
    while ((i !== len)) {
      const $$x1 = $m_jl_Character$();
      const index = i;
      const digit = $$x1.digitWithValidRadix__I__I__I((65535 & $uI(s.charCodeAt(index))), radix);
      result = ((result * radix) + digit);
      if (((digit === (-1)) || (result > maxAbsValue))) {
        $p_jl_Integer$__fail$1__T__E(this, s)
      };
      i = ((1 + i) | 0)
    };
    if (negative) {
      const n = (-result);
      return $uI((n | 0))
    } else {
      const n$1 = result;
      return $uI((n$1 | 0))
    }
  };
}
const $d_jl_Integer$ = new $TypeData().initClass({
  jl_Integer$: 0
}, false, "java.lang.Integer$", {
  jl_Integer$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Integer$.prototype.$classData = $d_jl_Integer$;
let $n_jl_Integer$ = (void 0);
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$()
  };
  return $n_jl_Integer$
}
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
class $c_jl_String$ extends $c_O {
  constructor() {
    super();
    this.jl_String$__f_CASE_INSENSITIVE_ORDER = null;
    this.jl_String$__f_bitmap$0 = false
  };
  new__AC__I__I__T(value, offset, count) {
    const end = ((offset + count) | 0);
    if ((((offset < 0) || (end < offset)) || (end > value.u.length))) {
      throw $ct_jl_StringIndexOutOfBoundsException__(new $c_jl_StringIndexOutOfBoundsException())
    };
    let result = "";
    let i = offset;
    while ((i !== end)) {
      const $$x1 = result;
      const this$1 = value.get(i);
      result = (("" + $$x1) + $as_T(String.fromCharCode(this$1)));
      i = ((1 + i) | 0)
    };
    return result
  };
}
const $d_jl_String$ = new $TypeData().initClass({
  jl_String$: 0
}, false, "java.lang.String$", {
  jl_String$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_String$.prototype.$classData = $d_jl_String$;
let $n_jl_String$ = (void 0);
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$()
  };
  return $n_jl_String$
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
    this.ju_regex_Matcher__f_inputstr = $dp_toString__T($dp_subSequence__I__I__jl_CharSequence(this.ju_regex_Matcher__f_input0, this.ju_regex_Matcher__f_regionStart0, this.ju_regex_Matcher__f_regionEnd0));
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
          throw new $c_ju_NoSuchElementException("undefined.get")
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
      throw new $c_ju_NoSuchElementException("undefined.get")
    };
    return $as_T(value)
  };
  group__I__T(group) {
    const value = $p_ju_regex_Matcher__ensureLastMatch__sjs_js_RegExp$ExecResult(this)[group];
    $m_s_$less$colon$less$();
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
          throw new $c_ju_NoSuchElementException("undefined.get")
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
            throw new $c_ju_NoSuchElementException("undefined.get")
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
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "bad in-pattern flag")
      }
    }
  };
}
const $d_ju_regex_Pattern$ = new $TypeData().initClass({
  ju_regex_Pattern$: 0
}, false, "java.util.regex.Pattern$", {
  ju_regex_Pattern$: 1,
  O: 1,
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
class $c_s_$less$colon$less$ extends $c_O {
  constructor() {
    super();
    this.s_$less$colon$less$__f_singleton = null;
    $n_s_$less$colon$less$ = this;
    this.s_$less$colon$less$__f_singleton = new $c_s_$less$colon$less$$anon$1()
  };
}
const $d_s_$less$colon$less$ = new $TypeData().initClass({
  s_$less$colon$less$: 0
}, false, "scala.$less$colon$less$", {
  s_$less$colon$less$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$.prototype.$classData = $d_s_$less$colon$less$;
let $n_s_$less$colon$less$ = (void 0);
function $m_s_$less$colon$less$() {
  if ((!$n_s_$less$colon$less$)) {
    $n_s_$less$colon$less$ = new $c_s_$less$colon$less$()
  };
  return $n_s_$less$colon$less$
}
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
class $c_s_Array$ extends $c_O {
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
  O: 1,
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
class $c_s_Console$ extends $c_O {
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
  out__Ljava_io_PrintStream() {
    return $as_Ljava_io_PrintStream(this.s_Console$__f_outVar.s_util_DynamicVariable__f_v)
  };
}
const $d_s_Console$ = new $TypeData().initClass({
  s_Console$: 0
}, false, "scala.Console$", {
  s_Console$: 1,
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
function $is_sci_LazyList$State(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_LazyList$State)))
}
function $as_sci_LazyList$State(obj) {
  return (($is_sci_LazyList$State(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList$State"))
}
function $isArrayOf_sci_LazyList$State(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList$State)))
}
function $asArrayOf_sci_LazyList$State(obj, depth) {
  return (($isArrayOf_sci_LazyList$State(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList$State;", depth))
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
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, xs) {
  const it = xs.iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    $thiz.addOne__O__scm_Growable(it.next__O())
  };
  return $thiz
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
class $c_sr_AbstractFunction0 extends $c_O {
  toString__T() {
    return "<function0>"
  };
}
class $c_sr_AbstractFunction1 extends $c_O {
  toString__T() {
    return "<function1>"
  };
}
class $c_sr_IntRef extends $c_O {
  constructor(elem) {
    super();
    this.sr_IntRef__f_elem = 0;
    this.sr_IntRef__f_elem = elem
  };
  toString__T() {
    const i = this.sr_IntRef__f_elem;
    return ("" + i)
  };
}
const $d_sr_IntRef = new $TypeData().initClass({
  sr_IntRef: 0
}, false, "scala.runtime.IntRef", {
  sr_IntRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_IntRef.prototype.$classData = $d_sr_IntRef;
class $c_sr_ObjectRef extends $c_O {
  constructor(elem) {
    super();
    this.sr_ObjectRef__f_elem = null;
    this.sr_ObjectRef__f_elem = elem
  };
  toString__T() {
    const obj = this.sr_ObjectRef__f_elem;
    return ("" + obj)
  };
}
const $d_sr_ObjectRef = new $TypeData().initClass({
  sr_ObjectRef: 0
}, false, "scala.runtime.ObjectRef", {
  sr_ObjectRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_ObjectRef.prototype.$classData = $d_sr_ObjectRef;
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
    this.s_util_hashing_MurmurHash3$__f_emptyMapHash = this.unorderedHash__sc_IterableOnce__I__I($m_sci_Nil$(), this.s_util_hashing_MurmurHash3$__f_mapSeed)
  };
  seqHash__sc_Seq__I(xs) {
    if ($is_sc_IndexedSeq(xs)) {
      const x2 = $as_sc_IndexedSeq(xs);
      return this.indexedSeqHash__sc_IndexedSeq__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    } else if ((xs instanceof $c_sci_List)) {
      const x3 = $as_sci_List(xs);
      return this.listHash__sci_List__I__I(x3, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    } else {
      return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed)
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
const $ct_s_util_matching_Regex__ju_regex_Pattern__sci_Seq__ = (function($thiz, pattern, groupNames) {
  $thiz.s_util_matching_Regex__f_pattern = pattern;
  $thiz.s_util_matching_Regex__f_scala$util$matching$Regex$$groupNames = groupNames;
  return $thiz
});
const $ct_s_util_matching_Regex__T__sci_Seq__ = (function($thiz, regex, groupNames) {
  const this$1 = $m_ju_regex_Pattern$();
  $ct_s_util_matching_Regex__ju_regex_Pattern__sci_Seq__($thiz, this$1.compile__T__I__ju_regex_Pattern(regex, 0), groupNames);
  return $thiz
});
class $c_s_util_matching_Regex extends $c_O {
  constructor() {
    super();
    this.s_util_matching_Regex__f_pattern = null;
    this.s_util_matching_Regex__f_scala$util$matching$Regex$$groupNames = null
  };
  unapplySeq__jl_CharSequence__s_Option(s) {
    const this$1 = this.s_util_matching_Regex__f_pattern;
    const m = new $c_ju_regex_Matcher(this$1, s, 0, $dp_length__I(s));
    if (m.matches__Z()) {
      $m_sci_List$();
      const n = $m_ju_regex_Matcher$().java$util$regex$Matcher$$getGroupCount__sjs_js_RegExp$ExecResult__ju_regex_Pattern__I(m.ju_regex_Matcher__f_lastMatch, m.ju_regex_Matcher__f_pattern0);
      const b = new $c_scm_ListBuffer();
      let i = 0;
      while ((i < n)) {
        const arg1 = i;
        const elem = m.group__I__T(((1 + arg1) | 0));
        b.addOne__O__scm_ListBuffer(elem);
        i = ((1 + i) | 0)
      };
      return new $c_s_Some(b.toList__sci_List())
    } else {
      return $m_s_None$()
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
  Ljava_io_Serializable: 1
});
$c_s_util_matching_Regex.prototype.$classData = $d_s_util_matching_Regex;
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
const $ct_jl_Exception__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_Exception extends $c_jl_Throwable {
}
const $d_jl_Exception = new $TypeData().initClass({
  jl_Exception: 0
}, false, "java.lang.Exception", {
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Exception.prototype.$classData = $d_jl_Exception;
class $c_s_$less$colon$less extends $c_O {
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
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"))
    }
  }
}
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1
  } else {
    const known = $thiz.knownSize__I();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1))
    } else {
      let i = 0;
      const it = $thiz.iterator__sc_Iterator();
      while (it.hasNext__Z()) {
        if ((i === otherSize)) {
          return 1
        };
        it.next__O();
        i = ((1 + i) | 0)
      };
      return ((i - otherSize) | 0)
    }
  }
}
function $f_sc_IterableOps__drop__I__O($thiz, n) {
  return $thiz.fromSpecific__sc_IterableOnce__O($ct_sc_View$Drop__sc_IterableOps__I__(new $c_sc_View$Drop(), $thiz, n))
}
function $f_sc_IterableOps__tail__O($thiz) {
  if ($thiz.isEmpty__Z()) {
    throw $ct_jl_UnsupportedOperationException__(new $c_jl_UnsupportedOperationException())
  };
  return $thiz.drop__I__O(1)
}
function $is_sc_IterableOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOps)))
}
function $as_sc_IterableOps(obj) {
  return (($is_sc_IterableOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOps"))
}
function $isArrayOf_sc_IterableOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOps)))
}
function $asArrayOf_sc_IterableOps(obj, depth) {
  return (($isArrayOf_sc_IterableOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOps;", depth))
}
function $f_sc_Iterator__drop__I__sc_Iterator($thiz, n) {
  let i = 0;
  while (((i < n) && $thiz.hasNext__Z())) {
    $thiz.next__O();
    i = ((1 + i) | 0)
  };
  return $thiz
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  const those = that.iterator__sc_Iterator();
  while (($thiz.hasNext__Z() && those.hasNext__Z())) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($thiz.next__O(), those.next__O()))) {
      return false
    }
  };
  return ($thiz.hasNext__Z() === those.hasNext__Z())
}
function $is_sc_Iterator(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Iterator)))
}
function $as_sc_Iterator(obj) {
  return (($is_sc_Iterator(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterator"))
}
function $isArrayOf_sc_Iterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterator)))
}
function $asArrayOf_sc_Iterator(obj, depth) {
  return (($isArrayOf_sc_Iterator(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterator;", depth))
}
class $c_sc_Iterator$ extends $c_O {
  constructor() {
    super();
    this.sc_Iterator$__f_scala$collection$Iterator$$_empty = null;
    $n_sc_Iterator$ = this;
    this.sc_Iterator$__f_scala$collection$Iterator$$_empty = new $c_sc_Iterator$$anon$19()
  };
  from__sc_IterableOnce__O(source) {
    return source.iterator__sc_Iterator()
  };
}
const $d_sc_Iterator$ = new $TypeData().initClass({
  sc_Iterator$: 0
}, false, "scala.collection.Iterator$", {
  sc_Iterator$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterator$.prototype.$classData = $d_sc_Iterator$;
let $n_sc_Iterator$ = (void 0);
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$()
  };
  return $n_sc_Iterator$
}
class $c_sc_View$ extends $c_O {
  from__sc_IterableOnce__sc_View(it) {
    if ($is_sc_View(it)) {
      const x2 = $as_sc_View(it);
      return x2
    } else if ($is_sc_Iterable(it)) {
      const x3 = $as_sc_Iterable(it);
      const it$1 = new $c_sjsr_AnonFunction0(((this$1, x3$1) => (() => x3$1.iterator__sc_Iterator()))(this, x3));
      return new $c_sc_View$$anon$1(it$1)
    } else {
      const this$3 = $m_sci_LazyList$().from__sc_IterableOnce__sci_LazyList(it);
      return $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), this$3)
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sc_View(source)
  };
}
const $d_sc_View$ = new $TypeData().initClass({
  sc_View$: 0
}, false, "scala.collection.View$", {
  sc_View$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$.prototype.$classData = $d_sc_View$;
let $n_sc_View$ = (void 0);
function $m_sc_View$() {
  if ((!$n_sc_View$)) {
    $n_sc_View$ = new $c_sc_View$()
  };
  return $n_sc_View$
}
class $c_sci_LazyList$State$Cons extends $c_O {
  constructor(head, tail) {
    super();
    this.sci_LazyList$State$Cons__f_head = null;
    this.sci_LazyList$State$Cons__f_tail = null;
    this.sci_LazyList$State$Cons__f_head = head;
    this.sci_LazyList$State$Cons__f_tail = tail
  };
  head__O() {
    return this.sci_LazyList$State$Cons__f_head
  };
  tail__sci_LazyList() {
    return this.sci_LazyList$State$Cons__f_tail
  };
}
const $d_sci_LazyList$State$Cons = new $TypeData().initClass({
  sci_LazyList$State$Cons: 0
}, false, "scala.collection.immutable.LazyList$State$Cons", {
  sci_LazyList$State$Cons: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Cons.prototype.$classData = $d_sci_LazyList$State$Cons;
class $c_sci_LazyList$State$Empty$ extends $c_O {
  head__E() {
    throw new $c_ju_NoSuchElementException("head of empty lazy list")
  };
  tail__sci_LazyList() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty lazy list")
  };
  head__O() {
    this.head__E()
  };
}
const $d_sci_LazyList$State$Empty$ = new $TypeData().initClass({
  sci_LazyList$State$Empty$: 0
}, false, "scala.collection.immutable.LazyList$State$Empty$", {
  sci_LazyList$State$Empty$: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Empty$.prototype.$classData = $d_sci_LazyList$State$Empty$;
let $n_sci_LazyList$State$Empty$ = (void 0);
function $m_sci_LazyList$State$Empty$() {
  if ((!$n_sci_LazyList$State$Empty$)) {
    $n_sci_LazyList$State$Empty$ = new $c_sci_LazyList$State$Empty$()
  };
  return $n_sci_LazyList$State$Empty$
}
function $is_scm_Builder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Builder)))
}
function $as_scm_Builder(obj) {
  return (($is_scm_Builder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Builder"))
}
function $isArrayOf_scm_Builder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Builder)))
}
function $asArrayOf_scm_Builder(obj, depth) {
  return (($isArrayOf_scm_Builder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Builder;", depth))
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
const $d_sr_Nothing$ = new $TypeData().initClass({
  sr_Nothing$: 0
}, false, "scala.runtime.Nothing$", {
  sr_Nothing$: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
class $c_sjsr_AnonFunction0 extends $c_sr_AbstractFunction0 {
  constructor(f) {
    super();
    this.sjsr_AnonFunction0__f_f = null;
    this.sjsr_AnonFunction0__f_f = f
  };
  apply__O() {
    return (0, this.sjsr_AnonFunction0__f_f)()
  };
}
const $d_sjsr_AnonFunction0 = new $TypeData().initClass({
  sjsr_AnonFunction0: 0
}, false, "scala.scalajs.runtime.AnonFunction0", {
  sjsr_AnonFunction0: 1,
  sr_AbstractFunction0: 1,
  O: 1,
  F0: 1
});
$c_sjsr_AnonFunction0.prototype.$classData = $d_sjsr_AnonFunction0;
class $c_sjsr_AnonFunction1 extends $c_sr_AbstractFunction1 {
  constructor(f) {
    super();
    this.sjsr_AnonFunction1__f_f = null;
    this.sjsr_AnonFunction1__f_f = f
  };
  apply__O__O(arg1) {
    return (0, this.sjsr_AnonFunction1__f_f)(arg1)
  };
}
const $d_sjsr_AnonFunction1 = new $TypeData().initClass({
  sjsr_AnonFunction1: 0
}, false, "scala.scalajs.runtime.AnonFunction1", {
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sjsr_AnonFunction1.prototype.$classData = $d_sjsr_AnonFunction1;
function $f_Lscalatags_JsDom$Aggregate__$init$__V($thiz) {
  $thiz.Lscalatags_JsDom$all$__f_RawFrag = $m_Lscalatags_JsDom$RawFrag$();
  $thiz.Lscalatags_JsDom$all$__f_StringFrag = $m_Lscalatags_JsDom$StringFrag$();
  $thiz.Lscalatags_JsDom$all$__f_HtmlTag = $m_Lscalatags_JsDom$TypedTag$();
  $thiz.Lscalatags_JsDom$all$__f_SvgTag = $m_Lscalatags_JsDom$TypedTag$();
  $thiz.Lscalatags_JsDom$all$__f_Tag = $m_Lscalatags_JsDom$TypedTag$()
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
  const arr = $newArrayObject($d_sci_Seq.getArrayOf(), [$thiz.Lscalatags_JsDom$TypedTag__f_modifiers.length__I()]);
  let i = 0;
  while (true) {
    const x = current;
    const x$2 = $m_sci_Nil$();
    if ((!((x !== null) && x.equals__O__Z(x$2)))) {
      arr.set(i, $as_sci_Seq(current.head__O()));
      current = $as_sci_List(current.tail__O());
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
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("Illegal tag name: " + s) + " is not a valid XML tag name"))
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
const $ct_jl_RuntimeException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_RuntimeException extends $c_jl_Exception {
}
const $d_jl_RuntimeException = new $TypeData().initClass({
  jl_RuntimeException: 0
}, false, "java.lang.RuntimeException", {
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_RuntimeException.prototype.$classData = $d_jl_RuntimeException;
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
function $f_T__getChars__I__I__AC__I__V($thiz, srcBegin, srcEnd, dst, dstBegin) {
  if (((((srcEnd > $uI($thiz.length)) || (srcBegin < 0)) || (srcEnd < 0)) || (srcBegin > srcEnd))) {
    throw $ct_jl_StringIndexOutOfBoundsException__T__(new $c_jl_StringIndexOutOfBoundsException(), "Index out of Bound")
  };
  const offset = ((dstBegin - srcBegin) | 0);
  let i = srcBegin;
  while ((i < srcEnd)) {
    const $$x1 = i;
    const index = i;
    dst.set((($$x1 + offset) | 0), (65535 & $uI($thiz.charCodeAt(index))));
    i = ((1 + i) | 0)
  }
}
function $f_T__length__I($thiz) {
  return $uI($thiz.length)
}
function $f_T__subSequence__I__I__jl_CharSequence($thiz, beginIndex, endIndex) {
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
const $ct_jl_StringBuilder__T__ = (function($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException()
  };
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = str;
  return $thiz
});
class $c_jl_StringBuilder extends $c_O {
  constructor() {
    super();
    this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null
  };
  append__AC__jl_StringBuilder(str) {
    const this$1 = $m_jl_String$();
    const count = str.u.length;
    const str$1 = this$1.new__AC__I__I__T(str, 0, count);
    this.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1);
    return this
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
  subSequence__I__I__jl_CharSequence(start, end) {
    return this.substring__I__I__T(start, end)
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
class $c_s_$eq$colon$eq extends $c_s_$less$colon$less {
}
class $c_sc_AbstractIterator extends $c_O {
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  toString__T() {
    return "<iterator>"
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
}
const $ct_sc_SeqFactory$Delegate__sc_SeqFactory__ = (function($thiz, delegate) {
  $thiz.sc_SeqFactory$Delegate__f_delegate = delegate;
  return $thiz
});
class $c_sc_SeqFactory$Delegate extends $c_O {
  constructor() {
    super();
    this.sc_SeqFactory$Delegate__f_delegate = null
  };
  from__sc_IterableOnce__sc_SeqOps(it) {
    return $as_sc_SeqOps(this.sc_SeqFactory$Delegate__f_delegate.from__sc_IterableOnce__O(it))
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sc_SeqOps(source)
  };
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0)
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  const thisKnownSize = $thiz.knownSize__I();
  let knownSizeDifference;
  if ((thisKnownSize !== (-1))) {
    const thatKnownSize = that.knownSize__I();
    knownSizeDifference = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize))
  } else {
    knownSizeDifference = false
  };
  if ((!knownSizeDifference)) {
    const this$1 = $thiz.iterator__sc_Iterator();
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z(this$1, that)
  } else {
    return false
  }
}
function $is_sc_SeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_SeqOps)))
}
function $as_sc_SeqOps(obj) {
  return (($is_sc_SeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.SeqOps"))
}
function $isArrayOf_sc_SeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_SeqOps)))
}
function $asArrayOf_sc_SeqOps(obj, depth) {
  return (($isArrayOf_sc_SeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.SeqOps;", depth))
}
class $c_sci_LazyList$ extends $c_O {
  constructor() {
    super();
    this.sci_LazyList$__f__empty = null;
    this.sci_LazyList$__f_scala$collection$immutable$LazyList$$anyToMarker = null;
    $n_sci_LazyList$ = this;
    const state = new $c_sjsr_AnonFunction0(((this$1) => (() => $m_sci_LazyList$State$Empty$()))(this));
    this.sci_LazyList$__f__empty = new $c_sci_LazyList(state).force__sci_LazyList();
    this.sci_LazyList$__f_scala$collection$immutable$LazyList$$anyToMarker = new $c_sjsr_AnonFunction1(((this$2) => ((x$10$2) => $m_sr_Statics$PFMarker$()))(this))
  };
  scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList(ll, n) {
    const restRef = new $c_sr_ObjectRef(ll);
    const iRef = new $c_sr_IntRef(n);
    const state = new $c_sjsr_AnonFunction0(((this$3, restRef$1, iRef$1) => (() => {
      let rest = $as_sci_LazyList(restRef$1.sr_ObjectRef__f_elem);
      let i = iRef$1.sr_IntRef__f_elem;
      while (((i > 0) && (!rest.isEmpty__Z()))) {
        const this$4 = rest;
        rest = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
        restRef$1.sr_ObjectRef__f_elem = rest;
        i = (((-1) + i) | 0);
        iRef$1.sr_IntRef__f_elem = i
      };
      return rest.scala$collection$immutable$LazyList$$state__sci_LazyList$State()
    }))(this, restRef, iRef));
    return new $c_sci_LazyList(state)
  };
  from__sc_IterableOnce__sci_LazyList(coll) {
    if ((coll instanceof $c_sci_LazyList)) {
      const x2 = $as_sci_LazyList(coll);
      return x2
    } else if ((coll.knownSize__I() === 0)) {
      return this.sci_LazyList$__f__empty
    } else {
      const state = new $c_sjsr_AnonFunction0(((this$1, coll$1) => (() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(coll$1.iterator__sc_Iterator())))(this, coll));
      return new $c_sci_LazyList(state)
    }
  };
  scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(it) {
    if (it.hasNext__Z()) {
      const hd = it.next__O();
      const state = new $c_sjsr_AnonFunction0(((this$1, it$1) => (() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(it$1)))(this, it));
      const tl = new $c_sci_LazyList(state);
      return new $c_sci_LazyList$State$Cons(hd, tl)
    } else {
      return $m_sci_LazyList$State$Empty$()
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_LazyList(source)
  };
}
const $d_sci_LazyList$ = new $TypeData().initClass({
  sci_LazyList$: 0
}, false, "scala.collection.immutable.LazyList$", {
  sci_LazyList$: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$.prototype.$classData = $d_sci_LazyList$;
let $n_sci_LazyList$ = (void 0);
function $m_sci_LazyList$() {
  if ((!$n_sci_LazyList$)) {
    $n_sci_LazyList$ = new $c_sci_LazyList$()
  };
  return $n_sci_LazyList$
}
class $c_sci_WrappedString$ extends $c_O {
  constructor() {
    super();
    this.sci_WrappedString$__f_empty = null;
    $n_sci_WrappedString$ = this;
    this.sci_WrappedString$__f_empty = new $c_sci_WrappedString("")
  };
  fromSpecific__sc_IterableOnce__sci_WrappedString(it) {
    const b = this.newBuilder__scm_Builder();
    const s = it.knownSize__I();
    if ((s >= 0)) {
      b.sizeHint__I__V(s)
    };
    b.addAll__sc_IterableOnce__scm_Growable(it);
    return $as_sci_WrappedString(b.result__O())
  };
  newBuilder__scm_Builder() {
    const this$2 = $ct_scm_StringBuilder__(new $c_scm_StringBuilder());
    const f = new $c_sjsr_AnonFunction1(((this$1) => ((x$2) => {
      const x = $as_T(x$2);
      return new $c_sci_WrappedString(x)
    }))(this));
    return new $c_scm_Builder$$anon$1(this$2, f)
  };
}
const $d_sci_WrappedString$ = new $TypeData().initClass({
  sci_WrappedString$: 0
}, false, "scala.collection.immutable.WrappedString$", {
  sci_WrappedString$: 1,
  O: 1,
  sc_SpecificIterableFactory: 1,
  sc_Factory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_WrappedString$.prototype.$classData = $d_sci_WrappedString$;
let $n_sci_WrappedString$ = (void 0);
function $m_sci_WrappedString$() {
  if ((!$n_sci_WrappedString$)) {
    $n_sci_WrappedString$ = new $c_sci_WrappedString$()
  };
  return $n_sci_WrappedString$
}
class $c_scm_Builder$$anon$1 extends $c_O {
  constructor(outer, f$1) {
    super();
    this.scm_Builder$$anon$1__f_$outer = null;
    this.scm_Builder$$anon$1__f_f$1 = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.scm_Builder$$anon$1__f_$outer = outer
    };
    this.scm_Builder$$anon$1__f_f$1 = f$1
  };
  addOne__O__scm_Builder$$anon$1(x) {
    const this$1 = this.scm_Builder$$anon$1__f_$outer;
    this$1.addOne__O__scm_Growable(x);
    return this
  };
  addAll__sc_IterableOnce__scm_Builder$$anon$1(xs) {
    const this$1 = this.scm_Builder$$anon$1__f_$outer;
    this$1.addAll__sc_IterableOnce__scm_Growable(xs);
    return this
  };
  sizeHint__I__V(size) {
    this.scm_Builder$$anon$1__f_$outer.sizeHint__I__V(size)
  };
  result__O() {
    return this.scm_Builder$$anon$1__f_f$1.apply__O__O(this.scm_Builder$$anon$1__f_$outer.result__O())
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__scm_Builder$$anon$1(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_Builder$$anon$1(elem)
  };
}
const $d_scm_Builder$$anon$1 = new $TypeData().initClass({
  scm_Builder$$anon$1: 0
}, false, "scala.collection.mutable.Builder$$anon$1", {
  scm_Builder$$anon$1: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_Builder$$anon$1.prototype.$classData = $d_scm_Builder$$anon$1;
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
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("Illegal attribute name: " + name) + " is not a valid XML attribute name"))
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
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    let acc = (-889275714);
    const hash = acc;
    const data = $f_T__hashCode__I("Attr");
    acc = $m_sr_Statics$().mix__I__I__I(hash, data);
    const hash$1 = acc;
    const x = this.Lscalatags_generic_Attr__f_name;
    const data$1 = $m_sr_Statics$().anyHash__O__I(x);
    acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
    const hash$2 = acc;
    const x$1 = this.Lscalatags_generic_Attr__f_namespace;
    const data$2 = $m_sr_Statics$().anyHash__O__I(x$1);
    acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
    const hash$3 = acc;
    const data$3 = (this.Lscalatags_generic_Attr__f_raw ? 1231 : 1237);
    acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
    const hash$4 = acc;
    return $m_sr_Statics$().finalizeHash__I__I__I(hash$4, 3)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lscalatags_generic_Attr)) {
      const Attr$1 = $as_Lscalatags_generic_Attr(x$1);
      if (((this.Lscalatags_generic_Attr__f_raw === Attr$1.Lscalatags_generic_Attr__f_raw) && (this.Lscalatags_generic_Attr__f_name === Attr$1.Lscalatags_generic_Attr__f_name))) {
        const x = this.Lscalatags_generic_Attr__f_namespace;
        const x$2 = Attr$1.Lscalatags_generic_Attr__f_namespace;
        return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
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
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
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
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
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
  Ljava_io_Serializable: 1
});
$c_Lscalatags_generic_Style.prototype.$classData = $d_Lscalatags_generic_Style;
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
const $ct_jl_IllegalArgumentException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
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
class $c_jl_SecurityException {
}
function $as_jl_SecurityException(obj) {
  return (((obj instanceof $c_jl_SecurityException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.SecurityException"))
}
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_SecurityException)))
}
function $asArrayOf_jl_SecurityException(obj, depth) {
  return (($isArrayOf_jl_SecurityException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.SecurityException;", depth))
}
const $ct_jl_UnsupportedOperationException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
const $ct_jl_UnsupportedOperationException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
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
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
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
class $c_s_$less$colon$less$$anon$1 extends $c_s_$eq$colon$eq {
  apply__O__O(x) {
    return x
  };
  toString__T() {
    return "generalized constraint"
  };
}
const $d_s_$less$colon$less$$anon$1 = new $TypeData().initClass({
  s_$less$colon$less$$anon$1: 0
}, false, "scala.$less$colon$less$$anon$1", {
  s_$less$colon$less$$anon$1: 1,
  s_$eq$colon$eq: 1,
  s_$less$colon$less: 1,
  O: 1,
  F1: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$$anon$1.prototype.$classData = $d_s_$less$colon$less$$anon$1;
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
  isEmpty__Z() {
    return (this === $m_s_None$())
  };
  knownSize__I() {
    return (this.isEmpty__Z() ? 0 : 1)
  };
  iterator__sc_Iterator() {
    if (this.isEmpty__Z()) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
    } else {
      $m_sc_Iterator$();
      const a = this.get__O();
      return new $c_sc_Iterator$$anon$20(a)
    }
  };
}
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
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
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
  Ljava_io_Serializable: 1
});
$c_T2.prototype.$classData = $d_T2;
function $f_sc_IndexedSeqOps__drop__I__O($thiz, n) {
  return $thiz.fromSpecific__sc_IterableOnce__O(new $c_sc_IndexedSeqView$Drop($thiz, n))
}
function $f_sc_Iterable__toString__T($thiz) {
  const start = ($thiz.className__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, ", ", ")")
}
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Iterable)))
}
function $as_sc_Iterable(obj) {
  return (($is_sc_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterable"))
}
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterable)))
}
function $asArrayOf_sc_Iterable(obj, depth) {
  return (($isArrayOf_sc_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterable;", depth))
}
class $c_sc_Iterator$$anon$19 extends $c_sc_AbstractIterator {
  hasNext__Z() {
    return false
  };
  next__E() {
    throw new $c_ju_NoSuchElementException("next on empty iterator")
  };
  knownSize__I() {
    return 0
  };
  next__O() {
    this.next__E()
  };
}
const $d_sc_Iterator$$anon$19 = new $TypeData().initClass({
  sc_Iterator$$anon$19: 0
}, false, "scala.collection.Iterator$$anon$19", {
  sc_Iterator$$anon$19: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$19.prototype.$classData = $d_sc_Iterator$$anon$19;
class $c_sc_Iterator$$anon$20 extends $c_sc_AbstractIterator {
  constructor(a$1) {
    super();
    this.sc_Iterator$$anon$20__f_consumed = false;
    this.sc_Iterator$$anon$20__f_a$1 = null;
    this.sc_Iterator$$anon$20__f_a$1 = a$1;
    this.sc_Iterator$$anon$20__f_consumed = false
  };
  hasNext__Z() {
    return (!this.sc_Iterator$$anon$20__f_consumed)
  };
  next__O() {
    if (this.sc_Iterator$$anon$20__f_consumed) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    } else {
      this.sc_Iterator$$anon$20__f_consumed = true;
      return this.sc_Iterator$$anon$20__f_a$1
    }
  };
}
const $d_sc_Iterator$$anon$20 = new $TypeData().initClass({
  sc_Iterator$$anon$20: 0
}, false, "scala.collection.Iterator$$anon$20", {
  sc_Iterator$$anon$20: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$20.prototype.$classData = $d_sc_Iterator$$anon$20;
const $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I = (function($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.isEmpty__Z() ? 0 : 1)
    } else if (xs.isEmpty__Z()) {
      return (-1)
    } else {
      const temp$i = ((1 + i) | 0);
      const temp$xs = $as_sc_LinearSeq(xs.tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
});
const $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z = (function($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      const this$1 = a;
      let $$x1;
      if ((!this$1.isEmpty__Z())) {
        const this$2 = b;
        $$x1 = (!this$2.isEmpty__Z())
      } else {
        $$x1 = false
      };
      if (($$x1 && $m_sr_BoxesRunTime$().equals__O__O__Z(a.head__O(), b.head__O()))) {
        const temp$a = $as_sc_LinearSeq(a.tail__O());
        const temp$b = $as_sc_LinearSeq(b.tail__O());
        a = temp$a;
        b = temp$b
      } else {
        return (a.isEmpty__Z() && b.isEmpty__Z())
      }
    }
  }
});
function $f_sc_LinearSeqOps__length__I($thiz) {
  let these = $as_sc_LinearSeq($thiz);
  let len = 0;
  while (true) {
    const this$1 = these;
    if ((!this$1.isEmpty__Z())) {
      len = ((1 + len) | 0);
      these = $as_sc_LinearSeq(these.tail__O())
    } else {
      break
    }
  };
  return len
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, 0, $as_sc_LinearSeq($thiz), len))
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  const skipped = $as_sc_LinearSeq($thiz.drop__I__O(n));
  if (skipped.isEmpty__Z()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  return skipped.head__O()
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    const x2 = $as_sc_LinearSeq(that);
    return $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $as_sc_LinearSeq($thiz), x2)
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that)
  }
}
class $c_sc_StrictOptimizedLinearSeqOps$$anon$1 extends $c_sc_AbstractIterator {
  constructor(outer) {
    super();
    this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = null;
    this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = outer
  };
  hasNext__Z() {
    return (!this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.isEmpty__Z())
  };
  next__O() {
    const r = this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.head__O();
    this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = $as_sc_Iterable(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.tail__O());
    return r
  };
}
const $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().initClass({
  sc_StrictOptimizedLinearSeqOps$$anon$1: 0
}, false, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", {
  sc_StrictOptimizedLinearSeqOps$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.$classData = $d_sc_StrictOptimizedLinearSeqOps$$anon$1;
class $c_sci_IndexedSeq$ extends $c_sc_SeqFactory$Delegate {
  constructor() {
    super();
    $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$())
  };
  from__sc_IterableOnce__sci_IndexedSeq(it) {
    if ($is_sci_IndexedSeq(it)) {
      const x2 = $as_sci_IndexedSeq(it);
      return x2
    } else {
      return $as_sci_IndexedSeq($c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it))
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_IndexedSeq(source)
  };
  from__sc_IterableOnce__sc_SeqOps(it) {
    return this.from__sc_IterableOnce__sci_IndexedSeq(it)
  };
}
const $d_sci_IndexedSeq$ = new $TypeData().initClass({
  sci_IndexedSeq$: 0
}, false, "scala.collection.immutable.IndexedSeq$", {
  sci_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_IndexedSeq$.prototype.$classData = $d_sci_IndexedSeq$;
let $n_sci_IndexedSeq$ = (void 0);
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$()
  };
  return $n_sci_IndexedSeq$
}
class $c_sci_LazyList$LazyIterator extends $c_sc_AbstractIterator {
  constructor(lazyList) {
    super();
    this.sci_LazyList$LazyIterator__f_lazyList = null;
    this.sci_LazyList$LazyIterator__f_lazyList = lazyList
  };
  hasNext__Z() {
    return (!this.sci_LazyList$LazyIterator__f_lazyList.isEmpty__Z())
  };
  next__O() {
    if (this.sci_LazyList$LazyIterator__f_lazyList.isEmpty__Z()) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    } else {
      const this$1 = this.sci_LazyList$LazyIterator__f_lazyList;
      const res = this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
      const this$2 = this.sci_LazyList$LazyIterator__f_lazyList;
      this.sci_LazyList$LazyIterator__f_lazyList = this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      return res
    }
  };
}
const $d_sci_LazyList$LazyIterator = new $TypeData().initClass({
  sci_LazyList$LazyIterator: 0
}, false, "scala.collection.immutable.LazyList$LazyIterator", {
  sci_LazyList$LazyIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_LazyList$LazyIterator.prototype.$classData = $d_sci_LazyList$LazyIterator;
class $c_sci_List$ extends $c_O {
  constructor() {
    super();
    this.sci_List$__f_scala$collection$immutable$List$$TupleOfNil = null;
    this.sci_List$__f_partialNotApplied = null;
    $n_sci_List$ = this;
    this.sci_List$__f_scala$collection$immutable$List$$TupleOfNil = new $c_T2($m_sci_Nil$(), $m_sci_Nil$());
    this.sci_List$__f_partialNotApplied = new $c_sci_List$$anon$1()
  };
  from__sc_IterableOnce__O(source) {
    return $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(source)
  };
}
const $d_sci_List$ = new $TypeData().initClass({
  sci_List$: 0
}, false, "scala.collection.immutable.List$", {
  sci_List$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
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
const $p_sci_NewVectorIterator__advanceSlice__V = (function($thiz) {
  if (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 <= $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)) {
    $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
  };
  $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
  let slice = $thiz.sci_NewVectorIterator__f_v.vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx);
  while ((slice.u.length === 0)) {
    $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
    slice = $thiz.sci_NewVectorIterator__f_v.vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx)
  };
  $thiz.sci_NewVectorIterator__f_sliceStart = $thiz.sci_NewVectorIterator__f_sliceEnd;
  const count = $thiz.sci_NewVectorIterator__f_sliceCount;
  const idx = $thiz.sci_NewVectorIterator__f_sliceIdx;
  const c = ((count / 2) | 0);
  const a = ((idx - c) | 0);
  $thiz.sci_NewVectorIterator__f_sliceDim = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
  const x1 = $thiz.sci_NewVectorIterator__f_sliceDim;
  switch (x1) {
    case 1: {
      $thiz.sci_NewVectorIterator__f_a1 = slice;
      break
    }
    case 2: {
      $thiz.sci_NewVectorIterator__f_a2 = $asArrayOf_O(slice, 2);
      break
    }
    case 3: {
      $thiz.sci_NewVectorIterator__f_a3 = $asArrayOf_O(slice, 3);
      break
    }
    case 4: {
      $thiz.sci_NewVectorIterator__f_a4 = $asArrayOf_O(slice, 4);
      break
    }
    case 5: {
      $thiz.sci_NewVectorIterator__f_a5 = $asArrayOf_O(slice, 5);
      break
    }
    case 6: {
      $thiz.sci_NewVectorIterator__f_a6 = $asArrayOf_O(slice, 6);
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  };
  $thiz.sci_NewVectorIterator__f_sliceEnd = (($thiz.sci_NewVectorIterator__f_sliceStart + $imul(slice.u.length, (1 << $imul(5, (((-1) + $thiz.sci_NewVectorIterator__f_sliceDim) | 0))))) | 0);
  if (($thiz.sci_NewVectorIterator__f_sliceEnd > $thiz.sci_NewVectorIterator__f_totalLength)) {
    $thiz.sci_NewVectorIterator__f_sliceEnd = $thiz.sci_NewVectorIterator__f_totalLength
  };
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    $thiz.sci_NewVectorIterator__f_oldPos = (((-1) + (1 << $imul(5, $thiz.sci_NewVectorIterator__f_sliceDim))) | 0)
  }
});
const $p_sci_NewVectorIterator__advance__V = (function($thiz) {
  const pos = (((($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + $thiz.sci_NewVectorIterator__f_totalLength) | 0);
  if ((pos === $thiz.sci_NewVectorIterator__f_sliceEnd)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz)
  };
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    const io = ((pos - $thiz.sci_NewVectorIterator__f_sliceStart) | 0);
    const xor = ($thiz.sci_NewVectorIterator__f_oldPos ^ io);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor);
    $thiz.sci_NewVectorIterator__f_oldPos = io
  };
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  const a = $thiz.sci_NewVectorIterator__f_a1.u.length;
  const b = $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1;
  $thiz.sci_NewVectorIterator__f_a1len = ((a < b) ? a : b);
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0
});
const $p_sci_NewVectorIterator__advanceA__I__I__V = (function($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get(0)
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get(0)
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $thiz.sci_NewVectorIterator__f_a5.get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.get(0);
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get(0)
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $thiz.sci_NewVectorIterator__f_a6.get(((io >>> 25) | 0));
    $thiz.sci_NewVectorIterator__f_a4 = $thiz.sci_NewVectorIterator__f_a5.get(0);
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.get(0);
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get(0)
  }
});
const $p_sci_NewVectorIterator__setA__I__I__V = (function($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $thiz.sci_NewVectorIterator__f_a5.get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get((31 & ((io >>> 5) | 0)))
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $thiz.sci_NewVectorIterator__f_a6.get(((io >>> 25) | 0));
    $thiz.sci_NewVectorIterator__f_a4 = $thiz.sci_NewVectorIterator__f_a5.get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get((31 & ((io >>> 5) | 0)))
  }
});
class $c_sci_NewVectorIterator extends $c_O {
  constructor(v, totalLength, sliceCount) {
    super();
    this.sci_NewVectorIterator__f_v = null;
    this.sci_NewVectorIterator__f_totalLength = 0;
    this.sci_NewVectorIterator__f_sliceCount = 0;
    this.sci_NewVectorIterator__f_a1 = null;
    this.sci_NewVectorIterator__f_a2 = null;
    this.sci_NewVectorIterator__f_a3 = null;
    this.sci_NewVectorIterator__f_a4 = null;
    this.sci_NewVectorIterator__f_a5 = null;
    this.sci_NewVectorIterator__f_a6 = null;
    this.sci_NewVectorIterator__f_a1len = 0;
    this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
    this.sci_NewVectorIterator__f_oldPos = 0;
    this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
    this.sci_NewVectorIterator__f_sliceIdx = 0;
    this.sci_NewVectorIterator__f_sliceDim = 0;
    this.sci_NewVectorIterator__f_sliceStart = 0;
    this.sci_NewVectorIterator__f_sliceEnd = 0;
    this.sci_NewVectorIterator__f_v = v;
    this.sci_NewVectorIterator__f_totalLength = totalLength;
    this.sci_NewVectorIterator__f_sliceCount = sliceCount;
    this.sci_NewVectorIterator__f_a1 = v.sci_Vector__f_prefix1;
    this.sci_NewVectorIterator__f_a1len = this.sci_NewVectorIterator__f_a1.u.length;
    this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
    this.sci_NewVectorIterator__f_oldPos = 0;
    this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = this.sci_NewVectorIterator__f_totalLength;
    this.sci_NewVectorIterator__f_sliceIdx = 0;
    this.sci_NewVectorIterator__f_sliceDim = 1;
    this.sci_NewVectorIterator__f_sliceStart = 0;
    this.sci_NewVectorIterator__f_sliceEnd = this.sci_NewVectorIterator__f_a1len
  };
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 <= this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)
  };
  toString__T() {
    return "<iterator>"
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0)
  };
  hasNext__Z() {
    return (this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)
  };
  next__O() {
    if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 === this.sci_NewVectorIterator__f_a1len)) {
      $p_sci_NewVectorIterator__advance__V(this)
    };
    const r = this.sci_NewVectorIterator__f_a1.get(this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1);
    this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = ((1 + this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
    return r
  };
  drop__I__sc_Iterator(n) {
    if ((n > 0)) {
      const oldpos = ((((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + this.sci_NewVectorIterator__f_totalLength) | 0);
      const a = ((oldpos + n) | 0);
      const b = this.sci_NewVectorIterator__f_totalLength;
      const newpos = ((a < b) ? a : b);
      if ((newpos === this.sci_NewVectorIterator__f_totalLength)) {
        this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
        this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
        this.sci_NewVectorIterator__f_a1len = 0
      } else {
        while ((newpos >= this.sci_NewVectorIterator__f_sliceEnd)) {
          $p_sci_NewVectorIterator__advanceSlice__V(this)
        };
        const io = ((newpos - this.sci_NewVectorIterator__f_sliceStart) | 0);
        if ((this.sci_NewVectorIterator__f_sliceDim > 1)) {
          const xor = (this.sci_NewVectorIterator__f_oldPos ^ io);
          $p_sci_NewVectorIterator__setA__I__I__V(this, io, xor);
          this.sci_NewVectorIterator__f_oldPos = io
        };
        this.sci_NewVectorIterator__f_a1len = this.sci_NewVectorIterator__f_a1.u.length;
        this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = (31 & io);
        this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 + ((this.sci_NewVectorIterator__f_totalLength - newpos) | 0)) | 0);
        if ((this.sci_NewVectorIterator__f_a1len > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1)) {
          this.sci_NewVectorIterator__f_a1len = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1
        }
      }
    };
    return this
  };
}
const $d_sci_NewVectorIterator = new $TypeData().initClass({
  sci_NewVectorIterator: 0
}, false, "scala.collection.immutable.NewVectorIterator", {
  sci_NewVectorIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  jl_Cloneable: 1
});
$c_sci_NewVectorIterator.prototype.$classData = $d_sci_NewVectorIterator;
const $p_sci_Vector$__liftedTree1$1__I = (function($thiz) {
  try {
    const x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250");
    const this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if ((e instanceof $c_jl_SecurityException)) {
      return 250
    } else {
      throw e
    }
  }
});
class $c_sci_Vector$ extends $c_O {
  constructor() {
    super();
    this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = 0;
    this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = null;
    $n_sci_Vector$ = this;
    this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = $p_sci_Vector$__liftedTree1$1__I(this);
    this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0)
  };
  from__sc_IterableOnce__sci_Vector(it) {
    if ((it instanceof $c_sci_Vector)) {
      const x2 = $as_sci_Vector(it);
      return x2
    } else {
      const knownSize = it.knownSize__I();
      if ((knownSize === 0)) {
        return $m_sci_Vector0$()
      } else if (((knownSize > 0) && (knownSize <= 32))) {
        let a1$3;
        matchEnd5: {
          if ((it instanceof $c_sci_ArraySeq$ofRef)) {
            const x2$2 = $as_sci_ArraySeq$ofRef(it);
            const x = x2$2.elemTag__s_reflect_ClassTag();
            if (((x !== null) && x.equals__O__Z($d_O.getClassOf()))) {
              a1$3 = x2$2.unsafeArray__AO();
              break matchEnd5
            }
          };
          if ($is_sci_Iterable(it)) {
            const x3 = $as_sci_Iterable(it);
            const a1 = $newArrayObject($d_O.getArrayOf(), [knownSize]);
            x3.copyToArray__O__I__I(a1, 0);
            a1$3 = a1;
            break matchEnd5
          };
          const a1$2 = $newArrayObject($d_O.getArrayOf(), [knownSize]);
          const this$1 = it.iterator__sc_Iterator();
          $f_sc_IterableOnceOps__copyToArray__O__I__I(this$1, a1$2, 0);
          a1$3 = a1$2
        };
        return new $c_sci_Vector1(a1$3)
      } else {
        const this$2 = new $c_sci_VectorBuilder();
        const this$3 = this$2.addAll__sc_IterableOnce__sci_VectorBuilder(it);
        return this$3.result__sci_Vector()
      }
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_Vector(source)
  };
}
const $d_sci_Vector$ = new $TypeData().initClass({
  sci_Vector$: 0
}, false, "scala.collection.immutable.Vector$", {
  sci_Vector$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector$.prototype.$classData = $d_sci_Vector$;
let $n_sci_Vector$ = (void 0);
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$()
  };
  return $n_sci_Vector$
}
const $p_sci_VectorBuilder__addArr1__AO__V = (function($thiz, data) {
  const dl = data.u.length;
  if ((dl > 0)) {
    if (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz)
    };
    const a = ((32 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
    const copy1 = ((a < dl) ? a : dl);
    const copy2 = ((dl - copy1) | 0);
    const dest = $thiz.sci_VectorBuilder__f_a1;
    const destPos = $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1;
    $systemArraycopy(data, 0, dest, destPos, copy1);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      const dest$1 = $thiz.sci_VectorBuilder__f_a1;
      $systemArraycopy(data, copy1, dest$1, 0, copy2);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy2) | 0)
    }
  }
});
const $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder = (function($thiz, xs) {
  const sliceCount = xs.vectorSliceCount__I();
  let sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    const slice = xs.vectorSlice__I__AO(sliceIdx);
    const idx = sliceIdx;
    const c = ((sliceCount / 2) | 0);
    const a = ((idx - c) | 0);
    const x1 = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice)
    } else {
      $m_sci_VectorStatics$().foreachRec__I__AO__F1__V((((-2) + x1) | 0), slice, new $c_sjsr_AnonFunction1(((this$3) => ((data$2) => {
        const data = $asArrayOf_O(data$2, 1);
        $p_sci_VectorBuilder__addArr1__AO__V(this$3, data)
      }))($thiz)))
    };
    sliceIdx = ((1 + sliceIdx) | 0)
  };
  return $thiz
});
const $p_sci_VectorBuilder__advance__V = (function($thiz) {
  const idx = ((32 + $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
  const xor = (idx ^ $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest);
  $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = idx;
  $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor)
});
const $p_sci_VectorBuilder__advance1__I__I__V = (function($thiz, idx, xor) {
  if ((xor < 1024)) {
    if (($thiz.sci_VectorBuilder__f_depth === 1)) {
      $thiz.sci_VectorBuilder__f_a2 = $newArrayObject($d_O.getArrayOf().getArrayOf(), [32]);
      $thiz.sci_VectorBuilder__f_a2.set(0, $thiz.sci_VectorBuilder__f_a1);
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = $newArrayObject($d_O.getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a2.set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1)
  } else if ((xor < 32768)) {
    if (($thiz.sci_VectorBuilder__f_depth === 2)) {
      $thiz.sci_VectorBuilder__f_a3 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]);
      $thiz.sci_VectorBuilder__f_a3.set(0, $thiz.sci_VectorBuilder__f_a2);
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = $newArrayObject($d_O.getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a2 = $newArrayObject($d_O.getArrayOf().getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a2.set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $thiz.sci_VectorBuilder__f_a3.set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2)
  } else if ((xor < 1048576)) {
    if (($thiz.sci_VectorBuilder__f_depth === 3)) {
      $thiz.sci_VectorBuilder__f_a4 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]);
      $thiz.sci_VectorBuilder__f_a4.set(0, $thiz.sci_VectorBuilder__f_a3);
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = $newArrayObject($d_O.getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a2 = $newArrayObject($d_O.getArrayOf().getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a3 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a2.set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $thiz.sci_VectorBuilder__f_a3.set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $thiz.sci_VectorBuilder__f_a4.set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3)
  } else if ((xor < 33554432)) {
    if (($thiz.sci_VectorBuilder__f_depth === 4)) {
      $thiz.sci_VectorBuilder__f_a5 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]);
      $thiz.sci_VectorBuilder__f_a5.set(0, $thiz.sci_VectorBuilder__f_a4);
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = $newArrayObject($d_O.getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a2 = $newArrayObject($d_O.getArrayOf().getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a3 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a4 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a2.set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $thiz.sci_VectorBuilder__f_a3.set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $thiz.sci_VectorBuilder__f_a4.set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
    $thiz.sci_VectorBuilder__f_a5.set((31 & ((idx >>> 20) | 0)), $thiz.sci_VectorBuilder__f_a4)
  } else if ((xor < 1073741824)) {
    if (($thiz.sci_VectorBuilder__f_depth === 5)) {
      $thiz.sci_VectorBuilder__f_a6 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [64]);
      $thiz.sci_VectorBuilder__f_a6.set(0, $thiz.sci_VectorBuilder__f_a5);
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = $newArrayObject($d_O.getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a2 = $newArrayObject($d_O.getArrayOf().getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a3 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a4 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a5 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]);
    $thiz.sci_VectorBuilder__f_a2.set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $thiz.sci_VectorBuilder__f_a3.set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $thiz.sci_VectorBuilder__f_a4.set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
    $thiz.sci_VectorBuilder__f_a5.set((31 & ((idx >>> 20) | 0)), $thiz.sci_VectorBuilder__f_a4);
    $thiz.sci_VectorBuilder__f_a6.set((31 & ((idx >>> 25) | 0)), $thiz.sci_VectorBuilder__f_a5)
  } else {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.sci_VectorBuilder__f_a1) + ", a2=") + $thiz.sci_VectorBuilder__f_a2) + ", a3=") + $thiz.sci_VectorBuilder__f_a3) + ", a4=") + $thiz.sci_VectorBuilder__f_a4) + ", a5=") + $thiz.sci_VectorBuilder__f_a5) + ", a6=") + $thiz.sci_VectorBuilder__f_a6) + ", depth=") + $thiz.sci_VectorBuilder__f_depth))
  }
});
class $c_sci_VectorBuilder extends $c_O {
  constructor() {
    super();
    this.sci_VectorBuilder__f_a6 = null;
    this.sci_VectorBuilder__f_a5 = null;
    this.sci_VectorBuilder__f_a4 = null;
    this.sci_VectorBuilder__f_a3 = null;
    this.sci_VectorBuilder__f_a2 = null;
    this.sci_VectorBuilder__f_a1 = null;
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
    this.sci_VectorBuilder__f_offset = 0;
    this.sci_VectorBuilder__f_depth = 0;
    this.sci_VectorBuilder__f_a1 = $newArrayObject($d_O.getArrayOf(), [32]);
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
    this.sci_VectorBuilder__f_offset = 0;
    this.sci_VectorBuilder__f_depth = 1
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  initFrom__sci_Vector__sci_VectorBuilder(v) {
    const x1 = v.vectorSliceCount__I();
    switch (x1) {
      case 0: {
        break
      }
      case 1: {
        const v1 = $as_sci_Vector1(v);
        this.sci_VectorBuilder__f_depth = 1;
        const i = v1.sci_Vector__f_prefix1.u.length;
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
        const a = v1.sci_Vector__f_prefix1;
        this.sci_VectorBuilder__f_a1 = ((a.u.length === 32) ? a : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 0, 32));
        break
      }
      case 3: {
        const v2 = $as_sci_Vector2(v);
        const d2 = v2.sci_Vector2__f_data2;
        const a$1 = v2.sci_BigVector__f_suffix1;
        this.sci_VectorBuilder__f_a1 = ((a$1.u.length === 32) ? a$1 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$1, 0, 32));
        this.sci_VectorBuilder__f_depth = 2;
        this.sci_VectorBuilder__f_offset = ((32 - v2.sci_Vector2__f_len1) | 0);
        const i$1 = ((v2.sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$1);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$1 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
        this.sci_VectorBuilder__f_a2 = $newArrayObject($d_O.getArrayOf().getArrayOf(), [32]);
        this.sci_VectorBuilder__f_a2.set(0, v2.sci_Vector__f_prefix1);
        const dest = this.sci_VectorBuilder__f_a2;
        const length = d2.u.length;
        $systemArraycopy(d2, 0, dest, 1, length);
        this.sci_VectorBuilder__f_a2.set(((1 + d2.u.length) | 0), this.sci_VectorBuilder__f_a1);
        break
      }
      case 5: {
        const v3 = $as_sci_Vector3(v);
        const d3 = v3.sci_Vector3__f_data3;
        const s2 = v3.sci_Vector3__f_suffix2;
        const a$2 = v3.sci_BigVector__f_suffix1;
        this.sci_VectorBuilder__f_a1 = ((a$2.u.length === 32) ? a$2 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$2, 0, 32));
        this.sci_VectorBuilder__f_depth = 3;
        this.sci_VectorBuilder__f_offset = ((1024 - v3.sci_Vector3__f_len12) | 0);
        const i$2 = ((v3.sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$2);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$2 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
        this.sci_VectorBuilder__f_a3 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]);
        this.sci_VectorBuilder__f_a3.set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO(v3.sci_Vector__f_prefix1, v3.sci_Vector3__f_prefix2), 2));
        const dest$1 = this.sci_VectorBuilder__f_a3;
        const length$1 = d3.u.length;
        $systemArraycopy(d3, 0, dest$1, 1, length$1);
        this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2, 32), 2);
        this.sci_VectorBuilder__f_a3.set(((1 + d3.u.length) | 0), this.sci_VectorBuilder__f_a2);
        this.sci_VectorBuilder__f_a2.set(s2.u.length, this.sci_VectorBuilder__f_a1);
        break
      }
      case 7: {
        const v4 = $as_sci_Vector4(v);
        const d4 = v4.sci_Vector4__f_data4;
        const s3 = v4.sci_Vector4__f_suffix3;
        const s2$2 = v4.sci_Vector4__f_suffix2;
        const a$3 = v4.sci_BigVector__f_suffix1;
        this.sci_VectorBuilder__f_a1 = ((a$3.u.length === 32) ? a$3 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$3, 0, 32));
        this.sci_VectorBuilder__f_depth = 4;
        this.sci_VectorBuilder__f_offset = ((32768 - v4.sci_Vector4__f_len123) | 0);
        const i$3 = ((v4.sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$3);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$3 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
        this.sci_VectorBuilder__f_a4 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]);
        this.sci_VectorBuilder__f_a4.set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(v4.sci_Vector__f_prefix1, v4.sci_Vector4__f_prefix2), v4.sci_Vector4__f_prefix3), 3));
        const dest$2 = this.sci_VectorBuilder__f_a4;
        const length$2 = d4.u.length;
        $systemArraycopy(d4, 0, dest$2, 1, length$2);
        this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3, 32), 3);
        this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$2, 32), 2);
        this.sci_VectorBuilder__f_a4.set(((1 + d4.u.length) | 0), this.sci_VectorBuilder__f_a3);
        this.sci_VectorBuilder__f_a3.set(s3.u.length, this.sci_VectorBuilder__f_a2);
        this.sci_VectorBuilder__f_a2.set(s2$2.u.length, this.sci_VectorBuilder__f_a1);
        break
      }
      case 9: {
        const v5 = $as_sci_Vector5(v);
        const d5 = v5.sci_Vector5__f_data5;
        const s4 = v5.sci_Vector5__f_suffix4;
        const s3$2 = v5.sci_Vector5__f_suffix3;
        const s2$3 = v5.sci_Vector5__f_suffix2;
        const a$4 = v5.sci_BigVector__f_suffix1;
        this.sci_VectorBuilder__f_a1 = ((a$4.u.length === 32) ? a$4 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 0, 32));
        this.sci_VectorBuilder__f_depth = 5;
        this.sci_VectorBuilder__f_offset = ((1048576 - v5.sci_Vector5__f_len1234) | 0);
        const i$4 = ((v5.sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$4);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$4 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
        this.sci_VectorBuilder__f_a5 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]);
        this.sci_VectorBuilder__f_a5.set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(v5.sci_Vector__f_prefix1, v5.sci_Vector5__f_prefix2), v5.sci_Vector5__f_prefix3), v5.sci_Vector5__f_prefix4), 4));
        const dest$3 = this.sci_VectorBuilder__f_a5;
        const length$3 = d5.u.length;
        $systemArraycopy(d5, 0, dest$3, 1, length$3);
        this.sci_VectorBuilder__f_a4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s4, 32), 4);
        this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3$2, 32), 3);
        this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$3, 32), 2);
        this.sci_VectorBuilder__f_a5.set(((1 + d5.u.length) | 0), this.sci_VectorBuilder__f_a4);
        this.sci_VectorBuilder__f_a4.set(s4.u.length, this.sci_VectorBuilder__f_a3);
        this.sci_VectorBuilder__f_a3.set(s3$2.u.length, this.sci_VectorBuilder__f_a2);
        this.sci_VectorBuilder__f_a2.set(s2$3.u.length, this.sci_VectorBuilder__f_a1);
        break
      }
      case 11: {
        const v6 = $as_sci_Vector6(v);
        const d6 = v6.sci_Vector6__f_data6;
        const s5 = v6.sci_Vector6__f_suffix5;
        const s4$2 = v6.sci_Vector6__f_suffix4;
        const s3$3 = v6.sci_Vector6__f_suffix3;
        const s2$4 = v6.sci_Vector6__f_suffix2;
        const a$5 = v6.sci_BigVector__f_suffix1;
        this.sci_VectorBuilder__f_a1 = ((a$5.u.length === 32) ? a$5 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$5, 0, 32));
        this.sci_VectorBuilder__f_depth = 6;
        this.sci_VectorBuilder__f_offset = ((33554432 - v6.sci_Vector6__f_len12345) | 0);
        const i$5 = ((v6.sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$5);
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$5 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
        this.sci_VectorBuilder__f_a6 = $newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]);
        this.sci_VectorBuilder__f_a6.set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(v6.sci_Vector__f_prefix1, v6.sci_Vector6__f_prefix2), v6.sci_Vector6__f_prefix3), v6.sci_Vector6__f_prefix4), v6.sci_Vector6__f_prefix5), 5));
        const dest$4 = this.sci_VectorBuilder__f_a6;
        const length$4 = d6.u.length;
        $systemArraycopy(d6, 0, dest$4, 1, length$4);
        this.sci_VectorBuilder__f_a5 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s5, 32), 5);
        this.sci_VectorBuilder__f_a4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s4$2, 32), 4);
        this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3$3, 32), 3);
        this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$4, 32), 2);
        this.sci_VectorBuilder__f_a6.set(((1 + d6.u.length) | 0), this.sci_VectorBuilder__f_a5);
        this.sci_VectorBuilder__f_a5.set(s5.u.length, this.sci_VectorBuilder__f_a4);
        this.sci_VectorBuilder__f_a4.set(s4$2.u.length, this.sci_VectorBuilder__f_a3);
        this.sci_VectorBuilder__f_a3.set(s3$3.u.length, this.sci_VectorBuilder__f_a2);
        this.sci_VectorBuilder__f_a2.set(s2$4.u.length, this.sci_VectorBuilder__f_a1);
        break
      }
      default: {
        throw new $c_s_MatchError(x1)
      }
    };
    if (((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest > 0))) {
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 32;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (((-32) + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0)
    };
    return this
  };
  addOne__O__sci_VectorBuilder(elem) {
    if ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
      $p_sci_VectorBuilder__advance__V(this)
    };
    this.sci_VectorBuilder__f_a1.set(this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1, elem);
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = ((1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
    return this
  };
  addAll__sc_IterableOnce__sci_VectorBuilder(xs) {
    if ((xs instanceof $c_sci_Vector)) {
      const x2 = $as_sci_Vector(xs);
      return (((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest === 0)) ? this.initFrom__sci_Vector__sci_VectorBuilder(x2) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, x2))
    } else {
      return $as_sci_VectorBuilder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs))
    }
  };
  result__sci_Vector() {
    const len = ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
    const realLen = ((len - this.sci_VectorBuilder__f_offset) | 0);
    if ((realLen === 0)) {
      $m_sci_Vector$();
      return $m_sci_Vector0$()
    } else if ((len <= 32)) {
      if ((realLen === 32)) {
        return new $c_sci_Vector1(this.sci_VectorBuilder__f_a1)
      } else {
        const original = this.sci_VectorBuilder__f_a1;
        return new $c_sci_Vector1($m_ju_Arrays$().copyOf__AO__I__AO(original, realLen))
      }
    } else if ((len <= 1024)) {
      const i1 = (31 & (((-1) + len) | 0));
      const i2 = (((((-1) + len) | 0) >>> 5) | 0);
      const original$1 = this.sci_VectorBuilder__f_a2;
      const data = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$1, 1, i2), 2);
      const prefix1 = this.sci_VectorBuilder__f_a2.get(0);
      const a = this.sci_VectorBuilder__f_a2.get(i2);
      const len$1 = ((1 + i1) | 0);
      const suffix1 = ((a.u.length === len$1) ? a : $m_ju_Arrays$().copyOf__AO__I__AO(a, len$1));
      return new $c_sci_Vector2(prefix1, ((32 - this.sci_VectorBuilder__f_offset) | 0), data, suffix1, realLen)
    } else if ((len <= 32768)) {
      const i1$2 = (31 & (((-1) + len) | 0));
      const i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
      const i3 = (((((-1) + len) | 0) >>> 10) | 0);
      const original$2 = this.sci_VectorBuilder__f_a3;
      const data$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$2, 1, i3), 3);
      const a$1 = this.sci_VectorBuilder__f_a3.get(0);
      const to = a$1.u.length;
      const prefix2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$1, 1, to), 2);
      const prefix1$2 = this.sci_VectorBuilder__f_a3.get(0).get(0);
      const original$3 = this.sci_VectorBuilder__f_a3.get(i3);
      const suffix2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$3, i2$2), 2);
      const a$2 = this.sci_VectorBuilder__f_a3.get(i3).get(i2$2);
      const len$2 = ((1 + i1$2) | 0);
      const suffix1$2 = ((a$2.u.length === len$2) ? a$2 : $m_ju_Arrays$().copyOf__AO__I__AO(a$2, len$2));
      const len1 = prefix1$2.u.length;
      const len12 = ((len1 + (prefix2.u.length << 5)) | 0);
      return new $c_sci_Vector3(prefix1$2, len1, prefix2, len12, data$2, suffix2, suffix1$2, realLen)
    } else if ((len <= 1048576)) {
      const i1$3 = (31 & (((-1) + len) | 0));
      const i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
      const i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
      const i4 = (((((-1) + len) | 0) >>> 15) | 0);
      const original$4 = this.sci_VectorBuilder__f_a4;
      const data$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$4, 1, i4), 4);
      const a$3 = this.sci_VectorBuilder__f_a4.get(0);
      const to$1 = a$3.u.length;
      const prefix3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$3, 1, to$1), 3);
      const a$4 = this.sci_VectorBuilder__f_a4.get(0).get(0);
      const to$2 = a$4.u.length;
      const prefix2$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 1, to$2), 2);
      const prefix1$3 = this.sci_VectorBuilder__f_a4.get(0).get(0).get(0);
      const original$5 = this.sci_VectorBuilder__f_a4.get(i4);
      const suffix3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$5, i3$2), 3);
      const original$6 = this.sci_VectorBuilder__f_a4.get(i4).get(i3$2);
      const suffix2$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$6, i2$3), 2);
      const a$5 = this.sci_VectorBuilder__f_a4.get(i4).get(i3$2).get(i2$3);
      const len$3 = ((1 + i1$3) | 0);
      const suffix1$3 = ((a$5.u.length === len$3) ? a$5 : $m_ju_Arrays$().copyOf__AO__I__AO(a$5, len$3));
      const len1$2 = prefix1$3.u.length;
      const len12$2 = ((len1$2 + (prefix2$2.u.length << 5)) | 0);
      const len123 = ((len12$2 + (prefix3.u.length << 10)) | 0);
      return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, len123, data$3, suffix3, suffix2$2, suffix1$3, realLen)
    } else if ((len <= 33554432)) {
      const i1$4 = (31 & (((-1) + len) | 0));
      const i2$4 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
      const i3$3 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
      const i4$2 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
      const i5 = (((((-1) + len) | 0) >>> 20) | 0);
      const original$7 = this.sci_VectorBuilder__f_a5;
      const data$4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$7, 1, i5), 5);
      const a$6 = this.sci_VectorBuilder__f_a5.get(0);
      const to$3 = a$6.u.length;
      const prefix4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$6, 1, to$3), 4);
      const a$7 = this.sci_VectorBuilder__f_a5.get(0).get(0);
      const to$4 = a$7.u.length;
      const prefix3$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$7, 1, to$4), 3);
      const a$8 = this.sci_VectorBuilder__f_a5.get(0).get(0).get(0);
      const to$5 = a$8.u.length;
      const prefix2$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$8, 1, to$5), 2);
      const prefix1$4 = this.sci_VectorBuilder__f_a5.get(0).get(0).get(0).get(0);
      const original$8 = this.sci_VectorBuilder__f_a5.get(i5);
      const suffix4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$8, i4$2), 4);
      const original$9 = this.sci_VectorBuilder__f_a5.get(i5).get(i4$2);
      const suffix3$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$9, i3$3), 3);
      const original$10 = this.sci_VectorBuilder__f_a5.get(i5).get(i4$2).get(i3$3);
      const suffix2$3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$10, i2$4), 2);
      const a$9 = this.sci_VectorBuilder__f_a5.get(i5).get(i4$2).get(i3$3).get(i2$4);
      const len$4 = ((1 + i1$4) | 0);
      const suffix1$4 = ((a$9.u.length === len$4) ? a$9 : $m_ju_Arrays$().copyOf__AO__I__AO(a$9, len$4));
      const len1$3 = prefix1$4.u.length;
      const len12$3 = ((len1$3 + (prefix2$3.u.length << 5)) | 0);
      const len123$2 = ((len12$3 + (prefix3$2.u.length << 10)) | 0);
      const len1234 = ((len123$2 + (prefix4.u.length << 15)) | 0);
      return new $c_sci_Vector5(prefix1$4, len1$3, prefix2$3, len12$3, prefix3$2, len123$2, prefix4, len1234, data$4, suffix4, suffix3$2, suffix2$3, suffix1$4, realLen)
    } else {
      const i1$5 = (31 & (((-1) + len) | 0));
      const i2$5 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
      const i3$4 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
      const i4$3 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
      const i5$2 = (31 & (((((-1) + len) | 0) >>> 20) | 0));
      const i6 = (((((-1) + len) | 0) >>> 25) | 0);
      const original$11 = this.sci_VectorBuilder__f_a6;
      const data$5 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$11, 1, i6), 6);
      const a$10 = this.sci_VectorBuilder__f_a6.get(0);
      const to$6 = a$10.u.length;
      const prefix5 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$10, 1, to$6), 5);
      const a$11 = this.sci_VectorBuilder__f_a6.get(0).get(0);
      const to$7 = a$11.u.length;
      const prefix4$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$11, 1, to$7), 4);
      const a$12 = this.sci_VectorBuilder__f_a6.get(0).get(0).get(0);
      const to$8 = a$12.u.length;
      const prefix3$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$12, 1, to$8), 3);
      const a$13 = this.sci_VectorBuilder__f_a6.get(0).get(0).get(0).get(0);
      const to$9 = a$13.u.length;
      const prefix2$4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$13, 1, to$9), 2);
      const prefix1$5 = this.sci_VectorBuilder__f_a6.get(0).get(0).get(0).get(0).get(0);
      const original$12 = this.sci_VectorBuilder__f_a6.get(i6);
      const suffix5 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$12, i5$2), 5);
      const original$13 = this.sci_VectorBuilder__f_a6.get(i6).get(i5$2);
      const suffix4$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$13, i4$3), 4);
      const original$14 = this.sci_VectorBuilder__f_a6.get(i6).get(i5$2).get(i4$3);
      const suffix3$3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$14, i3$4), 3);
      const original$15 = this.sci_VectorBuilder__f_a6.get(i6).get(i5$2).get(i4$3).get(i3$4);
      const suffix2$4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$15, i2$5), 2);
      const a$14 = this.sci_VectorBuilder__f_a6.get(i6).get(i5$2).get(i4$3).get(i3$4).get(i2$5);
      const len$5 = ((1 + i1$5) | 0);
      const suffix1$5 = ((a$14.u.length === len$5) ? a$14 : $m_ju_Arrays$().copyOf__AO__I__AO(a$14, len$5));
      const len1$4 = prefix1$5.u.length;
      const len12$4 = ((len1$4 + (prefix2$4.u.length << 5)) | 0);
      const len123$3 = ((len12$4 + (prefix3$3.u.length << 10)) | 0);
      const len1234$2 = ((len123$3 + (prefix4$2.u.length << 15)) | 0);
      const len12345 = ((len1234$2 + (prefix5.u.length << 20)) | 0);
      return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, len12345, data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen)
    }
  };
  toString__T() {
    return (((((((("VectorBuilder(len1=" + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) + ", lenRest=") + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) + ", offset=") + this.sci_VectorBuilder__f_offset) + ", depth=") + this.sci_VectorBuilder__f_depth) + ")")
  };
  result__O() {
    return this.result__sci_Vector()
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_VectorBuilder(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__sci_VectorBuilder(elem)
  };
}
function $as_sci_VectorBuilder(obj) {
  return (((obj instanceof $c_sci_VectorBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.VectorBuilder"))
}
function $isArrayOf_sci_VectorBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_VectorBuilder)))
}
function $asArrayOf_sci_VectorBuilder(obj, depth) {
  return (($isArrayOf_sci_VectorBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.VectorBuilder;", depth))
}
const $d_sci_VectorBuilder = new $TypeData().initClass({
  sci_VectorBuilder: 0
}, false, "scala.collection.immutable.VectorBuilder", {
  sci_VectorBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_VectorBuilder.prototype.$classData = $d_sci_VectorBuilder;
const $p_scm_ArrayBuffer$__growArray$1__J__I__I__AO__AO = (function($thiz, arrayLength$1, n$1, end$1, array$2) {
  const lo = (arrayLength$1.RTLong__f_lo << 1);
  const hi = (((arrayLength$1.RTLong__f_lo >>> 31) | 0) | (arrayLength$1.RTLong__f_hi << 1));
  const t = (((hi === 0) ? (((-2147483648) ^ lo) > (-2147483632)) : (hi > 0)) ? new $c_RTLong(lo, hi) : new $c_RTLong(16, 0));
  const lo$1 = t.RTLong__f_lo;
  const hi$1 = t.RTLong__f_hi;
  let newSize__lo = lo$1;
  let newSize__hi = hi$1;
  while (true) {
    const hi$2 = (n$1 >> 31);
    const b__lo = newSize__lo;
    const b__hi = newSize__hi;
    const bhi = b__hi;
    if (((hi$2 === bhi) ? (((-2147483648) ^ n$1) > ((-2147483648) ^ b__lo)) : (hi$2 > bhi))) {
      const this$4__lo = newSize__lo;
      const this$4__hi = newSize__hi;
      const lo$2 = (this$4__lo << 1);
      const hi$3 = (((this$4__lo >>> 31) | 0) | (this$4__hi << 1));
      const $$x1__lo = lo$2;
      const $$x1__hi = hi$3;
      newSize__lo = $$x1__lo;
      newSize__hi = $$x1__hi
    } else {
      break
    }
  };
  const this$5__lo = newSize__lo;
  const this$5__hi = newSize__hi;
  const ahi = this$5__hi;
  if (((ahi === 0) ? (((-2147483648) ^ this$5__lo) > (-1)) : (ahi > 0))) {
    if ((end$1 === 2147483647)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O($ct_jl_Exception__T__(new $c_jl_Exception(), "Collections can not have more than 2147483647 elements"))
    };
    const $$x2__lo = 2147483647;
    const $$x2__hi = 0;
    newSize__lo = $$x2__lo;
    newSize__hi = $$x2__hi
  };
  const this$6__lo = newSize__lo;
  const this$6__hi = newSize__hi;
  const newArray = $newArrayObject($d_O.getArrayOf(), [this$6__lo]);
  $m_s_Array$().copy__O__I__O__I__I__V(array$2, 0, newArray, 0, end$1);
  return newArray
});
class $c_scm_ArrayBuffer$ extends $c_O {
  from__sc_IterableOnce__scm_ArrayBuffer(coll) {
    const k = coll.knownSize__I();
    if ((k >= 0)) {
      const array = $newArrayObject($d_O.getArrayOf(), [((k > 16) ? k : 16)]);
      const it = coll.iterator__sc_Iterator();
      const isEmpty = (k <= 0);
      const scala$collection$immutable$Range$$lastElement = (((-1) + k) | 0);
      if ((!isEmpty)) {
        let i = 0;
        while (true) {
          const v1 = i;
          array.set(v1, it.next__O());
          if ((i === scala$collection$immutable$Range$$lastElement)) {
            break
          };
          i = ((1 + i) | 0)
        }
      };
      return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k)
    } else {
      const this$10 = $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
      return this$10.addAll__sc_IterableOnce__scm_ArrayBuffer(coll)
    }
  };
  scala$collection$mutable$ArrayBuffer$$ensureSize__AO__I__I__AO(array, end, n) {
    const value = array.u.length;
    const hi = (value >> 31);
    const hi$1 = (n >> 31);
    if (((hi$1 === hi) ? (((-2147483648) ^ n) <= ((-2147483648) ^ value)) : (hi$1 < hi))) {
      return array
    } else {
      return $p_scm_ArrayBuffer$__growArray$1__J__I__I__AO__AO(this, new $c_RTLong(value, hi), n, end, array)
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__scm_ArrayBuffer(source)
  };
}
const $d_scm_ArrayBuffer$ = new $TypeData().initClass({
  scm_ArrayBuffer$: 0
}, false, "scala.collection.mutable.ArrayBuffer$", {
  scm_ArrayBuffer$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer$.prototype.$classData = $d_scm_ArrayBuffer$;
let $n_scm_ArrayBuffer$ = (void 0);
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$()
  };
  return $n_scm_ArrayBuffer$
}
class $c_scm_IndexedSeq$ extends $c_sc_SeqFactory$Delegate {
  constructor() {
    super();
    $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$())
  };
}
const $d_scm_IndexedSeq$ = new $TypeData().initClass({
  scm_IndexedSeq$: 0
}, false, "scala.collection.mutable.IndexedSeq$", {
  scm_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_IndexedSeq$.prototype.$classData = $d_scm_IndexedSeq$;
let $n_scm_IndexedSeq$ = (void 0);
function $m_scm_IndexedSeq$() {
  if ((!$n_scm_IndexedSeq$)) {
    $n_scm_IndexedSeq$ = new $c_scm_IndexedSeq$()
  };
  return $n_scm_IndexedSeq$
}
class $c_scm_ListBuffer$ extends $c_O {
  from__sc_IterableOnce__O(source) {
    const this$1 = new $c_scm_ListBuffer();
    return this$1.addAll__sc_IterableOnce__scm_ListBuffer(source)
  };
}
const $d_scm_ListBuffer$ = new $TypeData().initClass({
  scm_ListBuffer$: 0
}, false, "scala.collection.mutable.ListBuffer$", {
  scm_ListBuffer$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer$.prototype.$classData = $d_scm_ListBuffer$;
let $n_scm_ListBuffer$ = (void 0);
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$()
  };
  return $n_scm_ListBuffer$
}
const $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T = (function($thiz, clazz) {
  return (clazz.isArray__Z() ? (("Array[" + $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz.getComponentType__jl_Class())) + "]") : clazz.getName__T())
});
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
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sr_ScalaRunTime$$anon$1.prototype.$classData = $d_sr_ScalaRunTime$$anon$1;
class $c_sjs_js_WrappedArray$ extends $c_O {
  from__sc_IterableOnce__sjs_js_WrappedArray(source) {
    const this$1 = $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
    return $as_sjs_js_WrappedArray($as_scm_Builder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this$1, source)).result__O())
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sjs_js_WrappedArray(source)
  };
}
const $d_sjs_js_WrappedArray$ = new $TypeData().initClass({
  sjs_js_WrappedArray$: 0
}, false, "scala.scalajs.js.WrappedArray$", {
  sjs_js_WrappedArray$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray$.prototype.$classData = $d_sjs_js_WrappedArray$;
let $n_sjs_js_WrappedArray$ = (void 0);
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$()
  };
  return $n_sjs_js_WrappedArray$
}
class $c_sjsr_WrappedVarArgs$ extends $c_O {
  from__sc_IterableOnce__sjsr_WrappedVarArgs(source) {
    const this$1 = this.newBuilder__scm_Builder();
    return $as_sjsr_WrappedVarArgs($as_scm_Builder(this$1.addAll__sc_IterableOnce__scm_Growable(source)).result__O())
  };
  newBuilder__scm_Builder() {
    const array = [];
    const this$4 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
    const f = new $c_sjsr_AnonFunction1(((this$2) => ((x$1$2) => {
      const x$1 = $as_sjs_js_WrappedArray(x$1$2);
      return new $c_sjsr_WrappedVarArgs(x$1.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array)
    }))(this));
    return new $c_scm_Builder$$anon$1(this$4, f)
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sjsr_WrappedVarArgs(source)
  };
}
const $d_sjsr_WrappedVarArgs$ = new $TypeData().initClass({
  sjsr_WrappedVarArgs$: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs$", {
  sjsr_WrappedVarArgs$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs$.prototype.$classData = $d_sjsr_WrappedVarArgs$;
let $n_sjsr_WrappedVarArgs$ = (void 0);
function $m_sjsr_WrappedVarArgs$() {
  if ((!$n_sjsr_WrappedVarArgs$)) {
    $n_sjsr_WrappedVarArgs$ = new $c_sjsr_WrappedVarArgs$()
  };
  return $n_sjsr_WrappedVarArgs$
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
    return ((x$1 === 0) ? this.Lscalatags_JsDom$RawFrag__f_v : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
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
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
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
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
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
  Ljava_io_Serializable: 1
});
$c_Lscalatags_generic_StylePair.prototype.$classData = $d_Lscalatags_generic_StylePair;
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
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_NumberFormatException = new $TypeData().initClass({
  jl_NumberFormatException: 0
}, false, "java.lang.NumberFormatException", {
  jl_NumberFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NumberFormatException.prototype.$classData = $d_jl_NumberFormatException;
const $ct_jl_StringIndexOutOfBoundsException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
const $ct_jl_StringIndexOutOfBoundsException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
const $d_jl_StringIndexOutOfBoundsException = new $TypeData().initClass({
  jl_StringIndexOutOfBoundsException: 0
}, false, "java.lang.StringIndexOutOfBoundsException", {
  jl_StringIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringIndexOutOfBoundsException.prototype.$classData = $d_jl_StringIndexOutOfBoundsException;
class $c_s_None$ extends $c_s_Option {
  get__E() {
    throw new $c_ju_NoSuchElementException("None.get")
  };
  productPrefix__T() {
    return "None"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    return $m_sr_Statics$().ioobe__I__O(x$1)
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
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
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
    return ((x$1 === 0) ? this.s_Some__f_value : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
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
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_Some.prototype.$classData = $d_s_Some;
class $c_sc_AbstractIterable extends $c_O {
  className__T() {
    return this.stringPrefix__T()
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return $as_sc_IterableOps(this.iterableFactory__sc_IterableFactory().from__sc_IterableOnce__O(coll))
  };
  head__O() {
    return this.iterator__sc_Iterator().next__O()
  };
  drop__I__O(n) {
    return $f_sc_IterableOps__drop__I__O(this, n)
  };
  tail__O() {
    return $f_sc_IterableOps__tail__O(this)
  };
  isEmpty__Z() {
    return $f_sc_IterableOnceOps__isEmpty__Z(this)
  };
  copyToArray__O__I__I(xs, start) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I(this, xs, start)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return this.fromSpecific__sc_IterableOnce__sc_IterableOps(coll)
  };
}
class $c_sc_IndexedSeqView$IndexedSeqViewIterator extends $c_sc_AbstractIterator {
  constructor(self) {
    super();
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = 0;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = self.length__I()
  };
  knownSize__I() {
    return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder
  };
  hasNext__Z() {
    return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder > 0)
  };
  next__O() {
    if (this.hasNext__Z()) {
      const r = this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self.apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder) | 0);
      return r
    } else {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    }
  };
  drop__I__sc_Iterator(n) {
    if ((n > 0)) {
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + n) | 0);
      const b = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder - n) | 0);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = ((b < 0) ? 0 : b)
    };
    return this
  };
}
const $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().initClass({
  sc_IndexedSeqView$IndexedSeqViewIterator: 0
}, false, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", {
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.$classData = $d_sc_IndexedSeqView$IndexedSeqViewIterator;
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Iterable)))
}
function $as_sci_Iterable(obj) {
  return (($is_sci_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Iterable"))
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Iterable)))
}
function $asArrayOf_sci_Iterable(obj, depth) {
  return (($isArrayOf_sci_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Iterable;", depth))
}
class $c_sci_RangeIterator extends $c_sc_AbstractIterator {
  constructor(start, step, lastElement, initiallyEmpty) {
    super();
    this.sci_RangeIterator__f_step = 0;
    this.sci_RangeIterator__f_lastElement = 0;
    this.sci_RangeIterator__f__hasNext = false;
    this.sci_RangeIterator__f__next = 0;
    this.sci_RangeIterator__f_step = step;
    this.sci_RangeIterator__f_lastElement = lastElement;
    this.sci_RangeIterator__f__hasNext = (!initiallyEmpty);
    this.sci_RangeIterator__f__next = start
  };
  knownSize__I() {
    return (this.sci_RangeIterator__f__hasNext ? ((1 + $intDiv(((this.sci_RangeIterator__f_lastElement - this.sci_RangeIterator__f__next) | 0), this.sci_RangeIterator__f_step)) | 0) : 0)
  };
  hasNext__Z() {
    return this.sci_RangeIterator__f__hasNext
  };
  next__I() {
    if ((!this.sci_RangeIterator__f__hasNext)) {
      $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    };
    const value = this.sci_RangeIterator__f__next;
    this.sci_RangeIterator__f__hasNext = (value !== this.sci_RangeIterator__f_lastElement);
    this.sci_RangeIterator__f__next = ((value + this.sci_RangeIterator__f_step) | 0);
    return value
  };
  drop__I__sc_Iterator(n) {
    if ((n > 0)) {
      const value = this.sci_RangeIterator__f__next;
      const hi = (value >> 31);
      const value$1 = $imul(this.sci_RangeIterator__f_step, n);
      const hi$1 = (value$1 >> 31);
      const lo = ((value + value$1) | 0);
      const hi$2 = ((((-2147483648) ^ lo) < ((-2147483648) ^ value)) ? ((1 + ((hi + hi$1) | 0)) | 0) : ((hi + hi$1) | 0));
      if ((this.sci_RangeIterator__f_step > 0)) {
        const value$2 = this.sci_RangeIterator__f_lastElement;
        const hi$3 = (value$2 >> 31);
        let this$6__lo;
        let this$6__hi;
        if (((hi$3 === hi$2) ? (((-2147483648) ^ value$2) < ((-2147483648) ^ lo)) : (hi$3 < hi$2))) {
          const $$x1__lo = value$2;
          const $$x1__hi = hi$3;
          this$6__lo = $$x1__lo;
          this$6__hi = $$x1__hi
        } else {
          const $$x2__lo = lo;
          const $$x2__hi = hi$2;
          this$6__lo = $$x2__lo;
          this$6__hi = $$x2__hi
        };
        this.sci_RangeIterator__f__next = this$6__lo;
        const value$3 = this.sci_RangeIterator__f_lastElement;
        const hi$4 = (value$3 >> 31);
        this.sci_RangeIterator__f__hasNext = ((hi$2 === hi$4) ? (((-2147483648) ^ lo) <= ((-2147483648) ^ value$3)) : (hi$2 < hi$4))
      } else if ((this.sci_RangeIterator__f_step < 0)) {
        const value$4 = this.sci_RangeIterator__f_lastElement;
        const hi$5 = (value$4 >> 31);
        let this$10__lo;
        let this$10__hi;
        if (((hi$5 === hi$2) ? (((-2147483648) ^ value$4) > ((-2147483648) ^ lo)) : (hi$5 > hi$2))) {
          const $$x3__lo = value$4;
          const $$x3__hi = hi$5;
          this$10__lo = $$x3__lo;
          this$10__hi = $$x3__hi
        } else {
          const $$x4__lo = lo;
          const $$x4__hi = hi$2;
          this$10__lo = $$x4__lo;
          this$10__hi = $$x4__hi
        };
        this.sci_RangeIterator__f__next = this$10__lo;
        const value$5 = this.sci_RangeIterator__f_lastElement;
        const hi$6 = (value$5 >> 31);
        this.sci_RangeIterator__f__hasNext = ((hi$2 === hi$6) ? (((-2147483648) ^ lo) >= ((-2147483648) ^ value$5)) : (hi$2 > hi$6))
      }
    };
    return this
  };
  next__O() {
    return this.next__I()
  };
}
const $d_sci_RangeIterator = new $TypeData().initClass({
  sci_RangeIterator: 0
}, false, "scala.collection.immutable.RangeIterator", {
  sci_RangeIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_RangeIterator.prototype.$classData = $d_sci_RangeIterator;
class $c_s_reflect_ClassTag$GenericClassTag extends $c_O {
  constructor(runtimeClass) {
    super();
    this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = null;
    this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = runtimeClass
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
  newArray__I__O(len) {
    const componentType = this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass;
    return $m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType, len)
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
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ClassTag$GenericClassTag.prototype.$classData = $d_s_reflect_ClassTag$GenericClassTag;
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
function $f_sc_View__toString__T($thiz) {
  return ($thiz.className__T() + "(<not computed>)")
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_View)))
}
function $as_sc_View(obj) {
  return (($is_sc_View(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.View"))
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_View)))
}
function $asArrayOf_sc_View(obj, depth) {
  return (($isArrayOf_sc_View(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.View;", depth))
}
class $c_s_reflect_AnyValManifest extends $c_O {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = null;
    this.s_reflect_AnyValManifest__f_hashCode = 0
  };
  toString__T() {
    return this.s_reflect_AnyValManifest__f_toString
  };
  equals__O__Z(that) {
    return (this === that)
  };
  hashCode__I() {
    return this.s_reflect_AnyValManifest__f_hashCode
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
    return ((x$1 === 0) ? this.sjs_js_JavaScriptException__f_exception : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
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
  s_Equals: 1
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
    return ((x$1 === 0) ? this.Lscalatags_JsDom$StringFrag__f_v : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
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
  Ljava_io_Serializable: 1
});
$c_Lscalatags_JsDom$StringFrag.prototype.$classData = $d_Lscalatags_JsDom$StringFrag;
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
const $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq = (function($thiz, n, s) {
  while (true) {
    if (((n <= 0) || s.isEmpty__Z())) {
      return s
    } else {
      const temp$n = (((-1) + n) | 0);
      const temp$s = $as_sc_LinearSeq(s.tail__O());
      n = temp$n;
      s = temp$s
    }
  }
});
class $c_s_reflect_ManifestFactory$BooleanManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_Z.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_Z.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$ByteManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_B.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_B.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$CharManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_C.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_C.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$DoubleManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_D.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_D.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$FloatManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_F.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_F.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$IntManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_I.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_I.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$LongManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_J.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_J.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$PhantomManifest extends $c_s_reflect_ManifestFactory$ClassTypeManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = 0
  };
  toString__T() {
    return this.s_reflect_ManifestFactory$PhantomManifest__f_toString
  };
  equals__O__Z(that) {
    return (this === that)
  };
  hashCode__I() {
    return this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode
  };
}
class $c_s_reflect_ManifestFactory$ShortManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_S.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_S.getArrayOf(), [len])
  };
}
class $c_s_reflect_ManifestFactory$UnitManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_V.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_jl_Void.getArrayOf(), [len])
  };
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
  apply__sci_Seq__Lscalatags_JsDom$TypedTag(xs) {
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
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    let acc = (-889275714);
    const hash = acc;
    const data = $f_T__hashCode__I("TypedTag");
    acc = $m_sr_Statics$().mix__I__I__I(hash, data);
    const hash$1 = acc;
    const x = this.Lscalatags_JsDom$TypedTag__f_tag;
    const data$1 = $m_sr_Statics$().anyHash__O__I(x);
    acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
    const hash$2 = acc;
    const x$1 = this.Lscalatags_JsDom$TypedTag__f_modifiers;
    const data$2 = $m_sr_Statics$().anyHash__O__I(x$1);
    acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
    const hash$3 = acc;
    const data$3 = (this.Lscalatags_JsDom$TypedTag__f_void ? 1231 : 1237);
    acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
    const hash$4 = acc;
    const x$2 = this.Lscalatags_JsDom$TypedTag__f_namespace;
    const data$4 = $m_sr_Statics$().anyHash__O__I(x$2);
    acc = $m_sr_Statics$().mix__I__I__I(hash$4, data$4);
    const hash$5 = acc;
    return $m_sr_Statics$().finalizeHash__I__I__I(hash$5, 4)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lscalatags_JsDom$TypedTag)) {
      const TypedTag$1 = $as_Lscalatags_JsDom$TypedTag(x$1);
      let $$x1;
      if (((this.Lscalatags_JsDom$TypedTag__f_void === TypedTag$1.Lscalatags_JsDom$TypedTag__f_void) && (this.Lscalatags_JsDom$TypedTag__f_tag === TypedTag$1.Lscalatags_JsDom$TypedTag__f_tag))) {
        const x = this.Lscalatags_JsDom$TypedTag__f_modifiers;
        const x$2 = TypedTag$1.Lscalatags_JsDom$TypedTag__f_modifiers;
        $$x1 = ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
      } else {
        $$x1 = false
      };
      if ($$x1) {
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
  Ljava_io_Serializable: 1
});
$c_Lscalatags_JsDom$TypedTag.prototype.$classData = $d_Lscalatags_JsDom$TypedTag;
class $c_sc_AbstractView extends $c_sc_AbstractIterable {
  iterableFactory__sc_IterableFactory() {
    return $m_sc_View$()
  };
  toString__T() {
    return $f_sc_View__toString__T(this)
  };
  stringPrefix__T() {
    return "View"
  };
}
class $c_s_reflect_ManifestFactory$BooleanManifest$ extends $c_s_reflect_ManifestFactory$BooleanManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Boolean";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$BooleanManifest$: 0
}, false, "scala.reflect.ManifestFactory$BooleanManifest$", {
  s_reflect_ManifestFactory$BooleanManifest$: 1,
  s_reflect_ManifestFactory$BooleanManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
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
class $c_s_reflect_ManifestFactory$ByteManifest$ extends $c_s_reflect_ManifestFactory$ByteManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Byte";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ByteManifest$: 0
}, false, "scala.reflect.ManifestFactory$ByteManifest$", {
  s_reflect_ManifestFactory$ByteManifest$: 1,
  s_reflect_ManifestFactory$ByteManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
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
class $c_s_reflect_ManifestFactory$CharManifest$ extends $c_s_reflect_ManifestFactory$CharManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Char";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$CharManifest$: 0
}, false, "scala.reflect.ManifestFactory$CharManifest$", {
  s_reflect_ManifestFactory$CharManifest$: 1,
  s_reflect_ManifestFactory$CharManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
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
class $c_s_reflect_ManifestFactory$DoubleManifest$ extends $c_s_reflect_ManifestFactory$DoubleManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Double";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$DoubleManifest$: 0
}, false, "scala.reflect.ManifestFactory$DoubleManifest$", {
  s_reflect_ManifestFactory$DoubleManifest$: 1,
  s_reflect_ManifestFactory$DoubleManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
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
class $c_s_reflect_ManifestFactory$FloatManifest$ extends $c_s_reflect_ManifestFactory$FloatManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Float";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$FloatManifest$: 0
}, false, "scala.reflect.ManifestFactory$FloatManifest$", {
  s_reflect_ManifestFactory$FloatManifest$: 1,
  s_reflect_ManifestFactory$FloatManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
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
class $c_s_reflect_ManifestFactory$IntManifest$ extends $c_s_reflect_ManifestFactory$IntManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Int";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$IntManifest$: 0
}, false, "scala.reflect.ManifestFactory$IntManifest$", {
  s_reflect_ManifestFactory$IntManifest$: 1,
  s_reflect_ManifestFactory$IntManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
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
class $c_s_reflect_ManifestFactory$LongManifest$ extends $c_s_reflect_ManifestFactory$LongManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Long";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$LongManifest$: 0
}, false, "scala.reflect.ManifestFactory$LongManifest$", {
  s_reflect_ManifestFactory$LongManifest$: 1,
  s_reflect_ManifestFactory$LongManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
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
class $c_s_reflect_ManifestFactory$NothingManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Nothing";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_sr_Nothing$.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
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
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
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
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
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
class $c_s_reflect_ManifestFactory$ShortManifest$ extends $c_s_reflect_ManifestFactory$ShortManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Short";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ShortManifest$: 0
}, false, "scala.reflect.ManifestFactory$ShortManifest$", {
  s_reflect_ManifestFactory$ShortManifest$: 1,
  s_reflect_ManifestFactory$ShortManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
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
class $c_s_reflect_ManifestFactory$UnitManifest$ extends $c_s_reflect_ManifestFactory$UnitManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Unit";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$UnitManifest$: 0
}, false, "scala.reflect.ManifestFactory$UnitManifest$", {
  s_reflect_ManifestFactory$UnitManifest$: 1,
  s_reflect_ManifestFactory$UnitManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
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
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true
  } else if ($is_sc_Seq(o)) {
    const x2 = $as_sc_Seq(o);
    return ((x2 === $thiz) || (x2.canEqual__O__Z($thiz) && $thiz.sameElements__sc_IterableOnce__Z(x2)))
  } else {
    return false
  }
}
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
class $c_sc_View$$anon$1 extends $c_sc_AbstractView {
  constructor(it$1) {
    super();
    this.sc_View$$anon$1__f_it$1 = null;
    this.sc_View$$anon$1__f_it$1 = it$1
  };
  iterator__sc_Iterator() {
    return $as_sc_Iterator(this.sc_View$$anon$1__f_it$1.apply__O())
  };
}
const $d_sc_View$$anon$1 = new $TypeData().initClass({
  sc_View$$anon$1: 0
}, false, "scala.collection.View$$anon$1", {
  sc_View$$anon$1: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$$anon$1.prototype.$classData = $d_sc_View$$anon$1;
const $ct_sc_View$Drop__sc_IterableOps__I__ = (function($thiz, underlying, n) {
  $thiz.sc_View$Drop__f_underlying = underlying;
  $thiz.sc_View$Drop__f_n = n;
  $thiz.sc_View$Drop__f_normN = ((n > 0) ? n : 0);
  return $thiz
});
class $c_sc_View$Drop extends $c_sc_AbstractView {
  constructor() {
    super();
    this.sc_View$Drop__f_underlying = null;
    this.sc_View$Drop__f_n = 0;
    this.sc_View$Drop__f_normN = 0
  };
  iterator__sc_Iterator() {
    return this.sc_View$Drop__f_underlying.iterator__sc_Iterator().drop__I__sc_Iterator(this.sc_View$Drop__f_n)
  };
  knownSize__I() {
    const size = this.sc_View$Drop__f_underlying.knownSize__I();
    if ((size >= 0)) {
      const x = ((size - this.sc_View$Drop__f_normN) | 0);
      return ((x > 0) ? x : 0)
    } else {
      return (-1)
    }
  };
  isEmpty__Z() {
    const this$1 = this.iterator__sc_Iterator();
    return (!this$1.hasNext__Z())
  };
}
const $d_sc_View$Drop = new $TypeData().initClass({
  sc_View$Drop: 0
}, false, "scala.collection.View$Drop", {
  sc_View$Drop: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$Drop.prototype.$classData = $d_sc_View$Drop;
class $c_sc_AbstractSeq extends $c_sc_AbstractIterable {
  canEqual__O__Z(that) {
    return true
  };
  equals__O__Z(o) {
    return $f_sc_Seq__equals__O__Z(this, o)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IterableOps__sizeCompare__I__I(this, len)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
}
class $c_sc_AbstractSeqView extends $c_sc_AbstractView {
  drop__I__sc_SeqView(n) {
    return $ct_sc_SeqView$Drop__sc_SeqOps__I__(new $c_sc_SeqView$Drop(), this, n)
  };
  stringPrefix__T() {
    return "SeqView"
  };
  lengthCompare__I__I(len) {
    return $f_sc_IterableOps__sizeCompare__I__I(this, len)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  drop__I__O(n) {
    return this.drop__I__sc_SeqView(n)
  };
}
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
const $ct_sc_SeqView$Drop__sc_SeqOps__I__ = (function($thiz, underlying, n) {
  $thiz.sc_SeqView$Drop__f_underlying = underlying;
  $thiz.sc_SeqView$Drop__f_n = n;
  $ct_sc_View$Drop__sc_IterableOps__I__($thiz, underlying, n);
  return $thiz
});
class $c_sc_SeqView$Drop extends $c_sc_View$Drop {
  constructor() {
    super();
    this.sc_SeqView$Drop__f_underlying = null;
    this.sc_SeqView$Drop__f_n = 0
  };
  stringPrefix__T() {
    return "SeqView"
  };
  lengthCompare__I__I(len) {
    return $f_sc_IterableOps__sizeCompare__I__I(this, len)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  length__I() {
    const this$1 = this.sc_SeqView$Drop__f_underlying;
    const x = ((this$1.length__I() - this.sc_View$Drop__f_normN) | 0);
    return ((x > 0) ? x : 0)
  };
  apply__I__O(i) {
    return this.sc_SeqView$Drop__f_underlying.apply__I__O(((i + this.sc_View$Drop__f_normN) | 0))
  };
  drop__I__sc_SeqView(n) {
    return $ct_sc_SeqView$Drop__sc_SeqOps__I__(new $c_sc_SeqView$Drop(), this.sc_SeqView$Drop__f_underlying, ((this.sc_SeqView$Drop__f_n + n) | 0))
  };
  drop__I__O(n) {
    return this.drop__I__sc_SeqView(n)
  };
}
const $d_sc_SeqView$Drop = new $TypeData().initClass({
  sc_SeqView$Drop: 0
}, false, "scala.collection.SeqView$Drop", {
  sc_SeqView$Drop: 1,
  sc_View$Drop: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1
});
$c_sc_SeqView$Drop.prototype.$classData = $d_sc_SeqView$Drop;
const $ct_sc_SeqView$Id__sc_SeqOps__ = (function($thiz, underlying) {
  $thiz.sc_SeqView$Id__f_underlying = underlying;
  return $thiz
});
class $c_sc_SeqView$Id extends $c_sc_AbstractSeqView {
  constructor() {
    super();
    this.sc_SeqView$Id__f_underlying = null
  };
  apply__I__O(idx) {
    return this.sc_SeqView$Id__f_underlying.apply__I__O(idx)
  };
  length__I() {
    return this.sc_SeqView$Id__f_underlying.length__I()
  };
  iterator__sc_Iterator() {
    return this.sc_SeqView$Id__f_underlying.iterator__sc_Iterator()
  };
  knownSize__I() {
    return this.sc_SeqView$Id__f_underlying.knownSize__I()
  };
  isEmpty__Z() {
    return this.sc_SeqView$Id__f_underlying.isEmpty__Z()
  };
}
const $d_sc_SeqView$Id = new $TypeData().initClass({
  sc_SeqView$Id: 0
}, false, "scala.collection.SeqView$Id", {
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1
});
$c_sc_SeqView$Id.prototype.$classData = $d_sc_SeqView$Id;
function $is_sci_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Seq)))
}
function $as_sci_Seq(obj) {
  return (($is_sci_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Seq"))
}
function $isArrayOf_sci_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Seq)))
}
function $asArrayOf_sci_Seq(obj, depth) {
  return (($isArrayOf_sci_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Seq;", depth))
}
const $d_sci_Seq = new $TypeData().initClass({
  sci_Seq: 0
}, true, "scala.collection.immutable.Seq", {
  sci_Seq: 1,
  O: 1,
  sci_Iterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_SeqOps: 1
});
class $c_sc_AbstractIndexedSeqView extends $c_sc_AbstractSeqView {
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  head__O() {
    return this.apply__I__O(0)
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__sc_SeqView(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
}
class $c_sc_IndexedSeqView$Drop extends $c_sc_SeqView$Drop {
  constructor(underlying, n) {
    super();
    $ct_sc_SeqView$Drop__sc_SeqOps__I__(this, underlying, n)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  head__O() {
    return this.apply__I__O(0)
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__sc_SeqView(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
}
const $d_sc_IndexedSeqView$Drop = new $TypeData().initClass({
  sc_IndexedSeqView$Drop: 0
}, false, "scala.collection.IndexedSeqView$Drop", {
  sc_IndexedSeqView$Drop: 1,
  sc_SeqView$Drop: 1,
  sc_View$Drop: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Drop.prototype.$classData = $d_sc_IndexedSeqView$Drop;
class $c_sc_IndexedSeqView$Id extends $c_sc_SeqView$Id {
  constructor(underlying) {
    super();
    $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  head__O() {
    return this.apply__I__O(0)
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__sc_SeqView(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
}
const $d_sc_IndexedSeqView$Id = new $TypeData().initClass({
  sc_IndexedSeqView$Id: 0
}, false, "scala.collection.IndexedSeqView$Id", {
  sc_IndexedSeqView$Id: 1,
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Id.prototype.$classData = $d_sc_IndexedSeqView$Id;
class $c_sci_AbstractSeq extends $c_sc_AbstractSeq {
}
class $c_scm_ArrayBufferView extends $c_sc_AbstractIndexedSeqView {
  constructor(array, length) {
    super();
    this.scm_ArrayBufferView__f_array = null;
    this.scm_ArrayBufferView__f_length = 0;
    this.scm_ArrayBufferView__f_array = array;
    this.scm_ArrayBufferView__f_length = length
  };
  length__I() {
    return this.scm_ArrayBufferView__f_length
  };
  apply__I__O(n) {
    if ((n < this.scm_ArrayBufferView__f_length)) {
      return this.scm_ArrayBufferView__f_array.get(n)
    } else {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((n + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBufferView__f_length) | 0)) + ")"))
    }
  };
  className__T() {
    return "ArrayBufferView"
  };
}
const $d_scm_ArrayBufferView = new $TypeData().initClass({
  scm_ArrayBufferView: 0
}, false, "scala.collection.mutable.ArrayBufferView", {
  scm_ArrayBufferView: 1,
  sc_AbstractIndexedSeqView: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_scm_ArrayBufferView.prototype.$classData = $d_scm_ArrayBufferView;
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  if ((!$is_sci_IndexedSeq(that))) {
    return true
  } else {
    const x2 = $as_sci_IndexedSeq(that);
    return ($thiz.length__I() === x2.length__I())
  }
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    const x2 = $as_sci_IndexedSeq(o);
    if (($thiz === x2)) {
      return true
    } else {
      const length = $thiz.length__I();
      let equal = (length === x2.length__I());
      if (equal) {
        let index = 0;
        const a = $thiz.applyPreferredMaxLength__I();
        const b = x2.applyPreferredMaxLength__I();
        const preferredLength = ((a < b) ? a : b);
        const hi = (length >> 31);
        const hi$1 = (preferredLength >> 31);
        const lo = (preferredLength << 1);
        const hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        let maxApplyCompare;
        if (((hi === hi$2) ? (((-2147483648) ^ length) > ((-2147483648) ^ lo)) : (hi > hi$2))) {
          maxApplyCompare = preferredLength
        } else {
          maxApplyCompare = length
        };
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(index), x2.apply__I__O(index));
          index = ((1 + index) | 0)
        };
        if (((index < length) && equal)) {
          const thisIt = $thiz.iterator__sc_Iterator().drop__I__sc_Iterator(index);
          const thatIt = x2.iterator__sc_Iterator().drop__I__sc_Iterator(index);
          while ((equal && thisIt.hasNext__Z())) {
            equal = $m_sr_BoxesRunTime$().equals__O__O__Z(thisIt.next__O(), thatIt.next__O())
          }
        }
      };
      return equal
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o)
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)))
}
function $as_sci_IndexedSeq(obj) {
  return (($is_sci_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.IndexedSeq"))
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_IndexedSeq)))
}
function $asArrayOf_sci_IndexedSeq(obj, depth) {
  return (($isArrayOf_sci_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.IndexedSeq;", depth))
}
class $c_sc_StringView extends $c_sc_AbstractIndexedSeqView {
  constructor(s) {
    super();
    this.sc_StringView__f_s = null;
    this.sc_StringView__f_s = s
  };
  length__I() {
    const this$1 = this.sc_StringView__f_s;
    return $uI(this$1.length)
  };
  toString__T() {
    return (("StringView(" + this.sc_StringView__f_s) + ")")
  };
  productPrefix__T() {
    return "StringView"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.sc_StringView__f_s : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_sc_StringView)) {
      const StringView$1 = $as_sc_StringView(x$1);
      return (this.sc_StringView__f_s === StringView$1.sc_StringView__f_s)
    } else {
      return false
    }
  };
  apply__I__O(i) {
    const this$1 = this.sc_StringView__f_s;
    return $bC((65535 & $uI(this$1.charCodeAt(i))))
  };
}
function $as_sc_StringView(obj) {
  return (((obj instanceof $c_sc_StringView) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.StringView"))
}
function $isArrayOf_sc_StringView(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_StringView)))
}
function $asArrayOf_sc_StringView(obj, depth) {
  return (($isArrayOf_sc_StringView(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.StringView;", depth))
}
const $d_sc_StringView = new $TypeData().initClass({
  sc_StringView: 0
}, false, "scala.collection.StringView", {
  sc_StringView: 1,
  sc_AbstractIndexedSeqView: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_sc_StringView.prototype.$classData = $d_sc_StringView;
class $c_scm_AbstractSeq extends $c_sc_AbstractSeq {
}
const $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State = (function($thiz) {
  if ((!$thiz.sci_LazyList__f_bitmap$0)) {
    if ($thiz.sci_LazyList__f_midEvaluation) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O($ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "self-referential LazyList or a derivation thereof has no more elements"))
    };
    $thiz.sci_LazyList__f_midEvaluation = true;
    let res;
    try {
      res = $as_sci_LazyList$State($thiz.sci_LazyList__f_lazyState.apply__O())
    } finally {
      $thiz.sci_LazyList__f_midEvaluation = false
    };
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = true;
    $thiz.sci_LazyList__f_lazyState = null;
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state = res;
    $thiz.sci_LazyList__f_bitmap$0 = true
  };
  return $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state
});
const $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder = (function($thiz, b, start, sep, end) {
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  if ((!$thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
    b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
  } else if ((!$thiz.isEmpty__Z())) {
    const obj = $thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
    b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    let elem = null;
    elem = $thiz;
    const elem$1 = $thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
    let elem$2 = null;
    elem$2 = elem$1;
    if ((($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2)) && ((!$as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated) || ($as_sci_LazyList(elem).scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== $as_sci_LazyList(elem$2).scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
      elem = $as_sci_LazyList(elem$2);
      if (($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z()))) {
        const this$3 = $as_sci_LazyList(elem$2);
        elem$2 = this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
        while (((($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2)) && ($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z()))) && ($as_sci_LazyList(elem).scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== $as_sci_LazyList(elem$2).scala$collection$immutable$LazyList$$state__sci_LazyList$State()))) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const this$4 = $as_sci_LazyList(elem);
          const obj$1 = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
          const this$5 = $as_sci_LazyList(elem);
          elem = this$5.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          const this$6 = $as_sci_LazyList(elem$2);
          elem$2 = this$6.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          if (($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z()))) {
            const this$7 = $as_sci_LazyList(elem$2);
            elem$2 = this$7.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
          }
        }
      }
    };
    if ((!($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z())))) {
      while (($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2))) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        const this$8 = $as_sci_LazyList(elem);
        const obj$2 = this$8.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$2);
        const this$9 = $as_sci_LazyList(elem);
        elem = this$9.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
      };
      if ((!$as_sci_LazyList(elem).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
      }
    } else {
      let runner = $thiz;
      let k = 0;
      while (true) {
        const a = runner;
        const b$1 = $as_sci_LazyList(elem$2);
        if ((!((a === b$1) || (a.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          const this$10 = runner;
          runner = this$10.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          const this$11 = $as_sci_LazyList(elem$2);
          elem$2 = this$11.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          k = ((1 + k) | 0)
        } else {
          break
        }
      };
      const a$1 = $as_sci_LazyList(elem);
      const b$2 = $as_sci_LazyList(elem$2);
      if ((((a$1 === b$2) || (a$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State())) && (k > 0))) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        const this$12 = $as_sci_LazyList(elem);
        const obj$3 = this$12.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$3);
        const this$13 = $as_sci_LazyList(elem);
        elem = this$13.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
      };
      while (true) {
        const a$2 = $as_sci_LazyList(elem);
        const b$3 = $as_sci_LazyList(elem$2);
        if ((!((a$2 === b$3) || (a$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const this$14 = $as_sci_LazyList(elem);
          const obj$4 = this$14.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$4);
          const this$15 = $as_sci_LazyList(elem);
          elem = this$15.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
        } else {
          break
        }
      };
      b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<cycle>")
    }
  };
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  return b
});
class $c_sci_LazyList extends $c_sci_AbstractSeq {
  constructor(lazyState) {
    super();
    this.sci_LazyList__f_scala$collection$immutable$LazyList$$state = null;
    this.sci_LazyList__f_lazyState = null;
    this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
    this.sci_LazyList__f_midEvaluation = false;
    this.sci_LazyList__f_bitmap$0 = false;
    this.sci_LazyList__f_lazyState = lazyState;
    this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
    this.sci_LazyList__f_midEvaluation = false
  };
  stringPrefix__T() {
    return "LinearSeq"
  };
  length__I() {
    return $f_sc_LinearSeqOps__length__I(this)
  };
  lengthCompare__I__I(len) {
    return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len)
  };
  apply__I__O(n) {
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
  scala$collection$immutable$LazyList$$state__sci_LazyList$State() {
    return ((!this.sci_LazyList__f_bitmap$0) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.sci_LazyList__f_scala$collection$immutable$LazyList$$state)
  };
  isEmpty__Z() {
    return (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())
  };
  knownSize__I() {
    return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? 0 : (-1))
  };
  head__O() {
    return this.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O()
  };
  force__sci_LazyList() {
    let these = this;
    let those = this;
    if ((!these.isEmpty__Z())) {
      const this$1 = these;
      these = this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
    };
    while ((those !== these)) {
      if (these.isEmpty__Z()) {
        return this
      };
      const this$2 = these;
      these = this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      if (these.isEmpty__Z()) {
        return this
      };
      const this$3 = these;
      these = this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      if ((these === those)) {
        return this
      };
      const this$4 = those;
      those = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
    };
    return this
  };
  iterator__sc_Iterator() {
    return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_LazyList$LazyIterator(this))
  };
  className__T() {
    return "LazyList"
  };
  equals__O__Z(that) {
    return ((this === that) || $f_sc_Seq__equals__O__Z(this, that))
  };
  drop__I__sci_LazyList(n) {
    return ((n <= 0) ? this : ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sci_LazyList$().sci_LazyList$__f__empty : $m_sci_LazyList$().scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList(this, n)))
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(sb, start, sep, end) {
    this.force__sci_LazyList();
    $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.scm_StringBuilder__f_underlying, start, sep, end);
    return sb
  };
  toString__T() {
    return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  apply__O__O(v1) {
    const n = $uI(v1);
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  drop__I__O(n) {
    return this.drop__I__sci_LazyList(n)
  };
  tail__O() {
    return this.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_LazyList$()
  };
}
function $as_sci_LazyList(obj) {
  return (((obj instanceof $c_sci_LazyList) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList"))
}
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList)))
}
function $asArrayOf_sci_LazyList(obj, depth) {
  return (($isArrayOf_sci_LazyList(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList;", depth))
}
const $d_sci_LazyList = new $TypeData().initClass({
  sci_LazyList: 0
}, false, "scala.collection.immutable.LazyList", {
  sci_LazyList: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList.prototype.$classData = $d_sci_LazyList;
class $c_sci_WrappedString extends $c_sci_AbstractSeq {
  constructor(self) {
    super();
    this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self = null;
    this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self = self
  };
  canEqual__O__Z(that) {
    return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_StringView(this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  head__O() {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $bC((65535 & $uI(this$1.charCodeAt(0))))
  };
  lengthCompare__I__I(len) {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    const x = $uI(this$1.length);
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $uI(this$1.length)
  };
  length__I() {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $uI(this$1.length)
  };
  toString__T() {
    return this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self
  };
  copyToArray__O__I__I(xs, start) {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return this.copyToArray__O__I__I__I(xs, start, $uI(this$1.length))
  };
  copyToArray__O__I__I__I(xs, start, len) {
    if ($isArrayOf_C(xs, 1)) {
      const x2 = $asArrayOf_C(xs, 1);
      const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
      const srcLen = $uI(this$1.length);
      const destLen = x2.u.length;
      const x = ((len < srcLen) ? len : srcLen);
      const y = ((destLen - start) | 0);
      const x$1 = ((x < y) ? x : y);
      const copied = ((x$1 > 0) ? x$1 : 0);
      $f_T__getChars__I__I__AC__I__V(this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self, 0, copied, x2, start);
      return copied
    } else {
      return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
    }
  };
  sameElements__sc_IterableOnce__Z(o) {
    if ((o instanceof $c_sci_WrappedString)) {
      const x2 = $as_sci_WrappedString(o);
      return (this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self === x2.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self)
    } else {
      return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
    }
  };
  className__T() {
    return "WrappedString"
  };
  applyPreferredMaxLength__I() {
    return 2147483647
  };
  equals__O__Z(other) {
    if ((other instanceof $c_sci_WrappedString)) {
      const x2 = $as_sci_WrappedString(other);
      return (this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self === x2.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self)
    } else {
      return $f_sc_Seq__equals__O__Z(this, other)
    }
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_IndexedSeq$()
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return $m_sci_WrappedString$().fromSpecific__sc_IterableOnce__sci_WrappedString(coll)
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return $m_sci_WrappedString$().fromSpecific__sc_IterableOnce__sci_WrappedString(coll)
  };
  apply__O__O(v1) {
    const i = $uI(v1);
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $bC((65535 & $uI(this$1.charCodeAt(i))))
  };
  apply__I__O(i) {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $bC((65535 & $uI(this$1.charCodeAt(i))))
  };
}
function $as_sci_WrappedString(obj) {
  return (((obj instanceof $c_sci_WrappedString) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.WrappedString"))
}
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_WrappedString)))
}
function $asArrayOf_sci_WrappedString(obj, depth) {
  return (($isArrayOf_sci_WrappedString(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.WrappedString;", depth))
}
const $d_sci_WrappedString = new $TypeData().initClass({
  sci_WrappedString: 0
}, false, "scala.collection.immutable.WrappedString", {
  sci_WrappedString: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_WrappedString.prototype.$classData = $d_sci_WrappedString;
class $c_sjsr_WrappedVarArgs extends $c_O {
  constructor(array) {
    super();
    this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = null;
    this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = array
  };
  canEqual__O__Z(that) {
    return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
  };
  sameElements__sc_IterableOnce__Z(o) {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
  };
  applyPreferredMaxLength__I() {
    return $m_sci_IndexedSeqDefaults$().sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  head__O() {
    return this.apply__I__O(0)
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  equals__O__Z(o) {
    return $f_sc_Seq__equals__O__Z(this, o)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  tail__O() {
    return $f_sc_IterableOps__tail__O(this)
  };
  copyToArray__O__I__I(xs, start) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I(this, xs, start)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  length__I() {
    return $uI(this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array.length)
  };
  apply__I__O(idx) {
    return this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array[idx]
  };
  className__T() {
    return "WrappedVarArgs"
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    const this$1 = $m_sjsr_WrappedVarArgs$();
    return this$1.from__sc_IterableOnce__sjsr_WrappedVarArgs(coll)
  };
  apply__O__O(v1) {
    return this.apply__I__O($uI(v1))
  };
}
function $as_sjsr_WrappedVarArgs(obj) {
  return (((obj instanceof $c_sjsr_WrappedVarArgs) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.runtime.WrappedVarArgs"))
}
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjsr_WrappedVarArgs)))
}
function $asArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (($isArrayOf_sjsr_WrappedVarArgs(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.runtime.WrappedVarArgs;", depth))
}
const $d_sjsr_WrappedVarArgs = new $TypeData().initClass({
  sjsr_WrappedVarArgs: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs", {
  sjsr_WrappedVarArgs: 1,
  O: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_SeqOps: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs.prototype.$classData = $d_sjsr_WrappedVarArgs;
class $c_scm_AbstractBuffer extends $c_scm_AbstractSeq {
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
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
const $ct_sci_Vector__AO__ = (function($thiz, prefix1) {
  $thiz.sci_Vector__f_prefix1 = prefix1;
  return $thiz
});
class $c_sci_Vector extends $c_sci_AbstractSeq {
  constructor() {
    super();
    this.sci_Vector__f_prefix1 = null
  };
  canEqual__O__Z(that) {
    return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
  };
  sameElements__sc_IterableOnce__Z(o) {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  length__I() {
    return ((this instanceof $c_sci_BigVector) ? $as_sci_BigVector(this).sci_BigVector__f_length0 : this.sci_Vector__f_prefix1.u.length)
  };
  iterator__sc_Iterator() {
    return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator : new $c_sci_NewVectorIterator(this, this.length__I(), this.vectorSliceCount__I()))
  };
  className__T() {
    return "Vector"
  };
  applyPreferredMaxLength__I() {
    return $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength
  };
  ioob__I__jl_IndexOutOfBoundsException(index) {
    return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + (((-1) + this.length__I()) | 0)) + ")"))
  };
  head__O() {
    if ((this.sci_Vector__f_prefix1.u.length === 0)) {
      throw new $c_ju_NoSuchElementException("empty.head")
    } else {
      return this.sci_Vector__f_prefix1.get(0)
    }
  };
  drop__I__O(n) {
    const until = this.length__I();
    return this.slice__I__I__sci_Vector(n, until)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_Vector$()
  };
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
class $c_sci_ArraySeq$ofRef {
}
function $as_sci_ArraySeq$ofRef(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofRef) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofRef"))
}
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofRef)))
}
function $asArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofRef;", depth))
}
const $p_sci_List__loop$2__I__sci_List__I__I = (function($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.isEmpty__Z() ? 0 : 1)
    } else if (xs.isEmpty__Z()) {
      return (-1)
    } else {
      const temp$i = ((1 + i) | 0);
      const temp$xs = $as_sci_List(xs.tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
});
const $p_sci_List__listEq$1__sci_List__sci_List__Z = (function($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      const aEmpty = a.isEmpty__Z();
      const bEmpty = b.isEmpty__Z();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().equals__O__O__Z(a.head__O(), b.head__O()))) {
        const temp$a = $as_sci_List(a.tail__O());
        const temp$b = $as_sci_List(b.tail__O());
        a = temp$a;
        b = temp$b
      } else {
        return (aEmpty && bEmpty)
      }
    }
  }
});
class $c_sci_List extends $c_sci_AbstractSeq {
  iterator__sc_Iterator() {
    return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this)
  };
  stringPrefix__T() {
    return "LinearSeq"
  };
  apply__I__O(n) {
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
  $colon$colon$colon__sci_List__sci_List(prefix) {
    if (this.isEmpty__Z()) {
      return prefix
    } else if (prefix.isEmpty__Z()) {
      return this
    } else {
      const result = new $c_sci_$colon$colon(prefix.head__O(), this);
      let curr = result;
      let that = $as_sci_List(prefix.tail__O());
      while ((!that.isEmpty__Z())) {
        const temp = new $c_sci_$colon$colon(that.head__O(), this);
        curr.sci_$colon$colon__f_next = temp;
        curr = temp;
        that = $as_sci_List(that.tail__O())
      };
      return result
    }
  };
  isEmpty__Z() {
    return (this === $m_sci_Nil$())
  };
  prependedAll__sc_IterableOnce__sci_List(prefix) {
    if ((prefix instanceof $c_sci_List)) {
      const x2 = $as_sci_List(prefix);
      return this.$colon$colon$colon__sci_List__sci_List(x2)
    };
    if ((prefix.knownSize__I() === 0)) {
      return this
    };
    if ((prefix instanceof $c_scm_ListBuffer)) {
      const x3 = $as_scm_ListBuffer(prefix);
      if (this.isEmpty__Z()) {
        return x3.toList__sci_List()
      }
    };
    const iter = prefix.iterator__sc_Iterator();
    if (iter.hasNext__Z()) {
      const result = new $c_sci_$colon$colon(iter.next__O(), this);
      let curr = result;
      while (iter.hasNext__Z()) {
        const temp = new $c_sci_$colon$colon(iter.next__O(), this);
        curr.sci_$colon$colon__f_next = temp;
        curr = temp
      };
      return result
    } else {
      return this
    }
  };
  length__I() {
    let these = this;
    let len = 0;
    while ((!these.isEmpty__Z())) {
      len = ((1 + len) | 0);
      these = $as_sci_List(these.tail__O())
    };
    return len
  };
  lengthCompare__I__I(len) {
    return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len))
  };
  className__T() {
    return "List"
  };
  equals__O__Z(o) {
    if ((o instanceof $c_sci_List)) {
      const x2 = $as_sci_List(o);
      return $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, x2)
    } else {
      return $f_sc_Seq__equals__O__Z(this, o)
    }
  };
  apply__O__O(v1) {
    const n = $uI(v1);
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  drop__I__O(n) {
    return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_List$()
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
class $c_sci_VectorImpl extends $c_sci_Vector {
  slice__I__I__sci_Vector(from, until) {
    const lo = ((from > 0) ? from : 0);
    const b = this.length__I();
    const hi = ((until < b) ? until : b);
    const newlen = ((hi - lo) | 0);
    return ((newlen === this.length__I()) ? this : ((newlen <= 0) ? $m_sci_Vector0$() : this.slice0__I__I__sci_Vector(lo, hi)))
  };
}
class $c_scm_ArraySeq$ofChar {
}
function $as_scm_ArraySeq$ofChar(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofChar) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofChar"))
}
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofChar)))
}
function $asArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofChar(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofChar;", depth))
}
const $ct_sci_BigVector__AO__AO__I__ = (function($thiz, _prefix1, suffix1, length0) {
  $thiz.sci_BigVector__f_suffix1 = suffix1;
  $thiz.sci_BigVector__f_length0 = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz
});
class $c_sci_BigVector extends $c_sci_VectorImpl {
  constructor() {
    super();
    this.sci_BigVector__f_suffix1 = null;
    this.sci_BigVector__f_length0 = 0
  };
}
function $as_sci_BigVector(obj) {
  return (((obj instanceof $c_sci_BigVector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.BigVector"))
}
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_BigVector)))
}
function $asArrayOf_sci_BigVector(obj, depth) {
  return (($isArrayOf_sci_BigVector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.BigVector;", depth))
}
class $c_sci_Vector1 extends $c_sci_VectorImpl {
  constructor(_data1) {
    super();
    $ct_sci_Vector__AO__(this, _data1)
  };
  apply__I__O(index) {
    if (((index >= 0) && (index < this.sci_Vector__f_prefix1.u.length))) {
      return this.sci_Vector__f_prefix1.get(index)
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
  slice0__I__I__sci_Vector(lo, hi) {
    const original = this.sci_Vector__f_prefix1;
    return new $c_sci_Vector1($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original, lo, hi))
  };
  tail__sci_Vector() {
    if ((this.sci_Vector__f_prefix1.u.length === 1)) {
      return $m_sci_Vector0$()
    } else {
      const a = this.sci_Vector__f_prefix1;
      const to = a.u.length;
      return new $c_sci_Vector1($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 1, to))
    }
  };
  vectorSliceCount__I() {
    return 1
  };
  vectorSlice__I__AO(idx) {
    return this.sci_Vector__f_prefix1
  };
  tail__O() {
    return this.tail__sci_Vector()
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    if (((index >= 0) && (index < this.sci_Vector__f_prefix1.u.length))) {
      return this.sci_Vector__f_prefix1.get(index)
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
}
function $as_sci_Vector1(obj) {
  return (((obj instanceof $c_sci_Vector1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector1"))
}
function $isArrayOf_sci_Vector1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector1)))
}
function $asArrayOf_sci_Vector1(obj, depth) {
  return (($isArrayOf_sci_Vector1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector1;", depth))
}
const $d_sci_Vector1 = new $TypeData().initClass({
  sci_Vector1: 0
}, false, "scala.collection.immutable.Vector1", {
  sci_Vector1: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector1.prototype.$classData = $d_sci_Vector1;
class $c_sci_$colon$colon extends $c_sci_List {
  constructor(head, next) {
    super();
    this.sci_$colon$colon__f_head = null;
    this.sci_$colon$colon__f_next = null;
    this.sci_$colon$colon__f_head = head;
    this.sci_$colon$colon__f_next = next
  };
  head__O() {
    return this.sci_$colon$colon__f_head
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
        return this.sci_$colon$colon__f_next;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  tail__O() {
    return this.sci_$colon$colon__f_next
  };
}
const $d_sci_$colon$colon = new $TypeData().initClass({
  sci_$colon$colon: 0
}, false, "scala.collection.immutable.$colon$colon", {
  sci_$colon$colon: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_$colon$colon.prototype.$classData = $d_sci_$colon$colon;
class $c_sci_Nil$ extends $c_sci_List {
  constructor() {
    super();
    this.sci_Nil$__f_EmptyUnzip = null;
    $n_sci_Nil$ = this;
    this.sci_Nil$__f_EmptyUnzip = new $c_T2($m_sci_Nil$(), $m_sci_Nil$())
  };
  head__E() {
    throw new $c_ju_NoSuchElementException("head of empty list")
  };
  tail__E() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty list")
  };
  knownSize__I() {
    return 0
  };
  iterator__sc_Iterator() {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  };
  productPrefix__T() {
    return "Nil"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    return $m_sr_Statics$().ioobe__I__O(x$1)
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  tail__O() {
    this.tail__E()
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
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_Nil$.prototype.$classData = $d_sci_Nil$;
let $n_sci_Nil$ = (void 0);
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$()
  };
  return $n_sci_Nil$
}
class $c_sci_Vector0$ extends $c_sci_BigVector {
  constructor() {
    super();
    $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, 0)
  };
  apply__I__E(index) {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  };
  tail__sci_Vector() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "empty.tail")
  };
  slice0__I__I__sci_Vector(lo, hi) {
    return this
  };
  vectorSliceCount__I() {
    return 0
  };
  vectorSlice__I__AO(idx) {
    return null
  };
  equals__O__Z(o) {
    return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)))
  };
  ioob__I__jl_IndexOutOfBoundsException(index) {
    return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"))
  };
  tail__O() {
    return this.tail__sci_Vector()
  };
  apply__O__O(v1) {
    this.apply__I__E($uI(v1))
  };
  apply__I__O(i) {
    this.apply__I__E(i)
  };
}
const $d_sci_Vector0$ = new $TypeData().initClass({
  sci_Vector0$: 0
}, false, "scala.collection.immutable.Vector0$", {
  sci_Vector0$: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector0$.prototype.$classData = $d_sci_Vector0$;
let $n_sci_Vector0$ = (void 0);
function $m_sci_Vector0$() {
  if ((!$n_sci_Vector0$)) {
    $n_sci_Vector0$ = new $c_sci_Vector0$()
  };
  return $n_sci_Vector0$
}
class $c_sci_Vector2 extends $c_sci_BigVector {
  constructor(_prefix1, len1, data2, _suffix1, _length0) {
    super();
    this.sci_Vector2__f_len1 = 0;
    this.sci_Vector2__f_data2 = null;
    this.sci_Vector2__f_len1 = len1;
    this.sci_Vector2__f_data2 = data2;
    $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
  };
  apply__I__O(index) {
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      const io = ((index - this.sci_Vector2__f_len1) | 0);
      if ((io >= 0)) {
        const i2 = ((io >>> 5) | 0);
        const i1 = (31 & io);
        return ((i2 < this.sci_Vector2__f_data2.u.length) ? this.sci_Vector2__f_data2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get((31 & io)))
      } else {
        return this.sci_Vector__f_prefix1.get(index)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
  slice0__I__I__sci_Vector(lo, hi) {
    const b = new $c_sci_VectorSliceBuilder(lo, hi);
    b.consider__I__AO__V(1, this.sci_Vector__f_prefix1);
    b.consider__I__AO__V(2, this.sci_Vector2__f_data2);
    b.consider__I__AO__V(1, this.sci_BigVector__f_suffix1);
    return b.result__sci_Vector()
  };
  tail__sci_Vector() {
    if ((this.sci_Vector2__f_len1 > 1)) {
      const a = this.sci_Vector__f_prefix1;
      const to = a.u.length;
      const x$1 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 1, to);
      const x$2 = (((-1) + this.sci_Vector2__f_len1) | 0);
      const x$3 = (((-1) + this.sci_BigVector__f_length0) | 0);
      const x$4 = this.sci_Vector2__f_data2;
      const x$5 = this.sci_BigVector__f_suffix1;
      return new $c_sci_Vector2(x$1, x$2, x$4, x$5, x$3)
    } else {
      return this.slice0__I__I__sci_Vector(1, this.sci_BigVector__f_length0)
    }
  };
  vectorSliceCount__I() {
    return 3
  };
  vectorSlice__I__AO(idx) {
    switch (idx) {
      case 0: {
        return this.sci_Vector__f_prefix1;
        break
      }
      case 1: {
        return this.sci_Vector2__f_data2;
        break
      }
      case 2: {
        return this.sci_BigVector__f_suffix1;
        break
      }
      default: {
        throw new $c_s_MatchError(idx)
      }
    }
  };
  tail__O() {
    return this.tail__sci_Vector()
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      const io = ((index - this.sci_Vector2__f_len1) | 0);
      if ((io >= 0)) {
        const i2 = ((io >>> 5) | 0);
        const i1 = (31 & io);
        return ((i2 < this.sci_Vector2__f_data2.u.length) ? this.sci_Vector2__f_data2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get((31 & io)))
      } else {
        return this.sci_Vector__f_prefix1.get(index)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
}
function $as_sci_Vector2(obj) {
  return (((obj instanceof $c_sci_Vector2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector2"))
}
function $isArrayOf_sci_Vector2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector2)))
}
function $asArrayOf_sci_Vector2(obj, depth) {
  return (($isArrayOf_sci_Vector2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector2;", depth))
}
const $d_sci_Vector2 = new $TypeData().initClass({
  sci_Vector2: 0
}, false, "scala.collection.immutable.Vector2", {
  sci_Vector2: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector2.prototype.$classData = $d_sci_Vector2;
class $c_sci_Vector3 extends $c_sci_BigVector {
  constructor(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
    super();
    this.sci_Vector3__f_len1 = 0;
    this.sci_Vector3__f_prefix2 = null;
    this.sci_Vector3__f_len12 = 0;
    this.sci_Vector3__f_data3 = null;
    this.sci_Vector3__f_suffix2 = null;
    this.sci_Vector3__f_len1 = len1;
    this.sci_Vector3__f_prefix2 = prefix2;
    this.sci_Vector3__f_len12 = len12;
    this.sci_Vector3__f_data3 = data3;
    this.sci_Vector3__f_suffix2 = suffix2;
    $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
  };
  apply__I__O(index) {
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      const io = ((index - this.sci_Vector3__f_len12) | 0);
      if ((io >= 0)) {
        const i3 = ((io >>> 10) | 0);
        const i2 = (31 & ((io >>> 5) | 0));
        const i1 = (31 & io);
        return ((i3 < this.sci_Vector3__f_data3.u.length) ? this.sci_Vector3__f_data3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector3__f_suffix2.u.length) ? this.sci_Vector3__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1)))
      } else if ((index >= this.sci_Vector3__f_len1)) {
        const io$2 = ((index - this.sci_Vector3__f_len1) | 0);
        return this.sci_Vector3__f_prefix2.get(((io$2 >>> 5) | 0)).get((31 & io$2))
      } else {
        return this.sci_Vector__f_prefix1.get(index)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
  slice0__I__I__sci_Vector(lo, hi) {
    const b = new $c_sci_VectorSliceBuilder(lo, hi);
    b.consider__I__AO__V(1, this.sci_Vector__f_prefix1);
    b.consider__I__AO__V(2, this.sci_Vector3__f_prefix2);
    b.consider__I__AO__V(3, this.sci_Vector3__f_data3);
    b.consider__I__AO__V(2, this.sci_Vector3__f_suffix2);
    b.consider__I__AO__V(1, this.sci_BigVector__f_suffix1);
    return b.result__sci_Vector()
  };
  tail__sci_Vector() {
    if ((this.sci_Vector3__f_len1 > 1)) {
      const a = this.sci_Vector__f_prefix1;
      const to = a.u.length;
      const x$1 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 1, to);
      const x$2 = (((-1) + this.sci_Vector3__f_len1) | 0);
      const x$3 = (((-1) + this.sci_Vector3__f_len12) | 0);
      const x$4 = (((-1) + this.sci_BigVector__f_length0) | 0);
      const x$5 = this.sci_Vector3__f_prefix2;
      const x$6 = this.sci_Vector3__f_data3;
      const x$7 = this.sci_Vector3__f_suffix2;
      const x$8 = this.sci_BigVector__f_suffix1;
      return new $c_sci_Vector3(x$1, x$2, x$5, x$3, x$6, x$7, x$8, x$4)
    } else {
      return this.slice0__I__I__sci_Vector(1, this.sci_BigVector__f_length0)
    }
  };
  vectorSliceCount__I() {
    return 5
  };
  vectorSlice__I__AO(idx) {
    switch (idx) {
      case 0: {
        return this.sci_Vector__f_prefix1;
        break
      }
      case 1: {
        return this.sci_Vector3__f_prefix2;
        break
      }
      case 2: {
        return this.sci_Vector3__f_data3;
        break
      }
      case 3: {
        return this.sci_Vector3__f_suffix2;
        break
      }
      case 4: {
        return this.sci_BigVector__f_suffix1;
        break
      }
      default: {
        throw new $c_s_MatchError(idx)
      }
    }
  };
  tail__O() {
    return this.tail__sci_Vector()
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      const io = ((index - this.sci_Vector3__f_len12) | 0);
      if ((io >= 0)) {
        const i3 = ((io >>> 10) | 0);
        const i2 = (31 & ((io >>> 5) | 0));
        const i1 = (31 & io);
        return ((i3 < this.sci_Vector3__f_data3.u.length) ? this.sci_Vector3__f_data3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector3__f_suffix2.u.length) ? this.sci_Vector3__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1)))
      } else if ((index >= this.sci_Vector3__f_len1)) {
        const io$2 = ((index - this.sci_Vector3__f_len1) | 0);
        return this.sci_Vector3__f_prefix2.get(((io$2 >>> 5) | 0)).get((31 & io$2))
      } else {
        return this.sci_Vector__f_prefix1.get(index)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
}
function $as_sci_Vector3(obj) {
  return (((obj instanceof $c_sci_Vector3) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector3"))
}
function $isArrayOf_sci_Vector3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector3)))
}
function $asArrayOf_sci_Vector3(obj, depth) {
  return (($isArrayOf_sci_Vector3(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector3;", depth))
}
const $d_sci_Vector3 = new $TypeData().initClass({
  sci_Vector3: 0
}, false, "scala.collection.immutable.Vector3", {
  sci_Vector3: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector3.prototype.$classData = $d_sci_Vector3;
class $c_sci_Vector4 extends $c_sci_BigVector {
  constructor(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
    super();
    this.sci_Vector4__f_len1 = 0;
    this.sci_Vector4__f_prefix2 = null;
    this.sci_Vector4__f_len12 = 0;
    this.sci_Vector4__f_prefix3 = null;
    this.sci_Vector4__f_len123 = 0;
    this.sci_Vector4__f_data4 = null;
    this.sci_Vector4__f_suffix3 = null;
    this.sci_Vector4__f_suffix2 = null;
    this.sci_Vector4__f_len1 = len1;
    this.sci_Vector4__f_prefix2 = prefix2;
    this.sci_Vector4__f_len12 = len12;
    this.sci_Vector4__f_prefix3 = prefix3;
    this.sci_Vector4__f_len123 = len123;
    this.sci_Vector4__f_data4 = data4;
    this.sci_Vector4__f_suffix3 = suffix3;
    this.sci_Vector4__f_suffix2 = suffix2;
    $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
  };
  apply__I__O(index) {
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      const io = ((index - this.sci_Vector4__f_len123) | 0);
      if ((io >= 0)) {
        const i4 = ((io >>> 15) | 0);
        const i3 = (31 & ((io >>> 10) | 0));
        const i2 = (31 & ((io >>> 5) | 0));
        const i1 = (31 & io);
        return ((i4 < this.sci_Vector4__f_data4.u.length) ? this.sci_Vector4__f_data4.get(i4).get(i3).get(i2).get(i1) : ((i3 < this.sci_Vector4__f_suffix3.u.length) ? this.sci_Vector4__f_suffix3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector4__f_suffix2.u.length) ? this.sci_Vector4__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1))))
      } else if ((index >= this.sci_Vector4__f_len12)) {
        const io$2 = ((index - this.sci_Vector4__f_len12) | 0);
        return this.sci_Vector4__f_prefix3.get(((io$2 >>> 10) | 0)).get((31 & ((io$2 >>> 5) | 0))).get((31 & io$2))
      } else if ((index >= this.sci_Vector4__f_len1)) {
        const io$3 = ((index - this.sci_Vector4__f_len1) | 0);
        return this.sci_Vector4__f_prefix2.get(((io$3 >>> 5) | 0)).get((31 & io$3))
      } else {
        return this.sci_Vector__f_prefix1.get(index)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
  slice0__I__I__sci_Vector(lo, hi) {
    const b = new $c_sci_VectorSliceBuilder(lo, hi);
    b.consider__I__AO__V(1, this.sci_Vector__f_prefix1);
    b.consider__I__AO__V(2, this.sci_Vector4__f_prefix2);
    b.consider__I__AO__V(3, this.sci_Vector4__f_prefix3);
    b.consider__I__AO__V(4, this.sci_Vector4__f_data4);
    b.consider__I__AO__V(3, this.sci_Vector4__f_suffix3);
    b.consider__I__AO__V(2, this.sci_Vector4__f_suffix2);
    b.consider__I__AO__V(1, this.sci_BigVector__f_suffix1);
    return b.result__sci_Vector()
  };
  tail__sci_Vector() {
    if ((this.sci_Vector4__f_len1 > 1)) {
      const a = this.sci_Vector__f_prefix1;
      const to = a.u.length;
      const x$1 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 1, to);
      const x$2 = (((-1) + this.sci_Vector4__f_len1) | 0);
      const x$3 = (((-1) + this.sci_Vector4__f_len12) | 0);
      const x$4 = (((-1) + this.sci_Vector4__f_len123) | 0);
      const x$5 = (((-1) + this.sci_BigVector__f_length0) | 0);
      const x$6 = this.sci_Vector4__f_prefix2;
      const x$7 = this.sci_Vector4__f_prefix3;
      const x$8 = this.sci_Vector4__f_data4;
      const x$9 = this.sci_Vector4__f_suffix3;
      const x$10 = this.sci_Vector4__f_suffix2;
      const x$11 = this.sci_BigVector__f_suffix1;
      return new $c_sci_Vector4(x$1, x$2, x$6, x$3, x$7, x$4, x$8, x$9, x$10, x$11, x$5)
    } else {
      return this.slice0__I__I__sci_Vector(1, this.sci_BigVector__f_length0)
    }
  };
  vectorSliceCount__I() {
    return 7
  };
  vectorSlice__I__AO(idx) {
    switch (idx) {
      case 0: {
        return this.sci_Vector__f_prefix1;
        break
      }
      case 1: {
        return this.sci_Vector4__f_prefix2;
        break
      }
      case 2: {
        return this.sci_Vector4__f_prefix3;
        break
      }
      case 3: {
        return this.sci_Vector4__f_data4;
        break
      }
      case 4: {
        return this.sci_Vector4__f_suffix3;
        break
      }
      case 5: {
        return this.sci_Vector4__f_suffix2;
        break
      }
      case 6: {
        return this.sci_BigVector__f_suffix1;
        break
      }
      default: {
        throw new $c_s_MatchError(idx)
      }
    }
  };
  tail__O() {
    return this.tail__sci_Vector()
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      const io = ((index - this.sci_Vector4__f_len123) | 0);
      if ((io >= 0)) {
        const i4 = ((io >>> 15) | 0);
        const i3 = (31 & ((io >>> 10) | 0));
        const i2 = (31 & ((io >>> 5) | 0));
        const i1 = (31 & io);
        return ((i4 < this.sci_Vector4__f_data4.u.length) ? this.sci_Vector4__f_data4.get(i4).get(i3).get(i2).get(i1) : ((i3 < this.sci_Vector4__f_suffix3.u.length) ? this.sci_Vector4__f_suffix3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector4__f_suffix2.u.length) ? this.sci_Vector4__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1))))
      } else if ((index >= this.sci_Vector4__f_len12)) {
        const io$2 = ((index - this.sci_Vector4__f_len12) | 0);
        return this.sci_Vector4__f_prefix3.get(((io$2 >>> 10) | 0)).get((31 & ((io$2 >>> 5) | 0))).get((31 & io$2))
      } else if ((index >= this.sci_Vector4__f_len1)) {
        const io$3 = ((index - this.sci_Vector4__f_len1) | 0);
        return this.sci_Vector4__f_prefix2.get(((io$3 >>> 5) | 0)).get((31 & io$3))
      } else {
        return this.sci_Vector__f_prefix1.get(index)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
}
function $as_sci_Vector4(obj) {
  return (((obj instanceof $c_sci_Vector4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector4"))
}
function $isArrayOf_sci_Vector4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector4)))
}
function $asArrayOf_sci_Vector4(obj, depth) {
  return (($isArrayOf_sci_Vector4(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector4;", depth))
}
const $d_sci_Vector4 = new $TypeData().initClass({
  sci_Vector4: 0
}, false, "scala.collection.immutable.Vector4", {
  sci_Vector4: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector4.prototype.$classData = $d_sci_Vector4;
class $c_sci_Vector5 extends $c_sci_BigVector {
  constructor(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
    super();
    this.sci_Vector5__f_len1 = 0;
    this.sci_Vector5__f_prefix2 = null;
    this.sci_Vector5__f_len12 = 0;
    this.sci_Vector5__f_prefix3 = null;
    this.sci_Vector5__f_len123 = 0;
    this.sci_Vector5__f_prefix4 = null;
    this.sci_Vector5__f_len1234 = 0;
    this.sci_Vector5__f_data5 = null;
    this.sci_Vector5__f_suffix4 = null;
    this.sci_Vector5__f_suffix3 = null;
    this.sci_Vector5__f_suffix2 = null;
    this.sci_Vector5__f_len1 = len1;
    this.sci_Vector5__f_prefix2 = prefix2;
    this.sci_Vector5__f_len12 = len12;
    this.sci_Vector5__f_prefix3 = prefix3;
    this.sci_Vector5__f_len123 = len123;
    this.sci_Vector5__f_prefix4 = prefix4;
    this.sci_Vector5__f_len1234 = len1234;
    this.sci_Vector5__f_data5 = data5;
    this.sci_Vector5__f_suffix4 = suffix4;
    this.sci_Vector5__f_suffix3 = suffix3;
    this.sci_Vector5__f_suffix2 = suffix2;
    $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
  };
  apply__I__O(index) {
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      const io = ((index - this.sci_Vector5__f_len1234) | 0);
      if ((io >= 0)) {
        const i5 = ((io >>> 20) | 0);
        const i4 = (31 & ((io >>> 15) | 0));
        const i3 = (31 & ((io >>> 10) | 0));
        const i2 = (31 & ((io >>> 5) | 0));
        const i1 = (31 & io);
        return ((i5 < this.sci_Vector5__f_data5.u.length) ? this.sci_Vector5__f_data5.get(i5).get(i4).get(i3).get(i2).get(i1) : ((i4 < this.sci_Vector5__f_suffix4.u.length) ? this.sci_Vector5__f_suffix4.get(i4).get(i3).get(i2).get(i1) : ((i3 < this.sci_Vector5__f_suffix3.u.length) ? this.sci_Vector5__f_suffix3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector5__f_suffix2.u.length) ? this.sci_Vector5__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1)))))
      } else if ((index >= this.sci_Vector5__f_len123)) {
        const io$2 = ((index - this.sci_Vector5__f_len123) | 0);
        return this.sci_Vector5__f_prefix4.get(((io$2 >>> 15) | 0)).get((31 & ((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0))).get((31 & io$2))
      } else if ((index >= this.sci_Vector5__f_len12)) {
        const io$3 = ((index - this.sci_Vector5__f_len12) | 0);
        return this.sci_Vector5__f_prefix3.get(((io$3 >>> 10) | 0)).get((31 & ((io$3 >>> 5) | 0))).get((31 & io$3))
      } else if ((index >= this.sci_Vector5__f_len1)) {
        const io$4 = ((index - this.sci_Vector5__f_len1) | 0);
        return this.sci_Vector5__f_prefix2.get(((io$4 >>> 5) | 0)).get((31 & io$4))
      } else {
        return this.sci_Vector__f_prefix1.get(index)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
  slice0__I__I__sci_Vector(lo, hi) {
    const b = new $c_sci_VectorSliceBuilder(lo, hi);
    b.consider__I__AO__V(1, this.sci_Vector__f_prefix1);
    b.consider__I__AO__V(2, this.sci_Vector5__f_prefix2);
    b.consider__I__AO__V(3, this.sci_Vector5__f_prefix3);
    b.consider__I__AO__V(4, this.sci_Vector5__f_prefix4);
    b.consider__I__AO__V(5, this.sci_Vector5__f_data5);
    b.consider__I__AO__V(4, this.sci_Vector5__f_suffix4);
    b.consider__I__AO__V(3, this.sci_Vector5__f_suffix3);
    b.consider__I__AO__V(2, this.sci_Vector5__f_suffix2);
    b.consider__I__AO__V(1, this.sci_BigVector__f_suffix1);
    return b.result__sci_Vector()
  };
  tail__sci_Vector() {
    if ((this.sci_Vector5__f_len1 > 1)) {
      const a = this.sci_Vector__f_prefix1;
      const to = a.u.length;
      const x$1 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 1, to);
      const x$2 = (((-1) + this.sci_Vector5__f_len1) | 0);
      const x$3 = (((-1) + this.sci_Vector5__f_len12) | 0);
      const x$4 = (((-1) + this.sci_Vector5__f_len123) | 0);
      const x$5 = (((-1) + this.sci_Vector5__f_len1234) | 0);
      const x$6 = (((-1) + this.sci_BigVector__f_length0) | 0);
      const x$7 = this.sci_Vector5__f_prefix2;
      const x$8 = this.sci_Vector5__f_prefix3;
      const x$9 = this.sci_Vector5__f_prefix4;
      const x$10 = this.sci_Vector5__f_data5;
      const x$11 = this.sci_Vector5__f_suffix4;
      const x$12 = this.sci_Vector5__f_suffix3;
      const x$13 = this.sci_Vector5__f_suffix2;
      const x$14 = this.sci_BigVector__f_suffix1;
      return new $c_sci_Vector5(x$1, x$2, x$7, x$3, x$8, x$4, x$9, x$5, x$10, x$11, x$12, x$13, x$14, x$6)
    } else {
      return this.slice0__I__I__sci_Vector(1, this.sci_BigVector__f_length0)
    }
  };
  vectorSliceCount__I() {
    return 9
  };
  vectorSlice__I__AO(idx) {
    switch (idx) {
      case 0: {
        return this.sci_Vector__f_prefix1;
        break
      }
      case 1: {
        return this.sci_Vector5__f_prefix2;
        break
      }
      case 2: {
        return this.sci_Vector5__f_prefix3;
        break
      }
      case 3: {
        return this.sci_Vector5__f_prefix4;
        break
      }
      case 4: {
        return this.sci_Vector5__f_data5;
        break
      }
      case 5: {
        return this.sci_Vector5__f_suffix4;
        break
      }
      case 6: {
        return this.sci_Vector5__f_suffix3;
        break
      }
      case 7: {
        return this.sci_Vector5__f_suffix2;
        break
      }
      case 8: {
        return this.sci_BigVector__f_suffix1;
        break
      }
      default: {
        throw new $c_s_MatchError(idx)
      }
    }
  };
  tail__O() {
    return this.tail__sci_Vector()
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      const io = ((index - this.sci_Vector5__f_len1234) | 0);
      if ((io >= 0)) {
        const i5 = ((io >>> 20) | 0);
        const i4 = (31 & ((io >>> 15) | 0));
        const i3 = (31 & ((io >>> 10) | 0));
        const i2 = (31 & ((io >>> 5) | 0));
        const i1 = (31 & io);
        return ((i5 < this.sci_Vector5__f_data5.u.length) ? this.sci_Vector5__f_data5.get(i5).get(i4).get(i3).get(i2).get(i1) : ((i4 < this.sci_Vector5__f_suffix4.u.length) ? this.sci_Vector5__f_suffix4.get(i4).get(i3).get(i2).get(i1) : ((i3 < this.sci_Vector5__f_suffix3.u.length) ? this.sci_Vector5__f_suffix3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector5__f_suffix2.u.length) ? this.sci_Vector5__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1)))))
      } else if ((index >= this.sci_Vector5__f_len123)) {
        const io$2 = ((index - this.sci_Vector5__f_len123) | 0);
        return this.sci_Vector5__f_prefix4.get(((io$2 >>> 15) | 0)).get((31 & ((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0))).get((31 & io$2))
      } else if ((index >= this.sci_Vector5__f_len12)) {
        const io$3 = ((index - this.sci_Vector5__f_len12) | 0);
        return this.sci_Vector5__f_prefix3.get(((io$3 >>> 10) | 0)).get((31 & ((io$3 >>> 5) | 0))).get((31 & io$3))
      } else if ((index >= this.sci_Vector5__f_len1)) {
        const io$4 = ((index - this.sci_Vector5__f_len1) | 0);
        return this.sci_Vector5__f_prefix2.get(((io$4 >>> 5) | 0)).get((31 & io$4))
      } else {
        return this.sci_Vector__f_prefix1.get(index)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
}
function $as_sci_Vector5(obj) {
  return (((obj instanceof $c_sci_Vector5) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector5"))
}
function $isArrayOf_sci_Vector5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector5)))
}
function $asArrayOf_sci_Vector5(obj, depth) {
  return (($isArrayOf_sci_Vector5(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector5;", depth))
}
const $d_sci_Vector5 = new $TypeData().initClass({
  sci_Vector5: 0
}, false, "scala.collection.immutable.Vector5", {
  sci_Vector5: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector5.prototype.$classData = $d_sci_Vector5;
class $c_sci_Vector6 extends $c_sci_BigVector {
  constructor(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
    super();
    this.sci_Vector6__f_len1 = 0;
    this.sci_Vector6__f_prefix2 = null;
    this.sci_Vector6__f_len12 = 0;
    this.sci_Vector6__f_prefix3 = null;
    this.sci_Vector6__f_len123 = 0;
    this.sci_Vector6__f_prefix4 = null;
    this.sci_Vector6__f_len1234 = 0;
    this.sci_Vector6__f_prefix5 = null;
    this.sci_Vector6__f_len12345 = 0;
    this.sci_Vector6__f_data6 = null;
    this.sci_Vector6__f_suffix5 = null;
    this.sci_Vector6__f_suffix4 = null;
    this.sci_Vector6__f_suffix3 = null;
    this.sci_Vector6__f_suffix2 = null;
    this.sci_Vector6__f_len1 = len1;
    this.sci_Vector6__f_prefix2 = prefix2;
    this.sci_Vector6__f_len12 = len12;
    this.sci_Vector6__f_prefix3 = prefix3;
    this.sci_Vector6__f_len123 = len123;
    this.sci_Vector6__f_prefix4 = prefix4;
    this.sci_Vector6__f_len1234 = len1234;
    this.sci_Vector6__f_prefix5 = prefix5;
    this.sci_Vector6__f_len12345 = len12345;
    this.sci_Vector6__f_data6 = data6;
    this.sci_Vector6__f_suffix5 = suffix5;
    this.sci_Vector6__f_suffix4 = suffix4;
    this.sci_Vector6__f_suffix3 = suffix3;
    this.sci_Vector6__f_suffix2 = suffix2;
    $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
  };
  apply__I__O(index) {
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      const io = ((index - this.sci_Vector6__f_len12345) | 0);
      if ((io >= 0)) {
        const i6 = ((io >>> 25) | 0);
        const i5 = (31 & ((io >>> 20) | 0));
        const i4 = (31 & ((io >>> 15) | 0));
        const i3 = (31 & ((io >>> 10) | 0));
        const i2 = (31 & ((io >>> 5) | 0));
        const i1 = (31 & io);
        return ((i6 < this.sci_Vector6__f_data6.u.length) ? this.sci_Vector6__f_data6.get(i6).get(i5).get(i4).get(i3).get(i2).get(i1) : ((i5 < this.sci_Vector6__f_suffix5.u.length) ? this.sci_Vector6__f_suffix5.get(i5).get(i4).get(i3).get(i2).get(i1) : ((i4 < this.sci_Vector6__f_suffix4.u.length) ? this.sci_Vector6__f_suffix4.get(i4).get(i3).get(i2).get(i1) : ((i3 < this.sci_Vector6__f_suffix3.u.length) ? this.sci_Vector6__f_suffix3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector6__f_suffix2.u.length) ? this.sci_Vector6__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1))))))
      } else if ((index >= this.sci_Vector6__f_len1234)) {
        const io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
        return this.sci_Vector6__f_prefix5.get(((io$2 >>> 20) | 0)).get((31 & ((io$2 >>> 15) | 0))).get((31 & ((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0))).get((31 & io$2))
      } else if ((index >= this.sci_Vector6__f_len123)) {
        const io$3 = ((index - this.sci_Vector6__f_len123) | 0);
        return this.sci_Vector6__f_prefix4.get(((io$3 >>> 15) | 0)).get((31 & ((io$3 >>> 10) | 0))).get((31 & ((io$3 >>> 5) | 0))).get((31 & io$3))
      } else if ((index >= this.sci_Vector6__f_len12)) {
        const io$4 = ((index - this.sci_Vector6__f_len12) | 0);
        return this.sci_Vector6__f_prefix3.get(((io$4 >>> 10) | 0)).get((31 & ((io$4 >>> 5) | 0))).get((31 & io$4))
      } else if ((index >= this.sci_Vector6__f_len1)) {
        const io$5 = ((index - this.sci_Vector6__f_len1) | 0);
        return this.sci_Vector6__f_prefix2.get(((io$5 >>> 5) | 0)).get((31 & io$5))
      } else {
        return this.sci_Vector__f_prefix1.get(index)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
  slice0__I__I__sci_Vector(lo, hi) {
    const b = new $c_sci_VectorSliceBuilder(lo, hi);
    b.consider__I__AO__V(1, this.sci_Vector__f_prefix1);
    b.consider__I__AO__V(2, this.sci_Vector6__f_prefix2);
    b.consider__I__AO__V(3, this.sci_Vector6__f_prefix3);
    b.consider__I__AO__V(4, this.sci_Vector6__f_prefix4);
    b.consider__I__AO__V(5, this.sci_Vector6__f_prefix5);
    b.consider__I__AO__V(6, this.sci_Vector6__f_data6);
    b.consider__I__AO__V(5, this.sci_Vector6__f_suffix5);
    b.consider__I__AO__V(4, this.sci_Vector6__f_suffix4);
    b.consider__I__AO__V(3, this.sci_Vector6__f_suffix3);
    b.consider__I__AO__V(2, this.sci_Vector6__f_suffix2);
    b.consider__I__AO__V(1, this.sci_BigVector__f_suffix1);
    return b.result__sci_Vector()
  };
  tail__sci_Vector() {
    if ((this.sci_Vector6__f_len1 > 1)) {
      const a = this.sci_Vector__f_prefix1;
      const to = a.u.length;
      const x$1 = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 1, to);
      const x$2 = (((-1) + this.sci_Vector6__f_len1) | 0);
      const x$3 = (((-1) + this.sci_Vector6__f_len12) | 0);
      const x$4 = (((-1) + this.sci_Vector6__f_len123) | 0);
      const x$5 = (((-1) + this.sci_Vector6__f_len1234) | 0);
      const x$6 = (((-1) + this.sci_Vector6__f_len12345) | 0);
      const x$7 = (((-1) + this.sci_BigVector__f_length0) | 0);
      const x$8 = this.sci_Vector6__f_prefix2;
      const x$9 = this.sci_Vector6__f_prefix3;
      const x$10 = this.sci_Vector6__f_prefix4;
      const x$11 = this.sci_Vector6__f_prefix5;
      const x$12 = this.sci_Vector6__f_data6;
      const x$13 = this.sci_Vector6__f_suffix5;
      const x$14 = this.sci_Vector6__f_suffix4;
      const x$15 = this.sci_Vector6__f_suffix3;
      const x$16 = this.sci_Vector6__f_suffix2;
      const x$17 = this.sci_BigVector__f_suffix1;
      return new $c_sci_Vector6(x$1, x$2, x$8, x$3, x$9, x$4, x$10, x$5, x$11, x$6, x$12, x$13, x$14, x$15, x$16, x$17, x$7)
    } else {
      return this.slice0__I__I__sci_Vector(1, this.sci_BigVector__f_length0)
    }
  };
  vectorSliceCount__I() {
    return 11
  };
  vectorSlice__I__AO(idx) {
    switch (idx) {
      case 0: {
        return this.sci_Vector__f_prefix1;
        break
      }
      case 1: {
        return this.sci_Vector6__f_prefix2;
        break
      }
      case 2: {
        return this.sci_Vector6__f_prefix3;
        break
      }
      case 3: {
        return this.sci_Vector6__f_prefix4;
        break
      }
      case 4: {
        return this.sci_Vector6__f_prefix5;
        break
      }
      case 5: {
        return this.sci_Vector6__f_data6;
        break
      }
      case 6: {
        return this.sci_Vector6__f_suffix5;
        break
      }
      case 7: {
        return this.sci_Vector6__f_suffix4;
        break
      }
      case 8: {
        return this.sci_Vector6__f_suffix3;
        break
      }
      case 9: {
        return this.sci_Vector6__f_suffix2;
        break
      }
      case 10: {
        return this.sci_BigVector__f_suffix1;
        break
      }
      default: {
        throw new $c_s_MatchError(idx)
      }
    }
  };
  tail__O() {
    return this.tail__sci_Vector()
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
      const io = ((index - this.sci_Vector6__f_len12345) | 0);
      if ((io >= 0)) {
        const i6 = ((io >>> 25) | 0);
        const i5 = (31 & ((io >>> 20) | 0));
        const i4 = (31 & ((io >>> 15) | 0));
        const i3 = (31 & ((io >>> 10) | 0));
        const i2 = (31 & ((io >>> 5) | 0));
        const i1 = (31 & io);
        return ((i6 < this.sci_Vector6__f_data6.u.length) ? this.sci_Vector6__f_data6.get(i6).get(i5).get(i4).get(i3).get(i2).get(i1) : ((i5 < this.sci_Vector6__f_suffix5.u.length) ? this.sci_Vector6__f_suffix5.get(i5).get(i4).get(i3).get(i2).get(i1) : ((i4 < this.sci_Vector6__f_suffix4.u.length) ? this.sci_Vector6__f_suffix4.get(i4).get(i3).get(i2).get(i1) : ((i3 < this.sci_Vector6__f_suffix3.u.length) ? this.sci_Vector6__f_suffix3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector6__f_suffix2.u.length) ? this.sci_Vector6__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1))))))
      } else if ((index >= this.sci_Vector6__f_len1234)) {
        const io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
        return this.sci_Vector6__f_prefix5.get(((io$2 >>> 20) | 0)).get((31 & ((io$2 >>> 15) | 0))).get((31 & ((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0))).get((31 & io$2))
      } else if ((index >= this.sci_Vector6__f_len123)) {
        const io$3 = ((index - this.sci_Vector6__f_len123) | 0);
        return this.sci_Vector6__f_prefix4.get(((io$3 >>> 15) | 0)).get((31 & ((io$3 >>> 10) | 0))).get((31 & ((io$3 >>> 5) | 0))).get((31 & io$3))
      } else if ((index >= this.sci_Vector6__f_len12)) {
        const io$4 = ((index - this.sci_Vector6__f_len12) | 0);
        return this.sci_Vector6__f_prefix3.get(((io$4 >>> 10) | 0)).get((31 & ((io$4 >>> 5) | 0))).get((31 & io$4))
      } else if ((index >= this.sci_Vector6__f_len1)) {
        const io$5 = ((index - this.sci_Vector6__f_len1) | 0);
        return this.sci_Vector6__f_prefix2.get(((io$5 >>> 5) | 0)).get((31 & io$5))
      } else {
        return this.sci_Vector__f_prefix1.get(index)
      }
    } else {
      throw this.ioob__I__jl_IndexOutOfBoundsException(index)
    }
  };
}
function $as_sci_Vector6(obj) {
  return (((obj instanceof $c_sci_Vector6) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector6"))
}
function $isArrayOf_sci_Vector6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector6)))
}
function $asArrayOf_sci_Vector6(obj, depth) {
  return (($isArrayOf_sci_Vector6(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector6;", depth))
}
const $d_sci_Vector6 = new $TypeData().initClass({
  sci_Vector6: 0
}, false, "scala.collection.immutable.Vector6", {
  sci_Vector6: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector6.prototype.$classData = $d_sci_Vector6;
const $ct_scm_StringBuilder__jl_StringBuilder__ = (function($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz
});
const $ct_scm_StringBuilder__ = (function($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz
});
class $c_scm_StringBuilder extends $c_scm_AbstractSeq {
  constructor() {
    super();
    this.scm_StringBuilder__f_underlying = null
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  head__O() {
    return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(0))
  };
  lengthCompare__I__I(len) {
    const x = this.scm_StringBuilder__f_underlying.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
  };
  length__I() {
    return this.scm_StringBuilder__f_underlying.length__I()
  };
  knownSize__I() {
    return this.scm_StringBuilder__f_underlying.length__I()
  };
  addOne__C__scm_StringBuilder(x) {
    const this$1 = this.scm_StringBuilder__f_underlying;
    const str = $as_T(String.fromCharCode(x));
    this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
    return this
  };
  toString__T() {
    return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  appendAll__sc_IterableOnce__scm_StringBuilder(xs) {
    if ((xs instanceof $c_sci_WrappedString)) {
      const x2 = $as_sci_WrappedString(xs);
      const this$3 = this.scm_StringBuilder__f_underlying;
      $m_sci_WrappedString$();
      const str = x2.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
      this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str)
    } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
      const x3 = $as_scm_ArraySeq$ofChar(xs);
      this.scm_StringBuilder__f_underlying.append__AC__jl_StringBuilder(x3.array__AC())
    } else if ((xs instanceof $c_scm_StringBuilder)) {
      const x4 = $as_scm_StringBuilder(xs);
      const this$4 = this.scm_StringBuilder__f_underlying;
      const s = x4.scm_StringBuilder__f_underlying;
      this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content) + s)
    } else {
      const ks = xs.knownSize__I();
      if ((ks !== 0)) {
        const b = this.scm_StringBuilder__f_underlying;
        if ((ks > 0)) {
          b.length__I()
        };
        const it = xs.iterator__sc_Iterator();
        while (it.hasNext__Z()) {
          const c = $uC(it.next__O());
          const str$1 = $as_T(String.fromCharCode(c));
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1)
        }
      }
    };
    return this
  };
  subSequence__I__I__jl_CharSequence(start, end) {
    return this.scm_StringBuilder__f_underlying.substring__I__I__T(start, end)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_scm_IndexedSeq$()
  };
  result__O() {
    return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__C__scm_StringBuilder($uC(elem))
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).appendAll__sc_IterableOnce__scm_StringBuilder(coll)
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).appendAll__sc_IterableOnce__scm_StringBuilder(coll)
  };
  apply__O__O(v1) {
    const i = $uI(v1);
    return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(i))
  };
  apply__I__O(i) {
    return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(i))
  };
}
function $as_scm_StringBuilder(obj) {
  return (((obj instanceof $c_scm_StringBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.StringBuilder"))
}
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_StringBuilder)))
}
function $asArrayOf_scm_StringBuilder(obj, depth) {
  return (($isArrayOf_scm_StringBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.StringBuilder;", depth))
}
const $d_scm_StringBuilder = new $TypeData().initClass({
  scm_StringBuilder: 0
}, false, "scala.collection.mutable.StringBuilder", {
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  jl_CharSequence: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder.prototype.$classData = $d_scm_StringBuilder;
const $p_scm_ListBuffer__copyElems__V = (function($thiz) {
  const this$2 = new $c_scm_ListBuffer();
  const buf = this$2.addAll__sc_IterableOnce__scm_ListBuffer($thiz);
  $thiz.scm_ListBuffer__f_first = buf.scm_ListBuffer__f_first;
  $thiz.scm_ListBuffer__f_last0 = buf.scm_ListBuffer__f_last0;
  $thiz.scm_ListBuffer__f_aliased = false
});
const $p_scm_ListBuffer__ensureUnaliased__V = (function($thiz) {
  if ($thiz.scm_ListBuffer__f_aliased) {
    $p_scm_ListBuffer__copyElems__V($thiz)
  }
});
class $c_scm_ListBuffer extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.scm_ListBuffer__f_first = null;
    this.scm_ListBuffer__f_last0 = null;
    this.scm_ListBuffer__f_aliased = false;
    this.scm_ListBuffer__f_len = 0;
    this.scm_ListBuffer__f_first = $m_sci_Nil$();
    this.scm_ListBuffer__f_last0 = null;
    this.scm_ListBuffer__f_aliased = false;
    this.scm_ListBuffer__f_len = 0
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  iterator__sc_Iterator() {
    return this.scm_ListBuffer__f_first.iterator__sc_Iterator()
  };
  apply__I__O(i) {
    const this$1 = this.scm_ListBuffer__f_first;
    return $f_sc_LinearSeqOps__apply__I__O(this$1, i)
  };
  length__I() {
    return this.scm_ListBuffer__f_len
  };
  knownSize__I() {
    return this.scm_ListBuffer__f_len
  };
  isEmpty__Z() {
    return (this.scm_ListBuffer__f_len === 0)
  };
  toList__sci_List() {
    this.scm_ListBuffer__f_aliased = (!this.isEmpty__Z());
    return this.scm_ListBuffer__f_first
  };
  addOne__O__scm_ListBuffer(elem) {
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    const last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
    if ((this.scm_ListBuffer__f_len === 0)) {
      this.scm_ListBuffer__f_first = last1
    } else {
      this.scm_ListBuffer__f_last0.sci_$colon$colon__f_next = last1
    };
    this.scm_ListBuffer__f_last0 = last1;
    this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
    return this
  };
  addAll__sc_IterableOnce__scm_ListBuffer(xs) {
    const it = xs.iterator__sc_Iterator();
    if (it.hasNext__Z()) {
      $p_scm_ListBuffer__ensureUnaliased__V(this);
      const last1 = new $c_sci_$colon$colon(it.next__O(), $m_sci_Nil$());
      if ((this.scm_ListBuffer__f_len === 0)) {
        this.scm_ListBuffer__f_first = last1
      } else {
        this.scm_ListBuffer__f_last0.sci_$colon$colon__f_next = last1
      };
      this.scm_ListBuffer__f_last0 = last1;
      this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
      while (it.hasNext__Z()) {
        const last1$2 = new $c_sci_$colon$colon(it.next__O(), $m_sci_Nil$());
        this.scm_ListBuffer__f_last0.sci_$colon$colon__f_next = last1$2;
        this.scm_ListBuffer__f_last0 = last1$2;
        this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0)
      }
    };
    return this
  };
  stringPrefix__T() {
    return "ListBuffer"
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__scm_ListBuffer(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_ListBuffer(elem)
  };
  result__O() {
    return this.toList__sci_List()
  };
  apply__O__O(v1) {
    const i = $uI(v1);
    const this$1 = this.scm_ListBuffer__f_first;
    return $f_sc_LinearSeqOps__apply__I__O(this$1, i)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_scm_ListBuffer$()
  };
}
function $as_scm_ListBuffer(obj) {
  return (((obj instanceof $c_scm_ListBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ListBuffer"))
}
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ListBuffer)))
}
function $asArrayOf_scm_ListBuffer(obj, depth) {
  return (($isArrayOf_scm_ListBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ListBuffer;", depth))
}
const $d_scm_ListBuffer = new $TypeData().initClass({
  scm_ListBuffer: 0
}, false, "scala.collection.mutable.ListBuffer", {
  scm_ListBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer.prototype.$classData = $d_scm_ListBuffer;
const $ct_scm_ArrayBuffer__AO__I__ = (function($thiz, initialElements, initialSize) {
  $thiz.scm_ArrayBuffer__f_array = initialElements;
  $thiz.scm_ArrayBuffer__f_size0 = initialSize;
  return $thiz
});
const $ct_scm_ArrayBuffer__ = (function($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, $newArrayObject($d_O.getArrayOf(), [16]), 0);
  return $thiz
});
class $c_scm_ArrayBuffer extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.scm_ArrayBuffer__f_array = null;
    this.scm_ArrayBuffer__f_size0 = 0
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_scm_ArrayBufferView(this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  head__O() {
    return this.apply__I__O(0)
  };
  lengthCompare__I__I(len) {
    const x = this.scm_ArrayBuffer__f_size0;
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.scm_ArrayBuffer__f_size0
  };
  ensureSize__I__V(n) {
    this.scm_ArrayBuffer__f_array = $m_scm_ArrayBuffer$().scala$collection$mutable$ArrayBuffer$$ensureSize__AO__I__I__AO(this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, n)
  };
  apply__I__O(n) {
    const hi = ((1 + n) | 0);
    if ((n < 0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((n + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    if ((hi > this.scm_ArrayBuffer__f_size0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((hi + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    return this.scm_ArrayBuffer__f_array.get(n)
  };
  update__I__O__V(index, elem) {
    const hi = ((1 + index) | 0);
    if ((index < 0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    if ((hi > this.scm_ArrayBuffer__f_size0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((hi + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    this.scm_ArrayBuffer__f_array.set(index, elem)
  };
  length__I() {
    return this.scm_ArrayBuffer__f_size0
  };
  addOne__O__scm_ArrayBuffer(elem) {
    const i = this.scm_ArrayBuffer__f_size0;
    this.ensureSize__I__V(((1 + this.scm_ArrayBuffer__f_size0) | 0));
    this.scm_ArrayBuffer__f_size0 = ((1 + this.scm_ArrayBuffer__f_size0) | 0);
    this.update__I__O__V(i, elem);
    return this
  };
  addAll__sc_IterableOnce__scm_ArrayBuffer(elems) {
    if ((elems instanceof $c_scm_ArrayBuffer)) {
      const x2 = $as_scm_ArrayBuffer(elems);
      this.ensureSize__I__V(((this.scm_ArrayBuffer__f_size0 + x2.scm_ArrayBuffer__f_size0) | 0));
      $m_s_Array$().copy__O__I__O__I__I__V(x2.scm_ArrayBuffer__f_array, 0, this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, x2.scm_ArrayBuffer__f_size0);
      this.scm_ArrayBuffer__f_size0 = ((this.scm_ArrayBuffer__f_size0 + x2.scm_ArrayBuffer__f_size0) | 0)
    } else {
      $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems)
    };
    return this
  };
  stringPrefix__T() {
    return "ArrayBuffer"
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_ArrayBuffer(elem)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_scm_ArrayBuffer$()
  };
  apply__O__O(v1) {
    return this.apply__I__O($uI(v1))
  };
}
function $as_scm_ArrayBuffer(obj) {
  return (((obj instanceof $c_scm_ArrayBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArrayBuffer"))
}
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArrayBuffer)))
}
function $asArrayOf_scm_ArrayBuffer(obj, depth) {
  return (($isArrayOf_scm_ArrayBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArrayBuffer;", depth))
}
const $d_scm_ArrayBuffer = new $TypeData().initClass({
  scm_ArrayBuffer: 0
}, false, "scala.collection.mutable.ArrayBuffer", {
  scm_ArrayBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  scm_IndexedBuffer: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer.prototype.$classData = $d_scm_ArrayBuffer;
const $ct_sjs_js_WrappedArray__sjs_js_Array__ = (function($thiz, array) {
  $thiz.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = array;
  return $thiz
});
const $ct_sjs_js_WrappedArray__ = (function($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz
});
class $c_sjs_js_WrappedArray extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = null
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  head__O() {
    return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[0]
  };
  lengthCompare__I__I(len) {
    const x = $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  apply__I__O(index) {
    return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
  };
  length__I() {
    return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
  };
  knownSize__I() {
    return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
  };
  className__T() {
    return "WrappedArray"
  };
  result__O() {
    return this
  };
  addOne__O__scm_Growable(elem) {
    this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    return this
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sjs_js_WrappedArray$()
  };
}
function $as_sjs_js_WrappedArray(obj) {
  return (((obj instanceof $c_sjs_js_WrappedArray) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.WrappedArray"))
}
function $isArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_WrappedArray)))
}
function $asArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (($isArrayOf_sjs_js_WrappedArray(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.WrappedArray;", depth))
}
const $d_sjs_js_WrappedArray = new $TypeData().initClass({
  sjs_js_WrappedArray: 0
}, false, "scala.scalajs.js.WrappedArray", {
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  scm_IndexedBuffer: 1,
  scm_Builder: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray.prototype.$classData = $d_sjs_js_WrappedArray;
$L0 = new $c_RTLong(0, 0);
Editing = $m_LEditing$();
MainApp = $m_LMainApp$();
}).call(this);
//# sourceMappingURL=pokedex-tracker-fastopt.js.map
