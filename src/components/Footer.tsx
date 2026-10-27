"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Radio, Heart } from "lucide-react";
import { STREAMER_INFO } from "@/data/streamerData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070a0e] border-t border-[#1a2332] pt-12 pb-8 text-zinc-400 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#1c2636]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#ff4655] val-cut-tl flex items-center justify-center font-black text-black text-xl tracking-tighter">
                PX
              </div>
              <div>
                <span className="font-black text-xl text-white tracking-wider block">
                  PXISON
                </span>
                <span className="text-xs font-mono text-zinc-400 -mt-1 block">
                  JOÃO PEDRO • STREAMER RADIANT
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Website oficial de transmissão, mira, configurações de jogo e estatísticas competitivas do jogador e criador de conteúdo João Pedro (Pxison).
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-[#00f5d4]" />
              <span>PROTOCOLO VALORANT // SERVIDOR BRASIL</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              NAVEGAÇÃO RÁPIDA
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link href="#hero" className="hover:text-[#ff4655] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#stream" className="hover:text-[#ff4655] transition-colors">
                  Live & Chat da Stream
                </Link>
              </li>
              <li>
                <Link href="#stats" className="hover:text-[#ff4655] transition-colors">
                  Ranked & Estatísticas
                </Link>
              </li>
              <li>
                <Link href="#agentes" className="hover:text-[#ff4655] transition-colors">
                  Pool de Agentes
                </Link>
              </li>
              <li>
                <Link href="#configs" className="hover:text-[#ff4655] transition-colors">
                  Código da Mira & Sens
                </Link>
              </li>
              <li>
                <Link href="#clipes" className="hover:text-[#ff4655] transition-colors">
                  Melhores Jogadas
                </Link>
              </li>
            </ul>
          </div>

          {/* Streamer Hub */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              CANAL OFICIAL NA TWITCH
            </h4>
            <div className="bg-[#0d131d] border border-[#232f42] rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-white font-bold flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-[#9146ff]" />
                  twitch.tv/pxison
                </span>
                <span className="text-[#ff4655] font-mono font-bold">AO VIVO</span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Lives quase todos os dias a partir das 18:00h com gameplay Radiant de Jett e Reyna.
              </p>
              <a
                href={STREAMER_INFO.twitchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-mono text-[#9146ff] hover:text-[#b17dff] font-bold"
              >
                Acessar twitch.tv/pxison →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal disclaimers */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-4">
          <div>
            © {new Date().getFullYear()} Pxison (João Pedro). Todos os direitos reservados.
            <span className="block text-[10px] text-zinc-600 mt-0.5">
              Valorant é marca registrada da Riot Games, Inc. Este site é um projeto de criador de conteúdo e comunidade.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#141b28] hover:bg-[#ff4655] hover:text-white text-zinc-300 border border-[#232f42] transition-colors"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
