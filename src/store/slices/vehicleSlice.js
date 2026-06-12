
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../api/client';

export const fetchVehicles = createAsyncThunk(
  'vehicles/fetchVehicles',
  async (params, { rejectWithValue }) => {
    try {
      const { data, latency } = await apiClient.getVehicles(params);
      return { vehicles: data.data || [], meta: data.meta, latency };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: {
    items: [],
    loading: false,
    error: null,
    meta: {},
    lastLatency: 0,
  },
  reducers: {
    updateVehicleTelemetry(state, action) {
      const { vehicleId, telemetry } = action.payload;
      const vehicle = state.items.find(v => v.id === vehicleId);
      if (vehicle) {
        vehicle.telemetry = { ...vehicle.telemetry, ...telemetry };
        vehicle.last_updated_at = new Date().toISOString();
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.vehicles;
        state.meta = action.payload.meta;
        state.lastLatency = action.payload.latency;
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

