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

const stories = [
  {
    type: "single",
    title: "BYD Seagull Electric Hatchback Trademark Filed...",
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/seagull-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    ],
    bg: ["#b8d4e8"],
  },
  {
    type: "double",
    title: "Check Out The Newly Unveiled Mahindra Thar.e...",
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/thar-electric-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/thar-electric-interior.jpeg?isig=0&q=80",
    ],
    bg: ["#1a1a2e", "#c0102a"],
  },
  {
    type: "double",
    title: "A News Roundup Of Car Headlines This Week (Aug 7...",
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/178999/glc-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/170335/rumion-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    ],
    bg: ["#1a3020", "#d0e0f0"],
  },
  {
    type: "double",
    title: "Maruti Ertiga vs Toyota Rumion: Top 5 Differences I...",
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/170335/rumion-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/ertiga-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    ],
    bg: ["#1a2a3a", "#c8c8c0"],
  },
  {
    type: "double",
    title: "7 Things To Know About The Maruti Ertiga-based Toyota...",
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/170335/rumion-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/170335/rumion-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    ],
    bg: ["#c8c8c8", "#1a2840"],
  },
  {
    type: "single",
    title: "Top 10 Most Fuel Efficient Cars In India 2026",
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/159089/swift-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    ],
    bg: ["#e8f0d8"],
  },
];

/* Gradient overlay for text readability */
const textGradient =
  "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)";

function StoryCard({ story }) {
  const [hovered, setHovered] = useState(false);
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (i) =>
    setImgErrors((prev) => ({ ...prev, [i]: true }));

  const CardImage = ({ src, bg, index, style = {} }) => (
    <div
      style={{
        background: bg,
        overflow: "hidden",
        position: "relative",
        ...style,
      }}
    >
      {!imgErrors[index] ? (
        <img
          src={src}
          alt=""
          onError={() => handleImgError(index)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.4s ease",
            display: "block",
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg viewBox="0 0 80 50" width="60" height="38">
            <path
              d="M5 40 L12 22 Q16 14 24 14 L56 14 Q64 14 68 22 L75 40 Z"
              fill="none"
              stroke="#ccc"
              strokeWidth="2"
            />
            <rect
              x="4"
              y="40"
              width="72"
              height="8"
              rx="2"
              fill="none"
              stroke="#ccc"
              strokeWidth="2"
            />
            <circle
              cx="18"
              cy="48"
              r="6"
              fill="none"
              stroke="#ccc"
              strokeWidth="2"
            />
            <circle
              cx="62"
              cy="48"
              r="6"
              fill="none"
              stroke="#ccc"
              strokeWidth="2"
            />
          </svg>
        </div>
      )}
    </div>
  );

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: story.type === "single" ? "0 0 220px" : "0 0 220px",
        minWidth: story.type === "single" ? "200px" : "200px",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        height: "370px",
        boxShadow: hovered
          ? "0 8px 28px rgba(0,0,0,0.18)"
          : "0 2px 8px rgba(0,0,0,0.08)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.22s ease",
        background: "#eee",
      }}
    >
      {story.type === "single" ? (
        /* Single tall image */
        <>
          <CardImage
            src={story.images[0]}
            bg={story.bg[0]}
            index={0}
            style={{ height: "100%", width: "100%" }}
          />
          {/* Title overlay */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: textGradient,
              padding: "48px 12px 14px",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: "600",
                color: "white",
                lineHeight: "1.4",
              }}
            >
              {story.title}
            </div>
          </div>
        </>
      ) : (
        /* Double stacked images */
        <>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
            <CardImage
              src={story.images[0]}
              bg={story.bg[0]}
              index={0}
              style={{ flex: 1 }}
            />
            <CardImage
              src={story.images[1]}
              bg={story.bg[1]}
              index={1}
              style={{ flex: 1 }}
            />
          </div>
          {/* Title overlay at bottom */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: textGradient,
              padding: "48px 12px 14px",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: "600",
                color: "white",
                lineHeight: "1.4",
              }}
            >
              {story.title}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function CarVisualStories() {
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
          Car visual stories
        </h2>

        {/* Cards row + arrow */}
        <div style={{ position: "relative" }}>
          <div
            ref={scrollRef}
            style={{
              display: "flex",
              gap: "12px",
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              paddingBottom: "4px",
            }}
          >
            {stories.map((story, i) => (
              <StoryCard key={i} story={story} />
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
            View All Car Visual Stories
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
