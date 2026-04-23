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

/* SVG logos for each brand */
const MarutiLogo = () => (
  <svg viewBox="0 0 100 100" width="72" height="72">
    <path
      d="M50 10 L58 30 L78 22 L66 40 L88 45 L68 52 L78 72 L58 62 L50 82 L42 62 L22 72 L32 52 L12 45 L34 40 L22 22 L42 30 Z"
      fill="none"
      stroke="#aaa"
      strokeWidth="3"
    />
    <path
      d="M50 22 L55 35 L68 30 L60 42 L74 46 L61 51 L68 64 L55 57 L50 70 L45 57 L32 64 L39 51 L26 46 L40 42 L32 30 L45 35 Z"
      fill="#b0b0b0"
    />
    <path d="M38 38 L50 28 L62 38 L58 52 L50 58 L42 52 Z" fill="#c8c8c8" />
  </svg>
);

const TataLogo = () => (
  <svg viewBox="0 0 100 100" width="72" height="72">
    <ellipse cx="50" cy="50" rx="42" ry="42" fill="#1a3a8a" />
    <ellipse cx="50" cy="50" rx="34" ry="34" fill="white" />
    <ellipse cx="50" cy="50" rx="22" ry="22" fill="#1a3a8a" />
    <rect x="44" y="20" width="12" height="60" rx="6" fill="white" />
    <rect x="24" y="26" width="52" height="10" rx="5" fill="white" />
  </svg>
);

const KiaLogo = () => (
  <svg viewBox="0 0 140 60" width="100" height="44">
    <text
      x="5"
      y="50"
      fontFamily="'Arial Black', sans-serif"
      fontWeight="900"
      fontSize="52"
      fill="#1a1a1a"
      letterSpacing="-2"
    >
      KIA
    </text>
    {/* stylized slash through A */}
    <line x1="105" y1="10" x2="135" y2="50" stroke="#1a1a1a" strokeWidth="5" />
  </svg>
);

const ToyotaLogo = () => (
  <svg viewBox="0 0 100 100" width="72" height="72">
    {/* Outer ellipse */}
    <ellipse
      cx="50"
      cy="50"
      rx="44"
      ry="30"
      fill="none"
      stroke="#aaa"
      strokeWidth="4"
    />
    {/* Vertical inner ellipse */}
    <ellipse
      cx="50"
      cy="50"
      rx="16"
      ry="30"
      fill="none"
      stroke="#aaa"
      strokeWidth="4"
    />
    {/* Horizontal inner ellipse */}
    <ellipse
      cx="50"
      cy="50"
      rx="44"
      ry="14"
      fill="none"
      stroke="#aaa"
      strokeWidth="4"
    />
    {/* Center dot */}
    <circle cx="50" cy="50" r="5" fill="#aaa" />
  </svg>
);

const HyundaiLogo = () => (
  <svg viewBox="0 0 140 80" width="110" height="64">
    <ellipse cx="70" cy="40" rx="66" ry="36" fill="#003399" />
    <text
      x="70"
      y="54"
      textAnchor="middle"
      fontFamily="'Arial Black', sans-serif"
      fontWeight="900"
      fontSize="46"
      fill="white"
      fontStyle="italic"
    >
      H
    </text>
  </svg>
);

const MahindraLogo = () => (
  <svg viewBox="0 0 100 100" width="72" height="72">
    {/* Two wing-like chevrons */}
    <path d="M50 20 L30 55 L50 45 L70 55 Z" fill="#888" />
    <path d="M50 42 L25 72 L50 60 L75 72 Z" fill="#666" />
    <text
      x="50"
      y="95"
      textAnchor="middle"
      fontFamily="Arial"
      fontSize="7"
      fill="#888"
      letterSpacing="1"
    >
      SPORT UTILITY VEHICLES
    </text>
  </svg>
);

