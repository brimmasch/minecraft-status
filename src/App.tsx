import { useEffect, useMemo, useState } from "react";
import { AlertCircle, ExternalLink, RefreshCw, Server, Users } from "lucide-react";

import serversConfig from "@/data/servers.json";
import { HeroArtwork } from "@/components/HeroArtwork";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ServerConfig = {
  id: string;
  name: string;
  address: string;
  description: string;
  artwork: "crystal" | "neon" | "sunset";
  website?: string;
};

type ServerStatus = {
  online: boolean;
  playersOnline: number;
  playersMax: number;
  playerNames: string[];
  motd: string;
  version: string;
};

type StatusMap = Record<string, ServerStatus | null>;
type ErrorMap = Record<string, string | null>;

const servers = serversConfig as ServerConfig[];

const artworkStyles: Record<ServerConfig["artwork"], string> = {
  crystal:
    "bg-[radial-gradient(circle_at_20%_20%,rgba(80,240,255,0.45),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(200,120,255,0.35),transparent_42%),linear-gradient(135deg,rgba(12,26,64,0.8),rgba(40,10,70,0.9))]",
  neon:
    "bg-[radial-gradient(circle_at_30%_20%,rgba(255,88,200,0.35),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(59,255,224,0.35),transparent_42%),linear-gradient(135deg,rgba(16,16,40,0.85),rgba(6,46,56,0.9))]",
  sunset:
    "bg-[radial-gradient(circle_at_30%_15%,rgba(255,200,95,0.4),transparent_45%),radial-gradient(circle_at_65%_70%,rgba(255,115,95,0.35),transparent_48%),linear-gradient(135deg,rgba(50,26,20,0.82),rgba(40,8,45,0.9))]",
};

function App() {
  const [statusById, setStatusById] = useState<StatusMap>({});
  const [errorsById, setErrorsById] = useState<ErrorMap>({});
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [cooldown, setCooldown] = useState(false);

  const fetchStatuses = async () => {
    if (loading || cooldown) return;
    setLoading(true);
    setCooldown(true);
    setTimeout(() => setCooldown(false), 15000);

    const entries = await Promise.all(
      servers.map(async (server) => {
        try {
          const response = await fetch(`https://api.mcsrvstat.us/2/${server.address}`);
          if (!response.ok) throw new Error(`HTTP ${response.status}`);

          const data = await response.json();
          const names = data?.players?.list ?? [];

          const status: ServerStatus = {
            online: Boolean(data.online),
            playersOnline: Number(data?.players?.online ?? 0),
            playersMax: Number(data?.players?.max ?? 0),
            playerNames: Array.isArray(names) ? names.slice(0, 10) : [],
            motd: data?.motd?.clean?.join(" ") ?? "No MOTD available",
            version: data?.version ?? "Unknown",
          };

          return { key: server.address, status, error: null as string | null };
        } catch (error) {
          return {
            key: server.address,
            status: null,
            error: error instanceof Error ? error.message : "Unknown error",
          };
        }
      })
    );

    const nextStatus: StatusMap = {};
    const nextErrors: ErrorMap = {};
    for (const item of entries) {
      nextStatus[item.key] = item.status;
      nextErrors[item.key] = item.error;
    }

    setStatusById(nextStatus);
    setErrorsById(nextErrors);
    setLastUpdated(new Date());
    setLoading(false);
  };

  useEffect(() => {
    fetchStatuses();
    const interval = setInterval(fetchStatuses, 60000);
    return () => clearInterval(interval);
  }, []);

  const totalOnline = useMemo(
    () => Object.values(statusById).reduce((acc, s) => acc + (s?.playersOnline ?? 0), 0),
    [statusById]
  );

  const totalServersOnline = useMemo(
    () => Object.values(statusById).filter((s) => s?.online).length,
    [statusById]
  );

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-pixel-grid bg-[length:28px_28px] opacity-20" />

      <main className="container py-10 md:py-14">
        <section className="mb-12 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <Card className="flex items-center justify-center border-white/10 bg-card/60 backdrop-blur-xl">
            <div className="flex flex-col items-center gap-6 p-8 text-center">
              <div className="space-y-3">
                <CardTitle className="text-3xl leading-tight md:text-5xl">
                  Minecraft Server Status
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Live status, player counts, and who is online.
                </CardDescription>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button onClick={fetchStatuses} disabled={loading || cooldown}>
                  <RefreshCw className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                  Refresh Status
                </Button>
                <Badge variant="outline" className="px-3 py-1.5">
                  <Users className="mr-1 h-3.5 w-3.5" />
                  {totalOnline} players online
                </Badge>
                <Badge variant="outline" className="px-3 py-1.5">
                  <Server className="mr-1 h-3.5 w-3.5" />
                  {totalServersOnline}/{servers.length} servers up
                </Badge>
              </div>
            </div>
          </Card>

          <div className="artwork-panel min-h-[320px] overflow-hidden">
            <HeroArtwork />
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold">Servers</h2>
            <p className="text-sm text-muted-foreground">
              {lastUpdated ? `Updated ${lastUpdated.toLocaleTimeString()}` : "Loading status..."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {servers.map((server) => {
              const status = statusById[server.address];
              const error = errorsById[server.address];

              return (
                <Card key={server.address} className="overflow-hidden border-white/10 bg-card/65 backdrop-blur-lg">
                  <div className={`h-28 w-full ${artworkStyles[server.artwork]}`} />
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <CardTitle className="text-xl">{server.name}</CardTitle>
                        <CardDescription>{server.description}</CardDescription>
                      </div>
                      {status?.online
                        ? <Badge variant="success">Online</Badge>
                        : <Badge variant="danger">Offline</Badge>}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="rounded-lg border border-white/10 bg-black/20 p-3 text-sm">
                      <p className="text-muted-foreground">Address</p>
                      <p className="font-medium">{server.address}</p>
                    </div>

                    {error ? (
                      <div className="flex items-center gap-2 rounded-lg border border-rose-400/30 bg-rose-500/10 p-3 text-sm text-rose-200">
                        <AlertCircle className="h-4 w-4" />
                        <span>Status unavailable: {error}</span>
                      </div>
                    ) : (
                      <>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                            <p className="text-muted-foreground">Players</p>
                            <p className="font-medium">
                              {status?.playersOnline ?? 0} / {status?.playersMax || "?"}
                            </p>
                          </div>
                          <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                            <p className="text-muted-foreground">Version</p>
                            <p className="font-medium">{status?.version ?? "Unknown"}</p>
                          </div>
                        </div>

                        <div className="rounded-lg border border-white/10 bg-black/20 p-3 text-sm">
                          <p className="mb-1 text-muted-foreground">Online Players</p>
                          {status?.playerNames?.length ? (
                            <p>{status.playerNames.join(", ")}</p>
                          ) : (
                            <p className="text-muted-foreground">No player list available</p>
                          )}
                        </div>

                        <div className="rounded-lg border border-white/10 bg-black/20 p-3 text-sm">
                          <p className="mb-1 text-muted-foreground">MOTD</p>
                          <p className="line-clamp-3">{status?.motd ?? "No MOTD available"}</p>
                        </div>
                      </>
                    )}

                    {server.website && (
                      <Button asChild variant="outline" className="w-full">
                        <a href={server.website} target="_blank" rel="noreferrer">
                          Visit Server Site
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
