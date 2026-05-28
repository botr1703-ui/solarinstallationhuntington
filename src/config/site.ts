/**
 * Content model for Huntington Solar Co (LI lead-gen phantom).
 * Services + areas are surfaced on the homepage cards AND drive the
 * /services/[slug] and /locations/[slug] static page generation.
 *
 * Phase 23.22: schema extended so each sub-page can carry rich
 * content (multi-section body + bullets + page-local FAQ). Templates
 * fall back gracefully if a phantom hasn't filled the rich fields yet
 * — keeps the model phantom-repeatable.
 */
/**
 * Per-site analytics. GA4 Measurement IDs are public (they're rendered
 * into the page HTML), so committing one here is safe. The env var
 * PUBLIC_GA4_MEASUREMENT_ID overrides this when set. SWAP per phantom.
 */
export const analytics = {
  ga4MeasurementId: 'G-D1C79CBW3M',
};

export type BodySection = {
  heading: string;
  paragraphs: string[];
};

export type FaqEntry = { q: string; a: string };

export type ServicePage = {
  slug: string;
  title: string;
  description: string;
  /** Optional H2 used on the sub-page; defaults to `title`. */
  pageHeading?: string;
  /** Optional richer body content — rendered after the hero. */
  bodySections?: BodySection[];
  /** Optional bullets used as a "What's included" callout. */
  bullets?: string[];
  /** Optional service-specific FAQ. */
  faq?: FaqEntry[];
};

export type AreaPage = {
  slug: string;
  title: string;
  /** Optional sub-page hero lead override. */
  lead?: string;
  /** Optional rich body content. */
  bodySections?: BodySection[];
  /** Optional list of nearby towns for the "We also serve" footer. */
  nearbyTowns?: string[];
  /** Optional one-line callout — e.g. "Suffolk County · pop 18,000". */
  localStats?: string;
};

