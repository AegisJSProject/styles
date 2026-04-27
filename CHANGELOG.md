<!-- markdownlint-disable -->
# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v0.3.3] - 2026-04-27

### Added
- Add focus styles for custom buttons
- Add `pointer-events: none` to disabled custom buttons

### Changed
- Custom buttons now use `:state(disabled)` instead of `:state(--disabled)`

## [v0.3.2] - 2026-04-10

### Changed
- Components now inherit `color-scheme` from the document or nearest `[data-theme]` ancestor,
  replacing the deprecated `:host-context()` CSS pseudo-class.

### Deprecated
- `componentDarkTheme`, `componentLightTheme`, `darkTheme`, `lightTheme`. These exports remain
  as disabled `CSSStyleSheet` stubs for backwards compatibility and will be removed in a future major release.

## [v0.3.1] - 2026-04-10

### Added
- Add shared stylesheet for custom buttons

## [v0.3.0] - 2026-04-07

### Added
- Add `@layer` to all styles
- Add `data-*` presentation attributes (eg `data-background-color`)

### Changed
- Update CSS reset

## [v0.2.8] - 2026-03-14

### Changed
- Separate `@property` from old `--prop`s

### Fixed
- Fix outputing `.css` for sheets with media queries

## [v0.2.7] - 2025-04-21

### Fixed
- Fix some color mix-ups

## [v0.2.6] - 2024-11-26

### Changed
- Change default border width on `.btn` to `0`
- Switch CSS parser to `@aegisjsproject/parsers/css.js`

## [v0.2.5] - 2024-11-06

### Added
- Add support for `:state(--disabled)` in button styles and path to other custom states

## [v0.2.4] - 2024-11-05

### Added
- Add system style button classes using eg `ButtonFace` and `AccentColor`
- Add `.css` versions of stylesheets in `/css/*.css`

### Fixed
- Fix handling of disabled buttons

## [v0.2.3] - 2024-10-08

### Added
- Add `.btn-outline-*` styles

### Fixed
- Give disabled buttons more proper styling

## [v0.2.2] - 2024-10-04

### Added
- Add animations/transforms and scrollbar stylesheets
- More custom properties

## [v0.2.1] - 2024-09-29

### Added
- Add more `.btn-*` classes
- More custom properties to go along

### Changed
- Now use `.btn-lg` instead of `.btn-big` and `.btn-sm` instead of `.btn-small`

### Fixed
- Fix typeo in `.grid` (had `.drid` somehow)

## [v0.2.0] - 2024-09-27

### Added
- More custom properties
- More stylesheets
- More customization

## [v0.1.3] - 2024-09-26

### Added
- Begin adding custom properties
- Add `@properties` via `properties.js`
- Add theme inheritance via `:host-context()` (where supported)

### Fixed
- Do not set `display` for `hidden` or `popover` elements

## [v0.1.2] - 2024-09-19

### Changed
- Update dependencies and config

## [v0.1.1] - 2024-03-02

### Changed
- Update to `@aegisjsproject/core@0.1.2`

### Fixed
- Fix building and exporting CommonJS

## [v0.1.0] - 2023-02-27

### Changed
- Renamed to `@aegisjsproject/styles`

## [v0.0.3] - 2023-02-07

### Changed
- Update to `@shgysk8zer0/aegis@0.0.5`

## [v0.0.2] - 2024-02-04

### Fixed
- Fix bad import of bootstrap palette module
- Fix missing export of theme module

## [v0.0.1] - 2024-02-04

Initial Release
