<template>
    <div>
        <div class="    _header  xs:px-2 lg:px5 min-h-15 flex items-center flex justify-between items-center">
            <div class="h-full mob_header flex justify-start items-center">
                <div class="goback">
                    <n-icon size="35" @click="router.go(-1)" v-if="route.name !== 'swap'">
                        <ArrowBack />
                    </n-icon>
                </div>
                <n-image :src="homeLogo" preview-disabled class="logo mr-2 cursor-pointer" @click="refreshPage" width="137"
                    height="50"></n-image>
                <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" class="_menu" />
            </div>
            <div class="Containers_wallet wallbox flex justify-around items-center">
                <div class="flex justify-around items-center px-10 flex-1">
                    <div v-if="isConnected && address" class="flex flex-row ">
                        <div v-show="data?.symbol" class="xs:hidden mb:block">
                            <n-button type="primary" class="rounded-[5px] ">{{ data?.formatted ?
                                truncateFloat(data?.formatted, 6) :
                                0 }}
                                {{ data?.symbol }}</n-button>
                        </div>
                        <div class="ml-2">
                            <n-button type="primary" class="rounded-[5px] " @click="onExplorer"
                                v-if="chain?.id === 168587773">{{
                                    chain?.name }}</n-button>
                            <n-button type="error" class="rounded-[5px] mx-2" v-else @click="switchNetwork">
                                Network Error </n-button>
                        </div>
                        <div>
                            <n-button type="primary" class="rounded-[5px] mx-2" @click="openAddress"
                                v-if="chain?.id === 168587773">{{ structureId(address, 6) }}</n-button>
                        </div>
                    </div>
                    <div v-else class="mx-2">
                        <n-button type="primary" @click="connectWallet">Connect Wallet</n-button>
                    </div>
                    <div
                        class="border border-solid border-[#FF9320] rounded-[5px] px-2 py-1 flex justify-center items-center cursor-pointer">
                        <n-popover :raw="true" content-style="border-radius:11px;" placement="bottom-end" trigger="click"
                            style="box-shadow: none" :class="Slippage.theme">
                            <template #trigger>
                                <div class=" flex justify-center items-center ">
                                    <n-icon size="25" color="#FF9320">
                                        <EllipsisHorizontal />
                                    </n-icon>
                                </div>
                            </template>
                            <div class=" xl:w-[340px] xs:w-[280px] h-[200px] bg-dark-input shadow rounded-3 py-4 px-4">
                                <div class="flex justify-start  text-default-color">
                                    <span class="text-base mx-2">{{ t("Settings") }}</span>
                                </div>
                                <div class="flex-warp flex flex-col justify-start mt-4">
                                    <div
                                        class="flex-1 px-0 py-3 mx-2 my-2  flex flex-row items-center justify-between cursor-pointer">

                                        <!-- <div>
                                            <n-icon size="25" color="#FF9320" v-show="Slippage.theme == 'dark'">
                                                <LightModeOutlined />
                                            </n-icon>
                                            <n-icon size="25" color="#FF9320" v-show="Slippage.theme == 'light'">
                                                <DarkModeOutlined />
                                            </n-icon>

                                        </div> -->
                                        <div class=" text-default-color flex justify-center items-center">

                                            <n-icon size="24" :component="ColorLensSharp" class="mr-1" />
                                            <span> {{ Slippage.theme == 'dark' ? 'Dark' : 'Light' }}</span>
                                        </div>
                                        <n-switch v-model:value="ThemeSwitch" size="large" :on-update:value="SwitchTheme">
                                            <template #checked-icon>
                                                <n-icon :component="DarkModeOutlined" />
                                            </template>
                                            <template #unchecked-icon>
                                                <n-icon :component="LightModeOutlined" />
                                            </template>
                                        </n-switch>
                                    </div>

                                </div>
                                <n-divider />
                                <div class="flex justify-start items-center">
                                    <div>
                                        <n-popover trigger="hover">
                                            <template #trigger>
                                                <div @click="windowOpen('https://twitter.com/tntswap_io')"
                                                    class="flex justify-center items-center cursor-pointer py-1 px-1 bg-[#8f441f] rounded-[50%] mx-2">
                                                    <n-icon size="20" color="#FFF">
                                                        <LogoTwitter />
                                                    </n-icon>
                                                </div>
                                            </template>
                                            <span>{{ t("Twitter") }}</span>
                                        </n-popover>
                                    </div>
                                    <div>
                                        <n-popover trigger="hover">
                                            <template #trigger>

                                                <div @click="windowOpen('https://discord.gg/aueKyAfBdp')"
                                                    class="flex justify-center items-center cursor-pointer py-1 px-1 bg-[#8f441f] rounded-[50%] mx-2">
                                                    <n-icon size="20" color="#FFF">
                                                        <DiscordTwotone />
                                                    </n-icon>
                                                </div>
                                            </template>
                                            <span class="enfont">Discord</span>
                                        </n-popover>
                                    </div>
                                    <div>
                                        <n-popover trigger="hover">
                                            <template #trigger>
                                                <div @click="windowOpen('https://docs.tntswap.io')"
                                                    class="flex justify-center items-center cursor-pointer py-1.5 px-1 bg-[#8f441f] rounded-[50%] mx-2">
                                                    <span class="iconfont icon-gitbook text-[#fff] text-[15px]"></span>
                                                </div>
                                            </template>
                                            <span class="enfont">GitBook</span>
                                        </n-popover>
                                    </div>
                                </div>
                            </div>
                        </n-popover>


                    </div>
                </div>

            </div>
        </div>
        <div class="mob_menu bg-base">
            <div>
                <div>
                    <n-image :src="TNTheaders" width="43" height="35" preview-disabled @click="refreshPage"></n-image>
                    <!-- <n-image :src="TNTheaders" preview-disabled class="logo mr-2 cursor-pointer md:hidden xs:block"
                    @click="refreshPage" width="137" height="50"></n-image> -->
                </div>
                <div class="menu_modal" @click="openMnenu">
                    <n-icon size="35" class="text-default-color">
                        <Menu />
                    </n-icon>
                </div>
            </div>
        </div>
    </div>

    <n-drawer v-model:show="active" class="Router_modal" placement="right">
        <div class="enfont">
            <p class="py-4 px-6 text-lg">Menu</p>
            <n-menu :options="menuOptions" v-model:value="activeKey" />
        </div>
    </n-drawer>
    <n-modal v-model:show="SwitchNetModal" :mask-closable="false">
        <n-card style="width: 450px" title="" class="rounded-[8px]" :bordered="false" size="huge" role="dialog"
            aria-modal="true">
            <div>
                <p class="text-xl">Switch Networks</p>
                <span class="text-[15px]">
                    This app does not support the current connected network. Please switch to Etherum.
                </span>
                <div class="flex justify-center flex-row items-center mt-4">
                    <n-button type="primary" class="h-[35px] mx-2 w-[120px] flex-1" @click="switchNetwork">Switch</n-button>
                    <n-button type="primary" class="h-[35px] w-[120px] flex-1" @click="onDisconnect" strong
                        secondary>Disconnect</n-button>
                </div>

            </div>
        </n-card>
    </n-modal>
