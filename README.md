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

## Production build & deployment

Build the static site:

```bash
# In Docker (uses the container's own node_modules)
docker compose run --rm web npm run build

# Or directly, if dependencies are installed on the host
npm run build
```

The output lands in `dist/`. Copy that folder to any static web host.

### Portable by design

The build uses a **relative base** (`base: "./"` in `vite.config.ts`) and resolves
`servers.json` relative to its own bundle URL at runtime. That means the same
`dist/` folder works unchanged whether it is served from:

- a domain root — `https://example.com/`
- a subpath — `https://example.com/status/`
- a different subdomain — `https://mc.example.com/apps/mc/`

No rebuild is needed when the URL changes — just drop `dist/` wherever it needs to live.

To change the server list on a live deployment, edit `dist/servers.json` on the
host and refresh the browser — no rebuild required.

> Note: this works because the app is a single page with no client-side routing.
> If client-side routes are added later, the host will also need a rewrite rule
> that serves `index.html` for unknown paths under the app's base.

## Notes

- The UI fetches status from `https://api.mcsrvstat.us/2/<address>`.
- Status auto-refreshes every 60 seconds.
- Manual refresh is available via the **Refresh Status** button.
