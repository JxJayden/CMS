import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/home',
        component: resolve => require(['../components/common/Home.vue'], resolve),
        children: [{
            path: '/',
            component: resolve => require(['../components/page/Index.vue'], resolve)
        },
        {
            path: '/basetable',
            component: resolve => require(['../components/page/BaseTable.vue'], resolve)
        },
        {
            path: '/vuetable',
            component: resolve => require(['../components/page/VueTable.vue'], resolve) // vue-datasource组件
        },
        {
            path: '/baseform',
            component: resolve => require(['../components/page/BaseForm.vue'], resolve)
        },
        {
            path: '/vueeditor',
            component: resolve => require(['../components/page/VueEditor.vue'], resolve) // Vue-Quill-Editor组件
        },
        {
            path: '/markdown',
            component: resolve => require(['../components/page/Markdown.vue'], resolve) // Vue-Quill-Editor组件
        },
        {
            path: '/upload',
            component: resolve => require(['../components/page/Upload.vue'], resolve) // Vue-Core-Image-Upload组件
        },
        {
            path: '/basecharts',
            component: resolve => require(['../components/page/BaseCharts.vue'], resolve) // vue-echarts-v3组件
        },
        {
            path: '/mixcharts',
            component: resolve => require(['../components/page/MixCharts.vue'], resolve) // vue-echarts-v3组件
        },
        // setting
        {
            path: '/basicmanage',
            component: resolve => require(['../components/page/basicManage/BasicManage.vue'], resolve)
        },
        {
            path: '/usermanage',
            component: resolve => require(['../components/page/basicManage/UserManage.vue'], resolve)
        },
        {
            path: '/navmanage',
            component: resolve => require(['../components/page/basicManage/NavManage.vue'], resolve)
        },
        {
            path: '/addpost',
            component: resolve => require(['../components/page/postManage/addPost.vue'], resolve)
        }]
    },
    {
        path: '/login',
        component: resolve => require(['../components/page/Login.vue'], resolve)
    }]
})
