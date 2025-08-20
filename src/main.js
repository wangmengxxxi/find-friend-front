import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import { Button } from 'vant'
import { NavBar } from 'vant'
import { Tabbar, TabbarItem } from 'vant'
import { Icon } from 'vant'

const app = createApp(App)
app.use(Tabbar)
app.use(TabbarItem)
app.use(NavBar)
app.use(createPinia())
app.use(router)
app.use(Button)
app.use(Icon)
app.mount('#app')
