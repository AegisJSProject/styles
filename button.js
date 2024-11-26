import { css } from '@aegisjsproject/parsers/css.js';
import { blue, green, red, yellow, gray, cyan } from './palette/bootstrap.js';
import { SUPPORTS_CUSTOM_STATES } from './consts.js';
import {
	colorLight, colorDark, btnPrimary, btnPrimaryActive, btnSecondary, btnSecondaryActive, btnSecondaryHover,
	btnPrimaryHover, btnDisabled, btnSuccess, btnSuccessActive, btnSuccessHover, btnDanger, btnDangerActive,
	btnDangerHover, btnWarning, btnWarningActive, btnWarningHover, btnInfo, btnInfoHover, btnInfoActive,
	btnLight, btnLightHover, btnLightActive, btnDark, btnDarkHover, btnDarkActive, btnLink, btnLinkHover,
	btnLinkActive, linkColor,
} from './palette/aegis.js';

const DISABLED_STATE = SUPPORTS_CUSTOM_STATES ? ':state(--disabled)' : '._state--disabled';

const DISABLED = `:disabled, .disabled, ${DISABLED_STATE}`;

export const btn = css`.btn:not([hidden]) {
	cursor: pointer;
	display: inline-block;
	padding: 0.6em 1.3em;
	border-width: var(--aegis-btn-border-width, 0px);
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

.btn:disabled:not(.btn-system, .btn-system-accent), .btn.disabled:not(.btn-system, .btn-system-accent), .btn${DISABLED} {
	cursor: not-allowed;
	opacity: var(--aegis-btn-disabled-opacity, 0.65);
	filter: saturate(var(--aegis-btn-disabled-saturation, 50%)) brightness(var(--aegis-btn-disabled-brightness, 90%));
}

.btn.disabled, .btn${DISABLED_STATE} {
	pointer-events: none;
}

.btn:focus-visible {
	outline: 2px solid;
	outline-offset: 2px;
}`;

const system = css`.btn.btn-system {
	background-color: ButtonFace;
	color: ButtonText;
	border-color: hsl(from ButtonFace h s calc(l - 0.2));
}

.btn.btn-system:hover {
	background-color: hsl(from ButtonFace h s calc(l * 1.1));
	border-color: hsl(from ButtonFace h s calc(l * 1.1));
}

.btn.btn-system:focus-visible {
	background-color: hsl(from ButtonFace h calc(s * 1.05) calc(l * 1.05));
	border-color: hsl(from ButtonFace h calc(s * 1.05) calc(l * 1.05));
	outline: 2px solid ButtonText;
	outline-offset: 2px;
}

.btn.btn-system:active {
	background-color: hsl(from ButtonFace h s calc(l * 0.8));
	border-color: hsl(from ButtonFace h s calc(l * 0.8));
}

.btn.btn-system:disabled, .btn.btn-system.disabled, .btn.btn-system${DISABLED_STATE} {
	background-color: hsl(from ButtonFace h calc(s * 0.2) l);
	border-color: hsl(from ButtonFace h calc(s * 0.2) l);
	color: GrayText;
}`;

const systemAccent = css`.btn.btn-system-accent {
	background-color: AccentColor;
	color: AccentColorText;
	border-color: hsl(from AccentColor h s calc(l - 0.2));
}

.btn.btn-system-accent:hover {
	background-color: hsl(from AccentColor h s calc(l * 1.1));
	border-color: hsl(from AccentColor h s calc(l * 1.1));
}

.btn.btn-system-accent:focus-visible {
	background-color: hsl(from AccentColor h calc(s * 1.05) calc(l * 1.05));
	border-color: hsl(from AccentColor h calc(s * 1.05) calc(l * 1.05));
	outline: 2px solid hsl(from AccentColor h s calc(l - 0.3));
	outline-offset: 2px;
}

.btn.btn-system-accent:active {
	background-color: hsl(from AccentColor h s calc(l * 0.8));
	border-color: hsl(from AccentColor h s calc(l * 0.8));
}

.btn.btn-system-accent:disabled, .btn.btn-system-accent.disabled, .btn.btn-system${DISABLED_STATE} {
	background-color: hsl(from AccentColor h calc(s * 0.2) l);
	border-color: hsl(from AccentColor h calc(s * 0.2) l);
	color: GrayText;
}`;

