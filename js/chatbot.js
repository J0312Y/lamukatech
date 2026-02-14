/* ═══════════════════════════════════════
   LAMUKA TECH — CHATBOT WIDGET
   Inclure dans toutes les pages avec :
   <script src="js/chatbot.js"></script>
   ═══════════════════════════════════════ */

(function() {
  'use strict';

  // ─── CONFIG ───
  const CONFIG = {
    botName: 'Lamu',
    botAvatar: 'L',
    whatsapp: '242060000000',
    companyName: 'Lamuka Tech',
    typingDelay: 600,
    maxHistory: 50,
  };

  // ─── KNOWLEDGE BASE ───
  const KB = {
    // Greetings
    greetings: {
      patterns: ['bonjour','salut','hello','hi','hey','bonsoir','coucou','yo','wesh','slt','bjr','bsr','cc'],
      responses: [
        `Bonjour ! 👋 Je suis **${CONFIG.botName}**, l'assistant virtuel de ${CONFIG.companyName}. Comment puis-je vous aider ?`,
        `Salut ! 😊 Bienvenue chez ${CONFIG.companyName}. Que puis-je faire pour vous ?`,
        `Hey ! 👋 Ravi de vous accueillir. Posez-moi vos questions sur nos produits et services !`
      ],
      quickReplies: ['Vos produits','Vos tarifs','Demander un devis','Parler à un humain']
    },

    // Bonresto
    bonresto: {
      patterns: ['bonresto','restaurant','gestion restaurant','resto','cuisine','serveur','commande restaurant','menu restaurant'],
      responses: [
        `🍽️ **Bonresto** est notre plateforme complète de gestion de restaurant !\n\nElle comprend **4 applications interconnectées** :\n• 📊 **Dashboard Web** — Suivi des ventes, analytics, gestion du menu\n• 📱 **App Client** — Commande en ligne, paiement Mobile Money, fidélité\n• 🧑‍🍳 **App Serveur** — Prise de commande tablette, gestion des tables\n• 👨‍🍳 **App Cuisine** — Écran intelligent avec file d'attente\n\nTout communique en temps réel ! 🚀`
      ],
      quickReplies: ['Tarifs Bonresto','Fonctionnalités','Demander une démo','Voir Kolo']
    },
    bonresto_tarifs: {
      patterns: ['tarif bonresto','prix bonresto','combien bonresto','coût bonresto','cout bonresto','abonnement bonresto','bonresto prix'],
      responses: [
        `💰 **Tarifs Bonresto** :\n\n🟢 **Starter** — 25 000 FCFA/mois\n→ Dashboard web, App client Android, jusqu'à 5 tables, Mobile Money\n\n🔵 **Professionnel** — 50 000 FCFA/mois ⭐ Populaire\n→ Tout du Starter + App serveur, App cuisine, tables illimitées, analytics, fidélité\n\n🟣 **Enterprise** — Sur devis\n→ Multi-établissements, API personnalisée, formation sur site, support 24/7\n\nSouhaitez-vous demander une démo gratuite ? 😊`
      ],
      quickReplies: ['Demander une démo','Voir Kolo','Voir Marketplace','Parler à un humain']
    },

    // Kolo
    kolo: {
      patterns: ['kolo','tontine','épargne','epargne','cotisation','savings','mobile money','circle','cercle'],
      responses: [
        `💰 **Kolo Tontine** — L'épargne collective digitale !\n\n**Comment ça marche en 4 étapes** :\n1️⃣ Créez un groupe et définissez les règles\n2️⃣ Invitez les membres par lien ou téléphone\n3️⃣ Cotisez via **Mobile Money** (Airtel, MTN, Orange)\n4️⃣ Recevez votre tour automatiquement\n\n**Fonctionnalités clés** :\n• 🔐 Sécurité biométrique\n• 💬 Messagerie temps réel\n• 📊 Suivi transparent\n• 🏢 Mode Corporate avec intégration paie\n• 📱 Double authentification\n\nDisponible sur Android et iOS ! 🚀`
      ],
      quickReplies: ['C\'est gratuit ?','Mode Corporate','Demander un accès','Voir Bonresto']
    },
    kolo_prix: {
      patterns: ['kolo prix','kolo gratuit','kolo combien','tarif kolo','cout kolo','coût kolo'],
      responses: [
        `💰 **Kolo est gratuit** pour les utilisateurs !\n\nL'application prend une petite commission sur chaque transaction Mobile Money. Pas d'abonnement, pas de frais cachés.\n\n**Mode Corporate** : tarification sur devis pour les entreprises souhaitant intégrer l'épargne collective dans leur politique RH.\n\nVous souhaitez en savoir plus ? 😊`
      ],
      quickReplies: ['Mode Corporate','Télécharger Kolo','Voir Bonresto','Parler à un humain']
    },

    // Marketplace
    marketplace: {
      patterns: ['marketplace','e-commerce','ecommerce','boutique','vendre','vendeur','achat','acheter','produit','shop'],
      responses: [
        `🛒 **Marketplace** — E-commerce multi-vendeurs pour l'Afrique !\n\n**Pour les vendeurs** 🏪 :\n• Ouvrez votre boutique en quelques minutes\n• Dashboard complet de gestion\n• Paiement Mobile Money intégré\n• Analytics de vente\n\n**Pour les acheteurs** 🛍️ :\n• +5000 produits dans 8 catégories\n• Paiement sécurisé\n• Suivi de livraison en temps réel\n• Avis et notations\n\n**Catégories** : Mode, Électronique, Maison, Alimentation, Beauté, Sport, Livres, Services`
      ],
      quickReplies: ['Devenir vendeur','C\'est gratuit ?','Voir Bonresto','Parler à un humain']
    },

    // Products general
    produits: {
      patterns: ['produit','produits','solution','solutions','offre','offres','quoi','que faites','what','proposez'],
      responses: [
        `🚀 **${CONFIG.companyName}** propose **3 solutions** :\n\n🍽️ **Bonresto** — Gestion complète de restaurant (4 apps)\n→ À partir de 25 000 FCFA/mois\n\n💰 **Kolo Tontine** — Épargne collective digitale\n→ Gratuit pour les utilisateurs\n\n🛒 **Marketplace** — E-commerce multi-vendeurs\n→ Inscription gratuite pour les vendeurs\n\nTous nos produits intègrent **Mobile Money** (Airtel, MTN, Orange) ! 💳\n\nLequel vous intéresse ? 😊`
      ],
      quickReplies: ['Bonresto','Kolo Tontine','Marketplace','Demander un devis']
    },

    // Pricing general
    tarifs: {
      patterns: ['tarif','prix','coût','cout','combien','pricing','gratuit','free','abonnement','payer','paiement','fcfa','argent'],
      responses: [
        `💰 **Nos tarifs** :\n\n🍽️ **Bonresto** :\n• Starter : 25 000 FCFA/mois\n• Pro : 50 000 FCFA/mois\n• Enterprise : Sur devis\n\n💰 **Kolo** : Gratuit (commission sur transactions)\n\n🛒 **Marketplace** : Inscription gratuite, commission sur ventes\n\nTous les paiements sont en **FCFA** via Mobile Money ou virement.\n\nVoulez-vous un devis personnalisé ? 📝`
      ],
      quickReplies: ['Demander un devis','Tarifs Bonresto','Parler à un humain']
    },

    // Services
    services: {
      patterns: ['service','services','développement','developpement','sur mesure','personnalisé','custom','application','app','site web','site','website'],
      responses: [
        `💻 **Nos services de développement** :\n\n• 💻 **Logiciel sur mesure** — ERP, CRM, systèmes de gestion\n• 📱 **Applications mobiles** — Android & iOS avec React Native\n• 🌐 **Développement web** — Sites, e-commerce, applications web\n• 🎨 **Design UI/UX** — Interfaces modernes et intuitives\n• 💳 **Intégration Mobile Money** — Airtel, MTN, Orange\n• 🔧 **Maintenance & Support** — Suivi continu\n\n**Notre stack** : React Native, Node.js, PostgreSQL, Prisma\n\nDemandez un devis gratuit ! ✨`
      ],
      quickReplies: ['Demander un devis','Voir nos produits','Technologies','Parler à un humain']
    },

    // Technologies
    tech: {
      patterns: ['technologie','technologies','tech','stack','react','node','postgresql','language','langage','framework'],
      responses: [
        `⚡ **Notre stack technique** :\n\n• ⚛️ **React Native** — Apps mobiles cross-platform\n• 🟢 **Node.js / Express** — Backend API\n• 🐘 **PostgreSQL** — Base de données\n• 🔺 **Prisma** — ORM\n• 🔵 **TypeScript** — Typage\n• 🎨 **Figma** — Design\n• ☁️ **Cloud** — Hébergement\n• 🔐 **JWT + Biométrie** — Sécurité\n\nNous utilisons les meilleures technologies du marché ! 🚀`
      ],
      quickReplies: ['Voir nos produits','Demander un devis','Offres d\'emploi']
    },

    // Contact / Devis
    contact: {
      patterns: ['contact','contacter','devis','joindre','appeler','email','mail','téléphone','telephone','numéro','numero','adresse'],
      responses: [
        `📞 **Comment nous contacter** :\n\n📧 **Email** : business@lamuka-tech.com\n📞 **Téléphone** : +242 06 000 00 00\n💬 **WhatsApp** : Cliquez ci-dessous\n📍 **Adresse** : Brazzaville, République du Congo\n\n⏰ **Horaires** : Lun-Ven 8h-18h | Sam 9h-14h\n\nVous pouvez aussi remplir le formulaire sur notre [page contact](contact.html) ! ✨`
      ],
      quickReplies: ['Parler sur WhatsApp','Page contact','Voir nos produits']
    },

    // About
    about: {
      patterns: ['qui êtes','qui etes','about','à propos','a propos','lamuka','signifie','entreprise','société','equipe','équipe','fondateur'],
      responses: [
        `🌍 **Lamuka Tech** — "Lamuka" signifie "Réveillez-vous" en Lingala !\n\nNous sommes une entreprise tech basée à **Brazzaville, Congo** 🇨🇬\n\n**Notre mission** : Digitaliser l'Afrique en créant des solutions adaptées au marché local.\n\n**Chiffres clés** :\n• 3+ produits lancés\n• 500+ utilisateurs\n• 5+ pays couverts\n• 10+ experts dans l'équipe\n\n**Fondée en 2022**, nous intégrons les réalités locales : Mobile Money, langues francophones, design adapté.`
      ],
      quickReplies: ['Voir nos produits','Offres d\'emploi','Demander un devis']
    },

    // Careers
    careers: {
      patterns: ['emploi','travail','job','recrutement','recrute','poste','postuler','carrière','carriere','stage','stagiaire','rejoindre','travailler'],
      responses: [
        `👥 **On recrute !** Postes ouverts :\n\n• 💻 **Développeur React Native** — Temps plein\n• 🖥️ **Développeur Backend Node.js** — Temps plein\n• 🎨 **Designer UI/UX** — Temps plein / Freelance\n• 📱 **Community Manager** — Temps partiel\n• 🎓 **Stagiaire Développement** — 3-6 mois\n\n📍 Brazzaville / Remote\n\nPostulez directement sur notre [page carrières](career.html) ! Vous pouvez uploader votre CV et vos compétences seront détectées automatiquement 🤖`
      ],
      quickReplies: ['Page carrières','Voir nos produits','Parler à un humain']
    },

    // Mobile Money
    mobilemoney: {
      patterns: ['mobile money','airtel','mtn','orange','paiement','payer','momo','orange money','airtel money'],
      responses: [
        `💳 **Paiement Mobile Money** intégré dans tous nos produits !\n\nNous supportons :\n• 🔴 **Airtel Money**\n• 🟡 **MTN MoMo**\n• 🟠 **Orange Money**\n\nTransactions sécurisées en **FCFA**. Automatisation des paiements et reversements.\n\nBesoin d'intégrer Mobile Money dans votre application ? Contactez-nous ! 🚀`
      ],
      quickReplies: ['Voir Kolo','Voir Bonresto','Demander un devis']
    },

    // Thanks
    thanks: {
      patterns: ['merci','thanks','thank','parfait','super','excellent','génial','genial','cool','top','bien','ok','d\'accord','entendu'],
      responses: [
        `Avec plaisir ! 😊 N'hésitez pas si vous avez d'autres questions. Je suis là pour vous aider !`,
        `Merci à vous ! 🙏 Si besoin de quoi que ce soit, je suis disponible 24/7 !`,
        `Super ! 😄 Bonne continuation, et n'hésitez pas à revenir !`
      ],
      quickReplies: ['Voir nos produits','Demander un devis','Parler à un humain']
    },

    // Goodbye
    bye: {
      patterns: ['bye','au revoir','aurevoir','à bientôt','a bientot','ciao','bonne journée','bonne soirée'],
      responses: [
        `Au revoir ! 👋 Bonne journée et à bientôt sur ${CONFIG.companyName} ! 🚀`,
        `À bientôt ! 😊 N'hésitez pas à revenir si vous avez des questions !`
      ],
      quickReplies: []
    },

    // Human / WhatsApp
    human: {
      patterns: ['humain','personne','agent','parler','real person','whatsapp','human','conseiller','aide humaine','vrai personne'],
      responses: [
        `Bien sûr ! 😊 Je vous mets en relation avec notre équipe.\n\nCliquez ci-dessous pour nous contacter directement sur **WhatsApp** 👇`
      ],
      quickReplies: ['__whatsapp__'],
      isHumanRequest: true
    },

    // Fallback
    fallback: {
      responses: [
        `Hmm, je ne suis pas sûr de comprendre 🤔 Pouvez-vous reformuler ?\n\nJe peux vous aider avec :\n• Nos **produits** (Bonresto, Kolo, Marketplace)\n• Nos **tarifs**\n• Nos **services** de développement\n• Le **recrutement**\n• Vous mettre en contact avec un **humain**`,
        `Je n'ai pas bien compris votre question 😅\n\nEssayez de me demander des infos sur nos **produits**, **prix**, **services** ou dites **"parler à un humain"** pour être redirigé vers WhatsApp.`
      ],
      quickReplies: ['Vos produits','Vos tarifs','Services','Parler à un humain']
    }
  };

  // ─── INJECT HTML & CSS ───
  function injectChatbot() {
    // CSS
    const style = document.createElement('style');
    style.textContent = `
      .cb-btn{position:fixed;bottom:24px;right:24px;z-index:9998;width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#8b5cf6);color:#fff;border:none;cursor:pointer;font-size:1.5rem;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 25px rgba(59,130,246,.4);transition:all .3s cubic-bezier(.34,1.56,.64,1)}
      .cb-btn:hover{transform:scale(1.08);box-shadow:0 8px 30px rgba(59,130,246,.5)}
      .cb-btn.open{transform:rotate(180deg) scale(1)}
      .cb-badge{position:absolute;top:-2px;right:-2px;width:20px;height:20px;background:#ef4444;border-radius:50%;font-size:.65rem;font-weight:700;display:flex;align-items:center;justify-content:center;border:2px solid #fff;animation:cbPulse 2s infinite}
      @keyframes cbPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}
      .cb-window{position:fixed;bottom:100px;right:24px;width:380px;max-height:560px;background:#fff;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,.15);z-index:9999;display:none;flex-direction:column;overflow:hidden;transform:translateY(20px) scale(.95);opacity:0;transition:all .3s cubic-bezier(.34,1.56,.64,1)}
      .cb-window.open{display:flex;transform:translateY(0) scale(1);opacity:1}
      .cb-header{background:linear-gradient(135deg,#0b1d3a,#132d5e);padding:18px 20px;color:#fff;display:flex;align-items:center;gap:12px;flex-shrink:0}
      .cb-header::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#3b82f6,#8b5cf6,#f97316)}
      .cb-header{position:relative}
      .cb-avatar{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#8b5cf6);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.1rem;flex-shrink:0;font-family:'Outfit',sans-serif}
      .cb-hinfo h4{font-family:'Outfit',sans-serif;font-size:.95rem;font-weight:700;margin:0;color:#fff}
      .cb-hinfo p{font-size:.72rem;color:rgba(255,255,255,.5);margin:2px 0 0}
      .cb-online{display:inline-flex;align-items:center;gap:4px;font-size:.68rem;color:#34d399}
      .cb-online::before{content:'';width:6px;height:6px;background:#34d399;border-radius:50%;animation:cbBlink 2s infinite}
      @keyframes cbBlink{0%,100%{opacity:1}50%{opacity:.3}}
      .cb-close{position:absolute;right:16px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,.1);border:none;color:#fff;width:32px;height:32px;border-radius:50%;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;transition:.3s}
      .cb-close:hover{background:rgba(255,255,255,.2)}
      .cb-msgs{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:8px;background:#f8fafc;min-height:300px}
      .cb-msgs::-webkit-scrollbar{width:4px}.cb-msgs::-webkit-scrollbar-thumb{background:#d1d5db;border-radius:10px}
      .cb-msg{max-width:85%;display:flex;gap:8px;animation:cbMsgIn .3s ease}
      @keyframes cbMsgIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      .cb-msg.bot{align-self:flex-start}
      .cb-msg.user{align-self:flex-end;flex-direction:row-reverse}
      .cb-msg-avatar{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#8b5cf6);display:flex;align-items:center;justify-content:center;color:#fff;font-size:.6rem;font-weight:800;flex-shrink:0;font-family:'Outfit',sans-serif}
      .cb-msg.user .cb-msg-avatar{background:linear-gradient(135deg,#f97316,#ea580c)}
      .cb-bubble{padding:10px 14px;border-radius:16px;font-size:.84rem;line-height:1.55;font-family:'DM Sans',sans-serif}
      .cb-msg.bot .cb-bubble{background:#fff;color:#374151;border:1px solid #e5e7eb;border-top-left-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.04)}
      .cb-msg.user .cb-bubble{background:linear-gradient(135deg,#3b82f6,#2563eb);color:#fff;border-top-right-radius:4px}
      .cb-bubble strong{font-weight:700;color:#0b1d3a}
      .cb-msg.user .cb-bubble strong{color:#fff}
      .cb-typing{align-self:flex-start;display:flex;gap:8px;padding:4px 0}
      .cb-typing .cb-bubble{display:flex;gap:4px;align-items:center;padding:12px 18px}
      .cb-dot{width:7px;height:7px;background:#9ca3af;border-radius:50%;animation:cbTyping 1.2s infinite}
      .cb-dot:nth-child(2){animation-delay:.2s}.cb-dot:nth-child(3){animation-delay:.4s}
      @keyframes cbTyping{0%,100%{opacity:.3;transform:translateY(0)}50%{opacity:1;transform:translateY(-4px)}}
      .cb-qr{display:flex;flex-wrap:wrap;gap:6px;padding:4px 0 4px 36px;animation:cbMsgIn .3s ease}
      .cb-qr button{padding:7px 14px;background:#fff;border:1.5px solid #e5e7eb;border-radius:99px;font-family:'Outfit',sans-serif;font-size:.76rem;font-weight:600;color:#3b82f6;cursor:pointer;transition:.2s;white-space:nowrap}
      .cb-qr button:hover{background:#eff6ff;border-color:#3b82f6}
      .cb-qr button.wa{background:#25d366;color:#fff;border-color:#25d366}
      .cb-qr button.wa:hover{background:#1da855}
      .cb-input{display:flex;gap:8px;padding:14px 16px;border-top:1px solid #e5e7eb;background:#fff;flex-shrink:0}
      .cb-input input{flex:1;border:2px solid #e5e7eb;border-radius:99px;padding:10px 16px;font-family:'DM Sans',sans-serif;font-size:.85rem;transition:.3s;background:#f9fafb}
      .cb-input input:focus{outline:none;border-color:#3b82f6;background:#fff;box-shadow:0 0 0 3px rgba(59,130,246,.08)}
      .cb-input button{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#2563eb);color:#fff;border:none;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;transition:.2s;flex-shrink:0}
      .cb-input button:hover{transform:scale(1.05)}
      .cb-powered{text-align:center;padding:6px;font-size:.62rem;color:#9ca3af;background:#f9fafb;border-top:1px solid #f3f4f6;font-family:'Outfit',sans-serif}
      @media(max-width:480px){.cb-window{right:0;left:0;bottom:0;top:0;max-height:none;width:100%;border-radius:0}.cb-btn{bottom:16px;right:16px}}
    `;
    document.head.appendChild(style);

    // HTML
    const html = `
      <button class="cb-btn" id="cbToggle" aria-label="Chat">
        <i class="fas fa-comments"></i>
        <span class="cb-badge" id="cbBadge">1</span>
      </button>
      <div class="cb-window" id="cbWindow">
        <div class="cb-header">
          <div class="cb-avatar">${CONFIG.botAvatar}</div>
          <div class="cb-hinfo">
            <h4>${CONFIG.botName} — Assistant IA</h4>
            <p><span class="cb-online">En ligne</span> · Répond instantanément</p>
          </div>
          <button class="cb-close" id="cbClose">✕</button>
        </div>
        <div class="cb-msgs" id="cbMsgs"></div>
        <div class="cb-input">
          <input type="text" id="cbInput" placeholder="Tapez votre message..." autocomplete="off">
          <button id="cbSend"><i class="fas fa-paper-plane"></i></button>
        </div>
        <div class="cb-powered">⚡ Propulsé par ${CONFIG.companyName}</div>
      </div>
    `;
    const div = document.createElement('div');
    div.id = 'chatbot-widget';
    div.innerHTML = html;
    document.body.appendChild(div);

    // Remove old whatsapp float if exists
    const waFloat = document.querySelector('.whatsapp-float');
    if (waFloat) waFloat.style.display = 'none';
  }

  // ─── CHAT LOGIC ───
  let isOpen = false;
  let messageCount = 0;

  function init() {
    injectChatbot();

    const toggle = document.getElementById('cbToggle');
    const close = document.getElementById('cbClose');
    const input = document.getElementById('cbInput');
    const send = document.getElementById('cbSend');

    toggle.addEventListener('click', toggleChat);
    close.addEventListener('click', toggleChat);
    send.addEventListener('click', handleSend);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleSend(); });

    // Welcome message after 2s
    setTimeout(() => {
      if (!isOpen) document.getElementById('cbBadge').style.display = 'flex';
    }, 2000);
  }

  function toggleChat() {
    isOpen = !isOpen;
    const win = document.getElementById('cbWindow');
    const btn = document.getElementById('cbToggle');
    const badge = document.getElementById('cbBadge');

    if (isOpen) {
      win.classList.add('open');
      btn.classList.add('open');
      btn.innerHTML = '<i class="fas fa-times"></i>';
      badge.style.display = 'none';
      document.getElementById('cbInput').focus();

      // Send welcome if first time
      if (messageCount === 0) {
        setTimeout(() => {
          addBotMessage(`Bonjour ! 👋 Je suis **${CONFIG.botName}**, votre assistant ${CONFIG.companyName}.\n\nJe peux vous renseigner sur nos produits, tarifs et services. Comment puis-je vous aider ?`, ['Vos produits', 'Vos tarifs', 'Demander un devis', 'Parler à un humain']);
        }, 400);
      }
    } else {
      win.classList.remove('open');
      btn.classList.remove('open');
      btn.innerHTML = '<i class="fas fa-comments"></i>';
    }
  }

  function handleSend() {
    const input = document.getElementById('cbInput');
    const text = input.value.trim();
    if (!text) return;

    addUserMessage(text);
    input.value = '';

    // Show typing
    showTyping();

    // Find response
    setTimeout(() => {
      removeTyping();
      const response = findResponse(text);
      addBotMessage(response.text, response.quickReplies);

      // If human request, add WhatsApp button
      if (response.isHuman) {
        addWhatsAppButton(text);
      }
    }, CONFIG.typingDelay + Math.random() * 500);
  }

  function findResponse(input) {
    const text = input.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();

    let bestMatch = null;
    let bestScore = 0;

    for (const [key, data] of Object.entries(KB)) {
      if (key === 'fallback') continue;
      if (!data.patterns) continue;

      for (const pattern of data.patterns) {
        const p = pattern.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if (text.includes(p) || p.includes(text)) {
          const score = p.length + (text === p ? 50 : 0);
          if (score > bestScore) {
            bestScore = score;
            bestMatch = data;
          }
        }
      }
    }

    if (!bestMatch) bestMatch = KB.fallback;

    const responses = bestMatch.responses;
    const responseText = responses[Math.floor(Math.random() * responses.length)];
    const quickReplies = bestMatch.quickReplies || KB.fallback.quickReplies;

    return {
      text: responseText,
      quickReplies: quickReplies,
      isHuman: bestMatch.isHumanRequest || false
    };
  }

  function addUserMessage(text) {
    messageCount++;
    const msgs = document.getElementById('cbMsgs');
    const div = document.createElement('div');
    div.className = 'cb-msg user';
    div.innerHTML = `<div class="cb-msg-avatar">Vous</div><div class="cb-bubble">${escapeHtml(text)}</div>`;
    msgs.appendChild(div);
    scrollToBottom();
  }

  function addBotMessage(text, quickReplies) {
    messageCount++;
    const msgs = document.getElementById('cbMsgs');

    // Format markdown-like bold
    let formatted = escapeHtml(text)
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#3b82f6;text-decoration:underline;">$1</a>');

    const div = document.createElement('div');
    div.className = 'cb-msg bot';
    div.innerHTML = `<div class="cb-msg-avatar">${CONFIG.botAvatar}</div><div class="cb-bubble">${formatted}</div>`;
    msgs.appendChild(div);

    // Quick replies
    if (quickReplies && quickReplies.length > 0) {
      const qrDiv = document.createElement('div');
      qrDiv.className = 'cb-qr';
      quickReplies.forEach(qr => {
        if (qr === '__whatsapp__') return; // handled separately
        const btn = document.createElement('button');
        if (qr === 'Parler sur WhatsApp' || qr === 'Parler à un humain') {
          btn.className = qr.includes('WhatsApp') ? 'wa' : '';
        }
        btn.textContent = qr;
        btn.addEventListener('click', () => {
          if (qr === 'Parler à un humain' || qr === 'Parler sur WhatsApp') {
            addUserMessage(qr);
            showTyping();
            setTimeout(() => {
              removeTyping();
              addBotMessage(KB.human.responses[0], []);
              addWhatsAppButton('');
            }, CONFIG.typingDelay);
          } else if (qr === 'Page contact') {
            window.location.href = 'contact.html';
          } else if (qr === 'Page carrières') {
            window.location.href = 'career.html';
          } else if (qr === 'Demander un devis' || qr === 'Demander une démo' || qr === 'Demander une démo gratuite') {
            window.location.href = 'contact.html';
          } else if (qr === 'Offres d\'emploi') {
            window.location.href = 'career.html';
          } else {
            // Simulate user clicking a quick reply
            addUserMessage(qr);
            showTyping();
            setTimeout(() => {
              removeTyping();
              const resp = findResponse(qr);
              addBotMessage(resp.text, resp.quickReplies);
              if (resp.isHuman) addWhatsAppButton('');
            }, CONFIG.typingDelay);
          }
          // Remove quick replies after click
          qrDiv.remove();
        });
        qrDiv.appendChild(btn);
      });
      msgs.appendChild(qrDiv);
    }

    scrollToBottom();
  }

  function addWhatsAppButton(context) {
    const msgs = document.getElementById('cbMsgs');
    const div = document.createElement('div');
    div.className = 'cb-qr';
    const btn = document.createElement('button');
    btn.className = 'wa';
    btn.innerHTML = '<i class="fab fa-whatsapp" style="margin-right:6px;"></i> Ouvrir WhatsApp';
    btn.addEventListener('click', () => {
      const msg = encodeURIComponent(`Bonjour Lamuka Tech ! Je viens de votre site web. ${context ? 'Question: ' + context : ''}`);
      window.open(`https://wa.me/${CONFIG.whatsapp}?text=${msg}`, '_blank');
    });
    div.appendChild(btn);
    msgs.appendChild(div);
    scrollToBottom();
  }

  function showTyping() {
    const msgs = document.getElementById('cbMsgs');
    const div = document.createElement('div');
    div.className = 'cb-msg bot cb-typing';
    div.id = 'cbTyping';
    div.innerHTML = `<div class="cb-msg-avatar">${CONFIG.botAvatar}</div><div class="cb-bubble"><span class="cb-dot"></span><span class="cb-dot"></span><span class="cb-dot"></span></div>`;
    msgs.appendChild(div);
    scrollToBottom();
  }

  function removeTyping() {
    const typing = document.getElementById('cbTyping');
    if (typing) typing.remove();
  }

  function scrollToBottom() {
    const msgs = document.getElementById('cbMsgs');
    setTimeout(() => { msgs.scrollTop = msgs.scrollHeight; }, 50);
  }

  function escapeHtml(text) {
    const d = document.createElement('div');
    d.textContent = text;
    return d.innerHTML;
  }

  // ─── INIT ───
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
