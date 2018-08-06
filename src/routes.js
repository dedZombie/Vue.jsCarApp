import SingleItem from './components/SingleItem'
import HomePage from './components/HomePage'

export default [
    {
        path: '/', 
        name: 'homepage',
        component: HomePage
    },
    {
        path: '/:car_id', 
        name: 'single-item',
        component: SingleItem
    }
]