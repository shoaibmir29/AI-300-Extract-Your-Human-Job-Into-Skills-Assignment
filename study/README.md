# Study Skill

A Claude Code skill that creates comprehensive study materials for any topic, backed by reputable academic sources.

## Overview

This skill researches a topic using authoritative textbooks and academic sources, then generates structured study materials including detailed notes, flashcards, and quiz questions.

## Features

- **Source-Backed Content**: Every concept traced to reputable textbooks
- **Comprehensive Notes**: Structured with key concepts, definitions, and examples
- **Revision Flashcards**: 15-25 cards for quick review
- **Practice Quizzes**: Multiple choice, true/false, short answer, and application questions
- **Domain-Specific Sources**: Prioritizes recognized experts in each field

## Usage

Invoke the skill with your topic:

```
/study [topic name]
```

## Example

```
/study Digital Signatures in Cryptography
```

## Output

The skill creates a directory with three files:

```
study-materials/
└── digital-signatures-cryptography/
    ├── notes.md      # Detailed study notes
    ├── flashcards.md # Quick revision cards
    └── quiz.md       # Practice questions
```

### Notes Include:
- Overview and importance
- Key concepts with explanations
- Important definitions
- How it works (processes/algorithms)
- Real-world applications
- Common misconceptions
- Summary and references

### Flashcards Include:
- 15-25 cards covering:
  - Key definitions
  - Important concepts
  - Processes and steps
  - Formulas (if applicable)
  - Concept comparisons

### Quiz Includes:
- 10-15 Multiple Choice Questions
- 5-10 True/False Questions
- 5-10 Short Answer Questions
- 3-5 Application/Scenario Questions

## Recommended Sources by Domain

| Domain | Authoritative Authors |
|--------|----------------------|
| Computer Science | Tanenbaum, Cormen, Sedgewick, Knuth |
| Cryptography | Schneier, Katz & Lindell, Stallings |
| Mathematics | Stewart, Rudin, Apostol, Spivak |
| Physics | Halliday & Resnick, Feynman, Griffiths |
| Economics | Mankiw, Samuelson, Varian |
| Biology | Campbell, Alberts, Lehninger |
| Chemistry | Atkins, McMurry, Clayden |

## Quality Standards

1. **Source Integrity**: Major concepts must be traceable to reputable books
2. **Accuracy**: Facts verified across multiple sources
3. **Completeness**: Covers foundational to advanced concepts
4. **Clarity**: Clear language with examples for abstract concepts

## Tools Used

- WebSearch (for finding authoritative sources)
- WebFetch
- Write
- Read
- Glob