</template>
  
<script setup lang="ts">
import { defineComponent, h, ref, onMounted, watch, reactive, Component } from "vue";
import { NIcon } from "naive-ui";
import type { MenuOption } from "naive-ui";
import { useRoute, useRouter, RouterLink } from "vue-router";
// import { callContractMethod } from '@/hooks/UseWeb3'
import DiscordImg from "@/assets/image/discord.svg";
import twitterImg from "@/assets/image/twitter.svg";
import homeLogo from "@/assets/image/logo.png";
import { watchAccount, getAccount, fetchBalance } from "@wagmi/core";

import { useI18n } from "vue-i18n";

import { watchNetwork, getNetwork } from "@wagmi/core";
import {
    Menu,
    ArrowBack,
    ChevronDownOutline,
    LogoTwitter,
    EllipsisHorizontal,
} from "@vicons/ionicons5";
import { LightModeOutlined, DarkModeOutlined, DiscordTwotone, ArrowCircleRightSharp, ColorLensSharp } from '@vicons/material'

import gitbook from "@/assets/image/gitbook.svg";
import { useAccount, useBalance, useNetwork, useDisconnect } from "use-wagmi";
import { UseSlippage } from "@/store/UseSlippage";
import { truncateFloat } from "@/utils/DecimalInterception"
import { useWeb3Modal } from '@web3modal/wagmi/vue';
import { structureId } from "@/utils/structureId";
import TNTheaders from '@/assets/Home/_logo.png'

