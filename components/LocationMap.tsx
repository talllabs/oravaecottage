export default function LocationMap() {
  return (
    <div className="w-full bg-[#c8e8f5] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <svg
          viewBox="0 0 900 520"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          aria-label="Map showing route from Brisbane Australia to Solomon Islands via Honiara and Gizo"
        >
          {/* Ocean background */}
          <rect width="900" height="520" fill="#c8e8f5" />

          {/* Soft radial glow around route */}
          <defs>
            <radialGradient id="glow" cx="55%" cy="45%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#c8e8f5" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="500" cy="240" rx="380" ry="200" fill="url(#glow)" />

          {/* Australia */}
          <g fill="#3a9e8e" opacity="0.85">
            <path d="M 130 290 C 135 260 150 240 170 235 C 185 230 195 238 200 250 C 210 270 215 280 225 285 C 235 290 250 290 255 300 C 260 310 255 325 250 335 C 245 345 240 355 230 360 C 220 365 210 368 200 370 C 185 372 170 368 158 360 C 148 354 140 344 135 332 C 128 316 127 304 130 290 Z" />
            {/* WA extension */}
            <path d="M 90 255 C 100 248 112 244 122 246 C 130 248 134 255 132 265 C 130 272 125 278 118 282 C 110 285 100 283 95 277 C 89 270 87 262 90 255 Z" />
            {/* Cape York */}
            <path d="M 230 255 C 236 248 244 243 252 242 C 258 241 262 246 260 253 C 258 259 252 264 246 266 C 240 268 233 265 230 259 C 228 257 228 256 230 255 Z" />
            {/* Tasmania */}
            <path d="M 190 388 C 196 383 204 381 210 384 C 216 387 218 394 215 400 C 212 406 205 409 198 407 C 191 405 187 399 187 393 C 187 390 188 389 190 388 Z" />
          </g>

          {/* Solomon Islands chain */}
          <g fill="#3a9e8e" opacity="0.85">
            {/* Guadalcanal (largest, rightmost) */}
            <path d="M 680 265 C 695 258 715 255 730 260 C 745 265 752 278 748 290 C 744 300 732 306 718 307 C 704 308 690 302 682 293 C 675 284 674 272 680 265 Z" />
            {/* Malaita */}
            <path d="M 660 235 C 666 228 676 225 684 230 C 690 235 691 244 686 251 C 681 257 672 258 664 254 C 657 250 655 241 660 235 Z" />
            {/* Choiseul / New Georgia group (Gizo area) */}
            <path d="M 560 210 C 568 203 580 200 590 205 C 598 210 600 220 594 227 C 588 234 576 235 567 230 C 559 225 555 215 560 210 Z" />
            {/* Santa Isabel */}
            <path d="M 620 195 C 628 188 640 186 648 192 C 655 197 655 207 649 213 C 643 219 632 219 624 214 C 617 209 615 201 620 195 Z" />
            {/* Makira */}
            <path d="M 710 300 C 718 295 728 294 734 300 C 739 306 736 315 728 318 C 720 321 711 316 708 309 C 706 305 707 302 710 300 Z" />
            {/* Small island near Gizo */}
            <path d="M 545 220 C 549 216 555 215 559 219 C 562 223 560 229 555 231 C 550 233 545 230 543 225 C 542 222 543 221 545 220 Z" />
          </g>

          {/* Route line: Brisbane → Honiara → Gizo */}
          <path
            d="M 195 330 C 300 270 450 220 610 270 C 640 278 648 282 590 215"
            fill="none"
            stroke="#e8793a"
            strokeWidth="2.5"
            strokeDasharray="8 4"
            strokeLinecap="round"
          />

          {/* Location dot markers */}
          {/* Brisbane */}
          <circle cx="195" cy="330" r="6" fill="#e8793a" />
          <circle cx="195" cy="330" r="10" fill="#e8793a" fillOpacity="0.3" />
          {/* Honiara */}
          <circle cx="710" cy="275" r="6" fill="#e8793a" />
          <circle cx="710" cy="275" r="10" fill="#e8793a" fillOpacity="0.3" />
          {/* Gizo */}
          <circle cx="585" cy="218" r="6" fill="#e8793a" />
          <circle cx="585" cy="218" r="10" fill="#e8793a" fillOpacity="0.3" />

          {/* Labels */}
          <text
            x="115"
            y="365"
            fontFamily="Georgia, serif"
            fontSize="22"
            fill="#3a9e8e"
            opacity="0.7"
            fontStyle="italic"
          >
            Australia
          </text>
          <text
            x="660"
            y="185"
            fontFamily="Georgia, serif"
            fontSize="20"
            fill="#3a9e8e"
            opacity="0.7"
            fontStyle="italic"
          >
            Solomon Islands
          </text>

          <text
            x="162"
            y="322"
            fontFamily="Arial, sans-serif"
            fontSize="13"
            fill="#3a8fd9"
            fontWeight="600"
          >
            Brisbane
          </text>
          <text
            x="720"
            y="272"
            fontFamily="Arial, sans-serif"
            fontSize="13"
            fill="#3a8fd9"
            fontWeight="600"
          >
            Honiara
          </text>
          <text
            x="556"
            y="211"
            fontFamily="Arial, sans-serif"
            fontSize="13"
            fill="#3a8fd9"
            fontWeight="600"
          >
            Gizo
          </text>
        </svg>
      </div>
    </div>
  );
}