export const services: ServicePage[] = [
  {
    slug: 'residential-solar-installation',
    title: 'Residential Solar Installation',
    description:
      'Roof-mounted panel systems sized to your usage. Federal 30% tax credit plus NY state incentives. Free in-home assessment with payback math before you sign.',
    pageHeading: 'Residential Solar Installation in Huntington, NY',
    bodySections: [
      {
        heading: 'What residential solar costs on Long Island in 2026',
        paragraphs: [
          "A typical 8 kW residential system across Huntington and the rest of the north shore runs $24,000–$28,000 before incentives. The 30% federal Investment Tax Credit drops that to roughly $17,000–$20,000. NY State's residential solar tax credit (25%, capped at $5,000) drops it further to $12,000–$15,000 net out-of-pocket. NYSERDA's NY-Sun rebate then refunds an additional per-watt amount tied to your installer's queue.",
          "Most Long Island homeowners are paid back in 5 to 7 years on current LIPA rates — and rates have risen 4–6% annually for the last decade. After payback, every kWh the panels produce is essentially free electricity for the remaining 18–20 years of the 25-year panel warranty.",
        ],
      },
      {
        heading: 'What a Huntington Solar Co install includes',
        paragraphs: [
          "Every residential install comes with site assessment + shade analysis, custom panel layout designed for your roof, all permit pulls + PSEG interconnection paperwork, panels with a 25-year power-output warranty, inverters with 10–25 year warranties depending on model, and workmanship + roof-penetration warranty from us directly.",
          "We do not subcontract the install — same crew that quotes the job is on your roof. Most residential systems go up in 6 to 8 hours and you're producing power that afternoon.",
        ],
      },
      {
        heading: 'Why Huntington-area homes are strong candidates',
        paragraphs: [
          "The north shore of Suffolk gets roughly 4.3 average peak sun-hours per day — solid for the latitude. Most homes have either south-, west-, or east-facing roof planes that produce 80–100% of optimal output. Heavy shade is the main blocker; we do a free site visit before any contract and tell you upfront if the economics don't work.",
          "Huntington and surrounding towns are also covered by PSEG Long Island net-metering — every kWh you push back to the grid offsets a kWh you pull from it 1:1, so right-sizing the system to your actual usage matters more than maxing roof real estate.",
        ],
      },
    ],
    bullets: [
      'Federal 30% Investment Tax Credit (through 2032)',
      'NY State residential solar tax credit — 25% up to $5,000',
      'NYSERDA NY-Sun rebate (per-watt)',
      '25-year panel performance warranty',
      'PSEG net-metering — full retail credit',
      'No subcontractors — our crew installs',
    ],
    faq: [
      {
        q: 'Can I get solar if my roof is older than 15 years?',
        a: 'You can, but it usually makes sense to replace the roof first or together with the install. We do not install on roofs we estimate have under 10 years of life left — the system warranty would outlast the shingles, and removing panels for a future re-roof adds cost. We can recommend a roofer or coordinate the timing if needed.',
      },
      {
        q: 'Do I need HOA approval?',
        a: 'NY Real Property Law § 335-a explicitly protects homeowners\' right to install solar — HOAs and co-ops cannot prohibit it. They can request reasonable aesthetic adjustments (panel color, mounting style), but they cannot block the system. We have handled HOA submissions across Northport, Centerport, and Cold Spring Harbor.',
      },
      {
        q: 'What happens during a power outage?',
        a: 'A standard grid-tied solar system shuts down during PSEG outages (federal safety requirement — prevents power being sent down lines technicians may be working on). Pair the system with a Tesla Powerwall or Enphase IQ Battery and it islands itself — your essential circuits keep running on the battery plus sun.',
      },
    ],
  },
  {
    slug: 'commercial-solar',
    title: 'Commercial Solar',
    description:
      'Warehouse, retail, and multi-family installs across Suffolk and Nassau. Power purchase agreements (PPA), direct purchase, or lease structures available.',
    pageHeading: 'Commercial Solar for Long Island Businesses',
    bodySections: [
      {
        heading: 'Commercial solar economics are different from residential',
        paragraphs: [
          "Commercial buildings on Long Island pay PSEG demand charges in addition to per-kWh energy charges. A properly-sized commercial solar system shaves both — the energy meter slows, and the demand peak (the single highest 15-minute window in the billing cycle) often gets clipped by midday solar production. Combined, the bill impact can be 50–80% on typical retail / warehouse / light-industrial loads.",
          "Federal incentives stack heavier than residential: the 30% Investment Tax Credit, plus accelerated depreciation (MACRS — typically 5-year), plus optional bonus depreciation. The blended after-tax cost on a $200K commercial install often nets to $80K–$110K. NY State incentives layer on top via NYSERDA's commercial NY-Sun program.",
        ],
      },
      {
        heading: 'Financing structures we work with',
        paragraphs: [
          "Direct purchase remains the highest-return option for businesses that can use the depreciation. Our typical commercial customer pays back the net-of-incentives cost in 3–5 years and owns the system outright.",
          "For businesses that cannot use depreciation (non-profits, churches, low-tax-burden LLCs), Power Purchase Agreements (PPAs) work better. A third-party finances + owns the system; you sign a 15-to-25-year contract to buy the solar electricity at a fixed rate below your current PSEG rate. Zero upfront, immediate bill reduction.",
          "Operating leases sit in between — flat monthly payment, system reverts to your ownership after the term.",
        ],
      },
      {
        heading: 'Common commercial installs across LI',
        paragraphs: [
          "Warehouse rooftops (200kW–1MW class) — flat-roof ballasted mounts, no roof penetration needed, fast permit cycle. Retail strip centers (50kW–200kW) — split production among tenants via virtual net-metering. Multi-family buildings (50kW–250kW) — feeds common-area loads (lobby, hallway lighting, elevators) directly; residual flows to the building's house meter or virtual-net-meters to a single owner unit.",
          "Pole-mounted or carport-canopy systems are an option for sites with limited roof space or solar-suitable parking lots — typically 100kW+ and tax-credit-eligible same as roof-mounted.",
        ],
      },
    ],
    bullets: [
      'Federal 30% ITC + MACRS 5-year depreciation',
      'Bonus depreciation eligible (per current tax year rules)',
      'NYSERDA commercial NY-Sun rebate',
      'Direct purchase, PPA, lease — your choice',
      'Demand-charge reduction modeling included in quote',
      'Multi-tenant + multi-meter capable',
    ],
    faq: [
      {
        q: 'What size buildings make sense for commercial solar?',
        a: 'We have installed systems from 20kW (small office / restaurant) to 800kW (mid-size warehouse). The economics tighten below 20kW because soft-costs (permits, design, interconnection studies) become a higher percentage of total cost. Above ~250kW, PSEG triggers a more involved interconnection study — adds 2-3 months to the timeline but doesn\'t change project viability.',
      },
      {
        q: 'How long is the install for a commercial system?',
        a: 'Site survey + engineering: 2-4 weeks. Permits + PSEG interconnection approval: 6-10 weeks. Actual installation: 1-3 weeks depending on size. Full timeline from contract to commissioning is typically 3-6 months for systems under 250kW; longer for the larger commercial scale.',
      },
    ],
  },
  {
    slug: 'battery-storage',
    title: 'Battery Storage (Powerwall)',
    description:
      'Tesla Powerwall and Enphase IQ Battery systems. Keep the lights on during PSEG outages, store excess solar for evening use, eligible for additional NY rebates.',
    pageHeading: 'Tesla Powerwall & Enphase Battery Storage on Long Island',
    bodySections: [
      {
        heading: 'Why pair a battery with solar',
        paragraphs: [
          "A standalone solar system stops producing the moment PSEG sees a fault on the line — federal safety rule. That's exactly when you want power most. Adding a battery (Tesla Powerwall, Enphase IQ Battery, FranklinWH) lets the system island itself: your essential circuits keep running on battery + sun, and the system re-syncs with the grid automatically when PSEG comes back.",
          "Beyond outage backup, batteries shift solar production from midday (when you're typically not home) to evening peak (when LIPA rates are highest and you actually use lights / TV / AC). Two real savings on the same hardware.",
        ],
      },
      {
        heading: 'Tesla Powerwall vs Enphase IQ Battery',
        paragraphs: [
          "Tesla Powerwall 3 — 13.5 kWh usable per unit, integrated inverter, AC-coupled or DC-coupled mode, 10-year warranty. Best for whole-home backup ambitions and homeowners already invested in Tesla ecosystem. Industry-standard sleek aesthetic, single-unit footprint about a fridge.",
          "Enphase IQ Battery 10C / 5P — modular 5 kWh units stacked to whatever size you need (10/15/20/25 kWh common). Microinverter architecture means single-panel-level monitoring + no single point of failure. Best for homeowners who want granular monitoring, modular expansion, or already have Enphase microinverters on the solar side.",
          "FranklinWH aPower 2 — 15 kWh usable, lithium iron phosphate (safer chemistry), 12-year warranty. Newer to LI but rapidly adopted for the longer warranty and the LFP chemistry.",
        ],
      },
      {
        heading: 'NY State battery incentives',
        paragraphs: [
          "NYSERDA's residential battery incentive offers up to $250/kWh of storage installed, capped at $5,000 per home. Stack with the federal 30% ITC (which now applies to standalone batteries too, not just solar+battery combos — change took effect in 2023) and the effective net cost of a 13.5 kWh Powerwall drops from $14,500 to roughly $7,500.",
          "PSEG's Long Island demand-response rebate provides additional credits if you enroll the battery in their grid-service program — they're allowed to discharge a portion during peak system events, you keep most of the capacity for your own use.",
        ],
      },
    ],
    bullets: [
      'Federal 30% ITC on standalone or solar-paired batteries',
      'NYSERDA $250/kWh battery incentive (up to $5,000)',
      'PSEG demand-response rebate if enrolled',
      'Tesla Powerwall 3, Enphase IQ Battery, FranklinWH',
      'Whole-home or essential-circuits backup configurations',
      'Time-of-use rate optimization built into the schedule',
    ],
    faq: [
      {
        q: 'Can I add a battery to an existing solar system?',
        a: 'Yes. AC-coupled batteries (Tesla Powerwall, Enphase IQ Battery) integrate with any existing inverter and only need a sub-panel for backed-up circuits. We retrofit batteries to systems we did not originally install — common across the LI installer landscape.',
      },
      {
        q: 'How long does a Powerwall keep my house running during an outage?',
        a: 'Depends on the loads. A single 13.5 kWh Powerwall typically backs essential circuits (fridge, lights, internet, a few outlets) for 24-36 hours without sun. With sun feeding the system, it can run indefinitely. Whole-home backup including AC requires 2-3 Powerwalls.',
      },
    ],
  },
  {
    slug: 'solar-repair-maintenance',
    title: 'Repair & Maintenance',
    description:
      'Inverter replacements, panel re-seating, monitoring system fixes, and post-storm inspections. We service systems we did NOT install — flat-rate diagnostics.',
    pageHeading: 'Solar Repair & Maintenance — Suffolk County',
    bodySections: [
      {
        heading: 'What we diagnose and fix',
        paragraphs: [
          "Inverter failures (string inverters typically last 10-15 years, microinverters longer — but both fail). Monitoring system dropouts (your app says \"no production\" but the panels are fine — usually a CT clamp or comms board). Production drops that don't match seasonal patterns (panel-level diagnostics via thermal imaging to spot dead cells or bypass-diode failures). Post-storm panel inspections (Long Island gets the occasional nor'easter or hurricane edge that loosens mounts).",
          "Roof-leak callbacks years after install — we re-flash penetrations and fix any waterproofing failures. Critter intrusion (squirrels chewing wiring under panels) — we install critter guards to prevent recurrence.",
        ],
      },
      {
        heading: 'We service systems we didn\'t install',
        paragraphs: [
          "Most LI solar installers will not touch a system they didn't put up — they refer you back to your original installer (who may be out of business). We do flat-rate diagnostics on any residential solar system in Suffolk County: $185 for the site visit, full report on root cause + repair path, fee credited toward the repair if you proceed with us.",
          "Common case: original installer went under during the 2018-2020 industry shakeout; homeowner has a non-producing system and nowhere to turn. We pick those up.",
        ],
      },
    ],
    bullets: [
      'Flat-rate diagnostic — $185, credited toward repair',
      'Service any residential solar system in Suffolk County',
      'Inverter replacements (string + micro)',
      'Monitoring repair (Enphase, SolarEdge, Tesla, SMA)',
      'Post-storm + thermal imaging inspections',
      'Critter guards + roof-leak warranty repairs',
    ],
  },
  {
    slug: 'free-solar-quote',
    title: 'Free Solar Quote',
    description:
      "Tell us your average LIPA bill and roof orientation — we'll send back a system size, projected savings, and payback period. No salesperson visit required to get the number.",
    pageHeading: 'Free Long Island Solar Quote (No Pressure)',
    bodySections: [
      {
        heading: "What's in our quote",
        paragraphs: [
          "System size in kilowatts, panel count + brand, inverter / battery selection. Projected first-year production in kWh based on your roof orientation + shade. Projected PSEG bill reduction (typically 60-90% on a properly-sized residential system). Federal + NY State + NYSERDA incentive math itemized — gross cost, net cost, year-by-year cash flow. Payback period (typically 5-7 years on residential). 25-year warranty + workmanship terms.",
          "What's NOT in the quote: salesperson pressure, urgency tactics, \"this price is only good if you sign tonight\" nonsense. We email the number, you take however long you need to think about it.",
        ],
      },
      {
        heading: 'What we need from you',
        paragraphs: [
          "Your address (for the satellite shade analysis). A recent LIPA bill — any month, we use the kWh number not the dollar amount. Your roof orientation (south / west / east / mixed — we can also pull this from satellite).",
          "We send the quote back within 1 business day. If the math doesn't work for your situation, we tell you why and don't push. Solar is a great fit for most LI homes — not all of them.",
        ],
      },
    ],
    bullets: [
      'Quote turnaround within 1 business day',
      'No in-home visit required for the initial number',
      'Itemized: gross cost, incentives, net, payback',
      '25-year warranty terms included in the quote',
      'No pressure, no urgency tactics',
    ],
  },
];

