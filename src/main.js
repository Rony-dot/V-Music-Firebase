import { createApp } from 'vue'
import App from './App.vue'

import store from "./store.js"

import {library} from "@fortawesome/fontawesome-svg-core";
import { faPlay, faPause, faTrash} from '@fortawesome/free-solid-svg-icons';
library.add(faPlay,faPause,faTrash)


createApp(App).component("store",store).mount('#app')
// const app = createApp(App);
// app.component("store",store);
// app.mount('#app');