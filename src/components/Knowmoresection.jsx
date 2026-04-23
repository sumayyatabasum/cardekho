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

const PlayIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
    <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.55)" />
    <polygon points="10 8 18 12 10 16" fill="white" />
  </svg>
);

const tabs = ["Expert Reviews", "Videos", "Featured Stories"];

const tabData = {
  "Expert Reviews": [
    {
      title: "MG Windsor EV Long Term Review: One Month On A Full Charge?",
      excerpt:
        "The Windsor was the best-selling electric car in the country in 2025, why?",
      author: "Arun",
      date: "Feb 06, 2026",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/windsor-ev-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      bg: "#2a3828",
      isVideo: false,
    },
    {
      title: "Maruti Victoris Long Term Introduction: New Beginnings!",
      excerpt: "Can Maruti's new compact SUV be victorious over our hearts?",
      author: "Ujjawall",
      date: "Jan 22, 2026",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/victoris-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      bg: "#4a3010",
      isVideo: false,
    },
    {
      title: "Kia Syros Final Long Term Report: Surprising In All The Righ...",
      excerpt:
        "As the time to part ways with the Syros arrives, my heart grows heavy as this...",
      author: "Ujjawall",
      date: "Jan 21, 2026",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/syros-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      bg: "#3a4a50",
      isVideo: false,
    },
    {
      title: "Bye Bye Tata Punch EV! You Made Urban Grinds Enjoyable!",
      excerpt:
        "Small, nippy and quick on its feet! The Punch EV feels at home in the daily urban...",
      author: "Tirth",
      date: "Jan 14, 2026",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/160143/punch-ev-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      bg: "#203828",
      isVideo: false,
    },
    {
      title:
        "Hyundai Creta EV Long Term Review: Living With India's Best-Seller",
      excerpt:
        "After 6 months and 12,000 km, here's what we truly feel about the Creta EV...",
      author: "Arun",
      date: "Jan 10, 2026",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/creta-electric-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      bg: "#1a2840",
      isVideo: false,
    },
  ],
  Videos: [
    {
      title: "Mahindra BE 6 vs Hyundai Creta EV: Full Comparison Video",
      excerpt:
        "We put two of India's hottest EVs head to head in this detailed video review.",
      author: "Cardekho",
      date: "Mar 05, 2026",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/be-6e-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      bg: "#1a1a2e",
      isVideo: true,
    },
    {
      title: "Toyota Rumion vs Maruti Ertiga: 5 Key Differences Explained",
      excerpt:
        "Twins or rivals? We break down every difference that matters to you.",
      author: "Bikramjit",
      date: "Mar 04, 2026",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/170335/rumion-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
      bg: "#3a3010",
      isVideo: true,
    },
    {
      title: "Maruti Suzuki e Vitara First Drive Review: Best Electric SUV?",
      excerpt:
        "India's most anticipated electric SUV is finally here. Does it live up to the hype?",
      author: "Yashein",
      date: "Feb 28, 2026",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/159683/e-vitara-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      bg: "#1a2838",
      isVideo: true,
    },
    {
      title: "Top 5 Upcoming Cars Of March 2026 You Should Know About",
      excerpt:
        "From the Renault Bridger to the Brezza facelift, March is packed with launches.",
      author: "Rohit",
      date: "Feb 25, 2026",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/duster-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      bg: "#28201a",
      isVideo: true,
    },
  ],
  "Featured Stories": [
    {
      title: "10 Most Fuel Efficient Cars In India For 2026: Petrol & Diesel",
      excerpt:
        "We rank the most fuel efficient cars across every segment in India right now.",
      author: "Cardekho",
      date: "Mar 03, 2026",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/159089/swift-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
      bg: "#1e3020",
      isVideo: false,
    },
    {
      title: "Best SUVs Under 15 Lakh In India 2026: Our Top Picks",
      excerpt:
        "The sub-15 lakh SUV space is more competitive than ever. Here's who wins.",
      author: "Bikramjit",
      date: "Mar 01, 2026",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/scorpio-n-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
      bg: "#2a1a10",
      isVideo: false,
    },
    {
      title: "Electric Cars In India 2026: Complete Buyer's Guide",
      excerpt:
        "Everything you need to know before buying an EV in India this year.",
      author: "Arun",
      date: "Feb 20, 2026",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/be-6e-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      bg: "#0a1a2e",
      isVideo: false,
    },
    {
      title: "Automatic Cars Under 10 Lakh: The Complete 2026 List",
      excerpt:
        "Want an automatic without breaking the bank? Here are the best options.",
      author: "Ujjawall",
      date: "Feb 15, 2026",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/creta-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
      bg: "#1a2030",
      isVideo: false,
    },
  ],
};

