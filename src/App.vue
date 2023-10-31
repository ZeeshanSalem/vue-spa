<template>
    <!-- <navbar :pages="pages" :active-page="activePage"></navbar> -->

        <navbar></navbar>

    <router-view></router-view>
    
    <!-- this is for with out router -->
    <!-- <div v-show="false"> hide this content</div>
    <page-viewer v-if="pages.length > 0" :page="pages[activePage]"></page-viewer>

    <createPage @page-created="pageCreated"></createPage> -->
</template>


<script>

import Navbar from './components/Navbar.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';



export default {
    components: {
        Navbar,
        
    },

    // created() {
    //     this.getPages();
    //     this.$bus.$on('navbarLinkActived', (index) => {
    //         this.activePage = index;
    //     })
    // },


    // data() {
    //     return {
    //         activePage: 0,
    //         // useDarkNavBar: true,
    //         pages: [],
    //     };
    // },

    methods: {
        // async getPages() {
        //     let res = await fetch('pages.json');
        //     let data = await res.json();
        //     this.pages = data;
        // },

        pageCreated(pageObj) {
            this.pages.push(pageObj);
        }
    },


}

</script>