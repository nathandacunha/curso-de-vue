import { createApp} from "vue";
import App from './App.vue';
import ExpandBox from './components/ExpandBox.vue'

const app = createApp(App);
app.component('ExpandBox', ExpandBox)
app.mount('#app')
