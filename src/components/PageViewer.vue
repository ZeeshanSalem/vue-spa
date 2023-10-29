<template>
    <div v-if="page" class='container'>


        <h1 class="emphasize">{{ page.pageTitle }}</h1>
        <p>{{ page.content }}</p>

        <!-- <h1 class="emphasize">{{ page.pageTitle }}</h1>
        <p>{{ page.content }}</p> -->
    </div>
</template>  

<script >
export default {

    props: ['index'],


    // Routing..
    created() {

        this.page = this.$pages.getSinglePage(this.index);


        // Programatically handle  Watcher
        // One way of updating same page content
        // this.page = this.$pages.getSinglePage(this.$route.params.index);

        // this.$watch(() => this.$route.params, (newParams, prevParams) => {
        //     this.page = this.$pages.getSinglePage(newParams.index);
        // });

        /// 2nd way by props
    },

    data() {
        return {
            page: null,
        }
    },

    watch: {
        // 2nd way
        index(newIndex, oldIndex) {
            this.page = this.$pages.getSinglePage(newIndex);
        }
    }


}
</script> 

<style scoped>
.emphasize {
    color: blue;
}
</style>