---
name: upwork-proposal
description: Generate tailored, compelling Upwork proposals that convert. Use when the user wants to write a proposal for an Upwork job post. Invoke with /upwork-proposal followed by the job post content.
allowed-tools:
  - Read
  - Write
  - TodoWrite
---

# Upwork Proposal Generator

Generate highly tailored, unique, and compelling Upwork proposals that help freelancers stand out and win clients.

## Instructions

When the user invokes this skill with a job post:

### Step 1: Analyze the Job Post

Carefully extract and analyze:

1. **Client Pain Points** - What problem are they trying to solve?
2. **Key Requirements** - Technical skills, experience level, deliverables
3. **Hidden Needs** - Read between the lines for unstated concerns
4. **Budget & Timeline** - If mentioned
5. **Client Personality** - Formal/casual tone, detail-oriented, etc.
6. **Red Flags or Priorities** - What they emphasize most

### Step 2: Ask Clarifying Questions (if needed)

If the job post is vague or you need freelancer context, ask about:
- The freelancer's relevant experience for THIS specific job
- Portfolio pieces that directly relate to the project
- Unique selling points or differentiators
- Availability and preferred working style

### Step 3: Generate the Proposal

Create a proposal with this structure:

---

## PROPOSAL STRUCTURE

### Opening Hook (2-3 lines)
**DO NOT** start with:
- "I read your job post..."
- "I am a [job title] with X years..."
- "Dear Hiring Manager..."
- "I am very interested in..."

**DO** start with:
- A specific insight about their project/problem
- A compelling question that shows understanding
- A relevant micro-case study result
- A bold statement that addresses their core need

**Example Openers:**
> "Switching from WooCommerce to Shopify mid-season? That migration timing is tricky—but I've done exactly this for 3 e-commerce stores without losing a single order."

> "Your checkout abandonment issue likely isn't just UX—I noticed the same pattern with a client last month, and it was actually a payment gateway timeout problem."

### Show Understanding (3-4 lines)
Demonstrate you've read and understood the post by:
- Paraphrasing their core challenge in your own words
- Identifying a subtle detail others might miss
- Acknowledging potential complications or considerations
- Showing empathy for their situation

### Relevant Experience Proof (3-5 lines)
- Share 1-2 hyper-relevant examples (not a full resume)
- Include specific results with numbers when possible
- Keep it brief—tease, don't tell everything
- Link to portfolio only if directly relevant

**Format:**
> "Last month, I helped [similar client type] achieve [specific result]. The project involved [relevant skill/challenge], which maps directly to what you're describing."

### Your Approach (3-4 lines)
Briefly outline HOW you would tackle this specific project:
- Show your thinking process
- Mention any tools, frameworks, or methods
- Indicate you have a plan (but don't give it all away for free)

### Soft CTA + Availability (2-3 lines)
- Don't beg or be desperate
- Suggest a specific next step
- Mention availability without over-committing
- Create subtle urgency if appropriate

**Example:**
> "I have availability starting next week and would love to discuss how the payment integration should work. Would a quick 15-minute call work to align on the scope?"

### Professional Sign-off
- Keep it simple
- Include name
- Optional: One-line PS that adds value or personality

---

## PROPOSAL TONE GUIDELINES

### Match the Client's Energy
- **Casual Job Post** → Friendly, conversational proposal
- **Formal/Corporate** → Professional, structured proposal
- **Technical** → Show technical depth without jargon overload
- **Urgent** → Emphasize speed and availability

### Voice Principles
1. **Confident, not arrogant** - "I can help" not "I'm the best"
2. **Specific, not generic** - Details beat vague claims
3. **Conversational, not robotic** - Write like you talk (professionally)
4. **Concise, not wordy** - Respect their time
5. **Helpful, not salesy** - Provide value, don't just pitch

---

## WHAT TO AVOID

1. **Generic templates** that could apply to any job
2. **Life story openers** - They don't care about your journey
3. **Overusing "I"** - Focus on them and their project
4. **Listing every skill** - Only mention what's relevant
5. **Desperation signals** - "I really need this job" / "Please give me a chance"
6. **Over-promising** - Be realistic about what you can deliver
7. **Criticizing their approach** - Suggest improvements diplomatically
8. **Massive walls of text** - Use short paragraphs and white space
9. **Attachments they didn't ask for** - Respect their time
10. **Typos and grammar errors** - Proofread carefully

---

## OUTPUT FORMAT

Present the proposal in this format:

```markdown
## Your Upwork Proposal

---

[The complete proposal text here, ready to copy-paste]

---

## Proposal Breakdown

- **Hook Type Used:** [e.g., Insight-based, Question-based, Result-based]
- **Key Differentiator:** [What makes this proposal stand out]
- **Tone Match:** [How the tone matches the job post]
- **Word Count:** [Keep under 200-250 words ideally]

## Optional Variations

If you want alternatives:
1. [Shorter version - under 150 words]
2. [Different hook angle]
```

---

## CUSTOMIZATION TIPS

### For Different Project Types:

**Development/Technical:**
- Lead with technical understanding
- Mention specific technologies
- Reference similar technical challenges solved

**Design/Creative:**
- Lead with aesthetic understanding
- Reference their brand/style
- Offer a fresh perspective

**Writing/Content:**
- Lead with subject matter knowledge
- Show you understand their audience
- Write the proposal itself as a sample of your style

**Marketing/Strategy:**
- Lead with a strategic insight
- Reference relevant metrics/results
- Show you understand their market

---

## EXAMPLE

**Job Post:**
> "Need a React developer to fix performance issues on our e-commerce site. Pages are loading slowly, especially the product pages. We use Next.js and have about 500 products. Budget: $500-1000."

**Generated Proposal:**

---

Slow product pages on a 500-SKU catalog usually come down to one of three things: unoptimized images, over-fetching data, or missing SSR/ISR setup in Next.js. I've debugged similar issues for two e-commerce stores this quarter—one saw a 3-second improvement just from implementing proper image lazy loading and API pagination.

I'd start by running Lighthouse and checking your Network tab to pinpoint the bottleneck. From there, I'll prioritize the quick wins (image optimization, component lazy loading) before tackling deeper issues like your data fetching strategy or implementing ISR for product pages.

My recent work includes optimizing a Shopify headless store running Next.js that went from 6s to 1.8s load time.

I can start this week and typically complete performance audits within 2-3 days. Happy to hop on a quick call to look at the specific pages causing issues.

— [Your Name]

---

## QUALITY CHECKLIST

Before finalizing, verify:

- [ ] Opens with a hook, not a generic intro
- [ ] Addresses their specific problem
- [ ] Shows relevant experience with proof
- [ ] Outlines a clear approach
- [ ] Has a soft call-to-action
- [ ] Matches their tone
- [ ] Under 250 words
- [ ] No typos or grammar errors
- [ ] Doesn't start with "I"
- [ ] Would YOU respond to this proposal?
