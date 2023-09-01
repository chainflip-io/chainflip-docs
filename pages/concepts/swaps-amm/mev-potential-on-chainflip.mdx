# MEV Potential on Chainflip

In this article, we aim to explore the MEV profile of the Chainflip AMM in comparison to existing DEXes, using Uniswapv3 as the benchmark comparison to help explain. This was originally written in response to questions by a security auditor, but we thought that as more of our partners consider market-making and integrating with Chainflip, it would be good to make this resource available as a reference.&#x20;

### Defining MEV

MEV is broadly defined as methods of extracting value from users conducting transactions, in this case in an on-chain market context. Typically, MEV relies on bribing block producers to include and order transactions within a block in a certain way to benefit the actor. Typical examples of MEV include:

* Frontrunning (Frontrunning)
* Backrunning (Arbitrage)
* Sandwiching (JIT Liquidity)

The underlying logic of the Chainflip JIT AMM is based on Uniswapv3, but that is where the similarities end.

The JIT AMM exists in a totally different execution environment to Uniswapv3 and thus requires a complete analysis to understand where (if any) MEV potential exists. None of the existing MEV strategies work out of the box on Chainflip, and we will explain why here.

### Breaking Typical MEV Methods

In Chainflip, all swaps are triggered by events on external chains with a non-trivial delay. Chainflip also witnesses ingress transactions by block and processes swaps made in the same block as one, meaning that Chainflip effectively ignores transaction ordering of external chains and thus eliminates MEV potential derived from transaction ordering externally. This includes typical frontrunning and backrunning of swaps in the same block, as the actor always gets the same price as their target.&#x20;

We have not identified any way to profit from joining a bundled trade. Assuming that the liquidity provision is rational, all swappers, if anything, would want to avoid being bundled with other swaps, as that would reduce the liquidity requirements for their trade overall, and thus potentially offer a better rate. An actor could join the bundle of their target and then perform a backrun, but then they are exposed to other swaps that are also bundled and a time delay for LPs to respond to which will more often than not make it unprofitable.

Furthermore, the State Chain is a “virtual” accounting layer that executes swaps automatically without requiring secondary actions by the user. The intention is to force the deterministic ordering of transaction execution in blocks such that order updates and other extrinsics are executed, followed by swaps in a defined order, followed by signing requests. As such, all MEV strategies which rely on precisely ordering the execution of these different steps are categorically not possible in this application-specific blockchain environment. You can not bribe Chainflip validators to re-order swaps or liquidity updates in any way that gives an advantage to a particular actor. Such reordering would make the block invalid, and the Validator loses rewards and can potentially be slashed for missing an authorship slot.

The one exception to this might be a block producer delaying the witnessing of certain deposits by not including vote transactions in the block that they get to produce, thus excluding the swap as well, but there is no clear way to extract value by doing this. It would also be very easy to spot this behaviour, and solutions to prevent or penalise this are not hard to imagine.

This MEV protection is one of the many benefits of running a DEX in an application-specific environment. This level of control and purpose-driven design is only possible when the consensus itself is customisable.

### Liquidity Frontrunning-as-a-Service (JIT Liquidity)

The JIT AMM fundamentally relies on JIT liquidity provision to benefit the user. This type of JIT provisioning has occasionally been described as a “sandwich attack” in Uniswapv3 because it disadvantages other LPs by offering the user a better price on their swap than existing liquidity in the pool. We think that is not the correct characterisation, as the product’s purpose is capital-efficient swapping, and JIT liquidity serves that function extremely well.&#x20;

In Chainflip we make JIT liquidity provision extremely easy by eliminating the need to construct these private and expensive “sandwich” transactions, and simply allow liquidity providers to submit maker-only limit orders which swaps are executed against, alongside typical pool liquidity. It means that every swap, no matter how small, can benefit from JIT liquidity provision, rather than just the swaps big enough to justify the extreme costs of JIT liquidity provision through sandwich transaction bundles on Uniswap.

In each block, all extrinsics are processed before swaps are processed, meaning that all liquidity providers have an equal chance to create a competitive limit order between each 6 second block. There is no advantage to submitting your order earlier or later than other LPs, unless you wish to resubmit an order and improve your price based on observed competitive order changes in the mempool. Because all incoming deposits are known, liquidity providers can also predict the swap volume before quoting and offering a price through their orders, limiting the need for aggressive betting. LPs won’t quote more than they are willing to offer, and so should do so consistently, as liquidity orders are not free to update. Regardless, backrunning other LPs to offer the user a better price in the same State Chain block is a desirable quality of the system for the user.

The one way that an LP could bribe a Validator to benefit themselves is to get the block producer to withhold the liquidity updates of other LPs during their block. The statistical likelihood of this being successful is quite low, but if widespread enough could pose a potential issue in the market assumptions of the protocol. Based on our estimations, we don’t think it will be worthwhile developing the software necessary to pull this off given the slim margins in a competitive liquidity market, but we could be wrong. In order for this to be profitable, the delta between prices of the limit orders set in the previous block and pool range order liquidity would need to be far enough away from the “corrupt” LP’s order that the value of the profit is enough to bribe the validator with enough left over to make it worthwhile.&#x20;

Once again though, Validators should be very careful about this behaviour as it is trivial to detect, and with the development of commit-reveal schemes present in other networks, could be permanently mitigated. We do not expect to see this in the wild but have set up alerts to detect it in any case.

\
Overall, the JIT AMM liquidity system is much more suitable for on-chain trading than existing DEXes in terms of its ability to reliably offer users good swap rates without being subject to MEV potential.

### Partial Swaps & Slippage Limits

One of the major challenges with this cross-chain trading system is that aborting a swap is problematic. In Uniswapv3, a swap can be safely aborted at any time, and the tokens left safely in the user’s wallet, even if the swap is only partially completed.

