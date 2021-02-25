
export const TIMES = Object.freeze({
  TEST_NOW: 1613764110,
  TEST_SERVICEDAY: 1613685600
});

export const TEST_ENTRY = Object.freeze({
  name: 'test',
  zoneId: 'ABCD',
  gtfsId: 'HSL:1234567',
  code: 'H1234',
  stoptimesWithoutPatterns: [
    {
      scheduledArrival: 81200,
      realtimeArrival: 81000,
      scheduledDeparture: 81200,
      realtimeDeparture: 81000,
      realtime: true,
      realtimeState: 'UPDATED',
      serviceDay: 1613685600,
      trip: {
        route: {
          shortName: '00',
          longName: 'nll1 - nll2(M) - nll3',
          mode: 'BUS'
        }
      }
    }
  ]
});