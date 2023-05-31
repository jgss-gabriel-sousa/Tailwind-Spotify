import { Sidebar } from '@/components/Sidebar'
import { Footer } from '@/components/footer'
import { Laptop2, LayoutList, Maximize2, Mic2, Volume } from 'lucide-react'
import { ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <Sidebar />

        <main className="ml-52 pb-32 flex-1 p-6 overflow-scroll">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft/>
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight/>
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Bom Dia</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album1.jpg" width={104} height={104} alt="Album Cover"/>
              <strong>Boys Don&apos;t Cry</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album2.jpg" width={104} height={104} alt="Album Cover"/>
              <strong>Escape</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album3.jpg" width={104} height={104} alt="Album Cover"/>
              <strong>Powerslave</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album4.jpg" width={104} height={104} alt="Album Cover"/>
              <strong>Ride of the Lightning</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album5.jpg" width={104} height={104} alt="Album Cover"/>
              <strong>Once</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album6.jpg" width={104} height={104} alt="Album Cover"/>
              <strong>Queen</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Feito para você</h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/dailymix1.jpg" className="w-full" width={120} height={120} alt="Album Cover"/>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Journey, Merle Haggard & The Strangers, Creedence Clearwater Revival e mais</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/dailymix2.jpg" className="w-full" width={120} height={120} alt="Album Cover"/>
              <strong className="font-semibold">Daily Mix 2</strong>
              <span className="text-sm text-zinc-400">Mettalica, Iron Maiden, Blue Öyster Cult e mais</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/dailymix3.jpg" className="w-full" width={120} height={120} alt="Album Cover"/>
              <strong className="font-semibold">No Repeat</strong>
              <span className="text-sm text-zinc-400">As músicas que você está curtindo agora</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/dailymix4.jpg" className="w-full" width={120} height={120} alt="Album Cover"/>
              <strong className="font-semibold">Sua Máquina do Tempo</strong>
              <span className="text-sm text-zinc-400">Criamos uma playlist personalizada para você</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/dailymix5.jpg" className="w-full" width={120} height={120} alt="Album Cover"/>
              <strong className="font-semibold">As mais tocadas no seu 2022</strong>
              <span className="text-sm text-zinc-400">A Retrospectiva mostra as músicas que você mais curtiu</span>
            </a>
          </div>

        </main>
      </div>
      
      <Footer />
    </div>
  )
}
