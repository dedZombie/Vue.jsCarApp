<template>
    <div class="container">
        <div class="col s12 m7">
            <h2 class="header">{{ car_name}} {{car_model}}</h2>
            <div class="card horizontal">
                <div class="card-image" style="overflow:hidden;height:300px;">
                    <li v-for="(image, index) in images" v-bind:key="image.index" class="item">
                        <img v-lazy="image.src" @click="openGallery(index)">
                    </li>
                    <Lightbox :images="images"
                                ref="lightbox"
                                :show-caption="true"
                                :show-light-box="false">
                    </Lightbox>
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Lightbox from 'vue-image-lightbox'
import images from '../images'

require('vue-image-lightbox/dist/vue-image-lightbox.min.css')

export default {
    components: {
        Lightbox
    },
    name: 'single-item',
    data () {
        return {
            images,
        }   
    },
    methods: {
        openGallery(index){
            this.$refs.lightbox.showImage(index)
        }
    }
}

</script>

<style scoped>
.item{
    cursor: pointer;
    list-style-type: none;
}
.item:not(:first-child){
    display: none;
}
</style>