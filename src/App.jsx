import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Clock, Mail, MapPin, Menu, Phone, Ticket, X } from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";

// ---------------------------------------------------------------- Content (from goldhillinn.com, checked 2026-10-20)
const COMPANY = "Gold Hill Inn";
const ABBR = "ghi";
const END_DATE = "2026-11-24T23:59:59-07:00";
const PHONE = "303.443.6461";
const PHONE_HREF = "tel:+13034436461";
const ADDRESS = "401 Main Street, Gold Hill, Boulder, CO 80302";
const ORIGINAL = "https://goldhillinn.com/";
const CALENDAR = "https://goldhillinn.com/music/";
const BAR_MENU = "https://goldhillinn.com/dining/";
const MYSTERY_TICKETS = "https://events.humanitix.com/murder-mystery-night-at-the-bluebird-lodge-2026";
const NEWSLETTER = "https://goldhillinn.us8.list-manage.com/subscribe/?u=6ad952a6e10aec4f59ffee99e&id=fa0136b15a";
const CONTACTS = [
  { name: "Chris Finn", email: "cfinn@goldhillinn.com", role: "Menu, food preparation and general info" },
  { name: "Brian Finn", email: "bfinn@goldhillinn.com", role: "Weddings, private parties, musician bookings and general info" },
];
const HOURS = [
  ["Season", "May through December"],
  ["Dinner", "Wednesday – Sunday, 5–8 p.m."],
  ["Closed", "Monday & Tuesday"],
];

const IMG = "https://goldhillinn.com/images";
const LOGO = `${IMG}/ghi-logo-gold-black.webp`;
const LANTERN = `${IMG}/lantern-circle.png`;
const PHOTO = {
  door: `${IMG}/gold-hill-inn-open-2025.jpg`,
  dining: `${IMG}/dining-room-window-1200.jpg`,
  bread: `${IMG}/galleries/dining/bread.jpg`,
  trout: `${IMG}/galleries/dining/trout.jpg`,
  garden: `${IMG}/galleries/beer-garden/gas-pops-drone-1200.jpg`,
  stage: `${IMG}/galleries/beer-garden/charles-sawtelle-memorial-stage-1080.jpg`,
  music: `${IMG}/gregory-alan-isakov-700.jpg`,
  lodge: `${IMG}/galleries/bluebird-lodge/lodge-front-2.jpg`,
  mystery: `${IMG}/murder-1941.jpg`,
  wedding: `${IMG}/wedding-gazebo-zader-941.jpg`,
  july4: `${IMG}/july-4-1886.jpg`,
};

// Press quotes exactly as they appear on goldhillinn.com.
const PRESS = [
  { quote: "This must be one of the best restaurant values in America.", source: "Gourmet Magazine" },
  { quote: "Of the ... good restaurants the business traveler will find in or near the university town of Boulder, Colorado, one stands out as a maverick.", source: "Fortune Magazine, “Eating High on Gold Hill”" },
  { quote: "They may be far from the nearest big city, but when you pull up a seat in any of these rural restaurants, you’ll be happy you made the drive.", source: "Gourmet Magazine" },
  { quote: "Diners can take in the mountain ambience from the beer garden, with menu items ordered a la carte and bands playing on the weekends.", source: "The Know / Denver Post, 15 Colorado restaurant patios worth detouring to (2021)" },
];

// Sample six-course menu from goldhillinn.com/dining (the menu changes nightly).
const COURSES = [
  ["I", "Homemade Bread", "Baked in house, every night"],
  ["II", "Appetizer", "Avocado stuffed with smoked fish · Mexican orange pork salad · Cucumber boat with herb cheese"],
  ["III", "Soup", "Hot: cream of peanut, lamb lentil, salmon chowder · Cold: Russian spinach, raspberry borscht, vichyssoise"],
  ["IV", "Salad", "Fresh vegetable salad with choice of dressing"],
  ["V", "Entrée", "Tournedos with hunter sauce · Roast Boulder lamb leg with rosemary · Apple cider brisket · Rabbit mole · Broiled smoked stuffed trout"],
  ["VI", "Dessert", "Sour cream apple pie · Chocolate torte · Frozen chocolate mint cup · Cheese & fruit tray"],
];

