import { css } from '@aegisjsproject/core/core.js';
import { primary, blue, light } from './palette/bootstrap.js';

export const btn = css`.btn:not([hidden]) {
	cursor: pointer;
	appearance: button;
	display: inline-block;
	padding: 0.6em 1.3em;
	font-family: inherit;
	border-radius: 4px;
	text-decoration: none;
}

.btn.btn-primary {
	color: ${light};
	background-color: ${primary};
	border-width: 1px;
	border-style: solid;
	border-color: ${blue[6]});
	transition: background-color 150ms ease-in-out, border-color 150ms ease-in-out;
}

.btn.btn-primary:hover {
	background-color: ${blue[5]};
	border-color: ${blue[7]};
}

.btn.btn-primary:active {
	background-color: ${blue[6]};
	border-color: ${blue[8]};
}`;
