export const flattenObjAndObjectInArray = (ob: any = {}, result: any = {}) => {
  if (typeof ob !== 'object') {
    return;
  }
  for (const i in ob) {
    if (typeof ob[i] === 'object' && !Array.isArray(ob[i])) {
      flattenObjAndObjectInArray(ob[i], result);
    } else if (Array.isArray(ob[i]) && typeof ob[i][0] === 'object') {
      result[i] = ob[i].map((el: any) => flattenObjAndObjectInArray(el, {}));
    } else {
      result[i] = ob[i];
    }
  }
  return result;
};
