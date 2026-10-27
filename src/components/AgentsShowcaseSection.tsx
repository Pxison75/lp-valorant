"use client";

import React, { useState } from "react";
import Image from "next/image";
import { User, Shield, Sparkles, Crosshair, Award, Flame, CheckCircle2 } from "lucide-react";
import { STREAMER_INFO, AgentStat } from "@/data/streamerData";

export default function AgentsShowcaseSection() {
  const [selectedAgent, setSelectedAgent] = useState<AgentStat>(STREAMER_INFO.agents[0]);

  return (
    <section id="agentes" className="py-20 bg-[#0b0e14] border-t border-[#1a2332] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#ff4655]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a2332] text-[#00f5d4] font-mono text-xs font-bold uppercase tracking-widest rounded val-cut-tl mb-3">
            <User className="w-3.5 h-3.5" />
            <span>AGENT POOL // RADIANT SELECTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            AGENTES PRINCIPAIS DO <span className="text-[#ff4655]">PXISON</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Especialista em Duelistas de alta mobilidade com flexibilidade em Controladores e Iniciadores.
          </p>
        </div>

        {/* Agent Selector Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10 overflow-x-auto pb-2">
          {STREAMER_INFO.agents.map((agent) => {
            const isSelected = selectedAgent.name === agent.name;
            return (
              <button
                key={agent.name}
                onClick={() => setSelectedAgent(agent)}
                className={`relative flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-lg border transition-all ${
                  isSelected
                    ? "bg-[#ff4655] border-[#ff4655] text-white shadow-lg glow-red scale-105"
                    : "bg-[#111724] border-[#232f42] text-zinc-300 hover:text-white hover:border-[#ff4655]/50"
                }`}
              >
                <div className="relative w-7 h-7 rounded overflow-hidden bg-black/40 flex-shrink-0">
                  <Image
                    src={agent.icon}
                    alt={agent.name}
                    width={28}
                    height={28}
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-extrabold text-xs sm:text-sm uppercase tracking-wider">
                    {agent.name}
                  </div>
                  <div className={`text-[10px] font-mono ${isSelected ? "text-white/80" : "text-zinc-500"}`}>
                    {agent.role}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Agent Feature Showcase */}
        <div className="bg-gradient-to-r from-[#101724] via-[#0f1522] to-[#121926] border border-[#232f42] rounded-2xl p-6 sm:p-10 val-cut-both shadow-2xl relative overflow-hidden">
          
          {/* Agent stylized watermark background */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none select-none overflow-hidden">
            <span className="text-[180px] font-black uppercase text-white tracking-tighter leading-none block -mr-20">
              {selectedAgent.name}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Col: Agent Portrait */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-[280px] sm:w-[340px] h-[380px] sm:h-[440px] flex items-center justify-center">
                {/* Glowing halo behind agent */}
                <div className="absolute inset-0 bg-[#ff4655]/20 rounded-full blur-3xl" />

                <Image
                  src={selectedAgent.portrait}
                  alt={selectedAgent.name}
                  fill
                  priority
                  className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Col: Details & Stats */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#ff4655]/20 border border-[#ff4655]/50 text-[#ff4655] font-mono font-bold text-xs rounded uppercase">
                    FUNÇÃO: {selectedAgent.role.toUpperCase()}
                  </span>
                  <span className="px-3 py-1 bg-[#00f5d4]/10 border border-[#00f5d4]/30 text-[#00f5d4] font-mono text-xs rounded uppercase">
                    ARMA: {selectedAgent.signatureWeapon}
                  </span>
                </div>

                <h3 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
                  {selectedAgent.name}
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed pt-2">
                  <strong className="text-white font-semibold">Como o João Pedro joga: </strong>
                  {selectedAgent.playstyle}
                </p>
              </div>

              {/* Agent Performance Metric Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-[#141b28] border border-[#232f42] p-3 rounded val-cut-tl">
                  <span className="text-[11px] font-mono text-zinc-400 block uppercase">Partidas</span>
                  <span className="text-xl font-black text-white">{selectedAgent.matches}</span>
                  <span className="text-[10px] text-zinc-500 font-mono block">Ranked</span>
                </div>

                <div className="bg-[#141b28] border border-[#232f42] p-3 rounded val-cut-tl">
                  <span className="text-[11px] font-mono text-zinc-400 block uppercase">Win Rate</span>
                  <span className="text-xl font-black text-green-400">{selectedAgent.winRate}%</span>
                  <span className="text-[10px] text-zinc-500 font-mono block">Taxa de vitória</span>
                </div>

                <div className="bg-[#141b28] border border-[#232f42] p-3 rounded val-cut-tl">
                  <span className="text-[11px] font-mono text-zinc-400 block uppercase">K/D Médio</span>
                  <span className="text-xl font-black text-[#ff4655]">{selectedAgent.kd}</span>
                  <span className="text-[10px] text-zinc-500 font-mono block">Eliminações</span>
                </div>

                <div className="bg-[#141b28] border border-[#232f42] p-3 rounded val-cut-tl">
                  <span className="text-[11px] font-mono text-zinc-400 block uppercase">Headshot %</span>
                  <span className="text-xl font-black text-[#00f5d4]">{selectedAgent.hsRate}%</span>
                  <span className="text-[10px] text-zinc-500 font-mono block">Precisão</span>
                </div>
              </div>

              {/* Radiant Tips callout */}
              <div className="bg-[#16202f]/80 border-l-4 border-[#00f5d4] p-4 rounded-r-lg space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00f5d4] uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>DICA DO PXISON PARA O SEU RANKED</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300">
                  {selectedAgent.name === "Jett" && "Nunca use o dash para iniciar o combate sem ter certeza de uma cover para recuar. Guarde facas para rounds econômicos e quebre a economia inimiga."}
                  {selectedAgent.name === "Reyna" && "O segredo da Reyna no high elo é não ser ganancioso: dê o dano, use o dismiss para reposicionar e passe a info pro seu time finalizar."}
                  {selectedAgent.name === "Omen" && "Aproveite a verticalidade com o Passos Escuros (C). Criar one-ways em locais incomuns força o adversário a gastar utilitário."}
                  {selectedAgent.name === "Sova" && "Aprenda ao menos dois lineups de pós-plant com o dardo de choque. Muitas rodadas decidem sem você precisar se expor."}
                  {selectedAgent.name === "Iso" && "Ative o fluxo duplo antes de dar peeks onde você sabe que terá trocação 1v1. O escudo bloqueia até o tiro de Operator na cabeça!"}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
