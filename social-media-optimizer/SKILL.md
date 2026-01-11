---
name: social-media-optimizer
description: Generate optimized social media posts for multiple platforms from a single story or content. Use when the user wants to create platform-specific posts for Facebook, Instagram, LinkedIn, and Twitter/X. Invoke with /social-media-optimizer followed by the content or story.
allowed-tools:
  - Read
  - Write
  - TodoWrite
---

# Social Media Post Optimizer

Transform a single story, announcement, or content piece into platform-optimized posts for Facebook, Instagram, LinkedIn, and Twitter/X.

## Instructions

When the user invokes this skill with their content/story:

### Step 1: Analyze the Content

Extract and understand:

1. **Core Message** - What's the main point or announcement?
2. **Target Audience** - Who would care about this?
3. **Content Type** - Achievement, announcement, educational, promotional, personal story?
4. **Tone** - Professional, casual, inspiring, humorous?
5. **Key Keywords** - For hashtag generation
6. **Call-to-Action** - What should readers do next?

### Step 2: Generate Platform-Specific Posts

Create optimized posts for each platform following these guidelines:

---

## PLATFORM SPECIFICATIONS

### Twitter/X

**Character Limit:** 280 characters (ideal: 70-100 for engagement)

**Style Guidelines:**
- Punchy, concise, attention-grabbing
- Front-load the hook—first line matters most
- Use line breaks for readability
- Conversational and direct
- Questions and hot takes perform well
- Thread-friendly (indicate if content needs a thread)

**Hashtag Strategy:**
- 1-2 hashtags maximum (more hurts engagement)
- Place at end or integrate naturally
- Use trending/popular hashtags when relevant

**Best Practices:**
- Start with a hook, not "I'm excited to announce..."
- Use numbers and specifics
- Create curiosity gaps
- Emojis: sparingly (0-2)

**Example Format:**
```
[Hook/Main point]

[Supporting detail or context]

[CTA or question]

#Hashtag1 #Hashtag2
```

---

### LinkedIn

**Character Limit:** 3,000 characters (ideal: 1,200-1,500 for posts)

**Style Guidelines:**
- Professional but personable
- Story-driven with lessons/insights
- First-person narrative works well
- "LinkedIn voice": reflective, value-focused
- Hook in first 2 lines (before "see more")
- Use line breaks liberally (1 sentence per line)
- End with a question to drive comments

