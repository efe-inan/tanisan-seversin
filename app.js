// ============================================================================
// TANISAN SEVERSİN - OYUN MOTORU (GAME ENGINE)
// Tek Cihaz Pass & Play, Dinamik Tema Yönetimi, Ceza Algoritmaları
// ============================================================================

(function () {
  'use strict';

  // --- STATE (Tamamen bellekte tutulur, F5 ile sıfırlanır) ---
  const state = {
    players: [],
    selectedCategories: new Set(['icebreaker', 'friends', 'flirt']),
    gameMode: 'alcohol', // 'alcohol' | 'non_alcohol'
    currentPlayerIndex: 0,
    totalCardsDrawn: 0,
    isCardDrawn: false,
    currentCard: null,
    
    // Tema yönetimi için (null ise base tema)
    activeCardCategory: null,
    
    // Alkolsüz modda pas cezası (3 ekstra kart)
    penalty: {
      isActive: false,
      playerIndex: 0,
      totalCards: 3,
      remainingCards: 0
    },

    // Kategori bazlı tekrarsız deste havuzu (Shuffle Bag)
    categoryDecks: {}
  };

  // DOM Elements
  const DOM = {
    setupScreen: document.getElementById('setupScreen'),
    gameScreen: document.getElementById('gameScreen'),
    
    // Setup
    playerNameInput: document.getElementById('playerNameInput'),
    btnAddPlayer: document.getElementById('btnAddPlayer'),
    playersList: document.getElementById('playersList'),
    noPlayersText: document.getElementById('noPlayersText'),
    playerCountHint: document.getElementById('playerCountHint'),
    btnSelectAllCats: document.getElementById('btnSelectAllCats'),
    btnClearCats: document.getElementById('btnClearCats'),
    categoriesContainer: document.getElementById('categoriesContainer'),
    modeAlcohol: document.getElementById('modeAlcohol'),
    modeNonAlcohol: document.getElementById('modeNonAlcohol'),
    btnStartGame: document.getElementById('btnStartGame'),

    // Game Topbar
    btnExitGame: document.getElementById('btnExitGame'),
    btnToggleMute: document.getElementById('btnToggleMute'),
    muteIconSvg: document.getElementById('muteIconSvg'),
    drawnCardCount: document.getElementById('drawnCardCount'),

    // Turn & Penalty
    turnBanner: document.getElementById('turnBanner'),
    turnPlayerName: document.getElementById('turnPlayerName'),
    penaltyBanner: document.getElementById('penaltyBanner'),
    penaltyCurrentStep: document.getElementById('penaltyCurrentStep'),
    pDot1: document.getElementById('pDot1'),
    pDot2: document.getElementById('pDot2'),
    pDot3: document.getElementById('pDot3'),

    // Card Stage
    activeCard: document.getElementById('activeCard'),
    cardPromptState: document.getElementById('cardPromptState'),
    cardPromptTitle: document.getElementById('cardPromptTitle'),
    cardPromptSub: document.getElementById('cardPromptSub'),
    cardContentState: document.getElementById('cardContentState'),
    cardQuestionText: document.getElementById('cardQuestionText'),
    cardFooterCat: document.getElementById('cardFooterCat'),

    // Actions
    gameActions: document.getElementById('gameActions'),
    btnAnswer: document.getElementById('btnAnswer'),
    btnPass: document.getElementById('btnPass'),

    // Modals
    shotModal: document.getElementById('shotModal'),
    shotPlayerName: document.getElementById('shotPlayerName'),
    btnConfirmShot: document.getElementById('btnConfirmShot'),
    confirmRestartModal: document.getElementById('confirmRestartModal'),
    btnCancelRestart: document.getElementById('btnCancelRestart'),
    btnConfirmRestart: document.getElementById('btnConfirmRestart')
  };

  // ==========================================================================
  // TEMA YÖNETİMİ
  // ==========================================================================

  function setTheme(category = null) {
    state.activeCardCategory = category;
    if (!category) {
      document.body.className = 'theme-base';
    } else {
      document.body.className = `theme-${category}`;
    }
  }

  // ==========================================================================
  // OYUNCU YÖNETİMİ
  // ==========================================================================

  function addPlayer() {
    const name = DOM.playerNameInput.value.trim();
    if (name.length < 2) {
      window.audio.playAlert();
      alert('Oyuncu adı en az 2 karakter olmalıdır.');
      return;
    }
    if (state.players.includes(name)) {
      window.audio.playAlert();
      alert('Bu oyuncu zaten eklendi.');
      return;
    }
    if (state.players.length >= 12) {
      window.audio.playAlert();
      alert('Maksimum 12 oyuncu eklenebilir.');
      return;
    }

    state.players.push(name);
    DOM.playerNameInput.value = '';
    window.audio.playPop();
    renderPlayers();
    validateSetup();
  }

  function removePlayer(index) {
    state.players.splice(index, 1);
    window.audio.playSwoosh();
    renderPlayers();
    validateSetup();
  }

  function renderPlayers() {
    if (state.players.length === 0) {
      DOM.playersList.innerHTML = '';
      DOM.playersList.appendChild(DOM.noPlayersText);
      DOM.noPlayersText.style.display = 'block';
    } else {
      DOM.playersList.innerHTML = '';
      state.players.forEach((player, index) => {
        const chip = document.createElement('div');
        chip.className = 'player-chip';
        
        const nameSpan = document.createElement('span');
        nameSpan.textContent = player;
        
        const removeBtn = document.createElement('button');
        removeBtn.className = 'player-remove-btn';
        removeBtn.innerHTML = '×';
        removeBtn.onclick = () => removePlayer(index);
        
        chip.appendChild(nameSpan);
        chip.appendChild(removeBtn);
        DOM.playersList.appendChild(chip);
      });
    }
    
    DOM.playerCountHint.textContent = `(${state.players.length}/2 min)`;
    DOM.playerCountHint.style.color = state.players.length >= 2 ? '#10b981' : 'inherit';
  }

  // ==========================================================================
  // KATEGORİ & MOD YÖNETİMİ
  // ==========================================================================

  function initCategories() {
    const chips = Array.from(DOM.categoriesContainer.querySelectorAll('.cat-chip'));
    
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const catId = chip.dataset.cat;
        if (state.selectedCategories.has(catId)) {
          // En az 1 kategori seçili kalmalı
          if (state.selectedCategories.size > 1) {
            state.selectedCategories.delete(catId);
            chip.classList.remove('selected');
            window.audio.playSwoosh();
          } else {
            window.audio.playAlert();
            chip.style.animation = 'shake 0.3s';
            setTimeout(() => chip.style.animation = '', 300);
          }
        } else {
          state.selectedCategories.add(catId);
          chip.classList.add('selected');
          window.audio.playPop();
        }
        validateSetup();
        updatePreviewChips();
      });
    });

    DOM.btnSelectAllCats.addEventListener('click', () => {
      chips.forEach(c => {
        state.selectedCategories.add(c.dataset.cat);
        c.classList.add('selected');
      });
      window.audio.playPop();
      validateSetup();
      updatePreviewChips();
    });

    DOM.btnClearCats.addEventListener('click', () => {
      // Sadece ilki kalsın
      const firstCatId = chips[0].dataset.cat;
      state.selectedCategories.clear();
      state.selectedCategories.add(firstCatId);
      
      chips.forEach((c, i) => {
        if(i === 0) c.classList.add('selected');
        else c.classList.remove('selected');
      });
      window.audio.playSwoosh();
      validateSetup();
      updatePreviewChips();
    });
  }

  function updatePreviewChips() {
    const previewChips = document.getElementById('previewChips');
    if (!previewChips) return;
    previewChips.innerHTML = '';
    const colorMap = {
      icebreaker: '#0f766e',
      friends:    '#b45309',
      flirt:      '#be185d',
      family:     '#78350f',
      dirty:      '#450a0a',
      nsfw:       '#dc2626',
      deep:       '#312e81'
    };
    state.selectedCategories.forEach(catId => {
      const dot = document.createElement('div');
      dot.className = 'preview-chip-item';
      dot.style.backgroundColor = colorMap[catId] || '#888';
      dot.title = window.GAME_CATEGORIES?.[catId]?.name || catId;
      previewChips.appendChild(dot);
    });
  }

  function setGameMode(mode) {
    state.gameMode = mode;
    window.audio.playPop();
    
    if (mode === 'alcohol') {
      DOM.modeAlcohol.classList.add('active');
      DOM.modeNonAlcohol.classList.remove('active');
    } else {
      DOM.modeNonAlcohol.classList.add('active');
      DOM.modeAlcohol.classList.remove('active');
    }
  }

  function validateSetup() {
    const isValid = state.players.length >= 2 && state.selectedCategories.size >= 1;
    DOM.btnStartGame.disabled = !isValid;
  }

  // ==========================================================================
  // OYUN MOTORU & DESTE YÖNETİMİ
  // ==========================================================================

  function getCategoryLabel(catId) {
    const category = window.GAME_CATEGORIES[catId];
    return category ? category.name : 'Bilinmeyen Kategori';
  }

  function buildDeckForCategory(catId) {
    const category = window.GAME_CATEGORIES[catId];
    if (!category) return [];
    
    // Fisher-Yates Shuffle
    const deck = [...category.questions];
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }

  function drawRandomCard() {
    const cats = Array.from(state.selectedCategories);
    if (cats.length === 0) return null;

    // Rastgele bir kategori seç
    const randomCatIndex = Math.floor(Math.random() * cats.length);
    const catId = cats[randomCatIndex];

    // Destesi yoksa veya bittiyse yeniden oluştur
    if (!state.categoryDecks[catId] || state.categoryDecks[catId].length === 0) {
      state.categoryDecks[catId] = buildDeckForCategory(catId);
    }

    const question = state.categoryDecks[catId].pop();
    
    return {
      category: catId,
      categoryName: getCategoryLabel(catId),
      question: question
    };
  }

  // ==========================================================================
  // OYUN AKIŞI
  // ==========================================================================

  function startGame() {
    window.audio.playGameStart();
    
    // Shuffle dizilerini temizle
    state.categoryDecks = {};
    state.currentPlayerIndex = 0;
    state.totalCardsDrawn = 0;
    state.penalty.isActive = false;
    state.penalty.remainingCards = 0;
    
    setTheme(null); // Oyuna başlarken idle temasına (base) geç
    
    DOM.setupScreen.classList.remove('active');
    DOM.gameScreen.classList.add('active');
    
    updateTurnView();
  }

  function nextTurn() {
    if (state.penalty.isActive && state.penalty.remainingCards > 0) {
      // Ceza sırası devam ediyor, oyuncu değişmez
    } else {
      // Normal sıraya geç
      state.penalty.isActive = false;
      state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
    }
    
    updateTurnView();
  }

  function updateTurnView() {
    resetCardPromptView();
    
    DOM.turnPlayerName.textContent = state.players[state.currentPlayerIndex];
    DOM.drawnCardCount.textContent = state.totalCardsDrawn;

    if (state.penalty.isActive && state.penalty.remainingCards > 0) {
      DOM.penaltyBanner.classList.add('active');
      const step = (state.penalty.totalCards - state.penalty.remainingCards) + 1;
      DOM.penaltyCurrentStep.textContent = step;
      
      DOM.pDot1.classList.toggle('filled', step >= 1);
      DOM.pDot2.classList.toggle('filled', step >= 2);
      DOM.pDot3.classList.toggle('filled', step >= 3);
    } else {
      DOM.penaltyBanner.classList.remove('active');
    }
    // Ceza sırasında Pas yasak
    if (state.penalty.isActive && state.penalty.remainingCards > 0) {
      DOM.btnPass.style.display = 'none';
    } else {
      DOM.btnPass.style.display = '';
    }
  }

  function resetCardPromptView() {
    state.isCardDrawn = false;
    state.currentCard = null;

    setTheme(null); // Kart kapanınca base temaya dön

    DOM.cardPromptState.style.display = 'flex';
    DOM.cardContentState.classList.remove('active');
    DOM.gameActions.style.visibility = 'hidden';

    if (state.penalty.isActive) {
      const step = (state.penalty.totalCards - state.penalty.remainingCards) + 1;
      DOM.cardPromptTitle.textContent = `Ceza Kartı ${step}/3`;
      DOM.cardPromptSub.textContent = `${state.players[state.currentPlayerIndex]} için zorunlu ceza.`;
    } else {
      DOM.cardPromptTitle.textContent = 'Desteden Çek';
      DOM.cardPromptSub.textContent = `${state.players[state.currentPlayerIndex]} rastgele bir soru cevaplayacak.`;
    }
  }

  function onCardClick() {
    if (state.isCardDrawn) return; // Kart zaten açıkken tıklama yok sayılır

    const card = drawRandomCard();
    if (!card) return;

    state.isCardDrawn = true;
    state.currentCard = card;
    state.totalCardsDrawn++;
    DOM.drawnCardCount.textContent = state.totalCardsDrawn;

    // TEMA DEĞİŞİMİ: Tamamen çekilen karta bağlı!
    setTheme(card.category);

    window.audio.playDrawCard();

    // DOM Update
    DOM.cardQuestionText.textContent = card.question;
    DOM.cardFooterCat.textContent = card.categoryName;

    // View Transition
    DOM.cardPromptState.style.display = 'none';
    DOM.cardContentState.classList.add('active');
    DOM.gameActions.style.visibility = 'visible';
    
    // Animation
    DOM.activeCard.classList.remove('card-slide-enter');
    void DOM.activeCard.offsetWidth; // trigger reflow
    DOM.activeCard.classList.add('card-slide-enter');
  }

  function onAnswer() {
    window.audio.playSwoosh();
    
    if (state.penalty.isActive) {
      state.penalty.remainingCards--;
    }
    
    animateCardOut(nextTurn);
  }

  function onPass() {
    window.audio.playAlert();

    if (state.gameMode === 'alcohol') {
      // Alkollü modda tekil ceza (Shot Modalı)
      DOM.shotPlayerName.textContent = state.players[state.currentPlayerIndex];
      DOM.shotModal.classList.add('active');
    } else {
      // Alkolsüz modda 3 kartlık ceza serisi başlar
      if (!state.penalty.isActive) {
        state.penalty.isActive = true;
        state.penalty.playerIndex = state.currentPlayerIndex;
        state.penalty.totalCards = 3;
        state.penalty.remainingCards = 3;
      } else {
        // Zaten ceza çekerken pas derse ceza yenilenir
        state.penalty.remainingCards = 3;
      }
      animateCardOut(nextTurn);
    }
  }

  function animateCardOut(callback) {
    DOM.activeCard.classList.add('card-slide-exit');
    setTimeout(() => {
      DOM.activeCard.classList.remove('card-slide-enter', 'card-slide-exit');
      callback();
    }, 300);
  }

  // ==========================================================================
  // EVENT LISTENERS & INIT
  // ==========================================================================

  function init() {
    // Setup Events
    DOM.btnAddPlayer.addEventListener('click', addPlayer);
    DOM.playerNameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addPlayer();
    });

    initCategories();

    DOM.modeAlcohol.addEventListener('click', () => setGameMode('alcohol'));
    DOM.modeNonAlcohol.addEventListener('click', () => setGameMode('non_alcohol'));

    DOM.btnStartGame.addEventListener('click', startGame);

    // Game Events
    DOM.activeCard.addEventListener('click', onCardClick);
    DOM.btnAnswer.addEventListener('click', onAnswer);
    DOM.btnPass.addEventListener('click', onPass);

    // Modal Events
    DOM.btnConfirmShot.addEventListener('click', () => {
      DOM.shotModal.classList.remove('active');
      animateCardOut(nextTurn);
    });

    DOM.btnExitGame.addEventListener('click', () => {
      DOM.confirmRestartModal.classList.add('active');
    });
    DOM.btnCancelRestart.addEventListener('click', () => {
      DOM.confirmRestartModal.classList.remove('active');
    });
    DOM.btnConfirmRestart.addEventListener('click', () => {
      DOM.confirmRestartModal.classList.remove('active');
      window.location.reload(); // En temiz sıfırlama yöntemi
    });

    // Audio Toggle
    DOM.btnToggleMute.addEventListener('click', () => {
      const isMuted = window.audio.toggleMute();
      if (isMuted) {
        DOM.muteIconSvg.innerHTML = '<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>';
      } else {
        DOM.muteIconSvg.innerHTML = '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>';
      }
    });

    // Başlangıç durumu
    renderPlayers();
    validateSetup();
    updatePreviewChips();
    setTheme(null); // Init base theme
  }

  // DOM Yüklendiğinde başlat
  document.addEventListener('DOMContentLoaded', init);

})();
