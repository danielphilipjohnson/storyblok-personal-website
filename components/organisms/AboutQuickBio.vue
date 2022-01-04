<template>
  <article class="max-w-4xl px-8 mx-auto" aria-label="quick bio">
    <h2 class="pb-4 mb-4 text-2xl font-bold border-b border-grey">
      <span role="img" aria-label="trophy">📔</span> My Developer Journey
    </h2>
    <div>
      <section class="flex flex-col mb-8 md:flex-row">
        <div class="w-full pr-8 md:w-3/12 lg:w-1/4">
          <figure class="mb-4">
            <div class="pr-4 object-fit">
              <img
                alt="4 year old Daniel Johnson playing in the garden"
                src="~/assets/img/me-as-a-child.jpg"
              />
            </div>
            <figcaption class="py-2 text-xs text-center text-gray">
              4 year old Daniel Johnson playing in the garden
            </figcaption>
          </figure>
        </div>
        <div class="w-full md:w-9/12 lg:w-3/4">
          <b>When did I discover programming:</b> Well, when I was a young
          child, my mother, in her spare time would copy code from a manual to
          make games run on the<a
            class="bio-link"
            href="https://en.wikipedia.org/wiki/Commodore_64"
            >Commodore 64 (CBM 64)</a
          >but putting them into memory. She kept this console for quite some
          time it was the closest thing we had to a computer. The first game I
          remember helping run was<a
            class="bio-link"
            href="https://www.retrogamer.net/retro_games80/blue-meanies-from-outer-space/"
            >Blue Meanies from Outer Space</a
          >
          <p class="mb-4">
            . It was so exciting to see it running, however, not so for my mom.
            She claimed all that time for a space invaders clone.
          </p>
          <div
            class="flex items-center w-full p-3 border rounded xl:w-max xl:mb-4 bg-badge border-grey"
          >
            <div class="badge">
              <span role="img" aria-label="go here">👉 </span>If you want to
              know more about me:
              <a class="font-bold" href="/about/my-story">Read my story</a>
            </div>
          </div>
        </div>
      </section>
      <div class="flex flex-col mb-8 md:flex-row">
        <section class="w-full mb-4 md:w-9/12 xl:w-3/4">
          <p class="leading-7">
            Span a few years to one year before I started college. I needed to
            buy a PC to submit my assignments. So during the summer of 2008, I
            worked so hard cleaning hotels with my mother. I now had enough
            money to buy my first computer a
            <a
              class="bio-link"
              href="https://www.mrmemory.co.uk/memory-ram-upgrades/packard-bell/imedia/x2414"
              >Packard Bell iMedia x2414</a
            >
            with an enormous amount of Ram totalling 2GB and an intel Celeron
            with duo cores. The best part was it was running everyone's
            favourite Windows version

            <a
              class="bio-link"
              href="https://en.wikipedia.org/wiki/Windows_Vista"
              >Windows Vista</a
            >

            . It was so hard to get any work done. Then one fatal evening
            windows broke the

            <a
              class="bio-link"
              href="https://social.technet.microsoft.com/Forums/windows/en-US/69029855-21c1-411d-bdd3-b864222eefb6/dhcp-on-vista-has-stopped-running?forum=itprovistasetup"
              >DHCP no longer worked</a
            >

            I had no clue how to fix it and no other device to search how to fix
            it. I was then forced to use the library to find a solution get a
            windows disc this seemed almost impossible. I started to ask what is
            Windows and is there an alternative. The answer was Yes!
            <a class="bio-link" href="https://wiki.ubuntu.com/JauntyJackalope"
              >Ubuntu 9.04 (Jaunty Jackalope)</a
            >
            . I encountered problems I was unable to download the ISO. So I
            asked canonical for a disc and enclosed a cheque to cover the
            shipping. From that day I have used Linux ever since. The distros I
            commonly use now are

            <a class="bio-link" href="https://kubuntu.org/">Kubuntu 20.10</a>,<a
              class="bio-link"
              href="https://manjaro.org/"
              >Manjaro"</a
            >and
            <a class="bio-link" href="https://archlinux.org/">Arch Linux</a>. I
            use<a class="bio-link" href="https://kde.org/">KDE</a>as my GUI "you
            know what they say old habits die hard." Yes, I occasionally use
            Windows. After I built my next PC, I got<a
              class="bio-link"
              href="https://en.wikipedia.org/wiki/Windows_7"
              >Windows 7
            </a>
            and came across
            <a
              class="bio-link"
              href="https://en.wikipedia.org/wiki/Microsoft_XNA_Game_Studio"
              >XNA Game Studio 3.0
            </a>
            . The idea of making games for Xbox seemed great. It gave me a
            moment of nostalgia with my mom. Which lead me to learn C# from<a
              class="bio-link"
              href="https://docs.microsoft.com/en-us/learn/"
              >Microsoft Academy
            </a>
            and eventually built an
            <a
              class="bio-link"
              href="https://sourceforge.net/projects/xnarpgtoolkit/"
              >RPG game from the toolkit
            </a>
            they provided. I progressed onto making an
            <a class="bio-link" href="https://ubuntu.com/server">
              Ubuntu Linux server
            </a>
            out of interest as well as a samba server. All in my free time.
            During my final year of studies, I was responsible for creating
            experiments with python and using libraries such as
            <a class="bio-link" href="https://pandas.pydata.org/">pandas</a>,<a
              class="bio-link"
              href="https://numpy.org/"
              >NumPy
            </a>
            and
            <a class="bio-link" href="https://matplotlib.org/">matplotlib </a>
            to plot and analysis data. Now I found my calling with web
            development and love every moment I get using JavaScript and
            react.js
          </p>
        </section>
        <section class="w-full md:w-3/12 xl:w-1/4 md:pl-4 xl:pl-8">
          <figure class="mb-4">
            <div class="pr-4">
              <img
                alt="A selfie of me with the sea the st ives sea behind."
                src="~/assets/img/me-in-st-ives.jpg"
              />
            </div>
            <figcaption class="py-2 text-xs text-center text-gray">
              Moving to Cornwall
            </figcaption>
          </figure>
        </section>
      </div>
    </div>
  </article>
</template>
