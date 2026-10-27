"use client";

import React from "react";
import Image from "next/image";
import { Radio, Shield, Crosshair, Trophy, Flame, ChevronRight, Play } from "lucide-react";
import { STREAMER_INFO } from "@/data/streamerData";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden val-grid-pattern">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff4655]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#9146ff]/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-[#00f5d4]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative tactical lines and markings */}
      <div className="absolute top-24 left-8 text-[11px] font-mono text-zinc-600 hidden xl:block select-none">
        <p>// PROTOCOL: VALORANT_BROADCAST</p>
        <p>// AGENT_TAG: PXISON_JP</p>
        <p>// SERVER: SA_BRAZIL_01</p>
      </div>

      <div className="absolute top-24 right-8 text-[11px] font-mono text-zinc-600 hidden xl:block text-right select-none">
        <p>// MMR: RADIANT_ELITE</p>
        <p>// FPS: 240_LOCKED</p>
        <p>// LATENCY: 9MS</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Hero Info */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111722] border border-[#ff4655]/40 text-xs font-mono">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff4655]"></span>
              </span>
              <span className="text-[#ff4655] font-bold tracking-wider uppercase">AO VIVO NA TWITCH</span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-300 font-semibold">{STREAMER_INFO.status.viewers.toLocaleString()} assistindo</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 bg-[#1a2332] text-[#00f5d4] text-xs font-mono font-bold tracking-widest uppercase rounded val-cut-tl">
                DUELISTA RADIANT // STREAMER BR
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase">
                EU SOU <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4655] via-[#ff6a78] to-[#00f5d4]">PXISON</span>
              </h1>
              <p className="text-xl sm:text-2xl font-light text-zinc-300 font-mono">
                João Pedro <span className="text-[#ff4655]">#{STREAMER_INFO.riotId.split("#")[1]}</span>
              </p>
            </div>

            {/* Streamer Bio Description */}
            <p className="text-zinc-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {STREAMER_INFO.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={STREAMER_INFO.twitchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#ff4655] hover:bg-[#e03b49] text-white font-black text-sm uppercase tracking-wider rounded val-cut-br glow-red flex items-center gap-2.5 transition-all hover:scale-105"
              >
                <Radio className="w-4 h-4" />
                <span>Entrar na Live Agora</span>
              </a>

              <a
                href="#configs"
                className="px-6 py-3.5 bg-[#161f2e] hover:bg-[#1f2b3e] text-zinc-200 hover:text-white font-bold text-sm uppercase tracking-wider rounded border border-[#232f42] hover:border-[#00f5d4]/60 flex items-center gap-2.5 transition-all"
              >
                <Crosshair className="w-4 h-4 text-[#00f5d4]" />
                <span>Copiar Mira & Sens</span>
              </a>

              <a
                href="#clipes"
                className="px-4 py-3.5 bg-[#161f2e] hover:bg-[#1f2b3e] text-zinc-300 hover:text-white font-medium text-sm rounded border border-[#232f42] flex items-center gap-2 transition-all"
              >
                <Play className="w-4 h-4 text-[#ff4655]" />
                <span>Melhores Clipes</span>
              </a>
            </div>

            {/* Key Quick Stats Cards */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto lg:mx-0">
              <div className="bg-[#101724]/90 border border-[#232f42] p-3 rounded val-cut-tl text-left">
                <div className="text-[11px] font-mono text-zinc-400 uppercase">Rank Atual</div>
                <div className="text-lg font-black text-white flex items-center gap-1.5">
                  <span className="text-[#ff4655]">RAD</span>
                  <span>{STREAMER_INFO.rank.currentRating}</span>
                </div>
                <div className="text-[10px] text-[#00f5d4] font-mono">{STREAMER_INFO.rank.leaderboardRank}</div>
              </div>

              <div className="bg-[#101724]/90 border border-[#232f42] p-3 rounded val-cut-tl text-left">
                <div className="text-[11px] font-mono text-zinc-400 uppercase">Win Rate</div>
                <div className="text-lg font-black text-white">{STREAMER_INFO.stats.winRate}</div>
                <div className="text-[10px] text-zinc-400 font-mono">{STREAMER_INFO.stats.wins}V - {STREAMER_INFO.stats.losses}D</div>
              </div>

              <div className="bg-[#101724]/90 border border-[#232f42] p-3 rounded val-cut-tl text-left">
                <div className="text-[11px] font-mono text-zinc-400 uppercase">K/D Ratio</div>
                <div className="text-lg font-black text-white flex items-center gap-1">
                  <span>{STREAMER_INFO.stats.kdRatio}</span>
                  <Flame className="w-3.5 h-3.5 text-[#ff4655]" />
                </div>
                <div className="text-[10px] text-zinc-400 font-mono">174.2 Dano/R</div>
              </div>

              <div className="bg-[#101724]/90 border border-[#232f42] p-3 rounded val-cut-tl text-left">
                <div className="text-[11px] font-mono text-zinc-400 uppercase">Headshot %</div>
                <div className="text-lg font-black text-[#00f5d4]">{STREAMER_INFO.stats.hsPercentage}</div>
                <div className="text-[10px] text-zinc-400 font-mono">{STREAMER_INFO.stats.aces} Aces gravados</div>
              </div>
            </div>

          </div>

          {/* Right Column: Radiant Emblem + Agent Hero Card */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Radiant Tier Badge Presentation */}
            <div className="relative w-full max-w-md bg-gradient-to-b from-[#141d2b] to-[#0c121c] border-2 border-[#ff4655]/40 rounded-xl p-6 shadow-2xl val-cut-both overflow-hidden group">
              
              {/* Tactical background watermark */}
              <div className="absolute -right-12 -top-12 text-zinc-800/40 font-black text-9xl select-none pointer-events-none">
                01
              </div>

              <div className="flex items-center justify-between border-b border-[#232f42] pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 bg-[#00f5d4] rounded-full animate-ping" />
                  <span className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider">
                    VALORANT COMPETITIVE // S9
                  </span>
                </div>
                <span className="text-xs font-mono font-extrabold text-[#ff4655] bg-[#ff4655]/10 px-2.5 py-0.5 rounded border border-[#ff4655]/30">
                  TOP 0.01%
                </span>
              </div>

              {/* Radiant Rank Emblem Display */}
              <div className="relative py-4 flex flex-col items-center justify-center">
                <div className="relative w-44 h-44 flex items-center justify-center">
                  {/* Glowing pulses behind emblem */}
                  <div className="absolute inset-0 bg-[#ff4655]/20 rounded-full blur-2xl animate-pulse" />
                  
                  <Image
                    src={STREAMER_INFO.rank.icon}
                    alt="Radiant Rank Icon"
                    width={180}
                    height={180}
                    priority
                    className="relative z-10 drop-shadow-[0_0_25px_rgba(255,70,85,0.6)] group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="text-center mt-2">
                  <h3 className="text-2xl font-black tracking-widest text-white uppercase">
                    {STREAMER_INFO.rank.tierName}
                  </h3>
                  <p className="text-sm font-mono text-[#00f5d4] font-bold">
                    {STREAMER_INFO.rank.peakTierName}
                  </p>
                </div>
              </div>

              {/* Agent mini bar */}
              <div className="mt-4 pt-4 border-t border-[#232f42] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Image
                    src={STREAMER_INFO.agents[0].icon}
                    alt="Jett Main"
                    width={32}
                    height={32}
                    className="rounded bg-[#1a2332] p-0.5 border border-[#ff4655]/50"
                  />
                  <div>
                    <div className="text-white font-bold">JETT // MAIN</div>
                    <div className="text-zinc-400">69.2% WR (172 Jogos)</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-zinc-400">RIOT ID</div>
                  <div className="text-white font-bold">{STREAMER_INFO.riotId}</div>
                </div>
              </div>

              {/* Live stream preview footer */}
              <div className="mt-4 bg-[#090c10]/80 rounded p-3 border border-[#232f42] flex items-center justify-between">
                <div className="flex items-center gap-2 truncate pr-2">
                  <Radio className="w-4 h-4 text-[#ff4655] flex-shrink-0 animate-pulse" />
                  <span className="text-xs text-zinc-300 truncate font-sans">
                    {STREAMER_INFO.status.title}
                  </span>
                </div>
                <a
                  href={STREAMER_INFO.twitchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold font-mono text-[#9146ff] hover:text-[#b17dff] uppercase flex-shrink-0"
                >
                  Assistir →
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
