import { writable } from 'svelte/store';
import localforage from 'localforage';

export let devMode = false;

export const getEpisodesEvent = new Event('getEpisodesEvent');

export const windowHeight = writable(null);

//databases
export const userStateDB = localforage.createInstance({
  name: 'userStateDB',
});
export const podcastStateDB = localforage.createInstance({
  name: 'podcastStateDB',
});
export const podcastDB = localforage.createInstance({
  name: 'podcastDB',
});
export const walletDB = localforage.createInstance({
  name: 'walletDB',
});

//state
export const userState = writable({
  user: 'local',
  playbackSpeed: 1.0,
  volume: 100,
  useP2P: true,
  useRSS: false,
  enableAutoplay: true,
  wallet: {
    saved: false,
    disabled: false,
    defaultBoost: 1000,
    defaultTip: 2000,
    defaultStream: 100,
  },
  playing: {
    podcast: {},
    episode: {},
    podcastState: {},
    episodeState: {},
  },
  playlist: [],
});
export const loggedIn = writable(false);
export const selectedPodcastState = writable({});
export const playingPodcastState = writable({});
export const playingEpisodeState = writable({});
export const enableAutoplay = writable(true);

//loadedStatus
export const isLoaded = writable(false);
export const isPlayerLoaded = writable(false);
export const userStateLoaded = writable(false);
export const nowPlayingLoaded = writable(false);
export const loadingStatus = writable('');
export const imageProxy = 'api/getimage.js?url=';
export const imgUrl = writable(null);
export const podcastListPane = writable('search');
export const middlePane = writable('episodesList');
export const rightPane = writable('showNotes');
export const count = writable(0);
export const mainPodcastList = writable([]);
export const podcastList = writable([]);
export const episodesList = writable([]);
export const filteredEpisodesList = writable([]);
export const episodesListPane = writable();
export const showNotesPane = writable();
export const displayShowNotesPane = writable(false);
export const selectedEpisode = writable({});
export const selectedPodcast = writable({});
export const playingEpisode = writable({});
export const playingPodcast = writable({});
export const playingList = writable([]);
export const selectedPlayingList = writable('playlist');
export const parser = writable();

//player
export const player = writable(null);
export const htmlPlayer = writable(null);
export const playerTime = writable(0);
export const playerRemainingTime = writable('');
export const playerSaveTime = writable(0);
export const playerDuration = writable(0);
export const playerIsPaused = writable(true);
export const trackSrc = writable(null);
export const allowHls = writable(false);
export const playerSrc = writable(null);
export const playerSrcType = writable(null);
export const setTitle = writable(() => {});
export const setSubtitle = writable(() => {});
export const useP2P = writable(true);
export const saveTimeInterval = writable(10);
export const goFullscreen = writable(false);
export const showPodcastSearch = writable(false);
export const isUpdatingEpisodes = writable(false);
export const updateEpisodesProgress = writable(0);
export const playList = writable([]);
export const seenEpisodesCounts = writable({});
export const allSeenQuickDisplay = writable(false);
export const mobileNavButtons = writable([]);
export const seenEpisodes = writable(new Set());
export const pinNew = writable(true);
export const currentFunction = writable('AZ');
export const searchListPodcastSelected = writable(false);

//chapters
export const selectedEpisodeChapters = writable(null);
export const playingEpisodeChapters = writable(null);
export const chapterIndex = writable(0);
export const chapterDisplayImage = writable('');

//transcripts
export const selectedEpisodeTranscript = writable(null);
export const playingEpisodeTranscript = writable(null);
export const transcriptIndex = writable(0);
export const currentMobilePage = writable(0);
export const showMobile = writable(false);
export const showMobileChapters = writable(false);
export const mobileFullScreen = writable(false);
export const featuredPodcasts = writable({ cat: '', feeds: [] });
export const podcastSearchResults = writable({ cat: '', feeds: [] });
export const swiper = writable();
export const showNotesVerticalSwiper = writable();
export const showNotesModalSwiper = writable();
export const initialSlide = writable(1);
export const mediaSession = writable();
export const episodeSelector = writable({
  sorter: 'newest',
  completeStatus: true,
});

//modals
export const showCC = writable(true);
export const showDisclaimer = writable(false);
export const showVideo = writable(false);
export const showWallet = writable(false);
export const showWalletKeys = writable(false);
export const showTipJar = writable(false);
export const showShareClip = writable(false);
export const showLogin = writable(false);
export const showInvoice = writable(false);
export const showOPML = writable(false);
export const showPreferences = writable(false);
export const showFF = writable(false);
export const showFFCreator = writable(false);
export const showCreateEpisode = writable(false);

//wallet
export const satBalance = writable(null);
export const walletDisabled = writable(false);
export const defaultStream = writable(100);
export const defaultBoostValue = writable(1000);
export const defaultTipValue = writable(2000);
export const playingStream = writable(100);
export const playingBoostValue = writable(1000);
export const walletValueBlock = writable(null);
export const streamingInterval = writable(60000);
export const boostSats = writable(null);
export const getBalance = writable(null);
export const streamingEnabled = writable(true);
export const boostEnabled = writable(true);
export const walletSaved = writable(false);
export const showBoostStatus = writable(false);

//clip share
export const srcStartTime = writable(null);
export const srcStopTime = writable(null);

//hosting
export const hostCreator = writable(true);
export const togglePreview = writable(true);
export const xmlJson = writable({});
export const rssData = writable(null);
export const editingEpisode = writable(null);
export const editingEpisodesList = writable(null);
export const useRSS = writable(false);
export const blankPerson = {
  '#text': '',
  '@_href': '',
  '@_img': '',
  '@_group': 'cast',
  '@_role': 'host',
};
