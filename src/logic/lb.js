:root {
  --primary-gradient: linear-gradient(135deg, #6d28d9 0%, #4f46e5 100%);
  --secondary-gradient: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);
  --accent-color: #f472b6;
  --bg-pattern: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  --card-gradient: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  --gold: linear-gradient(135deg, #fbbf24 0%, #d97706 100%);
  --silver: linear-gradient(135deg, #e5e7eb 0%, #9ca3af 100%);
  --bronze: linear-gradient(135deg, #d6b4ac 0%, #92400e 100%);
  --podium-height-1: 200px;
  --podium-height-2: 160px;
  --podium-height-3: 130px;

  /* Enhanced Color System */
  --primary-hue: 265;
  --accent-hue: 330;
  --bg-hue: 225;
  --primary: hsl(var(--primary-hue), 84%, 50%);
  --accent: hsl(var(--accent-hue), 84%, 65%);

  /* Refined Gradients */
  --gold: linear-gradient(135deg,
      hsl(45, 95%, 60%) 0%,
      hsl(36, 95%, 45%) 100%);
  --silver: linear-gradient(135deg,
      hsl(220, 20%, 85%) 0%,
      hsl(220, 20%, 65%) 100%);
  --bronze: linear-gradient(135deg,
      hsl(30, 40%, 70%) 0%,
      hsl(30, 40%, 50%) 100%);

  /* Ambient Light Effects */
  --gold-glow: 0 0 30px hsla(45, 95%, 60%, 0.3);
  --silver-glow: 0 0 30px hsla(220, 20%, 85%, 0.2);
  --bronze-glow: 0 0 30px hsla(30, 40%, 70%, 0.2);

  --crown-color: #ffd700;
  --crown-glow: 0 0 20px rgba(255, 215, 0, 0.5);
}

body {
  font-family: 'Poppins', sans-serif;
  background: #1a1a2e;
  background-image: var(--bg-pattern);
  min-height: 100vh;
  color: #e2e8f0;
  padding: 1rem;
}

.leaderboard-container {
  max-width: 1000px;
  margin: 2rem auto;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  overflow: visible;
  position: relative;
  isolation: isolate;
  background: linear-gradient(135deg,
      hsla(var(--bg-hue), 30%, 15%, 0.8),
      hsla(var(--bg-hue), 30%, 5%, 0.9));
}

.featured-leaderboard {
  position: relative;
  height: 400px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  background: var(--primary-gradient);
  background: linear-gradient(180deg,
      hsla(var(--primary-hue), 84%, 30%, 0.9),
      hsla(var(--primary-hue), 84%, 15%, 0.9));
  position: relative;
  overflow: hidden;
}

.featured-leaderboard::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.2));
  pointer-events: none;
}

.featured-leaderboard::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 20%,
      hsla(var(--primary-hue), 84%, 50%, 0.4) 0%,
      transparent 50%),
    radial-gradient(circle at 80% 80%,
      hsla(var(--accent-hue), 84%, 50%, 0.4) 0%,
      transparent 50%);
  mix-blend-mode: overlay;
}

.featured-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 1rem;
}

.featured-item.top-position-1 {
  order: 2;
  height: var(--podium-height-1);
}

.featured-item:nth-child(1) {
  order: 1;
  height: var(--podium-height-2);
}

.featured-item:nth-child(3) {
  order: 3;
  height: var(--podium-height-3);
}

.featured-item::before {
  content: '';
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: var(--card-gradient);
  background: linear-gradient(to bottom,
      hsla(var(--bg-hue), 30%, 20%, 0.9),
      hsla(var(--bg-hue), 30%, 10%, 0.9));
  border: 1px solid hsla(var(--bg-hue), 30%, 50%, 0.1);
  box-shadow:
    0 10px 30px -10px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 hsla(var(--bg-hue), 30%, 50%, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px 20px 0 0;
  backdrop-filter: blur(10px);
  z-index: 0;
}

.featured-item::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background: var(--accent-color);
  transition: width 0.3s ease;
}

.featured-item:hover::after {
  width: 80%;
}

.featured-item .rank {
  position: relative;
  z-index: 1;
  margin-bottom: 1rem;
  font-size: 3rem;
  padding: 1.5rem;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--card-gradient);
  background: var(--card-gradient);
  backdrop-filter: blur(5px);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.05em;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transform: translateY(-50%);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: all 0.4s ease;
}

