---
name: ux-audit
description: Analyze any website's UI/UX by taking a screenshot and providing detailed recommendations, gap analysis, and scoring. Use when the user wants a UI/UX review of a website. Invoke with /ux-audit followed by the URL.
allowed-tools:
  - Bash
  - Read
  - Write
  - TodoWrite
---

# UI/UX Audit Skill

Automatically navigate to a website, capture a screenshot, and provide a comprehensive UI/UX analysis with actionable recommendations and scoring.

## Instructions

When the user invokes this skill with a URL:

### Step 1: Capture the Website

Run the Playwright screenshot script to capture the website:

```bash
cd "C:\Users\shoai\OneDrive\Desktop\AI-300 Assignment\.claude\skills\ux-audit" && npx playwright test screenshot.js <URL> screenshot.png --timeout=60000
```

Or use this simpler Node.js command:

```bash
node "C:\Users\shoai\OneDrive\Desktop\AI-300 Assignment\.claude\skills\ux-audit\screenshot.js" <URL> "C:\Users\shoai\OneDrive\Desktop\AI-300 Assignment\.claude\skills\ux-audit\screenshot.png"
```

Then use the Read tool to view the screenshot image at:
`C:\Users\shoai\OneDrive\Desktop\AI-300 Assignment\.claude\skills\ux-audit\screenshot.png`

### Step 2: Analyze the Screenshot

Examine the screenshot and evaluate based on these UI/UX parameters:

---

## SCORING PARAMETERS

### 1. Visual Hierarchy (0-10)
**What to evaluate:**
- Clear focal points and visual flow
- Proper use of size, color, and spacing to guide attention
- Headings and subheadings hierarchy
- Call-to-action prominence
- F-pattern or Z-pattern adherence

**Red flags:**
- Everything looks the same importance
- CTAs are hidden or unclear
- No clear starting point for the eye

---

### 2. Typography & Readability (0-10)
**What to evaluate:**
- Font choices (legibility, appropriateness)
- Font size hierarchy (H1 > H2 > H3 > body)
- Line height and letter spacing
- Contrast between text and background
- Maximum line length (45-75 characters ideal)
- Consistent font usage

**Red flags:**
- Too many font families (>3)
- Text too small (<14px body)
- Poor contrast ratios
- Walls of text without breaks

---

### 3. Color & Contrast (0-10)
**What to evaluate:**
- Color palette harmony
- Brand consistency
- Sufficient contrast (WCAG AA: 4.5:1 for text)
- Meaningful use of color (not just decorative)
- Color accessibility (colorblind-friendly)
- Consistent color application

**Red flags:**
- Clashing colors
- Low contrast text
- Overuse of bright/saturated colors
- Inconsistent color meanings

---

### 4. Layout & Spacing (0-10)
**What to evaluate:**
- Grid alignment and consistency
- Whitespace usage (breathing room)
- Element grouping (proximity principle)
- Responsive considerations visible
- Balance and symmetry/asymmetry
- Consistent margins and padding

**Red flags:**
- Cramped elements
- Inconsistent spacing
- Misaligned elements
- No visual grouping

---

### 5. Navigation & Information Architecture (0-10)
**What to evaluate:**
- Clear navigation structure
- Logical menu organization
- Breadcrumbs (if applicable)
- Search functionality visibility
- Footer navigation
- Current page indication

**Red flags:**
- Too many nav items (>7 primary)
- Hidden navigation
- No clear path to key pages
- Confusing labels

---

### 6. Call-to-Action Effectiveness (0-10)
**What to evaluate:**
- CTA visibility and prominence
- Action-oriented button text
- Button design (size, color, shape)
- CTA placement (above fold, end of sections)
- Primary vs secondary CTA distinction
- Urgency/value proposition

**Red flags:**
- Generic text ("Click here", "Submit")
- CTAs blend into page
- Too many competing CTAs
- No clear primary action

---

### 7. Trust & Credibility Signals (0-10)
**What to evaluate:**
- Professional design quality
- Social proof (testimonials, logos, reviews)
- Security indicators
- Contact information visibility
- About/team information
- Consistent branding

**Red flags:**
- Outdated design
- Stock photos overuse
- No social proof
- Missing contact info

---

### 8. Mobile Responsiveness Indicators (0-10)
**What to evaluate:**
- Touch-friendly button sizes (44x44px min)
- Readable text without zooming
- No horizontal scrolling
- Thumb-friendly navigation
- Appropriate spacing for touch
- Mobile-first thinking visible

**Red flags:**
- Tiny tap targets
- Desktop-only design patterns
- Hover-dependent interactions visible

---

### 9. Loading & Performance Indicators (0-10)
**What to evaluate:**
- Image optimization (appropriate sizes)
- Lazy loading indicators
- Content prioritization (above-fold)
- Skeleton screens or loading states
- Font loading strategy visible

**Red flags:**
- Massive hero images
- Too many images/videos
- Heavy animations visible

---

### 10. Accessibility Basics (0-10)
**What to evaluate:**
- Alt text likelihood (decorative vs functional images)
- Form label visibility
- Focus indicators likely present
- Sufficient color contrast
- Text alternatives for icons
- Semantic structure visible

