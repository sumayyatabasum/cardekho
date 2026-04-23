import { useState } from "react";

/* ── Icon SVGs ── */
const AwardIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#333"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M8.56 14.25L7 22l5-3 5 3-1.56-7.75" />
    <path d="M9 8h6M12 5v6" />
  </svg>
);

const AIIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#333"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z" />
    <path d="M4 20l2-2M20 20l-2-2M12 18v3" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const OffersIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#333"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
    <circle cx="7" cy="7" r="1.5" fill="#333" />
  </svg>
);

const CompareIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#333"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="9" width="9" height="6" rx="1.5" />
    <rect x="14" y="9" width="9" height="6" rx="1.5" />
    <path d="M4 9V6a2 2 0 012-2h12a2 2 0 012 2v3M4 15v3a2 2 0 002 2h12a2 2 0 002-2v-3" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#555">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const TwitterXIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#555">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#555">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#555"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="#555" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#555">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const AppStoreBadge = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      background: "#111",
      color: "white",
      padding: "8px 16px",
      borderRadius: "8px",
      cursor: "pointer",
      minWidth: "140px",
    }}
  >
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
    <div>
      <div style={{ fontSize: "9px", opacity: 0.8 }}>Download on the</div>
      <div style={{ fontSize: "14px", fontWeight: "700" }}>App Store</div>
    </div>
  </div>
);

const GooglePlayBadge = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      background: "#111",
      color: "white",
      padding: "8px 16px",
      borderRadius: "8px",
      cursor: "pointer",
      minWidth: "140px",
    }}
  >
    <svg width="22" height="22" viewBox="0 0 24 24">
      <path d="M3 3l7.5 9L3 21" fill="#EA4335" />
      <path d="M3 3l18 9-10.5 2.1z" fill="#FBBC05" />
      <path d="M3 21l18-9-10.5-2.1z" fill="#34A853" />
      <path d="M10.5 11.1L21 12 3 3z" fill="#4285F4" />
      <path d="M10.5 12.9L21 12 3 21z" fill="#4285F4" />
    </svg>
    <div>
      <div style={{ fontSize: "9px", opacity: 0.8 }}>GET IT ON</div>
      <div style={{ fontSize: "14px", fontWeight: "700" }}>Google Play</div>
    </div>
  </div>
);

const features = [
  { icon: <AwardIcon />, title: "India's #1", subtitle: "Largest Auto portal" },
  {
    icon: <AIIcon />,
    title: "AI Expert",
    subtitle: "Simplify your car search",
  },
  { icon: <OffersIcon />, title: "Offers", subtitle: "Stay updated pay less" },
  { icon: <CompareIcon />, title: "Compare", subtitle: "Decode the right car" },
];

const footerCols = [
  {
    heading: "ABOUT CARDEKHO",
    links: [
      "About",
      "Careers With Us",
      "Terms & Conditions",
      "Privacy Policy",
      "Corporate Policies",
      "Investors",
      "FAQs",
    ],
  },
  {
    heading: "CONNECT WITH US",
    links: [
      "Feedback",
      "Contact Us",
      "Advertise with Us",
      "Become Partner Dealer",
    ],
  },
  {
    heading: "OTHERS",
    links: [
      "TrucksDekho",
      "TyreDekho",
      "TractorsDekho",
      "Girnar Vision Fund",
      "Emergency Response",
      "Car Sales Trends",
    ],
  },
];

const ventures = [
  { name: "BikeDekho", color: "#e63946", prefix: "🔴" },
  { name: "rupyy", color: "#1a1a1a", prefix: "ʻ" },
  { name: "ZIGWHEELS", color: "#f5a623", prefix: "" },
  { name: "InsuranceDekho", color: "#e63946", prefix: "" },
  { name: "revv", color: "#2ecc71", prefix: "" },
];

const socialIcons = [
  { icon: <FacebookIcon />, label: "Facebook" },
  { icon: <TwitterXIcon />, label: "Twitter/X" },
  { icon: <YoutubeIcon />, label: "YouTube" },
  { icon: <InstagramIcon />, label: "Instagram" },
  { icon: <LinkedInIcon />, label: "LinkedIn" },
];

