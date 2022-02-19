<template>
	<main class="flex px-20 py-5">
		<span>{{ translate("welcome") }}</span>
		<LanguageSelector />
		<teleport to="body">
			<Vue3Snackbar bottom right :duration="1500" />
		</teleport>
	</main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Vue3Snackbar } from 'vue3-snackbar';
import LanguageSelector from './components/language-selector/LanguageSelector.vue';

const { t: translate } = useI18n();

</script>

<style>
</style>