/**
 * About-page content. Each phantom fills these for their own brand;
 * the /about template renders whatever's present. Optional fields
 * are skipped silently when missing.
 */
export type AboutPage = {
  pageHeading: string;
  lead: string;
  bodySections: BodySection[];
  /** "What we're certified in" trust bullets. */
  certifications?: string[];
  /** "Service area" coverage statement. */
  serviceAreaCopy?: string;
};

/**
 * Case-study content — anonymized real-shape installs that flesh out
 * the homepage testimonials. Renders on /case-studies. Each phantom
 * fills its own; template renders whatever's present.
 */
export type CaseStudy = {
  slug: string;
  /** Headline displayed on the card + page hero (e.g. "Greenlawn ranch · 8 kW + Powerwall"). */
  headline: string;
  town: string;
  /** Customer first-name + initial, anonymized. */
  customer: string;
  /** "Before" snapshot (bill, system age, situation). */
  before: string[];
  /** What was installed. */
  system: string[];
  /** The "after" outcome (bill, savings, payback). */
  after: string[];
  /** A pull-quote — keep under ~280 chars. */
  quote: string;
  /** Optional install date for context. */
  installedAt?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'greenlawn-ranch-powerwall',
    headline: 'Greenlawn ranch · 8 kW system + Powerwall',
    town: 'Greenlawn',
    customer: 'Mike R.',
    installedAt: '2024-08',
    before: [
      '3-bed ranch, 1,900 sqft, electric heat pump + central AC',
      'LIPA bill averaged $280/mo, peaking $420 in August',
      'South-facing roof, 8-year-old shingles, no tree shading',
    ],
    system: [
      '8.4 kW system — 22 × Q Cells Q.PEAK DUO 380W panels',
      'Enphase IQ8+ microinverters (panel-level monitoring)',
      'Tesla Powerwall 3 (13.5 kWh) added for outage backup',
    ],
    after: [
      'PSEG bill now $18/mo (minimum delivery charge only)',
      'Powerwall covers fridge, lights, internet, central AC during outages',
      'Annual savings $3,150 — net-of-incentives payback hit in year 6',
    ],
    quote:
      "Bill went from $280/mo to $18 (the PSEG minimum). System paid for itself in year 6. Wish I had done it sooner.",
  },
  {
    slug: 'northport-village-historic',
    headline: 'Northport Village · 6.6 kW low-profile install',
    town: 'Northport',
    customer: 'Sarah K.',
    installedAt: '2024-10',
    before: [
      "1920s village home, 1,400 sqft, oil heat + window AC",
      'LIPA bill averaged $145/mo year-round',
      'Historic district — Village Building Department review required',
    ],
    system: [
      '6.6 kW system — 18 × all-black SunPower M-series panels',
      'SolarEdge string inverter with optimizers',
      'Low-profile black-on-black panels for aesthetic compliance',
    ],
    after: [
      'PSEG bill drops to ~$22/mo on average across the year',
      'Annual savings $1,475 — payback in year 7',
      'Historic district approval secured in 3 weeks (no rejection)',
    ],
    quote:
      "They handled everything — town permits, PSEG interconnection, even the federal tax credit paperwork. Zero hassle.",
  },
  {
    slug: 'huntington-station-with-battery',
    headline: 'Huntington Station · 10 kW + storm-backup Powerwall',
    town: 'Huntington Station',
    customer: 'David L.',
    installedAt: '2024-11',
    before: [
      '4-bed split-level, 2,400 sqft, gas heat + central AC',
      'LIPA bill averaged $340/mo, frequent storm outages',
      'Lost power 4× in 2023 — partial fridge + freezer loss each time',
    ],
    system: [
      '10.2 kW system — 27 × REC Alpha Pure-R 380W panels',
      'Tesla Powerwall 3 paired (13.5 kWh)',
      'Enphase IQ8M microinverters',
    ],
    after: [
      "PSEG bill ~$24/mo on average; battery kicks in within ~1 second of an outage",
      'Annual savings $3,750; payback in year 5',
      "Survived 2025 nor'easter outage with full lights + heat pump auxiliary running",
    ],
    quote:
      "Added a Powerwall to the system. When the nor'easter knocked out power last winter, we never lost the lights.",
  },
  {
    slug: 'cold-spring-harbor-large-roof',
    headline: 'Cold Spring Harbor estate · 14 kW, multi-string',
    town: 'Cold Spring Harbor',
    customer: 'Jennifer T.',
    installedAt: '2024-06',
    before: [
      '5-bed colonial, 4,200 sqft, geothermal + pool heater',
      'LIPA bill averaged $580/mo, peak $890 in summer',
      'Lloyd Harbor Architectural Review Board approval needed',
    ],
    system: [
      '14.4 kW system — 36 × SunPower X-series 405W (industry-best efficiency)',
      'SolarEdge HD-Wave inverter with module-level power electronics',
      'Two-roof-plane install (south + west) maximized output',
    ],
    after: [
      'PSEG bill drops 78% — average $128/mo',
      'Annual savings $5,420; payback in year 6',
      'Lloyd Harbor ARB approval secured with low-profile black-on-black panels',
    ],
    quote:
      "We had been quoted by three other installers — only Huntington Solar Co handled the Lloyd Harbor ARB submission without complaint. The math they sent was the most detailed.",
  },
  {
    slug: 'centerport-rescue-install',
    headline: 'Centerport service rescue · failed inverter recovery',
    town: 'Centerport',
    customer: 'Rob D.',
    installedAt: '2025-02',
    before: [
      'Existing 7 kW system from 2017 — original installer out of business',
      'System produced zero for 4 months, monitoring app showed "offline"',
      'PSEG bill back to pre-solar levels: ~$220/mo',
    ],
    system: [
      'Diagnostic: failed SMA string inverter (out of warranty)',
      'Replaced with Enphase IQ Combiner + IQ8 microinverters',
      'Brought monitoring back online; added Enphase IQ Battery 5P (5 kWh)',
    ],
    after: [
      'System producing at 102% of original spec (microinverters more efficient than the old string setup)',
      'PSEG bill back to ~$28/mo; battery handles outage backup',
      "Total repair + battery upgrade: $11,400 net — recovered in year 3 vs replacing the system entirely (~$22k)",
    ],
    quote:
      "I'd been told by two other installers that I needed to rip out and replace everything. Huntington Solar Co fixed it for less than half the cost.",
  },
];

