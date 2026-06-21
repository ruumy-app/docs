---
title: Real-time Chat
description: How the chat works in ruumy rooms.
---

Every room has a built-in chat. It's fast, persistent during the session, and visible to everyone in the room.

## Sending messages

Click the chat panel (or press `/` to focus it) and type. Hit `Enter` to send. Messages appear instantly for all participants — there's no perceptible delay.

## Message history

The last **50 messages** are loaded when you join a room. Older messages are not currently retained (this is by design — rooms are ephemeral).

## Reactions

React to any message with an emoji by hovering it and clicking the **+** icon. Reactions are aggregated — if three people react with 👍, it shows as `👍 3`.

## Typing indicators

When someone is typing, their avatar appears in the chat input area with a pulsing animation. This uses the same presence channel as cursor tracking — no extra infrastructure.

## Keyboard shortcuts

| Shortcut | Action |
|---|---|
| `/` | Focus the chat input |
| `Esc` | Blur the chat input |
| `↑` | Edit your last message |
| `Shift + Enter` | New line (without sending) |

## Technical details

Chat messages are sent over **Supabase Realtime** broadcast channels. They are also written to the database so that late joiners can load history.

Message delivery is optimistic — your message appears immediately in your own UI, then confirms once the server acknowledges it. If the server rejects it (e.g. connection lost), the message is marked as failed with a retry option.
