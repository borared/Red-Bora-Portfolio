import React from "react";
const ParallaxBackground = () => {
  return (
    <section className="absolute inset-0"> 
        <div className="relative h-screen overflow-y-hidden">
            <div className="absolute w-full h-screen inset-0 -z-20"
            style={{
                backgroundImage: 'url("/log/redbora.png")',
            }}/>
            <div className="absolute w-full h-screen inset-0 -z-10"
            style={{
                backgroundImage: 'url("/log/realme.png")',
            }}/>
        </div>
         </section>
    );
};
export default ParallaxBackground;