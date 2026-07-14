import React from 'react';
import Link from '@docusaurus/Link';
import { useDocById } from '@docusaurus/plugin-content-docs/client';

function CardLayout({ href, title, description }) {
  return (
    <Link
      href={href}
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '1.2rem 1.5rem',
        textDecoration: 'none',
        color: 'inherit',
        height: '100%'
      }}
    >
      <div className="card__body" style={{ padding: 0, width: '100%' }}>
        <h2
          className="text--truncate"
          title={title}
          style={{
            margin: 0,
            fontSize: '1.2rem',
            fontWeight: '700',
            textAlign: 'left',
            width: '100%'
          }}
        >
          {title}
        </h2>

        <hr 
          style={{ 
            marginTop: '0.4rem', 
            marginBottom: '0.3rem',
            border: 'none', 
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            width: '100%',
            height: '1px'
          }} 
        />

        <p
          style={{
            margin: 0,
            marginTop: '-0.1rem',
            fontSize: '0.85rem',
            textAlign: 'left',
            color: 'rgba(255, 255, 255, 0.6)',
            lineHeight: '1.4'
          }}
        >
          {description || ''}
        </p>
      </div>
    </Link>
  );
}

export default function DocCard({ item }) {
  const href = item.href || item.permalink;

  const doc = useDocById(item.docId ?? undefined);
  const finalDescription = item.description ?? doc?.description;

  if (!href) {
    return null;
  }
  
  return (
    <CardLayout
      href={href}
      title={item.label}
      description={finalDescription}
    />
  );
}