.featured-item:hover .rank {
  transform: perspective(1000px) rotateX(0deg) scale(1.05);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.featured-item .rank:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

.featured-item .name,
.featured-item .points {
  position: relative;
  z-index: 1;
}

.featured-item .name {
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.75rem;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.featured-item:hover .name {
  opacity: 1;
}

.featured-item .points {
  font-size: 1em;
  font-weight: 500;
  opacity: 0.9;
  margin-top: 8px;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  text-align: center;
  transform: translateY(0);
  transition: all 0.3s ease;
}

.featured-item:hover .points {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.featured-item.top-position-1 .rank {
  background: var(--gold);
  font-size: 3.5rem;
  width: 100px;
  height: 100px;
  padding: 2.5rem;
  box-shadow: var(--gold-glow);
}

.featured-item:nth-child(1) .rank {
  background: var(--silver);
  box-shadow: var(--silver-glow);
}

.featured-item:nth-child(3) .rank {
  background: var(--bronze);
  box-shadow: var(--bronze-glow);
}

.search-bar-container {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
}

.search-icon {
  font-size: 1.2em;
  color: #ccc;
  cursor: pointer;
}

.leaderboard-list {
  list-style: none;
  padding: 0;
  margin: 0;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 0 0 24px 24px;
  padding-bottom: 10px;
  max-height: 300px;
  /* Set a max height */
  overflow-y: auto;
  /* Enable vertical scroll */
  padding: 2rem;
  background: linear-gradient(to bottom,
      hsla(var(--bg-hue), 30%, 15%, 0.8),
      hsla(var(--bg-hue), 30%, 10%, 0.8));
}

.leaderboard-list::-webkit-scrollbar {
  width: 8px;
}

.leaderboard-list::-webkit-scrollbar-track {
  background: hsla(var(--bg-hue), 30%, 20%, 0.3);
  border-radius: 4px;
}

.leaderboard-list::-webkit-scrollbar-thumb {
  background: hsla(var(--primary-hue), 84%, 50%, 0.3);
  border-radius: 4px;
}

.leaderboard-list::-webkit-scrollbar-thumb:hover {
  background: hsla(var(--primary-hue), 84%, 50%, 0.5);
}

.list-item {
  display: flex;
  align-items: center;
  padding: 1.25rem;
  margin: 0.75rem 0;
  border-radius: 16px;
  background: var(--card-gradient);
  background: linear-gradient(135deg,
      hsla(var(--bg-hue), 30%, 20%, 0.6),
      hsla(var(--bg-hue), 30%, 15%, 0.6));
  border: 1px solid hsla(var(--bg-hue), 30%, 50%, 0.1);
  box-shadow:
    0 4px 12px -4px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 hsla(var(--bg-hue), 30%, 50%, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
}

.list-item:hover {
  transform: translateX(8px);
  transform: translateX(8px) translateY(-2px);
  background: linear-gradient(135deg,
      hsla(var(--bg-hue), 30%, 25%, 0.7),
      hsla(var(--bg-hue), 30%, 20%, 0.7));
  border-color: hsla(var(--primary-hue), 84%, 50%, 0.2);
  box-shadow:
    0 8px 24px -8px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 hsla(var(--bg-hue), 30%, 50%, 0.2);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
}

.list-item:last-child {
  border-bottom: none;
}

.list-rank {
  font-size: 1.4rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
  margin-right: 15px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
}

.list-details {
  flex: 1;
}

.list-name {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
}

.list-score {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  white-space: nowrap;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
}

/* Mobile-first design (base styles) */
.leaderboard-container {
  margin: 1rem;
  max-width: 100%;
}

.featured-leaderboard {
  height: auto;
  padding: 4rem 1rem 2rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.mp {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  background: var(--glass-bg);
  background: linear-gradient(135deg,
      hsla(var(--primary-hue), 84%, 30%, 0.8),
      hsla(var(--primary-hue), 84%, 20%, 0.8));
  border: 1px solid hsla(var(--primary-hue), 84%, 50%, 0.2);
  box-shadow:
    0 8px 24px -8px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 hsla(var(--primary-hue), 84%, 50%, 0.2);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.mp:hover {
  transform: translateY(-5px);
  transform: translateY(-5px) scale(1.05);
  background: linear-gradient(135deg,
      hsla(var(--primary-hue), 84%, 35%, 0.9),
      hsla(var(--primary-hue), 84%, 25%, 0.9));
  box-shadow:
    0 12px 32px -8px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 hsla(var(--primary-hue), 84%, 50%, 0.3);
  box-shadow: 0 15px 25px -5px rgba(0, 0, 0, 0.3);
}

.mp .material-symbols-outlined {
  font-size: 2rem;
  color: white;
  font-variation-settings: 'FILL' 1, 'wght' 600, 'GRAD' 200;
}

.featured-item {
  width: 100%;
  max-width: 280px;
}

.featured-item .rank {
  width: 60px;
  height: 60px;
  font-size: 2rem;
  padding: 1rem;
}

.featured-item .name {
  font-size: 1rem;
}

.list-item {
  padding: 0.75rem;
  margin: 0.5rem 0;
}

.list-rank {
  font-size: 1rem;
  min-width: 30px;
}

.list-name {
  font-size: 0.9rem;
}

.list-score {
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .leaderboard-container {
    margin: 2rem auto;
    max-width: 1000px;
  }

  .featured-leaderboard {
    height: 400px;
    padding: 2rem;
    flex-direction: row;
    align-items: flex-end;
    gap: 1rem;
  }

  .featured-item {
    width: 180px;
  }

  .mp {
    top: 2rem;
    left: 2rem;
    width: 4rem;
    height: 4rem;
    /* Reduce animation calculations */
    transition: transform 0.2s ease;
    /* Use hardware acceleration */
    transform: translateZ(0);
  }

  .mp .material-symbols-outlined {
    font-size: 2.4rem;
  }

  .mp:hover {
    transform: translateY(-5px) translateZ(0);
  }

  .featured-item .rank {
    width: 80px;
    height: 80px;
    font-size: 3rem;
    padding: 1.5rem;
  }

  .featured-item .name {
    font-size: 1.25rem;
  }

  .list-item {
    padding: 1.25rem;
    margin: 0.75rem 0;
  }

  .list-rank {
    font-size: 1.4rem;
    min-width: 40px;
  }

  .list-name {
    font-size: 1.1rem;
  }

  .list-score {
    font-size: 1rem;
    padding: 0.25rem 0.75rem;
  }
}

/* Large desktop */
@media (min-width: 1200px) {
  .featured-item {
    width: 200px;
  }

  .featured-item.top-position-1 {
    width: 220px;
  }

  .featured-item .rank {
    width: 90px;
    height: 90px;
  }

  .featured-item.top-position-1 .rank {
    width: 110px;
    height: 110px;
    font-size: 3.5rem;
  }
}

/* Laptop optimization */
@media (min-width: 1024px) {
  .leaderboard-container {
    max-width: 1200px;
    transform: translateZ(0);
    will-change: transform;
  }

  .featured-leaderboard {
    height: 450px;
    padding: 2rem 4rem;
    gap: 2rem;
    background: var(--primary-gradient);
    position: relative;
    overflow: visible;
  }

  /* Improve podium scaling and transitions */
  .featured-item {
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    transform-origin: bottom;
    width: 250px;
  }

  .featured-item.top-position-1 {
    height: 300px;
    transform: scale(1.1) translateY(-20px);
  }

  .featured-item:nth-child(1) {
    height: 250px;
    transform: translateX(20px);
  }

  .featured-item:nth-child(3) {
    height: 220px;
    transform: translateX(-20px);
  }

  /* Enhanced hover effects */
  .featured-item:hover {
    transform: translateY(-10px) scale(1.05);
    z-index: 10;
  }

  .featured-item.top-position-1:hover {
    transform: scale(1.15) translateY(-30px);
  }

  /* Improved rank badges */
  .featured-item .rank {
    transform: translateY(-30px) translateZ(20px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    font-size: 3rem;
    width: 100px;
    height: 100px;
    border-width: 3px;
  }

  .featured-item.top-position-1 .rank {
    width: 120px;
    height: 120px;
    font-size: 4rem;
    transform: translateY(-40px) translateZ(30px);
    box-shadow: 0 20px 40px rgba(251, 191, 36, 0.3),
      0 0 50px rgba(251, 191, 36, 0.2);
  }

  /* Enhanced name and points display */
  .featured-item .name {
    font-size: 1.5rem;
    font-weight: 700;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    transform: translateZ(10px);
  }

  .featured-item .points {
    font-size: 1.1rem;
    padding: 0.6rem 1.2rem;
    transform: translateZ(5px);
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  /* List improvements */
  .leaderboard-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 2rem 3rem;
    max-height: 600px;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(10px);
  }

  .list-item {
    margin: 0;
    background: var(--card-gradient);
    background: var(--card-gradient);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .list-item:hover {
    transform: scale(1.03) translateX(10px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow:
      0 10px 30px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .list-rank {
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .list-name {
    color: rgba(255, 255, 255, 0.95);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .list-score {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  /* Add subtle hover state for score */
  .list-item:hover .list-score {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }

  /* Add smooth gradient overlay */
  .leaderboard-list::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, transparent, rgba(26, 26, 46, 0.8));
    pointer-events: none;
    border-radius: 0 0 24px 24px;
  }

  /* Performance optimizations */
  .featured-leaderboard::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right,
        rgba(109, 40, 217, 0.4) 0%,
        transparent 70%);
    pointer-events: none;
  }

  .list-item {
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .featured-item .rank {
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
}

/* Disable heavy effects on lower-end devices */
@media (prefers-reduced-motion: reduce) {

  .featured-item,
  .list-item {
    transition: none;
    transform: none !important;
  }
}

@media (max-width: 768px) {
  body {
    padding: 1rem;
  }

  .leaderboard-container {
    margin: 1rem auto;
  }

  .featured-leaderboard {
    height: 300px;
    /* Reduced height for mobile */
    padding: 1rem;
    flex-direction: row;
    /* Keep horizontal layout */
    align-items: flex-end;
    justify-content: center;
    gap: 0.5rem;
  }

  .featured-item {
    width: 30%;
    /* Use percentage width */
    max-width: none;
    padding: 0.5rem;
    margin: 0;
  }

  .featured-item.top-position-1 {
    order: 2;
    height: 180px;
    /* Adjusted heights for mobile */
    transform: scale(1.1);
  }

  .featured-item:nth-child(1) {
    order: 1;
    height: 140px;
  }

  .featured-item:nth-child(3) {
    order: 3;
    height: 120px;
  }

  .featured-item .rank {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .featured-item.top-position-1 .rank {
    width: 50px;
    height: 50px;
    font-size: 2rem;
    padding: 0.75rem;
  }

  .featured-item .name {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    word-break: break-word;
    max-width: 100%;
  }

  .featured-item .points {
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
  }

  .list-item {
    padding: 1rem;
    margin: 0.5rem 0;
  }

  .list-rank {
    font-size: 1.1rem;
    min-width: 30px;
  }

  .list-name {
    font-size: 0.9rem;
  }

  .list-score {
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
  }
}

@media (max-width: 480px) {
  .featured-leaderboard {
    height: 250px;
    padding: 0.5rem;
  }

  .featured-item .name {
    font-size: 0.7rem;
  }

  .featured-item .points {
    font-size: 0.6rem;
    padding: 0.2rem 0.4rem;
  }

  .featured-item .rank {
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
  }

  .featured-item.top-position-1 .rank {
    width: 45px;
    height: 45px;
    font-size: 1.8rem;
  }

  .featured-item {
    max-width: 240px;
  }

  .leaderboard-list {
    padding: 1rem;
  }
}

@keyframes floatAnimation {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.featured-item {
  animation: floatAnimation 6s ease-in-out infinite;
}

.featured-item:nth-child(1) {
  animation-delay: -2s;
}

.featured-item.top-position-1 {
  animation-delay: -4s;
}

.featured-item:nth-child(3) {
  animation-delay: -6s;
}

/* Update Crown Styles for better syncing with coin */
.crown {
  position: absolute;
  top: -25px;
  left: 75%;
  transform: translateX(-50%) rotate(15deg);
  z-index: 10;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
}

.crown .material-symbols-outlined {
  font-size: 2.5rem;
  color: var(--crown-color);
  filter: drop-shadow(var(--crown-glow));
  font-variation-settings: 'FILL' 1;
}

/* Remove float animation for crown */
.featured-item.top-position-1:hover .crown {
  transform: translateX(-50%) rotate(25deg) translateY(-15px);
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .crown {
    top: -40px;
    left: 75%;
    transform: translateX(1%) rotate(45deg) translateY(5px);
  }

  .crown .material-symbols-outlined {
    font-size: 1.8rem;
  }

  /* Make crown follow coin movement on mobile */
  .featured-item.top-position-1:active .crown,
  .featured-item.top-position-1:hover .crown {
    transform: translateX(-20%) rotate(25deg) translateY(30px);
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
}

/* Desktop enhancements */
@media (min-width: 1024px) {
  .crown {
    top: -40px;
    left: 70%;
    transform: rotate(35deg) scale(1.25);
  }

  .featured-item.top-position-1:hover .crown {
    transform: translateX(-50%) rotate(30deg) translateY(-15px) scale(2);
  }
}
