import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
                {children}
            </AnimatePresence>
        </div>
    );
};

export default Layout;
