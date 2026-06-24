import React from 'react';

/**
 * Componente para los menús desplegables de idioma.
 */
export const LanguageSelector = ({ value, onChange, label }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <label style={{ fontWeight: 'bold', fontSize: '14px', color: '#555' }}>{label}</label>
      <select 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px' }}
      >
        <option value="es">Español</option>
        <option value="en">Inglés</option>
        <option value="fr">Francés</option>
        <option value="pt">Portugués</option>
      </select>
    </div>
  );
};