function FooterLink({ children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        fontSize: "13px",
        color: hovered ? "#f05a22" : "#555",
        textDecoration: "none",
        marginBottom: "10px",
        transition: "color 0.15s",
        lineHeight: "1.4",
      }}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
        background: "white",
      }}
    >
      {/* ── Feature strip ── */}
      <div
        style={{
          borderTop: "1px solid #f0f0f0",
          borderBottom: "1px solid #f0f0f0",
          padding: "28px 40px",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "16px",
          background: "white",
        }}
      >
        {features.map((f, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              flex: "1",
              minWidth: "180px",
            }}
          >
            {f.icon}
            <div>
              <div
                style={{ fontSize: "16px", fontWeight: "700", color: "#111" }}
              >
                {f.title}
              </div>
              <div
                style={{ fontSize: "12.5px", color: "#777", marginTop: "2px" }}
              >
                {f.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Main footer body ── */}
      <div
        style={{
          background: "#fafafa",
          padding: "44px 40px 32px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {/* Link columns */}
          {footerCols.map((col, i) => (
            <div key={i} style={{ flex: "1", minWidth: "160px" }}>
              <div
                style={{
                  fontSize: "11.5px",
                  fontWeight: "700",
                  color: "#333",
                  letterSpacing: "0.5px",
                  marginBottom: "18px",
                  textTransform: "uppercase",
                }}
              >
                {col.heading}
              </div>
              {col.links.map((link) => (
                <FooterLink key={link}>{link}</FooterLink>
              ))}
            </div>
          ))}

          {/* App + Ventures column */}
          <div style={{ flex: "1.4", minWidth: "260px" }}>
            {/* App Store */}
            <div
              style={{
                fontSize: "11.5px",
                fontWeight: "700",
                color: "#333",
                letterSpacing: "0.5px",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              EXPERIENCE CARDEKHO APP
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginBottom: "28px",
              }}
            >
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>

            {/* Group ventures */}
            <div
              style={{
                fontSize: "11.5px",
                fontWeight: "700",
                color: "#333",
                letterSpacing: "0.5px",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              CARDEKHO GROUP VENTURES
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px 24px",
              }}
            >
              {/* BikeDekho */}
              <div
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span
                  style={{
                    color: "#e63946",
                    fontSize: "20px",
                    fontWeight: "800",
                    fontStyle: "italic",
                  }}
                >
                  <span style={{ fontSize: "22px" }}>Ⓖ</span> BikeDekho
                </span>
              </div>
              {/* rupyy */}
              <div style={{ cursor: "pointer" }}>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    color: "#111",
                    fontStyle: "italic",
                    letterSpacing: "-1px",
                  }}
                >
                  ʻrupyy
                </span>
              </div>
              {/* ZigWheels */}
              <div style={{ cursor: "pointer" }}>
                <span
                  style={{
                    fontSize: "17px",
                    fontWeight: "900",
                    color: "#f5a623",
                    letterSpacing: "0.5px",
                  }}
                >
                  ZIG<span style={{ color: "#333" }}>WHEELS</span>
                  <span
                    style={{
                      fontSize: "10px",
                      color: "#333",
                      verticalAlign: "super",
                    }}
                  >
                    .com
                  </span>
                </span>
              </div>
              {/* InsuranceDekho */}
              <div
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span style={{ color: "#e63946", fontSize: "14px" }}>◈</span>
                <span
                  style={{ fontSize: "13px", fontWeight: "700", color: "#333" }}
                >
                  InsuranceDekho
                </span>
              </div>
              {/* revv */}
              <div style={{ cursor: "pointer" }}>
                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: "900",
                    color: "#2ecc71",
                    fontStyle: "italic",
                    letterSpacing: "-1px",
                  }}
                >
                  revv
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          borderTop: "1px solid #ebebeb",
          padding: "16px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          background: "#fafafa",
        }}
      >
        <div style={{ fontSize: "12.5px", color: "#888" }}>
          © 2026 Girnar Software Pvt. Ltd.
        </div>

        {/* Social icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ fontSize: "13px", fontWeight: "600", color: "#555" }}>
            Connect:
          </span>
          {socialIcons.map((s, i) => (
            <a
              key={i}
              href="#"
              aria-label={s.label}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                border: "1.5px solid #e0e0e0",
                background: "white",
                transition: "border-color 0.15s, box-shadow 0.15s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#f05a22";
                e.currentTarget.style.boxShadow =
                  "0 2px 8px rgba(240,90,34,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e0e0e0";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
