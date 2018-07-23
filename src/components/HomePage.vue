<template>
    <div class="col s12 m6 l3">
        <div class="card hoverable">
            <div class="card-image">
                <img v-bind:src="photos" class="responsive-img">
                <!-- <span class="card-title red-text accent">Renaul Scenic</span> -->
                <!-- <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">edit</i></a> -->
            </div>
            <div class="card-content grey lighten-2">
                <ul class="collection">
                    <li v-for="info in information" :key="info.id" class="collection-item grey darken-1 white-text"> 
                        {{ info.name }} <br>
                        {{ info.model }} <br>
                        {{ info.year }} <br>
                        {{ info.price }} <span>€</span>
                        <router-link class="btn-floating waves-effect waves-light red" v-bind:to="{name:'single-item', params:{car_id: info.car_id}}">
                            <i class="material-icons">drive_eta</i>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
import images from '../images'

export default {
    data () {
        return {
            information: [],
            images,
            photos: images[0].src
        }
    },
    methods: {

    },
    created() {
        db.collection('vehicles').orderBy('car_id').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                // console.log(doc.data());
                const data = {
                    'id': doc.id,
                    'car_id': doc.data().car_id,
                    'image_src': doc.data().image_src,
                    'name': doc.data().name,
                    'model': doc.data().model,
                    'year': doc.data().year,
                    'price': doc.data().price
                }
                this.information.push(data)
            })
        })
    }
}
</script>

<style>

</style>