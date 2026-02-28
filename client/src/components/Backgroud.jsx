import React, { useEffect, useState } from 'react'
import Galaxy from './Galaxy';

const Backgroud = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <div className="fixed inset-0 z-0">
            {mounted && (
                <Galaxy
                    mouseRepulsion={true}
                    mouseInteraction={true}
                    mouseRepulsionStrength={2.2}
                    interactionRadius={140}
                    glowIntensity={0.5}
                    saturation={0}
                    hueShift={140}
                    density={0.35}
                    twinkleIntensity={0.5}
                    starSpeed={0.3}
                    speed={0.8}
                    rotationSpeed={0.03}
                    className="w-full h-full"
                />
            )}
        </div>
    );
};

export default Backgroud;