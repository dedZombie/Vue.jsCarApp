import SingleItem from './components/SingleItem'
import Dashboard from './components/Dashboard'

export default [
    {
        path: '/', 
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/:car_id', 
        name: 'single-item',
        component: SingleItem
    }
]