<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 文章管理</el-breadcrumb-item>
                <el-breadcrumb-item>列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-table :data="postData"
                  border
                  style="width: 100%">
            <el-table-column prop="date"
                             label="创建日期"
                             sortable
                             :formatter="dateFormatter">
            </el-table-column>
            <el-table-column prop="title"
                             label="标题">
            </el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <el-button size="small"
                               type="success"
                               v-if="scope.row._draft === true"
                               @click="handleChangeDraft(scope.$index, scope.row)">发布文章</el-button>
                    <el-button size="small"
                               type="warning"
                               v-else
                               @click="handleChangeDraft(scope.$index, scope.row)">存为草稿</el-button>
                    <el-button size="small"
                               type="primary"
                               @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small"
                               type="danger"
                               @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--<div class="pagination">
            <el-pagination layout="prev, pager, next"
                           :total="1000">
            </el-pagination>
        </div>-->
    </div>
</template>

<script>
import { _delete, _get, _put } from '../../../lib/utils'
import { API } from '../../../lib/config'
export default {
    data() {
        return {
            postData: null
        }
    },
    mounted() {
        this.getPostData()
    },
    methods: {
        getPostData() {
            _get(this, API.POST, function (data) {
                this.postData = data
            })
        },
        dateFormatter(row, column) {
            return row.date.slice(0, row.date.indexOf('T'))
        },
        handleEdit(index, row) {
            this.$router.push({ name: 'editPost', params: { id: row._id }})
        },
        handleDelete(index, row) {
            _delete(this, API.POST, { id: row._id }, function () {
                this.$message.success('删除成功')
                this.getPostData()
            })
        },
        handleChangeDraft(index, row) {
            const data = {
                draft: !row._draft,
                id: row._id
            }
            _put(this, API.POST_DRAFT, data, function (data) {
                this.$message.success('修改成功')
                this.getPostData()
            })
        }
    }
}
</script>

<style scoped>

</style>
