"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Radio, Users, Heart, Share2, MessageSquare, Send, Sparkles, Volume2, VolumeX, Maximize2, Check } from "lucide-react";
import { STREAMER_INFO } from "@/data/streamerData";
import confetti from "canvas-confetti";

interface ChatMessage {
  id: string;
  user: string;
  badge?: string;
  color: string;
  text: string;
  isBot?: boolean;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  { id: "1", user: "vct_fanatic", badge: "VIP", color: "#3b82f6", text: "Pxison tá amassando de Jett hoje slc 🔥" },
  { id: "2", user: "brunovlr", badge: "SUB 12m", color: "#10b981", text: "Essa mira tá com ímã na cabeça kkkk" },
  { id: "3", user: "Nightbot", badge: "BOT", color: "#ff4655", isBot: true, text: "📌 REDES & DISCORD: Entre na Tropa do Pxison no Discord: discord.gg/pxison" },
  { id: "4", user: "clutch_god", badge: "SUB", color: "#a855f7", text: "Alguém sabe a sens dele? !sens" },
  { id: "5", user: "mari_fps", badge: "PRIME", color: "#ec4899", text: "CLUTCH 1v3 QUE BALA FOI ESSA JOÃO???" },
  { id: "6", user: "Nightbot", badge: "BOT", color: "#ff4655", isBot: true, text: "🎯 SENSIBILIDADE: DPI 800 | Sens 0.285 | eDPI 228 | Resolução 1920x1080" },
  { id: "7", user: "tropa_jota", badge: "MOD", color: "#f59e0b", text: "Bem-vindos ao chat! Deixem o follow e usem os comandos !mira e !setup" },
];

