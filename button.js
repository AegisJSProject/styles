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
}

.btn:disabled, .btn.disabled {
	cursor: not-allowed;
	opacity: var(--aegis-btn-disabled-opacity, 0.65);
	filter: saturate(var(--aegis-btn-disabled-saturation, 50%)) brightness(var(--aegis-btn-disabled-brightness, 90%));
}

.btn.disabled {
	pointer-events: none;
}`;

const primary = css`.btn.btn-primary {
	background-color: var(--aegis-btn-primary, ${btnPrimary});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${blue[6]};
}

.btn.btn-primary:hover, .btn.btn-primary:focus {
	background-color: var(--aegis-btn-primary-hover, ${btnPrimaryHover});
	border-color: ${blue[7]};
}

.btn.btn-primary:active {
	background-color: var(--aegis-btn-primary-active, ${btnPrimaryActive});
	border-color: ${blue[8]};
}

x.btn.btn-primary:disabled, .btn.btn-primary.disabled {
	background-color: var(--aegis-btn-active-disabled, ${btnDisabled});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[6]};
}`;

export const btnOutlinePrimary = css`.btn.btn-outline-primary {
	background-color: transparent;
	color: var(--aegis-btn-primary, ${btnPrimary});
	border-color: currentColor;
}

.btn.btn-outline-primary:hover, .btn.btn-outline-primary:focus {
	background-color: var(--aegis-btn-primary-hover, ${btnPrimaryHover});
	border-color: ${blue[7]};
	color: var(--aegis-color-dark, ${colorDark});
}

.btn.btn-outline-primary:active {
	background-color: var(--aegis-btn-primary-active, ${btnPrimaryActive});
	border-color: ${blue[8]};
	color: var(--aegis-color-dark, ${colorDark});
}

x.btn.btn-outline-primary:disabled, .btn.btn-outline-primary.disabled {
	color: var(--aegis-btn-active-disabled, ${btnDisabled});
}`;

const secondary = css`.btn.btn-secondary {
	background-color: var(--aegis-btn-secondary, ${btnSecondary});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${gray[7]};
}

.btn.btn-secondary:hover, .btn.btn-secondary:focus {
	background-color: var(--aegis-btn-secondary-hover, ${btnSecondaryHover});
	border-color: ${gray[8]};
}

.btn.btn-secondary:active {
	background-color: var(--aegis-btn-secondary-active, ${btnSecondaryActive});
	border-color: ${gray[9]};
}

x.btn.btn-secondary:disabled, .btn.btn-secondary.disabled {
	background-color: var(--aegis-btn-active-disabled, ${btnDisabled});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[6]};
}`;

export const btnOutlineSecondary = css`.btn.btn-outline-secondary {
	background-color: transparent;
	color: var(--aegis-btn-secondary, ${btnSecondary});
	border-color: currentColor;
}

.btn.btn-outline-secondary:hover, .btn.btn-outline-secondary:focus {
	background-color: var(--aegis-btn-secondary-hover, ${btnSecondaryHover});
	border-color: ${gray[8]};
	color: var(--aegis-color-dark, ${colorDark});
}

.btn.btn-outline-secondary:active {
	background-color: var(--aegis-btn-secondary-active, ${btnSecondaryActive});
	border-color: ${gray[9]};
	color: var(--aegis-color-dark, ${colorDark});
}

.btn.btn-outline-secondary:disabled, .btn.btn-outline-secondary.disabled {
	color: var(--aegis-btn-active-disabled, ${btnDisabled});
}`;

const success = css`.btn.btn-success {
	background-color: var(--aegis-btn-success, ${btnSuccess});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${green[6]};
}

.btn.btn-success:hover, .btn.btn-success:focus {
	background-color: var(--aegis-btn-success-hover, ${btnSuccessHover});
	border-color: ${green[7]};
}

.btn.btn-success:active {
	background-color: var(--aegis-btn-success-active, ${btnSuccessActive});
	border-color: ${green[8]};
}

x.btn.btn-success:disabled {
	background-color: var(--aegis-btn-active-disabled, ${btnDisabled});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[6]};
	cursor: not-allowed;
}`;

export const btnOutlineSuccess = css`.btn.btn-outline-success {
	background-color: transparent;
	color: var(--aegis-btn-success, ${btnSuccess});
	border-color: currentColor;
}

.btn.btn-outline-success:hover, .btn.btn-outline-success:focus {
	background-color: var(--aegis-btn-success-hover, ${btnSuccessHover});
	border-color: ${green[7]};
	color: var(--aegis-color-dark, ${colorDark});
}

