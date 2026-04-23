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

const VsBadge = () => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      background: "#f05a22",
      color: "white",
      fontSize: "8px",
      fontWeight: "800",
      flexShrink: 0,
    }}
  >
    vs
  </div>
);

const newsItems = [
  {
    title: "5 Hidden Facts About The New Renault Duster That You Didn&rs...",
    excerpt:
      "This is the reason that the Duster took so long to make a comeback in India!",
    author: "Bikramjit",
    date: "Mar 07, 2026",
    tag: "Hidden Facts About\nRenault Duster",
    tagColor: "#000",
    hasVs: false,
    bg: "#3a3020",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/duster-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  },
  {
    title: "The Batman Returns: Mahindra Reintroduces BE 6 Batman Editio...",
    excerpt:
      "The Dark Knight returns after the initial 999 units were sold out in just 135 seconds",
    author: "Yashein",
    date: "Mar 07, 2026",
    tag: "Mahindra BE 6\nBatman Edition Is Back!",
    tagColor: "#000",
    hasVs: false,
    bg: "#1a0a10",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/be-6e-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  },
  {
    title: "Nissan Gravite: Base vs Top Variants Compared In Images",
    excerpt:
      "The base variant looks made for those on a strict budget but it's the top trim that...",
    author: "Rohit",
    date: "Mar 06, 2026",
    tag: "Compared Variant\nNissan Gravite Base",
    tagColor: "#fff",
    hasVs: true,
    vsLabel: "Top",
    bg: "#2a3820",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/gravite-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    img2: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/gravite-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
  },
  {
    title: "Nissan Gravite vs Kia Carens: Which 7-Seater Could Be The Be...",
    excerpt:
      "With the Nissan Gravite entering as a far more affordable three-row option and the...",
    author: "Cardekho",
    date: "Mar 06, 2026",
    tag: "MPVs Compared\nNissan Gravite",
    tagColor: "#fff",
    hasVs: true,
    vsLabel: "Kia Carens",
    bg: "#1a2830",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/gravite-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    img2: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41652/carens-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
  },
  {
    title: "Top 10 Best Mileage Cars In India 2026: Petrol & Diesel",
    excerpt:
      "We list the most fuel efficient cars available in India across all segments...",
    author: "Cardekho",
    date: "Mar 05, 2026",
    tag: "Best Mileage Cars\nIndia 2026",
    tagColor: "#fff",
    hasVs: false,
    bg: "#203040",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/159089/swift-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
  },
];

function NewsCard({ item }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [img2Error, setImg2Error] = useState(false);

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
      {/* Image area */}
      <div
        style={{
          position: "relative",
          height: "178px",
          overflow: "hidden",
          background: item.bg,
        }}
      >
        {/* Single or split image */}
        {item.img2 ? (
          <div style={{ display: "flex", height: "100%", gap: "2px" }}>
            <div style={{ flex: 1, overflow: "hidden" }}>
              {!imgError ? (
                <img
                  src={item.img}
                  alt=""
                  onError={() => setImgError(true)}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: hovered ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.3s",
                  }}
                />
              ) : (
                <div
                  style={{ width: "100%", height: "100%", background: item.bg }}
                />
              )}
            </div>
            <div style={{ flex: 1, overflow: "hidden" }}>
              {!img2Error ? (
                <img
                  src={item.img2}
                  alt=""
                  onError={() => setImg2Error(true)}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: hovered ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.3s",
                  }}
                />
              ) : (
                <div
                  style={{ width: "100%", height: "100%", background: item.bg }}
                />
              )}
            </div>
          </div>
        ) : !imgError ? (
          <img
            src={item.img}
            alt=""
            onError={() => setImgError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s",
            }}
          />
        ) : (
          <div style={{ width: "100%", height: "100%", background: item.bg }} />
        )}

        {/* Bottom tag overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
            padding: "28px 10px 10px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "12px",
              fontWeight: "700",
              color: "white",
              lineHeight: "1.35",
              whiteSpace: "pre-line",
            }}
          >
            {/* Orange left bar */}
            <div
              style={{
                width: "3px",
                minHeight: "32px",
                background: "#f05a22",
                borderRadius: "2px",
                flexShrink: 0,
              }}
            />
            <span>{item.tag}</span>
            {item.hasVs && (
              <>
                <VsBadge />
                <span style={{ whiteSpace: "nowrap" }}>{item.vsLabel}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "14px 14px 16px" }}>
        {/* Title */}
        <div
          style={{
            fontSize: "14px",
            fontWeight: "700",
            color: "#111",
            marginBottom: "8px",
            lineHeight: "1.4",
          }}
        >
          {item.title}
        </div>

        {/* Excerpt */}
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

        {/* Author + date */}
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
          <span style={{ color: "#ccc" }}>•</span>
          <span>{item.date}</span>
        </div>
      </div>
    </div>
  );
}

export default function NewsSection() {
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
          News to help choose your car
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
            {newsItems.map((item, i) => (
              <NewsCard key={i} item={item} />
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
            View All Latest News
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
