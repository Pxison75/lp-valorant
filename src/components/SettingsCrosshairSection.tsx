"use client";

import React, { useState } from "react";
import { Crosshair, Copy, Check, Mouse, Monitor, Cpu, Keyboard, Headphones, Sliders, Sparkles, RefreshCw } from "lucide-react";
import { STREAMER_INFO } from "@/data/streamerData";
import confetti from "canvas-confetti";

export default function SettingsCrosshairSection() {
  const [copied, setCopied] = useState(false);
  
  // Interactive eDPI calculator
  const [userDpi, setUserDpi] = useState<number>(800);
  const [userSens, setUserSens] = useState<number>(0.285);
  const calculatedEdpi = Math.round(userDpi * userSens);

  const handleCopyCrosshair = () => {
    navigator.clipboard.writeText(STREAMER_INFO.settings.crosshair.code);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#00f5d4", "#ff4655", "#ffffff"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="configs" className="py-20 bg-[#0d121c] border-t border-[#1a2332] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a2332] text-[#ff4655] font-mono text-xs font-bold uppercase tracking-widest rounded val-cut-tl mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>CONFIGS // SENSIBILIDADE & PERIFÉRICOS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            MIRA, SENSIBILIDADE & <span className="text-[#00f5d4]">SETUP</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Copie o código oficial da mira do Pxison e use exatamente as mesmas configurações dos torneios e lives.
          </p>
        </div>

        {/* Crosshair & Sensibility Top Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Crosshair Visualizer & Code (7 cols) */}
          <div className="lg:col-span-7 bg-[#101724] border-2 border-[#00f5d4]/40 rounded-xl p-6 sm:p-8 val-cut-both shadow-2xl relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#232f42] pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase">MIRA COMPETITIVA OFICIAL</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider flex items-center gap-2">
                    <Crosshair className="w-5 h-5 text-[#00f5d4]" />
                    <span>{STREAMER_INFO.settings.crosshair.name}</span>
                  </h3>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#00f5d4]/10 text-[#00f5d4] border border-[#00f5d4]/30 font-bold">
                  EPISÓDIO 9
                </span>
              </div>

              {/* Crosshair Interactive Canvas / Visual Target Preview */}
              <div className="relative aspect-video w-full max-w-lg mx-auto bg-gradient-to-br from-[#16202e] via-[#0b0e14] to-[#121926] rounded-lg border border-[#232f42] flex items-center justify-center overflow-hidden mb-6 group">
                
                {/* Target concentric rings background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                  <div className="w-48 h-48 rounded-full border border-dashed border-zinc-400 animate-spin" style={{ animationDuration: "60s" }} />
                  <div className="w-32 h-32 rounded-full border border-zinc-400 absolute" />
                  <div className="w-16 h-16 rounded-full border border-red-500 absolute" />
                </div>

                {/* The actual Crosshair: Cyan Dot with subtle outlines */}
                <div className="relative z-10 flex items-center justify-center scale-150 group-hover:scale-175 transition-transform">
                  {/* Center Dot */}
                  <div className="w-2.5 h-2.5 bg-[#00f5d4] border border-black shadow-[0_0_8px_#00f5d4]" />
                  {/* Subtle Inner lines */}
                  <div className="absolute -top-3 w-0.5 h-2 bg-[#00f5d4] border-x border-black" />
                  <div className="absolute -bottom-3 w-0.5 h-2 bg-[#00f5d4] border-x border-black" />
                  <div className="absolute -left-3 h-0.5 w-2 bg-[#00f5d4] border-y border-black" />
                  <div className="absolute -right-3 h-0.5 w-2 bg-[#00f5d4] border-y border-black" />
                </div>

                <div className="absolute bottom-2 left-3 text-[10px] font-mono text-zinc-400">
                  Preview 1:1 • Cor: {STREAMER_INFO.settings.crosshair.color}
                </div>
                <div className="absolute bottom-2 right-3 text-[10px] font-mono text-[#00f5d4]">
                  Ponto Central Ligado (2)
                </div>
              </div>

              {/* Crosshair Code Box with Copy Button */}
              <div className="bg-[#090d14] border border-[#232f42] rounded-lg p-3 sm:p-4">
                <span className="text-[11px] font-mono text-zinc-400 uppercase block mb-1">
                  CÓDIGO DE IMPORTAÇÃO NO VALORANT:
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={STREAMER_INFO.settings.crosshair.code}
                    className="w-full bg-[#111724] border border-[#1e293b] rounded px-3 py-2 text-xs font-mono text-zinc-200 select-all focus:outline-none"
                  />
                  <button
                    onClick={handleCopyCrosshair}
                    className={`px-4 py-2 rounded text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all flex-shrink-0 ${
                      copied
                        ? "bg-green-600 text-white"
                        : "bg-[#00f5d4] hover:bg-[#00dbbd] text-black glow-cyan"
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copiar Mira</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Crosshair details summary */}
            <div className="mt-4 pt-4 border-t border-[#1e293b] grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
              <div className="bg-[#141b28] p-2 rounded">
                <span className="text-zinc-500 block text-[10px]">COR</span>
                <span className="text-[#00f5d4] font-bold">Ciano (#5)</span>
              </div>
              <div className="bg-[#141b28] p-2 rounded">
                <span className="text-zinc-500 block text-[10px]">CONTORNO</span>
                <span className="text-white font-bold">Ligado (1)</span>
              </div>
              <div className="bg-[#141b28] p-2 rounded">
                <span className="text-zinc-500 block text-[10px]">PONTO CENTRAL</span>
                <span className="text-white font-bold">2 / 1.0</span>
              </div>
              <div className="bg-[#141b28] p-2 rounded">
                <span className="text-zinc-500 block text-[10px]">LINHAS INTERNAS</span>
                <span className="text-white font-bold">1 / 2 / 2 / 0</span>
              </div>
            </div>
          </div>

          {/* Mouse & eDPI Calculator (5 cols) */}
          <div className="lg:col-span-5 bg-[#101724] border border-[#232f42] rounded-xl p-6 sm:p-8 val-cut-both shadow-xl flex flex-col justify-between">
            <div>
              <div className="border-b border-[#232f42] pb-4 mb-6">
                <span className="text-xs font-mono text-zinc-400 uppercase">SENSIBILIDADE ATUAL</span>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider flex items-center gap-2">
                  <Mouse className="w-5 h-5 text-[#ff4655]" />
                  <span>MOUSE & EDPI</span>
                </h3>
              </div>

              {/* Pxison Official Values */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-[#16202e] border border-[#232f42] p-3 rounded text-center">
                  <span className="text-[10px] font-mono text-zinc-400 block uppercase">DPI</span>
                  <span className="text-2xl font-black text-white">{STREAMER_INFO.settings.mouse.dpi}</span>
                </div>
                <div className="bg-[#16202e] border border-[#232f42] p-3 rounded text-center">
                  <span className="text-[10px] font-mono text-zinc-400 block uppercase">SENS JOGO</span>
                  <span className="text-2xl font-black text-[#ff4655]">{STREAMER_INFO.settings.mouse.inGameSens}</span>
                </div>
                <div className="bg-[#16202e] border border-[#232f42] p-3 rounded text-center">
                  <span className="text-[10px] font-mono text-zinc-400 block uppercase">EDPI FINAL</span>
                  <span className="text-2xl font-black text-[#00f5d4]">{STREAMER_INFO.settings.mouse.edpi}</span>
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono text-zinc-300 mb-6 bg-[#090d14] p-3.5 rounded border border-[#1e293b]">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Taxa de Atualização (Polling):</span>
                  <span className="font-bold text-white">{STREAMER_INFO.settings.mouse.pollingRate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Sensibilidade do Windows:</span>
                  <span className="font-bold text-white">{STREAMER_INFO.settings.mouse.windowsSens}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Sensibilidade com Mira (Scope):</span>
                  <span className="font-bold text-white">{STREAMER_INFO.settings.mouse.scopedSens}</span>
                </div>
              </div>

              {/* Interactive eDPI Comparator Calculator */}
              <div className="bg-[#141b28] border border-[#232f42] rounded-lg p-4">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-white uppercase mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#00f5d4]" />
                  <span>CALCULADORA DE EDPI - COMPARE COM O PXISON</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="text-[10px] font-mono text-zinc-400 block mb-1">Seu DPI:</label>
                    <input
                      type="number"
                      value={userDpi}
                      onChange={(e) => setUserDpi(Number(e.target.value))}
                      className="w-full bg-[#0a0e17] border border-[#232f42] rounded px-2.5 py-1.5 text-xs text-white font-mono focus:outline-none focus:border-[#00f5d4]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-zinc-400 block mb-1">Sua Sens no Jogo:</label>
                    <input
                      type="number"
                      step="0.01"
                      value={userSens}
                      onChange={(e) => setUserSens(Number(e.target.value))}
                      className="w-full bg-[#0a0e17] border border-[#232f42] rounded px-2.5 py-1.5 text-xs text-white font-mono focus:outline-none focus:border-[#00f5d4]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#1e293b] text-xs font-mono">
                  <span className="text-zinc-400">Seu eDPI Calculado:</span>
                  <span className="text-sm font-bold text-white">{calculatedEdpi}</span>
                  <span className="text-[11px] text-zinc-400">
                    {Math.abs(calculatedEdpi - STREAMER_INFO.settings.mouse.edpi) <= 15 ? (
                      <span className="text-green-400 font-bold">✓ Muito parecido!</span>
                    ) : calculatedEdpi < STREAMER_INFO.settings.mouse.edpi ? (
                      <span className="text-blue-400">Mais lenta que a do Pxison</span>
                    ) : (
                      <span className="text-amber-400">Mais rápida que a do Pxison</span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Peripherals & Hardware Setup Cards */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#ff4655]" />
                <span>PERIFÉRICOS & SETUP DE STREAM // JOÃO PEDRO</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-mono">
                Equipamentos profissionais utilizados diariamente nas transmissões da Twitch
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STREAMER_INFO.settings.peripherals.map((item) => (
              <div
                key={item.category}
                className="bg-[#101724] border border-[#232f42] hover:border-[#ff4655]/60 rounded-xl p-5 transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                  <span className="px-2 py-0.5 rounded bg-[#1a2332] text-[#00f5d4] uppercase font-bold text-[10px]">
                    {item.category}
                  </span>
                  <span className="text-zinc-500 text-[10px]">OFFICIAL GEAR</span>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-[#ff4655] transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs text-zinc-400 mt-1 font-mono">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
