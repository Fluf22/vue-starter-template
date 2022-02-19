import { createApp } from 'vue';
import { SnackbarService, Vue3Snackbar } from "vue3-snackbar";
import "vue3-snackbar/dist/style.css";
import App from './App.vue';
import { i18n } from './i18n';
import "@fontsource/open-sans";
import './index.css';

createApp(App)
	.use(i18n)
	.use(SnackbarService)
	.component("vue3-snackbar", Vue3Snackbar)
	.mount('#app');