.btn.btn-outline-success:active {
	background-color: var(--aegis-btn-success-active, ${btnSuccessActive});
	border-color: ${green[8]};
	color: var(--aegis-color-dark, ${colorDark});
}

x.btn.btn-outline-secondary:disabled, .btn.btn-outline-secondary.disabled {
	color: var(--aegis-btn-active-disabled, ${btnDisabled});
}`;

const info = css`.btn.btn-info {
	background-color: var(--aegis-btn-info, ${btnInfo});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${cyan[6]};
}

.btn.btn-info:hover, .btn.btn-info:focus {
	background-color: var(--aegis-btn-info-hover, ${btnInfoHover});
	border-color: ${cyan[7]};
}

.btn.btn-info:active {
	background-color: var(--aegis-btn-info-active, ${btnInfoActive});
	border-color: ${cyan[8]};
}

x.btn.btn-info:disabled, .btn.btn-info.disabled {
	background-color: var(--aegis-btn-active-disabled, ${btnDisabled});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[6]};
	cursor: not-allowed;
}`;

export const btnOutlineInfo = css`.btn.btn-outline-info {
	background-color: transparent;
	color: var(--aegis-btn-info, ${btnInfo});
	border-color: currentColor;
}

.btn.btn-outline-info:hover, .btn.btn-outline-info:focus {
	background-color: var(--aegis-btn-info-hover, ${btnInfoHover});
	border-color: ${cyan[7]};
	color: var(--aegis-color-dark, ${colorDark});
}

.btn.btn-outline-info:active {
	background-color: var(--aegis-btn-info-active, ${btnInfoActive});
	border-color: ${cyan[8]};
	color: var(--aegis-color-dark, ${colorDark});
}

x.btn.btn-outline-secondary:disabled, .btn.btn-outline-secondary.disabled {
	color: var(--aegis-btn-active-disabled, ${btnDisabled});
}`;

const danger = css`.btn.btn-danger {
	background-color: var(--aegis-btn-danger, ${btnDanger});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${red[6]};
}

.btn.btn-danger:hover, .btn.btn-danger:focus {
	background-color: var(--aegis-btn-danger-hover, ${btnDangerHover});
	border-color: ${red[7]};
}

.btn.btn-danger:active {
	background-color: var(--aegis-btn-danger-active, ${btnDangerActive});
	border-color: ${red[8]};
}

x.btn.btn-danger:disabled, .btn.btn-danger.disabled {
	background-color: var(--aegis-btn-active-disabled, ${btnDisabled});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[6]};
	cursor: not-allowed;
}`;

export const btnOutlineDanger = css`.btn.btn-outline-danger {
	background-color: transparent;
	color: var(--aegis-btn-danger, ${btnDanger});
	border-color: currentColor;
}

.btn.btn-outline-danger:hover, .btn.btn-outline-danger:focus {
	background-color: var(--aegis-btn-danger-hover, ${btnDangerHover});
	border-color: ${red[7]};
	color: var(--aegis-color-dark, ${colorDark});
}

.btn.btn-outline-danger:active {
	background-color: var(--aegis-btn-danger-active, ${btnDangerActive});
	border-color: ${red[8]};
	color: var(--aegis-color-dark, ${colorDark});
}

x.btn.btn-outline-secondary:disabled, .btn.btn-outline-secondary.disabled {
	color: var(--aegis-btn-active-disabled, ${btnDisabled});
}`;

const warning = css`.btn.btn-warning {
	background-color: var(--aegis-btn-warning, ${btnWarning});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${yellow[6]};
}

.btn.btn-warning:hover, .btn.btn-warning:focus {
	background-color: var(--aegis-btn-warning-hover, ${btnWarningHover});
	border-color: ${yellow[7]};
}

.btn.btn-warning:active {
	background-color: var(--aegis-btn-warning-active, ${btnWarningActive});
	border-color: ${yellow[8]};
}

x.btn.btn-warning:disabled, .btn.btn-warning.disabled {
	background-color: var(--aegis-btn-active-disabled, ${btnDisabled});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[6]};
	cursor: not-allowed;
}`;

export const btnOutlineWarning = css`.btn.btn-outline-warning {
	background-color: transparent;
	color: var(--aegis-btn-warning, ${btnWarning});
	border-color: currentColor;
}

