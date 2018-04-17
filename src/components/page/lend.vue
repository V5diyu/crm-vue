<template>
    <div class="table">
        <div class="crumbs">
            <el-row>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item><i class="el-icon-menu"></i> 工作台</el-breadcrumb-item>
                    <el-breadcrumb-item>借用信息</el-breadcrumb-item>
                </el-breadcrumb>
            </el-row>
        </div>

        <div class="crumbs">
            <el-form :inline="true" style="float: left;">
                <el-form-item>
                    <el-input
                            class="inline"
                            placeholder="请输入单号或客户名称搜索"
                            icon="search"
                            v-model="keyword"
                            @keyup.enter.native="getData"
                            :on-icon-click="getData">
                    </el-input>
                </el-form-item>

                <el-date-picker
                        v-model="startTime"
                        type="date"
                        placeholder="开始日期"
                        @change="getData"
                        :picker-options="pickerOptions0">
                </el-date-picker>

                <el-date-picker
                        v-model="endTime"
                        type="date"
                        placeholder="结束日期"
                        @change="getData"
                        :picker-options="pickerOptions0">
                </el-date-picker>
            </el-form>
            <el-button type="success" style="float:right;margin-right: 20px;" @click="exportExcel">导出</el-button>
            <!--<el-row>
                <el-col :span="24">
                    <el-button type="primary" style="float:right;">导出</el-button>
                </el-col>
            </el-row>-->
        </div>

        <el-table :data="tableData" v-loading.body="loading" border style="width: 100%">
            <el-table-column v-if="setUp != 4" label="操作" width="135">
                <template scope="scope">
                    <el-button size="small" type="success"
                               @click="editModal(scope.$index, scope.row)">修改</el-button>
                    <el-button size="small" type="danger"
                               @click="del(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="A_dh"      label="单号"></el-table-column>
            <el-table-column prop="F_khmc"    label="客户名称"></el-table-column>
            <el-table-column prop="B_ph"      label="品号"></el-table-column>
            <el-table-column prop="C_pm"      label="品名"></el-table-column>
            <el-table-column prop="D_zj"      label="总价"></el-table-column>
            <el-table-column prop="E_xsry"    label="销售人员"></el-table-column>
            <el-table-column prop="G_jysl"    label="借用数量"></el-table-column>
            <el-table-column prop="I_jcsj"    label="借出时间"></el-table-column>
            <el-table-column prop="H_ghsl"    label="归还数量"></el-table-column>
            <el-table-column prop="J_ghsj"    label="归还时间"></el-table-column>
            <el-table-column prop="K_dqsj"    label="到期时间"></el-table-column>
        </el-table>

        <div class="pagination">
            <el-pagination
                    @current-change ="handleCurrentChange"
                    layout="prev, pager, next"
                    :total="count"
                    :page-size="pageSize">
            </el-pagination>
        </div>

        <el-dialog title="修改借用信息" v-model="dialogVisible">
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="单号">
                    <el-input v-model="form.A_dh" placeholder="请输入单号" readonly disabled></el-input>
                    </el-form-item>
                <el-form-item label="借出日期">
                    <el-input v-model="form.I_jcsj" placeholder="请输入借出日期" readonly disabled></el-input>
                </el-form-item>
                <!--<el-form-item label="借出日期">
                    <el-date-picker
                            v-model="form.I_jcsj"
                            type="number"
                            placeholder="归还日期"
                            :picker-options="pickerOptions0">
                    </el-date-picker>
                </el-form-item>-->
                <!--<el-form-item label="归还日期">
                    <el-input v-model="form.J_ghsj" placeholder="请输入归还日期" ></el-input>
                </el-form-item>-->
                <el-form-item label="归还日期">
                    <el-date-picker
                            v-model="form.J_ghsj"
                            type="date"
                            placeholder="归还日期"
                            @change="modify"
                            :picker-options="pickerOptions0">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="客户单位">
                    <el-input v-model="form.F_khmc" placeholder="请输入所属客户单位"></el-input>
                </el-form-item>
                <el-form-item label="总价">
                    <el-input v-model="form.D_zj" placeholder="请输入总价"></el-input>
                </el-form-item>
                <el-form-item label="销售人员">
                    <el-input v-model="form.E_xsry" placeholder="请输入销售人员"  disabled></el-input>
                </el-form-item>
                <el-form-item label="借出数量">
                    <el-input v-model="form.G_jysl" placeholder="请输入借出数量"></el-input>
                </el-form-item>
                <el-form-item label="归还数量">
                    <el-input v-model="form.H_ghsl" placeholder="请输入归还数量"></el-input>
                </el-form-item>
                <el-form-item label="到期时间">
                    <el-input v-model="form.K_dqsj" placeholder="请输入到期时间" readonly disabled></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="edit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>

    import service from '../../assets/service.js'
    export default {
        data() {
            return {
                startTime: '',
                endTime: '',
                keyword: '',
                cur_page: 1,
                count: 0,
                pageSize: 15,
                loading: true,
                dialogVisible:false,

                tableData: [],
                qiniuInitState: false,
                setUp: 0, //1：管理人员 2：销售助理 3:财务 4：销售人员
                form: {
                    A_dh:   '',
                    B_ph: '',
                    C_pm: '',
                    D_zj:   '',
                    E_xsry: '',
                    F_khmc:   '',
                    G_jysl: '',
                    H_ghsl:   '',
                    I_jcsj: '',
                    J_ghsj: '',
                    K_dqsj: '',
                }
            }
        },
        created(){
            this.getData();
            let userInfo = localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo'));
            this.setUp = userInfo.setUp;
        },
        methods: {

            pickerOptions0: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            },

            filterTag(value, row){

            },

            modify : function () {
                var now = this.form.J_ghsj;
                var year = now.getFullYear();
                var month =(now.getMonth() + 1).toString();
                var day = (now.getDate()).toString();
                if (month.length == 1) {
                    month = "0" + month;
                }
                if (day.length == 1) {
                    day = "0" + day;
                }
                var dateTime = year +"-"+ month +"-"+  day;
                this.form.J_ghsj = dateTime;
            },
            getData(){

                //alert(this.endTime);
                this.loading = true;
                if (this.startTime.toString().indexOf('T') != -1) {
                    this.startTime = +new Date(this.startTime);
                    /*console.log(this.startTime);*/
                }
                if (this.endTime.toString().indexOf('T') != -1) {
                    this.endTime = +new Date(this.endTime);
                }

                this.$axios.post('getLendData', {
                    pn: this.cur_page,
                    search: this.keyword,
                    startTime: this.startTime,
                    endTime: this.endTime
                }, (res) => {
                    if (res.ret == true) {
                        this.tableData = res.data.list;
                        this.count = res.data.count;
                        this.loading = false
                    }
                })
            },
            exportExcel(index, row) {
                location.href = service.url('downfileLend') + '?search=' + this.keyword + '&startTime=' + this.startTime + '&endTime=' + this.endTime;
            },
            editModal(index, row){
                //console.log(row);
                this.dialogVisible = true;
                this.form = JSON.parse(JSON.stringify(row));
                //console.log(this.form);
            },
            edit() {
                console.log(this.form);
                this.$axios.post('updateLendInfo', this.form, (res) => {
                    if (res.ret == true) {
                        this.$message.success('修改成功');
                        this.getData();
                        this.dialogVisible = false;
                    }
                })
            },
            add() {
                let self = this;
                this.$axios.post('addBanner', self.form, (res) => {
                    if (res.ret == true) {
                        self.getData();
                        self.$message.success('添加成功');
                    }
                })
            },
            handleCurrentChange(val){
                this.cur_page = val;
                this.getData();
            },
            del(index, row) {
                let self = this;

                this.$axios.post('delLend', {
                    id: row.id,
                    fid: self.$route.query.id || 0
                }, (res) => {
                    if (res.ret == true) {
                        this.$message.success('删除成功');
                        self.tableData.splice(index, 1);
                    }
                })
            }
        }
    }
</script>

<style>

</style>