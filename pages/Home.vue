<!--  -->
<template>
  <div :class="theme">

    <div class="bg-black text-white flex justify-center items-center min-w-full enfont " ref="containerRef">
      <div class=" w-full flex-1 ">
        <!-- Header -->
        <header>

        </header>
        <header class="md:h-[60px] bg-[#000]">
          <div class="mx-auto  xs:hidden md:block fixed top-[0] w-full z-12  bg-[#000]"
            style="box-shadow: 0px 4px 10px 0px rgba(167, 112, 52, 0.2);">
            <headerMenu></headerMenu>
          </div>
          <div class="mx-auto  xs:block md:hidden">
            <headerMenu></headerMenu>
          </div>

        </header>
        <!-- Main Content -->

        <div class="text-center xs:pt-2 xl:pt-10 pb-4 flex justify-between items-center flex-col mx-auto px-4 md:hidden">
          <h1 class="xl:text-[60px] xs:text-xl xl:line-height-[90px] font-bold  xs:mb-2 xl:mb-6 xl:w-[900px]">
            Welcome to the Seamless and Efficient Decentralized Exchange on Blast network
          </h1>
          <p class="xl:w-[630px] mb-6 md:text-xl xl:line-height-[40px]  xs:text-sm text-[#FFF]">
            TNTSwap is a blockchain innovation platform developed by Blast that integrates DEX, NFT, Game, DAO, and
            more
          </p>
          <div
            class="lunchBt cursor-pointer rounded-[25px]  md:px-6 md:py-3.5 xs:px-4 xs:py-2   flex justify-center items-center">
            <span class='mx-2'>Launch App</span>
            <img class="w-[20px] h-[20px]" :src="upLeft" />
          </div>
        </div>

        <main class="w-full relative flex flex-col  ">

          <section class="xl:min-h-[850px] xl:mt-[0] xs:mt-[20px] flex relative">
            <div class=" flex-1 w-full">
              <div class="h-full  xs:block md:hidden">
                <img class="w-full h-full" :src="videoName" />
              </div>
              <div class="flex justify-center items-center relative xs:hidden md:flex">
                <video muted loop autoplay class="w-full object-cover  min-h-full">
                  <source :src="video" type="video/mp4" />
                </video>

              </div>
            </div>

            <div class='mx-auto absolute w-full xs:hidden md:block'>
              <div class="text-center xs:pt-2 xl:pt-10 pb-4 flex justify-between items-center flex-col mx-auto px-4 ">
                <h1 class="xl:text-[48px] xs:text-xl xl:line-height-[65px] font-bold  xs:mb-2 xl:mb-6 xl:w-[900px]">
                  Welcome to the Seamless and Efficient Decentralized Exchange on Blast network
                </h1>
                <p class="xl:w-[630px] mb-6 md:text-xl xl:line-height-[40px]  xs:text-sm text-[#FFF]">
                  TNTSwap is a blockchain innovation platform developed by Blast that integrates DEX, NFT, Game, DAO, and
                  more
                </p>
                <a class="pdf_herf" :href="PDF" target="_blank">
                  <div
                    class="lunchBt cursor-pointer rounded-[25px]  md:px-6 md:py-3.5 xs:px-4 xs:py-2   flex justify-center items-center">
                    <span class='mx-2'>Read more</span>
                    <img class="w-[20px] h-[20px]" :src="upLeft" />
                  </div>
                </a>
              </div>
            </div>

          </section>
          <section class="xl:my-[100px] xs:my-[40px] min-h-100px flex flex-col justify-center items-center relative">
            <div
              class=" absolute right-0 bg-[#FFFFFF] md:w-[650px] md:h-[100px] xs:w-[90%] xs:h-[80px]  rounded-l-[15px] text-[#000] flex flex-row justify-center items-center">
              <div
                class="md:px-20 xs:px-2 border-r border-solid  border-[#E2E0E0] flex flex-col justify-center items-center">
                <p class="md:text-sm xs:text-xs TVLClass">Total value</p>
                <p class="md:text-xl xs:text-sm"> ${{ compareAndFormatNumber(totalTVL) }}</p>
              </div>
              <div class="md:px-20 xs:px-2 flex flex-col justify-center items-center">
                <p class="md:text-sm xs:text-xs TVLClass">Transaction Total value</p>
                <p class="md:text-xl xs:text-sm"> ${{ compareAndFormatNumber(swapTVL) }}</p>
              </div>
            </div>

            <!-- <TVLShow :totalTvl="totalTVL"  /> -->

          </section>

          <section class="xl:my-[100px] sx:my-[40px] ">
            <div class="flex justify-center items-center mx-auto container md:flex-col xs:flex-col xl:flex-row">
              <img class="xl:w-[550px] md:w-2xl md:h-2xl xl:h-[550px] xs:w-[280px] xs:h-[280px]" :src="MasterDDSSlice" />
              <div class="flex flex-col xl:w-[550px] xl:h-[550px]">
                <h1 class="xl:text-[34px] xl:line-height-[40px] xl:mt-[70px] xs:text-xl">One stop DeFi center</h1>
                <p class="xl:text-base xs:text-sm text-[#87868C] xl:my-[40px] xs:my-[30px]">TNTSwap is a DeFi platform
                  developed based on the Blast blockchain and will build a new DeFi+NFT+Game+DAO ecological paradigm in
                  Blast. We will continue to launch many practical and innovative products for users, such as AI trading
                  assistants, NFTs, games and other innovative market applications. TNTSwap will reduce operating steps as
                  much as possible while ensuring the safety of user accounts and property, increase the revenue
                  dimension, and lengthen the revenue cycle, allowing users to easily use DAPP to obtain multiple returns.
                </p>
                <div class="flex justify-start items-center">
                  <div class="lunchBt rounded-[25px] cursor-pointer   px-6 py-3 mx-2 flex justify-center items-center "
                    @click="windowOpen('https://docs.tntswap.io')">
                    <span class="xs:text-sm md:text-base">open docs</span>
                    <img class="w-[20px] h-[20px]" :src="upLeft" />
                  </div>

                </div>
              </div>
            </div>
          </section>
          <section class="mb:my-[90px] xs:my-[40px] ">
            <div class="mx-auto container flex xl:justify-around xs:flex-col md:flex-row flex-wrap">
              <div
                class="md:w-[400px] md-h-[380px] md:w-[400px] xs:w-[80vw] xs:h-full xs:my-[20px] xl:line-height-[9  0px]  xl:w-[460px] xl:h-[450px] flex justify-center items-center md:mx-[20px] xl:text-[60px] font-bold">
                TNTSwap Products
              </div>
              <div
                class="md:w-[400px] md-h-[380px] xs:w-[80vw] xs:h-[80vw] xl:w-[450px] xl:h-[440px] flex bg-[#0F0F0F] rounded-[10px]  md:mx-[20px] my-3">
                <div class="px-[30px] py-[25px] flex justify-between items-center flex-col flex-1 cursor-pointer">
                  <div class="flex justify-start items-center w-full">
                    <span class="md:text-3xl xs:text-xl md:mt-[20px]">
                      TNTSWAP APP (Decentralized Wallet)
                    </span>
                  </div>
                  <div class="w-full flex justify-center items-center bglist1 flex-1">
                    <img :src="listImg1" class="showImg  max-w-[200px] max-h-[200px]">
                  </div>
                  <div class="flex justify-end items-center w-full">
                    <img :src="listIcon" class="w-[20xp] h-[20px] ">
                  </div>
                </div>

              </div>
              <div
                class="md:w-[400px] md-h-[380px] xs:w-[80vw] xs:h-[80vw]  xl:w-[450px] xl:h-[440px] flex bg-[#0F0F0F] rounded-[10px]  md:mx-[20px] my-3">
                <div class="px-[30px] py-[25px] flex justify-between items-center flex-col flex-1 cursor-pointer">
                  <div class="flex justify-start items-center w-full">
                    <span class="md:text-3xl xs:text-xl md:mt-[20px]">
                      DEX
                    </span>
                  </div>
                  <div class="w-full flex justify-center  items-center bglist2 flex-1"> <img :src="listImg2"
                      class="showImg  max-w-[220px] max-h-[200px]"></div>

                  <div class="flex justify-end items-center w-full">
                    <img :src="listIcon" class="w-[20xp] h-[20px] ">
                  </div>
                </div>

              </div>
              <div
                class="md:w-[400px] md-h-[380px] xs:w-[80vw] xs:h-[80vw] xl:w-[450px] xl:h-[440px] flex bg-[#0F0F0F] rounded-[10px]  md:mx-[20px] my-3">
                <div class="px-[30px] py-[25px] flex justify-between items-center flex-col flex-1 cursor-pointer">
                  <div class="flex justify-start items-center w-full">
                    <span class="md:text-3xl xs:text-xl md:mt-[20px]">
                      Twelve Constellations NFT
                    </span>
                  </div>
                  <div class="w-full flex justify-center  items-center bglist3 flex-1"><img :src="listImg3"
                      class="showImg max-w-[250px] max-h-[250px]"></div>

                  <div class="flex justify-end items-center w-full">
                    <img :src="listIcon" class="w-[20xp] h-[20px] ">
                  </div>
                </div>

              </div>
              <div
                class="md:w-[400px] md-h-[380px] xs:w-[80vw] xs:h-[80vw] xl:w-[450px] xl:h-[440px] flex bg-[#0F0F0F] rounded-[10px]  md:mx-[20px] my-3">
                <div class="px-[30px] py-[25px] flex justify-between items-center flex-col flex-1 cursor-pointer">
                  <div class="flex justify-start items-center w-full">
                    <span class="md:text-3xl xs:text-xl md:mt-[20px]">
                      Ecological Games
                    </span>
                  </div>
                  <div class="w-full flex justify-center items-center bglist4 flex-1"><img :src="listImg4"
                      class="showImg max-w-[250px] max-h-[250px]"></div>

                  <div class="flex justify-end items-center w-full">
                    <img :src="listIcon" class="w-[20xp] h-[20px] ">
                  </div>
                </div>

              </div>
              <div
                class="md:w-[400px] md-h-[380px] xs:w-[80vw] xs:h-[80vw] xl:w-[450px] xl:h-[440px] flex bg-[#0F0F0F] rounded-[10px]  md:mx-[20px] my-3">
                <div class="px-[30px] py-[25px] flex justify-between items-center flex-col flex-1 cursor-pointer">
                  <div class="flex justify-start items-center w-full">
                    <span class="md:text-3xl xs:text-xl md:mt-[20px]">
                      DAO
                    </span>
                  </div>
                  <div class="w-full flex justify-center items-center bglist5 flex-1"><img :src="listImg5"
                      class="showImg max-w-[250px] max-h-[250px]"></div>
                  <div class="flex justify-end items-center w-full">
                    <img :src="listIcon" class="w-[20xp] h-[20px] ">
                  </div>
                </div>

              </div>


            </div>
          </section>


          <div class=' relative overflow-hidden xs:hidden md:block mt-[120px] '>
            <!-- <img :src='bgBottom' class='w-[350px] absolute top-[-20px] left-[10px]' /> -->
            <img :src='bgTop' class='w-[350px] absolute bottom-[200px] left-[300px]' />
            <section class="mb-[40px]  ">
              <div class=" mx-auto  flex justify-center relative">

                <div class="justify-center items-start flex-row flex flex-1">
                  <div class="flex-1  items-start flex xl:flex-row justify-end xs:flex-col rounded-[12px]">
                    <div class="flex-1 h-full xl:mr-[200px] xl:mt-[200px] max-w-[400px]  xs:text-center xs:mb-[25px]">
                      <span class="md:text-[60px] md:line-height-[75px] xs:text-2xl ">TNTSwap Features</span>
                    </div>
                  </div>
                  <div class='scrollable-div max-h-[920px] _animation flex-1 scroll-container' @scroll="scroll">
                    <div
                      class="rounded-[12px] section4-view xl:w-[650px] xl:h-[400px] xs:mb-[25px] md:mb-[80px] flex justify-start items-center flex-col px-10  xs:py-[20px] xl:py-0"
                      :style="`opacity:${hiddenFn(250)}`">
                      <p class="text-3xl w-full xl:my-[60px] xs:my-[20px]">AMM Trading</p>
                      <span class="xl:text-xl xs:text-md text-[#717276]">
                        The decentralized trading platform based on the Automatic Market making mechanism (AMM) of the
                        fund pool developed in Blast allows the exchange of any two tokens on Blast. It is also possible
                        to further increase revenue through the methods of transaction mining and liquidity mining.
                      </span>
                    </div>
                    <div class="flex items-center w-full " :style="`opacity:${hiddenFn(1000)}`">
                      <div
                        class="rounded-[12px] section4-view xl:w-[650px] xl:h-[400px] xs:mb-[25px] md:mb-[80px] flex justify-start items-center flex-col px-10 xs:py-[20px] xl:py-0">
                        <p class="text-3xl w-full xl:my-[60px] xs:my-[20px]">Fair Mining</p>
                        <span class="xl:text-xl xs:text-md text-[#717276] ">
                          Users can obtain mining rewards by trading on TNTSwap, providing liquidity, participating in
                          ecological applications, NFT modules, etc.
                        </span>
                      </div>
                    </div>
                    <div class="flex  items-center w-full " :style="`opacity:${hiddenFn(1800)}`">
                      <div
                        class="rounded-[12px] section4-view xl:w-[650px] xl:h-[400px] xs:mb-[25px] md:mb-[80px] flex justify-start items-center flex-col px-10 xs:py-[20px] xl:py-0">
                        <p class="text-3xl w-full xl:my-[60px] xs:my-[20px]">One-stop DeFi Hub</p>
                        <span class="xl:text-base xs:text-md text-[#717276] ">
                          TNTSwap will build a one-stop DiFi platform on Blast, integrating DEX, NFT, Game,DAO, etc.
                          Although DeFi is in the early stage of development, we can still make more user-friendly
                          iterative products leading the market on this basis, so that users from different fields can try
                          to trade cryptocurrency. To provide users with the most cutting-edge blockchain application
                          services, innovation will be the booster of the rapid development of TNTSwap. Through a series
                          of ecological applicationsWill continueEmpower TNT.

                        </span>
                      </div>
                    </div>
                    <div class="flex  items-center w-full ">
                      <div
                        class="rounded-[12px] section4-view xl:w-[650px] xl:h-[400px] xs:mb-[25px] md:mb-[80px] flex justify-start items-center flex-col px-10 xs:py-[20px] xl:py-0">
                        <p class="text-3xl w-full xl:my-[60px] xs:my-[20px]">Handling fee</p>
                        <span class="xl:text-xl xs:text-md text-[#717276] ">
                          The transaction on TNTSwap will be charged 0.2% of the transaction fee. The transaction fee and
                          other system income of TNTSwap will be used in full to add liquidity to the TNT trading pool or
                          buy back the TNT token. The specific strategy will be decided by vote.
                        </span>
                      </div>
                    </div>
                    <div class="flex  items-center w-full ">
                      <div
                        class="rounded-[12px] section4-view xl:w-[650px] xl:h-[400px] xs:mb-[25px] md:mb-[80px] flex justify-start items-center flex-col px-10 xs:py-[20px] xl:py-0">
                        <p class="text-3xl w-full xl:my-[60px] xs:my-[20px]">AI Trading Assistant</p>
                        <span class="xl:text-xl xs:text-md text-[#717276] ">
                          The AI trading assistant enhances trading decisions through artificial intelligence. It analyzes
                          market trends, price fluctuations, and relevant information using algorithms and big data
                          analysis. This tool provides real-time suggestions and decision support for traders, enabling
                          quick data processing, pattern recognition, and wise trading decisions.
                        </span>
                      </div>
                    </div>
                    <div class="flex  items-center w-full ">
                      <div
                        class="rounded-[12px] section4-view xl:w-[650px] xl:h-[400px] xs:mb-[25px] md:mb-[80px] flex justify-start items-center flex-col px-10 xs:py-[20px] xl:py-0">
                        <p class="text-3xl w-full xl:my-[60px] xs:my-[20px]">Vault</p>
                        <span class="xl:text-base xs:text-md text-[#717276] ">
                          In the unique incentive pool in the TNTSwap ecosystem, all TNT produced by mining will
                          automatically enter the Vault by default and with a three-month freeze period. You can choose to
                          continue to mortgage into the Vault Pool to enjoy dividends. If you choose to withdraw the
                          proceeds in advance, a 50% penalty will be charged. The fine will automatically enter the Vault
                          Pool, and the users locked in the Vault will be distributed weekly according to the proportion.
                          The TNT obtained by the user when locked in the Vault Pool can be withdrawn at any time.
                        </span>
                      </div>
                    </div>
                    <div class="flex  items-center w-full ">
                      <div
                        class="rounded-[12px] section4-view xl:w-[650px] xl:h-[400px] xs:mb-[25px] md:mb-[80px] flex justify-start items-center flex-col px-10 xs:py-[20px] xl:py-0">
                        <p class="text-3xl w-full xl:my-[60px] xs:my-[20px]">Low Transaction fee and fast closing</p>
                        <span class="xl:text-xl xs:text-md text-[#717276] ">
                          Choosing Blast over Ethereum, TnTSwap prioritizes low gas fees and efficient transactions.
                          Blast, being a rapidly growing and widely recognized Ethereum Layer 2 network, is the optimal
                          choice for TNTSwap.
                        </span>
                      </div>
                    </div>
                    <div class="flex  items-center w-full ">
                      <div
                        class="rounded-[12px] section4-view xl:w-[650px] xl:h-[400px] xs:mb-[25px] md:mb-[80px] flex justify-start items-center flex-col px-10 xs:py-[20px] xl:py-0">
                        <p class="text-3xl w-full xl:my-[60px] xs:my-[20px]">Multi-chain interoperability for transaction
                          expansion</p>
                        <span class="xl:text-xl xs:text-md text-[#717276] ">
                          We will start the development of cross-chain bridges in the second phase, bringing more
                          high-quality encrypted assets into Blast ecology,TNTSwap will support more cross-chain
                          transactions, and the expansion of IDO will expand the value of TNT tokens raised.
                        </span>
                      </div>
                    </div>
                    <div class="flex  items-center w-full ">
                      <div
                        class="rounded-[12px] section4-view xl:w-[650px] xl:h-[400px] xs:mb-[25px] md:mb-[80px] flex justify-start items-center flex-col px-10 xs:py-[20px] xl:py-0">
                        <p class="text-3xl w-full xl:my-[60px] xs:my-[20px]">DAO Community Autonomy</p>
                        <span class="xl:text-base xs:text-md text-[#717276] ">
                          TNTSwap is founded by a group of enthusiasts who love blockchain technology and decentralized
                          concepts and is confident about DeFi and the future of decentralization. The goal is to create
                          an organization based on blockchain technology and the community of DAO organizations, with the
                          idea of creating community value. It is hoped that the management of the project will eventually
                          be returned to the community and that decentralized operations will be truly realized.
                        </span>
                      </div>
                    </div>
                  </div>

                </div>



              </div>

            </section>
          </div>
          <section class="mb-[40px] mx-[10px]  mb:mt-[120px] xs:mt-[40px] xs:block md:hidden" ref="scrollContainer">
            <div class=" mx-auto  flex justify-center relative">

              <div class="justify-center items-center flex-col flex">
                <div class="flex-1 w-full items-start flex xl:flex-row xs:flex-col rounded-[12px]">
                  <div class=" xl:mr-[200px] xs:text-center xs:mb-[25px] xs:mx-auto">
                    <span class="md:text-[60px] md:line-height-[75px] xs:text-2xl ">TNTSwap Features</span>
                  </div>
                  <div class='overflow-auto  _animation flex-1 scroll-container'>
                    <div
                      class="rounded-[12px] section4-view xl:w-[650px] xl:h-[400px] xs:mb-[25px] md:mb-[80px] flex justify-start items-center flex-col xs:px-5  xs:py-[20px] xl:py-0">
                      <p class="text-3xl w-full xl:my-[60px] xs:my-[20px]">AMM Trading</p>
                      <span class="xl:text-base xs:text-md text-[#717276]">
                        The decentralized trading platform based on the Automatic Market making mechanism (AMM) of the
                        fund pool developed in Blast allows the exchange of any two tokens on Blast. It is also possible
                        to further increase revenue through the methods of transaction mining and liquidity mining.
                      </span>
                    </div>
                    <div class="flex items-center w-full ">
                      <div
                        class="rounded-[12px] section4-view xl:w-[650px] xl:h-[400px] xs:mb-[25px] md:mb-[80px] flex justify-start items-center flex-col xs:px-5 xs:py-[20px] xl:py-0">
                        <p class="text-3xl w-full xl:my-[60px] xs:my-[20px]">Fair Mining</p>
                        <span class="xl:text-base xs:text-md text-[#717276] ">
                          Users can obtain mining rewards by trading on TNTSwap, providing liquidity, participating in
                          ecological applications, NFT modules, etc.
                        </span>
                      </div>
                    </div>
                    <div class="flex  items-center w-full ">
                      <div
                        class="rounded-[12px] section4-view xl:w-[650px] xl:h-[400px] xs:mb-[25px] md:mb-[80px] flex justify-start items-center flex-col px-5 xs:py-[20px] xl:py-0">
                        <p class="text-3xl w-full xl:my-[60px] xs:my-[20px]">One-stop DeFi Hub</p>
                        <span class="xl:text-base xs:text-md text-[#717276] ">
                          TNTSwap will build a one-stop DiFi platform on Blast, integrating DEX, NFT, Game,DAO, etc.
                          Although DeFi is in the early stage of development, we can still make more user-friendly
                          iterative products leading the market on this basis, so that users from different fields can try
                          to trade cryptocurrency. To provide users with the most cutting-edge blockchain application
                          services, innovation will be the booster of the rapid development of TNTSwap. Through a series
                          of ecological applicationsWill continueEmpower TNT.

                        </span>
                      </div>
                    </div>
                    <div class="flex  items-center w-full ">
                      <div
                        class="rounded-[12px] section4-view xl:w-[650px] xl:h-[400px] xs:mb-[25px] md:mb-[80px] flex justify-start items-center flex-col px-5 xs:py-[20px] xl:py-0">
                        <p class="text-3xl w-full xl:my-[60px] xs:my-[20px]">Handling fee</p>
                        <span class="xl:text-base xs:text-md text-[#717276] ">
                          The transaction on TNTSwap will be charged 0.2% of the transaction fee. The transaction fee and
                          other system income of TNTSwap will be used in full to add liquidity to the TNT trading pool or
                          buy back the TNT token. The specific strategy will be decided by vote.
                        </span>
                      </div>
                    </div>
                    <div class="flex  items-center w-full ">
                      <div
                        class="rounded-[12px] section4-view xl:w-[650px] xl:h-[400px] xs:mb-[25px] md:mb-[80px] flex justify-start items-center flex-col px-5 xs:py-[20px] xl:py-0">
                        <p class="text-3xl w-full xl:my-[60px] xs:my-[20px]">AI Trading Assistant</p>
                        <span class="xl:text-base xs:text-md text-[#717276] ">
                          The AI trading assistant enhances trading decisions through artificial intelligence. It analyzes
                          market trends, price fluctuations, and relevant information using algorithms and big data
                          analysis. This tool provides real-time suggestions and decision support for traders, enabling
                          quick data processing, pattern recognition, and wise trading decisions.
                        </span>
                      </div>
                    </div>
                    <div class="flex  items-center w-full ">
                      <div
                        class="rounded-[12px] section4-view xl:w-[650px] xl:h-[400px] xs:mb-[25px] md:mb-[80px] flex justify-start items-center flex-col px-5 xs:py-[20px] xl:py-0">
                        <p class="text-3xl w-full xl:my-[60px] xs:my-[20px]">Vault</p>
                        <span class="xl:text-base xs:text-md text-[#717276] ">
                          In the unique incentive pool in the TNTSwap ecosystem, all TNT produced by mining will
                          automatically enter the Vault by default and with a three-month freeze period. You can choose to
                          continue to mortgage into the Vault Pool to enjoy dividends. If you choose to withdraw the
                          proceeds in advance, a 50% penalty will be charged. The fine will automatically enter the Vault
                          Pool, and the users locked in the Vault will be distributed weekly according to the proportion.
                          The TNT obtained by the user when locked in the Vault Pool can be withdrawn at any time.
                        </span>
                      </div>
                    </div>
                    <div class="flex  items-center w-full ">
                      <div
                        class="rounded-[12px] section4-view xl:w-[650px] xl:h-[400px] xs:mb-[25px] md:mb-[80px] flex justify-start items-center flex-col px-5 xs:py-[20px] xl:py-0">
                        <p class="text-3xl w-full xl:my-[60px] xs:my-[20px]">Low Transaction fee and fast closing</p>
                        <span class="xl:text-base xs:text-md text-[#717276] ">
                          Choosing Blast over Ethereum, TnTSwap prioritizes low gas fees and efficient transactions.
                          Blast, being a rapidly growing and widely recognized Ethereum Layer 2 network, is the optimal
                          choice for TNTSwap.
                        </span>
                      </div>
                    </div>
                    <div class="flex  items-center w-full ">
                      <div
                        class="rounded-[12px] section4-view xl:w-[650px] xl:h-[400px] xs:mb-[25px] md:mb-[80px] flex justify-start items-center flex-col px-5 xs:py-[20px] xl:py-0">
                        <p class="text-3xl w-full xl:my-[60px] xs:my-[20px]">Multi-chain interoperability for transaction
                          expansion</p>
                        <span class="xl:text-base xs:text-md text-[#717276] ">
                          We will start the development of cross-chain bridges in the second phase, bringing more
                          high-quality encrypted assets into Blast ecology,TNTSwap will support more cross-chain
                          transactions, and the expansion of IDO will expand the value of TNT tokens raised.
                        </span>
                      </div>
                    </div>
                    <div class="flex  items-center w-full ">
                      <div
                        class="rounded-[12px] section4-view xl:w-[650px] xl:h-[400px] xs:mb-[25px] md:mb-[80px] flex justify-start items-center flex-col px-5 xs:py-[20px] xl:py-0">
                        <p class="text-3xl w-full xl:my-[60px] xs:my-[20px]">DAO Community Autonomy</p>
                        <span class="xl:text-base xs:text-md text-[#717276] ">
                          TNTSwap is founded by a group of enthusiasts who love blockchain technology and decentralized
                          concepts and is confident about DeFi and the future of decentralization. The goal is to create
                          an organization based on blockchain technology and the community of DAO organizations, with the
                          idea of creating community value. It is hoped that the management of the project will eventually
                          be returned to the community and that decentralized operations will be truly realized.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>


              </div>



            </div>

          </section>
          <section
            class="md:mt-[90px] xs:mt-[10px] mb-[20px] md:w-full xl:min-h-[890px] xl:w-full flex flex-col bg-[#0E0D10]">
            <div class="w-full pt-[40px]">
              <p class="xl:w-[1100px] md:text-[60px] Inter-Bold xl:my-[60px] xs:my-[20px] text-center mx-auto xs:text-xl">
                TNTSwap Roadmap
              </p>
            </div>
            <div class="flex-1 relative">
              <div class="absolute bg-[#FF8437] w-full h-2 top-[80px] xs:hidden  md:hidden xl:block"> </div>
              <div class="flex xl:flex-row container mx-auto xs:flex-col">
                <div class="flex xs:justify-start xl:justify-center items-stretch flex-row flex xs:my-[0] xl:my-[40px]"
                  style="flex:4">
                  <div class="relative">
                    <div
                      class="logos relative bg-[#FF8437] rounded-[50%] md:w-[85px] md:h-[85px] xs:w-[60px] xs:h-[60px] flex justify-center items-center z-[2]">
                      <div class='bg-[#000] md:w-[68px] xs:w-[50px] rounded-[50%] flex justify-center items-center'>
                        <img :src="logoImg" class="w-full h-full">
                      </div>
                    </div>
                    <div class="w-[7px] xl:h-[390px] xs:h-full xs:top-[0px] z-[1] bg-[#FF8437] absolute left-50%"
                      style="transform: translate(-4px,0 );">
                    </div>
                  </div>
                  <div>
                    <div class="xl:mt-[110px] xs:mt-[20px] xs:ml-[10px]">
                      <p class="text-2xl">Q3&4 2023</p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">TnTSwap project initiation and completion of founding team
                          formation</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">Complete DEX module design, development, and NFT
                          testing</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">NFT Game module design</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">Ecological game module design</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">Vault module design</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">Design and Development of TNTSwap Mobile APP</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">Design of AI Trading Assistant Module</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">Community Forum Module Design</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex xs:justify-start xl:justify-center items-stretch flex-row flex xs:my-[0]  xl:my-[40px]"
                  style="flex:4">
                  <div class="relative">
                    <div
                      class="logos relative bg-[#FF8437] rounded-[50%] md:w-[85px] md:h-[85px] xs:w-[60px] xs:h-[60px] flex justify-center items-center z-[2]">
                      <div class='bg-[#000] md:w-[68px] xs:w-[50px] rounded-[50%] flex justify-center items-center'>
                        <img :src="logoImg" class="w-full h-full">
                      </div>
                    </div>
                    <div class="w-[7px] xl:h-[390px] xs:h-full xs:top-[0px] z-[1] bg-[#FF8437] absolute left-50%"
                      style="transform: translate(-4px,0 );">
                    </div>
                  </div>
                  <div>
                    <div class="xl:mt-[110px] xs:mt-[20px] xs:ml-[10px]">
                      <p class="text-2xl">Q1 2024</p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">TNTSwap official website launched</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">NFT game module development and testing</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">Development and testing of AI trading assistant
                          module</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">Development and testing of the first ecological game
                          DAPP</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">TNTSwap V1 released and gradually launched DEX, NFT, Game,
                          and FarmCommunity building</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">Locus module design and development</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">Start the first round of community airdrops</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">TNTSwap mobile app launched</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex xs:justify-start xl:justify-center items-stretch flex-row flex xs:my-[0] xl:my-[40px]"
                  style="flex:4">
                  <div class="relative ">
                    <div
                      class="logos relative bg-[#FF8437] rounded-[50%] md:w-[85px] md:h-[85px] xs:w-[60px] xs:h-[60px] flex justify-center items-center z-[2]">
                      <div class='bg-[#000] md:w-[68px] xs:w-[50px] rounded-[50%] flex justify-center items-center'>
                        <img :src="logoImg" class="w-full h-full">
                      </div>
                    </div>
                    <div class="w-[7px] xl:h-[390px] xs:h-full xs:top-[0px] z-[1] bg-[#FF8437] absolute left-50%"
                      style="transform: translate(-4px,0 );">
                    </div>
                  </div>
                  <div>
                    <div class="xl:mt-[110px] xs:mt-[20px] xs:ml-[10px]">
                      <p class="text-2xl">Q2 2024</p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">The second round of air drop from TNTSwap community</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">TNTSwap Equity Token TNT Launched</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">TNTSwap Genesis Mining</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">Community forum launched</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">TNTSwap APP Upgrade</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">Multi regional community construction</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">TNTSwap V2 Contract Design and Development</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex xs:justify-start xl:justify-center items-stretch flex-row flex xs:my-[0] xl:my-[40px] "
                  style="flex:4">
                  <div class="relative ">
                    <div
                      class="logos relative bg-[#FF8437] rounded-[50%] md:w-[85px] md:h-[85px] xs:w-[60px] xs:h-[60px] flex justify-center items-center z-[2]">
                      <div class='bg-[#000] md:w-[68px] xs:w-[50px] rounded-[50%] flex justify-center items-center'>
                        <img :src="logoImg" class="w-full h-full">
                      </div>
                    </div>
                    <div class="w-[7px] xl:h-[390px] xs:h-full bg-[#FF8437] absolute left-50% xs:top-[0] z-[1]"
                      style="transform: translate(-4px,0 );">
                    </div>
                  </div>
                  <div>
                    <div class="xl:mt-[110px] xs:mt-[20px] xs:ml-[10px]">
                      <p class="text-2xl">Q3 2024</p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">TNTSwap V2 Release</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">Cross chain bridge development</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">Upgrade of AI Trading Assistant</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light  ">NFT Game Upgrade</span>
                      </p>
                      <p class="my-6 flex flex-row items-start justify-start">
                        <img :src="QA">
                        <span class="mx-2 text-xs font-light ">Introduction of derivative trading</span>
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </main>
        <!-- Footer -->
        <footer class="py-15 ">
          <div class='container mx-auto'>
            <div class='flex justify-between items-center md:flex-row xs:flex-col'>
              <div class="flex flex-col items-start justify-center">
                <n-image :src="homeLogo" preview-disabled class="logo mr-2" width="137" height="50"></n-image>
                <span class="mx-4 text-base my-[20px]">© 2023 TNTSWAP Labs UI (Cayman) Ltd. |  All rights reserved</span>
              </div>
              <div class='flex justify-center items-center flex-row'>
                <div class="mx-6 cursor-pointer" @click="windowOpen('https://twitter.com/tntswap_io')">
                  <n-icon size="20" color="#FFF">
                    <LogoTwitter />
                  </n-icon>
                </div>
                <div class="mx-6 cursor-pointer" @click="windowOpen('https://discord.gg/aueKyAfBdp')">
                  <n-icon size="20" color="#FFF">
                    <DiscordTwotone />
                  </n-icon>
                </div>
                <div class="mx-6 cursor-pointer" @click="windowOpen('https://docs.tntswap.io')">
                  <n-icon size="20" color="#FFF">
                    <span class="iconfont icon-gitbook text-[#fff] text-[15px]"></span>
                  </n-icon>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>

  </div>
