import { HomeIcon, Search, Library } from "lucide-react";

export function Sidebar() {
    return (
    <aside className="w-52 bg-zinc-950 p-6 fixed h-screen">
        <nav className="space-y-5">
            <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
                <HomeIcon/>
                Início
            </a>
                <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
                <Search/>
                Buscar
            </a>
            <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
                <Library/>
                Sua Biblioteca
            </a>
        </nav>

        <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hot Hits Brasil</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Aniversario</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">This is Queen</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Top Brasil</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Podcast</a>
        </nav>

    </aside>
    )
}