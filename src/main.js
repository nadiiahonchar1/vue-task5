import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.component('async-component',defineAsyncComponent(()=>{return import("./components/AppAsyncComponent.vue");}))
app.mount("#app");
