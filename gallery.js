const images = [
    {
        src: '/src/scansedited/cards/card_apache.png',
        fullSrc: '/src/scans/cards/card_apache.png',
        title: 'Apache Attack \'Copter',
        description: `Apache Attack 'Copter card from the Topps Desert Storm trading card pack.
        7 player killstreak! (6 with Hardline).`
    },
    {
        src: '/src/scansedited/cards/card_apc.png',
        fullSrc: '/src/scans/cards/card_apc.png',
        title: 'Marine APCs',
        description: `Marine APCs card from the Topps Desert Storm trading card pack.
        Armored Personnel Carriers traditionally carry personnel. Neat chassis.`
    },
    {
        src: '/src/scansedited/cards/card_bones.png',
        fullSrc: '/src/scans/cards/card_bones.png',
        title: 'Bones',
        description: `Dr. Leonard H. McCoy ("Bones") trading card from Dave & Busters.
        No full sets from my last visit.`
    },
    {
        src: '/src/scansedited/cards/card_cyborg.png',
        fullSrc: '/src/scans/cards/card_cyborg.png',
        title: 'Cyborg',
        description: `Cyborg (Victor Stone) trading card from Dave & Busters.
        Prize from a coin drop machine.`
    },
    {
        src: '/src/scansedited/cards/card_dragonite.png',
        fullSrc: '/src/scans/cards/card_dragonite.png',
        title: 'Delivery Dragonite',
        description: `Pokémon WotC Promo Dragonite #5.
        I'm old enough to have gotten this card at the movies.`
    },
    {
        src: '/src/scansedited/cards/card_mlrs.png',
        fullSrc: '/src/scans/cards/card_mlrs.png',
        title: 'MLRS',
        description: `Multi-launch Rocket System card from the Topps Desert Storm trading card pack.
        Each rocket is 13' long with a 9" diameter.`
    },
    {
        src: '/src/scansedited/cards/card_topgun.png',
        fullSrc: '/src/scans/cards/card_topgun.png',
        title: 'Top Gun',
        description: `Top Gun card from the Topps Desert Storm trading card pack.
        [Comment removed by Tom Cruise's agent, Maha Dakhil].`
    },
    {
        src: '/src/scansedited/cards/card_whatatank.png',
        fullSrc: '/src/scans/cards/card_whatatank.png',
        title: 'What Is A Tank?',
        description: `What Is A Tank? card from the Topps Desert Storm trading card pack.
        Carries a large, direct-fire cannon; heavily armored.`
    },
    {
        src: '/src/scansedited/cards/wrapper_desertstormcards.png',
        fullSrc: '/src/scans/cards/wrapper_desertstormcards.png',
        title: 'Topps Desert Storm',
        description: `Topps Desert Storm trading card pack wrapper.
        Random pickup for myself while doing some gift shopping a few years ago.`
    },
    {
        src: '/src/scansedited/crafted/postcard_01.png',
        fullSrc: '/src/scans/crafted/postcard_01.png',
        title: 'Postcard #01 from Rob',
        description: `First catalogued postcard from Rob.
        Love ya bro!`
    },
    {
        src: '/src/scansedited/crafted/postcard_02.png',
        fullSrc: '/src/scans/crafted/postcard_02.png',
        title: 'Postcard #02 from Rob',
        description: `Second catalogued postcard from Rob.
        Love ya bro!`
    },
    {
        src: '/src/scansedited/crafted/selfportrait_01.png',
        fullSrc: '/src/scans/crafted/selfportrait_01.png',
        title: 'Self Portrait',
        description: `Lithograph.
        I took 'Intro To Screenprinting' in college and was able to produce such masterpieces as this.`
    },
    {
        src: '/src/scansedited/crafted/selfportrait_02.png',
        fullSrc: '/src/scans/crafted/selfportrait_02.png',
        title: 'Self Portraits',
        description: `Pencil on Sticky Note.
        Old doodles. Used as a bookmark for years.`
    },
    {
        src: '/src/scansedited/crafted/selfportrait_03.png',
        fullSrc: '/src/scans/crafted/selfportrait_03.png',
        title: 'Self Portrait',
        description: `Pen on Notebook Paper.
        Quick doodle from a philosophy class I believe.`
    },
    {
        src: '/src/scansedited/events/covidVax.png',
        fullSrc: '/src/scans/events/covidVax.png',
        title: 'COVID-19 Vaxxer',
        description: `COVID-19 Vaccination Record Card [redacted].
        Remember all that?`
    },
    {
        src: '/src/scansedited/events/meowwolf.png',
        fullSrc: '/src/scans/events/meowwolf.png',
        title: 'QPass',
        description: `Meow Wolf "QPass".
        Wish this was more fun.`
    },
    {
        src: '/src/scansedited/events/rodsmith.png',
        fullSrc: '/src/scans/events/rodsmith.png',
        title: 'HOF',
        description: `Rod Smith's autograph.
        I went to a pool party at his house.`
    },
    {
        src: '/src/scansedited/events/ticket_diamondhead.png',
        fullSrc: '/src/scans/events/ticket_diamondhead.png',
        title: 'Diamond Head',
        description: `Diamond Head State Monument entry ticket.
        Hawaii is so dang pretty.`
    },
    {
        src: '/src/scansedited/events/ticket_jaws50.png',
        fullSrc: '/src/scans/events/ticket_jaws50.png',
        title: 'Jaws Stub',
        description: `Jaws 50th anniversary ticket stub.
        Nice break from contemporaneous health problems.`
    },
    {
        src: '/src/scansedited/events/ticket_kenspacecenter.png',
        fullSrc: '/src/scans/events/ticket_kenspacecenter.png',
        title: 'Kennedy Space Center',
        description: `Kennedy Space Center Adult Admission ticket.
        "SPAAAACE!"`
    },
    {
        src: '/src/scansedited/events/ticket_lama.png',
        fullSrc: '/src/scans/events/ticket_lama.png',
        title: '14th Dalai Lama',
        description: `14th Dalai Lama Speech GE ticket.
        Honestly, I only remember one of these CU speaker night things.`
    },
    {
        src: '/src/scansedited/events/ticket_stateofsatire.png',
        fullSrc: '/src/scans/events/ticket_stateofsatire.png',
        title: 'State of Satire',
        description: `State of Satire GE ticket.
        I wonder what this speech would look like today.`
    },
    {
        src: '/src/scansedited/events/ticket_woz.png',
        fullSrc: '/src/scans/events/ticket_woz.png',
        title: 'The Woz',
        description: `An Evening with Steve Wozniak GE ticket.
        The one CU speaker night thing I somewhat remember.`
    },
    {
        src: '/src/scansedited/food/botm_helena.png',
        fullSrc: '/src/scans/food/botm_helena.png',
        title: 'BOTM - Helena',
        description: `July Bird of the Month.
        Thanks for the eggs, Helena!`
    },
    {
        src: '/src/scansedited/food/botm_jackie.png',
        fullSrc: '/src/scans/food/botm_jackie.png',
        title: 'BOTM - Jackie',
        description: `September Bird of the Month.
        Thanks for the eggs, Jackie!`
    },
    {
        src: '/src/scansedited/food/botm_sydney.png',
        fullSrc: '/src/scans/food/botm_sydney.png',
        title: 'BOTM - Sydney',
        description: `August Bird of the Month.
        Thanks for the eggs, Syd!`
    },
    {
        src: '/src/scansedited/food/cookbook1.png',
        fullSrc: '/src/scans/food/cookbook1.png',
        title: '우먼센스 가족요리 1',
        description: `봄식단요리 (Spring Dishes).
        Fresh spring greens and side dishes.`
    },
    {
        src: '/src/scansedited/food/cookbook2.png',
        fullSrc: '/src/scans/food/cookbook2.png',
        title: '우먼센스 가족요리 2',
        description: `여름식단요리 (Summer Dishes).
        Noodle and cold dishes.`
    },
    {
        src: '/src/scansedited/food/cookbook3.png',
        fullSrc: '/src/scans/food/cookbook3.png',
        title: '우먼센스 가족요리 3',
        description: `가을식단요리 (Autumn Dishes).
        Mushroom and side dishes.`
    },
    {
        src: '/src/scansedited/food/cookbook4.png',
        fullSrc: '/src/scans/food/cookbook4.png',
        title: '우먼센스 가족요리 4',
        description: `겨울식단요리 (Winter Dishes).
        Steamed dishes, dumplings and mixed hot pots.`
    },
    {
        src: '/src/scansedited/food/mcdouble00.png',
        fullSrc: '/src/scans/food/mcdouble00.png',
        title: 'McDouble Order Number 00',
        description: `Ticket from an August, 2025 drive-thru order.
        Just hit the rollover.`
    },
    {
        src: '/src/scansedited/food/mcdouble13.png',
        fullSrc: '/src/scans/food/mcdouble13.png',
        title: 'McDouble Order Number 13',
        description: `Ticket from a Friday, Jun 6, 2025 drive-thru order.
        Rare \`SUB Mac Sauce\` modifier note.`
    },
    {
        src: '/src/scansedited/food/mcdouble23.png',
        fullSrc: '/src/scans/food/mcdouble23.png',
        title: 'McDouble Order Number 23',
        description: `Ticket from a July? August? drive-thru order.
        Time flies when you're swimming in Mac sauce.`
    },
    {
        src: '/src/scansedited/food/mcdouble69.png',
        fullSrc: '/src/scans/food/mcdouble69.png',
        title: 'McDouble Order Number 69',
        description: `Ticket from a Wednesday, Jun 18, 2025 drive-thru order.
        Side 1 bringing the NICE order number 69.`
    },
    {
        src: '/src/scansedited/food/mcdouble92.png',
        fullSrc: '/src/scans/food/mcdouble92.png',
        title: 'McDouble Order Number 92',
        description: `Ticket from a July-ish, 2025 drive-thru order.
        Finally got burnt out of the McPhase.`
    },
    {
        src: '/src/scansedited/food/receipt_blkcoffee.png',
        fullSrc: '/src/scans/food/receipt_blkcoffee.png',
        title: 'Hot Coffee',
        description: `Ticket from a 7:22:41AM drive-thru order.
        My standard and very boring coffee order.`
    },
    {
        src: '/src/scansedited/food/wrapper_ldapplepie.png',
        fullSrc: '/src/scans/food/wrapper_ldapplepie.png',
        title: 'Square Snack',
        description: `Little Debbie mini apple fruit pie wrapper.
        One of my buddies has NEVER had one of these.`
    },
    {
        src: '/src/scansedited/lotto/lotto06_28_25.png',
        fullSrc: '/src/scans/lotto/lotto06_28_25.png',
        title: 'Powerball ticket Jun 28',
        description: `02 16 33 56 57 ⭑01.
        04 35 43 52 62 ⭑12. Loser.`
    },
    {
        src: '/src/scansedited/lotto/lotto07_07_25.png',
        fullSrc: '/src/scans/lotto/lotto07_07_25.png',
        title: 'Powerball ticket Jul 07',
        description: `06 08 24 53 58 ⭑24.
        14 17 19 28 29 ⭑02. Loser.`
    },
    {
        src: '/src/scansedited/lotto/lotto07_19_25.png',
        fullSrc: '/src/scans/lotto/lotto07_19_25.png',
        title: 'Powerball ticket Jul 19',
        description: `17 44 52 55 63 ⭑20.
        28 48 51 61 69 ⭑20. Winner! +$4.`
    },
    {
        src: '/src/scansedited/lotto/lotto07_21_25.png',
        fullSrc: '/src/scans/lotto/lotto07_21_25.png',
        title: 'Powerball ticket Jul 21',
        description: `02 19 22 47 66 ⭑14.
        08 11 28 33 42 ⭑02. Loser.`
    },
    {
        src: '/src/scansedited/lotto/lotto07_28_25.png',
        fullSrc: '/src/scans/lotto/lotto07_28_25.png',
        title: 'Powerball ticket Jul 28',
        description: `19 21 34 61 67 ⭑05.
        07 35 36 43 62 ⭑03. Loser.`
    },
    {
        src: '/src/scansedited/lotto/lotto08_02_25.png',
        fullSrc: '/src/scans/lotto/lotto08_02_25.png',
        title: 'Powerball ticket Aug 02',
        description: `06 24 37 63 67 ⭑17.
        13 25 38 55 62 ⭑11. Loser.`
    },
    {
        src: '/src/scansedited/lotto/lotto08_11_25.png',
        fullSrc: '/src/scans/lotto/lotto08_11_25.png',
        title: 'Powerball ticket Aug 11',
        description: `24 25 46 58 61 ⭑08.
        06 16 33 40 62 ⭑02. Loser.`
    },
    {
        src: '/src/scansedited/lotto/lotto08_20_25.png',
        fullSrc: '/src/scans/lotto/lotto08_20_25.png',
        title: 'Powerball ticket Aug 20',
        description: `33 39 53 54 56 ⭑23.
        31 59 62 65 68 ⭑05. Loser.`
    },
    {
        src: '/src/scansedited/lotto/lotto08_25_25.png',
        fullSrc: '/src/scans/lotto/lotto08_25_25.png',
        title: 'Powerball ticket Aug 25',
        description: `14 31 53 63 64 ⭑11.
        16 19 34 37 64 ⭑22. Loser.`
    },
    {
        src: '/src/scansedited/lotto/lotto09_03_25.png',
        fullSrc: '/src/scans/lotto/lotto09_03_25.png',
        title: 'Powerball ticket Sep 03',
        description: `12 18 20 24 62 ⭑07.
        03 16 29 61 69 ⭑22. Loser.`
    },
    {
        src: '/src/scansedited/lotto/lotto_void.png',
        fullSrc: '/src/scans/lotto/lotto_void.png',
        title: 'Void Not For Sale',
        description: `A fun *VOID* ticket I got.
        Obvious loser.`
    },
    {
        src: '/src/scansedited/lotto/lottosched.png',
        fullSrc: '/src/scans/lotto/lottosched.png',
        title: 'CO Lotto Schedule',
        description: `A little pocket to hold tickets. 
        Includes a schedule of draw dates.`
    },
    {
        src: '/src/scansedited/pocket/applecard.png',
        fullSrc: '/src/scans/pocket/applecard.png',
        title: 'Gen 1 Titanium Apple Card',
        description: `I like the weight. 
        Titanium.`
    },
    {
        src: '/src/scansedited/pocket/guitarpick.png',
        fullSrc: '/src/scans/pocket/guitarpick.png',
        title: 'Self Explanatory',
        description: `Cool guy guitar pick.
        Useful regardless of my guitar skills.`
    },
    {
        src: '/src/scansedited/pocket/officepass.png',
        fullSrc: '/src/scans/pocket/officepass.png',
        title: 'Office Badge',
        description: `My office badge.
        Back when we had offices to work in.`
    },
    {
        src: '/src/scansedited/pocket/protractor.png',
        fullSrc: '/src/scans/pocket/protractor.png',
        title: 'Mother Protractor',
        description: `Acute (heh) Mother protractor.`
    },
    {
        src: '/src/scansedited/pocket/schoolid.png',
        fullSrc: '/src/scans/pocket/schoolid.png',
        title: 'School ID',
        description: `The back of my Sr. year school ID.
        Rowland's class was "Weights for Athletes III".`
    },
    {
        src: '/src/scansedited/print/calpage.png',
        fullSrc: '/src/scans/print/calpage.png',
        title: '暑中お見舞い申し上げます',
        description: `Welcome to summer! 
        Calendar page to start July, 2025.`
    },
    {
        src: '/src/scansedited/print/comic_dbzone.png',
        fullSrc: '/src/scans/print/comic_dbzone.png',
        title: 'Cross Epoch',
        description: `Intro pages from Cross Epoch.
        Very fun One Piece x Dragon Ball collab.`
    },
    {
        src: '/src/scansedited/print/comic_zenitsu.png',
        fullSrc: '/src/scans/print/comic_zenitsu.png',
        title: 'Zenitsu Agatsuma (我妻 善逸)',
        description: `Profile for Zenitsu Agatsuma from the Demon Slayer Corps Special Report mini-volume.
        One of my favorite characters from Demon Slayer.`
    },
    {
        src: '/src/scansedited/print/couponInkTest.png',
        fullSrc: '/src/scans/print/couponInkTest.png',
        title: 'Coupon CMYK Test',
        description: `King Soopers coupon printer test.
        Very thin lines with an interesting focus on diagonals.`
    },
    {
        src: '/src/scansedited/print/diagram_vidglitcher.png',
        fullSrc: '/src/scans/print/diagram_vidglitcher.png',
        title: 'Video Breaker User Guide',
        description: `Diagram of internals from the Video Breaker User Guide.
        Not a hardware guy but this is neat.`
    },
    {
        src: '/src/scansedited/print/feedbackloopintro.png',
        fullSrc: '/src/scans/print/feedbackloopintro.png',
        title: 'Strange Loop Users Manual',
        description: `Intro from the Strange Loop users manual.
        Short blurb about feedback loops.`
    },
    {
        src: '/src/scansedited/print/griddle.png',
        fullSrc: '/src/scans/print/griddle.png',
        title: 'Griddle Me This',
        description: `Uline griddle free offer.
        I love the stupid pun.`
    },
    {
        src: '/src/scansedited/print/hpCalibCert.png',
        fullSrc: '/src/scans/print/hpCalibCert.png',
        title: 'HP Certificate of Calibration',
        description: `Power supply calibration cert from 1998.
        Thanks for making sure things are up to code Mr. Lee.`
    },
    {
        src: '/src/scansedited/print/si_dec1982.png',
        fullSrc: '/src/scans/print/si_dec1982.png',
        title: 'Scientific American. (1982, December). 247(6)',
        description: `Personal favorite cover.
        From a small stash recovered from the trash outside an office in the CU Boulder Engineering Center.`
    },
    {
        src: '/src/scansedited/print/sonystickers.png',
        fullSrc: '/src/scans/print/sonystickers.png',
        title: 'Cassette Stickers',
        description: `Stickers from a Sony camcorder cassette tape.
        I bought a small stack of tapes before finding out my camcorder tape drawer was stuck.`
    },
    {
        src: '/src/scansedited/textures/fieldnotesmap.png',
        fullSrc: '/src/scans/textures/fieldnotesmap.png',
        title: 'Field Notes National Park Pack',
        description: `Field Notes box interior.
        The Grand Canyon is pretty neat to see and the surrounding area is beautiful.`
    },
    {
        src: '/src/scansedited/textures/mountainsfromapplewatchband.png',
        fullSrc: '/src/scans/textures/mountainsfromapplewatchband.png',
        title: 'Alpine Loop',
        description: `Apple Watch Band box interior.
        Moody.`
    },
    {
        src: '/src/scansedited/textures/savethebees.png',
        fullSrc: '/src/scans/textures/savethebees.png',
        title: 'Save the Bees!',
        description: `Save the Bees, cut from t-shirt.
        I forget why this shirt ended up like this.`
    },
    {
        src: '/src/scansedited/textures/wrappingpaper.png',
        fullSrc: '/src/scans/textures/wrappingpaper.png',
        title: 'Cozy',
        description: `Wrapping Paper.
        The only thing that made the delivery packaging nice.`
    },
    {
        src: '/src/scansedited/transit/fukuokapass.png',
        fullSrc: '/src/scans/transit/fukuokapass.png',
        title: 'Hayakaken (はやかけん)',
        description: `Hayakaken (はやかけん) transit card.
        Used to get around Fukuoka (福岡市) public transport.`
    },
    {
        src: '/src/scansedited/transit/kchildsbuspass.png',
        fullSrc: '/src/scans/transit/kchildsbuspass.png',
        title: 'Incheon (인천) Child\'s Bus Pass',
        description: `Child's bus pass for Incheon (인천) transit.
        What I used to get around while visiting family back in the day.`
    },
    {
        src: '/src/scansedited/transit/parking6328.png',
        fullSrc: '/src/scans/transit/parking6328.png',
        title: 'No. 6328',
        description: `Parking Permit Number 6328.
        My first parking permit. I never saw security checking these.`
    },
    {
        src: '/src/scansedited/transit/parking6652.png',
        fullSrc: '/src/scans/transit/parking6652.png',
        title: 'No. 6652',
        description: `Parking Permit Number 6652.
        My second parking permit. Interestingly, no fine print up top. I wonder if they really only handed out 324 in that time.`
    },
    {
        src: '/src/scansedited/transit/ticket_njtransit.png',
        fullSrc: '/src/scans/transit/ticket_njtransit.png',
        title: 'NJ Transit ticket',
        description: `Ticket for the trip from EWR to Princeton.
        This was for a hackathon I took part in back in college.`
    },

];

