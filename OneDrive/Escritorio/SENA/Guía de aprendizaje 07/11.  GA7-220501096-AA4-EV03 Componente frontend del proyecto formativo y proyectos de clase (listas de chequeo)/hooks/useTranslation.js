import { useState } from 'react';

/**
 * Custom Hook: Gestiona los estados y la lógica del traductor.
 */
export const useTranslation = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('es');
  const [targetLang, setTargetLang] = useState('en');
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Función para simular la traducción con IA.
   */
  const handleTranslate = async () => {
    if (!text.trim()) return;

    setIsLoading(true);
    try {
      // Simula la respuesta de la IA en 1 segundo
      setTimeout(() => {
        const mockResult = `[IA Traducido al ${targetLang.toUpperCase()}]: ${text}`;
        setTranslatedText(mockResult);
        
        // Guarda en el historial de forma inmutable
        setHistory((prev) => [
          { id: Date.now(), original: text, translated: mockResult, from: sourceLang, to: targetLang },
          ...prev
        ]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error al traducir:", error);
      setIsLoading(false);
    }
  };

  return {
    text, setText,
    translatedText,
    sourceLang, setSourceLang,
    targetLang, setTargetLang,
    history, isLoading,
    handleTranslate
  };
};