In Chainflip, we don’t assume we know the user’s source wallet. Swaps may be called by other contracts, by exchange wallets, or any number of other sources across any number of chains. Without forcing the user to specify an explicit source chain and address, there is currently no practical way to reverse a swap once it has been initiated that doesn’t compromise user experience or integration complexity.\
\
While it is technically feasible to break up or stall swaps to wait for more favourable conditions, we must always try and get user funds to the destination chain and address by continuing the swap at some stage. The fact that swaps are bundled per block also makes partial swaps much more complicated. Rather than assuming waiting will be better for the user, we attempt to process swaps without explicit slippage limits or partial swaps.\
\
In Uniswapv3, a slippage limit exists such that if a swap drops below a user-specified rate, it is aborted. This feature is also implemented in the JIT AMM, however, the swap can not be truly aborted - it is simply returned to the swap queue. This means that if we implemented standard slippage limits, swaps could end up stuck in the swap queue forever if the pool price never appears below the user-specified limit.

It is for the same reason that we do not place enforceable time limits on swaps - we have no alternative if we do not know the user’s source other than to continue. Widening the time window for LPs to take action on swaps doesn’t pose an obvious problem that negatively impacts users, as it levels the playing field for competitive liquidity provision.

Slippage limits exist in Uniswap to limit the damage caused by potential MEV attacks. In most cases, these attacks apply to pools with limited liquidity or with very few liquidity providers. Given that these attacks are generally not possible in this environment, we accept this tradeoff without much concern as the default flow.

However, slippage limits are in fact implemented within the JIT AMM code too, but not currently used. In future updates, we will add optional slippage limits to swap requests which are parsed to the State Chain. It will require the user to provide source chain information, but the complex part is that we would have to develop functionality to reverse a trade back through pools to get the user back to their source assets, which again, may actually be worse for the user in scenarios where slippage limits are relevant.

Most of the scenarios in which slippage limits would be helpful in the JIT AMM context is where there are limited actors in the system. All assumptions about rational markets break if there is just one actor, or all actors are colluding in the system providing liquidity to a user. It is true that if there were just a single liquidity provider, they could simply withdraw almost all of their liquidity or set a terrible price on the swap before it is executed and effectively steal the swapper’s funds at the end of the block. This scenario also applies to other DEXes, including Univ3, where a solo LP could frontrun the swap transaction with an extreme liquidity alteration. This is overcome in Univ3 with slippage limits, but value can still be extracted this way up to that user-defined limit.

However, as soon as other actors are introduced, the incentive to do this falls away, as other actors will step in to beat your price and win the trade, leaving the actor with nothing but gas fees to pay. Due to the limited number of markets we intend to support and the highly liquid nature of most of these assets (BTC, USDC, ETH, etc), we assume that there will always be multiple non-colluding actors actively trying to participate in the system.&#x20;

### Market Breaking Scenarios

That being said, it is worth discussing what happens when the assumption that competitive liquidity providers are operating at any given time breaks.

There are a few reasons why this might occur:

* The liquidity providers have run out of liquidity for one side of the trade. For example, someone selling massive volumes of BTC could drain the LPs of their USD supply, thus making them unable to bid competitively on the BTC.
* The LPs all collude to under-quote the price, thus giving a bad rate. This also applies to scenarios with a single LP.

The first scenario is partially addressed through our front-end quoter system, which collects quotes from active LPs and also compares it with the pool liquidity to estimate a rate based on a provided swap input. In scenarios where LPs are unable to quote a good rate, the user will see that in the calculation and can choose whether or not to proceed. These rates are not guaranteed though, but the same can be said for any DEX subject to time delay or MEV.

It is also possible to “backrun” swaps under these conditions by making a counter-trade to balance out the assets held by LPs and benefit from an unbalanced pool with arbitrage. Of course, the imbalance would need to be significant enough to warrant the price risk incurred during the witnessing delay, but such trades are possible and would help mitigate the first scenario.

\
Furthermore, slippage limits would mitigate the risk of either scenario impacting swappers doing major trades, but again, the tradeoff for the user experience doesn’t seem immediately necessary or desirable given the added complexity and cost to the user associated with returning assets back to the source.

### Swap Streaming

A final and undeveloped feature that could correct these market-breaking scenarios is something that THORChain calls “swap streaming” which essentially involves breaking up a swap deposit into multiple steps based on its value, and delaying the execution of each swap to allow LPs time to continuously bid and adjust progressively. This is an idea [we had written about earlier](https://blog.chainflip.io/just-in-time-jit/), but given the extreme size of swap needed for this to make sense in Chainflip, we haven’t implemented it.

This would certainly help and make the lives of arbitrageurs and liquidity providers easier, who can more easily predict the value of making competitive counter-swaps or additional liquidity deposits to capture the value of this very large trade.

For this to be relevant though, the swap would need to be so large that it consumes a large percentage of the total liquidity of that asset available in the system. For example, if active LPs only have $2,000,00 USD on hand, a large BTC swap of $1,000,000 would not be quoted well and would need to be broken up. However, a $300,000 trade would be fine to process in one step if the liquidity providers bid competitively, and could be rebalanced within 90 seconds through liquidity deposits.\
\
JIT Liquidity provision means that for the vast majority of users, we can offer extremely good pricing on large swaps without having to delay its execution and impact the user experience.

### Summary

This article should serve as a reference for anyone looking to understand the potential MEV profile of the Chainflip JIT AMM in reference to existing and novel MEV strategies. We welcome anyone interested in the subject to contact us to discuss it in detail if you have any thoughts or future ideas that you think might be relevant to this topic. As the protocol spends more time in the hands of real users and providers, we expect that new ideas will emerge which can add to this conversation.\