</template>
  
<script setup lang='ts'>
import { ref, onMounted, onBeforeUnmount } from 'vue'

import headerMenu from '@/components/headerMenu/headerMenu.vue';
import video from '@/assets/video/TNT.mp4'
import MasterDDSSlice from "@/assets/Home/MasterDDSSlice.png"

import listImg1 from "@/assets/Home/listImg1.png"
import listImg2 from "@/assets/Home/listImg2.png"
import listImg3 from "@/assets/Home/listImg3.png"
import listImg4 from "@/assets/Home/listImg4.png"
import listImg5 from "@/assets/Home/listImg5.png"

import listIcon from '@/assets/Home/listIcon.png'

import logoImg from '@/assets/Home/logo.png'
import QA from '@/assets/Home/QA.png'
import homeLogo from "@/assets/image/logo.png";

import upLeft from '@/assets/Home/upleft.png'

import bgTop from '@/assets/Home/bg-top.png'

import videoName from '@/assets/Home/videoName.avif'

import {
  LogoTwitter,
} from "@vicons/ionicons5";
import { DiscordTwotone } from '@vicons/material'
import { UseSlippage } from "@/store/UseSlippage";
import { storeToRefs } from 'pinia'
import PDF from '@/assets/pdf/TNTSwapShitePaper2.0.pdf'

