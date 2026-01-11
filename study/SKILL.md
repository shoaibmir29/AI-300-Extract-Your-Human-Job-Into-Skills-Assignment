Perf---
name: study
description: Create comprehensive study materials for any topic. Use when the user wants to study a subject, learn a topic, create notes, flashcards, or quiz questions. Invoke with /study followed by the topic name.
allowed-tools:
  - WebSearch
  - WebFetch
  - Write
  - Read
  - Glob
  - TodoWrite
---

# Study Skill

Create comprehensive study materials for a given topic with three components:
1. **Detailed Notes** - backed by reputable academic books and sources
2. **Flashcards** - for quick revision
3. **Quiz Questions** - to test understanding

## Instructions

When the user invokes this skill with a topic:

### Step 1: Research Phase

1. Search for the most reputable and authoritative books on the topic
2. Identify at least 3-5 well-known textbooks or academic references
3. Focus on books that are:
   - Written by recognized experts in the field
   - Widely used in university courses
   - Highly cited or recommended in academic circles

### Step 2: Create Detailed Notes

Create a comprehensive notes file with the following structure:

```markdown
# [Topic Name] - Study Notes

## Overview
Brief introduction to the topic and its importance.

## Key Concepts

### [Concept 1]
Detailed explanation...

### [Concept 2]
Detailed explanation...

## Important Definitions
- **Term 1**: Definition...
- **Term 2**: Definition...

## How It Works
Step-by-step explanation of processes, algorithms, or mechanisms.

## Real-World Applications
Practical examples and use cases.

## Common Misconceptions
Address frequent misunderstandings.

## Summary
Key takeaways.

## References
List all books and sources used with:
- Book Title
- Author(s)
- Edition/Year
- Relevant chapters
```

### Step 3: Create Flashcards

Create a flashcards file for quick revision:

```markdown
# [Topic Name] - Flashcards

## Card 1
**Q:** [Question]
**A:** [Answer]

---

## Card 2
**Q:** [Question]
**A:** [Answer]

---
```

Create 15-25 flashcards covering:
- Key definitions
- Important concepts
- Processes and steps
- Formulas (if applicable)
- Comparisons between related concepts

### Step 4: Create Quiz Questions

Create a comprehensive quiz file:

```markdown
# [Topic Name] - Quiz

## Multiple Choice Questions

### Q1. [Question text]
a) Option A
b) Option B
c) Option C
d) Option D

**Answer:** [Correct option with brief explanation]

---

## True/False Questions

### Q1. [Statement]
**Answer:** [True/False] - [Explanation]

---

## Short Answer Questions

### Q1. [Question]
**Expected Answer:** [Detailed answer]

---

## Application Questions

### Q1. [Scenario-based question]
**Expected Answer:** [How to apply the concept]
```

Include:
- 10-15 Multiple Choice Questions (varying difficulty)
- 5-10 True/False Questions
- 5-10 Short Answer Questions
- 3-5 Application/Scenario-based Questions

## Output Files

Save all materials in a `study-materials/[topic-slug]/` directory:
- `notes.md` - Detailed notes
- `flashcards.md` - Revision flashcards
- `quiz.md` - Quiz questions with answers

## Quality Requirements

1. **Source Integrity (NON-NEGOTIABLE)**
   - Every major concept MUST be traceable to a reputable book
   - Include specific book references with chapter/page when possible
   - Prefer textbooks over blog posts or informal sources
   - Academic papers are acceptable for cutting-edge topics

2. **Accuracy**
   - Verify facts across multiple sources
   - Use precise terminology
   - Include mathematical formulas where relevant

3. **Completeness**
   - Cover foundational concepts before advanced ones
   - Include prerequisites if necessary
   - Address common exam topics

4. **Clarity**
   - Use clear, concise language
   - Include diagrams descriptions where helpful
   - Provide examples for abstract concepts

## Example Invocation

User: `/study Digital Signatures in Cryptography`

Output:
```
study-materials/
└── digital-signatures-cryptography/
    ├── notes.md
    ├── flashcards.md
    └── quiz.md
```

## Recommended Book Sources by Domain

When searching for books, prioritize these types of sources:

- **Computer Science**: Textbooks from authors like Tanenbaum, Cormen, Sedgewick, Knuth
- **Cryptography**: Schneier, Katz & Lindell, Stallings, Menezes
- **Mathematics**: Stewart, Rudin, Apostol, Spivak
- **Physics**: Halliday & Resnick, Feynman, Griffiths
- **Economics**: Mankiw, Samuelson, Varian
- **Biology**: Campbell, Alberts, Lehninger
- **Chemistry**: Atkins, McMurry, Clayden
Hi
Always search for the most authoritative sources for the specific topic.
