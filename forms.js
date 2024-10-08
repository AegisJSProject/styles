import { css } from '@aegisjsproject/parsers/css.js';

export const forms = css`.form-group {
	border: 1px solid transparent;
	padding: var(--form-group-padding, 0.4em 0.8em);
	margin-bottom: 0.4em;
	border-radius: 6px;
	transition: border-color 200ms ease-in-out;
}

.form-group:focus-within {
	border-color: var(--form-group-border, #cacaca);
}

.form-group .input-label {
	display: block;
	margin: 0.4em 0;
}

.form-group .input-label.required::after {
	content: ' *';
	display: inline;
	font-size: 0.8em;
	font-weight: 800;
}

.form-group .input, .form-group .input:required:invalid:placeholder-shown {
	display: block;
	width: var(--input-width, 100%);
	max-width: 100%;
	color: currentColor;
	border-style: solid;
	border-color: var(--input-border, #cacaca);
	border-width: 0 0 1px 0;
	background: transparent;
	padding: var(--form-group-padding, 0.5em 0.3em);
	transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
}

.form-group textarea.input {
	resize: vertical;
}

.form-group .input:invalid {
	box-shadow: none;
}

.form-group .input:invalid:not(:focus) {
	color: var(--invalid-color, #-871717);
	border-color: currentColor;
	background-color: var(--invalid-background, #F7C1C1);
}

.form-group input[hidden] + label[for].btn-toggle {
	background-color: var(--button-disabled-background);
	margin: var(--form-group-margin, 0.3rem);
	transition: background-color 300ms ease-in-out;
}

.form-group input[hidden]:checked + label[for].btn-toggle {
	background-color: var(--button-background);
}

.form-group input[hidden]:not(:checked) + label[for].btn-toggle .when-checked {
	display: none;
}

.form-group input[hidden]:checked + label[for].btn-toggle .when-unchecked {
	display: none;
}`;