const container = document.getElementById('galleryContainer'),
    tooltip = document.getElementById('tooltip'),
    modal = document.getElementById('modal'),
    glass = document.getElementById('glassOverlay');

let dragging = false, startX, startY, currX = 0, currY = 0;

function isOverlapOK(x1, y1, w1, h1, x2, y2, w2, h2, ratio = 0.15) {
    const overlap = Math.max(0, Math.min(x1+w1, x2+w2) - Math.max(x1, x2)) *
        Math.max(0, Math.min(y1+h1, y2+h2) - Math.max(y1, y2));
    return (overlap / (w1 * h1)) < ratio;
}

function placeGallery() {
    const w = innerWidth * 3, h = innerHeight * 3,
        mobile = innerWidth < 1000,
        imgW = mobile ? 150 : 333, imgH = mobile ? 150 : 333,
        maxOverlap = 0.1, minDist = mobile ? imgW * 2.4 : imgW * (1 - maxOverlap),
        placed = [];

    images.forEach((img, i) => {
        const el = document.createElement('div');
        el.className = 'image-item';
        let x, y, tries = 0, ok = false;

        while (!ok && tries++ < 100) {
            if (Math.random() < 0.85) {
                x = Math.random() * (w - imgW);
                y = Math.random() * (h - imgH);
            } else {
                const cx = w/2, cy = h/2, rx = w*0.5, ry = h*0.5;
                x = Math.max(0, Math.min(w - imgW, cx - rx + Math.random() * rx*2 - imgW/2));
                y = Math.max(0, Math.min(h - imgH, cy - ry + Math.random() * ry*2 - imgH/2));
            }

            ok = placed.every(p => isOverlapOK(x, y, imgW, imgH, p.x, p.y, imgW, imgH));
        }

        if (!ok && placed.length) {
            const f = placed[Math.floor(Math.random() * placed.length)];
            x = f.x + minDist * (Math.random() - 0.5);
            y = f.y + minDist * (Math.random() - 0.5);
        }

        placed.push({x, y});
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.transform = `rotate(${(Math.random() - 0.5) * 30}deg)`;

        const imgEl = document.createElement('img');
        imgEl.src = img.src;
        imgEl.alt = img.title;
        el.appendChild(imgEl);
        container.appendChild(el);
        setupEvents(el, img);
    });

    const rand = placed[Math.floor(Math.random() * placed.length)],
        cx = innerWidth / 2, cy = innerHeight / 2;
    currX = cx - (rand.x + imgW/2);
    currY = cy - (rand.y + imgH/2);
    container.style.transition = 'none';
    container.style.transform = `translate(${currX}px,${currY}px)`;
}

