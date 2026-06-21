---
title: How Presence Works
description: The technical and product details behind ruumy's real-time presence system.
---

Presence is the core of ruumy. It's what makes a room feel alive rather than just a shared document.

## What presence includes

When you're in a room, ruumy tracks and broadcasts:

- **Your identity** — name and avatar color
- **Your cursor position** — updated in real time as you move
- **Your status** — active, idle, or typing
- **Your location** — which part of the canvas you're focused on

All of this is visible to every other participant in the room.

## How it's built

ruumy uses **Supabase Realtime** channels for presence. Every room has a dedicated presence channel. When you join:

1. Your client subscribes to the room's channel
2. You broadcast a `join` event with your identity payload
3. The channel aggregates all connected clients and pushes the list to everyone
4. Cursor positions are sent as lightweight `broadcast` events (no database writes)

This keeps presence fast — cursor updates have a target latency of under 50ms.

## Presence states

| State | Trigger |
|---|---|
| **Active** | Mouse or keyboard activity in the last 30s |
| **Idle** | No activity for 30 seconds |
| **Typing** | Actively typing in the chat input |
| **Disconnected** | Connection lost — shown briefly before removal |

## Privacy

ruumy does not track presence outside of the room you're in. When you leave a room, your presence data is immediately removed from the channel. Nothing is stored server-side after you disconnect.
