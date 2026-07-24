const channelsData = [
    {
        id: "lpl-match-1",
        name: "LPL 2026 - Main Broadcast (DASH DRM)",
        category: "cricket",
        subCategory: "LPL",
        type: "mpd", // mpd හෝ m3u8
        url: "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/tll6uwepxa/out/v1/a7f67cbb33df46539312956427343886/cenc.mpd",
        // DRM Keys තියෙනවා නම් මෙතන දාන්න (නැත්නම් හිස්ව තියන්න)
        drm: {
            keyId: "290e09c837da78d5cd961978d390515c",
            key: "b748836c71e6a4ca68ef5b5652db6247"
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
