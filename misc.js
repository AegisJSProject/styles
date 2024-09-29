import { css } from '@aegisjsproject/core/parsers/css.js';

export const displays = css`.block:not([hidden]):not([popover]) {
	display: block;
}

.inline:not([hidden]):not([popover]) {
	display: inline;
}

.inline-block:not([hidden]):not([popover]) {
	display: inline-block;
}

.flex:not([hidden]):not([popover]) {
	display: flex;
}

.inline-flex:not([hidden]):not([popover]) {
	display: inline-flex;
}

.grid:not([hidden]):not([popover]) {
	display: grid;
}

.inline-grid:not([hidden]):not([popover]) {
	display: inline-grid;
}`;

export const positions = css`.fixed {
	position: fixed;
}

.relative {
	position: relative;
}

.absolute {
	position: absolute;
}

.sticky {
	position: sticky;
}

.top {
	top: 0;
}

.bottom {
	bottom: 0;
}

.left {
	left: 0;
}

.right {
	right: 0;
}

.z-0 {
	z-index: 0;
}

.z-1 {
	z-index: 1;
}

.z-2 {
	z-index: 2;
}

.z-3 {
	z-index: 3;
}

.z-4 {
	z-index: 4;
}

.z-top {
	z-index: var(--z-top, 9999);
}

.z-max {
	z-index: 2147483647;
}`;

export const floats = css`.float-left {
	float: left;
}

.float-right {
	float: right;
}

.float-none {
	float: none;
}

.clear-left {
	clear: left;
}

.clear-right {
	clear: right;
}

.clear-both {
	clear: both;
}`;

export const fonts = css`.system-ui {
	font-family: system-ui, sans-serif;
}

.ui-sans-serif {
	font-family: ui-sans-serif, sans-serif;
}

.ui-serif {
	font-family: ui-serif, serif;
}

.ui-monospace {
	font-family: ui-monospace, monospace;
}`;

export const overflows = css`.overflow-hidden {
	overflow: hidden;
}

.overflow-visible {
	overflow: visible;
}

.overflow-scroll {
	overflow: scroll;
}

.overflow-auto {
	overflow: auto;
}

.overflow-x-hidden {
	overflow-x: hidden;
}

.overflow-x-visible {
	overflow-x: visible;
}

.overflow-x-scroll {
	overflow-x: scroll;
}

.overflow-x-auto {
	overflow-x: auto;
}

.overflow-y-hidden {
	overflow-y: hidden;
}

.overflow-y-visible {
	overflow-y: visible;
}

.overflow-y-scroll {
	overflow-y: scroll;
}

.overflow-y-auto {
	overflow-y: auto;
}`;

export const colors = css`.current-color {
	fill: currentColor;
}

.color-initial {
	color: initial;
}

.color-inherit {
	color: inherit;
}`;

export const objectFits = css`.fit-contain {
	object-fit: contain;
}

.fit-cover {
	object-fit: cover;
}

.fit-fill {
	object-fit: fill;
}

.fit-none {
	object-fit: none;
}

.fit-scale-down {
	object-fit: scale-down;
}`;

export const textRules = css`.text-align-left {
	text-align: left;
}

.text-align-right {
	text-align: right;
}

.text-align-center {
	text-align: center;
}

.text-align-justify {
	text-align: justify;
}

.text-align-justify-all {
	text-align: justify-all;
}

.text-align-start {
	text-align: start;
}

.text-align-end {
	text-align: end;
}

.text-decoration-solid {
	text-decoration-style: solid;
}

.text-decoration-wavy {
	text-decoration-style: wavy;
}

.text-decoration-dotted {
	text-decoration-style: dotted;
}

.text-decoration-dashed {
	text-decoration-style: dashed;
}

.text-decoration-double {
	text-decoration-style: double;
}

.no-text-decoration, .no-text-decoration * {
	text-decoration: none;
}

.underline {
	text-decoration-line: underline;
}

.overline {
	text-decoration-line: overline;
}

.line-through {
	text-decoration-line: line-through;
}

.optimize-speed {
	text-rendering: optimizeSpeed;
}

.optimize-legibility {
	text-rendering: optimizeLegibility;
}

.geometric-precision {
	text-rendering: geometricPrecision;
}

.capitalize {
	text-transform: capitalize;
}

.uppercase {
	text-transform: uppercase;
}

.lowercase {
	text-transform: lowercase;
}

.center, .align-center {
	text-align: center;
}

.align-left {
	text-align: left;
}

.align-right {
	text-align: right;
}

.indent {
	text-indent: var(--indent, 4ch);
}

.indent-all {
	text-indent: var(--indent, 4ch) each-line;
}

.indent-hanging {
	text-indent: var(--indent, 4ch) hanging;
}`;

