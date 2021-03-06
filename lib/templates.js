module.exports.default = ({
  name,
  viewBox,
  pathData
}) => `import * as React from 'react';

const ${name}Icon = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => (
  <svg
    {...props}
    viewBox='${viewBox}'
    width={size}
    height={size}
    fill={color}
  >
    ${pathData}
  </svg>
);

${name}Icon.displayName = '${name}Icon';

export default ${name}Icon;`

module.exports.styledSystem = ({
  name,
  viewBox,
  pathData
}) => `import * React from 'react';
import styled from 'styled-components';
import { space, color } from 'styled-system';

const Svg = styled('svg')({ flex: 'none' }, space, color);

const ${name}Icon = ({
  size = 24,
  ...props
}) => (
  <Svg
    {...props}
    viewBox='${viewBox}'
    width={size}
    height={size}
    fill='currentcolor'
  >
    <g>
      ${pathData}
    </g>
  </Svg>
);

${name}Icon.displayName = '${name}Icon';

export default ${name}Icon;`

module.exports.icon = () => `import * as React from 'react'
import * as Icons from './index';

const Icon = ({ name, ...props }) => {
  const Component = Icons[name];
  if (!Component) return false;
  return <Component {...props} />;
};

Icon.displayName = 'Icon';

export default Icon;`
