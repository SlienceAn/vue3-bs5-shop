import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faUserSecret,
    faFacebookSquare,
    faInstagram,
    faTwitterSquare,
    faLinkedin
)

const app = createApp(App)
app.component('font-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')


