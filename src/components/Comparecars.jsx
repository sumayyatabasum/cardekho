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

const comparisons = [
  {
    bg: "#e8e8e8",
    car1: {
      brand: "Toyota",
      name: "Vellfire",
      price: "₹1.20 - 1.30 Cr*",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/170335/vellfire-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    },
    car2: {
      brand: "Mercedes-Benz",
      name: "V-Class",
      price: "₹1.40 Cr*",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/v-class-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    },
    label: "Vellfire vs V-Class Extra LWB",
  },
  {
    bg: "#e4ecf4",
    car1: {
      brand: "Volvo",
      name: "EX30",
      price: "₹39.99 Lakh*",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/ex30-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    },
    car2: {
      brand: "Volvo",
      name: "EX40",
      price: "₹49 Lakh*",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/ex40-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    },
    label: "EX30 vs EX40",
  },
  {
    bg: "#f0ece0",
    car1: {
      brand: "Rolls-Royce",
      name: "Spectre",
      price: "₹7.50 Cr*",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/spectre-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    },
    car2: {
      brand: "Bentley",
      name: "Continental",
      price: "₹5.23 - 8.45 Cr*",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/continental-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    },
    label: "Spectre vs Continental",
  },
  {
    bg: "#e8f0e8",
    car1: {
      brand: "Hyundai",
      name: "Creta EV",
      price: "₹17.99 Lakh*",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/creta-electric-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    },
    car2: {
      brand: "Tata",
      name: "Punch EV",
      price: "₹9.69 Lakh*",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/160143/punch-ev-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    },
    label: "Creta EV vs Punch EV",
  },
  {
    bg: "#ece8f4",
    car1: {
      brand: "Kia",
      name: "Seltos",
      price: "₹10.90 Lakh*",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/seltos-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
    },
    car2: {
      brand: "Hyundai",
      name: "Creta",
      price: "₹11.11 Lakh*",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/creta-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    },
    label: "Seltos vs Creta",
  },
];

/* Fallback car SVG */
const CarSVG = ({ flip = false }) => (
  <svg
    viewBox="0 0 120 70"
    width="100%"
    height="100%"
    style={{ transform: flip ? "scaleX(-1)" : "none" }}
  >
    <ellipse cx="60" cy="62" rx="52" ry="8" fill="#ccc" opacity="0.3" />
    <path
      d="M8 46 L16 26 Q20 16 32 15 L88 15 Q100 15 104 26 L112 46 L8 46Z"
      fill="#c8c8c8"
    />
    <rect x="6" y="46" width="108" height="10" rx="3" fill="#bbb" />
    <path d="M30 17 L33 36 L87 36 L90 17 Z" fill="#ddd" />
    <line x1="60" y1="17" x2="60" y2="36" stroke="#ccc" strokeWidth="1.5" />
    <circle cx="26" cy="58" r="9" fill="#aaa" stroke="white" strokeWidth="2" />
    <circle cx="94" cy="58" r="9" fill="#aaa" stroke="white" strokeWidth="2" />
    <circle cx="26" cy="58" r="4" fill="#999" />
    <circle cx="94" cy="58" r="4" fill="#999" />
  </svg>
);

function CompareCard({ comparison }) {
  const [hovered, setHovered] = useState(false);
  const [img1Error, setImg1Error] = useState(false);
  const [img2Error, setImg2Error] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "0 0 calc(33.33% - 11px)",
        minWidth: "280px",
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
      {/* Images row with VS badge */}
      <div
        style={{
          background: comparison.bg,
          height: "178px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          gap: "0",
        }}
      >
        {/* Car 1 — left, facing right */}
        <div
          style={{
            flex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            paddingRight: "20px",
          }}
        >
          {!img1Error ? (
            <img
              src={comparison.car1.img}
              alt={comparison.car1.name}
              onError={() => setImg1Error(true)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: hovered
                  ? "scale(1.04) translateX(-4px)"
                  : "scale(1)",
                transition: "transform 0.3s ease",
              }}
            />
          ) : (
            <CarSVG flip={false} />
          )}
        </div>

        {/* VS badge */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            background: "#1a1a1a",
            color: "white",
            fontSize: "10px",
            fontWeight: "800",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 3,
            letterSpacing: "0.5px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
            flexShrink: 0,
          }}
        >
          VS
        </div>

        {/* Car 2 — right, facing left */}
        <div
          style={{
            flex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            paddingLeft: "20px",
          }}
        >
          {!img2Error ? (
            <img
              src={comparison.car2.img}
              alt={comparison.car2.name}
              onError={() => setImg2Error(true)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: hovered
                  ? "scale(1.04) scaleX(-1) translateX(-4px)"
                  : "scaleX(-1)",
                transition: "transform 0.3s ease",
              }}
            />
          ) : (
            <CarSVG flip={true} />
          )}
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "14px 16px 16px" }}>
        {/* Two car info side by side */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "14px",
            gap: "8px",
          }}
        >
          {[comparison.car1, comparison.car2].map((car, i) => (
            <div key={i} style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "11px",
                  color: "#888",
                  marginBottom: "2px",
                  fontWeight: "400",
                }}
              >
                {car.brand}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#111",
                  marginBottom: "3px",
                }}
              >
                {car.name}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#555",
                }}
              >
                {car.price}
              </div>
            </div>
          ))}
        </div>

        {/* Compare CTA */}
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
          {comparison.label}
        </button>
      </div>
    </div>
  );
}

export default function CompareCars() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 340, behavior: "smooth" });
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
          Compare to buy the right car
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
            {comparisons.map((comp, i) => (
              <CompareCard key={i} comparison={comp} />
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
            View All Car Comparisons
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
