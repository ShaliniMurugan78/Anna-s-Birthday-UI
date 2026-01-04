import React from 'react';
import { motion } from 'framer-motion';
import Particles from '../components/Particles';

const Letter = ({ onNext }) => {
    // Text split into paragraphs for stagger effect
    const paragraphs = [
        "My dearest Anna,",
        "Happy Birthday.",

        "Today, I just want you to know one simple thing —",
        "your happiness means everything to me.",
        "If you are peaceful, smiling, and truly happy,",
        "that alone is more than enough for my heart.",

        "This year, I sincerely pray that every dream you carry in your heart comes true.",
        "You deserve all the good things life has to offer,",
        "and I hope life gives them to you in the most beautiful way.",

        "In my life, the greatest gift I’ve ever received is you, Anna.",
        "Your presence, your care, and your love mean more to me than words can ever explain.",
        "No matter where life takes us or what situations come our way,",
        "I will never let go of you.",

        "I truly believe that your life will be filled with good things.",
        "Be a good person, stay true to yourself,",
        "and always choose what you know is right.",
        "If you ever make a mistake, learn from it and never repeat it.",
        "That is all I wish for you.",

        "Remember this always —",
        "your sister will forever stand by your side.",
        "In your struggles and in your happiest moments,",
        "I will be right there, without leaving you.",

        "Live happily.",
        "Live peacefully.",
        "Live with joy and light in your heart.",

        "Have the happiest birthday ever 🎂",
        "With all my love,",
        "Your forever sister ❤️"
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 1 // Slow reading pace
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1 }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 1 } }}
            style={{
                width: '100%',
                height: '100%',
                background: '#e0d8cc', // Warm grey/beige
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '20px'
            }}
        >
            <Particles count={25} color="#8b7355" speed={5} />

            {/* Vignette effect */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'radial-gradient(circle, transparent 50%, rgba(0,0,0,0.2) 100%)'
            }} />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    background: '#f4e4bc', // Parchment color
                    padding: '40px 30px',
                    maxWidth: '800px',
                    width: '100%',
                    borderRadius: '5px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2), inset 0 0 60px rgba(139, 69, 19, 0.1)', // Inner shadow for "aged" look, outer for float
                    position: 'relative',
                    transform: 'rotate(-1deg)', // Slight tilt
                    maxHeight: '85vh',
                    overflowY: 'auto'
                }}
            >
                {/* Rose decoration */}
                <div style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '2rem', opacity: 0.8 }}>
                    🌹
                </div>

                {paragraphs.map((text, i) => (
                    <motion.p
                        key={i}
                        variants={itemVariants}
                        style={{
                            fontFamily: 'var(--font-letter)', // Libre Baskerville
                            fontSize: '1.1rem',
                            lineHeight: '1.8',
                            color: '#4a3b2a',
                            marginBottom: '20px',
                            textAlign: 'left'
                        }}
                    >
                        {text}
                    </motion.p>
                ))}

                <motion.div
                    variants={itemVariants}
                    style={{ marginTop: '30px', textAlign: 'center' }}
                >
                    <button
                        onClick={onNext}
                        style={{
                            fontFamily: 'var(--font-title)',
                            fontSize: '1.2rem',
                            color: '#8b4513',
                            borderBottom: '1px solid #8b4513',
                            cursor: 'pointer',
                            opacity: 0.8
                        }}
                    >
                        Next ➜
                    </button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Letter;