const Slippage = UseSlippage()
const { chain } = useNetwork()
const { address, isConnected } = useAccount();

const { t } = useI18n();

const { disconnect } = useDisconnect()

let useETH = ref()
const ThemeSwitch = ref(Slippage.theme == 'dark')
let SwitchNetModal = ref(false)

const { data } = useBalance({ address: address.value, chainId: 168587773 })

let SlippageValue = ref();
const modal = useWeb3Modal()


const SwitchTheme = () => {

    ThemeSwitch.value = !ThemeSwitch.value

    if (route.name !== 'Home') {
        Slippage.changeTheme()
    }

}

const getBalance = async (address: `0x${string}`) => {
    useETH.value = await fetchBalance({ address: address, chainId: 168587773 })
    console.log(useETH.value);

}


const connectWallet = () => {
    modal.open()
}


const openAddress = () => {
    modal.open()
}


const switchNetwork = () => {
    modal.open({ view: 'Networks' })
}


const onExplorer = () => {
    window.open(`https://testnet.blastscan.io/address/${address.value}`, '_blank')
}


const Reset = () => {
    SlippageValue.value = null;
    Slippage.updateStatus({
        Slippage_value: 0.01,
        state: "button",
    });
};

const changeSlippage = (value: number) => {
    Slippage.updateStatus({
        Slippage_value: value,
        state: "button",
    });
    SlippageValue.value = "";
};

const updateSlippageInput = (e: number) => {
    SlippageValue.value = e;
    Slippage.updateStatus({
        Slippage_value: e / 10,
        state: "input",
    });
};

let networkInfo = ref<any>({
    id: 0,
    _network: "",
});

let langActive = ref(currentLocale.value == "en" ? true : false);

let overlap = ref(false);

let active = ref(false);

const onDisconnect = () => {
    disconnect()
    SwitchNetModal.value = false
}


const openMnenu = () => {
    activeKey.value = route.name

    active.value = true;
};
const Routerfn = (path: { name: string }) => {
    router.push(path);
    activeKey.value = path.name;
};





const windowOpen = (path: string) => {
    window.open(path, "_blank");
};

const unNetwork = watchNetwork((network) => {
    // console.log(network.chain)
    if (!network.chain) {
        return;
    }
    networkInfo.value = network.chain;
    // console.log(networkInfo.value)

    network?.chain?.id !== network.chains[0].id ? SwitchNetModal.value = true : SwitchNetModal.value = false
    networkInfo.value._network =
        network?.chain?.id === network.chains[0].id
            ? network.chains[0].name
            : netE;
});

let CurrentLang = ref<string>(currentLocale.value);
const route = useRoute();
const router = useRouter();
let Account = ref();
Account.value = getAccount();

const getPathName = (value: string): string => {
    let str: string = value;
    let arr: string[] = str.split("-");
    return arr[0];
};


let activeKey = ref<string | null>(getPathName(String(route.name)));



function refreshPage() {
    // router.push({ name: "Home", })
    router.push({ name: 'Home' })
}
let netE = t('Network Error')

onMounted(() => {

    activeKey.value = route.name
    const { chain, chains } = getNetwork();

    if (!chain) {
        return;
    }
    networkInfo.value = chain;

    networkInfo.value._network =
        chain?.id === chains[0].id ? chains[0].name : netE
});


const menuOptions: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    class: "text-base",
                    to: {
                        name: "Home",
                    },
                },
                { default: () => "Home" }
            ),
        key: "Home",
    },

];
</script>
  
