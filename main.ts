// Sprint sniper entry for the pump.fun paper sprint (agent-fun/replay/v2).
// The grader runs `node main.ts`: the harness sends a hello message with the
// capital and caps, then one batch per slot, and this bot answers each batch
// with its orders for that slot. The strategy lives in strategy.ts and the
// wire shim is the kit's SDK, vendored byte for byte in vendor/agentfun-bot.ts.
// Tuned on the dev window: launch sniper, 2-slot holds, 700 bps buy-slippage
// cap, 0.05 SOL per coin, min real reserve 2 SOL, at most 2 non-creator buyers,
// at least 2 trades before entry, no buy splitting, plus a capped late probe
// fail-safe (last 45 minutes of the window, at most 12 trips) so the run clears
// the 20-coin minimum bar even when launches run thin in the final 6-hour window.

import { runBot } from './vendor/agentfun-bot.ts';
import { createStrategy, DEFAULT_PARAMS } from './strategy.ts';

await runBot(createStrategy(DEFAULT_PARAMS));
