import { CONTACT } from "@/constants/contact";

export function ContactMap() {
  const query = encodeURIComponent(CONTACT.address);

  return (
    <div className="rounded-2xl overflow-hidden border border-primary-100 h-full min-h-80">
      <iframe
        title="Physioleben Standort"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${query}`}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "320px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
