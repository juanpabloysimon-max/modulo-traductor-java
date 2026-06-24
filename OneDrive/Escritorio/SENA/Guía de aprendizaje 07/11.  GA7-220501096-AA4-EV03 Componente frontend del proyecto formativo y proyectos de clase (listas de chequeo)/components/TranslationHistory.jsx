import React from 'react';

/**
 * Muestra la lista de traducciones realizadas.
 */
export const TranslationHistory = ({ history }) => {
  if (history.length === 0) return null;

  return (
    <div style={{ marginTop: '25px', borderTop: '1px solid #ddd', paddingTop: '15px' }}>
      <h3 style={{ color: '#444', fontSize: '18px' }}>Historial Reciente</h3>
      <ul style={{ listStyleType: 'none', padding: 0, maxHeight: '200px', overflowY: 'auto' }}>
        {history.map((item) => (
          <li key={item.id} style={{ padding: '10px', backgroundColor: '#fff', borderBottom: '1px solid #eee', marginBottom: '5px', borderRadius: '4px' }}>
            <small style={{ color: '#007bff', fontWeight: 'bold' }}>{item.from.toUpperCase()} ➔ {item.to.toUpperCase()}</small>
            <p style={{ margin: '5px 0 2px 0', fontSize: '14px', color: '#333' }}><strong>Original:</strong> {item.original}</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#28a745' }}><strong>Traducido:</strong> {item.translated}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};