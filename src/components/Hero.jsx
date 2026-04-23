import { useState } from "react";

const ChevronDown = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ArrowRight = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const budgetOptions = [
  "Under ₹3 Lakh",
  "₹3 - ₹5 Lakh",
  "₹5 - ₹8 Lakh",
  "₹8 - ₹12 Lakh",
  "₹12 - ₹20 Lakh",
  "Above ₹20 Lakh",
];

const brandOptions = [
  "Maruti Suzuki",
  "Hyundai",
  "Tata",
  "Kia",
  "Honda",
  "Toyota",
  "MG",
  "Mahindra",
  "Ford",
  "Volkswagen",
];

const vehicleTypes = [
  "All Vehicle Types",
  "Hatchback",
  "Sedan",
  "SUV",
  "MUV",
  "Luxury",
  "Electric",
];

const slides = [
  {
    badge: "LAUNCHED",
    title: "Mercedes-Benz\nV-Class",
    subtitle: "Long Luxury Lounge On Wheels!",
    label: "Mercedes V-Class\nLaunched",
    bg: "linear-gradient(120deg, #3a1a10 0%, #7a3a20 30%, #c47a50 60%, #e8c090 100%)",
  },
  {
    badge: "UNVEILED",
    title: "Mercedes-Benz\nCLA Electric",
    subtitle: "The Future Of Electric Luxury",
    label: "CLA Electric\nUnveiled",
    bg: "linear-gradient(120deg, #0a1a2e 0%, #1a3a5c 35%, #2a5a8c 65%, #4a90c0 100%)",
  },
  {
    badge: "UPCOMING",
    title: "Isuzu\n2026 V-Cross",
    subtitle: "Rugged. Refined. Ready.",
    label: "2026 V-Cross",
    bg: "linear-gradient(120deg, #1a2010 0%, #3a4a20 35%, #5a6a30 65%, #8a9a50 100%)",
  },
];

