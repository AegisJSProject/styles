import { btn, reset, baseTheme, darkTheme, lightTheme } from '@aegisjsproject/styles';
import { addStyles } from '@aegisjsproject/core';

addStyles(document, btn, reset, baseTheme, darkTheme, lightTheme);

document.getElementById('toggle').addEventListener('click', () => {
	switch(document.documentElement.dataset.theme) {
		case 'light':
			document.documentElement.dataset.theme = 'dark';
			break;

		case 'dark':
			document.documentElement.dataset.theme = 'auto';
			break;

		default:
			document.documentElement.dataset.theme = 'light';
	}

	document.getElementById('cur').textContent = document.documentElement.dataset.theme;
});
