import { css } from '@aegisjsproject/parsers/css.js';

export const presentation = css` @layer utilities.aegisjsproject.presentation {
	[data-width] { width: attr(data-width rem); }
	[data-min-width] { min-width: attr(data-min-width rem); }
	[data-max-width] { max-width: attr(data-max-width rem); }
	[data-height] { height: attr(data-height rem); }
	[data-min-height] { min-height: attr(data-min-height rem); }
	[data-max-height] { max-height: attr(data-max-height rem); }
	[data-aspect-ratio] { aspect-ratio: attr(data-aspect-ratio type(<number>)); }

	[data-padding-block] { padding-block: attr(data-padding-block rem); }
	[data-padding-inline] { padding-inline: attr(data-padding-inline rem); }
	[data-padding-block-end] { padding-block-end: attr(data-padding-block-end rem); }
	[data-padding-inline-end] { padding-inline-end: attr(data-padding-inline-end rem); }
	[data-padding-block-start] { padding-block-start: attr(data-padding-block-start rem); }
	[data-padding-inline-start] { padding-inline-start: attr(data-padding-inline-start rem); }

	[data-margin-block] { margin-block: attr(data-margin-block rem); }
	[data-margin-inline] { margin-inline: attr(data-margin-inline rem); }
	[data-margin-block-end] { margin-block-end: attr(data-margin-block-end rem); }
	[data-margin-inline-end] { margin-inline-end: attr(data-margin-inline-end rem); }
	[data-margin-block-start] { margin-block-start: attr(data-margin-block-start rem); }
	[data-margin-inline-start] { margin-inline-start: attr(data-margin-inline-start rem); }

	[data-border-width] { border-width: attr(data-border-width px); }
	[data-border-color] { border-color: attr(data-border-color type(<color>)); }
	[data-border-style] { border-style: attr(data-border-style type(<custom-ident>), solid); }
	[data-border-width]:not([data-border-style]) { border-style: solid; }
	[data-border-radius] { border-radius: attr(data-border-radius px); }

	[data-inset-block]         { inset-block: attr(data-inset-block px); }
	[data-inset-inline]        { inset-inline: attr(data-inset-inline px); }
	[data-inset-block-start]   { inset-block-start: attr(data-inset-block-start px); }
	[data-inset-block-end]     { inset-block-end: attr(data-inset-block-end px); }
	[data-inset-inline-start]  { inset-inline-start: attr(data-inset-inline-start px); }
	[data-inset-inline-end]    { inset-inline-end: attr(data-inset-inline-end px); }

	[data-outline-width]  { outline-width: attr(data-outline-width px); }
	[data-outline-color]  { outline-color: attr(data-outline-color type(<color>)); }
	[data-outline-offset] { outline-offset: attr(data-outline-offset px); }
	[data-outline-width]:not([data-outline-style]) { outline-style: solid; }

	[data-gap] { gap: attr(data-gap rem); }
	[data-row-gap] { row-gap: attr(data-row-gap rem); }
	[data-column-gap] { column-gap: attr(data-column-gap rem); }
	[data-flex-basis] { flex-basis: attr(data-flex-basis rem); }
	[data-flex-grow] { flex-grow: attr(data-flex-grow type(<number>)); }
	[data-flex-shrink] { flex-shrink: attr(data-flex-shrink type(<number>)); }
	[data-column-span] { grid-column: span attr(data-column-span type(<integer>)); }
	[data-row-span] { grid-row: span attr(data-row-span type(<integer>)); }
	[data-grid-columns] { grid-template-columns: repeat(attr(data-grid-columns type(<integer>)), 1fr); }
	[data-grid-rows] { grid-template-rows: repeat(attr(data-grid-rows type(<integer>)), 1fr); }
	[data-grid-area] { grid-area: attr(data-grid-area type(<custom-ident>)); }

	[data-font-size] { font-size: attr(data-font-size rem); }
	[data-font-family] { font-family: attr(data-font-family type(<custom-ident>)); }
	[data-font-weight] { font-weight: attr(data-font-weight type(<number>)); }
	[data-line-height] { line-height: attr(data-line-height type(<number>)); }
	[data-letter-spacing] { letter-spacing: attr(data-letter-spacing em); }
	[data-word-spacing] { word-spacing: attr(data-word-spacing em); }
	[data-text-transform] { text-transform: attr(data-text-transform type(<custom-ident>)); }
	[data-text-decoration-thickness] { text-decoration-thickness: attr(data-text-decoration-thickness px); }
	[data-text-underline-offset] { text-underline-offset: attr(data-text-underline-offset px); }
	[data-text-indent] { text-indent: attr(data-text-indent rem); }

	/* scroll margin */
	[data-scroll-margin]        { scroll-margin: attr(data-scroll-margin px); }
	[data-scroll-margin-block]  { scroll-margin-block: attr(data-scroll-margin-block px); }
	[data-scroll-margin-inline] { scroll-margin-inline: attr(data-scroll-margin-inline px); }
	[data-scroll-margin-block-start] { scroll-margin-block-start: attr(data-scroll-margin-block-start px); }
	[data-scroll-margin-block-end] { scroll-margin-block-end: attr(data-scroll-margin-block-end px); }
	[data-scroll-margin-inline-start] { scroll-margin-inline-start: attr(data-scroll-margin-inline-start px); }
	[data-scroll-margin-inline-end] { scroll-margin-inline-end: attr(data-scroll-margin-inline-end px);}

	/* scroll padding */
	[data-scroll-padding]        { scroll-padding: attr(data-scroll-padding px); }
	[data-scroll-padding-block]  { scroll-padding-block: attr(data-scroll-padding-block px); }
	[data-scroll-padding-inline] { scroll-padding-inline: attr(data-scroll-padding-inline px); }
	[data-scroll-padding-block-start] { scroll-padding-block-start: attr(data-scroll-padding-block-start px); }
	[data-scroll-padding-block-end] { scroll-padding-block-end: attr(data-scroll-padding-block-end px); }
	[data-scroll-padding-inline-start] { scroll-padding-inline-start: attr(data-scroll-padding-inline-start px); }
	[data-scroll-padding-inline-end] { scroll-padding-inline-end: attr(data-scroll-padding-inline-end px); }

	[data-rotate] { rotate: attr(data-rotate deg); }
	[data-scale] { scale: attr(data-scale type(<number>)); }
	[data-opacity] { opacity: attr(data-opacity type(<number>)); }
	[data-color] { color: attr(data-color type(<color>)); }
	[data-background-color] { background-color: attr(data-background-color type(<color>)); }
	[data-accent-color] { accent-color: attr(data-accent-color type(<color>)); }
	[data-z-index] { z-index: attr(data-z-index type(<integer>)); }

	[data-animation-duration] { animation-duration: attr(data-animation-duration ms); }
	[data-transition-duration] { transition-duration: attr(data-transition-duration ms, 0); }

	/* Filters — single-property, non-composed (last one wins if multiple are present) */
	[data-filter-blur] { filter: blur(attr(data-filter-blur px)); }
	[data-filter-brightness] { filter: brightness(attr(data-filter-brightness type(<number>))); }
	[data-filter-contrast] { filter: contrast(attr(data-filter-contrast type(<number>))); }
	[data-filter-grayscale] { filter: grayscale(attr(data-filter-grayscale type(<number>))); }
	[data-filter-hue-rotate] { filter: hue-rotate(attr(data-filter-hue-rotate deg)); }
	[data-filter-invert] { filter: invert(attr(data-filter-invert type(<number>))); }
	[data-filter-opacity] { filter: opacity(attr(data-filter-opacity type(<number>))); }
	[data-filter-saturate] { filter: saturate(attr(data-filter-saturate type(<number>))); }
	[data-filter-sepia] { filter: sepia(attr(data-filter-sepia type(<number>))); }
}`;