.btn.btn-outline-warning:hover, .btn.btn-outline-warning:focus {
	background-color: var(--aegis-btn-warning-hover, ${btnWarningHover});
	border-color: ${yellow[7]};
	color: var(--aegis-color-light, ${colorLight});
}

.btn.btn-outline-warning:active {
	background-color: var(--aegis-btn-warning-active, ${btnWarningActive});
	border-color: ${yellow[8]};
	color: var(--aegis-color-light, ${colorLight});
}

x.btn.btn-outline-secondary:disabled, .btn.btn-outline-secondary.disabled {
	color: var(--aegis-btn-active-disabled, ${btnDisabled});
}`;

const light = css`.btn.btn-light {
	background-color: var(--aegis-btn-light, ${btnLight});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[2]};
}

.btn.btn-light:hover, .btn.btn-light:focus {
	background-color: var(--aegis-btn-light-hover, ${btnLightHover});
	border-color: ${gray[3]};
}

.btn.btn-light:active {
	background-color: var(--aegis-btn-light-active, ${btnLightActive});
	border-color: ${gray[4]};
}

x.btn.btn-light:disabled, .btn.btn-light.disabled {
	background-color: var(--aegis-btn-disabled, ${btnDisabled});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[5]};
	cursor: not-allowed;
}`;

export const btnOutlineLight = css`.btn.btn-outline-light {
	background-color: transparent;
	color: var(--aegis-btn-light, ${btnLight});
	border-color: currentColor;
}

.btn.btn-outline-light:hover, .btn.btn-outline-light:focus {
	background-color: var(--aegis-btn-light-hover, ${btnLightHover});
	border-color: ${gray[3]};
	color: var(--aegis-color-light, ${colorLight});
}

.btn.btn-outline-light:active {
	background-color: var(--aegis-btn-light-active, ${btnLightActive});
	border-color: ${gray[4]};
	color: var(--aegis-btn-light-active, ${btnLightActive});
}

x.btn.btn-outline-secondary:disabled, .btn.btn-outline-secondary.disabled {
	color: var(--aegis-color-light, ${colorLight});
}`;

const dark = css`.btn.btn-dark {
	background-color: var(--aegis-btn-dark, ${btnDark});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${gray[7]};
}

.btn.btn-dark:hover, .btn.btn-dark:focus {
	background-color: var(--aegis-btn-dark-hover, ${btnDarkHover});
	border-color: ${gray[8]};
}

.btn.btn-dark:active {
	background-color: var(--aegis-btn-dark-active, ${btnDarkActive});
	border-color: ${gray[9]};
}

x.btn.btn-dark:disabled, .btn.btn-dark.disabled {
	background-color: var(--aegis-btn-disabled, ${btnDisabled});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[6]};
	cursor: not-allowed;
}`;

export const btnOutlineDark = css`.btn.btn-outline-dark {
	background-color: transparent;
	color: var(--aegis-btn-dar, ${btnDark});
	border-color: currentColor;
}

.btn.btn-outline-dark:hover, .btn.btn-outline-dark:focus {
	background-color: var(--aegis-btn-dark-hover, ${btnDarkHover});
	border-color: ${gray[8]};
	color: var(--aegis-color-dark, ${colorDark});
}

.btn.btn-outline-dark:active {
	background-color: var(--aegis-btn-dark-active, ${btnDarkActive});
	border-color: ${gray[9]};
	color: var(--aegis-color-dark, ${colorDark});
}

.btn.btn-outline-secondary:disabled, .btn.btn-outline-secondary.disabled {
	color: var(--aegis-btn-active-disabled, ${btnDisabled});
}`;

const link = css`.btn.btn-link {
	background-color: var(--aegis-btn-link, ${btnLink});
	color: ${linkColor};
	border-color: transparent;
	text-decoration: none;
}

.btn.btn-link:hover, .btn.btn-link:focus {
	background-color: var(--aegis-btn-link-hover, ${btnLinkHover});
	text-decoration: underline;
}

.btn.btn-link:active {
	background-color: var(--aegis-btn-link-active, ${btnLinkActive});
	text-decoration: underline;
}

x.btn.btn-link:disabled, .btn.btn-link.disabled {
	color: var(--aegis-btn-disabled, ${gray[5]});
	cursor: not-allowed;
}`;

export {
	primary as btnPrimary, secondary as btnSecondary, success as btnSuccess, info as btnInfo,
	danger as btnDanger, warning as btnWarning, dark as btnDark, light as btnLight, link as btnLink,
};
