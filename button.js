import { css } from '@aegisjsproject/core/parsers/css.js';
import { blue, green, red, yellow, gray, cyan } from './palette/bootstrap.js';
import {
	colorLight, colorDark, btnPrimary, btnPrimaryActive, btnSecondary, btnSecondaryActive, btnSecondaryHover,
	btnPrimaryHover, btnDisabled, btnSuccess, btnSuccessActive, btnSuccessHover, btnDanger, btnDangerActive,
	btnDangerHover, btnWarning, btnWarningActive, btnWarningHover, btnInfo, btnInfoHover, btnInfoActive,
	btnLight, btnLightHover, btnLightActive, btnDark, btnDarkHover, btnDarkActive, btnLink, btnLinkHover,
	btnLinkActive, linkColor,
} from './palette/aegis.js';

export const btn = css`.btn:not([hidden]) {
	cursor: pointer;
	display: inline-block;
	padding: 0.6em 1.3em;
	border-width: 1px;
	border-style: solid;
	appearance: button;
	line-height: 1.5;
	text-align: center;
	vertical-align: middle;
	font-family: inherit;
	font-size: 1rem;
	border-radius: var(--aegis-btn-border-radius, 5px);
	text-decoration: none;
	transition: background-color 150ms ease-in-out, border-color 150ms ease-in-out, color 150ms ease-in-out;
}

.btn.btn-sm {
	padding: 0.5em 1em;
	font-size: 0.7rem;
}

.btn.btn-lg {
	padding: 0.5em 1.1em;
	font-size: 1.3rem;
}

.btn.btn-block {
	display: block;
	width: 100%;
}`;

const primary = css`.btn.btn-primary:not(:disabled):not(.disabled) {
	background-color: var(--aegis-btn-primary, ${btnPrimary});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${blue[6]};
}

.btn.btn-primary:not(:disabled):not(.disabled):hover, .btn.btn-primary:not(:disabled):not(.disabled):focus {
	background-color: var(--aegis-btn-primary-hover, ${btnPrimaryHover});
	border-color: ${blue[7]};
}

.btn.btn-primary:not(:disabled):not(.disabled):active {
	background-color: var(--aegis-btn-primary-active, ${btnPrimaryActive});
	border-color: ${blue[8]};
}

.btn.btn-primary:disabled, .btn.btn-primary.disabled {
	background-color: var(--aegis-btn-active-disabled, ${btnDisabled});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[6]};
	cursor: not-allowed;
}`;

const secondary = css`.btn.btn-secondary:not(:disabled):not(.disabled) {
	background-color: var(--aegis-btn-secondary, ${btnSecondary});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${gray[7]};
}

.btn.btn-secondary:not(:disabled):not(.disabled):hover, .btn.btn-secondary:not(:disabled):not(.disabled):focus {
	background-color: var(--aegis-btn-secondary-hover, ${btnSecondaryHover});
	border-color: ${gray[8]};
}

.btn.btn-secondary:not(:disabled):not(.disabled):active {
	background-color: var(--aegis-btn-secondary-active, ${btnSecondaryActive});
	border-color: ${gray[9]};
}

.btn.btn-secondary:disabled, .btn.btn-secondary.disabled {
	background-color: var(--aegis-btn-active-disabled, ${btnDisabled});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[6]};
	cursor: not-allowed;
}`;

const success = css`.btn.btn-success:not(:disabled):not(.disabled) {
	background-color: var(--aegis-btn-success, ${btnSuccess});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${green[6]};
}

.btn.btn-success:not(:disabled):not(.disabled):hover, .btn.btn-success:not(:disabled):not(.disabled):focus {
	background-color: var(--aegis-btn-success-hover, ${btnSuccessHover});
	border-color: ${green[7]};
}

.btn.btn-success:not(:disabled):not(.disabled):active {
	background-color: var(--aegis-btn-success-active, ${btnSuccessActive});
	border-color: ${green[8]};
}

.btn.btn-success:disabled {
	background-color: var(--aegis-btn-active-disabled, ${btnDisabled});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[6]};
	cursor: not-allowed;
}`;

const info = css`.btn.btn-info:not(:disabled):not(.disabled) {
	background-color: var(--aegis-btn-info, ${btnInfo});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${cyan[6]};
}

.btn.btn-info:not(:disabled):not(.disabled):hover, .btn.btn-info:not(:disabled):not(.disabled):focus {
	background-color: var(--aegis-btn-info-hover, ${btnInfoHover});
	border-color: ${cyan[7]};
}

.btn.btn-info:not(:disabled):not(.disabled):active {
	background-color: var(--aegis-btn-info-active, ${btnInfoActive});
	border-color: ${cyan[8]};
}

.btn.btn-info:disabled, .btn.btn-info.disabled {
	background-color: var(--aegis-btn-active-disabled, ${btnDisabled});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[6]};
	cursor: not-allowed;
}`;

