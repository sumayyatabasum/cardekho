import { useState } from "react";

const SearchIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const HeartIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#333"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const UserIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#333"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const LocationIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#e63946"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ChevronDown = ({ size = 12, color = "#555" }) => (
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
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CarDekhoLogo = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
    }}
  >
    {/* Orange circle with white car icon */}
    <div
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #f05a22 0%, #e63900 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 8px rgba(240,90,34,0.35)",
      }}
    >
      <svg width="26" height="26" viewBox="0 0 40 40" fill="white">
        <path
          d="M8 24 L10 16 Q11 13 14 13 L26 13 Q29 13 30 16 L32 24 L8 24Z"
          fill="white"
        />
        <rect x="7" y="24" width="26" height="5" rx="2" fill="white" />
        <circle
          cx="13"
          cy="31"
          r="3.5"
          fill="#f05a22"
          stroke="white"
          strokeWidth="1.5"
        />
        <circle
          cx="27"
          cy="31"
          r="3.5"
          fill="#f05a22"
          stroke="white"
          strokeWidth="1.5"
        />
        <rect x="15" y="15" width="10" height="6" rx="1.5" fill="#f05a22" />
      </svg>
    </div>
    <div>
      <div
        style={{
          fontSize: "22px",
          fontWeight: "800",
          letterSpacing: "-0.5px",
          color: "#1a1a2e",
          lineHeight: "1.1",
          fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif",
        }}
      >
        <span style={{ color: "#f05a22" }}>Car</span>Dekho
      </div>
      <div
        style={{
          fontSize: "7.5px",
          fontWeight: "600",
          letterSpacing: "1.2px",
          color: "#888",
          textTransform: "uppercase",
          lineHeight: "1",
        }}
      >
        BADHTE INDIA KA BHAROSA
      </div>
    </div>
  </div>
);

const navItems = [
  { label: "NEW CARS", hasDropdown: true },
  { label: "USED CARS", hasDropdown: true },
  { label: "NEWS & REVIEWS", hasDropdown: true },
  { label: "VIDEOS", hasDropdown: true },
];

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("All");
  const [activeNav, setActiveNav] = useState(null);

  return (
    <div
      style={{ fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif" }}
    >
      {/* Top purple gradient bar */}
      <div
        style={{
          height: "3px",
          background:
            "linear-gradient(90deg, #6b21a8 0%, #a855f7 40%, #ec4899 70%, #f97316 100%)",
        }}
      />

      {/* Main header row */}
      <div
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #f0f0f0",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          height: "64px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        {/* Logo */}
        <CarDekhoLogo />

        {/* Search Bar */}
        <div
          style={{
            flex: "1",
            maxWidth: "540px",
            display: "flex",
            alignItems: "center",
            border: "1.5px solid #d0d0d0",
            borderRadius: "30px",
            overflow: "hidden",
            height: "42px",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#f05a22")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#d0d0d0")}
        >
          {/* Category Dropdown */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "0 14px 0 16px",
              cursor: "pointer",
              borderRight: "1.5px solid #e0e0e0",
              height: "100%",
              fontSize: "13.5px",
              fontWeight: "500",
              color: "#333",
              userSelect: "none",
              whiteSpace: "nowrap",
            }}
          >
            {searchCategory}
            <ChevronDown />
          </div>

          {/* Search Input */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              padding: "0 14px",
              gap: "8px",
            }}
          >
            <SearchIcon />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search or Ask a Question"
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                fontSize: "13.5px",
                color: "#333",
                background: "transparent",
                fontFamily: "inherit",
              }}
            />
          </div>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Right side actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Language */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              cursor: "pointer",
              fontSize: "13.5px",
              color: "#333",
              textDecoration: "underline",
              textDecorationStyle: "dotted",
              textUnderlineOffset: "3px",
            }}
          >
            English
            <ChevronDown />
          </div>

          {/* Wishlist */}
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              padding: "4px",
            }}
          >
            <HeartIcon />
          </div>

          {/* Login / Register */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
              fontSize: "13.5px",
              fontWeight: "500",
              color: "#333",
              padding: "6px 10px",
              borderRadius: "6px",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#f5f5f5")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            <UserIcon />
            <span>Login / Register</span>
          </div>
        </div>
      </div>

      {/* Secondary nav row */}
      <div
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #ebebeb",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          height: "44px",
          gap: "4px",
        }}
      >
        {/* Nav items */}
        <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
          {navItems.map((item) => (
            <div
              key={item.label}
              onMouseEnter={() => setActiveNav(item.label)}
              onMouseLeave={() => setActiveNav(null)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "0 16px",
                height: "44px",
                cursor: "pointer",
                fontSize: "12.5px",
                fontWeight: "700",
                letterSpacing: "0.3px",
                color: activeNav === item.label ? "#f05a22" : "#222",
                borderBottom:
                  activeNav === item.label
                    ? "2.5px solid #f05a22"
                    : "2.5px solid transparent",
                transition: "all 0.15s",
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown
                  size={10}
                  color={activeNav === item.label ? "#f05a22" : "#666"}
                />
              )}
            </div>
          ))}
        </div>

        {/* Select City */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            cursor: "pointer",
            fontSize: "13px",
            color: "#333",
            fontWeight: "500",
            marginLeft: "auto",
            padding: "4px 8px",
            borderRadius: "4px",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#fef4f0")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          <LocationIcon />
          <span>Select City</span>
          <ChevronDown size={11} color="#888" />
        </div>
      </div>
    </div>
  );
}
