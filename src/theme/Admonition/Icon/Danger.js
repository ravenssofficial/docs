import React from 'react';

export default function AdmonitionIconDanger(props) {
  return (
    <div
      {...props}
      style={{
        width: '24px',
        height: '24px',
        backgroundColor: '#ffffff', // tvoja svetlo crvena boja
        WebkitMaskImage: `url('/docs/img/skull.svg')`,
        maskImage: `url('/docs/img/skull.svg')`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        display: 'inline-block',
        ...props.style
      }}
    />
  );
}