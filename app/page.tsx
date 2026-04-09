"use client";

import { useMemo, useState } from "react";
import { itinerary } from "@/data/itinerary";

export default function HomePage() {
  const [selectedDayId, setSelectedDayId] = useState(itinerary[0].id);
  const [openStopName, setOpenStopName] = useState(itinerary[0].stops[0].name);

  const selectedDay = useMemo(
    () => itinerary.find((day) => day.id === selectedDayId) ?? itinerary[0],
    [selectedDayId]
  );

  return (
    <main className="page-shell">
      <section className="hero">
        <div className="day-tabs">
          {itinerary.map((day) => (
            <button
              key={day.id}
              className={
  day.id === selectedDayId
    ? "day-tab active glow"
    : "day-tab"
}
              onClick={() => {
                setSelectedDayId(day.id);
                setOpenStopName(day.stops[0].name);
              }}
            >
              {day.label}
            </button>
          ))}
        </div>

<span className="eyebrow">Viaje a La Palma 🌴</span>

<h1>
  La Palma con amigos ✨
</h1>

<p className="hero-text">
  Un plan para enseñaros el viaje día a día, con horarios, paradas y enlaces
  para ver cada sitio en el mapa y en fotos.
</p>

<div className="hero-actions">
  <button className="primary-btn">Ver itinerario</button>
  <button className="secondary-btn">Ver mapa</button>
</div>
      </section>

      <section className="day-summary">
        <div>
          <span className="eyebrow soft">{selectedDay.label}</span>
          <h2>{selectedDay.title}</h2>
          <p>{selectedDay.intro}</p>
        </div>
        <div className="pill">{selectedDay.zone}</div>
      </section>

      <section className="stops-list">
        {selectedDay.stops.map((stop, index) => {
          const isOpen = stop.name === openStopName;

          return (
            <article
  key={stop.name}
  className={isOpen ? "stop-card open glow active-card" : "stop-card"}
>
              <button
                className="stop-trigger"
                onClick={() =>
                  setOpenStopName((current) => (current === stop.name ? "" : stop.name))
                }
              >
                <div className="stop-left">
                  <div className="stop-number">{stop.time}</div>
                  <div>
                    <h3>{stop.name}</h3>
                    <div className="chips">
                      <span>{stop.place}</span>
                      <span>{stop.type}</span>
                    </div>
                  </div>
                </div>

<div className="chevron">
  {isOpen ? "▲" : "▼"}
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
                    <a href={stop.maps} target="_blank">
                      Ver dónde está
                    </a>
                    <a href={stop.photos} target="_blank" className="secondary">
                      Ver fotos
                    </a>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </section>
    </main>
  );
}