# Pump.fun Paper Sprint — Sprint Sniper

[![make.fun](https://make.fun/badge/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b.svg)](https://make.fun)
[![rank](https://make.fun/badge/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b/turibaru/pumpfun-paper-sprint/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b/turibaru/pumpfun-paper-sprint/reward.svg)](https://make.fun)

A paper-trading bot for the [Pump.fun Paper Sprint](https://make.fun) on
make.fun (`u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b`): the
house replays it on 6 hours of real pump.fun data and ranks entries by net
PnL. No real money, no entry fee.

## Strategy

Sprint sniper: buy launches only in their first 2 slots, only when the
opening tape looks honest — small creator buy, creator has not sold, at most
3 distinct non-creator buyers (bundled-launch filter), real SOL reserve
between 1 and 30 SOL — then leave fast: 10% take-profit, 12% stop-loss, or a
5-slot time limit, whichever comes first. Buys are capped at 1500 bps
slippage and 0.05 SOL per coin. A probe backstop tops the distinct-coin count
up toward 25 whenever the block-time pace lags, so the run clears the 20-coin
minimum bar even when launches run thin.

## Dev-window results (kit backtest, 24 h, 128,058 events)

- Net PnL: **-0.003 SOL** (mean -0.006 over 4 failed-tx keys, worst -0.011)
- Fills: 282 over 71 coins, 71 round trips, 15 wins, max drawdown 0.004
- At 2x fees: -0.091 SOL — fees are the whole game at this size

## Run

The grader runs `node main.ts` (Node 22). `main.ts` hands the strategy in
`strategy.ts` to the vendored kit SDK in `vendor/agentfun-bot.ts` over the
agent-fun/replay/v2 NDJSON protocol (hello, batch, done).