export const aboutPage: AboutPage = {
  pageHeading: 'About Huntington Solar Co',
  lead:
    'A small, Long Island-based solar team. We design, permit, and install — no subcontractors. Federal + NY State + NYSERDA incentive paperwork handled end to end. No high-pressure sales.',
  bodySections: [
    {
      heading: 'Who we are',
      paragraphs: [
        "Huntington Solar Co is a small team of NABCEP-certified solar installers based on the north shore of Suffolk County. We do design, engineering, permits, installation, and post-install service ourselves — same crew, every step. We don't subcontract.",
        "We started doing solar on Long Island because the math here is the most compelling in the country: LIPA rates are roughly 2x the national average, federal and NY State incentives stack to ~50% of system cost, and PSEG net-metering means every kWh you produce offsets one at full retail rate. Solar on a north-shore home pays itself off in 5-7 years on average and runs another 20 on warranty after that.",
      ],
    },
    {
      heading: 'How we work',
      paragraphs: [
        "Every install starts with a free site visit and an honest payback model. We send you the math — system size, projected production, gross + net cost after all incentives, year-by-year cash flow, payback period — by email. No salesperson in your living room. If the economics don't work for your situation, we tell you upfront and don't push.",
        "We handle every permit pull, every PSEG interconnection form, and every incentive application. NYSERDA, federal ITC paperwork, NY State residential solar credit, PSEG demand-response (if you're adding a battery) — all on us. You get one signed contract, one date for install, and one paid-off system at the end.",
      ],
    },
    {
      heading: 'What sets us apart on Long Island',
      paragraphs: [
        "Three things that matter most for solar on LI specifically. First — local crews based on the north shore. Most installs across Huntington, Northport, Centerport, Greenlawn, Cold Spring Harbor are under 30 minutes from our base. Same-day response on most service calls. Second — we service systems we didn't install. Plenty of LI homeowners have orphaned solar from installers who went under during the 2018-2020 industry shakeout; we pick those up at flat-rate diagnostic pricing. Third — we don't lock you into one manufacturer. Tesla, Enphase, Q Cells, REC, SolarEdge, FranklinWH — we design for your roof and budget, not for a brand kickback.",
      ],
    },
  ],
  certifications: [
    'NABCEP Certified PV Installation Professional',
    'NYSERDA NY-Sun participating installer (Quality Solar Installer track)',
    'Licensed + insured in Suffolk + Nassau Counties',
    'Tesla Powerwall Certified Installer',
    'Enphase Platinum Installer (microinverters + IQ Battery)',
    'BBB A+ rated · 4.9/5 across 127 installs',
  ],
  serviceAreaCopy:
    "We service all of Suffolk County's north shore and into Nassau where it makes geographic sense — Huntington, Huntington Station, Greenlawn, Centerport, Northport, Cold Spring Harbor, Lloyd Harbor, Eaton's Neck, Halesite, East Northport, Smithtown, Commack. For installs further east or in Nassau interior, we refer to trusted partners.",
};

