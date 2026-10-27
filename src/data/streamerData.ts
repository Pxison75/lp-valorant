export interface AgentStat {
  name: string;
  role: string;
  portrait: string;
  icon: string;
  bg: string;
  matches: number;
  winRate: number;
  kd: number;
  hsRate: number;
  playstyle: string;
  signatureWeapon: string;
}

export interface HighlightClip {
  id: string;
  title: string;
  map: string;
  agent: string;
  kills: string;
  duration: string;
  date: string;
  views: string;
  thumbnail: string;
  embedUrl?: string;
}

export const STREAMER_INFO = {
  name: "João Pedro",
  tag: "Pxison",
  twitchUsername: "pxison",
  twitchUrl: "https://twitch.tv/pxison",
  riotId: "Pxison#JOTA",
  role: "Duelista / Flex Player",
  team: "Free Agent / Streamer",
  location: "São Paulo, Brasil",
  bio: "Streamer e player Radiant de Valorant. Focado em gameplay de alto nível, clutch plays de Jett e Reyna e troca de ideia com o chat todos os dias na Twitch.",
  
  status: {
    isLive: true,
    viewers: 1420,
    title: "🎯 GRINDANDO TOP 100 RADIANT | JETT CLUTCHES | !mira !sens !discord",
    category: "VALORANT",
    uptime: "3h 42m",
  },

  rank: {
    tierName: "RADIANT",
    peakTierName: "RADIANT #89",
    currentRating: "684 RR",
    leaderboardRank: "#142 BR",
    icon: "https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/27/largeicon.png",
    immortalIcon: "https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/26/largeicon.png",
  },

  stats: {
    winRate: "66.4%",
    wins: 312,
    losses: 158,
    kdRatio: "1.52",
    hsPercentage: "36.8%",
    damagePerRound: "174.2",
    aces: 47,
    firstBloodsPerRound: "0.22",
    clutchesWon: 184,
    matchesPlayed: 470,
  },

  agents: [
    {
      name: "Jett",
      role: "Duelist",
      portrait: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png",
      icon: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png",
      bg: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/background.png",
      matches: 172,
      winRate: 69.2,
      kd: 1.64,
      hsRate: 38.4,
      playstyle: "Main absoluto. Dash agressivo para criar espaço, mira afiada de Operator e facas letais.",
      signatureWeapon: "Operator & Vandal",
    },
    {
      name: "Reyna",
      role: "Duelist",
      portrait: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportrait.png",
      icon: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/displayicon.png",
      bg: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/background.png",
      matches: 114,
      winRate: 65.8,
      kd: 1.58,
      hsRate: 41.2,
      playstyle: "Para partidas onde o que decide é pura mira e first blood. Excelente recuperação de HP.",
      signatureWeapon: "Vandal Kuronami",
    },
    {
      name: "Omen",
      role: "Controller",
      portrait: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png",
      icon: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/displayicon.png",
      bg: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/background.png",
      matches: 78,
      winRate: 64.1,
      kd: 1.38,
      hsRate: 33.5,
      playstyle: "Controle sombrio. Smokes one-way precisas, teleportes surpresa e lurk em mapas grandes.",
      signatureWeapon: "Phantom Recon",
    },
    {
      name: "Sova",
      role: "Initiator",
      portrait: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png",
      icon: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png",
      bg: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/background.png",
      matches: 62,
      winRate: 63.5,
      kd: 1.42,
      hsRate: 34.0,
      playstyle: "Dardo de choque letal pós-plant e recon darts milimétricos em Ascent e Haven.",
      signatureWeapon: "Vandal Prime",
    },
    {
      name: "Iso",
      role: "Duelist",
      portrait: "https://media.valorant-api.com/agents/0e38b510-41a8-5780-5e8f-568b2a4f2d6c/fullportrait.png",
      icon: "https://media.valorant-api.com/agents/0e38b510-41a8-5780-5e8f-568b2a4f2d6c/displayicon.png",
      bg: "https://media.valorant-api.com/agents/0e38b510-41a8-5780-5e8f-568b2a4f2d6c/background.png",
      matches: 44,
      winRate: 68.0,
      kd: 1.54,
      hsRate: 37.9,
      playstyle: "Escudo inquebrável para abrir bomb sites e duelo isolado no domínio dimensional.",
      signatureWeapon: "Vandal Araxys",
    },
  ] as AgentStat[],

  weapons: [
    {
      name: "Vandal",
      category: "Fuzil de Assalto",
      skinFavorite: "Kuronami / Vingança de Gaia",
      kills: "3.420",
      accuracy: "38.2% HS",
      icon: "https://media.valorant-api.com/weapons/9c82e19d-4575-0200-1a81-3eacf00cf872/displayicon.png",
    },
    {
      name: "Phantom",
      category: "Fuzil Silenciado",
      skinFavorite: "Recon / Oni",
      kills: "1.280",
      accuracy: "34.6% HS",
      icon: "https://media.valorant-api.com/weapons/ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a/displayicon.png",
    },
    {
      name: "Operator",
      category: "Sniper Rifle",
      skinFavorite: "Araxys / Ion",
      kills: "940",
      accuracy: "84.5% Hit",
      icon: "https://media.valorant-api.com/weapons/a03b24d3-4319-996d-0f8c-94bbfba1dfc7/displayicon.png",
    },
    {
      name: "Sheriff",
      category: "Pistola Pesada",
      skinFavorite: "Neo Fronteira / Saqueador",
      kills: "720",
      accuracy: "52.1% HS",
      icon: "https://media.valorant-api.com/weapons/e336c6b8-418d-9340-d77f-7a9e4cfe0702/displayicon.png",
    },
  ],

  settings: {
    mouse: {
      dpi: 800,
      inGameSens: 0.285,
      edpi: 228,
      pollingRate: "4000 Hz",
      windowsSens: "6/11 (Raw Input ON)",
      scopedSens: "1.0",
    },
    crosshair: {
      code: "0;s;1;P;c;5;o;1;d;1;z;3;f;0;0t;1;0l;2;0o;2;0a;1;0f;0;1b;0",
      name: "Pxison Clean Cyan Dot",
      color: "Ciano (#00F5D4)",
      outlines: "Ligado (Opacidade 1.0, Espessura 1)",
      centerDot: "Ligado (Espessura 2)",
      innerLines: "1 / 2 / 2 / 0",
      fadeOnFiringError: "Desligado",
    },
    video: {
      resolution: "1920x1080 (16:9)",
      refreshRate: "240 Hz",
      displayMode: "Fullscreen Exclusivo",
      materialQuality: "Baixo",
      textureQuality: "Baixo",
      detailQuality: "Baixo",
      uiQuality: "Médio",
      vignette: "Desligado",
      vsync: "Desligado",
      antiAliasing: "MSAA 4x",
      anisotropicFilter: "8x",
      nvidiaReflex: "Ligado + Boost",
    },
    peripherals: [
      {
        category: "Mouse",
        name: "Logitech G Pro X Superlight 2",
        detail: "Preto, 60g, PTFE Tiger Ice v2",
      },
      {
        category: "Mousepad",
        name: "Artisan Ninja FX Zero XSoft XL",
        detail: "Superfície de controle híbrido japonesa",
      },
      {
        category: "Teclado",
        name: "Wooting 60HE+ Hall Effect",
        detail: "Rapid Trigger 0.15mm, Switches Gateron Jade",
      },
      {
        category: "Monitor",
        name: "BenQ ZOWIE XL2546K 240Hz",
        detail: "DyAc+ ativado no Premium, Black eQualizer 12",
      },
      {
        category: "Fone",
        name: "HyperX Cloud II Wireless",
        detail: "Drivers de 53mm com equalização personalizada",
      },
      {
        category: "Microfone",
        name: "Shure SM7B + TC Helicon GoXLR",
        detail: "Voz limpa para a transmissão na Twitch",
      },
    ],
  },

  schedule: [
    { day: "Segunda-feira", time: "18:00 - 00:00", description: "Grind Radiante Solo/Duo High Elo" },
    { day: "Terça-feira", time: "18:00 - 00:00", description: "Foco em Jett & Duelistas + Ranked" },
    { day: "Quarta-feira", time: "18:00 - 00:00", description: "Ranked com Streamers Convidados" },
    { day: "Quinta-feira", time: "18:00 - 00:00", description: "Treino de Lineups, Mira e Ranked" },
    { day: "Sexta-feira", time: "18:00 - Madrugada", description: "Corujão do Pxison & Sub Games" },
    { day: "Sábado", time: "16:00 - 22:00", description: "Premier & Campeonatos Comunitários" },
    { day: "Domingo", time: "Folga ou Especial", description: "VOD Review & Análise de Clipes do Chat" },
  ],

  highlights: [
    {
      id: "clip-1",
      title: "1v5 ACE IMPOSSÍVEL NA ASCENT COM JETT",
      map: "Ascent",
      agent: "Jett",
      kills: "5 Kills (Ace Clutch)",
      duration: "0:48",
      date: "Há 2 dias",
      views: "18.4K",
      thumbnail: "https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png",
    },
    {
      id: "clip-2",
      title: "REYNA 1 TAP MACHINE NO BOMB A DO HAVEN",
      map: "Haven",
      agent: "Reyna",
      kills: "4 Kills (Quadra HS)",
      duration: "0:36",
      date: "Há 4 dias",
      views: "12.8K",
      thumbnail: "https://media.valorant-api.com/maps/2bee0dc9-4ffe-519b-1cbd-7fbe763a6047/splash.png",
    },
    {
      id: "clip-3",
      title: "CLUTCH 1v3 ROUND DO OVERTIME NO ABYSS",
      map: "Abyss",
      agent: "Omen",
      kills: "3 Kills (Overtime Win)",
      duration: "1:02",
      date: "Há 1 semana",
      views: "9.6K",
      thumbnail: "https://media.valorant-api.com/maps/224b0a95-48b9-f703-1bd8-67aca101a61f/splash.png",
    },
    {
      id: "clip-4",
      title: "ISO ESCUDO PERFEITO + ACE NO SUNSET",
      map: "Sunset",
      agent: "Iso",
      kills: "5 Kills (Ace)",
      duration: "0:52",
      date: "Há 2 semanas",
      views: "14.1K",
      thumbnail: "https://media.valorant-api.com/maps/92584fbe-486a-b1b2-9faa-39b0f486b498/splash.png",
    },
  ],

  socials: [
    { name: "Twitch", url: "https://twitch.tv/pxison", handle: "@pxison", color: "#9146FF", icon: "Twitch" },
    { name: "YouTube", url: "https://youtube.com/@pxison", handle: "Pxison Valorant", color: "#FF0000", icon: "Youtube" },
    { name: "TikTok", url: "https://tiktok.com/@pxison", handle: "@pxisonval", color: "#00F5D4", icon: "Video" },
    { name: "Twitter / X", url: "https://x.com/pxison", handle: "@pxison_fps", color: "#1DA1F2", icon: "Twitter" },
    { name: "Discord", url: "https://discord.gg/pxison", handle: "Tropa do Pxison (4.8k)", color: "#5865F2", icon: "MessageSquare" },
    { name: "Instagram", url: "https://instagram.com/pxison", handle: "@pxison.fps", color: "#E1306C", icon: "Instagram" },
  ],
};
