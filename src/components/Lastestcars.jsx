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
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#f05a22">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ElectricIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#2ecc71">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const NewVariantIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#555"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const latestCars = [
  {
    name: "Toyota Rumion",
    price: "₹9.55 - 13.86 Lakh*",
    launchDate: "LAUNCHED ON : MAR 6, 2026",
    badges: [{ type: "newvariant", label: "New Variant" }],
    bg: "#dce8f4",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/170335/rumion-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
  },
  {
    name: "Mercedes-Benz V-Class Extra LWB",
    price: "₹1.40 Cr*",
    launchDate: "LAUNCHED ON : MAR 2, 2026",
    badges: [],
    bg: "#1e1e1e",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/v-class-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    dark: true,
  },
  {
    name: "Tata Punch EV",
    price: "₹9.69 - 12.59 Lakh*",
    launchDate: "LAUNCHED ON : FEB 20, 2026",
    badges: [
      { type: "electric", label: "Electric" },
      { type: "facelift", label: "Facelift" },
    ],
    bg: "#e0d0c8",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/160143/punch-ev-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  },
  {
    name: "Volkswagen Tayron R-Line",
    price: "₹46.99 Lakh*",
    launchDate: "LAUNCHED ON : FEB 19, 2026",
    badges: [],
    bg: "#e4ecf4",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/tayron-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  },
  {
    name: "Maruti Suzuki e Vitara",
    price: "₹15.99 - 20.01 Lakh*",
    launchDate: "LAUNCHED ON : FEB 18, 2026",
    badges: [{ type: "electric", label: "Electric" }],
    bg: "#d8e8f0",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/159683/e-vitara-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  },
  {
    name: "Mahindra BE 6",
    price: "₹18.90 - 28.49 Lakh*",
    launchDate: "LAUNCHED ON : FEB 14, 2026",
    badges: [{ type: "electric", label: "Electric" }],
    bg: "#e8e8e8",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/be-6e-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  },
];

const badgeConfig = {
  electric: {
    bg: "rgba(255,255,255,0.92)",
    color: "#333",
    icon: <ElectricIcon />,
  },
  facelift: {
    bg: "rgba(255,255,255,0.92)",
    color: "#333",
    icon: <FaceliftIcon />,
  },
  newvariant: {
    bg: "rgba(255,255,255,0.92)",
    color: "#333",
    icon: <NewVariantIcon />,
  },
};

function LatestCarCard({ car }) {
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
        {/* Launch date badge — top left */}
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

        {/* Bottom badges (Electric, Facelift, New Variant) */}
        {car.badges.length > 0 && (
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              right: "10px",
              display: "flex",
              justifyContent:
                car.badges.length === 1 ? "flex-start" : "space-between",
              gap: "8px",
              zIndex: 2,
            }}
          >
            {car.badges.map((badge, i) => {
              const cfg = badgeConfig[badge.type] || badgeConfig.newvariant;
              return (
                <div
                  key={i}
                  style={{
                    background: cfg.bg,
                    border: "1px solid #ddd",
                    borderRadius: "20px",
                    padding: "4px 10px",
                    fontSize: "11px",
                    fontWeight: "600",
                    color: cfg.color,
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {cfg.icon} {badge.label}
                </div>
              );
            })}
          </div>
        )}

        {/* Car image */}
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
          /* Fallback silhouette */
          <svg viewBox="0 0 260 150" width="75%" height="75%">
            <ellipse
              cx="130"
              cy="120"
              rx="110"
              ry="18"
              fill="#bbb"
              opacity="0.3"
            />
            <path
              d="M20 105 L32 68 Q38 52 55 50 L100 46 Q115 38 130 37 Q145 36 160 40 L205 50 Q222 52 228 68 L240 105 Z"
              fill="#ccc"
            />
            <rect x="18" y="105" width="224" height="16" rx="5" fill="#bbb" />
            <circle
              cx="55"
              cy="123"
              r="13"
              fill="#aaa"
              stroke="white"
              strokeWidth="3"
            />
            <circle
              cx="205"
              cy="123"
              r="13"
              fill="#aaa"
              stroke="white"
              strokeWidth="3"
            />
            <path d="M55 52 L58 80 L175 80 L178 50 Z" fill="#ddd" />
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
            lineHeight: "1.3",
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

        {/* View Offers CTA */}
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

export default function LatestCars() {
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
          Latest cars
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
            {latestCars.map((car, i) => (
              <LatestCarCard key={i} car={car} />
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
            View All Latest Cars
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
