<template>
	<div class="w-40 h-10 m-4">
		<label
			for="locale-changer"
			name="locale-changer"
			class="text-stone-900 tracking-tight text-sm font-semibold"
		>{{ translate('locale-changer-label') }}</label>
		<select
			id="locale-changer"
			v-model="locale"
			class="w-full h-full p-2 bg-white text-stone-600 border-stone-200 font-semibold border-2 rounded-lg"
		>
			<option
				v-for="locale in availableLocales"
				:key="`lang-${locale}`"
				:value="locale"
			>{{ translate(`locale.${locale}`) }}</option>
		</select>
	</div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t: translate, locale, availableLocales } = useI18n();
</script>
