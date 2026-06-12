
const API_BASE = 'http://localhost:3000';

export const apiClient = {
  async getVehicles(params = {}) {
    const url = new URL(`${API_BASE}/vehicles`);
    Object.entries(params).forEach(([k, v]) => url.searchParams.append(k, v));
    const start = performance.now();
    const res = await fetch(url);
    const data = await res.json();
    const latency = performance.now() - start;
    console.log(`[API Latency] GET /vehicles: ${latency.toFixed(2)}ms`);
    return { data, latency };
  },

  async postTelemetry(batch) {
    const start = performance.now();
    const res = await fetch(`${API_BASE}/vehicles/telemetry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ batch }),
    });
    const latency = performance.now() - start;
    console.log(`[API Latency] POST /telemetry: ${latency.toFixed(2)}ms`);
    return { ok: res.ok, latency };
  },
};