function setupEvents(item, data) {
    if (!matchMedia("(max-width: 768px)").matches) {
        item.addEventListener('mouseenter', e => showTip(e, data));
        item.addEventListener('mouseleave', hideTip);
        item.addEventListener('mousemove', moveTip);
    }
    item.addEventListener('click', () => showModal(data));
}

function showTip(e, data) {
    tooltip.querySelector('#tooltipImage').src = data.fullSrc;
    tooltip.querySelector('#tooltipTitle').textContent = data.title;
    tooltip.classList.add('show');
    moveTip(e);
}

function hideTip() {
    tooltip.classList.remove('show');
}

function moveTip(e) {
    const rect = tooltip.getBoundingClientRect();
    const offset = 5; // Much closer to cursor
    const padding = 10; // Distance from screen edges

    const viewportWidth = document.documentElement.clientWidth || window.innerWidth;
    const viewportHeight = document.documentElement.clientHeight || window.innerHeight;

    let x = e.clientX + offset;
    let y = e.clientY - rect.height - offset;

    // Smart horizontal positioning - flip to left side if tooltip would go off-screen
    if (x + rect.width > viewportWidth  - padding) {
        x = e.clientX - rect.width - offset;
    }

    // Ensure tooltip doesn't go off left edge
    if (x < padding) {
        x = padding;
    }

    // Smart vertical positioning - flip to bottom if tooltip would go off top
    if (y < padding) {
        y = e.clientY + offset;
    }

    // Ensure tooltip doesn't go off bottom edge
    if (y + rect.height > viewportHeight - padding) {
        y = viewportHeight - rect.height - padding;
    }

    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
}