import { getTVL } from '@/api/axiosApi';
import { compareAndFormatNumber } from '@/utils/BigNumber';
import { UserBalanceState } from '@/store/UserBalanceState';
import { getLocalStorageItem } from '@/utils/Storage';


const Slippage = UseSlippage()
const { theme } = storeToRefs(Slippage)
const containerRef = ref<HTMLElement | undefined>(undefined)
const BalanceState = UserBalanceState()
const { swapTVL, totalTVL } = storeToRefs(BalanceState)


const onGetTVL = async () => {
  const res = await getTVL()
  if (res?.code === 1) {
    swapTVL.value = res.data.swapTVL
    totalTVL.value = res.data.totalTVL
  }

}

onBeforeUnmount(() => {
  const _theme = getLocalStorageItem('theme')
  if (_theme) {
    theme.value = _theme
  }
  if (TimeOut) {
    clearInterval(TimeOut)
  }
})

let clientHeight = ref()
let scrollHeight = ref()
let scrollTop = ref()

const scroll = (event: { target: { clientHeight: any; scrollHeight: any; scrollTop: any; }; }) => {
  clientHeight.value = event.target.clientHeight
  scrollHeight.value = event.target.scrollHeight
  scrollTop.value = event.target.scrollTop

}

const hiddenFn = (value: number) => {


  const opacity = 1 - Math.min(scrollTop.value / value, 1);



  return opacity

}

