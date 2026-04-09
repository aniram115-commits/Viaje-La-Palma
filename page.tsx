"use client";

import { useState } from "react";
import { itinerary } from "@/data/itinerary";

export default function HomePage() {
  const [selectedDayId, setSelectedDayId] = useState(itinerary[0].id);
  const [openStopName, setOpenStopName] = useState(itinerary[0].stops[0].name);

  return (
    <main className="page-shell">
      <section className="hero">
        <span className="eyebrow">Viaje compartible</span>
        <h1>La Palma con amigos</h1>
        <p>
  Un plan para enseñaros el viaje día a día, con horarios, paradas y enlaces
  para ver cada sitio en el mapa y en fotos.
</p>
      </section>

      <section className="day-tabs" aria-label="Días del viaje">
        {itinerary.map((day) => (
          <button
            key={day.id}
            className={day.id === selectedDayId ? "day-tab active" : "day-tab"}
           onClick={() => {
  setSelectedDayId(day.id);
  setOpenStopName(day.stops[0].name);
  document.getElementById(day.id)?.scrollIntoView({ behavior: "smooth" });
}}
          >
            <span className="day-label">{day.label}</span>
            <strong>{day.title}</strong>
            <small>{day.zone}</small>
          </button>
        ))}
      </section>

      {itinerary.map((day) => (
  <section key={day.id} id={day.id} className="day-section">
    <section className="day-summary">
      <div>
        <span className="eyebrow soft">{day.label}</span>
        <h2>{day.title}</h2>
        <p>{day.intro}</p>
      </div>
      <div className="pill">{day.zone}</div>
    </section>

    <section className="stops-list">
      {day.stops.map((stop, index) => {
        const isOpen = day.id === selectedDayId && stop.name === openStopName;

        return (
          <article key={stop.name} className={isOpen ? "stop-card open" : "stop-card"}>
            <button
              className="stop-trigger"
              onClick={() => {
                setSelectedDayId(day.id);
                setOpenStopName((current) =>
                  current === stop.name && selectedDayId === day.id ? "" : stop.name
                );
              }}
              aria-expanded={isOpen}
            >
              <div className="stop-left">
                <div className="stop-number">{index + 1}</div>
                <div>
                  <div className="stop-time">{stop.time}</div>
                  <h3>{stop.name}</h3>
                  <div className="chips">
                    <span>{stop.place}</span>
                    <span>{stop.type}</span>
                  </div>
                </div>
              </div>

              <div className="chevron" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </div>
            </button>

            {isOpen && (
              <div className="stop-content">
                <div className="info-grid">
                  <div className="info-block">
                    <h4>Qué es</h4>
                    <p>{stop.description}</p>
                  </div>

                  <div className="info-block">
                    <h4>Qué vais a ver</h4>
                    <p>{stop.whatYouSee}</p>
                  </div>

                  <div className="info-block">
                    <h4>Por qué merece la pena</h4>
                    <p>{stop.whyGo}</p>
                  </div>

                  <div className="info-block">
                    <h4>Apuntes rápidos</h4>
                    <ul>
                      {stop.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="actions">
                  <a href={stop.maps} target="_blank" rel="noreferrer">
                    Ver dónde está
                  </a>
                  <a href={stop.photos} target="_blank" rel="noreferrer" className="secondary">
                    Ver fotos
                  </a>
                </div>
              </div>
            )}
          </article>
        );
      })}
    </section>
  </section>
))}
    </main>
  );
}
