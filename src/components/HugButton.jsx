import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const HugButton = ({ onHug, delay = 0 }) => {
    const [hugged, setHugged] = useState(false);

    const handleHug = (e) => {
        e.stopPropagation(); // Prevent page transition on hug click
        if (!hugged) {
            setHugged(true);
            onHug && onHug();
        }
    };

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay, type: "spring", stiffness: 260, damping: 20 }}
            style={{ marginTop: '30px', cursor: 'pointer', zIndex: 100 }}
            onClick={handleHug}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '15px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 215, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: hugged ? '0 0 20px #4a90e2' : '0 0 10px rgba(255, 215, 0, 0.3)'
            }}>
                <Heart
                    size={32}
                    color={hugged ? "#4a90e2" : "#ffd700"}
                    fill={hugged ? "#4a90e2" : "none"}
                />
            </div>
            {!hugged && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                        color: '#ffd700',
                        marginTop: '10px',
                        fontSize: '0.9rem',
                        textAlign: 'center',
                        fontFamily: 'var(--font-body)'
                    }}
                >
                    Send a Hug
                </motion.p>
            )}
        </motion.div>
    );
};

export default HugButton;