export const cursors = css`.no-pointer-events {
	pointer-events: none;
}

.cursor-auto {
	cursor: auto;
}

.cursor-default {
	cursor: var(--default-cursor, default);
}

.cursor-none {
	cursor: none;
}

.cursor-context-menu {
	cursor: context-menu;
}

.cursor-help {
	cursor: help;
}

.cursor-pointer {
	cursor: var(--pointer-cursor, pointer);
}

.cursor-progress {
	cursor: var(--progress-cursor, progress);
}

.cursor-wait {
	cursor: var(--wait-cursor, wait);
}

.cursor-cell {
	cursor: cell;
}

.cursor-crosshair {
	cursor: crosshair;
}

.cursor-text {
	cursor: text;
}

.cursor-vertical-text, .cursor-text-vertical {
	cursor: vertical-text;
}

.cursor-alias {
	cursor: alias;
}

.cursor-copy {
	cursor: copy;
}

.cursor-move {
	cursor: move;
}

.cursor-no-drop {
	cursor: no-drop;
}

.cursor-not-allowed {
	cursor: not-allowed;
}

.cursor-all-scroll {
	cursor: all-scroll;
}

.cursor-col-resize {
	cursor: col-resize;
}

.cursor-row-resize {
	cursor: row-resize;
}

.cursor-n-resize {
	cursor: n-resize;
}

.cursor-e-resize {
	cursor: e-resize;
}

.cursor-s-resize {
	cursor: s-resize;
}

.cursor-w-resize {
	cursor: w-resize;
}

.cursor-ne-resize {
	cursor: ne-resize;
}

.cursor-nw-resize {
	cursor: nw-resize;
}

.cursor-se-resize {
	cursor: se-resize;
}

.cursor-sw-resize {
	cursor: sw-resize;
}

.cursor-zoom-in {
	cursor: zoom-in;
}

.cursor-zoom-out {
	cursor: zoom-out;
}

.cursor-grab {
	cursor: grab;
}

.cursor-grabbing {
	cursor: grabbing;
}`;

export const utilities = css`.clearfix::after {
	clear: both;
	content: '';
	display: block;
}

.shadow {
	box-shadow: var(--shadow-x, 0) var(--shadow-y, 2px) var(--shadow-blur, 10px) var(--shadow-spread, 0) var(--shadow-color, rgba(0,0,0,.2));
}

.shadow-dark {
	box-shadow: var(--shadow-x, 0) var(--shadow-y, 2px) var(--shadow-blur, 10px) var(--shadow-spread, 0) var(--shadow-dark-color, rgba(0,0,0,.6));
}

.icon, .icon * {
	color: inherit;
	max-width: 100%;
	max-height: 100%;
	width: var(--icon-size, 1em);
	height: var(--icon-size, 1em);
	vertical-align: middle;
}

.round {
	border-radius: 50%;
}

.card {
	border: var(--card-border, 1px solid #ccc);
	border-radius: var(--card-radius, 2px);
	background: var(--card-bg, var(--primary-color, white));
	padding: var(--card-padding, 0.7em);
}

.custom-element:not(:defined) .if-defined[slot], .custom-element.if-defined:not(:defined) {
	display: none;
}`;

export const statusBoxes = css`.status-box {
	padding: 1.2em;
	border: 1px dashed currentColor;
	text-align: center;
	margin-top: 0.7em;
	border-radius: 8px;
}

.status-box.alert, .status-box.error {
	color: var(--alert-color, #6f0606);
	background-color: var(--alert-background, #e88a8a);
}

.status-box.warn {
	color: var(--warn-color, #51430c);
	background-color: var(--warn-background, #f0d155);
}

.status-box.info {
	color: var(--info-color, #555553);
	background-color: var(--info-background, #d2d2d2);
}

.status-box.success {
	color: var(--success-color, #1d4f01);
	background-color: var(--success-background, #8cee69);
}`;
