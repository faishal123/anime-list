import { render } from "@testing-library/react";
import { SingleMediaType } from "src/graphql/query/SingleAnime/interface";
import StarRating from "./StarRating";

const mockAnimeWithoutScore: SingleMediaType = {
  id: 16498,
  title: {
    english: "Attack on Titan",
    romaji: "Shingeki no Kyojin",
    native: "進撃の巨人",
  },
  isAdult: false,
  genres: ["Action", "Drama", "Fantasy", "Mystery"],
  popularity: 571469,
  description:
    "Several hundred years ago, humans were nearly exterminated by titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of titans.<br><br>\r\nFlash forward to the present and the city has not seen a titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a colossal titan that appears out of thin air. As the smaller titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single titan and take revenge for all of mankind.<br><br>\r\n(Source: MangaHelpers) ",
  episodes: 25,
  status: "FINISHED",
  format: "TV",
  chapters: null,
  type: "ANIME",
  meanScore: 85,
  averageScore: null,
  characters: {
    nodes: [
      {
        id: 45887,
        name: {
          first: "Sasha",
          middle: null,
          last: "Blouse",
          full: "Sasha Blouse",
          native: "サシャ・ブラウス",
          userPreferred: "Sasha Blouse",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b45887-QPtJH0KwqthW.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b45887-QPtJH0KwqthW.jpg",
        },
        description:
          "__Affiliations__: 104th Trainee Squad, Scouting Legion\n__Graduation Rank__: 9th\n\nA hunter from the mountain Daupa District, she joined in order to find tasty things to eat. Some time later, Sasha returns home to her village in the mountains and it's there she speaks in her normal dialect (which she was embarrassed to do during her military training). Sasha is lightning fast, with an uncanny intuition, but her eccentricity makes her unfit for group operations.\n\n~!She's also an expert with a bow and arrow, revealed when she used it to take down a 3-meter Titan.!~\n\n~!She is later shot by Gabi Braun, on a stowaway aircraft, and quickly passes away.!~\n\n*Note: Sasha Blouse is the official English translation by Kodansha.*",
      },
      {
        id: 46492,
        name: {
          first: "Hannes",
          middle: null,
          last: null,
          full: "Hannes",
          native: "ハンネス",
          userPreferred: "Hannes",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b46492-5kRaMLDCVD0B.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b46492-5kRaMLDCVD0B.jpg",
        },
        description:
          "A soldier who saves Eren and Mikasa during the prologue. He owes a debt to the Yeager family. \n~!He dies in season two by the Smiling Titan.!~",
      },
      {
        id: 71121,
        name: {
          first: "Hange",
          middle: null,
          last: "Zoe",
          full: "Hange Zoe",
          native: "ハンジ・ゾエ",
          userPreferred: "Hange Zoe",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b71121-7R7CnQd3lHgt.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b71121-7R7CnQd3lHgt.png",
        },
        description:
          ' __Height__: 170 cm (5\'7")\n__Affiliation__: Scouting Legion  \n\nScouting Legion\'s Squad Leader, Hange is very passionate and driven in pursuit of new knowledge. They can be seen as very hyperactive, often diving into projects without thought for personal safety (and frightening lots of subordinates in the process), instead of preoccupied with observing and documenting the subjects. Some misunderstand these acts and Hange is seen as eccentric and having more than a few screws loose. They also enjoy discussing this research, but as the lectures can be very long and detail-oriented, not many fellow soldiers find them interesting.\n\nHange is often excited by Titans and is always eager to experiment with them, coming off as extremely emotional regarding titans. For example, they cry at the amount of pain being caused to a Titan during experimentation.\n\n~!They die from the "Rumbling".!~',
      },
      {
        id: 45627,
        name: {
          first: "Levi",
          middle: null,
          last: "",
          full: "Levi",
          native: "リヴァイ",
          userPreferred: "Levi",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b45627-CR68RyZmddGG.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b45627-CR68RyZmddGG.png",
        },
        description:
          "__Height:__ 160 cm (5'3\") \n__Affiliations:__ Scouting Legion  \n\nKnown as humanity's strongest soldier. He is a clean-freak. While he is blunt and unapproachable, he also has a strong respect for structure and discipline. Rumor has it that he was originally involved in underground crime before he became a soldier. He often comes off as unfriendly, but he cares for his team deeply and has never undervalued human life. As the captain of his own squad Special Operations Squad, also known as Squad Levi, he is the scout regiment's most proficient soldier.\n\n~!Later, it is revealed that he is a descendant of the legendary Ackerman clan and is related to [Mikasa Ackerman](https://anilist.co/character/40881/Mikasa-Ackerman)\nand the nephew of [Kenny Ackerman](https://anilist.co/character/127443/Kenny-Ackerman).!~\n\n~!After torturing [Zeke](https://anilist.co/character/125661/Zeke), he was blown up by a thunder spear nailed to Zeke's body, making him disabled and unable to fight. At the end of the series, it is stated that he is permanently disabled and retired.!~\n\n_Facts:_\n1. Levi sleeps for only 2 to 3 hours in his chair since he suffers from insomnia\n2. Levi's favorite drink is black tea, he once wanted to open a tea shop\n3. Levi takes a 3-minute \"Combat-Style\" shower\n4. Levi's favorite food is rice",
      },
      {
        id: 46494,
        name: {
          first: "Armin",
          middle: null,
          last: "Arlert",
          full: "Armin Arlert",
          native: "アルミン・アルレルト",
          userPreferred: "Armin Arlert",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b46494-g7xYYuBtYPnO.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b46494-g7xYYuBtYPnO.png",
        },
        description:
          "__Height__: 163 cm (5'4\")\n__Position__: 104th Trainees Squad, Scouting Legion\n__Graduation Rank__: Outside the top 10\n\nEren's best friend, he is physically and emotionally weak. Even though lacking in actual combat, Armin is a genius on theoretical courses and can make plans even under extreme pressure. Even so, Armin kept on thinking that he is weak. He himself does not notice the things he does for Eren and Mikasa, and believes himself to be completely incompetent and hates himself for having to rely on Eren and Mikasa.\n~! He later inherits the Colossal Titan by eating [Bertolt Hoover](https://anilist.co/character/46488/) !~\n\n(Source: Wikipedia)\n\nNote: Armin Arlert is the official English translation by Kodansha.",
      },
      {
        id: 46498,
        name: {
          first: "Jean",
          middle: null,
          last: "Kirstein",
          full: "Jean Kirstein",
          native: "ジャン・キルシュタイン",
          userPreferred: "Jean Kirstein",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b46498-ritqAj9FW6jX.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b46498-ritqAj9FW6jX.png",
        },
        description:
          "__Height__: 175 cm (5'8\"), 190 cm (6'2\")\n__Affiliations__: Scouting Legion\n__Graduation Rank__: 6th\n\nRanked 6th of the trainee class. Extremely pessimistic about the War with the Titans. He ends up leading the people on the supply mission for gas. From the Trost District. Seems like he's amazed by Mikasa's beauty, and thus hating Eren for always being with her. \n\n~!He has been turned into a titan through the gas released by the mysterious entity which is the source of titan powers, just like Zeke's spinal fluid, in chapter 138.!~ ~!He turns back into a human in the final chapter.!~",
      },
      {
        id: 46496,
        name: {
          first: "Erwin",
          middle: null,
          last: "Smith",
          full: "Erwin Smith",
          native: "エルヴィン・スミス",
          userPreferred: "Erwin Smith",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b46496-Mu86MENd5wNB.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b46496-Mu86MENd5wNB.png",
        },
        description:
          "**Height:** 188 cm\n\nHe is the 13th commander of the Survey Corps. Discerning, intelligent, and widely respected, Erwin is an able commander. While he cares deeply for his men, he does not hesitate to sacrifice them for the good and prosperity of mankind, and his men have proven more than willing to stake their lives at his order. Erwin developed the Long-Distance Enemy Scouting Formation,\n~!Due to uncertainty about his future, he later named Hange Zoë as his successor.!~\n  *Note: Erwin is the official English translation by Kodansha.*",
      },
      {
        id: 46486,
        name: {
          first: "Connie",
          middle: null,
          last: "Springer",
          full: "Connie Springer",
          native: "コニー・スプリンガー",
          userPreferred: "Connie Springer",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/n46486-izhPjzut6WCZ.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/n46486-izhPjzut6WCZ.png",
        },
        description:
          "__Height__: 158 cm (5'2\")  \n__Affiliations__: 104th Trainees Squad, Scouting Legion  \n__Graduation Rank__: 8th  \n\nUpbeat and naive, Connie is also extremely dumb for not being able to differentiate left and right. Aims to apply to the scouting legion because he was motivated by Eren. From Ragako District.  ~!Connie was transformed into a mindless titan in chapter 138!~\n~!He turns back into a normal human in the final chapter!~\n(Source: Wikipedia)",
      },
      {
        id: 71479,
        name: {
          first: "Ymir",
          middle: null,
          last: null,
          full: "Ymir",
          native: "ユミル",
          userPreferred: "Ymir",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b71479-huCD908XIdqv.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b71479-huCD908XIdqv.png",
        },
        description:
          '__Height:__ 172 cm (5\'7")\n__Affiliations:__ 104th Trainees Squad, Scouting Legion\n\nMember of the Scouting Legion. She seems selfish, cynical, bossy, sly, uncooperative, exploitative, and confrontational, but she can apparently be kind, especially to Krista.\n~!60 years prior to the story, Ymir was a nameless Eldian girl who lived in the streets of Marley as a beggar with no home. Eventually, she was found by a man who gave her the name "Ymir," after the ancestor, Ymir Fritz. He brought her into a group dedicated to the worship of Ymir. She was acclaimed by many Eldians in the group, and Ymir chose to abide by her new role in order to bring happiness to those around her despite knowing that she did not descend from royalty.!~ ~!When the group was eventually discovered by the Marleyan government, they were brought to Paradis island where they were all turned into pure titans.!~ ~!Ymir roamed the land for 60 years as a mindless titan before coming into contact with Reiner, Bertolt, Annie, and [Marcel Galliard, ](https://anilist.co/character/127683/Marcel-Galliard) the possessor of the Jaw Titan. Marcel sacrifices himself to save Reiner and is eaten by Ymir, who eventually turns back into human form.!~ ~!After keeping her secret for years within the walls, she eventually reveals herself to save Historia, along with the others, at Utgard Castle.!~ ~!She is later willingly taken back to Marley where she passes down the Jaw Titan to Marcel\'s brother, [Porco Galliard. ](https://anilist.co/character/125662/Porco-Galliard)!~\n\n(Source: Attack on Titan Wiki)',
      },
      {
        id: 84307,
        name: {
          first: "Hugo",
          middle: null,
          last: null,
          full: "Hugo",
          native: "フーゴ",
          userPreferred: "Hugo",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b84307-faKVhlw386q7.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b84307-faKVhlw386q7.jpg",
        },
        description: null,
      },
      {
        id: 40882,
        name: {
          first: "Eren",
          middle: null,
          last: "Yeager",
          full: "Eren Yeager",
          native: "エレン・イェーガー",
          userPreferred: "Eren Yeager",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b40882-dsj7IP943WFF.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b40882-dsj7IP943WFF.jpg",
        },
        description:
          "__Height__: 170 cm (5'7\") - 183 cm (6'0\")\n\nEren is Shingeki no Kyojin's protagonist. His adoptive sister, Mikasa, notes on numerous occasions that he acts on impulse without thinking things through, and she often pulls/carries/throws him when he starts fighting with others to protect him from himself. Along with Mikasa, he tends to spend his free time with their mutual friend, Armin.  His father is a doctor (who is well respected by Hannes and potentially many more) whilst his mother is a housewife.   ~!When Eren was a child, he saved Mikasa from being sold off when he visited her home with his father. Three men—killers of her parents—were in her house, and he killed two of them—one by slitting his throat and the other by charging at with a quickly assembled spear. Mikasa herself killed the third man after Eren urged her to fight whilst the man strangled Eren. After this, he gave Mikasa his scarf and Eren's father adopted Mikasa into their family.  Later, when the colossal titan broke through Wall Maria the debris from this attack scattered and hurtled towards his home. He could only watch on as his mother—trapped under the rubble of their house—was eaten by a titan. This event lit the fire of revenge within Eren that he would kill every giant and not live a life cowering in fear.  Sometime after this—before the time skip that jumped a few years ahead, to when he became a soldier—his father injected him with something. It's unknown what at this time but it turns out, because of the injection, Eren can utilize the ability to transform into a titan himself (which explains how his limbs were able to regenerate) with side effects of high fever and massive stamina drain.!~ ~!It is later revealed that Eren has both the Attack Titan and the Founding Titan.!~  ~!Eren later inherits the Warhammer Titan as well.!~ In manga chapter 138, ~!Eren is killed by Mikasa.!~",
      },
      {
        id: 71453,
        name: {
          first: "Nick",
          middle: null,
          last: null,
          full: "Nick",
          native: "ニック",
          userPreferred: "Nick",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/n71453-IxgKWV5eR1pw.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/n71453-IxgKWV5eR1pw.jpg",
        },
        description:
          'Pastor Nick is a member of a religion that worships the Walls as holy.  He claims that he lost his family as a result of addiction to Vine.   As a religious leader, Pastor Nick used his influence to oppose any modification of the walls, be it permanently sealing the gates or even mounting cannons on the top. Though he claimed it was blasphemy for humans to "maim" the wall,  ~!the real reason was to reduce the risk of workers discovering the Titans within during renovations.!~ (Source: Shingeki no Kyojin Wikia)  Note: Minister Nick is the official English translation by Kodansha.',
      },
      {
        id: 84315,
        name: {
          first: "Samuel",
          middle: null,
          last: "Linke-Jackson ",
          full: "Samuel Linke-Jackson ",
          native: "サムエル・リンケ-ジャクソン",
          userPreferred: "Samuel Linke-Jackson ",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b84315-MwzNp8eSjg8v.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b84315-MwzNp8eSjg8v.png",
        },
        description:
          "Samuel is a member of the 104th Trainees Squad.  He appears in Ch. 3. When the Colossal Titan appears outside Trost District, the burst of steam from its body knocks a number of trainees off the Wall. While most are able to switch to their Three Dimensional Maneuver Gear and anchor themselves to the Wall, Samuel is struck in the head by a piece of falling rock and stunned. Sasha saves him from falling to his death by firing one of her grappling hooks into his leg. Eren tells Sasha to take Samuel somewhere safe, then instructs the other trainees to attack the Colossal Titan.\n\n~!He is killed by Connie after being shot three times in the head.!~",
      },
      {
        id: 62475,
        name: {
          first: "Carla",
          middle: null,
          last: "Yeager",
          full: "Carla Yeager",
          native: "カルラ・イェーガー",
          userPreferred: "Carla Yeager",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/n62475-CExspVnLfweu.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/n62475-CExspVnLfweu.png",
        },
        description:
          "Eren's mother.   ~!She's eaten alive in the second chapter.!~ Note: Carla Yeager is the official English translation by Kodansha.",
      },
      {
        id: 62485,
        name: {
          first: "Dot",
          middle: null,
          last: "Pixis",
          full: "Dot Pixis",
          native: "ドット・ピクシス",
          userPreferred: "Dot Pixis",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b62485-I0U5Cat3z65K.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b62485-I0U5Cat3z65K.png",
        },
        description:
          "The highest-ranked Administrator of the Southern Region. Head of the Garrison's Southern Territories, Pixis is a cunning leader with astute insights. However, he is also an alcoholic who is constantly watched over by his aide, Anka who constantly scolds him for sleeping and drinking during critical moments.\n\n~!He sides with Armin and agrees to use Eren's Titan ability to reseal the hole in Trost District, saving their lives as they are about to be executed by Kitz and the Garrison.!~\nIn manga chapter 119,\n~!He is turned into a mindless titan by Zeke after drinking the Marleyan wine spiked with Zeke's spinal fluid. As a titan, he is put out of his misery by Armin and killed with a thunder spear.!~",
      },
      {
        id: 84325,
        name: {
          first: "Kitz",
          middle: null,
          last: "Weilman",
          full: "Kitz Weilman",
          native: "キッツ・ヴェールマン",
          userPreferred: "Kitz Weilman",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b84325-RGWFyLMV6JZV.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b84325-RGWFyLMV6JZV.jpg",
        },
        description: null,
      },
      {
        id: 62501,
        name: {
          first: "Petra",
          middle: null,
          last: "Ral",
          full: "Petra Ral",
          native: "ペトラ・ラル",
          userPreferred: "Petra Ral",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/n62501-CfTtAAgs64nE.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/n62501-CfTtAAgs64nE.jpg",
        },
        description:
          "__Age:__ Unknown\n__Height:__ 158 cm (5'2\")\n__Affiliations:__ Scouting Legion\n__Stats:__ 10 Solo Kills, 48 Kills in a team\n\nPetra Ral is a hand-picked soldier of the Scouting Legion by Levi Ackerman placed in the Special Operations Squad.\n\n~!Died trying to fight the Female Type Titan.!~",
      },
      {
        id: 40881,
        name: {
          first: "Mikasa",
          middle: null,
          last: "Ackerman",
          full: "Mikasa Ackerman",
          native: "ミカサ・アッカーマン",
          userPreferred: "Mikasa Ackerman",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b40881-F3gr1PkreDvj.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b40881-F3gr1PkreDvj.png",
        },
        description:
          "__Height:__ 170 cm (5'7\")\n__Position:__ 104th Training Corps, Scouting Legion\n__Graduation Rank:__ 1st\n\nMikasa is Eren's adoptive sister and mutual childhood friend of Armin. Mikasa shares an unbreakable bond with Eren following events in their past and rushes to protect him whenever he is in danger. Mikasa possesses the impressive fighting skill and strength even as a child.\n\nAs a teen, Mikasa is considered a genius among all the army trainees and is incredibly skilled at combat and agility. She constantly worries for Eren's well-being and lives to protect him.\n\n~!When she was young, her parents were killed and she was kidnapped. When Eren found out where she was being held, he outwitted and killed two of the kidnappers, but a third overpowered him and tried to strangle him. Eren desperately urged Mikasa to fight and win, and when she realized that the world could be heartless and merciless, she managed to kill the kidnapper from behind. Later, Eren gave her his scarf, which she constantly wears.!~\n\n",
      },
      {
        id: 46490,
        name: {
          first: "Annie",
          middle: null,
          last: "Leonhart",
          full: "Annie Leonhart",
          native: "アニ・レオンハート",
          userPreferred: "Annie Leonhart",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b46490-tan274Ifc1Jf.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b46490-tan274Ifc1Jf.jpg",
        },
        description:
          "__Height__: 153 cm (5\")  \n__Affiliations__: 104th Trainees Squad, Military Police  \n__Graduation Rank__: 4th\n\nA stoic girl, her father trained her in hand to hand combat. She's a solitary type, and solidarity doesn't come to her easily.   ~!She is revealed to be the female titan who killed most of the Scouting Legion members and also killed the 2 titans Hanji was researching. She was also aiming to kidnap Eren and bring him 'somewhere'. Later on Mikasa managed to stop her from running away, and when people tried to bring her out of her titan form, reminded of her father, she wrapped herself inside a hard crystal which made it unable to get any information from her.!~ Note: Annie Leonhart is the official English translation by Kodansha.",
      },
      {
        id: 84313,
        name: {
          first: "Armin no Ojiisan",
          middle: null,
          last: "",
          full: "Armin no Ojiisan",
          native: "アルミンのお祖父さん",
          userPreferred: "Armin no Ojiisan",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b84313-kYfb2g4OR7je.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b84313-kYfb2g4OR7je.jpg",
        },
        description:
          "The paternal grandfather of Armin Arlert. Before the fall of Wall Maria, He possessed a book containing illegal information about the world beyond the Walls. He gave this book to his grandson, Armin Arlert, who showed it to his best friend Eren, kindling his desire to see the outside world",
      },
      {
        id: 46484,
        name: {
          first: "Reiner",
          middle: null,
          last: "Braun",
          full: "Reiner Braun",
          native: "ライナー・ブラウン",
          userPreferred: "Reiner Braun",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b46484-P6A2GjNQn49F.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b46484-P6A2GjNQn49F.png",
        },
        description:
          "__Height__: 185 cm (6'1\")\n\nStrong willed, with a solid constitution. Most adept at gaining the trust of his comrades. Ranked no 2 of the trainee class. Helps Eren out during his training days.   ~!Later in the story he is revealed as the Armored Titan.!~ \n*Note: Reiner Braun is the official English translation by Kodansha.*",
      },
      {
        id: 62477,
        name: {
          first: "Grisha",
          middle: null,
          last: "Yeager",
          full: "Grisha Yeager",
          native: "グリシャ・イェーガー",
          userPreferred: "Grisha Yeager",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b62477-3AHBGul9bXK8.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b62477-3AHBGul9bXK8.jpg",
        },
        description:
          'Father of Eren. He is a renowned doctor who was well respected in the District of Shiganshina after he saved the village from a mysterious viral epidemic by developing vaccines. He also provides a medical house call service to the people of Shiganshina and to various towns in addition to having a network of contacts within the Corps of the Shiganshina District.  <br>\n ~!In the basement of the Yeager family house he hides a secret which he refers to as the "truth" and upon meeting Eren after the fall of the Wall Maria in the year 845, injects him with a series of chemicals and amnesiacs and entrusts him with the key to the "truth", before disappearing.!~  ~!Inherited the Founding Titan from Frieda Reiss by turning into a Titan and eating her. He then kills every member of the Reiss family except Rod Reiss, who escapes.!~  ~!Grisha was an Eldian restorationist living in a Marleyan internment zone with his first wife of royal blood, [Dina Fritz. ](https://anilist.co/character/133215/Dina-Fritz) He and his wife Dina had a child named Zeke, who Grisha forces into the warrior candidate program to attempt to turn into a titan, to fight alongside the Eldian restorationists. Grisha was shown as an abusive father towards his son, prompting Zeke to betray his parents and the restorationists, revealing them to the Marleyan government. Once all the other Eldian restorationists, including Dina, are turned into Titans on the island of Paradis, Grisha alone is saved by the Owl.!~ \n~!Inherited the Attack Titan from The Owl, [Eren Krueger. ](https://anilist.co/character/131440/Eren-Krueger) He uses this power to escape into Wall Maria where he starts a new life.!~ ~!After the fall of Wall Maria, he entrusts his son Eren with the key to the drawer of his secrets that include information about the outside world. Grisha then injects Eren with titan serum and allows himself to get eaten so he can pass down his Titans and memories to his son.!~\n\n~!It is later revealed that Eren, while in the paths, directed Grisha to kill the Reiss family.!~\n\nNote: Grisha Yeager is the official English translation by Kodansha.',
      },
      {
        id: 84329,
        name: {
          first: "Gustav",
          middle: null,
          last: null,
          full: "Gustav",
          native: "グスタフ",
          userPreferred: "Gustav",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b84329-vLIxfAIYGPug.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b84329-vLIxfAIYGPug.png",
        },
        description: null,
      },
      {
        id: 84305,
        name: {
          first: "Keith",
          middle: null,
          last: "Shadis",
          full: "Keith Shadis",
          native: "キース・シャーディス",
          userPreferred: "Keith Shadis",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/n84305-15nngV5nTUp6.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/n84305-15nngV5nTUp6.png",
        },
        description:
          "Keith Shadis was the head instructor of the 104th Trainees Squad. He seemed to be a friend or have some sort of relationship with Dr. Grisha, as he knew Eren is the son of the doctor and praised Eren for his effort. \n\n~!He sacrifices himself by blowing up the Marleyan ship to prevent the Yeagerists from catching the allies!~\n",
      },
      {
        id: 84327,
        name: {
          first: "Bart",
          middle: null,
          last: null,
          full: "Bart",
          native: "バルト",
          userPreferred: "Bart",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b84327-Wg2P1FSDecGc.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b84327-Wg2P1FSDecGc.jpg",
        },
        description:
          "Original anime character. He is a Noble in the District of Marquis and friend of Pixis, who challenges him to leisurely games of chess. In the anime, as Pixis makes to leave upon learning of the invasion of Trost in the year 850, he tries to prevent him from going to the battlefield and instead have Pixis and his men stay and protect him and his property, viewing the lowly commoners being attacked as trash.  \n\n(Source: Wikipedia)",
      },
    ],
  },
  coverImage: {
    extraLarge:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg",
    large:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg",
    medium:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx16498-C6FPmWm59CyP.jpg",
    color: "#e4a15d",
  },
  bannerImage:
    "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8jpFCOcDmneX.jpg",
  trailer: {
    id: "KKzmOh4SuBc",
    site: "youtube",
    thumbnail: "https://i.ytimg.com/vi/KKzmOh4SuBc/hqdefault.jpg",
  },
};

