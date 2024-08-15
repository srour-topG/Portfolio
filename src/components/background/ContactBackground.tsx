import React from "react";

const ContactBackground: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <video
        className="object-cover w-full h-full"
        autoPlay={true}
        loop
        playsInline={true}
        muted
        preload="auto"
      >
        <source src="/contact.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t to-transparent from-bg-dark" />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b to-transparent from-bg-dark" />
    </div>
  );
};

export default ContactBackground;
