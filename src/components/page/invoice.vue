<template>
    <div class="table">
        <div class="crumbs">
            <el-row>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item><i class="el-icon-menu"></i> 工作台</el-breadcrumb-item>
                    <el-breadcrumb-item>发票信息</el-breadcrumb-item>
                </el-breadcrumb>
            </el-row>
        </div>

        <div class="crumbs">
            <el-form :inline="true" style="float: left;">
                <el-form-item>
                    <el-input
                            class="inline"
                            placeholder="请输入票据号码搜索"
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
            <el-button type="success" style="float:right;margin-right: 20px;" @click="">导出</el-button>
            <!--<el-row>
                <el-col :span="24">
                    <el-button type="primary" style="float:right;">导出</el-button>
                </el-col>
            </el-row>-->
        </div>

        <el-table :data="tableData" v-loading.body="loading" border style="width: 100%">
            <el-table-column prop="A_pjhm" label="票据号码"></el-table-column>
            <el-table-column prop="B_pmje" label="票面金额"></el-table-column>
            <el-table-column prop="C_kpsj" label="开票时间"></el-table-column>
            <el-table-column
		      	prop="tag"
		      	label="发票类型"
		      	:filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
		      	:filter-method="filterTag"
		      	filter-placement="bottom-end">
		      	<template scope="scope">
		        	<el-tag
		          		:type="scope.row.tag === '家' ? 'primary' : 'success'"
		          		close-transition>{{scope.row.tag}}</el-tag>
		      	</template>
		    </el-table-column>
        </el-table>
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
                tableData: [],
                loading: true,
                qiniuInitState: false,

            }
        },
        created(){
            this.getData();
        },
        methods: {
            pickerOptions0: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            },

        	filterTag(value, row){

        	},
            getData(){
                this.loading = true;
                this.$axios.post('getBillData', {
                    pn: this.cur_page,
                    search: this.keyword,
                    startTime: this.startTime,
                    endTime: this.endTime
                }, (res) => {
                    if (res.ret == true) {
                        this.tableData = res.data;
                        this.loading = false
                    }
                })
            },
            add(){
                let self = this;

                this.$axios.post('addBanner', self.form, (res) => {
                    if (res.ret == true) {
                        self.getData();
                        self.$message.success('添加成功');
                    }
                })
            },
            del(index, row) {
                let self = this;

                this.$axios.post('delBanner', {
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