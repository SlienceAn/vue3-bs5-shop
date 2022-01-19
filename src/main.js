import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'
import {
    faFacebookSquare,
    faInstagram,
    faTwitterSquare,
    faLinkedin,
    faYoutube,
    faGooglePlay,
    faApple,
    faCcVisa,
    faCcApplePay,
    faCcMastercard
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faShoppingCart,
    faFacebookSquare,
    faInstagram,
    faTwitterSquare,
    faLinkedin,
    faYoutube,
    faApple,
    faGooglePlay,
    faCcVisa,
    faCcApplePay,
    faCcMastercard,
    faStar
)

const app = createApp(App)
app.component('font-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')


