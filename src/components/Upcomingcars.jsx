import { useState, useRef } from "react";

const ChevronRight = ({ size = 16, color = "#555" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const FaceliftIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#f05a22">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const upcomingCars = [
  {
    name: "Renault Bridger",
    price: "₹7 Lakh",
    launchDate: "EXPECTED LAUNCH : MAR 10, 2026",
    facelift: false,
    bg: "#1a1a2e",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/bridger-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    dark: true,
  },
  {
    name: "Hyundai Verna Facelift",
    price: "₹12 Lakh",
    launchDate: "EXPECTED LAUNCH : MAR 12, 2026",
    facelift: true,
    bg: "#e8e8e8",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/137233/verna-facelift-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    dark: false,
  },
  {
    name: "Ferrari 849 Testarossa",
    price: "₹10.37 Cr",
    launchDate: "EXPECTED LAUNCH : MAR 14, 2026",
    facelift: false,
    bg: "#eee",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/ferrari-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    dark: false,
  },
  {
    name: "Maruti Suzuki Brezza 2026",
    price: "₹8.50 Lakh",
    launchDate: "EXPECTED LAUNCH : MAR 15, 2026",
    facelift: true,
    bg: "#ececec",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/159089/brezza-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    dark: false,
  },
  {
    name: "Kia EV9",
    price: "₹1.10 Cr",
    launchDate: "EXPECTED LAUNCH : MAR 18, 2026",
    facelift: false,
    bg: "#e4eaf0",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/ev9-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    dark: false,
  },
  {
    name: "Toyota Land Cruiser",
    price: "₹2.10 Cr",
    launchDate: "EXPECTED LAUNCH : MAR 22, 2026",
    facelift: false,
    bg: "#e8e4dc",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/land-cruiser-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    dark: false,
  },
];

/* Draped-cover SVG placeholder for unrevealed cars */
const CoveredCarSVG = () => (
  <svg
    viewBox="0 0 280 160"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="cloth" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#d8d8d8" />
        <stop offset="100%" stopColor="#b0b0b0" />
      </linearGradient>
    </defs>
    {/* car body under cloth */}
    <ellipse cx="140" cy="115" rx="115" ry="22" fill="#bbb" opacity="0.4" />
    {/* cloth drape */}
    <path
      d="M25 115 Q30 70 55 60 Q80 50 100 48 Q120 46 140 45 Q160 44 175 47 Q200 52 225 62 Q248 73 255 115 Z"
      fill="url(#cloth)"
    />
    {/* cloth folds */}
    <path
      d="M60 115 Q62 80 70 65"
      stroke="#aaa"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M100 115 Q103 72 108 55"
      stroke="#aaa"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M140 115 Q140 68 140 50"
      stroke="#aaa"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M180 115 Q177 72 172 55"
      stroke="#aaa"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M218 115 Q216 80 210 66"
      stroke="#aaa"
      strokeWidth="1.5"
      fill="none"
    />
    {/* cloth hem */}
    <path
      d="M25 115 Q60 122 100 118 Q140 114 180 118 Q220 122 255 115"
      stroke="#999"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

function UpcomingCarCard({ car }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "0 0 calc(25% - 12px)",
        minWidth: "210px",
        borderRadius: "12px",
        border: "1px solid #e8e8e8",
        background: "white",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: hovered
          ? "0 6px 24px rgba(0,0,0,0.10)"
          : "0 1px 4px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.22s ease",
      }}
    >
      {/* Image area */}
      <div
        style={{
          position: "relative",
          background: car.bg,
          height: "172px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Expected Launch badge */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            background: car.dark
              ? "rgba(255,255,255,0.15)"
              : "rgba(255,255,255,0.92)",
            border: `1px solid ${car.dark ? "rgba(255,255,255,0.25)" : "#ddd"}`,
            borderRadius: "6px",
            padding: "4px 10px",
            fontSize: "10px",
            fontWeight: "700",
            color: car.dark ? "white" : "#333",
            letterSpacing: "0.3px",
            zIndex: 2,
            backdropFilter: "blur(4px)",
            whiteSpace: "nowrap",
          }}
        >
          {car.launchDate}
        </div>

        {/* Facelift badge (bottom-right) */}
        {car.facelift && (
          <div
            style={{
              position: "absolute",
              bottom: "12px",
              right: "12px",
              background: "rgba(255,255,255,0.92)",
              border: "1px solid #ddd",
              borderRadius: "20px",
              padding: "4px 10px",
              fontSize: "11px",
              fontWeight: "600",
              color: "#333",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              gap: "5px",
              backdropFilter: "blur(4px)",
            }}
          >
            <FaceliftIcon /> Facelift
          </div>
        )}

        {/* Car image or covered placeholder */}
        {!imgError ? (
          <img
            src={car.img}
            alt={car.name}
            onError={() => setImgError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          />
        ) : (
          <div
            style={{
              width: "85%",
              height: "80%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CoveredCarSVG />
          </div>
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: "14px 14px 16px" }}>
        <div
          style={{
            fontSize: "14.5px",
            fontWeight: "700",
            color: "#111",
            marginBottom: "5px",
          }}
        >
          {car.name}
        </div>

        {/* Price + Estimated label */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "6px",
            marginBottom: "14px",
          }}
        >
          <span style={{ fontSize: "14px", fontWeight: "700", color: "#111" }}>
            {car.price}
          </span>
          <span
            style={{ fontSize: "11.5px", color: "#888", fontWeight: "400" }}
          >
            Estimated
          </span>
        </div>

        {/* Alert CTA */}
        <button
          style={{
            width: "100%",
            padding: "9px 0",
            border: "1.5px solid #f05a22",
            borderRadius: "8px",
            background: hovered ? "#fff4f0" : "white",
            color: "#f05a22",
            fontSize: "13px",
            fontWeight: "600",
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "background 0.18s",
          }}
        >
          Alert Me When Launched
        </button>
      </div>
    </div>
  );
}

export default function UpcomingCars() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  };

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
          padding: "28px 28px 24px",
          boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
        }}
      >
        {/* Title */}
        <h2
          style={{
            margin: "0 0 22px",
            fontSize: "22px",
            fontWeight: "800",
            color: "#111",
          }}
        >
          Upcoming cars
        </h2>

        {/* Cards + Arrow */}
        <div style={{ position: "relative" }}>
          <div
            ref={scrollRef}
            style={{
              display: "flex",
              gap: "16px",
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              paddingBottom: "4px",
            }}
          >
            {upcomingCars.map((car, i) => (
              <UpcomingCarCard key={i} car={car} />
            ))}
          </div>

          {/* Right scroll arrow */}
          <button
            onClick={() => scroll(1)}
            style={{
              position: "absolute",
              right: "-16px",
              top: "50%",
              transform: "translateY(-60%)",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "white",
              border: "1.5px solid #e0e0e0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
              zIndex: 5,
              transition: "box-shadow 0.15s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.18)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.12)")
            }
          >
            <ChevronRight size={16} color="#333" />
          </button>
        </div>

        {/* View All link */}
        <div style={{ marginTop: "22px" }}>
          <a
            href="#"
            style={{
              color: "#f05a22",
              fontSize: "13.5px",
              fontWeight: "700",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.textDecoration = "underline")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textDecoration = "none")
            }
          >
            View All Upcoming Cars
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "#f05a22",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ChevronRight size={11} color="white" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