export const areas: AreaPage[] = [
  {
    slug: 'huntington',
    title: 'Huntington',
    lead: 'Solar installs across Huntington — from Huntington Bay waterfronts to West Hills hillsides. Local crews, same-day site visits, no subcontractors.',
    bodySections: [
      {
        heading: 'Solar in Huntington, NY',
        paragraphs: [
          "Huntington's mix of older shingle roofs and newer construction makes it solar-friendly — most homes have a south or west exposure that produces near-optimal output. Town of Huntington's permit process is streamlined relative to neighboring municipalities; typical residential permit comes back in 2-3 weeks.",
          "PSEG Long Island serves all of Huntington for net-metering — every kWh your panels push back to the grid offsets a kWh you pull at full retail. That 1:1 trade is the math that makes solar's payback work; it's why we model your actual usage rather than just sizing to roof area.",
        ],
      },
      {
        heading: 'What we typically install in town',
        paragraphs: [
          "Most Huntington homes land in the 6-10 kW range — about 16-26 panels depending on the panel wattage we spec. Tesla Powerwall pairs are increasingly common since the 2024 Sandy-anniversary memory and the 2023 federal tax-credit expansion to standalone batteries.",
          "Heritage homes and Victorians around Old Huntington and Huntington Harbor often need extra attention on aesthetic + mount style — we use low-profile black-on-black panels and ballasted (no roof penetration) configurations where appropriate.",
        ],
      },
    ],
    nearbyTowns: ['Huntington Station', 'Greenlawn', 'Centerport', 'Cold Spring Harbor', 'Lloyd Harbor'],
    localStats: 'Suffolk County, NY · ~204,000 population · ZIP codes 11743, 11724, 11721',
  },
  {
    slug: 'huntington-station',
    title: 'Huntington Station',
    lead: 'Solar across Huntington Station\'s neighborhoods — Crestwood, the South Side, and the Walt Whitman Birthplace area.',
    bodySections: [
      {
        heading: 'Solar in Huntington Station',
        paragraphs: [
          "Huntington Station's housing stock skews mid-century single-family with the kind of large south-facing roofs that produce excellent solar output. Many homes were built with 1960s-1970s asphalt-shingle roofs that are now at end-of-life — we frequently coordinate with local roofers so the new roof + solar install happen in one work window, avoiding the cost of removing + reinstalling panels later.",
          "PSEG net-metering applies the same as elsewhere in Huntington Township. Permits go through the Town of Huntington — same 2-3 week typical turnaround as the main Huntington area.",
        ],
      },
      {
        heading: 'Why Huntington Station homes pay back fast',
        paragraphs: [
          "Average LIPA bills in the area run $180-$260/month for typical 3-4 bedroom homes — that's $2,100-$3,100 a year going to the grid. Replace 75-85% of that with solar and you're saving $1,700-$2,600 annually. Payback on a $14k net-of-incentives system lands in the 5-6 year range; the remaining 19+ years of the warranty are nearly pure savings.",
        ],
      },
    ],
    nearbyTowns: ['Huntington', 'Melville', 'Greenlawn', 'Dix Hills'],
    localStats: 'Suffolk County, NY · ~33,000 population · ZIP 11746',
  },
  {
    slug: 'greenlawn',
    title: 'Greenlawn',
    lead: 'Solar serving Greenlawn — Larkfield Road corridor, Centerport Road, the Greenlawn schools district.',
    bodySections: [
      {
        heading: 'Solar in Greenlawn',
        paragraphs: [
          "Greenlawn's split between newer (1990s+) construction north of Pulaski Road and older homes south of it gives us a good mix of straightforward installs and more involved roof-condition cases. Most newer construction has 25-year architectural shingles still well within warranty, making solar a clean fit.",
          "Tree cover is heavier than in Huntington proper — we do a careful shade analysis with satellite imagery before quoting. South-facing roofs with mature oaks on the south side sometimes need either tree trimming (with the homeowner's consent) or a system sized down to actual unshaded production area.",
        ],
      },
      {
        heading: 'Common Greenlawn installs',
        paragraphs: [
          "Typical Greenlawn install: 7-9 kW residential system, $14k-$17k net after stacked incentives, payback in 6 years. Battery pairing is rising — Larkfield Road area customers cite PSEG storm-outage frequency as the trigger.",
        ],
      },
    ],
    nearbyTowns: ['Centerport', 'Northport', 'Huntington Station', 'East Northport'],
    localStats: 'Suffolk County, NY · ~13,500 population · ZIP 11740',
  },
  {
    slug: 'northport',
    title: 'Northport',
    lead: 'Solar across Northport — the Village, Asharoken, and Eaton\'s Neck. Waterfront-aware crews, heritage-home experience.',
    bodySections: [
      {
        heading: 'Solar in Northport, NY',
        paragraphs: [
          "Northport's a mix of village core (smaller historic homes, often with detached garages), Asharoken (waterfront, special wind-load and corrosion considerations), and the more standard suburban housing inland. Each has its own install playbook.",
          "Village historic-district homes sometimes require additional review by the Northport Village Building Department — we have submitted across the district successfully. Asharoken waterfront installs need marine-grade mounts and tilt panels away from prevailing salt-spray; we spec hardware accordingly.",
        ],
      },
      {
        heading: "What's different about Northport solar",
        paragraphs: [
          "Power outages along Asharoken Avenue + Eaton's Neck happen more often than the LI average — single-feed lines and storm-surge proximity. Battery storage is much more commonly specced here than in Huntington proper; ~60% of our Northport installs include a Tesla Powerwall or equivalent.",
        ],
      },
    ],
    nearbyTowns: ['East Northport', 'Centerport', 'Asharoken', 'Eaton\'s Neck', 'Greenlawn'],
    localStats: 'Suffolk County, NY · ~7,500 population (village + Asharoken) · ZIP 11768',
  },
  {
    slug: 'cold-spring-harbor',
    title: 'Cold Spring Harbor',
    lead: 'Solar across Cold Spring Harbor — Lloyd Harbor, the Whaling Museum district, and the surrounding Nassau-border neighborhoods.',
    bodySections: [
      {
        heading: 'Solar in Cold Spring Harbor, NY',
        paragraphs: [
          "Cold Spring Harbor sits at the western edge of Suffolk County, straddling the Nassau line. Housing stock is heavily weighted toward larger homes on larger lots — typical CSH install is 9-14 kW (about 24-36 panels). Roofs are commonly slate, architectural shingle, or premium metal — all install-friendly with the right mount.",
          "We have completed multiple installs in the historic Lloyd Harbor / CSH overlap area; the Lloyd Harbor Architectural Review Board has a clear approval process for solar that we navigate routinely. Allow an extra 4-6 weeks of permit timeline for ARB-reviewed installs.",
        ],
      },
      {
        heading: 'Higher-end installs are the norm',
        paragraphs: [
          "Tesla Powerwall pairs (often 2-3 units), backup-generator integrations, and aesthetic-first panel selections (all-black, integrated mount profiles) are common in CSH. Pool + AC loads are typically large enough that a fully-offset system requires either a maximally-sized rooftop array or ground-mount supplementation on the larger lots.",
        ],
      },
    ],
    nearbyTowns: ['Lloyd Harbor', 'Huntington', 'Centerport', 'Laurel Hollow', 'Cove Neck'],
    localStats: 'Suffolk County, NY (Nassau border) · ~5,000 population · ZIP 11724',
  },
  {
    slug: 'centerport',
    title: 'Centerport',
    lead: 'Solar across Centerport — the Vanderbilt waterfront area, Beach Road, and the Little Neck Road corridor.',
    bodySections: [
      {
        heading: 'Solar in Centerport',
        paragraphs: [
          "Centerport sits between Northport and Huntington with a similar housing mix — village core homes near the harbor, plus larger newer construction inland. PSEG Long Island net-metering applies. Permits go through the Town of Huntington.",
          "Waterfront installs near the Vanderbilt estate area need salt-spray-tolerant hardware. Mid-Centerport (Little Neck, Park Avenue area) is straightforward suburban solar — south-facing roofs, 25-year shingles, clean install paths.",
        ],
      },
      {
        heading: 'Why Centerport homeowners go solar',
        paragraphs: [
          "Centerport's LIPA usage profile skews high — larger homes, more AC, pools — which means higher monthly bills and faster solar payback. Typical Centerport install: 8-12 kW residential, 5-6 year payback on current LIPA rates.",
        ],
      },
    ],
    nearbyTowns: ['Northport', 'Greenlawn', 'Huntington', 'Asharoken'],
    localStats: 'Suffolk County, NY · ~5,000 population · ZIP 11721',
  },
];

