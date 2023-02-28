
//Level
export const LEVEL_ROWS = 6;
export const LEVEL_COLUMNS = 6;
export const LEVEL_ENEMIES = 6;
export const LEVEL_TOTAL_GIFTS = LEVEL_ROWS * LEVEL_COLUMNS - LEVEL_ENEMIES;

//Layers
export const LAYER_TYPE_ANIMATION_CARDFLIP = 0;
export const LAYER_TYPE_ANIMATION_TYPE_ABILITY = 1;
export const LAYER_TYPE_SOUNDSYSTEM = 2;

export const ANIMATION_TYPE_CARDFLIP = 0;
export const ANIMATION_TYPE_ABILITY = 1;

export const CARD_TYPE_GIFT = 0;
export const CARD_TYPE_ENEMY = -1;

export const GAMESTATE_GAME_OVER = 0;
export const GAMESTATE_PLAYING = 1;
export const GAMESTATE_WIN = 2;
export const GAMESTATE_CREDITS = 3;
export const GAMESTATE_CREDITS_VIDEO = 4;
export const GAMESTATE_CREDITS_SECRET = 5;
export const GAMESTATE_START_MENU = 6;


export const PLAYER_SOUNDEFFECTS = 0;
export const PLAYER_MUSIC = 1;


//SOUND
export const SOUND_TYPE_MUSIC = 0;
export const SOUND_TYPE_SOUNDEFFECTS = 0; 

export const MUSIC_OFF = -1
//streak music
export const MUSIC_SASUKE_LOOP = 0;
export const MUSIC_AKAMARU_LOOP = 1;
export const MUSIC_CONNECTED_LOOP = 2;
//themes
export const MUSIC_SASUKE_THEME = 3;
export const MUSIC_AKAMARU_THEME = 1;
export const MUSIC_CONNECTED_THEME = 4;
export const MUSIC_ENEMY_THEME = 5;
export const MUSIC_GAME_OVER = 6;
export const MUSIC_GAME_WON = 7;
export const MUSIC_MENU = 8;

//SFX

export const SFX_ENEMY = 0;
export const SFX_STREAK_KILL = 1;