const primary = css`.btn.btn-primary {
	background-color: var(--aegis-btn-primary, ${btnPrimary});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${blue[6]};
}

.btn.btn-primary:hover:not(${DISABLED}), .btn.btn-primary:focus-visible {
	background-color: var(--aegis-btn-primary-hover, ${btnPrimaryHover});
	border-color: ${blue[7]};
}

.btn.btn-primary:focus-visible {
	outline-color: var(--aegis-btn-primary, ${btnPrimary});
}

.btn.btn-primary:active {
	background-color: var(--aegis-btn-primary-active, ${btnPrimaryActive});
	border-color: ${blue[8]};
}`;

export const btnOutlinePrimary = css`.btn.btn-outline-primary {
	background-color: transparent;
	color: var(--aegis-btn-primary, ${btnPrimary});
	border-color: currentColor;
}

.btn.btn-outline-primary:focus-visible {
	outline-color: var(--aegis-btn-primary, ${btnPrimary});
}

.btn.btn-outline-primary:hover:not(${DISABLED}), .btn.btn-outline-primary:focus-visible {
	background-color: var(--aegis-btn-primary-hover, ${btnPrimaryHover});
	border-color: ${blue[7]};
	color: var(--aegis-color-dark, ${colorDark});
}

.btn.btn-outline-primary:active {
	background-color: var(--aegis-btn-primary-active, ${btnPrimaryActive});
	border-color: ${blue[8]};
	color: var(--aegis-color-dark, ${colorDark});
}`;

const secondary = css`.btn.btn-secondary {
	background-color: var(--aegis-btn-secondary, ${btnSecondary});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${gray[7]};
}

.btn.btn-secondary:hover:not(${DISABLED}), .btn.btn-secondary:focus-visible {
	background-color: var(--aegis-btn-secondary-hover, ${btnSecondaryHover});
	border-color: ${gray[8]};
}

.btn.btn-secondary:focus-visible {
	outline-color: var(--aegis-btn-secondary, ${btnSecondary});
}

.btn.btn-secondary:active {
	background-color: var(--aegis-btn-secondary-active, ${btnSecondaryActive});
	border-color: ${gray[9]};
}`;

export const btnOutlineSecondary = css`.btn.btn-outline-secondary {
	background-color: transparent;
	color: var(--aegis-btn-secondary, ${btnSecondary});
	border-color: currentColor;
}

.btn.btn-outline-secondary:hover:not(${DISABLED}), .btn.btn-outline-secondary:focus-visible {
	background-color: var(--aegis-btn-secondary-hover, ${btnSecondaryHover});
	border-color: ${gray[8]};
	color: var(--aegis-color-dark, ${colorDark});
}

.btn.btn-outline-secondary:focus-visible {
	outline-color: var(--aegis-btn-secondary, ${btnSecondary});
}

.btn.btn-outline-secondary:active {
	background-color: var(--aegis-btn-secondary-active, ${btnSecondaryActive});
	border-color: ${gray[9]};
	color: var(--aegis-color-dark, ${colorDark});
}

.btn.btn-outline-secondary:disabled, .btn.btn-outline-secondary.disabled, .btn.btn-outline-seconday${DISABLED_STATE} {
	color: var(--aegis-btn-active-disabled, ${btnDisabled});
}`;

const success = css`.btn.btn-success {
	background-color: var(--aegis-btn-success, ${btnSuccess});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${green[6]};
}

.btn.btn-success:hover:not(${DISABLED}), .btn.btn-success:focus-visible {
	background-color: var(--aegis-btn-success-hover, ${btnSuccessHover});
	border-color: ${green[7]};
}

.btn.btn-success:focus-visible {
	outline-color: var(--aegis-btn-success, ${btnSuccess});
}

.btn.btn-success:active {
	background-color: var(--aegis-btn-success-active, ${btnSuccessActive});
	border-color: ${green[8]};
}`;

export const btnOutlineSuccess = css`.btn.btn-outline-success {
	background-color: transparent;
	color: var(--aegis-btn-success, ${btnSuccess});
	border-color: currentColor;
}

.btn.btn-outline-success:hover:not(${DISABLED}), .btn.btn-outline-success:focus-visible {
	background-color: var(--aegis-btn-success-hover, ${btnSuccessHover});
	border-color: ${green[7]};
	color: var(--aegis-color-dark, ${colorDark});
}

.btn.btn-outline-success:focus-visible {
	outline-color: var(--aegis-btn-success, ${btnSuccess});
}

.btn.btn-outline-success:active {
	background-color: var(--aegis-btn-success-active, ${btnSuccessActive});
	border-color: ${green[8]};
	color: var(--aegis-color-dark, ${colorDark});
}`;

