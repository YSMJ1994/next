# Transfer

-   category: Components
-   family: DataEntry
-   chinese: 穿梭框
-   type: 基本

---

双栏穿梭选择框。

## 何时使用

-   用直观的方式在两栏中移动元素，完成选择行为。
-   需要在多个可选项中进行多选时。
-   比起 Select 和 TreeSelect，穿梭框占据更大的空间，可以展示可选项的更多信息。

## API

### Transfer

| 参数                  | 说明                                                                                                                                                                                                                                                                                                                                                                                                       | 类型                            | 默认值                                                                   |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | --------------------------------------------------------------------- |
| mode                | 移动选项模式<br/><br/>**可选值**:<br/>'normal', 'simple'                                                                                                                                                                                                                                                                                                                                                          | Enum                          | 'normal'                                                              |
| dataSource          | 数据源                                                                                                                                                                                                                                                                                                                                                                                                      | Array&lt;Object>              | \[]                                                                   |
| value               | （用于受控）当前值                                                                                                                                                                                                                                                                                                                                                                                                | Array&lt;String>              | -                                                                     |
| defaultValue        | （用于非受控）初始值                                                                                                                                                                                                                                                                                                                                                                                               | Array&lt;String>              | \[]                                                                   |
| onChange            | 值发生改变的时候触发的回调函数<br/><br/>**签名**:<br/>Function(value: Array, data: Array, extra: Object) => void<br/>**参数**:<br/>_value_: {Array} 右面板值<br/>_data_: {Array} 右面板数据<br/>_extra_: {Object} 额外参数<br/>_extra.leftValue_: {Array} 左面板值<br/>_extra.leftData_: {Array} 左面板数据<br/>_extra.movedValue_: {Array} 发生移动的值<br/>_extra.movedData_: {Object} 发生移动的数据<br/>_extra.direction_: {String} 移动的方向，值为'left'或'right' | Function                      | -                                                                     |
| onSelect            | Item 被选中的时候触发的回调函数<br/><br/>**签名**:<br/>Function(sourceSelectedValue: Array, targetSelectedValue: Array, trigger: String) => void<br/>**参数**:<br/>_sourceSelectedValue_: {Array} 源面板选中的 Item 列表<br/>_targetSelectedValue_: {Array} 目标面板选中的 Item 列表<br/>_trigger_: {String} 触发面板，值为'source'或'target'                                                                                                      | Function                      | -                                                                     |
| disabled            | 是否禁用                                                                                                                                                                                                                                                                                                                                                                                                     | Boolean                       | false                                                                 |
| leftDisabled        | 是否禁用左侧面板                                                                                                                                                                                                                                                                                                                                                                                                 | Boolean                       | false                                                                 |
| rightDisabled       | 是否禁用右侧面板                                                                                                                                                                                                                                                                                                                                                                                                 | Boolean                       | false                                                                 |
| itemRender          | 列表项渲染函数<br/><br/>**签名**:<br/>Function(data: Object) => ReactNode<br/>**参数**:<br/>_data_: {Object} 数据<br/>**返回值**:<br/>{ReactNode} 列表项内容<br/>                                                                                                                                                                                                                                                             | Function                      | data => data.label                                                    |
| filter              | 自定义搜索函数<br/><br/>**签名**:<br/>Function(searchedValue: String, data: Object) => Boolean<br/>**参数**:<br/>_searchedValue_: {String} 搜索的内容<br/>_data_: {Object} 数据<br/>**返回值**:<br/>{Boolean} 是否匹配到<br/>                                                                                                                                                                                                      | Function                      | 根据 label 属性匹配                                                         |
| onSearch            | 搜索框输入时触发的回调函数<br/><br/>**签名**:<br/>Function(searchedValue: String, position: String) => void<br/>**参数**:<br/>_searchedValue_: {String} 搜索的内容<br/>_position_: {String} 搜索面板的位置                                                                                                                                                                                                                            | Function                      | () => {}                                                              |
| searchPlaceholder   | 搜索框占位符                                                                                                                                                                                                                                                                                                                                                                                                   | String                        | -                                                                     |
| showSearch          | 左右面板是否显示搜索框                                                                                                                                                                                                                                                                                                                                                                                              | Boolean/Array&lt;Boolean>     | false                                                                 |
| searchProps         | 左右面板搜索框配置项，同 Search 组件 props                                                                                                                                                                                                                                                                                                                                                                             | Object/Array&lt;Object>       | -                                                                     |
| notFoundContent     | 列表为空显示内容                                                                                                                                                                                                                                                                                                                                                                                                 | ReactNode/Array&lt;ReactNode> | 'Not Found'                                                           |
| titles              | 左右面板标题                                                                                                                                                                                                                                                                                                                                                                                                   | Array&lt;ReactNode>           | \[]                                                                   |
| operations          | 向右向左移动按钮显示内容                                                                                                                                                                                                                                                                                                                                                                                             | Array&lt;ReactNode>           | [&lt;Icon type="arrow-right" /&gt;, &lt;Icon type="arrow-left" /&gt;] |
| defaultLeftChecked  | 左面板默认选中值                                                                                                                                                                                                                                                                                                                                                                                                 | Array&lt;String>              | \[]                                                                   |
| defaultRightChecked | 右面板默认选中值                                                                                                                                                                                                                                                                                                                                                                                                 | Array&lt;String>              | \[]                                                                   |
| listClassName       | 左右面板列表自定义样式类名                                                                                                                                                                                                                                                                                                                                                                                            | String                        | -                                                                     |
| listStyle           | 左右面板列表自定义样式对象                                                                                                                                                                                                                                                                                                                                                                                            | Object                        | -                                                                     |
| sortable            | 是否允许拖拽排序                                                                                                                                                                                                                                                                                                                                                                                                 | Boolean                       | false                                                                 |
| onSort              | 拖拽排序时触发的回调函数<br/><br/>**签名**:<br/>Function(value: Array, position: String) => void<br/>**参数**:<br/>_value_: {Array} 排序后的值<br/>_position_: {String} 拖拽的面板位置，值为：left 或 right                                                                                                                                                                                                                               | Function                      | () => {}                                                              |
| id                  | 请设置 id 以保证transfer的可访问性                                                                                                                                                                                                                                                                                                                                                                                  | String                        | -                                                                     |
| children            | 接收 children 自定义渲染列表<br/><br/>**签名**:<br/>Function() => void                                                                                                                                                                                                                                                                                                                                              | Function                      | -                                                                     |
| useVirtual          | 是否开启虚拟滚动                                                                                                                                                                                                                                                                                                                                                                                                 | Boolean                       | -                                                                     |
| showCheckAll        | 是否显示底部全选 checkbox                                                                                                                                                                                                                                                                                                                                                                                        | Boolean                       | true                                                                  |

## 无障碍键盘操作指南

| 按键         | 说明                        |
| :--------- | :------------------------ |
| Up Arrow   | 获取当前项的前一项焦点               |
| Down Arrow | 获取当前项的后一项焦点               |
| Enter      | 当前列表选中的项移动到另一个列表          |
| SPACE      | 选择/取消当前项或当前列表选中的项移动到另一个列表 |