function showModal(data) {
    modal.querySelector('#modalImage').src = data.fullSrc || data.src;
    modal.querySelector('#modalTitle').textContent = data.title;
    modal.querySelector('#modalDescription').textContent = data.description;
    modal.style.display = 'flex';
    glass.classList.add('blurred');
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    modal.style.display = 'none';
    glass.classList.remove('blurred');
    document.body.style.overflow = 'auto';
}

document.getElementById('closeModal').addEventListener('click', hideModal);
modal.addEventListener('click', e => { if (e.target === modal) hideModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { hideModal(); hideTip(); } });

container.addEventListener('mousedown', e => {
    if (!e.target.closest('.image-item')) {
        dragging = true;
        container.style.cursor = 'grabbing';
        container.style.transition = 'none';
        startX = e.clientX - currX;
        startY = e.clientY - currY;
    }
});

document.addEventListener('mousemove', e => {
    if (dragging) {
        e.preventDefault();
        currX = e.clientX - startX;
        currY = e.clientY - startY;
        limitPan();
    }
});

document.addEventListener('mouseup', () => {
    dragging = false;
    container.style.cursor = 'grab';
    container.style.transition = 'transform 0.1s ease-out';
});

container.addEventListener('touchstart', e => {
    if (!e.target.closest('.image-item')) {
        dragging = true;
        container.style.cursor = 'grabbing';
        container.style.transition = 'none';
        startX = e.touches[0].clientX - currX;
        startY = e.touches[0].clientY - currY;
    }
});

document.addEventListener('touchmove', e => {
    if (dragging) {
        e.preventDefault();
        currX = e.touches[0].clientX - startX;
        currY = e.touches[0].clientY - startY;
        limitPan();
    }
}, { passive: false });

document.addEventListener('touchend', () => {
    dragging = false;
    container.style.cursor = 'grab';
    container.style.transition = 'transform 0.1s ease-out';
});

function limitPan() {
    const maxX = innerWidth * 0.5, maxY = innerHeight * 0.5,
        minX = -innerWidth * 2.5, minY = -innerHeight * 2.5;
    currX = Math.max(minX, Math.min(maxX, currX));
    currY = Math.max(minY, Math.min(maxY, currY));
    container.style.transform = `translate(${currX}px,${currY}px)`;
}

addEventListener('resize', () => {
    container.innerHTML = '';
    currX = currY = 0;
    container.style.transform = 'translate(0px,0px)';
    placeGallery();
});

placeGallery();