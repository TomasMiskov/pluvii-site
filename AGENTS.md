# AGENTS.md

## Project
Pluvii is a static website for a social business that helps landowners analyze their land and design water retention measures for rewilding.

## Current Status
- This repository is the public website for Pluvii.
- Prefer a static site and simple architecture unless a more complex setup is clearly justified.
- Build incrementally. Choose foundations that support later growth without premature complexity.
- Chosen stack direction: Astro with TypeScript, deployed as a static site to GitHub Pages.
- Package manager/runtime preference: Bun for install, dev, build, and preview commands.

## Workflow Rules
- Read this file before making changes in this repository.
- Keep changes focused on the user's request and do not modify unrelated files.
- Prefer solutions that deploy cleanly to GitHub-hosted static infrastructure.
- Prefer unsandboxed `git` or `gh` commands when sandbox restrictions block `.git` writes or GitHub authentication, but still respect runtime approval requirements.
- After changes, run the relevant checks that exist in the project and confirm the resulting git status.

## Content And Brand
- Tone should be practical, credible, ecological, and non-hype.
- Primary audiences are landowners, regeneration projects, and aligned partners.
- Favor clear explanations over jargon. Use concrete outcomes and examples where possible.

## Architecture Preferences
- Prefer static generation, markdown-friendly content workflows, and fast page loads.
- Keep dependency count low unless additional tooling materially improves authoring, localization, or performance.
- Preserve a path for multilingual content, landing pages, and lightweight analytics.
- Default implementation path is Astro content collections for markdown-managed content, with i18n planned from the start.

## Deliverables
- When proposing a new tool or framework, explain the tradeoffs briefly and recommend one default.
- When implementing, keep the project easy to maintain for future sessions and future contributors.
