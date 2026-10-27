"use client";

import React from "react";
import { Calendar, Clock, MessageSquare, Radio, ExternalLink, Flame, Users, CheckCircle, Video } from "lucide-react";
import { STREAMER_INFO } from "@/data/streamerData";

function SocialIcon({ name, color }: { name: string; color: string }) {
  if (name === "Twitch") {
    return (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" style={{ color }}>
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
      </svg>
    );
  }
  if (name === "YouTube") {
    return (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" style={{ color }}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    );
  }
  if (name === "TikTok") {
    return (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" style={{ color }}>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.55c0 2.2-.87 4.31-2.43 5.87-1.56 1.56-3.67 2.43-5.87 2.43-2.2 0-4.31-.87-5.87-2.43C.87 20.31 0 18.2 0 16c0-2.2.87-4.31 2.43-5.87 1.56-1.56 3.67-2.43 5.87-2.43.34 0 .68.02 1.02.06v4.14a4.138 4.138 0 0 0-1.02-.13c-1.13 0-2.22.45-3.02 1.25-.8.8-1.25 1.89-1.25 3.02 0 1.13.45 2.22 1.25 3.02.8.8 1.89 1.25 3.02 1.25 1.13 0 2.22-.45 3.02-1.25.8-.8 1.25-1.89 1.25-3.02V.02h.16z" />
      </svg>
    );
  }
  if (name === "Twitter / X") {
    return (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" style={{ color }}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  if (name === "Discord") {
    return (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" style={{ color }}>
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    );
  }
  if (name === "Instagram") {
    return (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" style={{ color }}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );
  }
  return <Radio className="w-5 h-5" style={{ color }} />;
}

export default function ScheduleAndSocialsSection() {
  const todayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday...
  const scheduleIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <section id="cronograma" className="py-20 bg-[#0b0e14] border-t border-[#1a2332] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a2332] text-[#9146ff] font-mono text-xs font-bold uppercase tracking-widest rounded val-cut-tl mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>TRANSMISSÕES // CRONOGRAMA & REDES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            HORÁRIOS DE LIVE & <span className="text-[#9146ff]">COMUNIDADE</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Fique por dentro de quando o João Pedro entra ao vivo e acompanhe todas as redes sociais.
          </p>
        </div>

        {/* Schedule & Discord Community Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Weekly Schedule Table (7 cols) */}
          <div className="lg:col-span-7 bg-[#101724] border border-[#232f42] rounded-xl p-6 sm:p-8 val-cut-both shadow-xl">
            <div className="flex items-center justify-between border-b border-[#232f42] pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#ff4655]" />
                <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wider">
                  AGENDA SEMANAL DE STREAM
                </h3>
              </div>
              <span className="text-xs font-mono text-[#00f5d4] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#00f5d4] animate-ping" />
                HORÁRIO DE BRASÍLIA
              </span>
            </div>

            <div className="space-y-3">
              {STREAMER_INFO.schedule.map((slot, idx) => {
                const isToday = idx === scheduleIndex;
                return (
                  <div
                    key={slot.day}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-lg border transition-all ${
                      isToday
                        ? "bg-[#1a2332] border-[#ff4655] shadow-lg"
                        : "bg-[#0c111a] border-[#1e293b] hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday ? (
                        <span className="px-2 py-0.5 rounded bg-[#ff4655] text-black font-mono font-black text-[10px] uppercase">
                          HOJE
                        </span>
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-zinc-600" />
                      )}
                      <div>
                        <div className="font-bold text-sm text-white flex items-center gap-2">
                          <span>{slot.day}</span>
                        </div>
                        <div className="text-xs text-zinc-400 font-sans">
                          {slot.description}
                        </div>
                      </div>
                    </div>

                    <div className="text-left sm:text-right font-mono text-xs font-bold text-[#00f5d4] mt-2 sm:mt-0 pl-5 sm:pl-0">
                      {slot.time}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Discord Community Feature Banner (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#13192e] via-[#0f1424] to-[#121b2d] border-2 border-[#5865f2]/40 rounded-xl p-6 sm:p-8 val-cut-both shadow-2xl flex flex-col justify-between relative overflow-hidden">
            
            {/* Discord logo background blur */}
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#5865f2]/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#5865f2] uppercase tracking-wider mb-2">
                <Users className="w-4 h-4" />
                <span>COMUNIDADE OFICIAL</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                TROPA DO <span className="text-[#5865f2]">PXISON</span>
              </h3>

              <p className="text-zinc-300 text-sm mt-3 leading-relaxed">
                Junte-se a mais de 4.800 jogadores no servidor do Discord! Encontre duo para subir de elo, participe de salas de scrims, campeonatos e receba avisos imediatos quando a live começar.
              </p>

              <div className="space-y-2 mt-6 font-mono text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00f5d4]" />
                  <span>Canais de busca de Duo / Trio Radiant e Imortal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00f5d4]" />
                  <span>Notificações de live em tempo real</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00f5d4]" />
                  <span>Sorteios mensais de Riot Points e passes de batalha</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="https://discord.gg/pxison"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-[#5865f2] hover:bg-[#4752c4] text-white font-black text-sm uppercase tracking-wider rounded font-mono flex items-center justify-center gap-2.5 shadow-xl transition-all hover:scale-102 glow-purple"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Entrar no Discord Oficial</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Social Media Grid */}
        <div>
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider flex items-center gap-2">
              <Flame className="w-5 h-5 text-[#ff4655]" />
              <span>SIGA O PXISON EM TODAS AS REDES</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-mono">
              Conteúdos diários de Valorant, clipes curtos e atualizações de campeonatos
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {STREAMER_INFO.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#101724] border border-[#232f42] hover:border-[#ff4655] rounded-xl p-4 text-center transition-all hover:-translate-y-1.5 group flex flex-col items-center justify-center"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3 text-white transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${social.color}25`, border: `1px solid ${social.color}60` }}
                >
                  <SocialIcon name={social.name} color={social.color} />
                </div>

                <div className="font-bold text-white text-xs sm:text-sm group-hover:text-[#ff4655] transition-colors">
                  {social.name}
                </div>
                <div className="text-[11px] font-mono text-zinc-400 truncate max-w-[120px]">
                  {social.handle}
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
