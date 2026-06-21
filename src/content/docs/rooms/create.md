---
title: Create a Room
description: How rooms are created and what happens when you do.
---

import { Aside } from '@astrojs/starlight/components';

## Creating a room

Rooms are created from the ruumy homepage. Click **New Room** and you're immediately taken to a fresh room with a unique URL.

```
https://ruumy.xyz/[6-character-code]
```

The room code is randomly generated and collision-resistant. You don't choose it — this keeps things fast and frictionless.

## What gets created

When a room is created, ruumy initializes:

- A **presence channel** — tracks who's inside
- A **chat channel** — for real-time messages
- A **canvas state** — the shared workspace

All of this happens in under 200ms.

## Room lifetime

By default, rooms are **ephemeral**:

- The room stays active as long as someone is inside
- If everyone leaves, the room enters a grace period (currently 10 minutes)
- After the grace period, the room and all its content is deleted

<Aside type="caution">
  Ephemeral rooms don't save their content automatically. Copy anything important before you leave.
</Aside>

## Naming a room

You can give a room a custom name visible to everyone inside. This doesn't change the URL — it just appears in the room header and the presence sidebar.

To set a name: click the room title at the top and type a new one. It syncs to all participants instantly.

## Private rooms

By default, anyone with the link can join. A room is only as private as its URL.

Password-protected rooms and invite-only access are on the roadmap.
