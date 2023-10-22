<template>
    <nav class="navbar navbar-expand-lg" :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
        <div class="container-fluid">
            <a class="nav-brand" href="#">My Vue</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li v-for="(page, index) in pages" class="nav-item" :key="index">

                    <navbar-link :page="page" :isActive="activePage == index" @click.prevent="navLinkClick(index)">
                    </navbar-link>



                </li>
            </ul>

            <form class="d-flex">
                <!-- <button class="btn btn-primary" @click.prevent="useDarkNavBar = !useDarkNavBar">Toggle Nav Bar </button> -->
                <button class="btn btn-primary" @click.prevent="changeTheme()">Toggle Nav
                    Bar </button>

            </form>
        </div>
    </nav>
</template>

<script >

import NavbarLink from './Navbarlink.vue';

export default {
    props: ['pages', 'activePage', 'navLinkClick'],
    components: { NavbarLink },
    computed: {

        publishedPages() {
            return this.pages.filter(p => p.published);
        }
    },

    created() {
        this.getThemeSetting();
    },
    data() {
        return {
            theme: 'dark'

        }
    },


    methods: {
        changeTheme() {
            let theme = 'light';

            if (this.theme == 'light') {
                theme = 'dark';
            } else {
                theme = 'light';
            }

            this.theme = theme;
            this.storeThemeSetting();
        },

        storeThemeSetting() {
            localStorage.setItem('theme', this.theme);
        },

        getThemeSetting() {
            let theme = localStorage.getItem('theme');
            if (theme) {
                this.theme = theme;
            }

        },
    },

}
</script>