const viewAllLabels = {
  "Expert Reviews": "View All Expert Reviews",
  Videos: "View All Videos",
  "Featured Stories": "View All Featured Stories",
};

function ArticleCard({ item }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "0 0 calc(25% - 12px)",
        minWidth: "230px",
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
      {/* Image */}
      <div
        style={{
          position: "relative",
          height: "178px",
          background: item.bg,
          overflow: "hidden",
        }}
      >
        {!imgError ? (
          <img
            src={item.img}
            alt={item.title}
            onError={() => setImgError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.35s ease",
            }}
          />
        ) : (
          /* Fallback gradient */
          <div
            style={{
              width: "100%",
              height: "100%",
              background: `linear-gradient(135deg, ${item.bg} 0%, #444 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg viewBox="0 0 80 50" width="80" height="50">
              <path
                d="M5 38 L12 20 Q16 12 24 12 L56 12 Q64 12 68 20 L75 38 Z"
                fill="none"
                stroke="#888"
                strokeWidth="2"
              />
              <rect
                x="4"
                y="38"
                width="72"
                height="8"
                rx="2"
                fill="none"
                stroke="#888"
                strokeWidth="2"
              />
              <circle
                cx="18"
                cy="46"
                r="6"
                fill="none"
                stroke="#888"
                strokeWidth="2"
              />
              <circle
                cx="62"
                cy="46"
                r="6"
                fill="none"
                stroke="#888"
                strokeWidth="2"
              />
            </svg>
          </div>
        )}

        {/* Play button overlay for videos */}
        {item.isVideo && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,0,0,0.15)",
              transition: "background 0.2s",
            }}
          >
            <PlayIcon />
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: "14px 14px 16px" }}>
        <div
          style={{
            fontSize: "14px",
            fontWeight: "700",
            color: "#111",
            lineHeight: "1.4",
            marginBottom: "8px",
          }}
        >
          {item.title}
        </div>
        <div
          style={{
            fontSize: "12.5px",
            color: "#666",
            lineHeight: "1.5",
            marginBottom: "12px",
          }}
        >
          {item.excerpt}
        </div>
        <div
          style={{
            fontSize: "11.5px",
            color: "#999",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <span>By {item.author}</span>
          <span style={{ color: "#ddd" }}>•</span>
          <span>{item.date}</span>
        </div>
      </div>
    </div>
  );
}

export default function KnowMoreSection() {
  const [activeTab, setActiveTab] = useState("Expert Reviews");
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
            margin: "0 0 20px",
            fontSize: "22px",
            fontWeight: "800",
            color: "#111",
          }}
        >
          Know more to choose better
        </h2>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            borderBottom: "1.5px solid #ebebeb",
            marginBottom: "24px",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                scrollRef.current?.scrollTo({ left: 0 });
              }}
              style={{
                padding: "8px 20px 12px",
                background: "none",
                border: "none",
                fontSize: "14px",
                fontWeight: activeTab === tab ? "700" : "400",
                color: activeTab === tab ? "#111" : "#777",
                cursor: "pointer",
                borderBottom:
                  activeTab === tab
                    ? "2.5px solid #f05a22"
                    : "2.5px solid transparent",
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
            {tabData[activeTab].map((item, i) => (
              <ArticleCard key={i} item={item} />
            ))}
          </div>

          {/* Right arrow */}
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
            {viewAllLabels[activeTab]}
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
