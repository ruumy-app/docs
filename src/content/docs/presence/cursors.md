---
title: Cursors & Avatars
description: How ruumy shows you who's where in a room.
---

## Live cursors

Every participant's cursor is visible on the canvas in real time. Each cursor has:

- The participant's name floating above it
- A unique color (assigned automatically, consistent per session)
- Smooth interpolated movement

Cursors only appear when you're on the canvas. They disappear if you move your mouse outside the canvas area or go idle.

## Avatars

Avatars in ruumy are generated — no photo uploads, no Gravatar. Each user gets:

- A **color** — from a curated palette of 12 distinct, accessible colors
- An **initial** — the first letter of their display name

These appear in the presence sidebar, on cursors, and on any canvas object they've created.

## Display names

Names are set locally and stored in `localStorage`. They persist across rooms and sessions on the same browser.

**Defaults:** ruumy assigns a random two-word name on first visit (e.g. *amber-tide*, *swift-peak*). You can change it anytime by clicking your avatar.

**Rules:**
- Max 24 characters
- No special characters except hyphens and underscores
- Names are not unique — two people can have the same name in a room

## Color assignment

Colors are assigned in join order within a room. The palette cycles if there are more than 12 participants.

The 12 colors are chosen for contrast against both light and dark canvas backgrounds, and are distinguishable for the most common forms of color blindness.
