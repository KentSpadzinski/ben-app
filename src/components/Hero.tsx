import { go } from '../utils';

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
    <path d="M7 1l6 6-6 6M13 7H1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" />
      <div className="hero-topo" />
      <div className="hero-shaft" />
      <div className="hero-vignette" />
      <div className="hero-fade" />

      <div className="hero-logo-bar">
        <div className="logo-pair">
          <span className="logo-pair-name">Satstreet</span>
          <span className="logo-pair-sep" />
          <span className="logo-pair-name" style={{ fontSize: 14 }}>Bitcoin Sports Network</span>
        </div>
        <div className="hero-venue-mark">
          <span className="logo-pair-name" style={{ fontSize: 18 }}>Glen Abbey</span>
          <span className="hero-venue-label">Host Venue</span>
        </div>
      </div>

      <div className="hero-inner">
        <div className="hero-overline">Mon, June 8, 2026 &bull; Glen Abbey Tennis Club, Oakville ON</div>

        <h1 className="hero-h1">
          The Bitcoin Tennis<br />&amp; Hold&rsquo;em Open
          <span className="sub-word">Championship Tennis &bull; Texas Hold&rsquo;em</span>
        </h1>

        <p className="hero-tagline">Where Championship Tennis Meets Digital Capital</p>

        <div className="hero-details">
          <div className="detail-pill"><div className="detail-dot" />Mon June 8, 2026</div>
          <div className="detail-pill"><div className="detail-dot" style={{ background: 'rgba(255,255,255,.4)' }} />1:30 PM Shotgun Start</div>
          <div className="detail-pill"><div className="detail-dot" style={{ background: 'rgba(255,255,255,.4)' }} />Glen Abbey Tennis Club</div>
          <div className="detail-pill"><div className="detail-dot" style={{ background: 'rgba(255,255,255,.4)' }} />Oakville, Ontario</div>
        </div>

        <div className="hero-ctas">
          <button className="btn-primary" onClick={() => go('reg')}>
            <ArrowIcon />
            Register Now
          </button>
          <button className="btn-outline" onClick={() => go('sponsor-sec')}>Become a Sponsor</button>
        </div>
      </div>

      <div className="hero-cohost">
        <div className="cohost-item">
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase' as const, color: 'var(--ghost)' }}>Hosted by</span>
          <span className="cohost-name">Satstreet</span>
        </div>
        <span className="cohost-sep">&amp;</span>
        <div className="cohost-item">
          <span className="cohost-name">Bitcoin Sports Network</span>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-bar" />
        <span className="scroll-txt">Scroll</span>
      </div>
    </section>
  );
}
