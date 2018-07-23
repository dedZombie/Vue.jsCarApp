<template>
    <div class="row">
      <div class="container">
        <h4>{{ msgRecently }}</h4>
        <div v-for="vehicle in 4" :key="vehicle.id">
            <app-home ></app-home>
        </div>

        <h4>{{ msgMostViewed }}</h4>
        
        
      </div>
    </div>
</template>

<script>
import db from './firebaseInit'
import HomePage from './HomePage'

export default {
    name: 'dashboard',
    components: {
        'app-home': HomePage
    },
    data () {
        return {
            items: [{
                HomePage
            }],
            vehicles: [],
            msgRecently: 'Most Recently Added',
            msgMostViewed: 'Most Viewed'
        }
    },
    created() {
        db.collection('vehicles').orderBy('car_id').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'car_id': doc.data().car_id,
                    'distance': doc.data().distance,
                    'engine_size': doc.data().engine_size,
                    'engine_type': doc.data().engine_type,
                    'image_src': doc.data().image_src,
                    'model': doc.data().model,
                    'name': doc.data().name,
                    'power': doc.data().power,
                    'price': doc.data().price,
                    'type': doc.data().type,
                    'year': doc.data().year
                }
                this.vehicles.push(data)
            })
        })
    }
}
</script>
