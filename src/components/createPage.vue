<template>
    <form action="" class="container mb-3">

        <div class="row">

            <!-- This is on form data -->
            <div class="col-md-8">

                <div class="mb-3">
                    <label for="" class="form-label">
                        Page Title
                    </label>
                    <input type="text" class="form-control" v-model="pageTitle" />
                </div>

                <div class="mb-3">
                    <label for="" class="form-label">
                        content
                    </label>
                    <textarea type="text" class="form-control" rows="5" v-model="content"></textarea>
                </div>

            </div>

            <!-- This is another link form feilds-->

            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Link Text
                    </label>
                    <input type="text" class="form-control" v-model="linkText" />
                </div>

                <div class="mb-3">
                    <label for="" class="form-label">
                        Link Url
                    </label>
                    <input type="text" class="form-control" v-model="linkUrl" />
                </div>

                <div class="mb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="published">
                        <label class="form-check-label" for="gridCheck1">
                            Published
                        </label>
                    </div>

                </div>
            </div>

        </div>

        <div class="mb-3">
            <button class="btn btn-primary" :disabled="isFormInvalid" @click.prevent="submitForm">Create Page</button>
        </div>
    </form>
</template>

<script>

export default {
    // props: ['pageCrea ted'],
    emits: {
        pageCreated({ pageTitle, content, link }) {
            if (!pageTitle) {
                return false;
            }
            if (!content) {
                return false;
            }

            if (!link || !link.text || !link.url) {
                return false;
            }

            return true;
        }
    },
    computed: {
        isFormInvalid() {
            return !this.pageTitle || !this.content || !this.linkText || !this.linkUrl;
        }
    },
    data() {
        return {
            pageTitle: '',
            content: '',
            linkText: '',
            linkUrl: '',
            published: true

        }
    },

    methods: {
        submitForm() {
            console.log('Empty');

            if (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl) {
                alert('Please fill the form');
                return;
            }

            this.$emit('pageCreated',
                {
                    pageTitle: this.pageTitle,
                    content: this.content,
                    link: {
                        text: this.linkText,
                        url: this.linkUrl
                    },
                    published: this.published
                }
            );

            // this.pageCreated(
            // {
            //     pageTitle: this.pageTitle,
            //     content: this.content,
            //     link: {
            //         text: this.linkText,
            //         url: this.linkUrl
            //     },
            //     published: this.published
            // }
            // );

            this.pageTitle = '';
            this.content = '';
            this.linkText = '';
            this.linkUrl = '';
            this.published = true
        }
    },
    watch: {
        pageTitle(newValue, oldValue) {
            if (this.linkText == oldValue) {
                this.linkText = newValue;
            }
        }
    }
}
</script>

<!--

            Two way binding..

   (<input type="text" class="form-control" 
                :value="pageTitle"
                 @input="(e) => pageTitle = e.target.value"
                  />) ==   (<input type="text" class="form-control" v-model="pageTitle" />)

-->