<template>
    <li>
        <router-link v-bind:to="`/${index}`" class="nav-link" :class="activeClasses" aria-current="page"
            :title="`this link goes to ${page.link.text}`">{{
                page.link.text
            }}</router-link>
    </li>
</template>

<script>
export default {
    props: ['page', 'index', 'isActive'],
    computed: {
        activeClasses() {
            return {
                active: this.isActive,
                emphasize: this.isActive,
            };
        }
    }
}
</script>

<style scoped>
.emphasize {
    text-decoration: underline !important;
}
</style>