/**
 * Insights — long-form articles that target real local search intent
 * (cost questions, permit questions, incentive walkthroughs). Each
 * post renders as its own static page under /insights/[slug] with
 * BlogPosting JSON-LD; the index at /insights lists all of them.
 *
 * Phantom-repeatable: schema mirrors services/areas — fill content
 * in this file, the templates render whatever's here.
 */
export type InsightPost = {
  slug: string;
  title: string;
  /** Meta description, ~155 chars. */
  description: string;
  /** ISO date string. */
  publishedAt: string;
  updatedAt?: string;
  author: string;
  /** ~250-character lead shown on the index card + hero. */
  excerpt: string;
  bodySections: BodySection[];
  /** Optional FAQ for FAQPage JSON-LD. */
  faq?: FaqEntry[];
  /** Optional tag list for category badges. */
  tags?: string[];
};

export const insights: InsightPost[] = [
  {
    slug: 'how-much-does-solar-cost-in-huntington-ny-2026',
    title: 'How much does solar cost in Huntington, NY in 2026?',
    description:
      'A 2026 pricing walkthrough for residential solar in Huntington and the surrounding Suffolk County north shore — gross cost, federal + NY State incentives, payback math.',
    publishedAt: '2026-04-12',
    updatedAt: '2026-05-15',
    author: 'Huntington Solar Co',
    excerpt:
      'Residential solar in Huntington runs $24K–$28K gross for a typical 8 kW system in 2026. Federal + NY State incentives drop that to $12K–$15K net out-of-pocket, with 5–7 year payback at current LIPA rates. Here is the line-by-line math.',
    tags: ['Pricing', 'Incentives', 'Long Island'],
    bodySections: [
      {
        heading: 'The 8 kW Huntington baseline',
        paragraphs: [
          "Most homeowners we quote in Huntington, Greenlawn, and Northport land on a system between 7 and 10 kW — enough to offset roughly 95% of their annual electric usage. The 8 kW system is the mid-point and a useful baseline to anchor the cost conversation.",
          "Installed cost for a turnkey 8 kW residential system in Huntington in 2026 is $24,000–$28,000. That covers panels (Tier-1 monocrystalline, typically Q Cells, REC, or SunPower), inverters (Enphase microinverters or a SolarEdge string + optimizers), racking, electrical work, permits, PSEG interconnection, monitoring, and the full 25-year panel + 12-year inverter warranties.",
          "Battery storage is separate. A Tesla Powerwall 3 (13.5 kWh) adds about $13,000–$15,000 to the install. Most homeowners go solar-only first and add a battery later, since the federal tax credit applies to storage retrofits even after the initial install.",
        ],
      },
      {
        heading: 'Federal Investment Tax Credit (30%)',
        paragraphs: [
          "The federal residential clean energy credit covers 30% of the gross system cost — panels, inverters, batteries, labor, sales tax, the whole stack. It is a tax credit, not a deduction: it reduces your federal tax bill dollar-for-dollar. Any unused credit rolls forward.",
          "On the $26,000 8 kW baseline, that is an $7,800 federal credit. The credit is scheduled to step down after 2032 but is locked in at 30% through end of 2026.",
        ],
      },
      {
        heading: 'New York State residential solar tax credit (25%, capped)',
        paragraphs: [
          "New York stacks its own 25% solar credit on top of the federal credit, capped at $5,000. On the $26,000 baseline, that is the full $5,000.",
          "Like the federal credit, it is dollar-for-dollar against your state tax bill, with carry-forward if you cannot use it all in one year.",
        ],
      },
      {
        heading: 'NYSERDA NY-Sun rebate (varies by queue)',
        paragraphs: [
          "NYSERDA pays a per-watt rebate that flows through your installer at the point of sale. The amount drops as each block fills — current Long Island block (Block 12 as of mid-2026) pays roughly $0.20/W to $0.30/W. On 8 kW that is $1,600–$2,400 off the gross.",
          "This is paid as a discount on the install price — you do not have to file paperwork to claim it.",
        ],
      },
      {
        heading: 'Net cost + payback math',
        paragraphs: [
          "Pulling it together for the 8 kW Huntington install at $26,000:",
          "Gross install: $26,000. Less federal 30% credit ($7,800), NY State credit ($5,000), NYSERDA block rebate ($2,000 mid-range). Net out-of-pocket: roughly $11,200.",
          "Average Huntington home produces ~10,400 kWh/year from an 8 kW system. At LIPA's mid-2026 effective residential rate of ~$0.27/kWh delivered, that is $2,808/year in displaced electricity. Net payback: 4.0 years (extremely fast — LIPA rates have risen 4–6% annually, accelerating payback further).",
          "After payback, the panels keep producing for the remaining 18–20 years of the 25-year warranty — essentially free electricity once the system is paid off.",
        ],
      },
      {
        heading: 'What changes the math',
        paragraphs: [
          "Higher LIPA usage (heat pump, EV, pool, large family) means more displaced electricity and a shorter payback — sometimes under 3 years on heavy-use homes.",
          "Lower-incentive blocks (NYSERDA queue fills) drop the rebate to $0.10/W or zero. That pushes payback out by 6–9 months.",
          "Battery storage adds ~$13K but is also covered by the 30% federal credit, so net add is ~$9K. Payback math depends on time-of-use rate exposure and outage frequency.",
          "Bottom line: most Huntington homes hit payback in year 5–7, even with conservative assumptions.",
        ],
      },
    ],
    faq: [
      {
        q: 'What is the average cost of solar panels in Huntington, NY?',
        a: 'A typical 8 kW residential solar system in Huntington runs $24,000–$28,000 installed (before incentives). After the federal 30% credit, NY State 25% credit (capped at $5,000), and NYSERDA NY-Sun rebate, net out-of-pocket is typically $11,000–$15,000.',
      },
      {
        q: 'How long is the payback period for solar in Huntington?',
        a: 'Most Huntington homeowners see 5–7 year payback at current LIPA rates. Heavy-electric homes (heat pumps, EVs, pools) often pay back in 3–4 years; lighter-use homes 7–8 years.',
      },
      {
        q: 'Can I combine the federal and NY State solar tax credits?',
        a: 'Yes — they are stackable. You can claim the federal 30% Investment Tax Credit AND the New York State 25% residential solar credit (capped at $5,000). Both are dollar-for-dollar tax credits, not deductions.',
      },
    ],
  },
  {
    slug: 'solar-permits-town-of-huntington-2026-walkthrough',
    title: 'Solar permits in the Town of Huntington: a 2026 walkthrough',
    description:
      'What homeowners need to know about Town of Huntington solar permits in 2026 — building department review, electrical permits, PSEG interconnection, and timeline.',
    publishedAt: '2026-03-04',
    updatedAt: '2026-05-20',
    author: 'Huntington Solar Co',
    excerpt:
      'Town of Huntington solar permits in 2026 typically clear in 3–5 weeks: 1–2 weeks for Building Department review, 1 week for the electrical permit, and 1–2 weeks for PSEG interconnection approval. Here is what happens at each step.',
    tags: ['Permits', 'Long Island', 'Process'],
    bodySections: [
      {
        heading: 'Who issues what',
        paragraphs: [
          "Residential solar in the Town of Huntington requires three approvals: a Building Department permit (structural + zoning), an electrical permit (Suffolk County), and PSEG interconnection approval (utility).",
          "Your installer should handle all three — you should never have to file paperwork yourself. If a quote omits permits, it is incomplete; permit fees + the installer's labor to file them run $1,200–$1,800 and should be itemized in the contract.",
        ],
      },
      {
        heading: 'Step 1 — Town of Huntington Building Department',
        paragraphs: [
          "The Building Department reviews structural attachment (roof load + flashing details) and zoning (panels must sit within the buildable envelope of your lot — they cannot project beyond the roof ridge or eaves).",
          "Permit application includes: signed-and-sealed engineering drawings (load calculation showing your roof rafters can carry the panel weight + snow load), the panel layout, electrical single-line diagram, and the manufacturer cut sheets.",
          "Typical Town of Huntington turnaround: 1–2 weeks for first review. If the reviewer requests revisions (most common: clarifying setbacks or roof-edge clearance), allow another week.",
          "Permit fee: typically $300–$400 for residential, based on system value.",
        ],
      },
      {
        heading: 'Special case — Village Building Departments',
        paragraphs: [
          "If your home is inside Northport Village, Lloyd Harbor, Asharoken, or another incorporated village, the village building department reviews the install instead of (or in addition to) the Town of Huntington. Village reviews tend to be stricter — especially historic-district homes in Northport Village, which require Architectural Review Board approval.",
          "ARB review focuses on visual impact. Practical workaround: low-profile all-black panels (black frames, black backsheet) almost always clear ARB on the first pass. Standard silver-framed panels often need a second submission.",
          "Add 2–3 weeks to the timeline for village reviews.",
        ],
      },
      {
        heading: 'Step 2 — Suffolk County electrical permit',
        paragraphs: [
          "After Building Department approval, your installer files the electrical permit with Suffolk County. This covers the interconnection wiring, DC and AC disconnect placement, grounding, and AFCI/GFCI compliance.",
          "Suffolk County electrical permits typically clear in 5–7 business days. The county does an in-person electrical inspection AFTER install completion — usually 1–2 weeks after install — at which point you receive the green tag.",
        ],
      },
      {
        heading: 'Step 3 — PSEG Long Island interconnection',
        paragraphs: [
          "PSEG Long Island has to approve the interconnection before your system can be turned on and start exporting to the grid. The Permission to Operate (PTO) letter is the last gate.",
          "PSEG reviews the single-line diagram, your meter compatibility (most homes need a meter swap to a bidirectional net meter — PSEG provides it at no charge), and confirms that local grid capacity supports the export.",
          "Timeline: PSEG application typically clears in 1–2 weeks for systems under 25 kW. After PTO, PSEG schedules the meter swap; most homes are turned on within a week of the swap.",
        ],
      },
      {
        heading: 'Total realistic timeline',
        paragraphs: [
          "From signed contract to turn-on, the realistic Town of Huntington timeline is 5–9 weeks: 2 weeks for design + drawings, 1–2 weeks for the Town permit, 1 week for the Suffolk County electrical permit, install day (typically 1 day on-roof), 1–2 weeks for inspection + PSEG PTO, and 1 week for the meter swap and turn-on.",
          "Village or ARB reviews push this to 7–12 weeks. Lloyd Harbor and historic-district Northport are the slowest local jurisdictions.",
        ],
      },
    ],
    faq: [
      {
        q: 'Do I need a permit to install solar in Huntington, NY?',
        a: 'Yes. Residential solar in the Town of Huntington requires a Building Department permit, a Suffolk County electrical permit, and PSEG Long Island interconnection approval. A reputable installer handles all three filings on your behalf.',
      },
      {
        q: 'How long does the Town of Huntington take to approve a solar permit?',
        a: 'Town of Huntington Building Department review typically takes 1–2 weeks for a standard residential solar permit. Add 2–3 weeks if you are inside an incorporated village (Northport, Lloyd Harbor, Asharoken) or a historic district.',
      },
      {
        q: 'How much do solar permits cost in Huntington?',
        a: 'Town of Huntington Building Department permits typically run $300–$400 for a residential solar system. Suffolk County electrical permits add ~$150. PSEG interconnection is free. Permits are normally rolled into the installer’s turnkey price.',
      },
    ],
  },
  {
    slug: 'tesla-powerwall-vs-enphase-iq-battery-2026',
    title: 'Tesla Powerwall 3 vs Enphase IQ Battery 5P: which is better for Long Island in 2026?',
    description:
      'A 2026 side-by-side of Tesla Powerwall 3 and Enphase IQ Battery 5P for Long Island solar — capacity, output, install cost, outage performance, and which one we recommend for which homes.',
    publishedAt: '2026-05-02',
    updatedAt: '2026-05-20',
    author: 'Huntington Solar Co',
    excerpt:
      'Tesla Powerwall 3 wins on raw capacity (13.5 kWh) and price-per-kWh; Enphase IQ Battery 5P wins on modularity and microinverter compatibility. The right pick depends on your existing solar hardware and how much of the home you want to back up.',
    tags: ['Batteries', 'Powerwall', 'Enphase', 'Long Island'],
    bodySections: [
      {
        heading: 'The two batteries Long Island installs the most',
        paragraphs: [
          "Roughly 90% of battery-pair installs we do across Suffolk County in 2026 use one of two systems: Tesla Powerwall 3 (the big slab on the side of the house) or Enphase IQ Battery 5P (modular, often two or three units stacked in the garage).",
          "Both are LFP chemistry (lithium iron phosphate — safer thermal profile than older NMC cells), both come with a 10-year warranty, both back up your home during outages, both qualify for the federal 30% ITC and NYSERDA's RBI incentive. The differences are in capacity, output power, modularity, and how they integrate with your inverter.",
        ],
      },
      {
        heading: 'Capacity — Tesla wins on raw kWh per unit',
        paragraphs: [
          "Tesla Powerwall 3 ships as a single 13.5 kWh unit. Enphase IQ Battery 5P ships as a 5 kWh modular unit — most installs use 2 or 3 units (10–15 kWh).",
          "For raw price-per-kWh, Tesla wins. A single Powerwall 3 retails around $14,000 installed (~$1,037/kWh). A 3-unit Enphase 5P install runs $18,000–$21,000 installed (~$1,200–$1,400/kWh).",
          "But: most homes do not need 13.5 kWh. If you only want to back up your fridge, internet, lights, and HVAC blower (the typical Long Island outage list), 5–10 kWh is plenty. Enphase's modularity lets you size the battery to your actual essential-loads draw — start with one unit, add more later.",
        ],
      },
      {
        heading: 'Output power — Tesla wins on continuous',
        paragraphs: [
          "Tesla Powerwall 3 delivers 11.5 kW continuous output (the highest of any home battery on the market). That is enough to run a central AC compressor + electric oven simultaneously without any load-management config.",
          "Enphase IQ Battery 5P delivers 3.84 kW continuous per unit. A 3-unit install gets you ~11.5 kW continuous — comparable to a single Powerwall — but you have to install three units to get there.",
          "Translation: if you want to back up the whole home (including central AC) during outages, Powerwall 3 single-unit gets you there. With Enphase you need 2–3 units, AND you may need to configure load-controlled circuits to keep the central AC from tripping the system.",
        ],
      },
      {
        heading: 'Inverter compatibility — depends on what you already have',
        paragraphs: [
          "If your solar system uses Enphase IQ microinverters (the most common setup on Long Island in 2026), Enphase IQ Battery 5P drops into the same monitoring system seamlessly. One app, one warranty contact, one electrical box.",
          "If your solar uses SolarEdge HD-Wave + optimizers, you can pair either battery, but Tesla Powerwall 3 has built-in solar inverters of its own — meaning you can effectively replace the SolarEdge inverter and let the Powerwall handle solar + storage + grid in one. Useful for SolarEdge customers approaching inverter end-of-life (~year 10–12).",
          "If your solar uses an older SMA, Fronius, or other string inverter — both Tesla and Enphase work via AC coupling, but Tesla is typically the cleaner install.",
        ],
      },
      {
        heading: 'Outage performance — both handle Long Island storms',
        paragraphs: [
          "Both batteries island the home within about one cycle (~16ms for Powerwall 3, similar for Enphase). You will not lose a second of UPS-grade equipment.",
          "Tesla Powerwall 3 supports 'storm watch' — when the National Weather Service issues a severe weather alert for your area, the battery automatically charges to 100% from grid in advance. Powerwall users on Long Island report multi-day outage rideovers during nor'easters when paired with active solar production.",
          "Enphase has its own equivalent (Storm Guard) introduced in 2025. Both handle Long Island's typical 4-hour-to-2-day outage scenarios cleanly.",
        ],
      },
      {
        heading: 'How we typically recommend',
        paragraphs: [
          "If you want one battery, whole-home backup, simplest install, lowest $/kWh: Tesla Powerwall 3.",
          "If you have Enphase microinverters already, want modular sizing, prefer to start small and expand: Enphase IQ Battery 5P (1–3 units).",
          "If you have aging SolarEdge string inverter approaching end of warranty: Tesla Powerwall 3 + retire the SolarEdge inverter.",
          "If you want maximum storm-rideover capacity (multi-day outages, heat pump + EV): two Powerwall 3 units in parallel (27 kWh, ~24 hours of full-home runtime even without solar production).",
          "We install both. The recommendation is always driven by your existing inverter, your backup-load priority list, and your budget — not by which product we sell more of.",
        ],
      },
    ],
    faq: [
      {
        q: 'Is Tesla Powerwall 3 better than Enphase IQ Battery 5P?',
        a: 'It depends on what you already have and what you want backed up. Tesla Powerwall 3 wins on raw capacity per unit (13.5 kWh) and price-per-kWh. Enphase IQ Battery 5P wins on modularity (5 kWh units) and seamless integration with Enphase IQ microinverter solar arrays.',
      },
      {
        q: 'How much does a Tesla Powerwall 3 cost installed in Huntington, NY in 2026?',
        a: 'Installed cost in Suffolk County is typically $14,000 for a single Powerwall 3 unit. After the federal 30% ITC and NYSERDA RBI battery incentive, net out-of-pocket lands around $6,000–$7,500.',
      },
      {
        q: 'Can I add a battery to my existing solar system?',
        a: 'Yes — both Tesla Powerwall and Enphase IQ Battery can retrofit to existing solar systems. The federal 30% Investment Tax Credit covers battery retrofits (the battery does not need to be installed with the original solar to qualify). We do battery retrofits on solar systems we did not install.',
      },
    ],
  },
];

