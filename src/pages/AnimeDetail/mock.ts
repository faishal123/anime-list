import { SingleAnime } from "src/graphql/query";

export const SingleAnimeMock = {
  request: {
    query: SingleAnime,
    variables: { id: 11061 },
  },
  result: {
    data: {
      Media: {
        id: 11061,
        title: {
          english: "Hunter x Hunter (2011)",
          romaji: "HUNTER×HUNTER (2011)",
          native: "HUNTER×HUNTER (2011)",
          __typename: "MediaTitle",
        },
        isAdult: false,
        genres: ["Action", "Adventure", "Fantasy"],
        popularity: 471170,
        description:
          "A new adaption of the manga of the same name by Togashi Yoshihiro.<br><br>\nA Hunter is one who travels the world doing all sorts of dangerous tasks. From capturing criminals to searching deep within uncharted lands for any lost treasures. Gon is a young boy whose father disappeared long ago, being a Hunter. He believes if he could also follow his father's path, he could one day reunite with him.<br><br>\nAfter becoming 12, Gon leaves his home and takes on the task of entering the Hunter exam, notorious for its low success rate and high probability of death to become an official Hunter. He befriends the revenge-driven Kurapika, the doctor-to-be Leorio and the rebellious ex-assassin Killua in the exam, with their friendship prevailing throughout the many trials and threats they come upon taking on the dangerous career of a Hunter.",
        episodes: 148,
        status: "FINISHED",
        format: "TV",
        chapters: null,
        type: "ANIME",
        meanScore: 89,
        averageScore: 89,
        characters: {
          nodes: [
            {
              id: 6088,
              name: {
                first: "Menchi",
                middle: null,
                last: null,
                full: "Menchi",
                native: "メンチ",
                userPreferred: "Menchi",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/b6088-Bih7EhJL1QE6.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/b6088-Bih7EhJL1QE6.jpg",
                __typename: "CharacterImage",
              },
              description:
                "One of the two examiners that presided over the second stage of the Exam. Her exam topic was to prepare a piece of sushi for her to taste. If it met up to her stringent expectations, the candidate would pass.",
              __typename: "Character",
            },
            {
              id: 66135,
              name: {
                first: "Cocco",
                middle: null,
                last: null,
                full: "Cocco",
                native: "コッコ",
                userPreferred: "Cocco",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/b66135-osaTSFrkgK2A.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/b66135-osaTSFrkgK2A.png",
                __typename: "CharacterImage",
              },
              description: "The live announcer at the arena.",
              __typename: "Character",
            },
            {
              id: 60,
              name: {
                first: "Silva",
                middle: null,
                last: "Zoldyck",
                full: "Silva Zoldyck",
                native: "シルバ＝ゾルディック",
                userPreferred: "Silva Zoldyck",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/60.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/60.jpg",
                __typename: "CharacterImage",
              },
              description:
                "Silva is Killua's father. He is a silent, pensive figure, and Killua seems to rarely interact with him, although Killua does look up to him. He allows Killua to go along with Gon on their journey, but this is only so Killua would gain more experience when thrown out into the real world on his own. In fact, Silva was confident that Killua would eventually return home on his own, as an assassin. During the Yorknew City arc, Silva and his father Zeno are both hired by the Mafia to assassinate the Phantom Troupe but withdraw from the job when their clients are murdered by Illumi, Maha, and Karuto.",
              __typename: "Character",
            },
            {
              id: 82925,
              name: {
                first: "Knov",
                middle: null,
                last: null,
                full: "Knov",
                native: "ノヴ",
                userPreferred: "Knov",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/82925.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/82925.jpg",
                __typename: "CharacterImage",
              },
              description:
                "Knov is a Hunter who participated in the Chimera Ant Extermination Mission.",
              __typename: "Character",
            },
            {
              id: 10535,
              name: {
                first: "Leroute",
                middle: null,
                last: null,
                full: "Leroute",
                native: "レルート",
                userPreferred: "Leroute",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/n10535-iCSNBBSq22iD.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/n10535-iCSNBBSq22iD.png",
                __typename: "CharacterImage",
              },
              description:
                "Leroute is a criminal who manipulates her victims. She is smart, sharp, and insightful. Leroute was formerly a deranged psychologist who reveled in the misery of her clients. She often attacked her victims psychologically to such a degree that they often committed suicide.",
              __typename: "Character",
            },
            {
              id: 6089,
              name: {
                first: "Kalluto",
                middle: null,
                last: "Zoldyck",
                full: "Kalluto Zoldyck",
                native: "カルト＝ゾルディック",
                userPreferred: "Kalluto Zoldyck",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/n6089-ro8HdSKvlycB.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/n6089-ro8HdSKvlycB.jpg",
                __typename: "CharacterImage",
              },
              description:
                "Kalluto Zoldyck is the younger brother of Killua. He was initially introduced accompanying his mother during Gon's retrieval of Killua from his home on Kukuroo Mountain. Kalluto appears again during the Yorknew City arc, assisting his older brother Illumi with the assassination of the ten mafia dons that placed bounties on the Phantom Troupe's heads. After the Phantom Troupe's entrance into Greed Island, Kalluto joins as Hisoka's replacement. During the Phantom Troupe's assault on Zazan's palace in Meteor City, he reveals he joined the Spiders with the intention of bringing Killua back home.",
              __typename: "Character",
            },
            {
              id: 57,
              name: {
                first: "Illumi",
                middle: null,
                last: "Zoldyck",
                full: "Illumi Zoldyck",
                native: "イルミ＝ゾルディック",
                userPreferred: "Illumi Zoldyck",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/b57-pTFguojSOQZW.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/b57-pTFguojSOQZW.png",
                __typename: "CharacterImage",
              },
              description:
                "**Height:** 185 cm \n**Weight:** 68 kg \n**Hair Color:** Black \n**Eye Color:** Black  \n**Occupation:** Assassin, Hunter \n**Nen Type:** Manipulation   \n\nIllumi is [Killua](https://anilist.co/character/27/Killua-Zoldyck)'s eldest brother. He is an experienced assassin, whom along with his father was responsible for Killua's training and upbringing. During the Hunter Exam, Illumi masked his appearance and used an alias, using special pins to change his entire facial structure to the point where he could only be recognized by his voice. His oppressive evil aura makes even Killua fearful and wary whenever he approaches Illumi.\n\n~! It is later revealed that Illumi planted one of his needles in Killua's head to coerce him into always running away from someone stronger than him. !~",
              __typename: "Character",
            },
            {
              id: 29807,
              name: {
                first: "Shoot",
                middle: null,
                last: "McMahon",
                full: "Shoot McMahon",
                native: "シュート＝マクマホン",
                userPreferred: "Shoot McMahon",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/29807.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/29807.jpg",
                __typename: "CharacterImage",
              },
              description:
                "Shoot McMahon (シュート＝マクマホン, Shūto Makumahon?) is an Unidentified Beast Hunter, Knuckle's partner, and the second disciple of Morel. He has a timid personality and is often afraid of taking advantage of opportune times to attack his enemy. When the fight begins with Youpi, he becomes inspired by Gon and is able to fully unleash his power, overcoming his timidness and injuries.",
              __typename: "Character",
            },
            {
              id: 58,
              name: {
                first: "Chrollo",
                middle: null,
                last: "Lucilfer",
                full: "Chrollo Lucilfer",
                native: "クロロ・ルシルフル",
                userPreferred: "Chrollo Lucilfer",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/b58-USOmsz3nursi.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/b58-USOmsz3nursi.jpg",
                __typename: "CharacterImage",
              },
              description:
                " __Height:__ 177 cm \n__Occupation:__ Leader of the Phantom Troupe \n__Nen Type:__ Specialization  \n \nChrollo Lucilfer is a calm, young man, coming across as intelligent and charismatic. He seems to be a born leader, able to hold the Genei Ryodan (Phantom Troupe) together despite the volatile personalities that make up the group. He is also an incredibly skilled fighter.\n\n##__Chrollo's Abilities__\n\n~!__Skill Hunter__ (盗賊の極意 Bandit's Secret)\nType: Specialization\nChrollo's Nen ability allows him to steal the Nen ability of other people to use them as his own through a conjured book known as the \"Bandit's Secret\". The theft victim, of course, no longer has access to their stolen ability. \n\nThe theft happens under strict conditions:\n       1. He must witness the Nen ability in action with his eyes.\n       2. He must ask about the ability and be answered by the victim.\n       3. His victim's palm must touch the handprint on the cover of Bandit's Secret    \n       4. All of the above must be done within an hour.\n\nTo use one of the stolen abilities, he first conjures Bandit's Secret and turns to the page of the wanted ability. While using an ability, Chrollo must turn to the page with the ability on it and the book must remain open in his right hand; this means he could only have access to one chosen ability at a time. The abilities are subjected not only to the Limitations but also to the emotions and thinking of their creators: for example, despite seeing corpses as immobile masses no different from objects, Chrollo cannot use Order Stamp on cadavers due to the outlook of the original owner, despite it not being a Limitation. Additionally, an ability vanishes from the book if its former owner dies. However, if their Nen has become stronger after death, Chrollo can keep their ability even if the original owner passes away. Expert Nen users can see through some of these conditions, as [Zeno Zoldyck](https://anilist.co/character/59/Zeno-Zoldyck) rightly guessed that Chrollo must endure 4 to 5 hardships before he can steal an ability.\n\n__Double Face__ (栞のテーマ Bookmark Theme)\nType: Specialization\nThis bookmark allows Chrollo to maintain access to any ability on the page it is placed, even if the book is closed and he is not touching it, circumventing one of the conditions placed on Skill Hunter. With both hands now free, Chrollo can now use hand-to-hand combat in conjunction with his stolen abilities. Furthermore, if Chrollo keeps the book open to a particular page and uses the bookmark on another, he becomes capable of utilizing two stolen abilities at the same time. The bookmark was specified to belong to the book itself and not to be a stolen ability.!~\n\n(Source: Hunter x Hunter Wiki)\n",
              __typename: "Character",
            },
            {
              id: 3195,
              name: {
                first: "Feitan",
                middle: null,
                last: "Portor",
                full: "Feitan Portor",
                native: "フェイタン",
                userPreferred: "Feitan Portor",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/3195.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/3195.jpg",
                __typename: "CharacterImage",
              },
              description:
                "A mysterious member of the Phantom Troupe, Feitan is attired in what one would expect from a bandit - dark clothes with a skullhead scarf that covers his mouth. Feitan seldom speaks, but when he does, there's usually a word missing. Feitan's first language most likely isn't Japanese, but he has shown to be rather proficient in the Chinese language. He is one of the original members hailing from Meteor City. \n\nAfter Feitan's victory over Zazan in Meteor City, he was granted temporary control over the Phantom Troupe.  Feitan is an assassin down to his core, and is quite skilled at torture. His movement is incredibly fast; Feitan is able to leave afterimages of his body due to his rapid steps. He wields an umbrella that conceals both a sword and a gun that fires needles inside for hidden attacks.  \n\n__Nen Abilities:__ \nPain Packer: Allows Feitan to first use his aura to materialize a protective armor. Then, all of the damage that he has received in battle turns into scorching heat (named \"Rising Sun\") and is emitted into the air. The emitted nen transforms into a miniature sun that burns the victim to death. Rising Sun has a very large attack radius, and while Feitan is within his armor he cannot be harmed by the fire.",
              __typename: "Character",
            },
            {
              id: 5835,
              name: {
                first: "Pakunoda",
                middle: null,
                last: null,
                full: "Pakunoda",
                native: "パクノダ",
                userPreferred: "Pakunoda",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/b5835-cbomgYG3LWrP.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/b5835-cbomgYG3LWrP.jpg",
                __typename: "CharacterImage",
              },
              description:
                "Pakunoda exudes an air of self-confidence that can be intimidating to others. She is fully loyal to Kuroro. She is one of the original Phantom Troupe from Meteor City. Her physical strength is 11th in the Troupe. \n\nShe has the ability to read the conscious thoughts of any person she is in physical contact with and can extract memories by asking specific questions. Attempting to create false information is impossible, since she can extract her target's purest memories. The information she collects is highly useful in exposing weaknesses and secrets, especially in finding out the opponent's nen ability or in situations requiring some form of extortion or blackmail. Her ability can also be used to see the recent past of an object. \n\nShe also has the ability to share her memories by shooting them into another person's head using a revolver and conjured nen bullets called \"Memory Bombs\". This is not a combat ability, and does no damage. If she shoots a Memory Bomb into the person from whom the memories were read, those memories are erased permanently.",
              __typename: "Character",
            },
            {
              id: 31,
              name: {
                first: "Hisoka",
                middle: null,
                last: "Morow",
                full: "Hisoka Morow",
                native: "ヒソカ・モロウ",
                userPreferred: "Hisoka Morow",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/b31-FZckOuu7L1un.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/b31-FZckOuu7L1un.png",
                __typename: "CharacterImage",
              },
              description:
                "__Height: __187 cm\n\nNotorious for his cruel and deceitful fighting ability, Hisoka has proven to be deadly. His deviousness and volatility have caused many opponents to have difficulty anticipating his next move, and this has led to him winning many battles. Using Shu powered poker cards as his primary weapon, he throws them with ease and deadly accuracy.  Also, he is very intrigued by [Gon](https://anilist.co/character/30/Gon-Freecss) and the potential this young boy has to become an adept and powerful adversary. Hisoka, ever looking for a strong opponent, is willing to aid, or at least not defeat prematurely, someone that could develop into a future opponent.\n\n~!Later in the series, Hisoka is revealed to be a newly-inducted member of the Phantom Troupe, though his association with the organization is, rather characteristically, simply in order to fight a remarkable opponent. In actuality, his membership is a farce, a fact he reveals at an opportune time.!~\n\n##__Hisoka's Abilities__\n\n~!__Bungee Gum__ (伸縮自在の愛 Elastic Love)\nType: Transmutation\nHisoka's main ability allows him to make his aura sticky and elastic. Its extreme durability, flexibility, and adhesive properties make it an exceptionally versatile ability with several offensive, defensive, and supplementary applications. He can activate it from his fingers, hands, and feet. He can attach it both through physical contact and remotely, by extending it towards the target, which makes it very difficult to avoid. He can give it the command to contract at will, and it snaps back with greater force the more it is stretched. It is so resilient that it did not tear after absorbing the full force of a ball hurled by [Gon](https://anilist.co/character/30/Gon-Freecss) with Rock, or several of [Gotoh](https://anilist.co/character/60009/Gotoh)'s coins, which makes it an effective way of returning projectiles to the sender.\nOffensively, Bungee Gum can be used to pull the opponent towards Hisoka or to create flail-like weapons. He can also separate it from his body, in which case it will tear after a maximum stretch of 10 meters. He most commonly detaches it from his body to attach projectiles to his opponent, such as his Shu-enhanced cards, while concealing it with In. The combination of the latter technique and Bungee Gum allows Hisoka to lay multi-layered traps that spring all at once, killing the unsuspecting opponent in a flash. He has also emitted it to restrain individuals as powerful as [Machi](https://anilist.co/character/5830/Machi-Komacine).\n\nBungee Gum also has a wide range of auxiliary applications. Hisoka can attach it to a solid surface to retreat at extreme speed when the need arises. By using it on his feet, he can adhere to the ground or run on walls. It is also useful for sticking objects in place for traps or to keep hold of them, even after throwing them. By covering a wound with it, he can instantly stop hemorrhages. On one occasion, he enveloped his lungs and heart with it so it would resuscitate him. By creating non-adhesive aura, he can also replace missing limbs, which can coil like a spring to propel himself at tremendous velocity.\n\n__Texture Surprise__ (薄っぺらな嘘 Flimsy Lies)\nType: Conjuration\nHisoka can apply his aura to any smooth, flat surface, such as paper or cloth, and manifest imagery on it to change its appearance and texture for deception. He can replicate over one thousand different textures. He has tricked Nen users of the Spiders' caliber with this ability, with none of them realizing he had used it, either by sight or by touch. Against [Kastro](https://anilist.co/character/63099/Kastro), he utilized Texture Surprise to hide his wounds and confuse him. It can also be applied to pure aura, such as Hisoka's Bungee Gum, to alter his own appearance. Since no aura is detectable once Texture Surprise is active, whether through eyesight, touch, or extrasensorial perception, its effects are also visible to individuals unable to use Nen, it is safe to assume Texture Surprise is a Conjuration ability, which is further supported by its requiring Hisoka's direct action to be dispelled and by a verb used in its description.!~\n\n(Source: HunterHunter Wikia, HxH Japanese Wikipedia)",
              __typename: "Character",
            },
            {
              id: 41135,
              name: {
                first: "Shaiapouf",
                middle: null,
                last: null,
                full: "Shaiapouf",
                native: "シャウアプフ",
                userPreferred: "Shaiapouf",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/n41135-tTO36i1YAA5L.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/n41135-tTO36i1YAA5L.jpg",
                __typename: "CharacterImage",
              },
              description:
                "Butterfly-humanoid Chimera Ant and one of [Meruem](https://anilist.co/character/23277)'s Royal Guards.",
              __typename: "Character",
            },
            {
              id: 24279,
              name: {
                first: "Ponzu",
                middle: null,
                last: null,
                full: "Ponzu",
                native: "ポンズ",
                userPreferred: "Ponzu",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/b24279-wCttqcLJ3W2b.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/b24279-wCttqcLJ3W2b.jpg",
                __typename: "CharacterImage",
              },
              description:
                "Examinee #246 during the Hunter Exam. Ponzu is the only prominent female who managed to enter the last few stages of the Hunter exam. Her secret weapon lies in the big round hat she wears, which carries powerful bees under the surface that emerge and attack people that threaten her. Although Ponzu is a relatively minor character in the series, her cute and girlish charm has won her some fans who voted for her in an early Hunter popularity poll. \n\n~!During the fourth stage of the Hunter exam her bees kill Barbon when she falls into his trap. She is rescued by Gon, Leorio, and Kurapika, but her tag is taken by Leorio when she is unconscious, and she is therefore not able to continue to the last stage of the Exam.!~   \n\n~!In Chimera Ant arc after Pokkle was knocked out, she immediately runs for it. Knowing that Pokkle won't be eaten immediately, she rushed to write SOS messages in blood and uses her bees to bring the message to the strongest Hunter nearby. When she finally decided to go back to the border, she is shot and eaten moments later by an officer from Zazan's squad.!~",
              __typename: "Character",
            },
            {
              id: 26,
              name: {
                first: "Ging",
                middle: null,
                last: "Freecss",
                full: "Ging Freecss",
                native: "ジン・フリークス",
                userPreferred: "Ging Freecss",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/26-VpZXIwOdcz8p.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/26-VpZXIwOdcz8p.jpg",
                __typename: "CharacterImage",
              },
              description:
                "__Height:__ 176 cm\n\nA famous 2-star ancient ruins hunter and the father of Gon Freeccs. When Ging was a child, he left his home on Whale Island to become a hunter and did not return home for 10 years, carrying a young Gon whom he entrusted to Mito. He is one of the founders of the legendary video game Greed Island. He is the primary reason Gon decides to leave home, following in his footsteps to become a hunter and find his father. ~!He is also a member of the Zodiacs, having as a sign the boar.!~",
              __typename: "Character",
            },
            {
              id: 17564,
              name: {
                first: "Neon",
                middle: null,
                last: "Nostrade",
                full: "Neon Nostrade",
                native: "ネオン＝ノストラード",
                userPreferred: "Neon Nostrade",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/b17564-tJHe64LxFqm1.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/b17564-tJHe64LxFqm1.jpg",
                __typename: "CharacterImage",
              },
              description:
                "Neon is the daughter of the boss of the Nostrade family, who are part of the Mafia. She is a hyper but spoiled young girl, who enjoys collecting body parts (whether they are legal or not) as her hobby. She is constantly protected by many bodyguards by the order of her father.  \n\nNeon possesses a prophetic ability, which she calls \"Lovely Ghost Writer\". While she herself does not realize this, it is a form of specialization nen. Her prophecies are 100% accurate and written in the form of a poem. Neon cannot predict her own future, and is able to write a prophecy using only a small amount of information from her client. The prophecy is a automatic process, so what is written on the paper must be asked by the person in question. Neon's father was able to rise up in rank in the Mafia because of her ability. This made her father more interested in her ability then her life. This also made her father overly protected over her, assigning her many bodyguards. Kurapika is one of Neon's bodyguards.  \n\n(Source: AnimeNfo.com)",
              __typename: "Character",
            },
            {
              id: 22521,
              name: {
                first: "Wing",
                middle: null,
                last: null,
                full: "Wing",
                native: "ウイング",
                userPreferred: "Wing",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/b22521-lW31xQRGKQm8.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/b22521-lW31xQRGKQm8.jpg",
                __typename: "CharacterImage",
              },
              description:
                'Wing is a Nen trainer whose main student is Zushi. He meets Gon and Killua at the Celestial Tower. Although in the beginning he refuses to train Gon and Killua, and even lies to them about Nen\'s purpose, he changes his mind when they reach the 200th floor, as he realizes they could die or be badly injured from nen "initiation". For the next several months he teaches them the basics of Nen, after which he announces they have passed the secret final requirement for being a Hunter. His teacher was Biscuit Kruger.',
              __typename: "Character",
            },
            {
              id: 52497,
              name: {
                first: "Majitani",
                middle: null,
                last: null,
                full: "Majitani",
                native: "マジタニ",
                userPreferred: "Majitani",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/b52497-TYAsMF2XBFeG.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/b52497-TYAsMF2XBFeG.jpg",
                __typename: "CharacterImage",
              },
              description: null,
              __typename: "Character",
            },
            {
              id: 33351,
              name: {
                first: "Elena",
                middle: null,
                last: null,
                full: "Elena",
                native: "エレナ",
                userPreferred: "Elena",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/b33351-zLsDLpkrgGwd.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/b33351-zLsDLpkrgGwd.jpg",
                __typename: "CharacterImage",
              },
              description:
                'Elena is, like her twin sister Eeta, one of the eleven who helped make Greed Island. One of the e\'s in "Greed" comes from her name. She is in charge of moving people from Greed Island to the real world, and is happy when Gon remembered her name.',
              __typename: "Character",
            },
            {
              id: 33352,
              name: {
                first: "Eeta",
                middle: null,
                last: null,
                full: "Eeta",
                native: "イータ",
                userPreferred: "Eeta",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/b33352-SoU0ScSSvUNP.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/b33352-SoU0ScSSvUNP.jpg",
                __typename: "CharacterImage",
              },
              description:
                'Eeta is, like her twin sister Elena, one of the eleven who helped make Greed Island. One of the E\'s in "Greed" comes from her name. She is in charge of moving people from the real world to Greed Island. She plays the tape for Gon, left behind by his father.',
              __typename: "Character",
            },
            {
              id: 29809,
              name: {
                first: "Knuckle",
                middle: null,
                last: "Bine",
                full: "Knuckle Bine",
                native: "ナックル゠バイン",
                userPreferred: "Knuckle Bine",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/29809.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/29809.jpg",
                __typename: "CharacterImage",
              },
              description:
                '__Nen Type:__ Emission\n\nKnuckle Bine is an Unidentified Beast Hunter and Morel\'s apprentice. Despite appearing to be an aggressive man, Knuckle is very compassionate and easily moved to tears. Knuckle also gets along well with animals, having the habit of taking care of abandoned pets.\n\n## __Knuckle\'s Abilities:__\n\n~! __Hakoware__ (天上不知唯我独損)\n_Type: Emission and Manipulation_\nHakoware involves Knuckle emitting an indestructible mascot called the "Amortizing Power Redirector (A.P.R.)" ("Potclean"; ポットクリン, Pottokurin, in Japanese) onto the opponent after being dealt a blow from Knuckle. A.P.R. constantly lends Knuckle\'s aura to whomever it is attached to, displayed by a rising counter on its forehead. When adding interest, A.P.R. announces "It\'s time, adding interest" (「時間です。利息が付きます」, Jikan desu, risoku ga tsukimasu). As long as A.P.R. is attached, any attacks done to Knuckle by his opponent return aura to him, lowering the counter. Until all of the aura lent by Knuckle is returned to him, he cannot be physically damaged by his opponent. The reverse is also true: each of Knuckle\'s blows only lends more aura to his opponent, causing no damage. The stronger the attack, the more aura is lent or returned. In both cases, the person suffering the blow can still be knocked back by it, despite suffering no damage.\n\nThe interest rate on A.P.R. is 10% of the borrowed aura, accrued every 10 seconds while the victim is within 50 meters of Knuckle. As the amount of borrowed aura (including interest) accumulates, A.P.R. also grows in size. When the aura borrowed from Knuckle exceeds his opponent\'s total remaining aura (specifically P.O.P), the opponent "goes bankrupt". Thus, it is in Knuckle\'s interest that his opponent spends/wastes as much aura as possible, as quickly as possible (so long as said aura is not spent on Knuckle himself). The result is that the opponent\'s "aura balance" falls that much quicker until it is below the amount they owe Knuckle (displayed by A.P.R), at which point they can no longer possibly repay their debt and bankruptcy sets in.\n\nBankruptcy causes A.P.R. to transform into the "Individual Ren Suppressor (I.R.S.)" (トリタテン, "Toritaten"), a demon-like mascot that follows the debtor for 30 days and forces them into a continuous state of Zetsu. It is worth noting that when Knuckle struck Shaiapouf\'s copy, A.P.R. was attached to the latter\'s real body rather than to his clone. Furthermore, Knuckle can use Hakoware on multiple targets at once, as well as track their general location at all times, regardless of the distance. The ability can be removed by an Exorcist, but it takes a great deal out of the Nen remover. It is also cancelled if Knuckle is rendered unconscious.\n\nIt is unclear what Nen types are involved in the ability; A.P.R. (and later Toritaten) might be conjured and rendered invisible to non-users, which would increase the aura cost, or emitted and possibly transmuted. Regardless, Manipulation would likely be required to endow the construct with sentience (and possibly to enforce Zetsu on the target), while Emission might be involved in the process of lending aura to the opponent.!~',
              __typename: "Character",
            },
            {
              id: 49757,
              name: {
                first: "Senchou",
                middle: null,
                last: null,
                full: "Senchou",
                native: "船長",
                userPreferred: "Senchou",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/b49757-z0flD3pwd5Bq.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/b49757-z0flD3pwd5Bq.jpg",
                __typename: "CharacterImage",
              },
              description: null,
              __typename: "Character",
            },
            {
              id: 5836,
              name: {
                first: "Uvogin",
                middle: null,
                last: null,
                full: "Uvogin",
                native: "ウボォーギン",
                userPreferred: "Uvogin",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/5836.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/5836.jpg",
                __typename: "CharacterImage",
              },
              description:
                "Uvogin is the eleventh member of the Phantom Troupe. Nobunaga has compared his personality to Gon's, seeing how not only do they have the same Nen type, but their behavior is similar as well, being impulsive and short tempered. \n\nUvogin is one of the Phantom Troupe that originated from Meteor City. However, like all of the Phantom Troupe, Uvogin doesn't hesitate to kill anyone. Out of all of the Phantom Troupe, Uvogin is the strongest in terms of physical power. Although he prefers to fight alone, Uvogin works best when fighting with a partner (specifically, Nobunaga) as he fights better when he has someone else to protect, though he would never admit it.\n\n~!Uvogin and Kurapika fought alone in the outskirt deserts of Yorknew where Kurapika eventually pierced him with his Chain of Judgement. During the final moments of the conflict Kurapika told Uvogin that if he spoke again dishonestly then he would die, but if he spoke the truth he would let him live just a little longer. He lastly orders Uvogin to reveal the location of his comrades to which Uvogin tells him to go to hell and subsequently dies due to the Judgement Chain. Uvogin's death is a significant loss to the Phantom Troupe. !~  \n\n__Nen Ability:__  \n~!Big Bang Impact: Uvogin has seasoned his nen to the point where he has 100% power in the enhancement type. He can strengthen his muscles to the point where neither bullets nor missiles will have much of an effect on him and can strengthen even his vocal cords in order to kill someone. His favorite ability is his \"Big Bang Impact\", where Uvogin focuses all of the aura to his fist with kou and lets loose, creating an impact as powerful as a bomb.!~",
              __typename: "Character",
            },
            {
              id: 29808,
              name: {
                first: "Meleoron",
                middle: null,
                last: null,
                full: "Meleoron",
                native: "メレオロン",
                userPreferred: "Meleoron",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/29808.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/29808.jpg",
                __typename: "CharacterImage",
              },
              description:
                "A chameleon-like ant, Meleoron is an eccentric among chimera ants, as he dislikes fighting or killing. Even though Meleoron has the rank of a squadron leader, he himself admits his actual fighting strength is only on par with a common soldier ant. Meleoron dresses in a hooded sweatshirt with sweatpants, and is often seen smoking. His original name, before the chimera ant queen died, was Jail.",
              __typename: "Character",
            },
            {
              id: 33382,
              name: {
                first: "Dalzollene",
                middle: null,
                last: null,
                full: "Dalzollene",
                native: "ダルツォルネ",
                userPreferred: "Dalzollene",
                __typename: "CharacterName",
              },
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/character/large/b33382-5Jvz56mXsxl4.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/character/medium/b33382-5Jvz56mXsxl4.jpg",
                __typename: "CharacterImage",
              },
              description:
                "Dalzollene is a leader of Neon Nostrade's bodyguards and Kurapika's direct superior. His weapon is a katana inscribed with runes that increase its power when infused Nen. In the anime, he manages to pierce Uvogin by 5 millimeters with the katana. He appears to enjoy music and is dedicated to his job. He also was not hesitant to sacrifice three of Neon's bodyguards when she predicted Troupe activity at the Yorknew Underground Auction. He had developed his Ten so that he could defend himself from ten bullets. He is later killed by Phinks, as the Phantom Troupe infiltrate a Nostrade compound in order to rescue a captured Uvogin.   (Source: Wikipedia) ",
              __typename: "Character",
            },
          ],
          __typename: "CharacterConnection",
        },
        coverImage: {
          extraLarge:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11061-sIpBprNRfzCe.png",
          large:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx11061-sIpBprNRfzCe.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx11061-sIpBprNRfzCe.png",
          color: "#f1d65d",
          __typename: "MediaCoverImage",
        },
        bannerImage:
          "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11061-8WkkTZ6duKpq.jpg",
        trailer: {
          id: "d6kBeJjTGnY",
          site: "youtube",
          thumbnail: "https://i.ytimg.com/vi/d6kBeJjTGnY/hqdefault.jpg",
          __typename: "MediaTrailer",
        },
        __typename: "Media",
      },
    },
  },
};
