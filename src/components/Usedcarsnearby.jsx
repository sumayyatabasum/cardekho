import { useState } from "react";

/* ── City landmark SVGs (blue illustrated style) ── */

const AhmedabadSVG = () => (
  <svg viewBox="0 0 80 80" width="64" height="64">
    <circle cx="40" cy="40" r="38" fill="#e8f4ff" />
    <rect x="28" y="45" width="8" height="20" rx="1" fill="#7ab8e8" />
    <rect x="44" y="45" width="8" height="20" rx="1" fill="#7ab8e8" />
    <rect x="22" y="30" width="14" height="16" rx="2" fill="#5a9fd4" />
    <rect x="44" y="30" width="14" height="16" rx="2" fill="#5a9fd4" />
    <path d="M22 30 Q29 20 36 30" fill="#5a9fd4" />
    <path d="M44 30 Q51 20 58 30" fill="#5a9fd4" />
    <rect x="35" y="35" width="10" height="30" rx="1" fill="#4a8fc4" />
    <path d="M33 35 Q40 22 47 35" fill="#4a8fc4" />
    <rect x="37" y="20" width="6" height="8" rx="1" fill="#3a7fb4" />
    <rect x="38" y="15" width="4" height="6" rx="1" fill="#3a7fb4" />
  </svg>
);

const BangaloreSVG = () => (
  <svg viewBox="0 0 80 80" width="64" height="64">
    <circle cx="40" cy="40" r="38" fill="#e0eeff" />
    <rect x="30" y="40" width="20" height="25" rx="1" fill="#6aaee0" />
    <path d="M25 40 Q40 18 55 40" fill="#5a9ed0" />
    <rect x="36" y="28" width="8" height="12" rx="1" fill="#4a8ec0" />
    <path d="M34 28 Q40 18 46 28" fill="#4a8ec0" />
    <rect x="38" y="20" width="4" height="9" rx="1" fill="#3a7eb0" />
    <circle cx="40" cy="19" r="3" fill="#3a7eb0" />
    <rect x="20" y="50" width="10" height="15" rx="1" fill="#7ab8e8" />
    <rect x="50" y="50" width="10" height="15" rx="1" fill="#7ab8e8" />
    <rect x="22" y="44" width="6" height="7" rx="1" fill="#7ab8e8" />
    <rect x="52" y="44" width="6" height="7" rx="1" fill="#7ab8e8" />
  </svg>
);

const ChennaiSVG = () => (
  <svg viewBox="0 0 80 80" width="64" height="64">
    <circle cx="40" cy="40" r="38" fill="#dff0ff" />
    <rect x="32" y="38" width="16" height="27" rx="1" fill="#6aaee0" />
    <path d="M28 38 L40 10 L52 38 Z" fill="#5a9ed0" />
    <rect x="36" y="22" width="8" height="16" fill="#4a8ec0" />
    <rect x="38" y="14" width="4" height="9" fill="#3a7eb0" />
    <circle cx="40" cy="13" r="3.5" fill="#3a7eb0" />
    <rect x="25" y="52" width="8" height="13" rx="1" fill="#7ab8e8" />
    <rect x="47" y="52" width="8" height="13" rx="1" fill="#7ab8e8" />
    <path d="M25 52 Q29 46 33 52" fill="#7ab8e8" />
    <path d="M47 52 Q51 46 55 52" fill="#7ab8e8" />
  </svg>
);

const DelhiSVG = () => (
  <svg viewBox="0 0 80 80" width="64" height="64">
    <circle cx="40" cy="40" r="38" fill="#e4f2ff" />
    {/* Qutub Minar style */}
    <rect x="34" y="25" width="12" height="40" rx="2" fill="#6aaee0" />
    <rect x="33" y="55" width="14" height="5" rx="1" fill="#5a9ed0" />
    <rect x="32" y="60" width="16" height="5" rx="1" fill="#5a9ed0" />
    <rect x="35" y="18" width="10" height="8" rx="1" fill="#4a8ec0" />
    <rect x="37" y="12" width="6" height="7" rx="1" fill="#3a7eb0" />
    <rect x="38" y="8" width="4" height="5" rx="1" fill="#3a7eb0" />
    <rect x="36" y="33" width="8" height="3" rx="1" fill="#4a8ec0" />
    <rect x="36" y="40" width="8" height="3" rx="1" fill="#4a8ec0" />
    <rect x="36" y="47" width="8" height="3" rx="1" fill="#4a8ec0" />
  </svg>
);

