<template>
    <div class="row">
        <div class="container">
            <h1 class="indigo-text text-lighten-2">{{ msg }}</h1>
            <div class="card hoverable col s12 m6 l3" v-for="info in information.slice(0,4)" :key="info.id" >
                <div class="card-content grey lighten-2">
                    <div class="card-image">
                        <img :src="info.image_src" alt="" style="width:100%; height: 100px;">
                    </div>
                    <ul class="collection">
                        {{ info.name }} <br>
                        {{ info.model }} <br>
                        {{ info.year }} <br>
                        {{ info.price }} <span>€</span>
                    </ul>
                    <router-link class="btn-floating waves-effect waves-light red" v-bind:to="{name:'single-item', params:{car_id: info.id}}">
                        <i class="material-icons">drive_eta</i>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'

export default {
    data () {
        return {
            information: [],
            msg: 'Most recently addded'
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