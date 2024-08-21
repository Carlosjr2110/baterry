interface KeyProps {
    sound: string;
    label: string;
    onPlay: (sound: string) => void;
    isActive?: boolean;
}

export const Key: React.FC<KeyProps> = ({ sound, label, onPlay, isActive = false }) => {
    const handlePlay = () => {
        onPlay(sound);
    };

    return (
        <div
            className={`w-20 h-20 border-2 border-white text-white flex items-center justify-center text-2xl font-bold ${isActive ? 'border-yellow-400 text-yellow-400 bg-yellow-100' : ''}`}
            onClick={handlePlay}
        >
            {label}
        </div>
    );
};
