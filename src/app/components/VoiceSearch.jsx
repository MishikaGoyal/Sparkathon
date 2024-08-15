// components/VoiceInput.jsx
'use client'
import { useState } from 'react';

const VoiceSearch = ({ onLocationDetected }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Web Speech API not supported in this browser.');
      return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setTranscript(speechResult);
      setIsListening(false);
      onLocationDetected(speechResult); // Pass the result to the parent component
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <div className="p-4">
      <button
        onClick={handleVoiceInput}
        className={`px-4 py-2 bg-violet-200 text-white rounded-full ${isListening ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isListening}
      >
        {isListening ? 'Listening...' : 'Speak Now'}
      </button>
      {transcript && <p className="mt-2">You said: {transcript}</p>}
    </div>
  );
};

export default VoiceSearch;