const info = css`.btn.btn-info {
	background-color: var(--aegis-btn-info, ${btnInfo});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${cyan[6]};
}

.btn.btn-info:not(${DISABLED}), .btn.btn-info:focus-visible {
	background-color: var(--aegis-btn-info-hover, ${btnInfoHover});
	border-color: ${cyan[7]};
}

.btn.btn-info:focus-visible {
	outline-color: var(--aegis-btn-info, ${btnInfo});
}

.btn.btn-info:active {
	background-color: var(--aegis-btn-info-active, ${btnInfoActive});
	border-color: ${cyan[8]};
}`;

export const btnOutlineInfo = css`.btn.btn-outline-info {
	background-color: transparent;
	color: var(--aegis-btn-info, ${btnInfo});
	border-color: currentColor;
}

.btn.btn-outline-info:hover:not(${DISABLED}), .btn.btn-outline-info:focus-visible {
	background-color: var(--aegis-btn-info-hover, ${btnInfoHover});
	border-color: ${cyan[7]};
	color: var(--aegis-color-dark, ${colorDark});
}

.btn.btn-outline-info:focus-visible {
	outline-color: var(--aegis-btn-info, ${btnInfo});
}

.btn.btn-outline-info:active {
	background-color: var(--aegis-btn-info-active, ${btnInfoActive});
	border-color: ${cyan[8]};
	color: var(--aegis-color-dark, ${colorDark});
}`;

const danger = css`.btn.btn-danger {
	background-color: var(--aegis-btn-danger, ${btnDanger});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${red[6]};
}

.btn.btn-danger:hover:not(${DISABLED}), .btn.btn-danger:focus-visible {
	background-color: var(--aegis-btn-danger-hover, ${btnDangerHover});
	border-color: ${red[7]};
}

.btn.btn-danger:focus-visible {
	outline-color: var(--aegis-btn-danger, ${btnDanger});
}

.btn.btn-danger:active {
	background-color: var(--aegis-btn-danger-active, ${btnDangerActive});
	border-color: ${red[8]};
}`;

export const btnOutlineDanger = css`.btn.btn-outline-danger {
	background-color: transparent;
	color: var(--aegis-btn-danger, ${btnDanger});
	border-color: currentColor;
}

.btn.btn-outline-danger:hover:not(${DISABLED}), .btn.btn-outline-danger:focus-visible {
	background-color: var(--aegis-btn-danger-hover, ${btnDangerHover});
	border-color: ${red[7]};
	color: var(--aegis-color-dark, ${colorDark});
}

.btn.btn-outline-danger:focus-visible {
	outline-color: var(--aegis-btn-danger, ${btnDanger});
}

.btn.btn-outline-danger:active {
	background-color: var(--aegis-btn-danger-active, ${btnDangerActive});
	border-color: ${red[8]};
	color: var(--aegis-color-dark, ${colorDark});
}`;

const warning = css`.btn.btn-warning {
	background-color: var(--aegis-btn-warning, ${btnWarning});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${yellow[6]};
}

.btn.btn-warning:hover:not(${DISABLED}), .btn.btn-warning:focus-visible {
	background-color: var(--aegis-btn-warning-hover, ${btnWarningHover});
	border-color: ${yellow[7]};
}

.btn.btn-warning:focus-visible {
	outline-color: var(--aegis-btn-warning, ${btnWarning});
}

.btn.btn-warning:active {
	background-color: var(--aegis-btn-warning-active, ${btnWarningActive});
	border-color: ${yellow[8]};
}`;

export const btnOutlineWarning = css`.btn.btn-outline-warning {
	background-color: transparent;
	color: var(--aegis-btn-warning, ${btnWarning});
	border-color: currentColor;
}

.btn.btn-outline-warning:not(${DISABLED}), .btn.btn-outline-warning:focus-visible {
	background-color: var(--aegis-btn-warning-hover, ${btnWarningHover});
	border-color: ${yellow[7]};
	color: var(--aegis-color-light, ${colorLight});
}

.btn.btn-outline-warning:active {
	background-color: var(--aegis-btn-warning-active, ${btnWarningActive});
	border-color: ${yellow[8]};
	color: var(--aegis-color-light, ${colorLight});
}

.btn.btn-outline-warning:focus-visible {
	outline-color: var(--aegis-btn-warning, ${btnWarning});
}`;

