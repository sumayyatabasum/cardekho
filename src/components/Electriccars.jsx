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

const electricCars = [
  {
    name: "Maruti Suzuki e Vitara",
    price: "₹15.99 - 20.01 Lakh*",
    launchDate: "LAUNCHED ON : FEB 18, 2026",
    bg: "#e8ecf0",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/159683/e-vitara-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  },
  {
    name: "Tata Punch EV",
    price: "₹9.69 - 12.59 Lakh*",
    launchDate: "LAUNCHED ON : FEB 20, 2026",
    bg: "#ede8e4",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/160143/punch-ev-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  },
  {
    name: "Mahindra XEV 9e",
    price: "₹21.90 - 31.25 Lakh*",
    launchDate: null,
    bg: "#f0e8e8",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/xev-9e-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  },
  {
    name: "Mahindra BE 6",
    price: "₹18.90 - 28.49 Lakh*",
    launchDate: null,
    bg: "#eaeaea",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/be-6e-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  },
  {
    name: "Hyundai Creta EV",
    price: "₹17.99 - 23.50 Lakh*",
    launchDate: null,
    bg: "#e4ecf4",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/creta-electric-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  },
  {
    name: "Tata Nexon EV",
    price: "₹14.49 - 19.49 Lakh*",
    launchDate: null,
    bg: "#e8f0e8",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/nexon-ev-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
  },
];

function ElectricCarCard({ car }) {
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
        {/* Launch badge */}
        {car.launchDate && (
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              background: "rgba(255,255,255,0.92)",
              border: "1px solid #ddd",
              borderRadius: "6px",
              padding: "4px 10px",
              fontSize: "10px",
              fontWeight: "700",
              color: "#333",
              letterSpacing: "0.3px",
              zIndex: 2,
              backdropFilter: "blur(4px)",
            }}
          >
            {car.launchDate}
          </div>
        )}

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
          /* Fallback car silhouette */
          <svg width="130" height="76" viewBox="0 0 130 76" fill="none">
            <path
              d="M12 50 L22 28 Q27 18 40 18 L90 18 Q103 18 108 28 L118 50 L12 50Z"
              fill="#ccc"
            />
            <rect x="10" y="50" width="110" height="13" rx="4" fill="#bbb" />
            <circle
              cx="32"
              cy="65"
              r="10"
              fill="#999"
              stroke="white"
              strokeWidth="3"
            />
            <circle
              cx="98"
              cy="65"
              r="10"
              fill="#999"
              stroke="white"
              strokeWidth="3"
            />
            <path d="M42 22 L44 40 L86 40 L88 22Z" fill="#ddd" />
          </svg>
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: "14px 14px 16px" }}>
        <div
          style={{
            fontSize: "14.5px",
            fontWeight: "700",
            color: "#111",
            marginBottom: "4px",
          }}
        >
          {car.name}
        </div>
        <div
          style={{
            fontSize: "13px",
            color: "#444",
            marginBottom: "14px",
          }}
        >
          {car.price}
        </div>

        {/* CTA Button */}
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
          View March Offers
        </button>
      </div>
    </div>
  );
}

export default function ElectricCars() {
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
          Electric cars
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
            {electricCars.map((car, i) => (
              <ElectricCarCard key={i} car={car} />
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
            View All Electric Cars
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
