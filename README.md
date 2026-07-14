# Minecraft Status Dashboard

A modern Minecraft server status website built with Vite, React, TypeScript, Tailwind, and shadcn-style UI components.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn-style component setup
- Docker / Docker Compose

## Run in Docker (recommended)

From the project root:

```bash
docker compose up --build -d
```

App URL:

- http://localhost:5173

Useful commands:

```bash
# Follow logs
docker compose logs -f web

# Stop
docker compose down

# Rebuild after dependency/config changes
docker compose up --build -d
```

## Server Configuration

Server entries are loaded **at runtime** from:

- `public/servers.json`

Because it is fetched at runtime (not bundled into the JavaScript), you can edit
this file and simply refresh the browser — no rebuild required. In a deployed
build the same file is served from `dist/servers.json`, so you can edit it live
on the host as well.

Each server uses this shape:

```json
{
  "id": "survival",
  "name": "Emerald Survival",
  "address": "play.example.net",
  "description": "Community-focused survival world.",
  "artwork": "crystal"
}
```

### Fields

- `id`: unique string key
- `name`: display name
- `address`: Minecraft server hostname queried for status
- `description`: card subtitle
- `artwork`: one of `crystal`, `neon`, `sunset`

A starter template is available at `public/servers.sample.json` — copy it to `servers.json` and replace the addresses with your own:

```bash
cp public/servers.sample.json public/servers.json
```

## Notes

- The UI fetches status from `https://api.mcsrvstat.us/2/<address>`.
- Status auto-refreshes every 60 seconds.
- Manual refresh is available via the **Refresh Status** button.