**Red flags:**
- Icon-only buttons without labels
- Color as only indicator
- Very small text
- Complex interactions without alternatives

---

## OUTPUT FORMAT

Present the analysis in this format:

```markdown
# UI/UX Audit Report

## Website Analyzed
**URL:** [The URL]
**Screenshot Captured:** [Yes/No]
**Date:** [Current date]

---

## Overall Score: [X]/100

### Score Breakdown

| Parameter | Score | Status |
|-----------|-------|--------|
| Visual Hierarchy | X/10 | [Excellent/Good/Needs Work/Poor] |
| Typography & Readability | X/10 | [Status] |
| Color & Contrast | X/10 | [Status] |
| Layout & Spacing | X/10 | [Status] |
| Navigation & IA | X/10 | [Status] |
| CTA Effectiveness | X/10 | [Status] |
| Trust & Credibility | X/10 | [Status] |
| Mobile Indicators | X/10 | [Status] |
| Performance Indicators | X/10 | [Status] |
| Accessibility Basics | X/10 | [Status] |

### Score Legend
- **9-10:** Excellent - Industry best practice
- **7-8:** Good - Minor improvements possible
- **5-6:** Needs Work - Several issues to address
- **0-4:** Poor - Significant improvements needed

---

## Executive Summary

[2-3 sentences summarizing the overall UI/UX quality and the most critical findings]

---

## Top 3 Strengths

1. **[Strength 1]**
   [Brief explanation of what's done well]

2. **[Strength 2]**
   [Brief explanation]

3. **[Strength 3]**
   [Brief explanation]

---

## Top 5 Issues to Fix (Priority Order)

### 1. [Critical Issue]
**Severity:** Critical / High / Medium / Low
**Parameter Affected:** [Which scoring parameter]
**Current State:** [What's wrong]
**Recommendation:** [How to fix it]
**Impact:** [What improvement this will bring]

### 2. [Issue 2]
...

### 3. [Issue 3]
...

### 4. [Issue 4]
...

### 5. [Issue 5]
...

---

## Detailed Parameter Analysis

### Visual Hierarchy: X/10

**What's Working:**
- [Point 1]
- [Point 2]

**Issues Found:**
- [Issue 1]
- [Issue 2]

**Recommendations:**
- [Specific actionable recommendation]
- [Another recommendation]

---

### Typography & Readability: X/10

[Same structure as above for each parameter]

---

## Quick Wins (Easy Fixes)

These improvements can be made quickly with high impact:

1. [ ] [Quick fix 1]
2. [ ] [Quick fix 2]
3. [ ] [Quick fix 3]
4. [ ] [Quick fix 4]
5. [ ] [Quick fix 5]

---

## Competitive Comparison Notes

Based on common industry standards, this website:
- [Comparison point 1]
- [Comparison point 2]
- [Comparison point 3]

---

## Recommended Next Steps

1. **Immediate (This Week):**
   - [Action item]
   - [Action item]

2. **Short-term (This Month):**
   - [Action item]
   - [Action item]

3. **Long-term (This Quarter):**
   - [Action item]
   - [Action item]

---

## Tools & Resources

For the issues identified, consider these resources:
- [Relevant tool or resource for specific issue]
- [Another resource]
```

---

## SCORING GUIDELINES

### How to Calculate Overall Score

1. Score each of the 10 parameters from 0-10
2. Sum all scores for total out of 100
3. Apply this interpretation:

| Score Range | Overall Rating | Interpretation |
|-------------|----------------|----------------|
| 90-100 | Exceptional | Best-in-class UI/UX |
| 80-89 | Excellent | Minor polish needed |
| 70-79 | Good | Some improvements needed |
| 60-69 | Average | Multiple areas need work |
| 50-59 | Below Average | Significant issues |
| 40-49 | Poor | Major overhaul needed |
| Below 40 | Critical | Fundamental redesign needed |

---

## ANALYSIS PRINCIPLES

1. **Be Specific** - Don't say "improve the colors," say "increase contrast between the gray text (#999) and white background to meet WCAG AA standards"

2. **Be Actionable** - Every issue should have a clear fix

3. **Prioritize by Impact** - Focus on changes that will most improve user experience

4. **Consider Context** - A portfolio site has different needs than an e-commerce site

5. **Be Fair** - Acknowledge what's done well, not just problems

6. **Consider Users** - Frame recommendations in terms of user benefit

---

## EXAMPLE INVOCATION

User: `/ux-audit https://example.com`

Process:
1. Navigate to https://example.com
2. Capture full-page screenshot
3. Analyze against all 10 parameters
4. Generate comprehensive report with scores
5. Provide prioritized recommendations

---

## ADDITIONAL CHECKS (If Time Permits)

- **Dark Mode:** Is there a dark mode option?
- **Micro-interactions:** Any delightful hover/click effects?
- **Error States:** Any visible error handling patterns?
- **Empty States:** How are empty sections handled?
- **Onboarding:** Any visible user guidance?
- **Consistency:** Does the design feel cohesive throughout?
