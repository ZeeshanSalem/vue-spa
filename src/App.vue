<template>
    <navbar :pages="pages" :active-page="activePage"></navbar>


    <div v-show="false"> hide this content</div>
    <page-viewer v-if="pages.length > 0" :page="pages[activePage]"></page-viewer>

    <createPage @page-created="pageCreated"></createPage>
</template>


<script>

import PageViewer from './components/PageViewer.vue';
import Navbar from './components/Navbar.vue';
import CreatePage from './components/createPage.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';



export default {
    components: {
        Navbar,
        PageViewer,
        CreatePage,
    },

    created() {
        this.getPages();
        this.$bus.$on('navbarLinkActived', (index) => {
            this.activePage = index;
        })
    },


    data() {
        return {
            activePage: 0,
            // useDarkNavBar: true,
            pages: [],
        };
    },

    methods: {
        async getPages() {
            let res = await fetch('pages.json');
            let data = await res.json();
            this.pages = data;
        },

        pageCreated(pageObj) {
            this.pages.push(pageObj);
        }
    },


}

</script>