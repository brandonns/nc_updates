// gallery.js
const images = [
    {
        src: '/src/scans%20edited/2food/blcoffee.png',
        fullSrc: '/src/scans/2food/blcoffee.png',
        title: 'Hot Coffee',
        description: `Ticket from a 7:22:41AM drive-thru order.
                    Very boring coffee order.`
    },
    {
        src: '/src/scans%20edited/2food/botm_helena.png',
        fullSrc: '/src/scans/2food/botm_helena.png',
        title: 'BOTM - Helena',
        description: `June Bird of the Month.
                    Thanks for the eggs, Helena!`
    },
    {
        src: '/src/scans%20edited/3entry/meowwolf.png',
        fullSrc: '/src/scans/3entry/meowwolf.png',
        title: 'QPass',
        description: `Meow Wolf "QPass".
                    Wish this was more fun.`
    },
    {
        src: '/src/scans%20edited/4games/lotto628.png',
        fullSrc: '/src/scans/4games/lotto628.png',
        title: 'Lotto Jun 28',
        description: `Powerball ticket Jun 28.
                    02 16 33 56 57 01. Loser.`
    },
    {
        src: '/src/scans%20edited/4games/lottosched.png',
        fullSrc: '/src/scans/4games/lottosched.png',
        title: 'CO Lotto Schedule',
        description: `A little pocket to hold tickets. 
                    Includes a schedule of draw dates.
`
    },
    {
        src: '/src/scans%20edited/5reference/applecard.png',
        fullSrc: '/src/scans/5reference/applecard.png',
        title: 'Gen 1 Titanium Apple Card',
        description: `I like the weight. 
                    Titanium.`
    },
    {
        src: '/src/scans%20edited/5reference/cal.png',
        fullSrc: '/src/scans/5reference/cal.png',
        title: '暑中お見舞い申し上げます',
        description: `Welcome to summer! 
                    Calendar page to start July, 2025.`
    },
    {
        src: '/src/scans%20edited/5reference/calib.png',
        fullSrc: '/src/scans/5reference/calib.png',
        title: 'HP Certificate of Calibration',
        description: `Certificate of Calibration.
                    Power supply calibration cert from 1998.`
    },
    {
        src: '/src/scans%20edited/5reference/foodcontainers.png',
        fullSrc: '/src/scans/5reference/foodcontainers.png',
        title: 'Food Containers',
        description: `Uline food containers.
                    I get these massive order books a few times a year.`
    },
    {
        src: '/src/scans%20edited/5reference/griddle.png',
        fullSrc: '/src/scans/5reference/griddle.png',
        title: 'Griddle Me This',
        description: `Uline griddle free offer.
                     I love the stupid pun.`
    },
    {
        src: '/src/scans%20edited/5reference/woodcrates.png',
        fullSrc: '/src/scans/5reference/woodcrates.png',
        title: 'Uline wood crates',
        description: `I wonder who chooses these "models".`
    },
    {
        src: '/src/scans%20edited/5reference/woodcratessmaller.png',
        fullSrc: '/src/scans/5reference/woodcratessmaller.png',
        title: 'Uline wood crates (continued)',
        description: `I wonder who chooses these "models".`
    },
    {
        src: '/src/scans%20edited/5reference/protract.png',
        fullSrc: '/src/scans/5reference/protract.png',
        title: 'Mother Protractor',
        description: `Acute (heh) Mother protractor.`
    },





    {
        src: '/src/scans%20edited/1transportation/fukuokapass.png',
        fullSrc: '/src/scans/1transportation/fukuokapass.png',
        title: 'Hayakaken (はやかけん)',
        description: `Hayakaken (はやかけん) transit card.
                    Used to get around Fukuoka (福岡市) public transport.`
    },

    {
        src: '/src/scans%20edited/1transportation/kchildsbuspass.png',
        fullSrc: '/src/scans/1transportation/kchildsbuspass.png',
        title: 'Incheon (인천) Child\'s Bus Pass',
        description: `Child's bus pass for Incheon (인천) transit.
                    What I used to get around while visiting family back in the day.`
    },
    {
        src: '/src/scans%20edited/1transportation/njtransit.png',
        fullSrc: '/src/scans/1transportation/njtransit.png',
        title: 'NJ Transit ticket',
        description: `Ticket for the trip from EWR to Princeton.
            This was for a hackathon I took part in back in college.`
    },
    {
        src: '/src/scans%20edited/1transportation/parking28.png',
        fullSrc: '/src/scans/1transportation/parking28.png',
        title: 'No. 6328',
        description: `Parking Permit Number 6328.
                    My first parking permit. I never saw security checking these.`
    },
    {
        src: '/src/scans%20edited/1transportation/parking52.png',
        fullSrc: '/src/scans/1transportation/parking52.png',
        title: 'No. 6652',
        description: `Parking Permit Number 6652.
                    My second parking permit. Interestingly, no fine print up top. I wonder if they really only handed out 324 in that time.`
    },
    {
        src: '/src/scans%20edited/2food/cheapapplefruitpie.png',
        fullSrc: '/src/scans/2food/cheapapplefruitpie.png',
        title: 'Square Snack',
        description: `Little Debbie mini apple fruit pie wrapper.
                    One of my buddies has NEVER had one of these, apparently. Impulse buy at the grocery store`
    },
    {
        src: '/src/scans%20edited/2food/mcdouble13e.png',
        fullSrc: '/src/scans/2food/mcdouble13.png',
        title: 'McDouble Order Number 13',
        description: `Ticket from a Friday, Jun 6, 2025 drive-thru order.
Rare \`SUB Mac Sauce\` modifier note.
Lucky number 13 from side 2.`
    },
    {
        src: '/src/scans%20edited/2food/mcdouble69e.png',
        fullSrc: '/src/scans/2food/mcdouble69.png',
        title: 'McDouble Order Number 69',
        description: `Ticket from a Wednesday, Jun 18, 2025 drive-thru order.
Confusingly standard \`ONLY\` modifier notes with an \`ADD Mac Sauce\`.
Side 1 bringing the NICE order number 69.`
    },
    {
        src: '/src/scans%20edited/3entry/diamondhead.png',
        fullSrc: '/src/scans/3entry/diamondhead.png',
        title: 'Diamond Head',
        description: `Diamond Head State Monument entry ticket.
                    Hawaii is so dang pretty.`
    },
    {
        src: '/src/scans%20edited/3entry/kenspacecenter.png',
        fullSrc: '/src/scans/3entry/kenspacecenter.png',
        title: 'Kennedy Space Center',
        description: `Kennedy Space Center Adult Admission ticket.
                    "SPAAAACE!"`
    },
    {
        src: '/src/scans%20edited/3entry/lama.png',
        fullSrc: '/src/scans/3entry/lama.png',
        title: '14th Dalai Lama',
        description: `14th Dalai Lama Speech GE ticket.
                    Honestly, I only remember one of these CU speaker night things.`
    },
    {
        src: '/src/scans%20edited/3entry/officepass.png',
        fullSrc: '/src/scans/3entry/officepass.png',
        title: 'Office Badge',
        description: `My office badge.
                    Back when we had offices to work in. Uncomfortably thick.`
    },
    {
        src: '/src/scans%20edited/3entry/schoolid.png',
        fullSrc: '/src/scans/3entry/schoolid.png',
        title: 'School ID',
        description: `The back of my Sr. year school ID.
                    Rowland's class was "Weights for Athletes III".`
    },
    {
        src: '/src/scans%20edited/3entry/stateofsatire.png',
        fullSrc: '/src/scans/3entry/stateofsatire.png',
        title: 'State of Satire',
        description: `State of Satire GE ticket.
                    Another CU speaker night thing. I wonder what this speech would look like today.`
    },
    {
        src: '/src/scans%20edited/3entry/woz.png',
        fullSrc: '/src/scans/3entry/woz.png',
        title: 'The Woz',
        description: `An Evening with Steve Wozniak GE ticket.
                    The one CU speaker night thing I somewhat remember. Basically an hour of dunking on Jobs.`
    },
    {
        src: '/src/scans%20edited/4games/rodsmith.png',
        fullSrc: '/src/scans/4games/rodsmith.png',
        title: 'HOF',
        description: `Rod Smith's autograph.
                    I went to a pool party at his house.`
    },
    {
        src: '/src/scans%20edited/4games/voidlottoe.png',
        fullSrc: '/src/scans/4games/voidlotto.png',
        title: 'Void Not For Sale',
        description: `A fun *VOID* ticket I got. Obvious loser.`
    },
    {
        src: '/src/scans%20edited/5reference/couponinktest.png',
        fullSrc: '/src/scans/5reference/couponinktest.png',
        title: 'Coupon CMYK Test',
        description: `King Soopers coupon printer test.
                    Very thin lines. Interesting there seems to be a focus on diagonal lines.`
    },
    {
        src: '/src/scans%20edited/5reference/covid.png',
        fullSrc: '/src/scans/5reference/covid.png',
        title: 'COVID-19 Vaxxer',
        description: `COVID-19 Vaccination Record Card [redacted].
                    Remember all that? Moderna or bust.`
    },
    {
        src: '/src/scans%20edited/5reference/feedbackloopintroe.png',
        fullSrc: '/src/scans/5reference/feedbackloopintro.png',
        title: 'Strange Loop Users Manual',
        description: `Intro from the Strange Loop users manual.
                    Short blurb about feedback loops. I like the little visual.`
    },
    {
        src: '/src/scans%20edited/5reference/vidglitcher.png',
        fullSrc: '/src/scans/5reference/vidglitcher.png',
        title: 'Video Breaker User Guide',
        description: `Diagram of internals from the Video Breaker User Guide.
                    Not a hardware guy but this is neat.`
    },
    {
        src: '/src/scans%20edited/6trading_cards/apache.png',
        fullSrc: '/src/scans/6trading_cards/apache.png',
        title: 'Apache Attack \'Copter',
        description: `Apache Attack 'Copter card from the Topps Desert Storm trading card pack.
                    7 player killstreak! (6 with Hardline).`
    },
    {
        src: '/src/scans%20edited/6trading_cards/apc.png',
        fullSrc: '/src/scans/6trading_cards/apc.png',
        title: 'Marine APCs',
        description: `Marine APCs card from the Topps Desert Storm trading card pack.
                    Armored Personnel Carriers traditionally carry personnel. Neat chassis.`
    },
    {
        src: '/src/scans%20edited/6trading_cards/cyborge.png',
        fullSrc: '/src/scans/6trading_cards/cyborg.png',
        title: 'Cyborg',
        description: `Cyborg (Victor Stone) trading card from Dave & Busters.
                    Another random coin-dropper prize.`
    },
    {
        src: '/src/scans%20edited/6trading_cards/desertstormcardse.png',
        fullSrc: '/src/scans/6trading_cards/desertstormcards.png',
        title: 'Topps Desert Storm',
        description: `Topps Desert Storm trading card pack wrapper.
                    Random pickup for myself while doing some gift shopping a few years ago.`
    },
    {
        src: '/src/scans%20edited/6trading_cards/dragonitee.png',
        fullSrc: '/src/scans/6trading_cards/dragonite.png',
        title: 'Delivery Dragonite',
        description: `Pokémon WotC Promo Dragonite #5.
                    Absolute favorite Pokémon and very neat card. I'm old enough to have gotten this card at the movies. I don't remember a single thing, but I kept the card.`
    },
    {
        src: '/src/scans%20edited/6trading_cards/mlrs.png',
        fullSrc: '/src/scans/6trading_cards/mlrs.png',
        title: 'MLRS',
        description: `Multi-launch Rocket System card from the Topps Desert Storm trading card pack.
                    Each rocket is 13' long with a 9" diameter.`
    },
    {
        src: '/src/scans%20edited/6trading_cards/spocke.png',
        fullSrc: '/src/scans/6trading_cards/spock.png',
        title: 'Bones',
        description: `Dr. Leonard H. McCoy ("Bones") trading card from Dave & Busters.
                    No full sets from my last visit.`
    },
    {
        src: '/src/scans%20edited/6trading_cards/topgun.png',
        fullSrc: '/src/scans/6trading_cards/topgun.png',
        title: 'Top Gun',
        description: `Top Gun card from the Topps Desert Storm trading card pack.
                    [Comment removed by Tom Cruise's agent, Maha Dakhil].`
    },
    {
        src: '/src/scans%20edited/6trading_cards/whatatank.png',
        fullSrc: '/src/scans/6trading_cards/whatatank.png',
        title: 'What Is A Tank?',
        description: `What Is A Tank? card from the Topps Desert Storm trading card pack.
                    Carries a large, direct-fire cannon; heavily armored.`
    },
    {
        src: '/src/scans%20edited/7textures/fieldnotesmape.png',
        fullSrc: '/src/scans/7textures/fieldnotesmap.png',
        title: 'Field Notes National Park Pack',
        description: `Field Notes box interior.
                    I love the Grand Canyon. Pretty neat to see and the surrounding area is beautiful.`
    },
    {
        src: '/src/scans%20edited/7textures/mountainsfromapplewatchbande.png',
        fullSrc: '/src/scans/7textures/mountainsfromapplewatchband.png',
        title: 'Alpine Loop',
        description: `Apple Watch Band box interior.
                    Moody.`
    },
    {
        src: '/src/scans%20edited/7textures/postcard.png',
        fullSrc: '/src/scans/7textures/postcard.png',
        title: 'Postcard from Rob',
        description: `Postcard from Rob.
                    Love ya bro!`
    },
    {
        src: '/src/scans%20edited/7textures/savethebees.png',
        fullSrc: '/src/scans/7textures/savethebees.png',
        title: 'Save the Bees!',
        description: `Save the Bees, cut from t-shirt.
                    I forget why this shirt ended up like this.`
    },
    {
        src: '/src/scans%20edited/7textures/sonystickers.png',
        fullSrc: '/src/scans/7textures/sonystickers.png',
        title: 'Cassette Stickers',
        description: `Stickers from a Sony camcorder cassette tape.
                    I bought a small stack of tapes before finding out my camcorder tape drawer was stuck.`
    },
    {
        src: '/src/scans%20edited/8literature/dbzone.png',
        fullSrc: '/src/scans/8literature/dbzone.png',
        title: 'Cross Epoch Panel',
        description: `Intro panel from Cross Epoch.
                    I got this from one of the One Piece box sets. Very fun One Piece x Dragon Ball collab.`
    },
    {
        src: '/src/scans%20edited/8literature/opfeast.png',
        fullSrc: '/src/scans/8literature/opfeast.png',
        title: 'Cross Epoch Panel',
        description: `Panel from Cross Epoch.
                    From the same mini-volume. This is from the One Piece x Toriko story.`
    },
    {
        src: '/src/scans%20edited/8literature/opocean.png',
        fullSrc: '/src/scans/8literature/opocean.png',
        title: 'The Solitary Journey of Jimbei Panel',
        description: `Panel from The Solitary Journey of Jimbei.
                    Another mini-volume from another box set. Jimbei in the water.`
    },
    {
        src: '/src/scans%20edited/8literature/si_dec1982e.png',
        fullSrc: '/src/scans/8literature/si_dec1982.png',
        title: 'Scientific American. (1982, December). 247(6)',
        description: `Personal favorite cover from a small stash recovered from the
                    trash outside an office in the CU Boulder Engineering Center.`
    },
    {
        src: '/src/scans%20edited/8literature/zenitsu.png',
        fullSrc: '/src/scans/8literature/zenitsu.png',
        title: 'Zenitsu Agatsuma (我妻 善逸)',
        description: `Profile for Zenitsu Agatsuma from the Demon Slayer Corps Special Report mini-volume.
                    One of my favorite characters from Demon Slayer.`
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
