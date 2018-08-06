<template>
    <div class="container">
        <div class="col s12 m7">
            <h2 class="header"></h2>
            <div class="card horizontal">
                <div class="card-image">
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
import db from './firebaseInit'
require('vue-image-lightbox/dist/vue-image-lightbox.min.css')

export default {
    components: {
        Lightbox
    },
    name: 'single-item',
    data () {
        return {
            images,
            items: {}
        }   
    },
    methods: {
        openGallery(index){
            this.$refs.lightbox.showImage(index)
        }        
    },
    created() {
        var vehiclesRef = db.collection("vehicles").doc(this.$route.params.id)
        console.log("Document ref: ", vehiclesRef)
        vehiclesRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data())
                this.items = doc.data()
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error)
        });

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