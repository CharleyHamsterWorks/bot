module.exports = {
    BOT_SETTINGS: {
        BOT_TOKEN: 'Nzc0NzM2NzIzMTAzOTczNDE3.X6cHzA.szDY2zzB8_KxNGhqL9kqFpSvWG8',
        YT_API_KEY: 'AIzaSyC79b_p_3v7RXXLMuvA8R7MqmPuDt502tE',
        COMMAND_PREFIX: '.',
        EMBED_COLOR: 'RED',
        MUTE_ROLE: '756527275645599942',
        BANNED_WORDS: [`bitch`, `fuck`, `word3`],
        BYPASS_ROLES: [],
        BANNED_LINKS: ['www.', 'https://', '.com', '.net', '.gov', '.co', '.uk', '.gg', '.live'],
        BYPASS_LINKS_ROLES: [`756527275645599941`],
        Member_Count_Channel: '774777521786322945',
        Guild_ID: '763054748327739442',
        Kick_On_Warnings: true,
        Warnings_Until_Kick: '5',
        Time_Muted: '1m',
        Roles_On_Join: [`774777697019887666`]
    },
    VERIFICATION: {
        Enabled: true,
        Verify_Channel: '774777623980015628',
        Verify_Role: '774777695237701642',
        Role_To_Remove: '774777697019887666'
    },
    USER_DMS: {
        Enabled: true,
        Dm_Category: '775059267430252565',
        Dm_Channel_Name: 'new-dm-{user}',
        View_Dmchannels_Roles: [`774778652620881941`]
    }, 
    Ping_Prevention: {
        Enabled: true,
        Enabled_Types: 'user',
        Max_Channel_Pings: '5',
        Max_Role_Pings: '5',
        Max_User_Pings: '5',
        Max_Pings: '10',
        Punishment: 'warn',
        Bypass_Roles: []
    },
    LOCKDOWN_KICK: {
        Enabled: true,
        Kick_Message: '{server} is currently in LOCKDOWN MODE! We have kicked you for the time, please try joining back later {member}. '
    },
    LEVELING_SYSTEM: {
        Enabled: true,
        Remove_XP_On_Leave: false,
        Level_Up_Message: '{user} has just reached level {level}!',
        Level_Up_Channel_ID: '774779464533803028'
    },
    LOGGING: {
        Report_Channel: '763727769829638156',
        Report_Channel_Name: 'reports',
        Ban_Channel_Logs: '763054748327739446',
        Unban_Channel_Logs: '774798954927095869',
        Kick_Channel_Logs: '774779583160647711',
        Warn_Channel_Logs: '774798904335138816',
        Mute_Channel_Logs: '774798862048296991',
        Lock_Channel_Logs: '774798843794948108',
        Ticket_Channel_Logs: '774798819246342214',
        Moderation_Channel_Logs: '774798793555443713',
        Server_Updates: '763054748327739448',
        Voice_Updates: '763054748327739448'
    },
    TICKET_SYSTEM: {
        TICKET_CATEGORY: '756527276929319037',
        SUPPORT_TEAM_ROLES: '756527275607982193',
    },
    GREETING_SYSTEM: {
        Enabled: true,
        Welcome_Channel: '774799438236352542',
        Welcome_Type: 'card',
        Welcome_Cards_Image_Link: 'https://i.ibb.co/VmGzHKv/wwwwwwwwwwwwwwww.png',
        Welcome_Message: 'Welcome {member} to the server, You are our {joinPosition} member!',
        Welcome_Embed: {
            title: '{member.username} has just joined the server!',
            description: 'Welcome {member} to the server, You are our {joinPosition} member!',
            color: 'blue'
        }
    }
}