// From goldhillinn.com/music, checked 2026-10-20. Replace with a live feed before launch.
const SHOWS = [
  { day: "Fri", date: "Oct 23", time: "8:00 pm", act: "Pick & Howl", genre: "Bluegrass", cover: "$20 cash" },
  { day: "Sat", date: "Oct 24", time: "7:30 pm", act: "Maya De Vitry", genre: "Folk / Country", cover: "$20 cash" },
  { day: "Sun", date: "Oct 25", time: "6:30 pm", act: "Danny Shafer", genre: "Folk / Americana", cover: "Free show" },
  { day: "Fri", date: "Oct 30", time: "8:00 pm", act: "Poorfree", genre: "Folk / Americana", cover: "$20 cash" },
  { day: "Sat", date: "Oct 31", time: "8:00 pm", act: "Halloween Dance Party", genre: "Little Circus of Freaks", cover: "$20 advance" },
  { day: "Fri", date: "Nov 6", time: "8:00 pm", act: "Tough Knuckle Teddy & the Bucket Brigade", genre: "Bluegrass", cover: "$20 cash" },
  { day: "Sat", date: "Nov 7", time: "8:00 pm", act: "Jeremy Mohney Orchestra", genre: "Jazz / Swing", cover: "$20 cash" },
  { day: "Sun", date: "Nov 8", time: "6:30 pm", act: "Patrick Dethlefs", genre: "Americana", cover: "Free show" },
];

const TIMELINE = [
  ["1859", "Prospectors working up Four Mile Creek find the first real proof of gold at what becomes the Gold Hill town site."],
  ["1872", "The Wentworth Hotel, a three-story luxury log building, goes up to draw tourists. Clarence Darrow and Eugene Field stay here."],
  ["1920", "The hotel becomes the Bluebird Lodge, a vacation spot for women from Chicago started by Mrs. Sherwood, a protégé of Jane Addams."],
  ["1924", "The lodge is so popular that a log dining hall is built next door."],
  ["1962", "Barbara and Frank Finn buy both buildings. The dining hall becomes the Gold Hill Inn, and the adventure begins."],
];

// ---------------------------------------------------------------- Motifs
function Logs({ className = "" }) {
  // Stacked hand-hewn logs with chinking, like the walls of the 1924 log dining hall.
  return (
    <svg className={`logs ${className}`} viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
      <rect width="1200" height="60" className="chink" />
      <rect x="0" y="3" width="1200" height="24" rx="12" className="log" />
      <rect x="0" y="33" width="1200" height="24" rx="12" className="log log-2" />
      <path d="M40 15 h180 M300 12 h120 M520 17 h220 M820 13 h160 M1040 16 h120 M90 46 h140 M330 43 h200 M640 47 h150 M880 44 h210" className="grain" />
    </svg>
  );
}

function Route() {
  // The drive up from Boulder: Mapleton Ave about six miles, then about four miles of dirt road (goldhillinn.com/about/map.php).
  return (
    <svg className="route" viewBox="0 0 520 260" role="img" aria-label="Route from Boulder: about six miles west on Mapleton Avenue, then four miles of dirt road up to Gold Hill">
      <path d="M0 230 L70 205 L120 215 L190 150 L240 170 L300 95 L350 120 L410 50 L470 80 L520 40 L520 260 L0 260Z" className="r-ridge" />
      <path d="M30 222 C120 210 170 196 250 170" className="r-paved" />
      <path d="M250 170 C300 150 320 120 360 110 S430 80 455 62" className="r-dirt" />
      <circle cx="30" cy="222" r="7" className="r-dot" />
      <circle cx="250" cy="170" r="5" className="r-fork" />
      <circle cx="455" cy="62" r="9" className="r-end" />
      <text x="16" y="252" className="r-label">Boulder</text>
      <text x="70" y="186" className="r-small">Mapleton Ave · ~6 mi</text>
      <text x="236" y="200" className="r-small">bear left at the fork</text>
      <text x="236" y="122" className="r-small">dirt road · ~4 mi</text>
      <text x="378" y="38" className="r-label">Gold Hill</text>
    </svg>
  );
}

