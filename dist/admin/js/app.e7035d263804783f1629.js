webpackJsonp([25],{200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(13),r=n.n(o),a=n(509),i=n.n(a),p=n(248),d=n(488),l=n.n(d),c=n(502),u=(n.n(c),n(136));n.n(u),n(246),n(247);r.a.use(l.a),p.a.beforeEach(function(e,t,n){localStorage.getItem("ms_username")||"true"===e.query.isLoginPage?n():n({path:"/login",query:{isLoginPage:"true"}})}),new r.a({router:p.a,render:function(e){return e(i.a)}}).$mount("#app"),r.a.directive("focus",{inserted:function(e){e.focus()}})},202:function(e,t,n){"use strict";t.a={url:function(e){var t=this;return t.baseURL.trim()+t[e.trim()]},baseURL:"",login:"/admin/admin_user/login",logout:"/admin/admin_user/logout",updatePwd:"admin/admin_user/updatePwd",addAdmin:"/admin/admin_user/create",getAdmin:"/admin/admin_user/get",updateAdmin:"/admin/admin_user/update",delAdmin:"/admin/admin_user/delete",uploadProductExcel:"/admin/product_delivery/uploadExcel",getProductDelivery:"/admin/product_delivery/get",updateProductDelivery:"/admin/product_delivery/update",delProductDelivery:"/admin/product_delivery/delete",downfileProduct:"/admin/product_delivery/downfile",getOrderErrorList:"/admin/order_info/getErrorList",getProductErrorList:"/admin/product_delivery/getErrorList",uploadOrder:"/admin/order_info/uploadExcel",uploadOrderOne:"/admin/order_info/uploadOne",uploadOrderTwo:"/admin/order_info/uploadTwo",uploadOrderThree:"/admin/order_info/uploadThree",getOrderInfo:"/admin/order_info/get",updateOrderInfo:"/admin/order_info/updatfoe",delOrderInfo:"/admin/order_info/delete",downfileOrder:"/admin/order_info/downfile",addCustomer:"/admin/customer/create",getCustomer:"/admin/customer/get",getCustomerById:"/admin/customer/getInfo",delCustomer:"/admin/customer/delete",updateCustomer:"/admin/customer/update",uploadExcelCustomer:"/admin/customer/uploadExcel",uploadExcelCustomer2:"/admin/customer/uploadExcelTwo",getCustomerApplyList:"/admin/customer/getApplyList",operationConfirmCustomer:"/admin/customer/operationConfirm",downloadTemplateCustomer:"/admin/customer/downloadTemplate",exportCustomer:"/admin/customer/export",addAgent:"/admin/agent/create",getAgent:"/admin/agent/get",getAgentById:"/admin/agent/getInfo",delAgent:"/admin/agent/delete",updateAgent:"/admin/agent/update",uploadExcelAgent:"/admin/agent/uploadExcel",uploadExcelAgent2:"/admin/agent/uploadExcelTwo",getAgentApplyList:"/admin/agent/getApplyList",operationConfirmAgent:"/admin/agent/operationConfirm",downloadTemplateAgent:"/admin/agent/downloadTemplate",exportAgent:"/admin/agent/export",getSaleRecordList:"/admin/customer/getRecordList",updateSaleRecordList:"/admin/customer/updateRecord",getAgentSaleRecordList:"/admin/agent/getRecordList",updateAgentSaleRecordList:"/admin/agent/updateRecord",getRecordCustomer:"/admin/customer/getRecord",exportRecordCustomer:"/admin/customer/exportRecord",getRecordAgent:"/admin/agent/getRecord",exportRecordAgent:"/admin/agent/exportRecord",getSeller:"/admin/salesperson/get",delSeller:"/admin/salesperson/delete",uploadExcel:"/admin/salesperson/uploadExcel",qiniu:"/api/tools/getToken",getSynLog:"/admin/auto_syn_log/get",downfileSyn:"/admin/auto_syn_log/downfile",getPayDetail:"/admin/order_pay_detail/get"}},246:function(e,t,n){"use strict";var o=n(13),r=n.n(o),a=n(227),i=n.n(a),p=n(202),d=n(503),l=n.n(d),c={post:function(e,t,n){i.a.post(p.a.url(e),l.a.stringify(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){1==e.data.ret?n&&n(e.data):501==e.data.code?setTimeout(function(){location.href="/"},2e3):r.a.prototype.$message.error(e.data.msg)})},get:function(e,t,n){i.a.get(e,{params:t}).then(function(e){1==e.data.ret?n&&n(e.data):501==e.data.code?setTimeout(function(){location.href="/"},2e3):r.a.prototype.$message.error(e.data.msg)}).catch(function(e){console.log(e)})}};r.a.prototype.$axios=c},247:function(e,t,n){"use strict";var o=n(13),r=n.n(o),a={getRoot:function(e){var t=JSON.parse(localStorage.getItem("userInfo"));return"1"==t.power||"1"==t.setUp[e].operate}};r.a.prototype.$util=a},248:function(e,t,n){"use strict";var o=n(13),r=n.n(o),a=n(511);r.a.use(a.a),t.a=new a.a({routes:[{path:"/",redirect:"/login"},{path:"/readme",component:function(e){return n.e(1).then(function(){var t=[n(516)];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"/productTime",component:function(e){return n.e(2).then(function(){var t=[n(538)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/errorList",component:function(e){return n.e(11).then(function(){var t=[n(530)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/order",component:function(e){return n.e(3).then(function(){var t=[n(534)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/invoice",component:function(e){return n.e(10).then(function(){var t=[n(531)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/customer",component:function(e){return n.e(13).then(function(){var t=[n(528)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/addCustomer",component:function(e){return n.e(0).then(function(){var t=[n(518)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/otherCustomer",component:function(e){return n.e(7).then(function(){var t=[n(536)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/agent",component:function(e){return n.e(19).then(function(){var t=[n(522)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/addAgent",component:function(e){return n.e(23).then(function(){var t=[n(517)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/otherAgent",component:function(e){return n.e(8).then(function(){var t=[n(535)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/product",component:function(e){return n.e(6).then(function(){var t=[n(537)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/seller",component:function(e){return n.e(5).then(function(){var t=[n(539)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/manager",component:function(e){return n.e(9).then(function(){var t=[n(533)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/autosyn",component:function(e){return n.e(17).then(function(){var t=[n(524)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/customer-contact",component:function(e){return n.e(16).then(function(){var t=[n(525)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/agent-contact",component:function(e){return n.e(22).then(function(){var t=[n(519)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/customer-seller",component:function(e){return n.e(14).then(function(){var t=[n(527)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/agent-seller",component:function(e){return n.e(20).then(function(){var t=[n(521)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/customer-follow-up",component:function(e){return n.e(15).then(function(){var t=[n(526)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/agent-follow-up",component:function(e){return n.e(21).then(function(){var t=[n(520)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/customerSaleRecord",component:function(e){return n.e(12).then(function(){var t=[n(529)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/agentSaleRecord",component:function(e){return n.e(18).then(function(){var t=[n(523)];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/login",component:function(e){return n.e(4).then(function(){var t=[n(532)];e.apply(null,t)}.bind(this)).catch(n.oe)}}]})},479:function(e,t,n){t=e.exports=n(65)(),t.i(n(482),""),t.i(n(481),""),t.push([e.i,".upload-input{position:absolute;top:0;left:0;opacity:0;width:178px;height:178px}.el-upload{width:178px;height:178px;border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.el-upload:hover{border-color:#20a0ff}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:178px;height:178px;line-height:178px!important;text-align:center}.avatar{position:absolute;top:0;left:0;width:178px;height:178px;display:block}.name-wrapper{height:24px}",""])},480:function(e,t,n){t=e.exports=n(65)(),t.push([e.i,".search{float:right}.buttonGroup1{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.buttonGroup1>div{white-space:nowrap;overflow-x:auto;overflow-y:hidden}.buttonGroup1>div:first-child{margin-right:20px;overflow-x:hidden}.el-table .cell{white-space:nowrap!important}",""])},481:function(e,t,n){t=e.exports=n(65)(),t.push([e.i,".header{background-color:#242f42}.login-wrap{background:#324157}.plugins-tips{background:#eef1f6}.el-upload--text em,.plugins-tips a{color:#20a0ff}.pure-button{background:#20a0ff}",""])},482:function(e,t,n){t=e.exports=n(65)(),t.push([e.i,"*{margin:0;padding:0}#app,.wrapper,body,html{width:100%;height:100%;overflow:hidden}body{font-family:Helvetica Neue,Helvetica,microsoft yahei,arial,STHeiTi,sans-serif}a{text-decoration:none}.content{background:none repeat scroll 0 0 #fff;position:absolute;left:205px;right:0;top:70px;bottom:0;width:auto;padding:15px;box-sizing:border-box;overflow-y:scroll}.crumbs{margin-bottom:20px}.pagination{margin:20px 0;text-align:right}.plugins-tips{padding:20px 10px;margin-bottom:20px}.el-button+.el-tooltip{margin-left:10px}.el-table tr:hover{background:#f6faff}.mgb20{margin-bottom:20px}.move-enter-active,.move-leave-active{transition:opacity .5s}.move-enter,.move-leave{opacity:0}.form-box .line{text-align:center}.el-time-panel__content:after,.el-time-panel__content:before{margin-top:-7px}.el-form-item__label{white-space:nowrap;overflow-x:hidden}.el-progress-bar__inner{line-height:0!important}.ms-doc .el-checkbox__input.is-disabled+.el-checkbox__label{color:#333;cursor:pointer}.pure-button{width:150px;height:40px;line-height:40px;text-align:center;color:#fff;border-radius:3px}.g-core-image-corp-container .info-aside{height:45px}.el-upload--text{background-color:#fff;border:1px dashed #d9d9d9;border-radius:6px;box-sizing:border-box;width:360px;height:180px;cursor:pointer;position:relative;overflow:hidden}.el-button--text{color:#20a0ff!important}.el-table th>.cell{text-align:center}.el-upload--text .el-icon-upload{font-size:67px;color:#97a8be;margin:40px 0 16px;line-height:50px}.el-upload--text{color:#97a8be;font-size:14px;text-align:center}.el-upload--text em{font-style:normal}.ql-container{min-height:400px}.ql-snow .ql-tooltip{transform:translateX(117.5px) translateY(10px)!important}.editor-btn{margin-top:20px}.el-table__fixed,.el-table__fixed-right{box-shadow:-1px -6px 8px #d3d4d6!important}.el-table__fixed-right:before,.el-table__fixed:before{height:0!important}::-webkit-scrollbar{width:5px;height:8px}::-webkit-scrollbar-track{-webkit-box-shadow:inset006pxrgba(0,0,0,.3);border-radius:10px}::-webkit-scrollbar-thumb{border-radius:10px;background:rgba(0,0,0,.4);-webkit-box-shadow:inset006pxrgba(0,0,0,.5)}::-webkit-scrollbar-thumb:window-inactive{background:rgba(0,0,0,.4)}.el-submenu .el-menu-item{height:45px!important;line-height:45px!important}.el-submenu .el-menu-item i{margin-right:8px}.Paging{display:flex;justify-content:flex-end;padding:10px 5px}.preTitle{color:red;letter-spacing:1px;font-size:14px}.borrow input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;background-image:none;border-radius:4px;border:1px solid #d9c0bf;box-sizing:border-box;color:#3d201f;font-size:13px;height:36px;width:100%;line-height:1;outline:0;padding:3px 10px;transition:border-color .2s cubic-bezier(.645,.045,.355,1)}.borrow input:hover{border-color:#a58683}.borrow input:focus{outline:0;border-color:#e3212c}.borrow input::-webkit-input-placeholder{color:#be9b97}.borrow input::-moz-placeholder{color:#be9b97}.borrow input:-ms-input-placeholder{color:#be9b97}.borrow input::placeholder{color:#be9b97}.el-tabs__header{margin:0!important}",""])},502:function(e,t){},509:function(e,t,n){n(512),n(513);var o=n(201)(null,n(510),null,null);e.exports=o.exports},510:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},512:function(e,t,n){var o=n(479);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(137)("ac81e862",o,!0)},513:function(e,t,n){var o=n(480);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(137)("9d1e9da4",o,!0)},515:function(e,t,n){n(136),e.exports=n(200)}},[515]);