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
        <div className="hero-topbar">
          <label htmlFor="day-select" className="day-select-label">
            Día
          </label>
          <select
            id="day-select"
            className="day-select"
            value={selectedDayId}
            onChange={(e) => {
              const newDayId = e.target.value;
              const newDay =
                itinerary.find((day) => day.id === newDayId) ?? itinerary[0];

              setSelectedDayId(newDayId);
              setOpenStopName(newDay.stops[0].name);
            }}
          >
            {itinerary.map((day) => (
              <option key={day.id} value={day.id}>
                {day.label} · {day.title}
              </option>
            ))}
          </select>
        </div>

        <span className="eyebrow">Viaje a La Palma</span>
        <h1>La Palma con amigos</h1>
        <p>
          Un plan para enseñaros el viaje día a día, con horarios, paradas y enlaces
          para ver cada sitio en el mapa y en fotos.
        </p>
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
            <article key={stop.name} className={isOpen ? "stop-card open" : "stop-card"}>
              <button
                className="stop-trigger"
                onClick={() =>
                  setOpenStopName((current) => (current === stop.name ? "" : stop.name))
                }
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
    </main>
  );
}