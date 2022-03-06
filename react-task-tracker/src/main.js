import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import About from "./components/About.vue";
import reportWebVitals from "./reportWebVitals";
import SimpleVueIcon from "simple-vue-icon";
import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";

const router = createRouter({
	routes: [
		{ path: "/", component: Home },
		{ path: "/about", component: About },
	],
	history: createWebHistory(),
});

const app = createApp(App);
app.use(SimpleVueIcon);
app.use(router);
app.mount("#app");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