export default function Hero() {
  const [carType, setCarType] = useState("new");
  const [filterBy, setFilterBy] = useState("budget");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("All Vehicle Types");
  const [activeSlide, setActiveSlide] = useState(0);
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [vehicleOpen, setVehicleOpen] = useState(false);

  const slide = slides[activeSlide];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "420px",
        overflow: "hidden",
        fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: slide.bg,
          transition: "background 0.6s ease",
        }}
      />

      {/* Dark overlay gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 40%, transparent 70%)",
        }}
      />

      {/* Decorative glow (right side) */}
      <div
        style={{
          position: "absolute",
          right: "60px",
          bottom: "30px",
          width: "480px",
          height: "240px",
          background:
            "radial-gradient(ellipse at 60% 80%, rgba(255,220,180,0.18) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Slide content (right side) */}
      <div
        style={{
          position: "absolute",
          left: "500px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          zIndex: 2,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-block",
            background: "#f05a22",
            color: "white",
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "1px",
            padding: "4px 12px",
            borderRadius: "4px",
            marginBottom: "14px",
            textTransform: "uppercase",
          }}
        >
          {slide.badge}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "40px",
            fontWeight: "800",
            lineHeight: "1.15",
            marginBottom: "10px",
            whiteSpace: "pre-line",
            textShadow: "0 2px 12px rgba(0,0,0,0.3)",
          }}
        >
          {slide.title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "15px",
            fontWeight: "500",
            marginBottom: "24px",
            opacity: 0.92,
            textShadow: "0 1px 6px rgba(0,0,0,0.3)",
          }}
        >
          {slide.subtitle}
        </div>

        {/* Know More button */}
        <button
          style={{
            background: "white",
            color: "#111",
            border: "none",
            borderRadius: "6px",
            padding: "12px 28px",
            fontSize: "14px",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
            transition: "transform 0.15s, box-shadow 0.15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.28)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.2)";
          }}
        >
          Know More
        </button>
      </div>

      {/* Slide tabs (bottom) */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "490px",
          right: "0",
          display: "flex",
          alignItems: "flex-end",
          zIndex: 3,
          padding: "0 0 0 10px",
        }}
      >
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "white",
              fontSize: "12.5px",
              fontWeight: i === activeSlide ? "700" : "400",
              opacity: i === activeSlide ? 1 : 0.7,
              padding: "10px 20px 12px",
              whiteSpace: "pre-line",
              textAlign: "left",
              lineHeight: "1.4",
              borderBottom:
                i === activeSlide
                  ? "2.5px solid white"
                  : "2.5px solid transparent",
              transition: "all 0.2s",
              minWidth: "130px",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* ── Search Card ── */}
      <div
        style={{
          position: "absolute",
          left: "40px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "340px",
          background: "white",
          borderRadius: "16px",
          padding: "24px 24px 20px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.28)",
          zIndex: 10,
        }}
      >
        {/* Heading */}
        <h2
          style={{
            margin: "0 0 18px",
            fontSize: "22px",
            fontWeight: "800",
            color: "#111",
            lineHeight: "1.2",
          }}
        >
          Find your right car
        </h2>

        {/* New Car / Used Car toggle */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
          {["new", "used"].map((type) => (
            <button
              key={type}
              onClick={() => setCarType(type)}
              style={{
                flex: 1,
                padding: "10px 0",
                borderRadius: "8px",
                border: "1.5px solid",
                borderColor: carType === type ? "#111" : "#ddd",
                background: carType === type ? "#111" : "white",
                color: carType === type ? "white" : "#555",
                fontWeight: "700",
                fontSize: "14px",
                cursor: "pointer",
                transition: "all 0.18s",
                fontFamily: "inherit",
              }}
            >
              {type === "new" ? "New Car" : "Used Car"}
            </button>
          ))}
        </div>

        {/* Radio: By Budget / By Brand */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "16px",
            alignItems: "center",
          }}
        >
          {["budget", "brand"].map((opt) => (
            <label
              key={opt}
              onClick={() => setFilterBy(opt)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                cursor: "pointer",
                fontSize: "13.5px",
                fontWeight: filterBy === opt ? "700" : "400",
                color: filterBy === opt ? "#f05a22" : "#444",
              }}
            >
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  border: `2px solid ${filterBy === opt ? "#f05a22" : "#bbb"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "border-color 0.15s",
                }}
              >
                {filterBy === opt && (
                  <div
                    style={{
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      background: "#f05a22",
                    }}
                  />
                )}
              </div>
              By {opt.charAt(0).toUpperCase() + opt.slice(1)}
            </label>
          ))}
        </div>

        {/* Budget / Brand Dropdown */}
        <div style={{ position: "relative", marginBottom: "10px" }}>
          <button
            onClick={() => {
              setBudgetOpen(!budgetOpen);
              setVehicleOpen(false);
            }}
            style={{
              width: "100%",
              padding: "11px 14px",
              border: "1.5px solid #ddd",
              borderRadius: "8px",
              background: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "13.5px",
              color: (filterBy === "budget" ? selectedBudget : selectedBrand)
                ? "#111"
                : "#888",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            <span>
              {filterBy === "budget"
                ? selectedBudget || "Select Budget"
                : selectedBrand || "Select Brand"}
            </span>
            <ChevronDown />
          </button>

          {budgetOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                background: "white",
                border: "1.5px solid #ddd",
                borderRadius: "8px",
                zIndex: 100,
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                maxHeight: "180px",
                overflowY: "auto",
                marginTop: "4px",
              }}
            >
              {(filterBy === "budget" ? budgetOptions : brandOptions).map(
                (opt) => (
                  <div
                    key={opt}
                    onClick={() => {
                      filterBy === "budget"
                        ? setSelectedBudget(opt)
                        : setSelectedBrand(opt);
                      setBudgetOpen(false);
                    }}
                    style={{
                      padding: "10px 14px",
                      fontSize: "13px",
                      cursor: "pointer",
                      color: "#333",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#fff4f0")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "white")
                    }
                  >
                    {opt}
                  </div>
                ),
              )}
            </div>
          )}
        </div>

        {/* Vehicle Type Dropdown */}
        <div style={{ position: "relative", marginBottom: "16px" }}>
          <button
            onClick={() => {
              setVehicleOpen(!vehicleOpen);
              setBudgetOpen(false);
            }}
            style={{
              width: "100%",
              padding: "11px 14px",
              border: "1.5px solid #ddd",
              borderRadius: "8px",
              background: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "13.5px",
              color: selectedVehicle === "All Vehicle Types" ? "#888" : "#111",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            <span>{selectedVehicle}</span>
            <ChevronDown />
          </button>

          {vehicleOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                background: "white",
                border: "1.5px solid #ddd",
                borderRadius: "8px",
                zIndex: 100,
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                maxHeight: "180px",
                overflowY: "auto",
                marginTop: "4px",
              }}
            >
              {vehicleTypes.map((opt) => (
                <div
                  key={opt}
                  onClick={() => {
                    setSelectedVehicle(opt);
                    setVehicleOpen(false);
                  }}
                  style={{
                    padding: "10px 14px",
                    fontSize: "13px",
                    cursor: "pointer",
                    color: "#333",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#fff4f0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "white")
                  }
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Button */}
        <button
          style={{
            width: "100%",
            padding: "13px",
            background: "linear-gradient(90deg, #f05a22, #e63900)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "700",
            cursor: "pointer",
            fontFamily: "inherit",
            boxShadow: "0 4px 16px rgba(240,90,34,0.35)",
            transition: "opacity 0.15s, transform 0.15s",
            marginBottom: "12px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.92";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Search
        </button>

        {/* Advanced Search */}
        <div
          style={{
            textAlign: "right",
            fontSize: "12.5px",
            color: "#666",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "4px",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#f05a22")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
        >
          Advanced Search <ArrowRight />
        </div>
      </div>
    </div>
  );
}
