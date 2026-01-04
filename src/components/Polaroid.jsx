import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Polaroid = ({
    image,
    caption,
    altCaption = "You mean more than words.",
    rotation = 0,
    delay = 0
}) => {
    const [interacted, setInteracted] = useState(false);

    const handleClick = () => {
        setInteracted(true);
    };

    return (
        <motion.div
            initial={{ y: -500, opacity: 0, rotate: 0 }}
            animate={{ y: 0, opacity: 1, rotate: rotation }}
            transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay: delay
            }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            style={{
                background: 'white',
                padding: '15px 15px 40px 15px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                width: '180px',
                height: '240px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transformOrigin: 'center',
                cursor: 'pointer',
                position: 'relative' // relative for absolute heart
            }}
            onClick={handleClick}
        >
            <div style={{ width: '100%', height: '150px', background: '#eee', overflow: 'hidden', marginBottom: '15px' }}>
                {image ? (
                    <img src={image} alt="Memory" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc' }}>
                        Photo
                    </div>
                )}
            </div>

            <motion.p
                key={interacted ? 'alt' : 'main'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                    fontFamily: 'var(--font-hand)',
                    color: '#333',
                    textAlign: 'center',
                    fontSize: '1.2rem',
                    lineHeight: '1.2'
                }}
            >
                {interacted ? altCaption : caption}
            </motion.p>

            {/* Floating heart on interaction */}
            {interacted && (
                <motion.div
                    initial={{ opacity: 1, y: 0, scale: 0.5 }}
                    animate={{ opacity: 0, y: -100, scale: 1.5 }}
                    transition={{ duration: 1.5 }}
                    style={{ position: 'absolute', bottom: '20px', pointerEvents: 'none' }}
                >
                    <Heart fill="#4a90e2" color="#4a90e2" size={24} />
                </motion.div>
            )}
        </motion.div>
    );
};

export default Polaroid;