<style scoped lang="scss">
.Jump_herf {
    cursor: pointer;

    max-width: 200px;
    line-height: 28px;
    margin: 0 10px;

    span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0 0 0 10px;
    }
}

.large {
    width: 400px;
    // height: 169px;
    background-color: #ffffff;
    box-shadow: 0px 3px 6px 0px rgba(26, 169, 192, 0.13);
    border-radius: 11px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 20px 20px 10px;

    .large_titel {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        span {
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 30px;
            letter-spacing: 0px;
            color: #001e38;
        }
    }

    .Switchlang {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        margin: 20px 0 15px;
    }

    .iconList {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin: 5px 0 5px;

        >div {
            margin: 5px 0;
        }
    }
}

.Language {
    cursor: pointer;
    margin: 20px;
}

.Containers_wallet {
    display: flex;
    align-items: center;
}


._header {
    font-family: MyFont;

    :deep(.n-menu.n-menu--horizontal) {

        .n-menu-item-content:not(.n-menu-item-content--disabled):not(.n-menu-item-content--selected,
            child-active):focus-within .n-menu-item-content-header {
            color: #1aa9c0;
        }
    }
}

._menu {
    height: 100%;
    width: 100%;
    align-items: center;

    :deep(div) {
        height: 100%;
        vertical-align: middle;
        padding: 0;
        width: 100%;
    }

    :deep(.n-menu-item-content) {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        border: 1px solid transparent;
    }

    :deep(.n-menu-item-content-header) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 0 18px;
        font-size: 16px;
        font-family: "MyFont";
    }
}



.false {
    color: red;
}

.Network {
    font-size: 14px;
    background: #FD7112;
    color: #fff;
    padding: 10px 15px;
}


.mob_menu {
    display: none;
}

._menu {
    cursor: pointer;
    overflow: visible;
}

.Reset {
    cursor: pointer;
    border-radius: 10px;
    padding: 8px 10px;
    background: #8f441f;
    color: #fff;

    &:hover {
        background: #8f441f;
    }
}

.goback {
    display: none;
}

@media screen and (max-width: 750px) {
    ._menu {
        display: none;
    }

    .wallbox {
        position: fixed;
        bottom: 0;
        width: 100vw;
        left: 0;
        height: 60px;
        z-index: 70;
        justify-content: start;
        background: #fcefdb;
    }

    .Language {
        display: none;
    }

    .mob_menu {
        display: block;
        position: fixed;
        top: 0;
        min-width: 100vw;
        left: 0;
        height: 60px;
        z-index: 9;
        // background: #fff;

        &>div {
            height: 100%;
            padding: 0 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .Network {
            display: block;
        }
    }

    .Router_modal {
        width: 50vw;
        max-width: 400px;

        ._routeText {
            color: #ce9336;
        }
    }

    .activeRoute {
        color: #FD7112;
        text-decoration: underline;
    }

    .goback {
        display: block;
    }

    .mob_header {
        display: none;
    }


}

._menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;

    >div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p {
        margin: 0 10px;
    }
}

/* .seting_icon {
    padding: 30px;
  } */








._menu {
    .title {
        font-size: 20px;
    }

    p {
        /* padding: 10px 20px; */
        cursor: pointer;
        border-radius: 10px;
        padding: 8px 10px;
        background: #8f441f;
        color: #fff;

        &:hover {
            background: #8f441f;
        }
    }
}

.active {
    background: #ffeac8;
    color: #8f441f;
    // max-width:55px;
    // box-shadow: 2px 1px 5px 1px rgba(1, 192, 192, 0.14);
}

.tips {
    margin: 10px 0;

    .tips_fonts {
        color: rgb(208, 58, 82);
        font-size: 14px;
        font-weight: 700;
        line-height: 25px;
    }
}

._set_box {
    text-align: center;
    cursor: pointer;
}

@media screen and (max-width: 750px) {
    ._setModal {
        width: 70vw;
        min-width: 70vw;
    }

    .large {
        width: 80vw;
    }
}
</style>
  