const GurgaonSVG = () => (
  <svg viewBox="0 0 80 80" width="64" height="64">
    <circle cx="40" cy="40" r="38" fill="#e0eeff" />
    {/* Cyber Hub / modern arch */}
    <path
      d="M15 65 Q15 30 40 25 Q65 30 65 65"
      fill="none"
      stroke="#5a9ed0"
      strokeWidth="4"
    />
    <path d="M20 65 Q20 35 40 30 Q60 35 60 65" fill="#6aaee0" opacity="0.3" />
    <rect x="36" y="25" width="8" height="40" rx="1" fill="#6aaee0" />
    <rect x="25" y="48" width="8" height="17" rx="1" fill="#7ab8e8" />
    <rect x="47" y="48" width="8" height="17" rx="1" fill="#7ab8e8" />
    <rect x="27" y="42" width="4" height="7" fill="#5a9ed0" />
    <rect x="49" y="42" width="4" height="7" fill="#5a9ed0" />
  </svg>
);

const HyderabadSVG = () => (
  <svg viewBox="0 0 80 80" width="64" height="64">
    <circle cx="40" cy="40" r="38" fill="#e4f0ff" />
    {/* Charminar style - 4 minarets */}
    <rect x="22" y="38" width="7" height="27" rx="1" fill="#7ab8e8" />
    <rect x="51" y="38" width="7" height="27" rx="1" fill="#7ab8e8" />
    <rect x="34" y="34" width="12" height="31" rx="1" fill="#6aaee0" />
    <path d="M22 38 Q25.5 30 29 38" fill="#6aaee0" />
    <path d="M51 38 Q54.5 30 58 38" fill="#6aaee0" />
    <path d="M34 34 Q40 22 46 34" fill="#5a9ed0" />
    <rect x="24" y="28" width="3" height="11" rx="1" fill="#5a9ed0" />
    <rect x="53" y="28" width="3" height="11" rx="1" fill="#5a9ed0" />
    <rect x="36" y="22" width="8" height="13" rx="1" fill="#4a8ec0" />
    <circle cx="25.5" cy="26" r="2.5" fill="#4a8ec0" />
    <circle cx="54.5" cy="26" r="2.5" fill="#4a8ec0" />
    <circle cx="40" cy="20" r="3" fill="#3a7eb0" />
    <rect x="33" y="48" width="14" height="4" rx="1" fill="#4a8ec0" />
  </svg>
);

const JaipurSVG = () => (
  <svg viewBox="0 0 80 80" width="64" height="64">
    <circle cx="40" cy="40" r="38" fill="#eaf4ff" />
    {/* Hawa Mahal style */}
    <rect x="18" y="35" width="44" height="30" rx="1" fill="#7ab8e8" />
    {[0, 1, 2, 3, 4].map((i) => (
      <g key={i}>
        <rect
          x={20 + i * 9}
          y="24"
          width="7"
          height="12"
          rx="1"
          fill="#5a9ed0"
        />
        <path
          d={`M${20 + i * 9} 24 Q${23.5 + i * 9} 18 ${27 + i * 9} 24`}
          fill="#4a8ec0"
        />
        <rect
          x={22 + i * 9}
          y="39"
          width="3"
          height="6"
          rx="1"
          fill="#4a8ec0"
        />
      </g>
    ))}
    <rect x="18" y="35" width="44" height="4" rx="1" fill="#5a9ed0" />
  </svg>
);

const KolkataSVG = () => (
  <svg viewBox="0 0 80 80" width="64" height="64">
    <circle cx="40" cy="40" r="38" fill="#e0eeff" />
    {/* Howrah Bridge style */}
    <rect x="10" y="55" width="60" height="4" rx="1" fill="#6aaee0" />
    <path
      d="M10 55 Q40 20 70 55"
      fill="none"
      stroke="#5a9ed0"
      strokeWidth="3"
    />
    <path
      d="M15 55 Q40 25 65 55"
      fill="none"
      stroke="#7ab8e8"
      strokeWidth="1.5"
      strokeDasharray="3,3"
    />
    {[20, 30, 40, 50, 60].map((x, i) => (
      <line
        key={i}
        x1={x}
        y1="55"
        x2={15 + i * 7}
        y2={30 + Math.sin(i) * 5}
        stroke="#6aaee0"
        strokeWidth="1"
      />
    ))}
    <circle cx="20" cy="48" r="4" fill="#5a9ed0" />
    <circle cx="60" cy="48" r="4" fill="#5a9ed0" />
    <rect x="14" y="45" width="6" height="11" rx="1" fill="#5a9ed0" />
    <rect x="60" y="45" width="6" height="11" rx="1" fill="#5a9ed0" />
    {/* Water ripples */}
    <path
      d="M20 65 Q30 62 40 65 Q50 68 60 65"
      fill="none"
      stroke="#aad4f0"
      strokeWidth="1.5"
    />
    <path
      d="M25 70 Q35 67 45 70"
      fill="none"
      stroke="#aad4f0"
      strokeWidth="1"
    />
  </svg>
);

