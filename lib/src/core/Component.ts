export type ComponentKey = string | Array<string>;
function componentKeyEquals(k1: ComponentKey, k2: ComponentKey) {
  if (typeof k1 === "string" && typeof k2 === "string") {
    return k1 === k2;
  } else if (
    Array.isArray(k1) &&
    Array.isArray(k2) &&
    k1.length === k2.length
  ) {
    return k1.every((v, i) => v === k2[i]);
  }
  return false;
}
function componentKeyDescendent(k1: ComponentKey, k2: ComponentKey) {
  if (Array.isArray(k1)) {
    if (Array.isArray(k2) && k1.length < k2.length) {
      return k1.every((v, i) => v === k2[i]);
    }
  }
  return false;
}
export default abstract class Component {
  componentKey: ComponentKey;
  constructor(componentKey: ComponentKey) {
    this.componentKey = componentKey;
  }
  isParentComponentType(componentKey: ComponentKey): boolean {
    return componentKeyDescendent(this.componentKey, componentKey);
  }
  isChildComponentType(componentKey: ComponentKey): boolean {
    return componentKeyDescendent(componentKey, this.componentKey);
  }
  isEqualComponentType(componentKey: ComponentKey): boolean {
    return componentKeyEquals(this.componentKey, componentKey);
  }
  isMatchingComponentType(componentKey: ComponentKey): boolean {
    return (
      this.isEqualComponentType(componentKey) ||
      this.isChildComponentType(componentKey)
    );
  }
}
