;
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.musicalScaleColors = factory();
    }
}(this, function() {
    // http://rhythmiclight.com/archives/ideas/colorscales.html
    return {
        louisBertrandCastel: {
            'C': 0x1C0D82,  // blue
            'C#': 0x1B9081, // blue-green
            'D': 0x149033,  // green
            'D#': 0x709226, // olive green
            'E': 0xF5F43C,  // yellow
            'F': 0xF5D23B,  // yellow-orange
            'F#': 0xF88010, // orange
            'G': 0xFA0B0C,  // red
            'G#': 0xA00C09, // crimson
            'A': 0xD71386,  // violet
            'A#': 0x4B0E7D, // agate
            'B': 0x7F087C   // indigo
        },
        dDJameson: {
            'C': 0xFA0B0C,  // red
            'C#': 0xF44712, // red-orange
            'D': 0xF88010,  // orange
            'D#': 0xF5D23B, // orange-yellow
            'E': 0xF5F43C,  // yellow
            'F': 0x149033,  // green
            'F#': 0x1B9081, // green-blue
            'G': 0x1C0D82,  // blue
            'G#': 0x4B0E7D, // blue-purple
            'A': 0x7F087C,  // purple
            'A#': 0xA61586, // purple-violet
            'B': 0xD71285   // violet
        },
        theodorSeemann: {
            'C': 0x6A1C1C,  // carmine
            'C#': 0xFA0B0C, // scarlet
            'D': 0xFF7D05,  // orange
            'D#': 0xFCD533, // yellow-orange
            'E': 0xF5F43C,  // yellow
            'F': 0x169034,  // green
            'F#': 0x1B9081, // green blue
            'G': 0x1C0D82,  // blue
            'G#': 0x7F087C, // indigo
            'A': 0xD71386,  // violet
            'A#': 0x6A1C1C, // brown
            'B': 0x070707   // black
        },
        aWallaceRimington: {
            'C': 0xFA0B0C,  // deep red
            'C#': 0xA00C09, // crimson
            'D': 0xF44712,  // orange-crimson
            'D#': 0xF88010, // orange
            'E': 0xF5F43C,  // yellow
            'F': 0x709226,  // yellow-green
            'F#': 0x149033, // green
            'G': 0x26A680,  // blueish green
            'G#': 0x1B9081, // blue-green
            'A': 0x7F087C,  // indigo
            'A#': 0x1C0D82, // deep blue
            'B': 0xD71386   // violet
        },
        hHelmholtz: {
            'C': 0xF5F43C,  // yellow
            'C#': 0x149033, // green
            'D': 0x1B9081,  // greenish blue
            'D#': 0x1C5BA0, // cayan-blue
            'E': 0x7F087C,  // indigo blue
            'F': 0xD71386,  // violet
            'F#': 0x9D0E55, // end of red
            'G': 0xFA0B0C,  // red
            'G#': 0xD32C0A, // red
            'A': 0xD32C0A,  // red
            'A#': 0xD91951, // red orange
            'B': 0xF17A0F   // orange
        },
        aScriabin: {
            'C': 0xFA0B0C,  // red
            'C#': 0xD71386, // violet
            'D': 0xF5F43C,  // yellow
            'D#': 0x5A5685, // steely with the glint of metal
            'E': 0x1C5BA0,  // pearly blue the shimmer of moonshine
            'F': 0xA00C09,  // dark red
            'F#': 0x1C0D82, // bright blue
            'G': 0xF88010,  // rosy orange
            'G#': 0x7F0A7C, // purple
            'A': 0x149033,  // green
            'A#': 0x5A5685, // steely with a glint of metal
            'B': 0x1C5BA0   // pearly blue the shimmer of moonshine
        },
        aBernardKlein: {
            'C': 0xC40A09,  // dark red
            'C#': 0xFA0B0C, // red
            'D': 0xF44712,  // red orange
            'D#': 0xF88010, // orange
            'E': 0xF5F43C,  // yellow
            'F': 0xBCE039,  // yellow green
            'F#': 0x149033, // green
            'G': 0x1B9081,  // blue-green
            'G#': 0x1C0D82, // blue
            'A': 0x781887,  // blue violet
            'A#': 0xD71386, // violet
            'B': 0x9D0E55   // dark violet
        },
        iJBelmont: {
            'C': 0xFA0B0C,  // red
            'C#': 0xF44712, // red-orange
            'D': 0xF88010,  // orange
            'D#': 0xF6D111, // yellow-orange
            'E': 0xF5F43C,  // yellow
            'F': 0xBCE039,  // yellow-green
            'F#': 0x138F32, // green
            'G': 0x1B9081,  // blue-green
            'G#': 0x1C0D82, // blue
            'A': 0xA51585,  // blue-violet
            'A#': 0xD71386, // violet
            'B': 0xAD0E48   // red-violet
        },
        sZieverink: {
            'C': 0xBCE039,  // yellow/green
            'C#': 0x149033, // green
            'D': 0x1B9081,  // blue/green
            'D#': 0x1C0D82, // blue
            'E': 0x7F087C,  // indigo
            'F': 0xD71386,  // violet
            'F#': 0x6F0D45, // ultra violet
            'G': 0xA00C09,  // infra red
            'G#': 0xFA0B0C, // red
            'A': 0xF88010,  // orange
            'A#': 0xEDF087, // yellow/white
            'B': 0xF5F43C   // yellow
        }
    };
}));