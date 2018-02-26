webpackJsonp([7],{536:function(t,e,a){a(648);var n=a(201)(a(565),a(621),null,null);t.exports=n.exports},565:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{tableData:[],loading:!0,keyword:"",type:0,cur_page:1,count:0,pageSize:15}},created:function(){this.getData()},methods:{add:function(){this.$router.push("addCustomer")},edit:function(t,e){this.$router.push({path:"addCustomer",query:{id:e.id}})},filterTag:function(t,e){console.log(t),this.type=t,this.getData()},handleCurrentChange:function(t){this.cur_page=t,this.getData()},getData:function(){var t=this;this.loading=!0,this.$axios.post("getCustomer",{type:this.type,pn:this.cur_page,name:this.keyword},function(e){1==e.ret&&(t.tableData=e.data.list,t.count=e.data.count,t.loading=!1)})},del:function(t,e){var a=this,n=this;this.$axios.post("delCustomer",{id:e.id},function(e){1==e.ret&&(a.$message.success("删除成功"),n.tableData.splice(t,1))})}}}},591:function(t,e,a){e=t.exports=a(65)(),e.push([t.i,".customer .crumbs .el-form-item{margin-bottom:0}",""])},621:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table customer"},[a("div",{staticClass:"crumbs"},[a("el-row",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-menu"}),t._v(" 客户管理")]),t._v(" "),a("el-breadcrumb-item",[t._v("其他客户")])],1)],1)],1),t._v(" "),a("div",{staticClass:"crumbs"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-button",{staticStyle:{float:"right","margin-left":"20px"},attrs:{type:"primary"},on:{click:t.add}},[t._v("新增客户")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"}},[t._v("导入客户")]),t._v(" "),a("el-form",{attrs:{inline:!0}},[a("el-form-item",[a("el-input",{staticClass:"inline",attrs:{placeholder:"请输入客户名称搜索",icon:"search","on-icon-click":t.getData},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.getData(e)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1)],1)],1)],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"客户名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"客户类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:1==e.row.type?"primary":"success","close-transition":""}},[t._v(t._s(1==e.row.type?"终端":"厂家"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"explain",label:"其他情况说明"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"warning"},on:{click:function(a){t.edit(e.$index,e.row)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.del(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{layout:"prev, pager, next",total:t.count,"page-size":t.pageSize},on:{"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]}},648:function(t,e,a){var n=a(591);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(137)("5ac30520",n,!0)}});