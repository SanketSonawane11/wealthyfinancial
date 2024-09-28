import React from "react";

function Mp() {
  return (
    <div className="w-screen p-9">
      <div
        style={{
          maxWidth: "100%",
          listStyle: "none",
          transition: "none",
          overflow: "hidden",
          width: "50%",
          height: "500px",
          margin: "auto",
        }}
      >
        <div
          id="display-google-map"
          style={{ height: "100%", width: "100%", maxWidth: "100%" }}
        >
          <iframe
            title="google-map"
            style={{ height: "100%", width: "100%", border: 0 }}
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/place?q=Metro+Inox+marine+lines&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            allowFullScreen
          ></iframe>
        </div>
        <a
          className="google-map-html"
          href="https://www.bootstrapskins.com/themes"
          id="grab-maps-authorization"
        >
          premium bootstrap themes
        </a>
        <style>{`
        #display-google-map img.text-marker {
          max-width: none !important;
          background: none !important;
        }
        img {
          max-width: none;
        }
      `}</style>
      </div>
    </div>
  );
}

export default Mp;

