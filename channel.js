const channelsData = [
    {
        id: "lpl-match-1",
        name: "LPL 2026 - Main Broadcast (DASH DRM)",
        category: "cricket",
        subCategory: "LPL",
        type: "mpd", // mpd හෝ m3u8
        url: "https://otte.cache.aiv-cdn.net/iad-nitro/live/clients/dash/enc/r9ipx2gmey/out/v1/72197084a22d4b8888925caa8b2a5129/cenc.mpd",
        // DRM Keys තියෙනවා නම් මෙතන දාන්න (නැත්නම් හිස්ව තියන්න)
        drm: {
            keyId: "53be1157d919b0313e270d1ed4186d87",
            key: "44f686ac116d42983895204b978fefab"
        },
        badge: "ON AIR"
    },
    {
        id: "sports-hls-1",
        name: "Sample HLS Sports Channel",
        category: "cricket",
        subCategory: "International",
        type: "m3u8",
        url: "https://cph-p2ms-live.akamaized.net/hls/live/2003415/test/index.m3u8",
        drm: null,
        badge: "HD"
    }
    // ඔයාට තව චැනල් ඕන නම් මෙතනට පහළට දාන්න පුළුවන්
];
