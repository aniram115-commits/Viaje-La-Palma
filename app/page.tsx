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
        <span className="eyebrow">Viaje compartible</span>
        <h1>La Palma con amigos</h1>
        <p>
          Toca un día y luego una parada. Cada parada se abre en su propio sitio,
          sin mandarte al final de la página. Todo el contenido se puede editar
          fácilmente en un solo archivo.
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
            }}
          >
            <span className="day-label">{day.label}</span>
            <strong>{day.title}</strong>
            <small>{day.zone}</small>
          </button>
        ))}
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
                onClick={() => setOpenStopName((current) => (current === stop.name ? "" : stop.name))}
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
