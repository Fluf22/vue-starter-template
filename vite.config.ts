import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import Icons from 'unplugin-icons/vite'

export default defineConfig({
	plugins: [
		vue(),
		vueI18n({
			include: path.resolve(__dirname, './src/i18n/locales/**')
		}),
		Icons({ compiler: 'vue3' })
	]
})
