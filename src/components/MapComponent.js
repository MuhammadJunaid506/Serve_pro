import React from 'react';

const MapComponent = (props) => {
  return (
    <div style={{ width: '100%', height:  props.h ? props.h : '450px'}}>
      <iframe
        title="Google Map"
        srcDoc={`
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.16521897302!2d-118.27565770000001!3d33.8853985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2caed56a4e7d9%3A0xd9afdf934a7a4031!2sMain%20Smog!5e0!3m2!1sen!2s!4v1701549370494!5m2!1sen!2s"
            width="100%"
            height="420"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        `}
        frameBorder="0"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

export default MapComponent;
