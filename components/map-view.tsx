'use client';

export default function MapView() {
  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.039877732084!2d174.847849275844!3d-36.92322367221226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d49515e726dff%3A0x5f9e7652b10beb98!2sBishman%20Ltd-Head%20Office!5e1!3m2!1sen!2snz!4v1753861889318!5m2!1sen!2snz"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
