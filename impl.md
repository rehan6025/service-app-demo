Based on the conversation context and the available `design-taste-frontend` skill, here's how you should approach creating a service-based landing page that feels human-crafted:

## Your Approach Workflow

### 1. **Start with Brief Inference (Critical First Step)**
Before touching code, declare your design read aloud:
> *"Reading this as: B2B service landing for business decision-makers, with a trust-first professional language, leaning toward Tailwind utilities + Geist + restrained motion."*

This matches your Bitcom example - it's a service-based company needing to establish credibility.

### 2. **Set Your Dials Based on the Brief**
For a trust-first service company:
- **`DESIGN_VARIANCE: 5-6`** (slightly offset from perfect symmetry for approachability)
- **`MOTION_INTENSITY: 3-4`** (subtle, purposeful motion only - nothing flashy)
- **`VISUAL_DENSITY: 4-5`** (balanced, not too sparse or crowded)

### 3. **Choose Your Foundation**
Since this is a service/agency type site (not matching an official design system), follow Section 2.B:
- Use **native CSS + Tailwind** as your base
- Be honest about inspirations (e.g., "inspired by agency landing pages but not copying any specific brand")

### 4. **Apply the Anti-Slop Directives (Section 4)**
This is where you make it feel human-crafted by avoiding AI tells:

**Key things to actively avoid:**
- ❌ No centered hero over dark mesh (the #1 AI default)
- ❌ No three equal feature cards
- ❌ No AI-purple gradients
- ❌ No em-dashes anywhere (non-negotiable ban)
- ❌ No generic stock photography or fake screenshots
- ❌ No placeholder text like "Lorem ipsum" or fake metrics

**Do instead:**
- ✅ Use asymmetric layouts (text left, asset right or vice versa)
- ✅ Use real, specific imagery (generate or source authentic-looking service photos)
- ✅ Use one accent color consistently (maybe a professional blue or teal, not purple)
- ✅ Write specific, believable copy (avoid marketing fluff like "synergy" or "leverage")
- ✅ Include real-seeming team photos with names/roles that sound authentic
- ✅ Show specific service offerings with concrete outcomes

### 5. **Component-by-Component Implementation**
Break your page into sections and implement each using the skill's guidelines:

**Hero Section:**
- Asymmetric split (text on left, service imagery on right)
- Headline: Clear value prop (≤8 words)
- Subtext: Specific benefit (≤20 words, ≤4 lines)
- CTA: One primary action (e.g., "Get Free Consultation")
- **No** version numbers, no "Brand · No. 01" sub-eyebrows

**Services Section:**
- Use 2-column split or asymmetric grid (never 3 equal cards)
- Each service: Icon + specific headline (≤8 words) + concrete description (≤25 words)
- Show real outcomes: "Increased client retention by 30%" not "Best-in-class service"

**Team Section:**
- Real-seeming photos (use Picsum with descriptive seeds like "professional-team-consulting")
- Specific roles: "Vaibhav Parashar - Chief Technology Officer" not just "CEO"
- Mix senior/junior roles authentically

**Process Section:**
- Numbered steps but verify each step is meaningful
- Use vertical timeline or alternating layout (not rigid zigzag)
- Each step: Action verb + specific outcome

**Trust/Social Proof:**
- Real company logos (use Simple Icons or actual client logos if available)
- **No** "Trusted by" text above logos - let the logos speak
- If using placeholder logos, make them look like real B2B companies

### 6. **Motion with Purpose (Section 5)**
Since `MOTION_INTENSITY: 3-4`:
- Use subtle hover effects on buttons/CTAs
- Simple fade-in/slide-up on section entry (Motion's `whileInView`)
- **No** infinite loops, no parallax, no scroll hijacking
- Every motion must answer: "What does this communicate?" (e.g., button hover = interactive feedback)

### 7. **Run the Pre-Flight Check (Section 14)**
Before considering it done, honestly check every box:
- Zero em-dashes? ✅
- One accent color used everywhere? ✅
- Hero fits viewport without scrolling? ✅
- Navigation on one line at desktop? ✅
- No three equal feature cards? ✅
- Real images used? ✅
- Motion motivated and minimal? ✅

## How to Use Me for Specific Components

When you get stuck on a particular section, ask me for help with:
- **"Help me design the hero section for a service company using the design-taste-frontend skill with VARIANCE=5, MOTION=3, DENSITY=4"**
- **"Show me how to implement a services grid that avoids the three equal cards trap"**
- **"Create a team section layout that feels authentic, not AI-generated"**
- **"Write the copy for a cyber security service section that avoids marketing fluff"**

I'll provide specific code snippets, layout suggestions, and copy that follows all the skill's guidelines - but you'll handle the overall structure, brief inference, and final integration.

This way, you maintain control of the human-crafted feel while using me to overcome specific implementation hurdles that might otherwise trigger AI tells.

Would you like to start with a specific section (hero, services, team, etc.) and I'll help you implement it following these principles?