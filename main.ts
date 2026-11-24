// Sprint sniper entry for the pump.fun paper sprint (agent-fun/replay/v2).
// The grader runs `node main.ts`: the harness sends a hello message with the
// capital and caps, then one batch per slot, and this bot answers each batch
// with its orders for that slot. The strategy lives in strategy.ts and the
// wire shim is the kit's SDK, vendored byte for byte in vendor/agentfun-bot.ts.
// Tuned on the dev window: launch sniper, 5-slot holds, 1500 bps buy-slippage
// cap, 0.05 SOL per coin, plus a probe backstop so the run clears the 20-coin
// minimum bar even when launches run thin in the final 6-hour window.

import { runBot } from './vendor/agentfun-bot.ts';
import { createStrategy, DEFAULT_PARAMS } from './strategy.ts';

await runBot(createStrategy(DEFAULT_PARAMS));