export default function StreamPlayerSection() {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState("");
  const [hasFollowed, setHasFollowed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState<"stream" | "clips">("stream");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const trimmed = inputText.trim();
    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      user: "Você",
      badge: "VIEWER",
      color: "#00f5d4",
      text: trimmed,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText("");

    // Command triggers
    if (trimmed.startsWith("!")) {
      const cmd = trimmed.toLowerCase();
      setTimeout(() => {
        let reply = "";
        if (cmd === "!mira") {
          reply = `🎯 Mira do Pxison: ${STREAMER_INFO.settings.crosshair.code} (Ciano #00F5D4, Ponto Central Ligado)`;
        } else if (cmd === "!sens") {
          reply = `⚡ Sensibilidade: ${STREAMER_INFO.settings.mouse.dpi} DPI, Sens ${STREAMER_INFO.settings.mouse.inGameSens} (eDPI ${STREAMER_INFO.settings.mouse.edpi})`;
        } else if (cmd === "!setup") {
          reply = `🖥️ Setup: Mouse Logitech GPX 2, Teclado Wooting 60HE, Monitor ZOWIE 240Hz, RTX 4080 Super`;
        } else if (cmd === "!rank") {
          reply = `🏆 Rank: ${STREAMER_INFO.rank.tierName} (${STREAMER_INFO.rank.currentRating}) - ${STREAMER_INFO.rank.leaderboardRank}`;
        } else if (cmd === "!discord") {
          reply = `🎮 Discord da comunidade: https://discord.gg/pxison`;
        } else {
          reply = `Comandos disponíveis: !mira, !sens, !setup, !rank, !discord`;
        }

        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            user: "Nightbot",
            badge: "BOT",
            color: "#ff4655",
            isBot: true,
            text: reply,
          },
        ]);
      }, 500);
    }
  };

  const handleFollow = () => {
    if (!hasFollowed) {
      setHasFollowed(true);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#9146ff", "#ff4655", "#00f5d4"],
      });
    }
  };

  const triggerBotCommand = (cmd: string) => {
    setInputText(cmd);
  };

  return (
    <section id="stream" className="py-20 bg-[#0b0f17] border-y border-[#1a2332] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#9146ff] uppercase tracking-wider mb-2">
              <Radio className="w-4 h-4 animate-pulse" />
              <span>TRANSMISSÃO AO VIVO // TWITCH INTERACTIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              ACOMPANHE A LIVE DO <span className="text-[#9146ff]">PXISON</span>
            </h2>
            <p className="text-zinc-400 text-sm mt-1 max-w-xl">
              Assista à gameplay Radiant em alta definição, interaja pelo chat ao vivo ou teste os comandos exclusivos do bot da stream.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={STREAMER_INFO.twitchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#9146ff] hover:bg-[#772ce8] text-white text-xs font-bold uppercase rounded flex items-center gap-2 transition-transform hover:scale-105 glow-purple"
            >
              <span>Abrir no App Twitch</span>
            </a>
          </div>
        </div>

        {/* Stream Interface Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-[#0e141f] border border-[#232f42] rounded-xl overflow-hidden shadow-2xl">
          
          {/* Main Video Viewport (8 cols) */}
          <div className="lg:col-span-8 flex flex-col bg-black">
            
            {/* Video Player Display */}
            <div className="relative aspect-video w-full bg-zinc-950 flex items-center justify-center overflow-hidden group">
              
              {/* Background gameplay artwork or simulated stream */}
              <Image
                src="https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png"
                alt="Valorant Stream Footage"
                fill
                className="object-cover opacity-80 group-hover:scale-102 transition-transform duration-500"
              />

              {/* Dark overlay with tactical HUD */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60 pointer-events-none" />

              {/* Streamer Cam Simulation Overlay */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-red-600 text-white font-mono font-bold text-xs rounded flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  AO VIVO
                </span>
                <span className="px-2.5 py-1 bg-black/70 backdrop-blur text-zinc-300 font-mono text-xs rounded border border-white/10 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#ff4655]" />
                  {STREAMER_INFO.status.viewers.toLocaleString()} espectadores
                </span>
              </div>

              {/* Streamer Facecam simulator on top-right */}
              <div className="absolute top-4 right-4 z-20 w-36 sm:w-44 aspect-video bg-[#0f1923] border-2 border-[#ff4655] rounded-md shadow-2xl overflow-hidden hidden sm:block">
                <div className="relative w-full h-full bg-gradient-to-tr from-slate-900 to-zinc-800 flex flex-col items-center justify-center p-2 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#ff4655]/20 border border-[#ff4655] flex items-center justify-center text-xs font-bold text-white mb-1">
                    JP
                  </div>
                  <div className="text-[10px] font-mono text-zinc-300 font-bold uppercase tracking-wider">
                    PXISON CAM
                  </div>
                  <div className="text-[9px] font-mono text-[#00f5d4]">
                    1080p 60fps
                  </div>
                </div>
                <div className="absolute bottom-1 right-1.5 text-[8px] font-mono bg-black/80 px-1 text-red-400">
                  REC
                </div>
              </div>

              {/* Center Play / Twitch Link action */}
              <div className="relative z-20 flex flex-col items-center gap-3 text-center px-4">
                <a
                  href={STREAMER_INFO.twitchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-[#ff4655] hover:bg-[#ff2b3d] text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 glow-red"
                  title="Assistir na Twitch"
                >
                  <Radio className="w-8 h-8 ml-0.5" />
                </a>
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wider drop-shadow-md">
                    TRANSMISSÃO AO VIVO DO PXISON
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-mono max-w-md drop-shadow">
                    Clique para sincronizar o áudio ou assistir no canal oficial da Twitch
                  </p>
                </div>
              </div>

              {/* Player Bottom Overlay Bar */}
              <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between text-xs font-mono text-zinc-300">
                <div className="flex items-center gap-3">
                  <span className="text-[#00f5d4]">FPS: 240</span>
                  <span className="hidden sm:inline text-zinc-500">|</span>
                  <span className="hidden sm:inline">RANKED RADIANT HIGH ELO</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#ff4655]/20 text-[#ff4655] border border-[#ff4655]/30">
                    JETT LOCKED
                  </span>
                </div>
              </div>
            </div>

            {/* Stream Info Bar below video */}
            <div className="p-4 bg-[#111722] border-t border-[#232f42] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#9146ff] flex-shrink-0">
                  <Image
                    src={STREAMER_INFO.agents[0].icon}
                    alt="Pxison Avatar"
                    width={48}
                    height={48}
                    className="bg-[#1a2332]"
                  />
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#111722]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-white font-bold text-base">Pxison</h4>
                    <span className="text-[10px] px-1.5 py-0.5 bg-[#9146ff]/20 text-[#b17dff] rounded font-bold">
                      PARCEIRO
                    </span>
                    <span className="text-xs font-mono text-zinc-400">João Pedro</span>
                  </div>
                  <p className="text-xs text-zinc-300 truncate max-w-sm sm:max-w-md">
                    {STREAMER_INFO.status.title}
                  </p>
                  <p className="text-[11px] font-mono text-[#00f5d4]">
                    VALORANT • Uptime: {STREAMER_INFO.status.uptime}
                  </p>
                </div>
              </div>

              {/* Streamer Action Buttons */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={handleFollow}
                  className={`flex-1 sm:flex-initial px-4 py-2 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                    hasFollowed
                      ? "bg-zinc-800 text-zinc-300 border border-zinc-700"
                      : "bg-[#9146ff] hover:bg-[#772ce8] text-white glow-purple"
                  }`}
                >
                  {hasFollowed ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span>Seguindo</span>
                    </>
                  ) : (
                    <>
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      <span>Seguir Canal</span>
                    </>
                  )}
                </button>

                <a
                  href={STREAMER_INFO.twitchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded text-xs font-bold uppercase bg-[#1e293b] hover:bg-[#283548] text-zinc-200 border border-[#334155] flex items-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Compartilhar</span>
                </a>
              </div>
            </div>

            {/* Quick Command Bar */}
            <div className="px-4 py-2 bg-[#090d14] border-t border-[#1e293b] flex items-center gap-2 overflow-x-auto text-[11px] font-mono">
              <span className="text-zinc-500 whitespace-nowrap">Comandos Rápidos:</span>
              {["!mira", "!sens", "!setup", "!rank", "!discord"].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => triggerBotCommand(cmd)}
                  className="px-2 py-0.5 rounded bg-[#16202e] hover:bg-[#ff4655] hover:text-white text-zinc-300 border border-[#232f42] transition-colors whitespace-nowrap"
                >
                  {cmd}
                </button>
              ))}
            </div>

          </div>

          {/* Interactive Chat Sidebar (4 cols) */}
          <div className="lg:col-span-4 flex flex-col h-[520px] lg:h-auto bg-[#0a0e17] border-t lg:border-t-0 lg:border-l border-[#232f42]">
            
            {/* Chat Header */}
            <div className="p-3.5 bg-[#0f1522] border-b border-[#232f42] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-white uppercase font-mono tracking-wider">
                <MessageSquare className="w-4 h-4 text-[#9146ff]" />
                <span>CHAT DA TRANSMISSÃO</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-green-950/80 text-green-400 border border-green-800/60 rounded">
                MODO AO VIVO
              </span>
            </div>

            {/* Chat Messages Feed */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 font-sans text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`leading-relaxed break-words rounded p-1.5 transition-colors ${
                    msg.isBot ? "bg-[#141b29] border-l-2 border-[#ff4655]" : "hover:bg-[#111724]"
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                    {msg.badge && (
                      <span
                        className={`text-[9px] font-mono font-bold px-1 py-0.2 rounded uppercase ${
                          msg.badge === "BOT"
                            ? "bg-[#ff4655]/20 text-[#ff4655] border border-[#ff4655]/40"
                            : msg.badge === "VIP"
                            ? "bg-[#3b82f6]/20 text-[#60a5fa]"
                            : msg.badge === "MOD"
                            ? "bg-amber-500/20 text-amber-400"
                            : "bg-[#9146ff]/20 text-[#b17dff]"
                        }`}
                      >
                        {msg.badge}
                      </span>
                    )}
                    <span className="font-bold" style={{ color: msg.color }}>
                      {msg.user}:
                    </span>
                  </div>
                  <span className="text-zinc-200">{msg.text}</span>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Chat Input Box */}
            <form onSubmit={handleSendMessage} className="p-3 bg-[#0d121c] border-t border-[#232f42]">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Envie uma mensagem ou comando (!mira, !sens)..."
                  className="w-full bg-[#141b28] border border-[#232f42] focus:border-[#9146ff] rounded px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 p-1.5 text-zinc-400 hover:text-white hover:bg-[#9146ff] rounded transition-colors"
                  aria-label="Enviar mensagem"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex items-center justify-between text-[10px] text-zinc-500 mt-2 font-mono">
                <span>Pressione Enter para enviar</span>
                <span>Chat simulado de alta fidelidade</span>
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
