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

const categories = ["SUV", "Hatchback", "Sedan", "MUV", "Luxury"];

const carData = {
  SUV: [
    {
      name: "Tata Punch",
      price: "₹5.60 - 10.55 Lakh*",
      bg: "#e8e0d0",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/160143/punch-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    },
    {
      name: "Tata Sierra",
      price: "₹11.49 - 21.29 Lakh*",
      bg: "#f0e8c0",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/160143/sierra-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    },
    {
      name: "Mahindra Scorpio N",
      price: "₹13.49 - 24.34 Lakh*",
      bg: "#d8e0d0",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/scorpio-n-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
    },
    {
      name: "Toyota Fortuner",
      price: "₹34.16 - 49.59 Lakh*",
      bg: "#e8e8e8",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    },
    {
      name: "Hyundai Creta",
      price: "₹11.11 - 20.45 Lakh*",
      bg: "#dce8f0",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/creta-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    },
    {
      name: "Kia Seltos",
      price: "₹10.90 - 20.35 Lakh*",
      bg: "#e0d8ec",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/seltos-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
    },
  ],
  Hatchback: [
    {
      name: "Maruti Swift",
      price: "₹6.49 - 9.64 Lakh*",
      bg: "#fce8d8",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/159089/swift-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    },
    {
      name: "Hyundai i20",
      price: "₹7.04 - 11.21 Lakh*",
      bg: "#e0ecd8",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/i20-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    },
    {
      name: "Tata Altroz",
      price: "₹6.60 - 10.75 Lakh*",
      bg: "#d8e4f0",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/38582/altroz-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    },
    {
      name: "Maruti Baleno",
      price: "₹6.61 - 9.88 Lakh*",
      bg: "#f0e8d8",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/45161/baleno-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
  ],
  Sedan: [
    {
      name: "Honda City",
      price: "₹11.78 - 15.68 Lakh*",
      bg: "#e8f0f8",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/134297/city-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
    },
    {
      name: "Maruti Ciaz",
      price: "₹9.40 - 12.78 Lakh*",
      bg: "#f0ece0",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/33246/ciaz-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    },
    {
      name: "Hyundai Verna",
      price: "₹10.90 - 17.38 Lakh*",
      bg: "#e0ecf4",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/137233/verna-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
    {
      name: "Skoda Slavia",
      price: "₹10.69 - 18.39 Lakh*",
      bg: "#e8e4f0",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/130591/slavia-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    },
  ],
  MUV: [
    {
      name: "Maruti Ertiga",
      price: "₹8.69 - 13.07 Lakh*",
      bg: "#ece8d8",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/ertiga-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    },
    {
      name: "Kia Carens",
      price: "₹10.52 - 19.29 Lakh*",
      bg: "#d8e8ec",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141115/carens-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    },
    {
      name: "Toyota Innova",
      price: "₹19.77 - 26.47 Lakh*",
      bg: "#f0ece4",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/142961/innova-hycross-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    },
    {
      name: "Mahindra XUV700",
      price: "₹13.99 - 26.99 Lakh*",
      bg: "#e4e0ec",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80",
    },
  ],
  Luxury: [
    {
      name: "BMW 3 Series",
      price: "₹46.90 - 56.90 Lakh*",
      bg: "#e8e8ec",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/3-series-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    },
    {
      name: "Mercedes C-Class",
      price: "₹57.00 - 63.00 Lakh*",
      bg: "#eceae4",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/106715/c-class-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    },
    {
      name: "Audi A4",
      price: "₹47.49 - 56.26 Lakh*",
      bg: "#e4eaf0",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/51001/a4-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    },
    {
      name: "Volvo XC60",
      price: "₹67.90 - 77.90 Lakh*",
      bg: "#e8ece8",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/130591/xc60-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    },
  ],
};

function CarCard({ car }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "12px",
        border: "1px solid #e8e8e8",
        overflow: "hidden",
        background: "white",
        cursor: "pointer",
        flex: "0 0 calc(25% - 12px)",
        minWidth: "200px",
        boxShadow: hovered
          ? "0 6px 24px rgba(0,0,0,0.10)"
          : "0 1px 4px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.22s ease",
      }}
    >
      {/* Car Image */}
      <div
        style={{
          background: car.bg,
          height: "168px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {!imgError ? (
          <img
            src={car.img}
            alt={car.name}
            onError={() => setImgError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
              transform: hovered ? "scale(1.04)" : "scale(1)",
            }}
          />
        ) : (
          /* Fallback SVG car silhouette */
          <svg width="120" height="72" viewBox="0 0 120 72" fill="none">
            <path
              d="M10 48 L18 28 Q22 20 34 20 L86 20 Q98 20 102 28 L110 48 L10 48Z"
              fill="#ccc"
            />
            <rect x="8" y="48" width="104" height="12" rx="4" fill="#bbb" />
            <circle
              cx="28"
              cy="62"
              r="9"
              fill="#999"
              stroke="white"
              strokeWidth="3"
            />
            <circle
              cx="92"
              cy="62"
              r="9"
              fill="#999"
              stroke="white"
              strokeWidth="3"
            />
            <path d="M36 24 L38 38 L82 38 L84 24 Z" fill="#ddd" />
            <path d="M50 24 L50 38 L70 38 L70 24 Z" fill="#e8e8e8" />
          </svg>
        )}
      </div>

      {/* Card Content */}
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
            fontWeight: "400",
          }}
        >
          {car.price}
        </div>

        {/* View Offers Button */}
        <button
          style={{
            width: "100%",
            padding: "9px 0",
            border: "1.5px solid #f05a22",
            borderRadius: "8px",
            background: "white",
            color: "#f05a22",
            fontSize: "13px",
            fontWeight: "600",
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "all 0.18s",
            ...(hovered ? { background: "#fff4f0" } : {}),
          }}
        >
          View March Offers
        </button>
      </div>
    </div>
  );
}

export default function MostSearchedCars() {
  const [activeCategory, setActiveCategory] = useState("SUV");
  const scrollRef = useRef(null);

  const cars = carData[activeCategory] || [];

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        background: "#f5f5f5",
        padding: "32px 20px",
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
            margin: "0 0 20px",
            fontSize: "22px",
            fontWeight: "800",
            color: "#111",
          }}
        >
          The most searched cars
        </h2>

        {/* Category Tabs */}
        <div
          style={{
            display: "flex",
            gap: "0",
            borderBottom: "1.5px solid #ebebeb",
            marginBottom: "24px",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 20px 12px",
                background: "none",
                border: "none",
                fontSize: "14px",
                fontWeight: activeCategory === cat ? "700" : "400",
                color: activeCategory === cat ? "#111" : "#777",
                cursor: "pointer",
                borderBottom:
                  activeCategory === cat
                    ? "2.5px solid #f05a22"
                    : "2.5px solid transparent",
                marginBottom: "-1.5px",
                transition: "all 0.18s",
                fontFamily: "inherit",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Row + Arrow */}
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
            {cars.map((car, i) => (
              <CarCard key={i} car={car} />
            ))}
          </div>

          {/* Right Arrow */}
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

        {/* View All Link */}
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
              gap: "5px",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.textDecoration = "underline")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textDecoration = "none")
            }
          >
            View All {activeCategory} Cars
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
