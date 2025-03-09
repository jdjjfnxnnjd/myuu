<template>
  <div>
    <div class="name">sadsf </div>
  </div>
</template>

<script>
export default {
  name: 'digui',
  data() {
    return {
      data: [],
    }
  },
  created() {
    this.getData();
    // console.log(this.findParentNode(this.data, 1, null))
    // console.log(this.findNode(this.data, 6))
    let arr = [];
    // this.treeToArr(this.data, arr);
    // console.log(arr, ';arr')
    // this.setTreeName(this.data);
    // console.log(this.data)
    // this.getAllParent(this.data, 11, arr);
    // console.log(arr, ';arr')
    console.log(this.getAllParents(this.data, 11, []));
  },
  methods: {
    // 查找id的父节点
    findParentNode(data, id, parent) {
      for (let item of data) {
        if (item.id === id) {
          return parent || null;
          // return null;
        }
        if (item?.children?.length) {
          let node = this.findParentNode(item.children, id, item);
          if (node) {
            return node;
          }
        }
      }
      return null;
    },
    //查找id节点
    findNode(data, id) {
      for (let item of data) {
        if (item.id === id) {
          return item;
        }
        if (item?.children?.length) {
          // 不能直接 return this.findNode(item.children, id); 某则当 if(item?.children?.length)成立时，函数直接就return了
          let node = this.findNode(item.children, id);
          if (node) {
            return node;
          }
        }
      }
      return null;
    },
    //树结构转成数组结构
    treeToArr(data, arr) {
      for (let item of data) {
        arr.push(item);
        if (item?.children?.length) {
          this.treeToArr(item.children, arr);
        }
      }
      return arr;
    },
    //修改树的属性值
    setTreeName(data) {
      for (let item of data) {
        item.name += 'sss';
        if (item?.children?.length) {
          this.setTreeName(item.children);
        }
      }
    },
    //获取id的所有父节点（第一种方法）
    /*需要多次递归整个树
    * 原理：
    * 1. 先通过findParentNode递归找到id的父节点
    * 2. 然后判断parent_id不为0，表示该节点还有父节点
    * 3. 再次通过findParentNode递归查找父节点的父节点
    * */
    getAllParent(data, id, arr) {
      let parentNode = this.findParentNode(data, id, null);
      if (parentNode) {
        arr.push(parentNode);
        if (parentNode?.parent_id != 0) {
          this.getAllParent(data, parentNode.id, arr);
        }
      }
    },

    //获取id的所有父节点（第二种方法）
    /*
   *只需要递归一次整个树
   * 原理：const newParents = [...parents, item];
   * 通过上面一行代码，将遍历过的父节点都保存下来，
   * 通过item.id === targetValue 判断，遍历到id节点，就把之前保存的父节点返回
   *
   * */
    getAllParents(data, id, parents = []) {
      for (let item of data) {
        if (item.id === id) {
          return parents;
        }
        if (item?.children?.length) {
            const newParents = [...parents, item];
            const result = this.getAllParents(item.children, id, newParents);
            if (result.length > 0) {
              return result;
            }
        }
      }
      return [];
    },
    getData() {
      this.data = [
        {
          id: 1,
          name: '根目录1',
          parent_id: 0,
          children: [
            {
              id: 2,
              name: '子目录1-1',
              parent_id: 1
            },
            {
              id: 3,
              name: '子目录1-2',
              parent_id: 1
            },
          ]
        },
        {
          id: 4,
          name: '根目录2',
          parent_id: 0,
          children: [
            {
              id: 5,
              name: '子目录2-1',
              parent_id: 8
            },
            {
              id: 6,
              name: '子目录2-2',
              parent_id: 4
            },
          ]
        },
        {
          id: 7,
          name: '根目录3',
          parent_id: 0,
        },
        {
          id: 8,
          name: '根目录4',
          parent_id: 0,
          children: [
            {
              id: 13,
              name: '子目录4-2',
              parent_id: 8,
              children: [
                {
                  id: 14,
                  name: '子目录4-2-1',
                  parent_id: 13,
                },
              ]
            },
            {
              id: 9,
              name: '子目录4-1',
              parent_id: 8,
              children: [
                {
                  id: 16,
                  name: '子目录4-1-2',
                  parent_id: 8,
                  children: [
                    {
                      id: 17,
                      name: '子目录4-1-2-1',
                      parent_id: 16,
                    },
                  ],
                },
                {
                  id: 10,
                  name: '子目录4-1-1',
                  parent_id: 9,
                  children: [
                    {
                      id: 15,
                      name: '子目录4-1-1-2',
                      parent_id: 10,
                    },
                    {
                      id: 11,
                      name: '子目录4-1-1-1',
                      parent_id: 10,
                    }
                  ],
                },
              ]
            },
          ]
        },
      ]
    },
  }
}
</script>

<style scoped lang="scss">

</style>
