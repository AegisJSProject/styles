import { light, dark } from './palette/bootstrap.js';
import { css } from '@aegisjsproject/core/parsers/css.js';

export const properties = css`@property --aegis-color-light {
	syntax: "<color>";
	inherits: true;
	initial-value: ${dark};
  }

  @property --aegis-color-dark {
	syntax: "<color>";
	inherits: true;
	initial-value: ${light};
  }

  @property --aegis-bg-light {
	syntax: "<color>";
	inherits: true;
	initial-value: ${light};
  }

  @property --aegis-bg-dark {
	syntax: "<color>";
	inherits: true;
	initial-value: ${dark};
  }`;