const HondaLogo = () => (
  <svg viewBox="0 0 100 100" width="72" height="72">
    <rect x="8" y="8" width="84" height="84" rx="10" fill="#cc0000" />
    <text
      x="50"
      y="68"
      textAnchor="middle"
      fontFamily="'Arial Black', sans-serif"
      fontWeight="900"
      fontSize="58"
      fill="white"
    >
      H
    </text>
  </svg>
);

const RenaultLogo = () => (
  <svg viewBox="0 0 100 100" width="60" height="60">
    <polygon
      points="50,5 95,50 50,95 5,50"
      fill="none"
      stroke="#f5c518"
      strokeWidth="4"
    />
    <polygon points="50,18 82,50 50,82 18,50" fill="#f5c518" />
    <polygon points="50,32 68,50 50,68 32,50" fill="white" />
  </svg>
);

const VolkswagenLogo = () => (
  <svg viewBox="0 0 100 100" width="68" height="68">
    <circle
      cx="50"
      cy="50"
      r="44"
      fill="none"
      stroke="#1a3a8a"
      strokeWidth="4"
    />
    <circle cx="50" cy="50" r="36" fill="#1a3a8a" />
    <text
      x="50"
      y="64"
      textAnchor="middle"
      fontFamily="'Arial Black', sans-serif"
      fontWeight="900"
      fontSize="36"
      fill="white"
    >
      VW
    </text>
  </svg>
);

const MercedesLogo = () => (
  <svg viewBox="0 0 100 100" width="68" height="68">
    <circle cx="50" cy="50" r="44" fill="none" stroke="#aaa" strokeWidth="3" />
    <circle cx="50" cy="50" r="38" fill="none" stroke="#aaa" strokeWidth="1" />
    {/* Three-pointed star */}
    <line x1="50" y1="12" x2="50" y2="50" stroke="#aaa" strokeWidth="3" />
    <line x1="50" y1="50" x2="18" y2="70" stroke="#aaa" strokeWidth="3" />
    <line x1="50" y1="50" x2="82" y2="70" stroke="#aaa" strokeWidth="3" />
    <circle cx="50" cy="50" r="4" fill="#aaa" />
  </svg>
);

const brands = [
  { name: "Maruti Suzuki", logo: <MarutiLogo /> },
  { name: "Tata", logo: <TataLogo /> },
  { name: "Kia", logo: <KiaLogo /> },
  { name: "Toyota", logo: <ToyotaLogo /> },
  { name: "Hyundai", logo: <HyundaiLogo /> },
  { name: "Mahindra", logo: <MahindraLogo /> },
  { name: "Honda", logo: <HondaLogo /> },
  { name: "Renault", logo: <RenaultLogo /> },
  { name: "Volkswagen", logo: <VolkswagenLogo /> },
  { name: "Mercedes-Benz", logo: <MercedesLogo /> },
];

function BrandCard({ brand }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "0 0 calc(16.66% - 14px)",
        minWidth: "140px",
        borderRadius: "12px",
        border: `1.5px solid ${hovered ? "#e0e0e0" : "#ececec"}`,
        background: hovered ? "#fafafa" : "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px 18px",
        cursor: "pointer",
        boxShadow: hovered ? "0 4px 16px rgba(0,0,0,0.08)" : "none",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.2s ease",
        gap: "14px",
      }}
    >
      {/* Logo */}
      <div
        style={{
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {brand.logo}
      </div>

      {/* Name */}
      <div
        style={{
          fontSize: "13px",
          fontWeight: "400",
          color: "#333",
          textAlign: "center",
          lineHeight: "1.3",
        }}
      >
        {brand.name}
      </div>
    </div>
  );
}

export default function PopularBrands() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
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
          Popular brands
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
            {brands.map((brand, i) => (
              <BrandCard key={i} brand={brand} />
            ))}
          </div>

          {/* Right scroll arrow */}
          <button
            onClick={() => scroll(1)}
            style={{
              position: "absolute",
              right: "-16px",
              top: "50%",
              transform: "translateY(-50%)",
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

        {/* View All Brands link */}
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
            View All Brands
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
