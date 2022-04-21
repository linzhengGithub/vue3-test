
export function useSearch(props: any, emits: any) {

  function isShow(value: any, type: any) {
    return value === type
  }

  // input change
  function inputChange(value: any) {
    if(!props[value]) {
      delete props[value]
    } else {
      emits('input', props[value])
    }
  }

  // select change
  function selectChange(value: any) {
    if(!props[value]) {
      delete props[value]
    } else {
      emits('select', props[value])
    }
  }

  // treeSelect change
  function treeSelectChange(value: any) {
    if(!props[value]) {
      delete props[value]
    } else {
      emits('treeSelect', props[value])
    }
  }

  // daterange change
  function daterange(val: any, a: any, b:any, date: any) {
    if(!val) {
      delete props[a]
      delete props[b]
    } else {
      props[a] = date[0]
      props[b] = date[1]
    }
  }

  // cascader change
  function cascaderChange(value: any) {
    if(!props[value]) {
      delete props[value]
    } else {
      emits('cascader', props[value])
    }
  }

  // 新增
  function add() {
    emits('add')
  }

  // 搜索
  function search () {
    emits('search')
  }

  // 清空
  function clear() {
    emits('clearSearch')
  }

  // 导出
  function exportFile() {
    emits('exportFile')
  }

  // 导入
  function importFile() {
    emits('importFile')
  }

  return { inputChange, selectChange, treeSelectChange, cascaderChange, daterange, isShow, add, search, clear, exportFile, importFile }
}
