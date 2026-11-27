// Protections for the public /api/chat route. The in-memory limits apply per
// server instance, which is the best we can do without a shared store.

const WINDOW_MS = 10 * 60 * 1000;
const IP_LIMIT = 8;
const GLOBAL_LIMIT = 40;
const MAX_MESSAGES = 12;
const MAX_CHARS = 500;
const MAX_BODY_CHARS = 12_000;

const ipBuckets = new Map<string, number[]>();
const globalTimestamps: number[] = [];

function prune(list: number[], now: number) {
  while (list.length > 0 && now - list[0] > WINDOW_MS) list.shift();
}

export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const ip = forwarded.split(",")[0]?.trim();
    if (ip) return ip;
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export function isAllowedChatOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const hostHeader = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "";
  const host = hostHeader.split(",")[0]?.trim() ?? "";

  if (origin) {
    try {
      const originHost = new URL(origin).host;
      if (host && originHost === host) return true;
      return originHost === "www.tripointlandscaping.com" || originHost === "tripointlandscaping.com";
    } catch {
      return false;
    }
  }

  // Browsers set this and page scripts cannot. A missing Origin with a
  // same-origin fetch still belongs to the site.
  return request.headers.get("sec-fetch-site") === "same-origin";
}

export function allowChatRequest(ip: string): boolean {
  const now = Date.now();
  prune(globalTimestamps, now);
  if (globalTimestamps.length >= GLOBAL_LIMIT) return false;

  const bucket = ipBuckets.get(ip) ?? [];
  prune(bucket, now);
  if (bucket.length >= IP_LIMIT) {
    ipBuckets.set(ip, bucket);
    return false;
  }

  bucket.push(now);
  ipBuckets.set(ip, bucket);
  globalTimestamps.push(now);

  if (ipBuckets.size > 2000) {
    const oldest = ipBuckets.keys().next().value;
    if (oldest) ipBuckets.delete(oldest);
  }

  return true;
}

export type ChatMessage = { role: "user" | "assistant"; content: string };

export function parseChatBody(rawBody: string): { messages: ChatMessage[] } | { error: string } {
  if (rawBody.length > MAX_BODY_CHARS) {
    return { error: "That message is too long. Call or text (586) 327-8080 and we'll help you directly." };
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(rawBody);
  } catch {
    return { error: "Invalid request" };
  }

  if (!parsed || typeof parsed !== "object") return { error: "Invalid request" };
  const rawMessages = (parsed as { messages?: unknown }).messages;
  if (!Array.isArray(rawMessages) || rawMessages.length === 0) return { error: "Invalid request" };

  const messages: ChatMessage[] = [];
  for (const item of rawMessages.slice(-MAX_MESSAGES)) {
    if (!item || typeof item !== "object") return { error: "Invalid request" };
    const role = (item as { role?: unknown }).role;
    const content = (item as { content?: unknown }).content;
    if (role !== "user" && role !== "assistant") return { error: "Invalid request" };
    if (typeof content !== "string") return { error: "Invalid request" };
    const trimmed = content.trim();
    if (!trimmed) continue;
    if (trimmed.length > MAX_CHARS) {
      return { error: "Please keep each message under 500 characters, or call (586) 327-8080." };
    }
    messages.push({ role, content: trimmed });
  }

  if (!messages.some((message) => message.role === "user")) return { error: "Invalid request" };
  return { messages };
}

export const CHAT_MAX_TOKENS = 300;
export const CHAT_MAX_INPUT_CHARS = MAX_CHARS;