const MumbaiSVG = () => (
  <svg viewBox="0 0 80 80" width="64" height="64">
    <circle cx="40" cy="40" r="38" fill="#dff0ff" />
    {/* Gateway of India */}
    <rect x="28" y="38" width="24" height="27" rx="1" fill="#6aaee0" />
    <path d="M24 38 Q40 14 56 38" fill="#5a9ed0" />
    <rect x="32" y="22" width="16" height="18" fill="#4a8ec0" />
    <path
      d="M32 40 Q40 30 48 40"
      fill="none"
      stroke="#3a7eb0"
      strokeWidth="2"
    />
    <rect x="35" y="50" width="10" height="15" rx="1" fill="#4a8ec0" />
    <rect x="22" y="50" width="7" height="15" rx="1" fill="#7ab8e8" />
    <rect x="51" y="50" width="7" height="15" rx="1" fill="#7ab8e8" />
    <path d="M28 38 Q28 34 32 34 L32 38" fill="#5a9ed0" />
    <path d="M52 38 Q52 34 48 34 L48 38" fill="#5a9ed0" />
  </svg>
);

const NewDelhiSVG = () => (
  <svg viewBox="0 0 80 80" width="64" height="64">
    <circle cx="40" cy="40" r="38" fill="#e4f2ff" />
    {/* India Gate */}
    <rect x="33" y="30" width="14" height="35" rx="1" fill="#6aaee0" />
    <path d="M28 30 Q40 10 52 30" fill="#5a9ed0" />
    <rect x="30" y="26" width="20" height="5" rx="1" fill="#4a8ec0" />
    <rect x="26" y="62" width="28" height="4" rx="1" fill="#5a9ed0" />
    <rect x="36" y="14" width="8" height="17" fill="#4a8ec0" />
    <rect x="38" y="10" width="4" height="5" fill="#3a7eb0" />
    <rect x="33" y="44" width="14" height="3" fill="#4a8ec0" />
  </svg>
);

const NoidaSVG = () => (
  <svg viewBox="0 0 80 80" width="64" height="64">
    <circle cx="40" cy="40" r="38" fill="#e8f4ff" />
    {/* Modern towers */}
    <rect x="20" y="28" width="12" height="37" rx="1" fill="#7ab8e8" />
    <rect x="34" y="20" width="12" height="45" rx="1" fill="#5a9ed0" />
    <rect x="48" y="32" width="12" height="33" rx="1" fill="#7ab8e8" />
    <rect x="22" y="35" width="8" height="3" rx="0.5" fill="#4a8ec0" />
    <rect x="22" y="42" width="8" height="3" rx="0.5" fill="#4a8ec0" />
    <rect x="22" y="49" width="8" height="3" rx="0.5" fill="#4a8ec0" />
    <rect x="36" y="27" width="8" height="3" rx="0.5" fill="#4a8ec0" />
    <rect x="36" y="34" width="8" height="3" rx="0.5" fill="#4a8ec0" />
    <rect x="36" y="41" width="8" height="3" rx="0.5" fill="#4a8ec0" />
    <rect x="36" y="48" width="8" height="3" rx="0.5" fill="#4a8ec0" />
    <rect x="50" y="39" width="8" height="3" rx="0.5" fill="#4a8ec0" />
    <rect x="50" y="46" width="8" height="3" rx="0.5" fill="#4a8ec0" />
    <rect x="50" y="53" width="8" height="3" rx="0.5" fill="#4a8ec0" />
    <rect x="36" y="14" width="3" height="7" rx="1" fill="#3a7eb0" />
  </svg>
);

const PuneSVG = () => (
  <svg viewBox="0 0 80 80" width="64" height="64">
    <circle cx="40" cy="40" r="38" fill="#e4f0ff" />
    {/* Shaniwar Wada style */}
    <rect x="20" y="38" width="40" height="27" rx="1" fill="#7ab8e8" />
    <rect x="18" y="36" width="44" height="4" rx="1" fill="#6aaee0" />
    <rect x="34" y="22" width="12" height="18" rx="1" fill="#5a9ed0" />
    <path d="M32 22 Q40 12 48 22" fill="#4a8ec0" />
    <rect x="37" y="14" width="6" height="9" rx="1" fill="#3a7eb0" />
    <circle cx="40" cy="13" r="2.5" fill="#3a7eb0" />
    <rect x="22" y="42" width="6" height="23" rx="1" fill="#6aaee0" />
    <rect x="52" y="42" width="6" height="23" rx="1" fill="#6aaee0" />
    <rect x="36" y="50" width="8" height="15" rx="1" fill="#4a8ec0" />
    <rect x="20" y="36" width="6" height="3" fill="#5a9ed0" />
    <rect x="54" y="36" width="6" height="3" fill="#5a9ed0" />
  </svg>
);