let TimeOut: NodeJS.Timeout

onMounted(() => {
  onGetTVL()
  TimeOut = setInterval(() => {
    onGetTVL()
  }, 12000)
  theme.value = 'dark'

})

const windowOpen = (path: string) => {
  window.open(path, "_blank");
};


</script>
<style lang='scss' scoped>
.lunchBt {
  background: linear-gradient(93deg, #FF8437 0%, #FF411E 100%);
}

.luchBt2 {
  background: linear-gradient(180deg, #18161C 0%, #121014 100%);
}

.section4-view {
  background: #0F0F0F;

  box-sizing: border-box;
  border: 1px solid #2B303B;
}

.section5-bg {
  background: url('../../assets/Home/bg.png') 100% no-repeat;
  // background-size: 100% 100%;
  margin-top: 5px;
}

.Inter-Bold {
  font-family: Inter-Bold;
  font-weight: 700;

}

.bglist1 {
  background: url('../../assets/Home/bg1.png') 100% no-repeat;
  background-size: 100% 100%;
}

.bglist2 {
  background: url('../../assets/Home/bg2.png') 100% no-repeat;
  background-size: 100% 100%;
}

.bglist3 {
  background: url('../../assets/Home/bg3.png') 100% no-repeat;
  background-size: 100% 100%;
}

.bglist4 {
  background: url('../../assets/Home/bg4.png') 100% no-repeat;
  background-size: 100% 100%;
}

.bglist5 {
  background: url('../../assets/Home/bg5.png') 100% no-repeat;
  background-size: 100% 100%;
}


._animation {
  transition: all 0.5s line;
}

.scroll-container {
  /* Set the height as needed */
  overflow-y: scroll;
  /* Enable vertical scrolling */
  scrollbar-width: thin;
  /* Set the width of the scrollbar to a thin value (browser-specific) */

}

.scroll-container::-webkit-scrollbar {
  width: 0;
  /* Set the width of the scrollbar for WebKit browsers */
}



@media screen and (max-width: 750px) {

  .showImg {
    width: 150px;
  }
}


.pdf_herf {
  text-decoration: none;

  color: inherit;

  cursor: pointer;

}


.scrollable-div {

  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  -ms-overflow-style: none;
}


.scrollable-div::-webkit-scrollbar {
  width: thin;
}

.scrollable-div::-webkit-scrollbar-thumb {
  background-color: transparent;
}
</style>