**Hashtag Strategy:**
- 3-5 hashtags
- Mix of broad (#Marketing) and niche (#B2BSaaS)
- Place at end of post
- Include industry-specific tags

**Best Practices:**
- Open with a pattern interrupt or bold statement
- Share the struggle before the success
- Include specific numbers/results
- Add a "lesson learned" or insight
- Ask for engagement naturally

**Example Format:**
```
[Bold opening hook]

[The story/context - 3-5 short paragraphs]

[The insight or lesson]

[Question for audience]

#Hashtag1 #Hashtag2 #Hashtag3 #Hashtag4 #Hashtag5
```

---

### Instagram

**Character Limit:** 2,200 characters (ideal: 150-300 for feed, can go longer for carousels)

**Style Guidelines:**
- Visual-first thinking (describe ideal image/carousel)
- Authentic and relatable
- Storytelling with personality
- Emojis are welcome and expected
- Line breaks for scannability
- Mix of inspiration and value

**Hashtag Strategy:**
- 5-15 hashtags (research suggests 8-12 optimal)
- Mix of sizes: large (1M+), medium (100K-1M), small (<100K)
- Niche-specific hashtags perform better
- Can place in caption or first comment
- Include location tags if relevant

**Best Practices:**
- First line is crucial (hook before "more")
- Use emojis as bullet points or accents
- Include a clear CTA (save, share, comment, link in bio)
- Consider carousel potential for educational content
- Suggest image/visual concept

**Example Format:**
```
[Hook with emoji] ✨

[Story or content - conversational tone]

[Value or insight]

[CTA - "Save this for later" / "Drop a 🔥 if you agree"]

.
.
.
#hashtag1 #hashtag2 #hashtag3 #hashtag4 #hashtag5
#hashtag6 #hashtag7 #hashtag8 #hashtag9 #hashtag10
```

---

### Facebook

**Character Limit:** 63,206 characters (ideal: 80-250 for engagement)

**Style Guidelines:**
- Conversational and community-focused
- Personal stories resonate
- Can be longer-form for groups/pages
- Native feel—not too polished
- Questions and polls drive engagement
- Shareable content performs well

**Hashtag Strategy:**
- 1-3 hashtags maximum (less is more on Facebook)
- Only use highly relevant tags
- Optional—some posts work better without

**Best Practices:**
- Lead with emotion or curiosity
- Write like you're talking to a friend
- Use "you" language
- Include a share-worthy element
- Ask questions to boost comments
- Tag relevant pages if appropriate

**Example Format:**
```
[Conversational hook]

[The story or announcement]

[Why it matters to the reader]

[Question or CTA]

#Hashtag1 #Hashtag2
```

---

## OUTPUT FORMAT

Present all posts in this format:

```markdown
# Social Media Posts

## Original Content Summary
[Brief summary of the input story/content]

---

## Twitter/X

**Post:**
[The optimized tweet]

**Character Count:** [X]/280
**Suggested Posting Time:** [Best time for engagement]
**Thread Potential:** [Yes/No - with thread outline if yes]

---

## LinkedIn

**Post:**
[The optimized LinkedIn post]

**Character Count:** [X]/3000
**Suggested Posting Time:** [Best time for engagement]
**Engagement Hook:** [The question/CTA used]

---

## Instagram

**Caption:**
[The optimized Instagram caption]

**Visual Suggestion:** [Describe ideal image/carousel]
**Character Count:** [X]/2200
**Hashtag Placement:** [In caption / First comment]
**Content Format:** [Single image / Carousel / Reel]

---

## Facebook

**Post:**
[The optimized Facebook post]

**Character Count:** [X]/63206
**Suggested Posting Time:** [Best time for engagement]
**Share Potential:** [Why people would share this]

---

## Hashtag Master List

| Platform | Hashtags |
|----------|----------|
| Twitter | #tag1 #tag2 |
| LinkedIn | #tag1 #tag2 #tag3 #tag4 #tag5 |
| Instagram | #tag1 #tag2 ... #tag10 |
| Facebook | #tag1 #tag2 |

---

## Quick Copy Section

### Twitter
[Just the tweet, ready to copy]

### LinkedIn
[Just the post, ready to copy]

### Instagram
[Just the caption, ready to copy]

### Facebook
[Just the post, ready to copy]
```

---

## CONTENT TYPE ADAPTATIONS

### Achievement/Milestone Posts
- **Twitter:** Focus on the number/result, keep humble
- **LinkedIn:** Tell the journey, share lessons
- **Instagram:** Celebrate visually, be grateful
- **Facebook:** Share with community, thank supporters

### Product/Launch Announcements
- **Twitter:** Create urgency, link to landing page
- **LinkedIn:** Focus on problem solved, professional angle
- **Instagram:** Visual showcase, swipe-up/link in bio
- **Facebook:** Community benefit, early access offers

### Educational/How-To Content
- **Twitter:** Thread format with key takeaways
- **LinkedIn:** Step-by-step with professional insights
- **Instagram:** Carousel format, save-worthy
- **Facebook:** Discussion starter, ask for others' tips

### Personal Story/Behind-the-Scenes
- **Twitter:** Punchy narrative, relatable moments
- **LinkedIn:** Lessons from the journey, vulnerability
- **Instagram:** Authentic, raw, real moments
- **Facebook:** Conversational, community connection

---

## HASHTAG RESEARCH GUIDELINES

### Categories to Include:

1. **Industry/Niche Tags**
   - Specific to your field
   - Example: #WebDevelopment #SaaS #DigitalArt

2. **Topic-Specific Tags**
   - Related to the content
   - Example: #AITools #ProductLaunch #MondayMotivation

3. **Community Tags**
   - Groups or movements
   - Example: #CreatorsOnLinkedIn #TechTwitter #SmallBusiness

4. **Trending/Timely Tags**
   - Current events or trends
   - Example: #2024Goals #AIRevolution

5. **Branded Tags** (if applicable)
   - Your personal or company brand
   - Example: #YourBrandName #YourProductName

---

## QUALITY CHECKLIST

Before finalizing, verify each post:

- [ ] Platform-appropriate length
- [ ] Strong hook in first line
- [ ] Authentic voice (not robotic)
- [ ] Clear value proposition
- [ ] Appropriate hashtag count per platform
- [ ] Call-to-action included
- [ ] No spelling/grammar errors
- [ ] Emojis appropriate for platform
- [ ] Would YOU engage with this post?
- [ ] Shareable/saveable content

---

## EXAMPLE

**Input Story:**
> "I created a Claude skill that automatically generates social media posts optimized for different platforms"

**Twitter Output:**
```
Just built a Claude skill that writes your social posts for you.

Give it one story → get 4 platform-perfect posts (Twitter, LinkedIn, Instagram, Facebook).

No more copy-pasting and reformatting. The AI handles the hashtags too.

#ClaudeAI #Automation
```

**LinkedIn Output:**
```
I got tired of reformatting the same announcement 4 different ways.

Twitter wants punchy.
LinkedIn wants professional.
Instagram wants visual.
Facebook wants conversational.

So I built a Claude skill that does it automatically.

You give it one story or update.
It generates 4 platform-optimized posts.
Complete with hashtags tailored to each platform.

The insight that made this work:
Each platform has its own "language."
What performs on LinkedIn bombs on Twitter.
What works on Instagram feels off on Facebook.

The skill understands these nuances.

Now my content workflow is: write once, post everywhere (properly).

Would something like this save you time? What's your current multi-platform posting process?

#ContentCreation #SocialMediaMarketing #AI #Automation #ClaudeAI
```
