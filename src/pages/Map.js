import React, { Component } from "react";
import { Location } from "../Component/Contact/Location";
import { Phone } from "../Component/Contact/Phone";
import { SMS } from "../Component/Contact/SMS";
import data from "../Data/Data.json";

export default class Map extends Component {
  render() {
    const {
      about: {
        location,
        telephone,
        address: { street, city, state, zip },
      },
      title,
    } = data;

    return (
      <div className="contact">
        <div className="contact-details">
          <div className="contact__location contact__section">
            <h2 className="text-center title">OUR LOCATION</h2>
            <iframe
              className="contact__map"
              title="map location"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1840.7974539957531!2d-93.14679563778205!3d44.640006531288016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f64a677239da97%3A0x24b688b3a397daf5!2sFarmington%20Steak%20House!5e0!3m2!1sen!2sus!4v1679333105449!5m2!1sen!2sus"
              allowFullScreen
            ></iframe>
          </div>
          <div className="contact__address contact__section">
            <h2 className="contact__address-title title">ADDRESS</h2>
            <address className="contact__address">
              {title}
              <br />
              {street} <Location href={location}></Location>
              <br />
              {city},<br />
              {state} {zip}
              <br />
              {telephone}
              <br />
              <Phone className="contact__link" telephone={telephone}>
                Call
              </Phone>{" "}
              or{" "}
              <SMS
                className="contact__link"
                telephone={telephone}
                message="Hello Krystle-"
              >
                Text
              </SMS>
            </address>
          </div>
        </div>
      </div>
    );
  }
}
