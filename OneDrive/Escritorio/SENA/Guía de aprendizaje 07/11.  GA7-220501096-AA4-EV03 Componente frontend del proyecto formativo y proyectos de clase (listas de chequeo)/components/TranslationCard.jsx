import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { LanguageSelector } from './LanguageSelector';
import { TranslationHistory } from './TranslationHistory';

/**
 * Une la vista con la lógica de nuestro Hook.
 */
export const TranslationCard = () => {
  const {
    text, setText,
    translatedText,
    sourceLang, setSourceLang,
    targetLang, setTargetLang,
    history, isLoading,
    handleTranslate
  } = useTranslation();

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Traductor Universal Inteligente</h2>
      
      <div style={styles.selectorsRow}>
        <LanguageSelector value={sourceLang} onChange={setSourceLang} label="Idioma Origen" />
        <span style={styles.arrow}>➔</span>
        <LanguageSelector value={targetLang} onChange={setTargetLang} label="Idioma Destino" />
      </div>

      <div style={styles.grid}>
        <textarea
          style={styles.textarea}
          placeholder="Escribe el texto aquí para traducir..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <textarea
          style={{ ...styles.textarea, ...styles.output }}
          placeholder="Resultado de la traducción por IA..."
          value={translatedText}
          readOnly
        />
      </div>

      <button 
        style={isLoading ? { ...styles.button, backgroundColor: '#6c757d' } : styles.button}
        onClick={handleTranslate}
        disabled={isLoading}
      >
        {isLoading ? 'Procesando con IA...' : 'Traducir Texto'}
      </button>

      <TranslationHistory history={history} />
    </div>
  );
};

const styles = {
  card: { maxWidth: '750px', margin: '40px auto', padding: '25px', backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', fontFamily: 'system-ui, sans-serif' },
  title: { textAlign: 'center', color: '#212529', marginBottom: '25px' },
  selectorsRow: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginBottom: '25px' },
  arrow: { fontSize: '20px', color: '#6c757d', marginTop: '20px' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' },
  textarea: { width: '100%', height: '160px', padding: '12px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '15px', resize: 'none', boxSizing: 'border-box' },
  output: { backgroundColor: '#e9ecef', color: '#495057', cursor: 'not-allowed' },
  button: { width: '100%', padding: '14px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }
};