// ---------------------------------------------------------------- Sections
function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [["#dining", "Dining"], ["#music", "Music"], ["#garden", "Beer Garden"], ["#lodge", "Lodge"], ["#weddings", "Weddings"], ["#history", "History"], ["#visit", "Getting Here"]];
  return (
    <header className={`site-header${solid || open ? " is-solid" : ""}`}>
      <div className="topline">
        <span><Clock size={13} /> Dinner Wed–Sun, 5–8 p.m. · May through December</span>
        <a href={PHONE_HREF}><Phone size={13} /> Reservations by phone: {PHONE}</a>
      </div>
      <div className="wrap header-row">
        <a href="#top" className="brand" aria-label={`${COMPANY} home`}>
          <img src={LANTERN} alt="" className="brand-lantern" />
          <img src={LOGO} alt="Gold Hill Inn" className="brand-word" />
        </a>
        <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
          {links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-call" href={PHONE_HREF}><Phone size={15} /> Call to reserve</a>
        </nav>
        <button type="button" className="menu-btn" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Est. 1962 · Ten miles above Boulder</p>
          <h1>Mountain air <span>&amp;</span> hearty fare.</h1>
          <p className="lede">The ten-mile drive from Boulder takes you back a hundred years. Beneath the Continental Divide, a family-run log dining hall serves a six-course dinner that changes every night, with live music in the barroom and a beer garden out back.</p>
          <div className="hero-actions">
            <a className="btn btn-gold" href={PHONE_HREF}><Phone size={18} /> Call {PHONE}</a>
            <a className="btn btn-line" href="#music"><Ticket size={18} /> Who's playing</a>
          </div>
          <p className="hero-note">Dinner reservations are taken by phone only.</p>
        </div>
        <figure className="hero-photo">
          <div className="frame"><img src={PHOTO.door} alt="The Gold Hill Inn's front door at night, under the hand-painted Est. 1962 sign" /></div>
          <figcaption className="hours-card">
            <span className="tag">Open</span>
            <dl>{HOURS.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Press() {
  return (
    <section className="press" aria-label="Press">
      <Logs />
      <div className="wrap press-grid">
        {PRESS.map((p, i) => (
          <blockquote key={i} className={i === 0 ? "press-lead" : ""}>
            <p>“{p.quote}”</p>
            <cite>— {p.source}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function Dining() {
  return (
    <section className="dining" id="dining">
      <div className="wrap dining-grid">
        <div className="dining-photos">
          <img className="dp-main" src={PHOTO.dining} alt="The Gold Hill Inn dining room with its log walls and window light" loading="lazy" />
          <img className="dp-a" src={PHOTO.bread} alt="Homemade bread" loading="lazy" />
          <img className="dp-b" src={PHOTO.trout} alt="Smoked stuffed trout" loading="lazy" />
        </div>
        <div className="menu-card">
          <p className="eyebrow dark">The dining room</p>
          <h2>Table d'hôte, <em>six courses.</em></h2>
          <p className="menu-intro">A small menu that changes nightly, with everything included. Call for tonight's selections, vegetarian requests or dietary needs.</p>
          <ol className="courses">
            {COURSES.map(([n, name, text]) => (
              <li key={n}><span className="num">{n}</span><div><strong>{name}</strong><p>{text}</p></div></li>
            ))}
          </ol>
          <div className="prices">
            <div><strong>$51</strong><span>Six courses</span></div>
            <div><strong>$44</strong><span>Three courses</span></div>
          </div>
          <p className="fine">Sample menu. No separate checks; cash, check and most credit cards accepted.</p>
          <div className="barroom">
            <strong>Barroom &amp; Beer Garden à la carte</strong>
            <span>Many of the same entrées, ordered at the bar, Wednesday – Sunday.</span>
            <a href={BAR_MENU} target="_blank" rel="noopener noreferrer">View bar menu <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Music() {
  return (
    <section className="music" id="music">
      <div className="wrap">
        <div className="music-head">
          <div>
            <p className="eyebrow">Live music</p>
            <h2>On the bill <em>this fall.</em></h2>
          </div>
          <p>Shows alternate between the Beer Garden and the Barroom. Some showtimes depend on the weather, so check before you leave. Parking in town is limited: carpool if you can and be ready to walk.</p>
        </div>
        <div className="music-grid">
          <img className="music-photo" src={PHOTO.music} alt="A musician on stage at the Gold Hill Inn" loading="lazy" />
          <ul className="bill">
            {SHOWS.map((s) => (
              <li key={s.date} className="stub">
                <div className="stub-date"><strong>{s.date}</strong><span>{s.day}</span></div>
                <div className="stub-act"><strong>{s.act}</strong><span>{s.genre} · {s.time}</span></div>
                <div className="stub-cover">{s.cover}</div>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-gold" href={CALENDAR} target="_blank" rel="noopener noreferrer">Full calendar &amp; videos <ArrowUpRight size={18} /></a>
      </div>
    </section>
  );
}

function Garden() {
  return (
    <section className="garden" id="garden">
      <img className="garden-img" src={PHOTO.garden} alt="Aerial view of a summer show in the Gold Hill Inn beer garden" loading="lazy" />
      <div className="wrap garden-inner">
        <div className="garden-card">
          <p className="eyebrow dark">The Beer Garden</p>
          <h2>Bands out back, <em>all summer.</em></h2>
          <p>Home of our long-running holiday barbecues and concerts on <strong>Memorial Day, July 4th and Labor Day</strong>, plus roots, folk and bluegrass acts most every weekend, weather permitting.</p>
          <figure className="stage">
            <img src={PHOTO.stage} alt="The Charles Sawtelle Memorial Stage" loading="lazy" />
            <figcaption>The stage is named for the late Charles Sawtelle of Hot Rize, one of the country's finest flatpickers, who also drove our old firetruck in the Fourth of July parade.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Lodge() {
  return (
    <section className="lodge" id="lodge">
      <div className="wrap">
        <p className="eyebrow dark center">Right next door · built 1872</p>
        <h2 className="center">The Bluebird Lodge</h2>
        <div className="lodge-grid">
          <article className="lodge-card">
            <img src={PHOTO.lodge} alt="The front of the historic Bluebird Lodge" loading="lazy" />
            <div className="lodge-body">
              <h3>Rent the whole lodge</h3>
              <p>A historic log hotel for family reunions, small weddings and retreats. Groups dine next door at the Inn.</p>
              <ul className="facts">
                <li><strong>9</strong><span>queen rooms, baths down the hall</span></li>
                <li><strong>18</strong><span>guests maximum</span></li>
                <li><strong>2</strong><span>sitting rooms with fireplaces, plus a full kitchen, deck and porch</span></li>
              </ul>
              <p className="price">$875 + tax per night · 2-night minimum · whole lodge only · no pets</p>
              <a className="link" href={PHONE_HREF}>Call to book <ArrowRight size={16} /></a>
            </div>
          </article>
          <article className="lodge-card mystery">
            <img src={PHOTO.mystery} alt="Costumed players at a Bluebird Lodge murder mystery night" loading="lazy" />
            <div className="lodge-body">
              <p className="case">Case file · March, 1905</p>
              <h3>Murder Mystery Nights</h3>
              <p>Gold Hill heads back to the polls after a tainted election, and nobody has a monopoly on corruption. Dinner, wine and beer, and a wicked web to unravel.</p>
              <p className="price">Saturdays, Oct 10 &amp; Oct 24 · arrive by 6:45, show at 7 · $150 + tax</p>
              <a className="link" href={MYSTERY_TICKETS} target="_blank" rel="noopener noreferrer">Tickets on Humanitix <ArrowUpRight size={16} /></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Weddings() {
  return (
    <section className="weddings" id="weddings">
      <div className="wrap weddings-grid">
        <img src={PHOTO.wedding} alt="A wedding on the Gold Hill Inn's outdoor pavilion (photo: Dave Zader)" loading="lazy" />
        <div>
          <p className="eyebrow">Weddings &amp; private parties</p>
          <h2>A few weddings a season, <em>each one special.</em></h2>
          <p>We've hosted a limited number of weddings since opening in 1962. Ceremonies in the side yard or front room, a buffet of two entrées and three sides with homemade bread, and the Bluebird Lodge next door for family and friends.</p>
          <dl className="wed-facts">
            <div><dt>Daytime</dt><dd>$79 per person, $4,970 minimum, 11 a.m. – 4 p.m.</dd></div>
            <div><dt>Capacity</dt><dd>150 total: 110 in the dining room, 40 in the front room</dd></div>
            <div><dt>Evenings</dt><dd>A limited number; call for dates and pricing</dd></div>
          </dl>
          <a className="btn btn-gold" href="mailto:bfinn@goldhillinn.com?subject=Wedding%20inquiry"><Mail size={18} /> Ask Brian about your date</a>
        </div>
      </div>
    </section>
  );
}

function History() {
  return (
    <section className="history" id="history">
      <div className="wrap history-grid">
        <div className="history-head">
          <p className="eyebrow dark">Our history</p>
          <h2>Gold Hill, <em>since 1859.</em></h2>
          <figure className="tintype"><img src={PHOTO.july4} alt="Gold Hill on the Fourth of July in the 1800s" loading="lazy" /><figcaption>Gold Hill on the Fourth of July</figcaption></figure>
        </div>
        <div>
          <ol className="timeline">
            {TIMELINE.map(([y, t]) => <li key={y}><span>{y}</span><p>{t}</p></li>)}
          </ol>
          <blockquote className="simms">
            <p>“Here in the dining hall on sturdy wooden tables, topped with flowered tablecloths, candles in tin miner's cups and simple bowls of wild flowers is served some of the finest food in the west.”</p>
            <cite>— Kay Simms, 1969</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="visit" id="visit">
      <div className="wrap visit-grid">
        <div>
          <p className="eyebrow">Getting here</p>
          <h2>Every way up <em>is a dirt road.</em></h2>
          <Route />
          <p className="directions">From Boulder, take Mapleton Ave. west about six miles, bear left at the fork and continue four miles on the dirt road to Gold Hill. <strong>Lickskillet Road is steep, rough and closed in winter</strong>; coming from the north, route through Boulder unless you know it's open.</p>
        </div>
        <div className="visit-side">
          <div className="visit-card">
            <p className="vc-label"><MapPin size={16} /> Gold Hill Inn &amp; Bluebird Lodge</p>
            <p className="vc-address">{ADDRESS}</p>
            <a className="vc-phone" href={PHONE_HREF}>{PHONE}</a>
            <p className="vc-small">Dinner reservations by phone; we don't take reservations online.</p>
            <dl className="vc-hours">{HOURS.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
            <ul className="contacts">
              {CONTACTS.map((c) => <li key={c.email}><strong>{c.name}</strong><span>{c.role}</span><a href={`mailto:${c.email}`}>{c.email}</a></li>)}
            </ul>
          </div>
          <div className="map"><iframe title="Map to the Gold Hill Inn" src={`https://maps.google.com/maps?q=${encodeURIComponent("Gold Hill Inn, 401 Main St, Boulder, CO 80302")}&z=12&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Logs />
      <div className="wrap footer-row">
        <img src={LANTERN} alt="Gold Hill Inn lantern" className="footer-lantern" loading="lazy" />
        <div className="footer-main">
          <img src={LOGO} alt="Gold Hill Inn" className="footer-word" loading="lazy" />
          <p>Family-owned since 1962 · {ADDRESS} · <a href={PHONE_HREF}>{PHONE}</a></p>
          <div className="footer-links">
            <a href={NEWSLETTER} target="_blank" rel="noopener noreferrer">Join our email list</a>
            <a href="https://www.facebook.com/GoldHillInn/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/goldhillinn/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.youtube.com/user/GoldHillInn/videos" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} {COMPANY}. Independent concept · not for official use. Current site: <a href={ORIGINAL}>goldhillinn.com</a></span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Press />
        <Dining />
        <Music />
        <Garden />
        <Lodge />
        <Weddings />
        <History />
        <Visit />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
