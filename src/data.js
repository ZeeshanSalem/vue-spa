const pageKey = 'pages';

let pageJson = localStorage.getItem(pageKey);

let pageStore = JSON.parse(pageJson);


export default {
    getAllPages() {
        return pageStore;
    },

    getSinglePage(index) {
        return pageStore[index];
    }
}