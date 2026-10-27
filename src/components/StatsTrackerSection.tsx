"use client";

import React from "react";
import Image from "next/image";
import { Trophy, Target, Flame, Crosshair, Award, Zap, TrendingUp, BarChart3, ShieldCheck } from "lucide-react";
import { STREAMER_INFO } from "@/data/streamerData";

export default function StatsTrackerSection() {
  return (
    <section id="stats" className="py-20 relative val-dots-pattern">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ff4655]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#00f5d4]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a2332] text-[#ff4655] font-mono text-xs font-bold uppercase tracking-widest rounded val-cut-tl mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>VALORANT TRACKER // ESTATÍSTICAS OFICIAIS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            DESEMPENHO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4655] to-[#00f5d4]">RADIANT</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Métricas coletadas no Episódio 9 em partidas ranqueadas no servidor brasileiro.
          </p>
        </div>

        {/* Top Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Main Radiant Rank Tier Card */}
          <div className="md:col-span-1 bg-gradient-to-b from-[#141e2c] to-[#0d131d] border-2 border-[#ff4655]/50 rounded-xl p-6 val-cut-both shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 px-3 py-1 bg-[#ff4655] text-black font-black text-xs uppercase font-mono val-cut-br">
              TOP 0.01% BR
            </div>

            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src={STREAMER_INFO.rank.icon}
                  alt="Radiant Rank"
                  fill
                  className="object-contain drop-shadow-[0_0_15px_rgba(255,70,85,0.7)] group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-400">CLASSIFICAÇÃO ATUAL</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-wider">
                  {STREAMER_INFO.rank.tierName}
                </h3>
                <div className="text-lg font-black text-[#ff4655] font-mono">
                  {STREAMER_INFO.rank.currentRating}
                </div>
                <div className="text-xs font-mono text-[#00f5d4] mt-0.5">
                  Posição: {STREAMER_INFO.rank.leaderboardRank}
                </div>
              </div>
            </div>

            {/* RR Progress Bar towards Top 100 */}
            <div className="mt-6 space-y-1.5 font-mono text-xs">
              <div className="flex justify-between text-zinc-300">
                <span>Progresso Top 100 Radiant</span>
                <span className="text-[#00f5d4] font-bold">684 / 750 RR</span>
              </div>
              <div className="w-full h-2.5 bg-[#1b2636] rounded-full overflow-hidden p-0.5 border border-[#232f42]">
                <div
                  className="h-full bg-gradient-to-r from-[#ff4655] via-[#ff7884] to-[#00f5d4] rounded-full transition-all duration-1000"
                  style={{ width: "91%" }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-zinc-400 pt-1">
                <span>Peak: {STREAMER_INFO.rank.peakTierName}</span>
                <span>470 Partidas</span>
              </div>
            </div>
          </div>

          {/* Win Rate & Matches Card */}
          <div className="bg-[#101724] border border-[#232f42] hover:border-[#ff4655]/40 rounded-xl p-6 val-cut-tl transition-colors shadow-lg flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-zinc-400 uppercase">Taxa de Vitória</span>
              <Trophy className="w-5 h-5 text-amber-400" />
            </div>

            <div className="space-y-1">
              <div className="text-4xl font-black text-white tracking-tight flex items-baseline gap-2">
                <span>{STREAMER_INFO.stats.winRate}</span>
                <span className="text-xs font-mono font-normal text-green-400 flex items-center gap-0.5">
                  <TrendingUp className="w-3.5 h-3.5" /> +4.2% vs média Radiant
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-mono">
                {STREAMER_INFO.stats.wins} Vitórias / {STREAMER_INFO.stats.losses} Derrotas
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-[#1e293b] font-mono text-xs">
              <div className="bg-[#16202e] p-2.5 rounded">
                <span className="text-zinc-400 block text-[10px]">CLUTCHES VENCIDOS</span>
                <span className="text-white font-bold text-base">{STREAMER_INFO.stats.clutchesWon}</span>
              </div>
              <div className="bg-[#16202e] p-2.5 rounded">
                <span className="text-zinc-400 block text-[10px]">ACES GRAVADOS</span>
                <span className="text-[#ff4655] font-bold text-base">{STREAMER_INFO.stats.aces}</span>
              </div>
            </div>
          </div>

          {/* Headshot & Combat Performance Card */}
          <div className="bg-[#101724] border border-[#232f42] hover:border-[#00f5d4]/40 rounded-xl p-6 val-cut-tl transition-colors shadow-lg flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-zinc-400 uppercase">Precisão & Mira</span>
              <Crosshair className="w-5 h-5 text-[#00f5d4]" />
            </div>

            <div className="space-y-1">
              <div className="text-4xl font-black text-[#00f5d4] tracking-tight">
                {STREAMER_INFO.stats.hsPercentage}
              </div>
              <p className="text-xs text-zinc-400 font-mono">
                Headshot Rate (Média no High Elo: ~24%)
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-[#1e293b] font-mono text-xs">
              <div className="bg-[#16202e] p-2.5 rounded">
                <span className="text-zinc-400 block text-[10px]">K/D RATIO GERAL</span>
                <span className="text-white font-bold text-base flex items-center gap-1">
                  {STREAMER_INFO.stats.kdRatio}
                  <Flame className="w-3.5 h-3.5 text-[#ff4655]" />
                </span>
              </div>
              <div className="bg-[#16202e] p-2.5 rounded">
                <span className="text-zinc-400 block text-[10px]">DANO / ROUND (ADR)</span>
                <span className="text-[#00f5d4] font-bold text-base">{STREAMER_INFO.stats.damagePerRound}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Weapons Mastery Subsection */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider flex items-center gap-2">
                <Target className="w-5 h-5 text-[#ff4655]" />
                <span>ARMAS PRINCIPAIS // ARSENAL DO PXISON</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-mono">
                Armas mais utilizadas em rodadas de compra e eco
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STREAMER_INFO.weapons.map((w) => (
              <div
                key={w.name}
                className="bg-[#0f1522] border border-[#232f42] hover:border-[#ff4655]/60 rounded-xl p-4 transition-all hover:-translate-y-1 group relative overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#ff4655]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                  <span className="font-bold text-white uppercase">{w.name}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#1a2332] text-zinc-300">
                    {w.category}
                  </span>
                </div>

                {/* Weapon Silhouette Icon */}
                <div className="relative h-20 w-full my-3 flex items-center justify-center">
                  <Image
                    src={w.icon}
                    alt={w.name}
                    width={200}
                    height={70}
                    className="object-contain filter drop-shadow group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="pt-3 border-t border-[#1c2738] space-y-1 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Total Kills:</span>
                    <span className="text-white font-bold">{w.kills}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Precisão:</span>
                    <span className="text-[#00f5d4] font-bold">{w.accuracy}</span>
                  </div>
                  <div className="flex justify-between text-[11px] pt-1">
                    <span className="text-zinc-500 truncate mr-1">Skins Favoritas:</span>
                    <span className="text-zinc-300 truncate text-right font-sans">{w.skinFavorite}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
