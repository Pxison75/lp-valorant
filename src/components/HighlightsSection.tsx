"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Eye, Clock, MapPin, Sparkles, X, Share2, ExternalLink } from "lucide-react";
import { STREAMER_INFO, HighlightClip } from "@/data/streamerData";

export default function HighlightsSection() {
  const [selectedClip, setSelectedClip] = useState<HighlightClip | null>(null);

  return (
    <section id="clipes" className="py-20 bg-[#090c10] border-t border-[#1a2332] relative val-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a2332] text-[#ff4655] font-mono text-xs font-bold uppercase tracking-widest rounded val-cut-tl mb-3">
              <Play className="w-3.5 h-3.5" />
              <span>CLUTCHES & ACES // MELHORES JOGADAS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              DESTAQUES & <span className="text-[#ff4655]">CLIPES</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-1">
              Momentos insanos de gameplay Radiant gravados direto das transmissões ao vivo.
            </p>
          </div>

          <a
            href={STREAMER_INFO.twitchUrl + "/clips"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#1a2332] hover:bg-[#232f42] text-zinc-200 hover:text-white border border-[#232f42] text-xs font-bold font-mono uppercase rounded flex items-center gap-2 self-start md:self-auto transition-colors"
          >
            <span>Ver Todos os Clipes na Twitch</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#9146ff]" />
          </a>
        </div>

        {/* Video Clips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STREAMER_INFO.highlights.map((clip) => (
            <div
              key={clip.id}
              onClick={() => setSelectedClip(clip)}
              className="group cursor-pointer bg-[#101724] border border-[#232f42] hover:border-[#ff4655] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <Image
                  src={clip.thumbnail}
                  alt={clip.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 font-mono text-[10px] text-white flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {clip.duration}
                </div>

                {/* Agent & Map Badge */}
                <div className="absolute top-2 left-2 flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur font-mono text-[10px] font-bold text-[#ff4655] border border-[#ff4655]/40 uppercase">
                    {clip.agent}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur font-mono text-[10px] text-zinc-300 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#00f5d4]" />
                    {clip.map}
                  </span>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#ff4655]/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#ff4655] transition-all glow-red">
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </div>
                </div>
              </div>

              {/* Clip Details */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#00f5d4] font-bold uppercase mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{clip.kills}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#ff4655] transition-colors line-clamp-2 leading-snug">
                    {clip.title}
                  </h4>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-3 mt-3 border-t border-[#1e293b]">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {clip.views} views
                  </span>
                  <span>{clip.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Clip Modal Viewer */}
      {selectedClip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#0f1522] border-2 border-[#ff4655] rounded-xl overflow-hidden shadow-2xl val-cut-both">
            {/* Modal Header */}
            <div className="p-4 bg-[#141b28] border-b border-[#232f42] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#ff4655] font-bold uppercase">
                  REPRODUZINDO CLIPE // {selectedClip.agent} NO {selectedClip.map}
                </span>
                <h3 className="text-base sm:text-lg font-black text-white uppercase">
                  {selectedClip.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedClip(null)}
                className="p-1.5 text-zinc-400 hover:text-white hover:bg-[#1f293b] rounded transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Viewport Simulated */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <Image
                src={selectedClip.thumbnail}
                alt={selectedClip.title}
                fill
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

              <div className="relative z-10 text-center space-y-3 px-4">
                <div className="w-16 h-16 rounded-full bg-[#ff4655] text-white flex items-center justify-center mx-auto shadow-2xl glow-red animate-pulse">
                  <Play className="w-8 h-8 ml-1 fill-current" />
                </div>
                <div className="text-white font-mono text-xs sm:text-sm">
                  Clipe em Alta Definição • Gravado em 1080p 60fps
                </div>
                <a
                  href={STREAMER_INFO.twitchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#9146ff] hover:bg-[#772ce8] text-white text-xs font-bold uppercase rounded font-mono glow-purple"
                >
                  <span>Abrir na Twitch para Clipar</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Modal Footer info */}
            <div className="p-4 bg-[#0c111a] flex items-center justify-between text-xs font-mono text-zinc-400">
              <div>
                <span className="text-white font-bold">{selectedClip.kills}</span> • {selectedClip.views} visualizações
              </div>
              <button
                onClick={() => setSelectedClip(null)}
                className="px-3 py-1 bg-[#1a2332] text-zinc-300 hover:text-white rounded"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