const light = css`.btn.btn-light {
	background-color: var(--aegis-btn-light, ${btnLight});
	color: var(--aegis-color-light, ${colorLight});
	border-color: ${gray[2]};
}

.btn.btn-light:hover:not(${DISABLED}), .btn.btn-light:focus-visible {
	background-color: var(--aegis-btn-light-hover, ${btnLightHover});
	border-color: ${gray[3]};
}

.btn.btn-light:focus-visible {
	outline-color: var(--aegis-btn-light, ${btnLight});
}

.btn.btn-light:active {
	background-color: var(--aegis-btn-light-active, ${btnLightActive});
	border-color: ${gray[4]};
}`;

export const btnOutlineLight = css`.btn.btn-outline-light {
	background-color: transparent;
	color: var(--aegis-btn-light, ${btnLight});
	border-color: currentColor;
}

.btn.btn-outline-light:hover:not(${DISABLED}), .btn.btn-outline-light:focus-visible {
	background-color: var(--aegis-btn-light-hover, ${btnLightHover});
	border-color: ${gray[3]};
	color: var(--aegis-color-light, ${colorLight});
}

.btn.btn-outline-light:focus-visible {
	outline-color: var(--aegis-btn-light, ${btnLight});
}

.btn.btn-outline-light:active {
	background-color: var(--aegis-btn-light-active, ${btnLightActive});
	border-color: ${gray[4]};
	color: var(--aegis-btn-light-active, ${btnLightActive});
}`;

const dark = css`.btn.btn-dark {
	background-color: var(--aegis-btn-dark, ${btnDark});
	color: var(--aegis-color-dark, ${colorDark});
	border-color: ${gray[7]};
}

.btn.btn-dark:hover:not(${DISABLED}), .btn.btn-dark:focus-visible {
	background-color: var(--aegis-btn-dark-hover, ${btnDarkHover});
	border-color: ${gray[8]};
}

.btn.btn-dark:focus-visible {
	outline-color: var(--aegis-btn-dark, ${btnDark});
}

.btn.btn-dark:active {
	background-color: var(--aegis-btn-dark-active, ${btnDarkActive});
	border-color: ${gray[9]};
}`;

export const btnOutlineDark = css`.btn.btn-outline-dark {
	background-color: transparent;
	color: var(--aegis-btn-dar, ${btnDark});
	border-color: currentColor;
}

.btn.btn-outline-dark:hover:not(${DISABLED}), .btn.btn-outline-dark:focus-visible {
	background-color: var(--aegis-btn-dark-hover, ${btnDarkHover});
	border-color: ${gray[8]};
	color: var(--aegis-color-dark, ${colorDark});
}

.btn.btn-outline-dark:focus-visible {
	outline-color: var(--aegis-btn-dark, ${btnDark});
}

.btn.btn-outline-dark:active {
	background-color: var(--aegis-btn-dark-active, ${btnDarkActive});
	border-color: ${gray[9]};
	color: var(--aegis-color-dark, ${colorDark});
}

.btn.btn-outline-secondary:disabled, .btn.btn-outline-secondary.disabled, .btn.btn-outline-secondary${DISABLED_STATE} {
	color: var(--aegis-btn-active-disabled, ${btnDisabled});
}`;

const link = css`.btn.btn-link {
	background-color: var(--aegis-btn-link, ${btnLink});
	color: ${linkColor};
	border-color: transparent;
	text-decoration: none;
}

.btn.btn-link:hover:not(${DISABLED}), .btn.btn-link:focus-visible {
	background-color: var(--aegis-btn-link-hover, ${btnLinkHover});
	text-decoration: underline;
}

.btn.btn-link:focus-visible {
	outline-color: var(--aegis-btn-link, ${btnLink});
}

.btn.btn-link:active {
	background-color: var(--aegis-btn-link-active, ${btnLinkActive});
	text-decoration: underline;
}`;

export {
	primary as btnPrimary, secondary as btnSecondary, success as btnSuccess, info as btnInfo,
	danger as btnDanger, warning as btnWarning, dark as btnDark, light as btnLight, link as btnLink,
	system as btnSystem, systemAccent as btnSystemAccent,
};
