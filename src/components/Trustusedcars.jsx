import { useState, useRef } from "react";

const ChevronRight = ({ size = 16, color = "#555" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

/* Outline car + city skyline placeholder SVG */
const PlaceholderSVG = () => (
  <svg viewBox="0 0 280 180" width="90%" height="90%" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* City skyline (background) */}
    <rect x="160" y="60" width="20" height="80" rx="2" stroke="#ddd" strokeWidth="1.5" />
    <rect x="165" y="50" width="10" height="10" rx="1" stroke="#ddd" strokeWidth="1.5" />
    <rect x="185" y="75" width="16" height="65" rx="2" stroke="#ddd" strokeWidth="1.5" />
    <rect x="205" y="55" width="22" height="85" rx="2" stroke="#ddd" strokeWidth="1.5" />
    <rect x="210" y="45" width="12" height="12" rx="1" stroke="#ddd" strokeWidth="1.5" />
    <rect x="230" y="70" width="18" height="70" rx="2" stroke="#ddd" strokeWidth="1.5" />
    <rect x="252" y="80" width="14" height="60" rx="2" stroke="#ddd" strokeWidth="1.5" />
    {/* Windows */}
    <rect x="164" y="68" width="4" height="4" rx="0.5" stroke="#ddd" strokeWidth="1" />
    <rect x="171" y="68" width="4" height="4" rx="0.5" stroke="#ddd" strokeWidth="1" />
    <rect x="164" y="78" width="4" height="4" rx="0.5" stroke="#ddd" strokeWidth="1" />
    <rect x="171" y="78" width="4" height="4" rx="0.5" stroke="#ddd" strokeWidth="1" />
    {/* Ground line */}
    <line x1="20" y1="148" x2="270" y2="148" stroke="#e0e0e0" strokeWidth="1.5" />
    {/* Car outline */}
    <path d="M30 130 L38 104 Q44 92 58 90 L100 87 Q112 80 125 79 Q138 78 150 82 L185 90 Q198 93 203 104 L212 130 Z"
      stroke="#ccc" strokeWidth="2" fill="white" />
    <path d="M62 90 L65 112 L178 112 L181 88 Z" stroke="#ccc" strokeWidth="1.5" fill="#f5f5f5" />
    <line x1="122" y1="88" x2="122" y2="112" stroke="#ccc" strokeWidth="1.5" />
    <rect x="28" y="130" width="184" height="16" rx="4" stroke="#ccc" strokeWidth="2" fill="white" />
    <circle cx="60" cy="148" r="14" stroke="#ccc" strokeWidth="2" fill="white" />
    <circle cx="60" cy="148" r="6" stroke="#ddd" strokeWidth="1.5" fill="white" />
    <circle cx="182" cy="148" r="14" stroke="#ccc" strokeWidth="2" fill="white" />
    <circle cx="182" cy="148" r="6" stroke="#ddd" strokeWidth="1.5" fill="white" />
    {/* Headlight / taillight */}
    <path d="M30 118 Q26 122 28 130" stroke="#ccc" strokeWidth="1.5" fill="none" />
    <path d="M212 118 Q216 122 212 130" stroke="#ccc" strokeWidth="1.5" fill="none" />
  </svg>
);

const budgetData = {
  "1 - 5 Lakh": [
    { name: "Maruti Suzuki Wagon R", startingPrice: "₹ 1.00 Lakh", available: 167, bg: "#f0f4f8", img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/33277/wagon-r-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" },
    { name: "Hyundai Grand i10", startingPrice: "₹ 1.92 Lakh", available: 141, bg: "#fef4e4", img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/grand-i10-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80" },
    { name: "Honda Amaze", startingPrice: "₹ 1.50 Lakh", available: 131, bg: "#f5f5f5", img: null },
    { name: "Maruti Suzuki Swift", startingPrice: "₹ 1.20 Lakh", available: 130, bg: "#fef0f0", img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/159089/swift-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80" },
    { name: "Maruti Suzuki Alto", startingPrice: "₹ 0.80 Lakh", available: 210, bg: "#f0f8f0", img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/54399/alto-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80" },
  ],
  "5 - 10 Lakh": [
    { name: "Hyundai Creta", startingPrice: "₹ 5.50 Lakh", available: 98, bg: "#e8f0fc", img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/creta-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" },
    { name: "Maruti Brezza", startingPrice: "₹ 5.20 Lakh", available: 112, bg: "#fef4e4", img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/159089/brezza-exterior-right-front-three-quarter.jpeg?isig=0&q=80" },
    { name: "Tata Nexon", startingPrice: "₹ 5.80 Lakh", available: 87, bg: "#f0f8f4", img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/nexon-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" },
    { name: "Honda City", startingPrice: "₹ 6.00 Lakh", available: 76, bg: "#f5f5f5", img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/134297/city-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80" },
    { name: "Kia Seltos", startingPrice: "₹ 7.50 Lakh", available: 64, bg: "#f0ecf8", img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/seltos-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80" },
  ],
  "10 - 15 Lakh": [
    { name: "Toyota Fortuner", startingPrice: "₹ 10.50 Lakh", available: 44, bg: "#f0f4f8", img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" },
    { name: "Mahindra Scorpio N", startingPrice: "₹ 11.20 Lakh", available: 58, bg: "#e8f4e8", img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/scorpio-n-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80" },
    { name: "Hyundai Tucson", startingPrice: "₹ 10.80 Lakh", available: 32, bg: "#f5f5f5", img: null },
    { name: "MG Hector", startingPrice: "₹ 10.00 Lakh", available: 49, bg: "#fef4e4", img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/hector-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80" },
    { name: "Kia Carnival", startingPrice: "₹ 12.50 Lakh", available: 27, bg: "#f0ecf8", img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/carnival-exterior-right-front-three-quarter.jpeg?isig=0&q=80" },
  ],
};

const tabs = Object.keys(budgetData);

function UsedCarCard({ car }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(!car.img);

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
        boxShadow: hovered ? "0 6px 24px rgba(0,0,0,0.10)" : "0 1px 4px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.22s ease",
      }}
    >
      {/* Image area */}
      <div style={{
        background: car.bg,
        height: "180px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}>
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
          <PlaceholderSVG />
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: "14px 16px 18px" }}>
        <div style={{
          fontSize: "13.5px",
          fontWeight: "400",
          color: "#555",
          marginBottom: "4px",
        }}>
          {car.name}
        </div>
        <div style={{
          fontSize: "15px",
          fontWeight: "800",
          color: "#111",
          marginBottom: "6px",
        }}>
          Starting @ {car.startingPrice}
        </div>
        <div style={{
          fontSize: "12.5px",
          color: "#777",
          fontWeight: "400",
        }}>
          {car.available} Available Cars
        </div>
      </div>
    </div>
  );
}

export default function TrustedUsedCars() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  };

  return (
    <div style={{
      background: "#f5f5f5",
      padding: "0 20px 32px",
      fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        background: "white",
        borderRadius: "16px",
        padding: "28px 28px 24px",
        boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
      }}>

        {/* Title */}
        <h2 style={{
          margin: "0 0 20px",
          fontSize: "22px",
          fontWeight: "800",
          color: "#111",
        }}>
          Trusted used cars by budget
        </h2>

        {/* Budget Tabs */}
        <div style={{
          display: "flex",
          borderBottom: "1.5px solid #ebebeb",
          marginBottom: "24px",
          gap: "0",
        }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "8px 22px 12px",
                background: "none",
                border: "none",
                fontSize: "14px",
                fontWeight: activeTab === tab ? "700" : "400",
                color: activeTab === tab ? "#111" : "#777",
                cursor: "pointer",
                borderBottom: activeTab === tab ? "2.5px solid #f05a22" : "2.5px solid transparent",
                marginBottom: "-1.5px",
                transition: "all 0.18s",
                fontFamily: "inherit",
                whiteSpace: "nowrap",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

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
            {budgetData[activeTab].map((car, i) => (
              <UsedCarCard key={i} car={car} />
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
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.18)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.12)")}
          >
            <ChevronRight size={16} color="#333" />
          </button>
        </div>

      </div>
    </div>
  );
}