const cities = [
  { name: "Ahmedabad", icon: <AhmedabadSVG /> },
  { name: "Bangalore", icon: <BangaloreSVG /> },
  { name: "Chennai", icon: <ChennaiSVG /> },
  { name: "Delhi NCR", icon: <DelhiSVG /> },
  { name: "Gurgaon", icon: <GurgaonSVG /> },
  { name: "Hyderabad", icon: <HyderabadSVG /> },
  { name: "Jaipur", icon: <JaipurSVG /> },
  { name: "Kolkata", icon: <KolkataSVG /> },
  { name: "Mumbai", icon: <MumbaiSVG /> },
  { name: "New Delhi", icon: <NewDelhiSVG /> },
  { name: "Noida", icon: <NoidaSVG /> },
  { name: "Pune", icon: <PuneSVG /> },
];

function CityCard({ city }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        padding: "16px 10px 14px",
        borderRadius: "12px",
        border: `1.5px solid ${hovered ? "#c0d8f0" : "#e4eef8"}`,
        background: hovered ? "#f0f8ff" : "white",
        cursor: "pointer",
        textDecoration: "none",
        boxShadow: hovered ? "0 4px 16px rgba(90,158,208,0.15)" : "none",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.2s ease",
        minWidth: "110px",
        flex: "1",
      }}
    >
      {/* Landmark illustration */}
      <div
        style={{
          width: "72px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {city.icon}
      </div>

      {/* Label */}
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: "10.5px",
            color: "#999",
            marginBottom: "2px",
            fontWeight: "400",
          }}
        >
          Used cars in
        </div>
        <div
          style={{
            fontSize: "13.5px",
            fontWeight: "700",
            color: "#222",
          }}
        >
          {city.name}
        </div>
      </div>
    </a>
  );
}

/* Right panel — illustrated scenic decoration */
const SceneryPanel = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px 24px",
      minWidth: "200px",
      position: "relative",
    }}
  >
    <div
      style={{
        fontSize: "18px",
        fontWeight: "700",
        color: "#4a8ec0",
        textAlign: "center",
        lineHeight: "1.4",
        marginBottom: "24px",
        zIndex: 2,
        position: "relative",
      }}
    >
      I am looking to buy a second hand car in
    </div>

    {/* Decorative scene */}
    <svg
      viewBox="0 0 160 100"
      width="160"
      height="100"
      style={{ opacity: 0.7 }}
    >
      {/* Sky/hills */}
      <path
        d="M0 70 Q40 45 80 55 Q120 65 160 50 L160 100 L0 100 Z"
        fill="#d0e8f8"
      />
      <path
        d="M0 80 Q50 60 100 70 Q130 75 160 65 L160 100 L0 100 Z"
        fill="#e8f4ff"
      />
      {/* Sun */}
      <circle cx="120" cy="28" r="12" fill="#f5c542" />
      {/* Birds */}
      <path
        d="M70 18 Q74 14 78 18"
        fill="none"
        stroke="#5a9ed0"
        strokeWidth="1.5"
      />
      <path
        d="M82 22 Q86 18 90 22"
        fill="none"
        stroke="#5a9ed0"
        strokeWidth="1.5"
      />
      {/* Trees */}
      <rect x="18" y="62" width="4" height="18" fill="#6ab47a" />
      <path d="M20 62 Q14 48 26 48 Q32 48 26 62Z" fill="#5aa46a" />
      <rect x="30" y="66" width="3" height="14" fill="#6ab47a" />
      <path d="M31.5 66 Q26 55 37 55 Q42 55 37 66Z" fill="#5aa46a" />
      {/* Road */}
      <rect x="55" y="85" width="50" height="6" rx="1" fill="#c8d8e8" />
      <rect x="78" y="86" width="4" height="4" rx="0.5" fill="white" />
      {/* Person silhouette */}
      <circle cx="100" cy="76" r="4" fill="#8ab8d8" />
      <rect x="98" y="80" width="4" height="8" rx="1" fill="#8ab8d8" />
    </svg>
  </div>
);

export default function UsedCarsNearby() {
  return (
    <div
      style={{
        background: "#f5f5f5",
        padding: "0 20px 32px",
        fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: "white",
          borderRadius: "16px",
          padding: "28px 28px 28px",
          boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
          display: "flex",
          gap: "16px",
          alignItems: "stretch",
        }}
      >
        {/* Left: title + grid */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              margin: "0 0 22px",
              fontSize: "22px",
              fontWeight: "800",
              color: "#111",
            }}
          >
            Get trusted used cars nearby
          </h2>

          {/* 2-row grid of city cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "12px",
            }}
          >
            {cities.map((city, i) => (
              <CityCard key={i} city={city} />
            ))}
          </div>
        </div>

        {/* Right: scenic illustration panel */}
        <SceneryPanel />
      </div>
    </div>
  );
}
