import { createApp } from 'vue'
import App from './App.vue'
import {library} from "@fortawesome/fontawesome-svg-core";
import { faPlay, faPause, faTrash} from '@fortawesome/free-solid-svg-icons';
library.add(faPlay,faPause,faTrash)


createApp(App).mount('#app')
