'use client';

import { useState, useEffect } from 'react';
import { Key } from './components/key';


const Home: React.FC = () => {
    const [activeKeys, setActiveKeys] = useState<string[]>([]);
    const [composition, setComposition] = useState<string>('');

    const playSound = (key: string) => {
        console.log(`Playing sound for key: ${key}`);
        const audioId = `s_${key.toLowerCase()}`;
        console.log(`Audio ID to search: ${audioId}`);
        const audio = document.getElementById(audioId) as HTMLAudioElement;

        if (audio) {
            audio.currentTime = 0;
            audio.play();
        } else {
            console.error(`Audio element not found for key: ${key}`);
        }

        setActiveKeys((prevKeys) => {
            const newKeys = [...prevKeys, key];
            setTimeout(() => {
                setActiveKeys((keys) => keys.filter((k) => k !== key));
            }, 250);
            return newKeys;
        });
    };

    const playComposition = () => {
      console.log(`Composition to play: ${composition}`);
      composition.split('').forEach((char, index) => {
          const soundKey = `key${char.toLowerCase()}`;
          setTimeout(() => {
              playSound(soundKey);
          }, 400 * index);
      });
  };
  
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-4xl mb-6">Bateria</h1>
            <div className="grid grid-cols-3 gap-4 mb-6">
                <Key sound="keyq" label="Q" onPlay={playSound} isActive={activeKeys.includes("keyq")} />
                <Key sound="keyw" label="W" onPlay={playSound} isActive={activeKeys.includes("keyw")} />
                <Key sound="keye" label="E" onPlay={playSound} isActive={activeKeys.includes("keye")} />
                <Key sound="keya" label="A" onPlay={playSound} isActive={activeKeys.includes("keya")} />
                <Key sound="keys" label="S" onPlay={playSound} isActive={activeKeys.includes("keys")} />
                <Key sound="keyd" label="D" onPlay={playSound} isActive={activeKeys.includes("keyd")} />
                <Key sound="keyz" label="Z" onPlay={playSound} isActive={activeKeys.includes("keyz")} />
                <Key sound="keyx" label="X" onPlay={playSound} isActive={activeKeys.includes("keyx")} />
                <Key sound="keyc" label="C" onPlay={playSound} isActive={activeKeys.includes("keyc")} />
            </div>
            <div className="w-64 mt-5">
                <input
                    type="text"
                    className="w-full p-2 border-2 border-white bg-gray-800 text-white outline-none"
                    placeholder="Faça uma composição..."
                    value={composition}
                    onChange={(e) => setComposition(e.target.value)}
                />
                <button
                    className="w-full mt-2 p-2 border-2 border-white text-white bg-gray-800 cursor-pointer hover:bg-gray-700"
                    onClick={playComposition}
                >
                    Tocar
                </button>
            </div>
            <footer className="mt-6 text-sm">Criado por Carlos H. Jr</footer>
            
            <audio id='s_keya' src='/sounds/keya.wav'/>
            <audio id="s_keyq" src="/sounds/keyq.wav" />
            <audio id="s_keyw" src="/sounds/keyw.wav" />
            <audio id="s_keye" src="/sounds/keye.wav" />
            <audio id="s_keys" src="/sounds/keys.wav" />
            <audio id="s_keyd" src="/sounds/keyd.wav" />
            <audio id="s_keyz" src="/sounds/keyz.wav" />
            <audio id="s_keyx" src="/sounds/keyx.wav" />
            <audio id="s_keyc" src="/sounds/keyc.wav" />

            
        </div>
    );
};

export default Home;