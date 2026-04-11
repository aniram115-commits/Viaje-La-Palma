"use client";

import { useMemo, useState } from "react";
import { itinerary } from "@/data/itinerary";

export default function HomePage() {
const [selectedDayId, setSelectedDayId] = useState(itinerary[0].id);
const [openStopName, setOpenStopName] = useState("");
const [currentView, setCurrentView] = useState<"home" | "day" | "final">("home");

  const selectedDay = useMemo(
    () => itinerary.find((day) => day.id === selectedDayId) ?? itinerary[0],
    [selectedDayId]
  );

  return (
    <main className="page-shell">
<section className="hero">
  <div className="day-tabs">
    <button
      className={currentView === "home" ? "day-tab active glow" : "day-tab"}
      onClick={() => {
        setCurrentView("home");
        setOpenStopName("");
      }}
    >
      Inicio
    </button>

    {itinerary.map((day) => (
      <button
        key={day.id}
        className={
          currentView === "day" && day.id === selectedDayId
            ? "day-tab active glow"
            : "day-tab"
        }
        onClick={() => {
          setSelectedDayId(day.id);
          setOpenStopName("");
          setCurrentView("day");
        }}
      >
        {day.label}
      </button>
    ))}

    <button
      className={currentView === "final" ? "day-tab active glow" : "day-tab"}
      onClick={() => {
        setCurrentView("final");
        setOpenStopName("");
      }}
    >
      Final
    </button>
  </div>

  {currentView === "home" && (
    <>
      <span className="eyebrow">Viaje a La Palma 🌴</span>

<h1 className="gradient-title">La Palma con amigos ✨</h1>

      <p className="hero-text">
        Un plan para enseñaros el viaje día a día, con horarios, paradas y enlaces
        para ver cada sitio en el mapa y en fotos.
      </p>

<img
  className="hero-photo"
  src="/images/inicio.jpg"
  alt="La Palma mapa ilustrado"
/>
    </>
  )}

  {currentView === "final" && (
    <>
      <span className="eyebrow">Cierre del viaje ✨</span>

      <h1>Lo mejor de La Palma</h1>

      <p className="hero-text">
        Después de estos tres días, nos vamos con la sensación de haber visto lo
        mejor de La Palma.
      </p>

<img
  className="hero-photo"
  src="/images/final.jpg"
  alt="Atardecer en La Palma"
/>

      <div className="final-card">
        <ul>
          <li>🌿 Bosques únicos</li>
          <li>🌋 Volcanes de verdad</li>
          <li>🌊 Baños en sitios espectaculares</li>
          <li>🌄 Miradores brutales</li>
        </ul>
        <p>Y probablemente… 👉 nos quedaremos con ganas de más 😄</p>
      </div>
    </>
  )}
</section>

{currentView === "day" && (
  <>
    <section className="day-summary">
      <div style={{ width: "100%" }}>
        <span className="eyebrow soft">{selectedDay.label}</span>
<h2 className="gradient-title">{selectedDay.title}</h2>
        <p>{selectedDay.intro}</p>
      </div>

      <div className="pill">{selectedDay.zone}</div>
    </section>

    <section className="stops-list">
        {selectedDay.stops.map((stop, index) => {
          const isOpen = stop.name === openStopName;

          return (
           <article
  id={stop.name}
  key={stop.name}
  className={isOpen ? "stop-card open glow active-card" : "stop-card"}
>
  <button
    className="stop-trigger"
    onClick={() => {
      const isOpening = openStopName !== stop.name;
      setOpenStopName((current) => (current === stop.name ? "" : stop.name));

      if (isOpening) {
        setTimeout(() => {
const element = document.getElementById(stop.name);

if (element) {
  const yOffset = -80; // ajusta si hace falta
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth"
  });
}
        }, 120);
      }
    }}
  >
                <div className="stop-left">
                  <div className="stop-number">{stop.time}</div>
                  <div>
                    <h3>{stop.name}</h3>
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
                    <a
                      href={stop.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📍 Ubicación
                    </a>
                    <a
                      href={
                        stop.photos ||
                        `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
                          stop.name + " La Palma"
                        )}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="secondary"
                    >
                      📸 Fotos
                    </a>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </section>
        </>
      )}
    </main>
  );
}