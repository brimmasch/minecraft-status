export function HeroArtwork() {
  return (
    <svg
      viewBox="0 0 520 320"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", display: "block" }}
      shapeRendering="crispEdges"
    >
      {/* Sky gradient */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a0a2e" />
          <stop offset="100%" stopColor="#0d2a1a" />
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a7d2c" />
          <stop offset="100%" stopColor="#5a4a2a" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="520" height="320" fill="url(#sky)" />

      {/* Moon */}
      <rect x="440" y="18" width="24" height="24" fill="#e8e8c0" />
      <rect x="448" y="18" width="8" height="8" fill="#c8c8a0" />
      <rect x="456" y="26" width="8" height="8" fill="#c8c8a0" />

      {/* Stars */}
      <rect x="30" y="20" width="4" height="4" fill="#ffffff" opacity="0.8" />
      <rect x="80" y="10" width="4" height="4" fill="#ffffff" opacity="0.6" />
      <rect x="150" y="30" width="4" height="4" fill="#ffffff" opacity="0.7" />
      <rect x="220" y="14" width="4" height="4" fill="#ffffff" opacity="0.5" />
      <rect x="300" y="22" width="4" height="4" fill="#ffffff" opacity="0.8" />
      <rect x="370" y="8" width="4" height="4" fill="#ffffff" opacity="0.6" />
      <rect x="490" y="30" width="4" height="4" fill="#ffffff" opacity="0.7" />
      <rect x="55" y="50" width="4" height="4" fill="#ffffff" opacity="0.4" />
      <rect x="190" y="45" width="4" height="4" fill="#ffffff" opacity="0.5" />
      <rect x="410" y="50" width="4" height="4" fill="#ffffff" opacity="0.4" />

      {/* Distant trees */}
      <rect x="0" y="170" width="16" height="50" fill="#2a5a1a" />
      <rect x="10" y="155" width="28" height="28" fill="#2d6e1e" />
      <rect x="480" y="165" width="16" height="55" fill="#2a5a1a" />
      <rect x="470" y="150" width="28" height="28" fill="#2d6e1e" />
      <rect x="60" y="175" width="12" height="45" fill="#2a5a1a" />
      <rect x="52" y="162" width="24" height="24" fill="#2d6e1e" />

      {/* Ground */}
      <rect x="0" y="220" width="520" height="100" fill="#5a4a2a" />
      <rect x="0" y="220" width="520" height="16" fill="#3a7d2c" />
      {/* Ground texture */}
      <rect x="20" y="220" width="8" height="8" fill="#2d6e1e" />
      <rect x="80" y="222" width="8" height="6" fill="#2d6e1e" />
      <rect x="160" y="220" width="8" height="8" fill="#2d6e1e" />
      <rect x="240" y="222" width="8" height="6" fill="#2d6e1e" />
      <rect x="320" y="220" width="8" height="8" fill="#2d6e1e" />
      <rect x="400" y="222" width="8" height="6" fill="#2d6e1e" />
      <rect x="460" y="220" width="8" height="8" fill="#2d6e1e" />

      {/* ===================== */}
      {/* MONSTERS (background) */}
      {/* ===================== */}

      {/* CREEPER - far left back */}
      {/* body */}
      <rect x="42" y="148" width="28" height="36" fill="#3cad3c" />
      {/* head */}
      <rect x="38" y="124" width="36" height="32" fill="#4abf4a" />
      {/* face */}
      <rect x="44" y="132" width="8" height="8" fill="#1a1a1a" />
      <rect x="58" y="132" width="8" height="8" fill="#1a1a1a" />
      <rect x="50" y="140" width="12" height="4" fill="#1a1a1a" />
      <rect x="46" y="144" width="4" height="4" fill="#1a1a1a" />
      <rect x="62" y="144" width="4" height="4" fill="#1a1a1a" />
      {/* legs */}
      <rect x="42" y="184" width="12" height="20" fill="#2e8c2e" />
      <rect x="58" y="184" width="12" height="20" fill="#2e8c2e" />

      {/* ZOMBIE - center back */}
      {/* body */}
      <rect x="228" y="148" width="32" height="40" fill="#4a7a4a" />
      {/* arms outstretched */}
      <rect x="192" y="148" width="36" height="16" fill="#3a6a3a" />
      <rect x="260" y="148" width="36" height="16" fill="#3a6a3a" />
      {/* head */}
      <rect x="224" y="116" width="40" height="36" fill="#6aaa6a" />
      {/* face */}
      <rect x="230" y="124" width="10" height="10" fill="#1a1a1a" />
      <rect x="248" y="124" width="10" height="10" fill="#1a1a1a" />
      <rect x="236" y="138" width="16" height="6" fill="#1a1a1a" />
      {/* legs */}
      <rect x="228" y="188" width="14" height="24" fill="#3a6a3a" />
      <rect x="246" y="188" width="14" height="24" fill="#3a6a3a" />

      {/* SKELETON - right back */}
      {/* body */}
      <rect x="406" y="150" width="24" height="40" fill="#d4d4d4" />
      {/* ribs */}
      <rect x="406" y="158" width="24" height="4" fill="#aaaaaa" />
      <rect x="406" y="166" width="24" height="4" fill="#aaaaaa" />
      <rect x="406" y="174" width="24" height="4" fill="#aaaaaa" />
      {/* arms */}
      <rect x="376" y="150" width="30" height="8" fill="#c8c8c8" />
      <rect x="430" y="150" width="30" height="8" fill="#c8c8c8" />
      {/* bow on right arm */}
      <rect x="456" y="138" width="6" height="32" fill="#8B4513" />
      <rect x="458" y="138" width="2" height="32" fill="#daa520" />
      {/* head */}
      <rect x="402" y="116" width="36" height="36" fill="#e8e8e8" />
      {/* eye sockets */}
      <rect x="408" y="122" width="10" height="10" fill="#1a1a1a" />
      <rect x="422" y="122" width="10" height="10" fill="#1a1a1a" />
      {/* teeth */}
      <rect x="408" y="136" width="6" height="8" fill="#ffffff" />
      <rect x="416" y="136" width="6" height="8" fill="#ffffff" />
      <rect x="424" y="136" width="6" height="8" fill="#ffffff" />
      {/* legs */}
      <rect x="406" y="190" width="10" height="26" fill="#c8c8c8" />
      <rect x="420" y="190" width="10" height="26" fill="#c8c8c8" />

      {/* ===================== */}
      {/* PLAYERS (foreground, running towards viewer — larger) */}
      {/* ===================== */}

      {/* PLAYER 1 - Steve, left, mid-stride */}
      {/* legs running */}
      <rect x="118" y="200" width="16" height="28" fill="#3a5fa0" />
      <rect x="138" y="210" width="16" height="18" fill="#3a5fa0" />
      {/* body */}
      <rect x="112" y="162" width="48" height="44" fill="#7a9ad0" />
      {/* shirt detail */}
      <rect x="120" y="168" width="32" height="8" fill="#5a7ab0" />
      {/* left arm swinging back */}
      <rect x="90" y="162" width="22" height="14" fill="#c8a87a" />
      {/* right arm swinging forward */}
      <rect x="150" y="162" width="22" height="14" fill="#c8a87a" />
      {/* head */}
      <rect x="108" y="118" width="56" height="48" fill="#c8a87a" />
      {/* eyes */}
      <rect x="118" y="130" width="14" height="14" fill="#6a8ccc" />
      <rect x="140" y="130" width="14" height="14" fill="#6a8ccc" />
      <rect x="120" y="132" width="8" height="8" fill="#1a1a1a" />
      <rect x="142" y="132" width="8" height="8" fill="#1a1a1a" />
      {/* hair */}
      <rect x="108" y="118" width="56" height="14" fill="#6b4226" />
      {/* mouth - scared */}
      <rect x="124" y="150" width="24" height="6" fill="#7a3a2a" />
      <rect x="124" y="150" width="8" height="4" fill="#c8a87a" />
      <rect x="140" y="150" width="8" height="4" fill="#c8a87a" />

      {/* PLAYER 2 - Alex, right, leaning forward */}
      {/* legs running */}
      <rect x="344" y="195" width="16" height="32" fill="#2a5a30" />
      <rect x="364" y="207" width="16" height="20" fill="#2a5a30" />
      {/* body */}
      <rect x="338" y="156" width="48" height="44" fill="#4a8a54" />
      {/* shirt detail */}
      <rect x="346" y="162" width="32" height="8" fill="#3a6a44" />
      {/* arms */}
      <rect x="316" y="156" width="22" height="14" fill="#c8987a" />
      <rect x="376" y="156" width="22" height="14" fill="#c8987a" />
      {/* head */}
      <rect x="334" y="110" width="56" height="50" fill="#c8987a" />
      {/* eyes */}
      <rect x="344" y="122" width="14" height="14" fill="#5a8844" />
      <rect x="366" y="122" width="14" height="14" fill="#5a8844" />
      <rect x="346" y="124" width="8" height="8" fill="#1a1a1a" />
      <rect x="368" y="124" width="8" height="8" fill="#1a1a1a" />
      {/* hair - long orange */}
      <rect x="334" y="110" width="56" height="14" fill="#b86a2a" />
      <rect x="334" y="124" width="8" height="24" fill="#b86a2a" />
      <rect x="382" y="124" width="8" height="24" fill="#b86a2a" />
      {/* mouth - scared open */}
      <rect x="350" y="144" width="20" height="8" fill="#7a3a2a" />

      {/* MOTION LINES - speed */}
      <rect x="60" y="160" width="40" height="4" fill="#ffffff" opacity="0.15" />
      <rect x="60" y="170" width="30" height="4" fill="#ffffff" opacity="0.10" />
      <rect x="430" y="155" width="40" height="4" fill="#ffffff" opacity="0.15" />
      <rect x="435" y="165" width="30" height="4" fill="#ffffff" opacity="0.10" />

      {/* Shadow under players */}
      <ellipse cx="142" cy="228" rx="28" ry="6" fill="#000000" opacity="0.3" />
      <ellipse cx="362" cy="226" rx="28" ry="6" fill="#000000" opacity="0.3" />

      {/* Particle / panic dots */}
      <rect x="170" y="140" width="6" height="6" fill="#ffff44" opacity="0.7" />
      <rect x="185" y="125" width="4" height="4" fill="#ffff44" opacity="0.5" />
      <rect x="310" y="135" width="6" height="6" fill="#ffff44" opacity="0.7" />
      <rect x="295" y="148" width="4" height="4" fill="#ffff44" opacity="0.5" />
    </svg>
  );
}