const mockAnime: SingleMediaType = {
  id: 16498,
  title: {
    english: "Attack on Titan",
    romaji: "Shingeki no Kyojin",
    native: "進撃の巨人",
  },
  isAdult: false,
  genres: ["Action", "Drama", "Fantasy", "Mystery"],
  popularity: 571469,
  description:
    "Several hundred years ago, humans were nearly exterminated by titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of titans.<br><br>\r\nFlash forward to the present and the city has not seen a titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a colossal titan that appears out of thin air. As the smaller titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single titan and take revenge for all of mankind.<br><br>\r\n(Source: MangaHelpers) ",
  episodes: 25,
  status: "FINISHED",
  format: "TV",
  chapters: null,
  type: "ANIME",
  meanScore: 85,
  averageScore: 85,
  characters: {
    nodes: [
      {
        id: 45887,
        name: {
          first: "Sasha",
          middle: null,
          last: "Blouse",
          full: "Sasha Blouse",
          native: "サシャ・ブラウス",
          userPreferred: "Sasha Blouse",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b45887-QPtJH0KwqthW.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b45887-QPtJH0KwqthW.jpg",
        },
        description:
          "__Affiliations__: 104th Trainee Squad, Scouting Legion\n__Graduation Rank__: 9th\n\nA hunter from the mountain Daupa District, she joined in order to find tasty things to eat. Some time later, Sasha returns home to her village in the mountains and it's there she speaks in her normal dialect (which she was embarrassed to do during her military training). Sasha is lightning fast, with an uncanny intuition, but her eccentricity makes her unfit for group operations.\n\n~!She's also an expert with a bow and arrow, revealed when she used it to take down a 3-meter Titan.!~\n\n~!She is later shot by Gabi Braun, on a stowaway aircraft, and quickly passes away.!~\n\n*Note: Sasha Blouse is the official English translation by Kodansha.*",
      },
      {
        id: 46492,
        name: {
          first: "Hannes",
          middle: null,
          last: null,
          full: "Hannes",
          native: "ハンネス",
          userPreferred: "Hannes",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b46492-5kRaMLDCVD0B.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b46492-5kRaMLDCVD0B.jpg",
        },
        description:
          "A soldier who saves Eren and Mikasa during the prologue. He owes a debt to the Yeager family. \n~!He dies in season two by the Smiling Titan.!~",
      },
      {
        id: 71121,
        name: {
          first: "Hange",
          middle: null,
          last: "Zoe",
          full: "Hange Zoe",
          native: "ハンジ・ゾエ",
          userPreferred: "Hange Zoe",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b71121-7R7CnQd3lHgt.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b71121-7R7CnQd3lHgt.png",
        },
        description:
          ' __Height__: 170 cm (5\'7")\n__Affiliation__: Scouting Legion  \n\nScouting Legion\'s Squad Leader, Hange is very passionate and driven in pursuit of new knowledge. They can be seen as very hyperactive, often diving into projects without thought for personal safety (and frightening lots of subordinates in the process), instead of preoccupied with observing and documenting the subjects. Some misunderstand these acts and Hange is seen as eccentric and having more than a few screws loose. They also enjoy discussing this research, but as the lectures can be very long and detail-oriented, not many fellow soldiers find them interesting.\n\nHange is often excited by Titans and is always eager to experiment with them, coming off as extremely emotional regarding titans. For example, they cry at the amount of pain being caused to a Titan during experimentation.\n\n~!They die from the "Rumbling".!~',
      },
      {
        id: 45627,
        name: {
          first: "Levi",
          middle: null,
          last: "",
          full: "Levi",
          native: "リヴァイ",
          userPreferred: "Levi",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b45627-CR68RyZmddGG.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b45627-CR68RyZmddGG.png",
        },
        description:
          "__Height:__ 160 cm (5'3\") \n__Affiliations:__ Scouting Legion  \n\nKnown as humanity's strongest soldier. He is a clean-freak. While he is blunt and unapproachable, he also has a strong respect for structure and discipline. Rumor has it that he was originally involved in underground crime before he became a soldier. He often comes off as unfriendly, but he cares for his team deeply and has never undervalued human life. As the captain of his own squad Special Operations Squad, also known as Squad Levi, he is the scout regiment's most proficient soldier.\n\n~!Later, it is revealed that he is a descendant of the legendary Ackerman clan and is related to [Mikasa Ackerman](https://anilist.co/character/40881/Mikasa-Ackerman)\nand the nephew of [Kenny Ackerman](https://anilist.co/character/127443/Kenny-Ackerman).!~\n\n~!After torturing [Zeke](https://anilist.co/character/125661/Zeke), he was blown up by a thunder spear nailed to Zeke's body, making him disabled and unable to fight. At the end of the series, it is stated that he is permanently disabled and retired.!~\n\n_Facts:_\n1. Levi sleeps for only 2 to 3 hours in his chair since he suffers from insomnia\n2. Levi's favorite drink is black tea, he once wanted to open a tea shop\n3. Levi takes a 3-minute \"Combat-Style\" shower\n4. Levi's favorite food is rice",
      },
      {
        id: 46494,
        name: {
          first: "Armin",
          middle: null,
          last: "Arlert",
          full: "Armin Arlert",
          native: "アルミン・アルレルト",
          userPreferred: "Armin Arlert",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b46494-g7xYYuBtYPnO.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b46494-g7xYYuBtYPnO.png",
        },
        description:
          "__Height__: 163 cm (5'4\")\n__Position__: 104th Trainees Squad, Scouting Legion\n__Graduation Rank__: Outside the top 10\n\nEren's best friend, he is physically and emotionally weak. Even though lacking in actual combat, Armin is a genius on theoretical courses and can make plans even under extreme pressure. Even so, Armin kept on thinking that he is weak. He himself does not notice the things he does for Eren and Mikasa, and believes himself to be completely incompetent and hates himself for having to rely on Eren and Mikasa.\n~! He later inherits the Colossal Titan by eating [Bertolt Hoover](https://anilist.co/character/46488/) !~\n\n(Source: Wikipedia)\n\nNote: Armin Arlert is the official English translation by Kodansha.",
      },
      {
        id: 46498,
        name: {
          first: "Jean",
          middle: null,
          last: "Kirstein",
          full: "Jean Kirstein",
          native: "ジャン・キルシュタイン",
          userPreferred: "Jean Kirstein",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b46498-ritqAj9FW6jX.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b46498-ritqAj9FW6jX.png",
        },
        description:
          "__Height__: 175 cm (5'8\"), 190 cm (6'2\")\n__Affiliations__: Scouting Legion\n__Graduation Rank__: 6th\n\nRanked 6th of the trainee class. Extremely pessimistic about the War with the Titans. He ends up leading the people on the supply mission for gas. From the Trost District. Seems like he's amazed by Mikasa's beauty, and thus hating Eren for always being with her. \n\n~!He has been turned into a titan through the gas released by the mysterious entity which is the source of titan powers, just like Zeke's spinal fluid, in chapter 138.!~ ~!He turns back into a human in the final chapter.!~",
      },
      {
        id: 46496,
        name: {
          first: "Erwin",
          middle: null,
          last: "Smith",
          full: "Erwin Smith",
          native: "エルヴィン・スミス",
          userPreferred: "Erwin Smith",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b46496-Mu86MENd5wNB.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b46496-Mu86MENd5wNB.png",
        },
        description:
          "**Height:** 188 cm\n\nHe is the 13th commander of the Survey Corps. Discerning, intelligent, and widely respected, Erwin is an able commander. While he cares deeply for his men, he does not hesitate to sacrifice them for the good and prosperity of mankind, and his men have proven more than willing to stake their lives at his order. Erwin developed the Long-Distance Enemy Scouting Formation,\n~!Due to uncertainty about his future, he later named Hange Zoë as his successor.!~\n  *Note: Erwin is the official English translation by Kodansha.*",
      },
      {
        id: 46486,
        name: {
          first: "Connie",
          middle: null,
          last: "Springer",
          full: "Connie Springer",
          native: "コニー・スプリンガー",
          userPreferred: "Connie Springer",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/n46486-izhPjzut6WCZ.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/n46486-izhPjzut6WCZ.png",
        },
        description:
          "__Height__: 158 cm (5'2\")  \n__Affiliations__: 104th Trainees Squad, Scouting Legion  \n__Graduation Rank__: 8th  \n\nUpbeat and naive, Connie is also extremely dumb for not being able to differentiate left and right. Aims to apply to the scouting legion because he was motivated by Eren. From Ragako District.  ~!Connie was transformed into a mindless titan in chapter 138!~\n~!He turns back into a normal human in the final chapter!~\n(Source: Wikipedia)",
      },
      {
        id: 71479,
        name: {
          first: "Ymir",
          middle: null,
          last: null,
          full: "Ymir",
          native: "ユミル",
          userPreferred: "Ymir",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b71479-huCD908XIdqv.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b71479-huCD908XIdqv.png",
        },
        description:
          '__Height:__ 172 cm (5\'7")\n__Affiliations:__ 104th Trainees Squad, Scouting Legion\n\nMember of the Scouting Legion. She seems selfish, cynical, bossy, sly, uncooperative, exploitative, and confrontational, but she can apparently be kind, especially to Krista.\n~!60 years prior to the story, Ymir was a nameless Eldian girl who lived in the streets of Marley as a beggar with no home. Eventually, she was found by a man who gave her the name "Ymir," after the ancestor, Ymir Fritz. He brought her into a group dedicated to the worship of Ymir. She was acclaimed by many Eldians in the group, and Ymir chose to abide by her new role in order to bring happiness to those around her despite knowing that she did not descend from royalty.!~ ~!When the group was eventually discovered by the Marleyan government, they were brought to Paradis island where they were all turned into pure titans.!~ ~!Ymir roamed the land for 60 years as a mindless titan before coming into contact with Reiner, Bertolt, Annie, and [Marcel Galliard, ](https://anilist.co/character/127683/Marcel-Galliard) the possessor of the Jaw Titan. Marcel sacrifices himself to save Reiner and is eaten by Ymir, who eventually turns back into human form.!~ ~!After keeping her secret for years within the walls, she eventually reveals herself to save Historia, along with the others, at Utgard Castle.!~ ~!She is later willingly taken back to Marley where she passes down the Jaw Titan to Marcel\'s brother, [Porco Galliard. ](https://anilist.co/character/125662/Porco-Galliard)!~\n\n(Source: Attack on Titan Wiki)',
      },
      {
        id: 84307,
        name: {
          first: "Hugo",
          middle: null,
          last: null,
          full: "Hugo",
          native: "フーゴ",
          userPreferred: "Hugo",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b84307-faKVhlw386q7.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b84307-faKVhlw386q7.jpg",
        },
        description: null,
      },
      {
        id: 40882,
        name: {
          first: "Eren",
          middle: null,
          last: "Yeager",
          full: "Eren Yeager",
          native: "エレン・イェーガー",
          userPreferred: "Eren Yeager",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b40882-dsj7IP943WFF.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b40882-dsj7IP943WFF.jpg",
        },
        description:
          "__Height__: 170 cm (5'7\") - 183 cm (6'0\")\n\nEren is Shingeki no Kyojin's protagonist. His adoptive sister, Mikasa, notes on numerous occasions that he acts on impulse without thinking things through, and she often pulls/carries/throws him when he starts fighting with others to protect him from himself. Along with Mikasa, he tends to spend his free time with their mutual friend, Armin.  His father is a doctor (who is well respected by Hannes and potentially many more) whilst his mother is a housewife.   ~!When Eren was a child, he saved Mikasa from being sold off when he visited her home with his father. Three men—killers of her parents—were in her house, and he killed two of them—one by slitting his throat and the other by charging at with a quickly assembled spear. Mikasa herself killed the third man after Eren urged her to fight whilst the man strangled Eren. After this, he gave Mikasa his scarf and Eren's father adopted Mikasa into their family.  Later, when the colossal titan broke through Wall Maria the debris from this attack scattered and hurtled towards his home. He could only watch on as his mother—trapped under the rubble of their house—was eaten by a titan. This event lit the fire of revenge within Eren that he would kill every giant and not live a life cowering in fear.  Sometime after this—before the time skip that jumped a few years ahead, to when he became a soldier—his father injected him with something. It's unknown what at this time but it turns out, because of the injection, Eren can utilize the ability to transform into a titan himself (which explains how his limbs were able to regenerate) with side effects of high fever and massive stamina drain.!~ ~!It is later revealed that Eren has both the Attack Titan and the Founding Titan.!~  ~!Eren later inherits the Warhammer Titan as well.!~ In manga chapter 138, ~!Eren is killed by Mikasa.!~",
      },
      {
        id: 71453,
        name: {
          first: "Nick",
          middle: null,
          last: null,
          full: "Nick",
          native: "ニック",
          userPreferred: "Nick",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/n71453-IxgKWV5eR1pw.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/n71453-IxgKWV5eR1pw.jpg",
        },
        description:
          'Pastor Nick is a member of a religion that worships the Walls as holy.  He claims that he lost his family as a result of addiction to Vine.   As a religious leader, Pastor Nick used his influence to oppose any modification of the walls, be it permanently sealing the gates or even mounting cannons on the top. Though he claimed it was blasphemy for humans to "maim" the wall,  ~!the real reason was to reduce the risk of workers discovering the Titans within during renovations.!~ (Source: Shingeki no Kyojin Wikia)  Note: Minister Nick is the official English translation by Kodansha.',
      },
      {
        id: 84315,
        name: {
          first: "Samuel",
          middle: null,
          last: "Linke-Jackson ",
          full: "Samuel Linke-Jackson ",
          native: "サムエル・リンケ-ジャクソン",
          userPreferred: "Samuel Linke-Jackson ",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b84315-MwzNp8eSjg8v.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b84315-MwzNp8eSjg8v.png",
        },
        description:
          "Samuel is a member of the 104th Trainees Squad.  He appears in Ch. 3. When the Colossal Titan appears outside Trost District, the burst of steam from its body knocks a number of trainees off the Wall. While most are able to switch to their Three Dimensional Maneuver Gear and anchor themselves to the Wall, Samuel is struck in the head by a piece of falling rock and stunned. Sasha saves him from falling to his death by firing one of her grappling hooks into his leg. Eren tells Sasha to take Samuel somewhere safe, then instructs the other trainees to attack the Colossal Titan.\n\n~!He is killed by Connie after being shot three times in the head.!~",
      },
      {
        id: 62475,
        name: {
          first: "Carla",
          middle: null,
          last: "Yeager",
          full: "Carla Yeager",
          native: "カルラ・イェーガー",
          userPreferred: "Carla Yeager",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/n62475-CExspVnLfweu.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/n62475-CExspVnLfweu.png",
        },
        description:
          "Eren's mother.   ~!She's eaten alive in the second chapter.!~ Note: Carla Yeager is the official English translation by Kodansha.",
      },
      {
        id: 62485,
        name: {
          first: "Dot",
          middle: null,
          last: "Pixis",
          full: "Dot Pixis",
          native: "ドット・ピクシス",
          userPreferred: "Dot Pixis",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b62485-I0U5Cat3z65K.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b62485-I0U5Cat3z65K.png",
        },
        description:
          "The highest-ranked Administrator of the Southern Region. Head of the Garrison's Southern Territories, Pixis is a cunning leader with astute insights. However, he is also an alcoholic who is constantly watched over by his aide, Anka who constantly scolds him for sleeping and drinking during critical moments.\n\n~!He sides with Armin and agrees to use Eren's Titan ability to reseal the hole in Trost District, saving their lives as they are about to be executed by Kitz and the Garrison.!~\nIn manga chapter 119,\n~!He is turned into a mindless titan by Zeke after drinking the Marleyan wine spiked with Zeke's spinal fluid. As a titan, he is put out of his misery by Armin and killed with a thunder spear.!~",
      },
      {
        id: 84325,
        name: {
          first: "Kitz",
          middle: null,
          last: "Weilman",
          full: "Kitz Weilman",
          native: "キッツ・ヴェールマン",
          userPreferred: "Kitz Weilman",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b84325-RGWFyLMV6JZV.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b84325-RGWFyLMV6JZV.jpg",
        },
        description: null,
      },
      {
        id: 62501,
        name: {
          first: "Petra",
          middle: null,
          last: "Ral",
          full: "Petra Ral",
          native: "ペトラ・ラル",
          userPreferred: "Petra Ral",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/n62501-CfTtAAgs64nE.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/n62501-CfTtAAgs64nE.jpg",
        },
        description:
          "__Age:__ Unknown\n__Height:__ 158 cm (5'2\")\n__Affiliations:__ Scouting Legion\n__Stats:__ 10 Solo Kills, 48 Kills in a team\n\nPetra Ral is a hand-picked soldier of the Scouting Legion by Levi Ackerman placed in the Special Operations Squad.\n\n~!Died trying to fight the Female Type Titan.!~",
      },
      {
        id: 40881,
        name: {
          first: "Mikasa",
          middle: null,
          last: "Ackerman",
          full: "Mikasa Ackerman",
          native: "ミカサ・アッカーマン",
          userPreferred: "Mikasa Ackerman",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b40881-F3gr1PkreDvj.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b40881-F3gr1PkreDvj.png",
        },
        description:
          "__Height:__ 170 cm (5'7\")\n__Position:__ 104th Training Corps, Scouting Legion\n__Graduation Rank:__ 1st\n\nMikasa is Eren's adoptive sister and mutual childhood friend of Armin. Mikasa shares an unbreakable bond with Eren following events in their past and rushes to protect him whenever he is in danger. Mikasa possesses the impressive fighting skill and strength even as a child.\n\nAs a teen, Mikasa is considered a genius among all the army trainees and is incredibly skilled at combat and agility. She constantly worries for Eren's well-being and lives to protect him.\n\n~!When she was young, her parents were killed and she was kidnapped. When Eren found out where she was being held, he outwitted and killed two of the kidnappers, but a third overpowered him and tried to strangle him. Eren desperately urged Mikasa to fight and win, and when she realized that the world could be heartless and merciless, she managed to kill the kidnapper from behind. Later, Eren gave her his scarf, which she constantly wears.!~\n\n",
      },
      {
        id: 46490,
        name: {
          first: "Annie",
          middle: null,
          last: "Leonhart",
          full: "Annie Leonhart",
          native: "アニ・レオンハート",
          userPreferred: "Annie Leonhart",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b46490-tan274Ifc1Jf.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b46490-tan274Ifc1Jf.jpg",
        },
        description:
          "__Height__: 153 cm (5\")  \n__Affiliations__: 104th Trainees Squad, Military Police  \n__Graduation Rank__: 4th\n\nA stoic girl, her father trained her in hand to hand combat. She's a solitary type, and solidarity doesn't come to her easily.   ~!She is revealed to be the female titan who killed most of the Scouting Legion members and also killed the 2 titans Hanji was researching. She was also aiming to kidnap Eren and bring him 'somewhere'. Later on Mikasa managed to stop her from running away, and when people tried to bring her out of her titan form, reminded of her father, she wrapped herself inside a hard crystal which made it unable to get any information from her.!~ Note: Annie Leonhart is the official English translation by Kodansha.",
      },
      {
        id: 84313,
        name: {
          first: "Armin no Ojiisan",
          middle: null,
          last: "",
          full: "Armin no Ojiisan",
          native: "アルミンのお祖父さん",
          userPreferred: "Armin no Ojiisan",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b84313-kYfb2g4OR7je.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b84313-kYfb2g4OR7je.jpg",
        },
        description:
          "The paternal grandfather of Armin Arlert. Before the fall of Wall Maria, He possessed a book containing illegal information about the world beyond the Walls. He gave this book to his grandson, Armin Arlert, who showed it to his best friend Eren, kindling his desire to see the outside world",
      },
      {
        id: 46484,
        name: {
          first: "Reiner",
          middle: null,
          last: "Braun",
          full: "Reiner Braun",
          native: "ライナー・ブラウン",
          userPreferred: "Reiner Braun",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b46484-P6A2GjNQn49F.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b46484-P6A2GjNQn49F.png",
        },
        description:
          "__Height__: 185 cm (6'1\")\n\nStrong willed, with a solid constitution. Most adept at gaining the trust of his comrades. Ranked no 2 of the trainee class. Helps Eren out during his training days.   ~!Later in the story he is revealed as the Armored Titan.!~ \n*Note: Reiner Braun is the official English translation by Kodansha.*",
      },
      {
        id: 62477,
        name: {
          first: "Grisha",
          middle: null,
          last: "Yeager",
          full: "Grisha Yeager",
          native: "グリシャ・イェーガー",
          userPreferred: "Grisha Yeager",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b62477-3AHBGul9bXK8.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b62477-3AHBGul9bXK8.jpg",
        },
        description:
          'Father of Eren. He is a renowned doctor who was well respected in the District of Shiganshina after he saved the village from a mysterious viral epidemic by developing vaccines. He also provides a medical house call service to the people of Shiganshina and to various towns in addition to having a network of contacts within the Corps of the Shiganshina District.  <br>\n ~!In the basement of the Yeager family house he hides a secret which he refers to as the "truth" and upon meeting Eren after the fall of the Wall Maria in the year 845, injects him with a series of chemicals and amnesiacs and entrusts him with the key to the "truth", before disappearing.!~  ~!Inherited the Founding Titan from Frieda Reiss by turning into a Titan and eating her. He then kills every member of the Reiss family except Rod Reiss, who escapes.!~  ~!Grisha was an Eldian restorationist living in a Marleyan internment zone with his first wife of royal blood, [Dina Fritz. ](https://anilist.co/character/133215/Dina-Fritz) He and his wife Dina had a child named Zeke, who Grisha forces into the warrior candidate program to attempt to turn into a titan, to fight alongside the Eldian restorationists. Grisha was shown as an abusive father towards his son, prompting Zeke to betray his parents and the restorationists, revealing them to the Marleyan government. Once all the other Eldian restorationists, including Dina, are turned into Titans on the island of Paradis, Grisha alone is saved by the Owl.!~ \n~!Inherited the Attack Titan from The Owl, [Eren Krueger. ](https://anilist.co/character/131440/Eren-Krueger) He uses this power to escape into Wall Maria where he starts a new life.!~ ~!After the fall of Wall Maria, he entrusts his son Eren with the key to the drawer of his secrets that include information about the outside world. Grisha then injects Eren with titan serum and allows himself to get eaten so he can pass down his Titans and memories to his son.!~\n\n~!It is later revealed that Eren, while in the paths, directed Grisha to kill the Reiss family.!~\n\nNote: Grisha Yeager is the official English translation by Kodansha.',
      },
      {
        id: 84329,
        name: {
          first: "Gustav",
          middle: null,
          last: null,
          full: "Gustav",
          native: "グスタフ",
          userPreferred: "Gustav",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b84329-vLIxfAIYGPug.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b84329-vLIxfAIYGPug.png",
        },
        description: null,
      },
      {
        id: 84305,
        name: {
          first: "Keith",
          middle: null,
          last: "Shadis",
          full: "Keith Shadis",
          native: "キース・シャーディス",
          userPreferred: "Keith Shadis",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/n84305-15nngV5nTUp6.png",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/n84305-15nngV5nTUp6.png",
        },
        description:
          "Keith Shadis was the head instructor of the 104th Trainees Squad. He seemed to be a friend or have some sort of relationship with Dr. Grisha, as he knew Eren is the son of the doctor and praised Eren for his effort. \n\n~!He sacrifices himself by blowing up the Marleyan ship to prevent the Yeagerists from catching the allies!~\n",
      },
      {
        id: 84327,
        name: {
          first: "Bart",
          middle: null,
          last: null,
          full: "Bart",
          native: "バルト",
          userPreferred: "Bart",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/character/large/b84327-Wg2P1FSDecGc.jpg",
          medium:
            "https://s4.anilist.co/file/anilistcdn/character/medium/b84327-Wg2P1FSDecGc.jpg",
        },
        description:
          "Original anime character. He is a Noble in the District of Marquis and friend of Pixis, who challenges him to leisurely games of chess. In the anime, as Pixis makes to leave upon learning of the invasion of Trost in the year 850, he tries to prevent him from going to the battlefield and instead have Pixis and his men stay and protect him and his property, viewing the lowly commoners being attacked as trash.  \n\n(Source: Wikipedia)",
      },
    ],
  },
  coverImage: {
    extraLarge:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg",
    large:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg",
    medium:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx16498-C6FPmWm59CyP.jpg",
    color: "#e4a15d",
  },
  bannerImage:
    "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8jpFCOcDmneX.jpg",
  trailer: {
    id: "KKzmOh4SuBc",
    site: "youtube",
    thumbnail: "https://i.ytimg.com/vi/KKzmOh4SuBc/hqdefault.jpg",
  },
};

test("Render", () => {
  const { getByTestId } = render(
    <StarRating anime={mockAnime} id={"rating-test"} />
  );
  const rating = getByTestId("rating-test");
  const text = getByTestId("averageScore-16498");
  expect(rating).toBeInTheDocument();
  expect(text).toHaveTextContent("8.5");
});

test("Render", () => {
  const { getByTestId } = render(
    <StarRating anime={mockAnimeWithoutScore} id={"rating-test"} />
  );
  const rating = getByTestId("rating-test");
  const text = getByTestId("averageScore-16498");
  expect(rating).toBeInTheDocument();
  expect(text).toHaveTextContent("1");
});
