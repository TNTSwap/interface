
import { fetchBalance } from '@wagmi/core'
import { defineStore } from 'pinia'


export const UserBalanceState = defineStore({
    id: 'Balance',
    state: () => ({
        Balance: '0',
        TNTBalance: '0',
        blockNumber: 0,
        swapTVL: '0',
        totalTVL:'0'
    }),
    actions: {

    }
})
