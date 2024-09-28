import { css } from '@aegisjsproject/core/parsers/css.js';
import { blue, green, red, yellow, gray } from './palette/bootstrap.js';
import {
	colorLight, colorDark, btnPrimary, btnPrimaryActive,
	btnPrimaryHover, btnDisabled, btnSuccess, btnSuccessActive, btnSuccessHover, btnDanger, btnDangerActive,
	btnDangerHover, btnWarning, btnWarningActive, btnWarningHover,
} from './palette/aegis.js';

export const btn = css`.btn:not([hidden]) {
	cursor: pointer;
	appearance: button;
	display: inline-block;
	padding: 0.6em 1.3em;
	font-family: inherit;
	border-radius: 4px;
	text-decoration: none;
	border-width: 1px;
	border-style: solid;
	transition: background-color 150ms ease-in-out, border-color 150ms ease-in-out, color 150ms ease-in-out;
}

.btn.btn-small {
	padding: 0.5em 1em;
	font-size: 0.7em;
}

.btn.btn-big {
	padding: 0.7em 1.3em;
	font-size: 1.3em;
}`;

const primary = css`.btn.btn-primary {
	background-color: var(--aegis-btn-primary, ${btnPrimary});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${blue[6]};
}

.btn.btn-primary:not(:disabled):hover, .btn.btn-primary:not(:disabled):focus {
	background-color: var(--aegis-btn-primary-hover, ${btnPrimaryHover});
	border-color: ${blue[7]};
}

.btn.btn-primary:not(:disabled):active {
	background-color: var(--aegis-btn-primary-active, ${btnPrimaryActive});
	border-color: ${blue[8]};
}

.btn.btn-primary:disabled {
	background-color: var(--aegis-btn-active-disabled, ${btnDisabled});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[6]};
	cursor: not-allowed;
}`;

const success = css`.btn.btn-success {
	background-color: var(--aegis-btn-success, ${btnSuccess});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${green[6]};
}

.btn.btn-success:not(:disabled):hover, .btn.btn-success:not(:disabled):focus {
	background-color: var(--aegis-btn-success-hover, ${btnSuccessHover});
	border-color: ${blue[7]};
}

.btn.btn-success:not(:disabled):active {
	background-color: var(--aegis-btn-success-active, ${btnSuccessActive});
	border-color: ${blue[8]};
}

.btn.btn-success:disabled {
	background-color: var(--aegis-btn-active-disabled, ${btnDisabled});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[6]};
	cursor: not-allowed;
}`;

const danger = css`.btn.btn-danger {
	background-color: var(--aegis-btn-danger, ${btnDanger});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${red[6]};
}

.btn.btn-danger:not(:disabled):hover, .btn.btn-danger:not(:disabled):focus {
	background-color: var(--aegis-btn-danger-hover, ${btnDangerHover});
	border-color: ${red[7]};
}

.btn.btn-danger:not(:disabled):active {
	background-color: var(--aegis-btn-danger-active, ${btnDangerActive});
	border-color: ${red[8]};
}

.btn.btn-danger:disabled {
	background-color: var(--aegis-btn-active-disabled, ${btnDisabled});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[6]};
	cursor: not-allowed;
}`;

const warning = css`.btn.btn-warning {
	background-color: var(--aegis-btn-warning, ${btnWarning});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${yellow[6]};
}

.btn.btn-warning:not(:disabled):hover, .btn.btn-warning:not(:disabled):focus {
	background-color: var(--aegis-btn-warning-hover, ${btnWarningHover});
	border-color: ${yellow[7]};
}

.btn.btn-warning:not(:disabled):active {
	background-color: var(--aegis-btn-warning-active, ${btnWarningActive});
	border-color: ${yellow[8]};
}

.btn.btn-warning:disabled {
	background-color: var(--aegis-btn-active-disabled, ${btnDisabled});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[6]};
	cursor: not-allowed;
}`;

export { primary as btnPrimary, success as btnSuccess, danger as btnDanger, warning as btnWarning };