const danger = css`.btn.btn-danger:not(:disabled):not(.disabled) {
	background-color: var(--aegis-btn-danger, ${btnDanger});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${red[6]};
}

.btn.btn-danger:not(:disabled):not(.disabled):hover, .btn.btn-danger:not(:disabled):not(.disabled):focus {
	background-color: var(--aegis-btn-danger-hover, ${btnDangerHover});
	border-color: ${red[7]};
}

.btn.btn-danger:not(:disabled):not(.disabled):active {
	background-color: var(--aegis-btn-danger-active, ${btnDangerActive});
	border-color: ${red[8]};
}

.btn.btn-danger:disabled, .btn.btn-danger.disabled {
	background-color: var(--aegis-btn-active-disabled, ${btnDisabled});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[6]};
	cursor: not-allowed;
}`;

const warning = css`.btn.btn-warning:not(:disabled):not(.disabled) {
	background-color: var(--aegis-btn-warning, ${btnWarning});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${yellow[6]};
}

.btn.btn-warning:not(:disabled):not(.disabled):hover, .btn.btn-warning:not(:disabled):not(.disabled):focus {
	background-color: var(--aegis-btn-warning-hover, ${btnWarningHover});
	border-color: ${yellow[7]};
}

.btn.btn-warning:not(:disabled):not(.disabled):active {
	background-color: var(--aegis-btn-warning-active, ${btnWarningActive});
	border-color: ${yellow[8]};
}

.btn.btn-warning:disabled, .btn.btn-warning.disabled {
	background-color: var(--aegis-btn-active-disabled, ${btnDisabled});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[6]};
	cursor: not-allowed;
}`;

const light = css`.btn.btn-light:not(:disabled):not(.disabled) {
	background-color: var(--aegis-btn-light, ${btnLight});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[2]};
}

.btn.btn-light:not(:disabled):not(.disabled):hover, .btn.btn-light:not(:disabled):not(.disabled):focus {
	background-color: var(--aegis-btn-light-hover, ${btnLightHover});
	border-color: ${gray[3]};
}

.btn.btn-light:not(:disabled):not(.disabled):active {
	background-color: var(--aegis-btn-light-active, ${btnLightActive});
	border-color: ${gray[4]};
}

.btn.btn-light:disabled, .btn.btn-light.disabled {
	background-color: var(--aegis-btn-disabled, ${btnDisabled});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[5]};
	cursor: not-allowed;
}`;

const dark = css`.btn.btn-dark:not(:disabled):not(.disabled) {
	background-color: var(--aegis-btn-dark, ${btnDark});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${gray[7]};
}

.btn.btn-dark:not(:disabled):not(.disabled):hover, .btn.btn-dark:not(:disabled):not(.disabled):focus {
	background-color: var(--aegis-btn-dark-hover, ${btnDarkHover});
	border-color: ${gray[8]};
}

.btn.btn-dark:not(:disabled):not(.disabled):active {
	background-color: var(--aegis-btn-dark-active, ${btnDarkActive});
	border-color: ${gray[9]};
}

.btn.btn-dark:disabled, .btn.btn-dark.disabled {
	background-color: var(--aegis-btn-disabled, ${btnDisabled});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${gray[6]};
	cursor: not-allowed;
}`;

const link = css`.btn.btn-link:not(:disabled):not(.disabled) {
	background-color: var(--aegis-btn-link, ${btnLink});
	color: ${linkColor};
	border-color: transparent;
	text-decoration: none;
}

.btn.btn-link:not(:disabled):not(.disabled):hover, .btn.btn-link:not(:disabled):not(.disabled):focus {
	background-color: var(--aegis-btn-link-hover, ${btnLinkHover});
	text-decoration: underline;
}

.btn.btn-link:not(:disabled):not(.disabled):active {
	background-color: var(--aegis-btn-link-active, ${btnLinkActive});
	text-decoration: underline;
}

.btn.btn-link:disabled, .btn.btn-link.disabled {
	color: var(--aegis-btn-disabled, ${gray[5]});
	cursor: not-allowed;
}`;

export {
	primary as btnPrimary, secondary as btnSecondary, success as btnSuccess, info as btnInfo,
	danger as btnDanger, warning as btnWarning, dark as btnDark, light as btnLight, link as btnLink,
};
