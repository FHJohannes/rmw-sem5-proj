import styles from './rules.module.css'
import  { PillButton } from 'src/components/pillButton/pillButton.tsx'
import { TextBox } from 'src/components/textBox/textBox.tsx'
import { useTilesByName, useDisplayTiles } from 'src/components/playArea/useMahjongTiles';
import { IconButton } from 'src/components/iconButton/iconButton'
import { MdOutlineQuiz } from "react-icons/md";
import { CiVideoOn  } from "react-icons/ci";
import { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import { useNavigate } from "react-router-dom";

interface Props {
    anchor?: string;
}

export function Rules({ anchor }:Props) {

    const navigate = useNavigate();
    useEffect(() => {
        if (anchor) {
            scroller.scrollTo(anchor, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
    }, [anchor]);

    const lesson1Title = "1. Tiles";
    const lesson2Title = "2. Hand";
    const lesson3Title = "3. Audible Calls";
    const lesson4Title = "4. Dora & Dead Wall";
    const lesson5Title = "5. Useful Terminology";
    const lesson6Title = "6. Introduction to Yaku";
    const lesson7Title = "7. What to do during Your Turn";

    return (
        <main className={styles.page}>
            <section>
                <Element className={styles.sectionAnchor} name="top">
                    <div>
                        <h1 className={styles.title}>Rules Overview</h1>
                        <p className={styles.subtitle}><em>Learn the basics of Riichi Mahjong in just a few minutes</em></p>
                        <div className={styles.rulesNav}>
                            <PillButton text={lesson1Title} stylemode="dark"/>
                            <PillButton text={lesson2Title} stylemode="light"/>
                            <PillButton text={lesson3Title} stylemode="medium"/>
                            <PillButton text={lesson4Title} stylemode="dark"/>
                            <PillButton text={lesson5Title} stylemode="medium"/>
                            <PillButton text={lesson6Title} stylemode="light"/>
                            <PillButton text={lesson7Title} stylemode="dark"/>
                        </div>
                    </div>
                </Element>
            </section>
            
            <section>
                <Element className={styles.sectionAnchor} name="lesson1">
                    <div>
                        <h2 className={styles.title2}>{lesson1Title}</h2>
                        <p>In Japanese Riichi Mahjong there are 34 unique tiles. Every tile is available 4 times, meaning that there are 136 tiles with which the game is played. Mahjong tiles come either as a part of a suit (1-9) or as an honor tile. First we start learning the numbertiles and the 3 suits !</p>
                    </div>
                    <div className={styles.tileSuit}>
                        <h3>Pinzu</h3>
                        <p>These tiles are the "Pinzu" tiles. these are tiles from one of the 3 "suits". Pinzu is the official japanese name, but names like dots, wheels, circles or the shortened version pin are also commonly used.</p>
                        <div className={styles.noteWrapper}>
                            {useDisplayTiles(useTilesByName(['Pin1', 'Pin2', 'Pin3', 'Pin4', 'Pin5', 'Pin6', 'Pin7', 'Pin8', 'Pin9']))}
                        </div>
                    </div>
                    <div className={styles.tileSuit}>
                        <h3>Souzu</h3>
                        <p>Souzu are tiles from the another one of the 3 suits. In many sets the 1 of bamboo is often replaced with some kind of bird, sometimes sitting on "1 stick".  Their alternative names are bamboo, sticks or again the shortened version sou. </p>
                        <div className={styles.noteWrapper}>
                            {useDisplayTiles(useTilesByName(['Sou1', 'Sou2', 'Sou3', 'Sou4', 'Sou5', 'Sou6', 'Sou7', 'Sou8', 'Sou9']))}
                        </div>
                    </div>
                    <div className={styles.tileSuit}>
                        <h3>Manzou</h3>
                        <p>The third and final suit a Manzou tiles. Manzou tiles are the hardest for us westenerns to learn since we cannot read the kanji on the tile which would otherwise tell us their number. These dont really have any other commonly used names other than "character tiles" or "man" which is again, the shortform.</p>
                        <div className={styles.noteWrapper}>
                            {useDisplayTiles(useTilesByName(['Man1', 'Man2', 'Man3', 'Man4', 'Man5', 'Man6', 'Man7', 'Man8', 'Man9']))}
                        </div>
                    </div>
                    <div className={styles.centeredNoteWrapper}>
                        <TextBox
                        title='#Note to numbertiles. '
                        text='Another thing you should keep in mind concerning numbertiles, which will be relevant later is this: while every tile (1-9) is a numbertile, 1 and 9 specifically are ALSO called the TERMINAL tiles. The second note is that for each suit, one of the 5s is a "red" five. This will be relevant for scoring.'
                        row={true}
                        stylemode="dark"
                        >
                            {useDisplayTiles(useTilesByName(['Pin1', 'Pin2', 'Pin3']))}
                        </TextBox>
                    </div>
                    
                        <p><em>Honor tiles come in 2 varieties. Either as a Dragon or a Wind Tile.</em></p>
                        <div className={styles.noteWrapper}>
                            <TextBox
                            title='Dragons'
                            text='Dragons are a little easier again. There are only 3 of them and they are named after the colors in which they are depicted. With the white dragon being just a blank tile in many tilesets, the green often having a very dark, almost black, kind of green making him seem like one of the wind tiles and the red being just a red needle.'
                            description='triplet with 1 of bamboo'
                            row={false}
                            stylemode="xlight"
                            >
                                {useDisplayTiles(useTilesByName(['Pin1', 'Pin2', 'Pin3']))}
                            </TextBox>
                            <TextBox
                            title='Winds'
                            text='Like in real life there is a wind tile for each cardinal direction (East, South, West North). For now just know that they are winds. Recognizing them comes automatically after a short while.'
                            description='triplet with 1 of bamboo'
                            row={false}
                            stylemode="light"
                            >
                                {useDisplayTiles(useTilesByName(['Pin1', 'Pin2', 'Pin3']))}
                            </TextBox>
                        </div>
                    <div className={styles.lessonButtons}>
                        <IconButton text="Test your Knowledge" stylemode="light" onClick={() => navigate(`/lessons/quiz/1`)}><MdOutlineQuiz /></IconButton>
                        <IconButton text="Watch a Video" stylemode="dark" onClick={() => navigate(`/lessons/videos/1`)}><CiVideoOn /></IconButton>
                    </div>
                </Element>
            </section>
            
            <section>
                <Element className={styles.sectionAnchor} name="lesson2">
                    <div>
                        <h2 className={styles.title2}>{lesson2Title}</h2>
                        <p>A hand in Riichi Mahjong consists of 13 tiles. The 14th tile is the one that completes your hand. But how do you complete a hand? To form a winning hand players must have a Complete Hand and a Yaku in their hand. To put it simply: A Yaku is something that makes the hand special. See the Yakusection for more information on yakus. (Link to Yaku List) There are a lot of different Yaku, but most of them are structually the same. A winning hand almost always consists of: 4 Groups of tiles and a Pair. The pair is in all honesty really just a pair of 2 identical tiles in your hand.</p>
                    </div>
                    <div>
                        <p><em>Tilegroups</em></p>
                        <p>There are 3 Types of tilegroups (sometimes also called ”Shapes”)</p>
                    </div>
                    <div className={styles.outerNoteWrapper}>
                        <div className={styles.noteWrapper}>
                            <TextBox
                                title='Sequence'
                                text='Asequence of 3 numbertiles. They have to be of the same suit and consecutive. Honor tiles and differing suits do not count as sequence.'
                                description='Sequence with 7 8 9 of pin'
                                row={false}
                                stylemode="medium"
                                >
                                {useDisplayTiles(useTilesByName(['Pin7', 'Pin8', 'Pin9']))}
                            </TextBox>
                            <TextBox
                                title='Triplet'
                                text='Its as simple as it sounds. the exact same tile 3 times.'
                                description='triplet with 1 of bamboo'
                                row={false}
                                stylemode="dark"
                                >
                                {useDisplayTiles(useTilesByName(['Sou1', 'Sou1', 'Sou1']))}
                            </TextBox>
                        </div>
                        <div className={styles.noteWrapper}>
                            <TextBox
                                title='Quadruplet'
                                text='A Quadruplet is a rare type but i will add them here for completenes sake. A Quadruplet is composed of four of the same tile. But they are trickier because you cannot make 4 Quadruplets and a Pair with 13 tiles obviously. Just having a Quadruplet in your hand does nothing. In order to make 4 of the same tile in your hand into a Quadruplet, you have to declare it. (more details on quadruplets are in the section ”CALLS” and ”DEADWALL”) After you have declared your Quadruplet you can draw an additional tile. Meaning your hand consists of 14 tiles now and you complete it with a 15th. But more on that in the next lesson about calls. For now know that a Quadruplet can be one of the 4 Groups you need to complete your hand.'
                                description='quadruplet with 3 of characters'
                                row={true}
                                stylemode="light"
                                >
                                {useDisplayTiles(useTilesByName(['Man3', 'Man3', 'Man3', 'Man3']))}
                            </TextBox>
                        </div>
                    </div>
                    <div>
                        <p><em>Putting it together</em></p>
                        <p>To win you need a complete hand and a Yaku. Complete hands are formed with 4 Groups and a Pair. Where it doesnt matter if its 4 triplets and a pair or 2 triplets, 2 sequences and a pair. Have 4 Groups and a Pair and your most often good to go. Groups are either Triplets, Sequences or called Quadruplets.</p>
                    </div>
                    <div className={styles.winningHandContainer}>
                        {useDisplayTiles(useTilesByName(['Man1', 'Man2', 'Man3']))}
                        {useDisplayTiles(useTilesByName(['Pin5', 'Pin6', 'Pin7']))}
                        {useDisplayTiles(useTilesByName(['Sou3', 'Sou3', 'Sou3']))}
                        {useDisplayTiles(useTilesByName(['Hatsu', 'Hatsu', 'Hatsu']))}
                        {useDisplayTiles(useTilesByName(['Nan', 'Nan']))}
                    </div>
                    <div className={styles.lessonButtons}>
                        <IconButton text="Test your Knowledge" stylemode="light" onClick={() => navigate(`/lessons/quiz/2`)}><MdOutlineQuiz /></IconButton>
                        <IconButton text="Watch a Video" stylemode="dark" onClick={() => navigate(`/lessons/videos/2`)}><CiVideoOn /></IconButton>
                    </div>
                </Element>
            </section>
            
            <section>
                <Element className={styles.sectionAnchor} name="lesson3">
                    <div>
                        <h2 className={styles.title2}>{lesson3Title}</h2>
                        <p>In this section we will explain all the different audible calls the players can make.</p>
                    </div>
                    <div>
                        <p><em>Tilecalls</em></p>
                        <p>There are a total of 6 different calls the players can make at specific points in the game. 3 are for completing various groups, 2 are to announce your win and one is a gamble-bet-call. We will now go over all of them and explain when you are able to use them and what each one does.</p>
                    </div>
                    <div className={styles.outerNoteWrapper}>
                        <div className={styles.noteWrapper}>
                            <TextBox
                            title='PON'
                            text='PON is probably the easiest to understand. When you have a Pair of any Tile in your hand and any other player discards exactly this tile also, you can call PON. You can only call PON when the tile was just discarded. Once the next players draws a tile you can no longer call PON. Note that you can only call this to actually complete a Triplet and not to create Pairs!! What this does is that it makes your pair into an open triplet, meaning that your hand is now OPEN (a very important detail that will be extremely relevant in the Yaku section). After calling Pon, play continues from the player that called Pon.'
                            row={false}
                            stylemode="xlight"
                            />
                            <TextBox
                            title='CHI'
                            text='Chi works almost the same as Pon but it can ONLY be called from the player sitting on your LEFT and it can only be called to complete a Sequence. If another player calls Pon at the same time you call Chi, the player that called Pon gets the tile. A full priority breakdown will be at the end of this section. Calling CHI also opens the hand.'
                            row={false}
                            stylemode="light"
                            />                       
                        </div>
                        <div className={styles.noteWrapper}>
                            <TextBox
                            title='KAN for Four of a kind'
                            text='Kan makes thing interesting because unlike the other tile calls this can be done in 3 different ways. But no matter how you call it, you get to draw 1 extra tile from the deadwall. Nr1. If you have 3 of the same tile in your closed hand and another player discards the 4th copy of this tile, you can call KAN, which in this case is essentially just a Pon for a Four of a kind Group. This way opens your hand though. The Second way of calling Kan is to call it as a closed-kan. You can do this if you have all 4 of the same tile in your hand. Calling Kan while it is your turn makes this Quadruplet now a valid Group. Now your hand stays closed and you increase your tile capacity by 1 (each time you do this). You hand is now 14 Tiles big and the 15th Tile is your winning tile. (Remember the 4 Groups + Pair and you 13 Tile handsize. Now with the valid quadruplet. Your hand needs to be 14 Tiles big in order to complete the other groups and the pair! For more information please check the video on KAN!) The Third Option of calling Kan is to call it as a Pon-extention (this is very rarely the case but again for the sake of completenes). If you have called Pon before and now draw the fourth tile of that exact triplet, you can extend it by simple calling Kan and adding the tile to that pon group. But you can only do this if you draw the 4th copy of the ponned triplet yourself. Now you know how to Form valid Quadruplets and how to call KAN, now what that actually does is not really important now and will be explained in the ”DEADWALL” Chapter!'
                            row={false}
                            stylemode="dark"
                            />             
                        </div>
                        <div>
                            <p><em>Winning Calls</em></p>
                            <p>There are 2 different ways to win a round and complete your hand. You either win by selfdraw or off of someone elses discard. These two calls can only be made if you are in Tenpai, meaning if you are only 1 tile away from completing your hand.</p>
                        </div>
                        <div className={styles.noteWrapper}>
                            <TextBox
                            title='TSUMO'
                            text='Tsumo is the most satisfying (for yourself) and most soul crushing call (for your opponents) to hear. Because it means that you have drawn the final tile you need to complete your hand yourself. When you are only 1 tile away from winning and draw the tile you need to complete your hand you can just call TSUMO and end the round with you winning.'
                            row={false}
                            stylemode="xlight"
                            />
                            <TextBox
                            title='RON'
                            text='Ron is the call to make when any other player discards your winning tile. When ever you are only 1 tile away from completing your hand and another player discards the tile you need (either for a triplet, a sequence, a kan or a pair). you can instantly end the round by calling Ron.'
                            row={false}
                            stylemode="light"
                            />                       
                        </div>
                        <div>
                            <p><em>Richi</em></p>
                            <p>The final call a player can make during the round is RIICHI sometimes also REACH (english). There is actually a lot of information about this call, but let me try to keep it simple and stay with me. Riichi can only be called when you are just 1 Tile away from completing your hand and your hand is fully closed!</p>
                        </div>
                        <div className={styles.winningHandContainer}>
                            {useDisplayTiles(useTilesByName(['Man1', 'Man2', 'Man3']))}
                            {useDisplayTiles(useTilesByName(['Pin5', 'Pin6', 'Pin7']))}
                            {useDisplayTiles(useTilesByName(['Sou3', 'Sou3', 'Sou3']))}
                            {useDisplayTiles(useTilesByName(['Hatsu', 'Hatsu', 'Hatsu']))}
                            {useDisplayTiles(useTilesByName(['Nan', 'Nan']))}
                        </div>
                        <div className={styles.winningHandContainer}>
                            {useDisplayTiles(useTilesByName(['Man1', 'Man2', 'Man3']))}
                            {useDisplayTiles(useTilesByName(['Pin5', 'Pin6', 'Pin7']))}
                            {useDisplayTiles(useTilesByName(['Sou3', 'Sou3', 'Sou3']))}
                            {useDisplayTiles(useTilesByName(['Hatsu', 'Hatsu', 'Hatsu']))}
                            {useDisplayTiles(useTilesByName(['Nan', 'Nan']))}
                        </div>
                        <div>
                            <p>When it is your turn you can choose to call Riichi or not. Calling Riichi makes any complete hand valid and winning ready. Because Riichi itself (the call) is one of the 42 Yaku in the game. Also calling Riichi announces that you are only 1 Tile away from winning (Uno, sort of). More detail will be available in the Yakulist-Entry for the Yaku Riichi.</p>
                        </div>
                    </div>
                    <div className={styles.lessonButtons}>
                        <IconButton text="Test your Knowledge" stylemode="light" onClick={() => navigate(`/lessons/quiz/3`)}><MdOutlineQuiz /></IconButton>
                        <IconButton text="Watch a Video" stylemode="dark" onClick={() => navigate(`/lessons/videos/3`)}><CiVideoOn /></IconButton>
                    </div>
                </Element>
            </section>
            
            <section>
                <Element className={styles.sectionAnchor} name="lesson4">
                    <div>
                        <h2 className={styles.title2}>{lesson4Title}</h2>
                        <p>The dead wall has an interesting gameplay element in it despite looking quite boring and being a real nuisance to explain for physical setups.</p>
                    </div>
                    <div className={styles.outerNoteWrapper}>
                        <div className={styles.noteWrapper}>
                            <TextBox
                            title='Dora'
                            text='The dora tile is the next tile of the same suit as the dora indicator. For example, if the dora indicator show the 3 of Pins, the Dora Tile will be the 4 of Pins for this round. The dora tile is not a yaku, but having it in your winning hand will grant you more points. Basically, the dora (and dora indicator) add a layer of strategy because having them is very powerful.'
                            row={false}
                            stylemode="light"
                            />
                            <TextBox
                            title='Dora-Indicator'
                            text='One of the tiles on the deadwall will be revealed at the start of the game. This Tile is called the Dora-Indicator. As the name leads on, it indicates what the dora tile will be. Also, since it is revealed, every one at the table knows that there are only 3 other copies of this tile (maybe) in play. The Max amount of Dora-Indicators is 5.'
                            row={false}
                            stylemode="medium"
                            />
                            <TextBox
                            title='Dead Wall'
                            text='The dead wall is made up of 14 Tiles and not directly relevant for the game. It adds a more strategic element to the game. The deadwall is where the dora indicator lays and where you draw the extra tile after calling a KAN.'
                            row={false}
                            stylemode="dark"
                            />
                        </div>
                        <div className={styles.noteWrapper}>
                            <TextBox
                            title='Uradora'
                            text='The uradora is a special type of dora. It works the same as a regular dora but is revealed under different circumstances. The Uradora Indicator is the tile below any revealed dora indicator. If a player that has called Riichi wins the game by either Ron or Tsumo, they can access the uradora and hope to add han to their hand. The Uradora Indicator is only revealed when a hand is complete. The actual tile is never known during the game and only revealed once someone wins the game after having called Riichi. Revealing a second Dora Indicator also adds a new hidden Uradora Indicator. You see where this is going. If there are any Kans called the amount of Dora (hidden or revealed) keep increasing and can make even simple otherwise cheap hands stupidly strong.'
                            row={false}
                            stylemode="xlight"
                            />
                        </div>
                        <div className={styles.noteWrapper}>
                            <TextBox
                            title='Sequence'
                            text='There are a total of 3 red doras in the game. They also work the same as regular doras in the way they increase the hands score. One of each fives (5 pin, 5 bamboo, 5 character) is colored red and indicates itself as the dora.'
                            row={false}
                            stylemode="light"
                            description='the 3 red fives / also called red dora'
                            >
                                {useDisplayTiles(useTilesByName(['Man5', 'Sou5', 'Pin5']))}
                            </TextBox>
                            <div className={styles.outerNoteWrapper}>
                                <div className={styles.noteWrapper}>
                                    <TextBox
                                    title='Deadwall-Draw'
                                    text='After a Kan is called. The player that made the call can draw an extra Tile to increase their handsize by 1 (so that making the 4 Groups and Pair is possible again).'
                                    row={false}
                                    stylemode="medium"
                                    />
                                </div>
                                <div className={styles.noteWrapper}>
                                    <TextBox
                                    title='Kandora-Indicator'
                                    text='After any Kan is called a new Dora Indicator is revealed. This can happen up to a max of 4 times making a total of 5 Dora Indicators.'
                                    row={false}
                                    stylemode="dark"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.lessonButtons}>
                        <IconButton text="Test your Knowledge" stylemode="light" onClick={() => navigate(`/lessons/quiz/4`)}><MdOutlineQuiz /></IconButton>
                        <IconButton text="Watch a Video" stylemode="dark" onClick={() => navigate(`/lessons/videos/4`)}><CiVideoOn /></IconButton>
                    </div>
                </Element>
            </section>
            
            <section>
                <Element className={styles.sectionAnchor} name="lesson5">
                    <div>
                        <h2 className={styles.title2}>{lesson5Title}</h2>
                        <p>This Chapter will explain to you the terms TENPAI, FURITEN, NO YAKU, THE DEALER and WINDS, what they mean and what they do.</p>
                    </div>
                    <div className={styles.outerNoteWrapper}>
                        <div className={styles.noteWrapper}>
                            <TextBox
                            title='Furiten'
                            text='Furiten is the first rule that confuses many a player when they first encounter it in the wild. Furiten is a state in which you can find yourself in that prevents you from winning off of others discards (You cant RON anymore). But the question stands, when are we in Furiten? You can think of Furiten as a bad addition to Tenpai. Picture this. You are in Tenpai. But. In your discards, there is a tile with which you now could have won if you hadnt discarded it. If this is the case, if you could win with a tile that is somewhere in your discards, then you cannot RON anymore. Not even if it were for a different tile. As long as one of your winning tiles is also in you discards you can only win by TSUMO (Furiten does not influence TSUMO in any way) or if you change your wait to something that is not in your discards. Dont worry this almost never gets understood the first time, just experience it once, then come back here and maybe you will understand then !'
                            row={false}
                            stylemode="white"
                            />
                        </div>
                        <div className={styles.noteWrapper}>
                            <TextBox
                            title='No Yaku'
                            text='No Yaku is not officially a term used in Mahjong Rulebooks, but i will explain the concept behind it here. We know that to win a hand we need to complete it and have atleast one Yaku. When you are in Tenpai, but you do not have one of the 42 Yaku, you cannot call RON or TSUMO! Since a Yaku is required winning a hand without it is impossible. The only fix to this is somehow acquiring a Yaku, which can be really hard if you were in Tenpai already.'
                            row={false}
                            stylemode="xlight"
                            />
                            <TextBox
                            title='Tenpai'
                            text='Tenpai is the term used when you are only 1 tile away from winning. When you are in Tenpai you can call Riichi, Tsumo or Ron. Note that if you have an open hand you can stil be in Tenpai, but are not able to call Riichi then, because Riichi can only be called with a closed hand.'
                            row={false}
                            stylemode="light"
                            />
                        </div>
                        <div className={styles.noteWrapper}>
                            <TextBox
                            title='The Dealer'
                            text='The Dealer is the player that gets the first draw in a game and always sits in the EAST Seat. When you win as the Dealer you get a bonus on winning hands and continue to play as the Dealer.'
                            row={false}
                            stylemode="dark"
                            />
                        </div>
                    </div>
                    <div>
                        <p><em>Richi</em></p>
                        <p>The final call a player can make during the round is RIICHI sometimes also REACH (english). There is actually a lot of information about this call, but let me try to keep it simple and stay with me. Riichi can only be called when you are just 1 Tile away from completing your hand and your hand is fully closed!</p>
                    </div>
                    <div className={styles.noteWrapper}>
                        <TextBox
                        title='Seat Wind'
                        text='Every player gets assigned a Seat Wind starting with the Dealer that always sits in the EAST Seat. The counterclockwise the other Seat Winds are applied. So the player to the right of the Dealer is always the South Seat. Opposite of the Dealer is the West Seat and to the left of the Dealer is the North Seat. When the Dealer changes the wind changes too. This also happens counterclockwise. So after our turn in the Dealer Seat the player on our right becomes the dealer and his seat also changes into the East Seat.'
                        row={false}
                        stylemode="xlight"
                        />
                        <TextBox
                        title='Round Wind'
                        text='In the middle of the table should be an indicator somewhere on which the current round wind is displayed. Riichi Mahjong games typically start with an East Wind as Round Wind. After every player has had a turn in the Dealer Seat and the game is not completed. The Round Wind changes into the next Wind. In this case after every player had an East-Wind-Dealer-Seat the round wind would change into the SOUTH WIND.'
                        row={false}
                        stylemode="light"
                        />
                    </div>
                    <div className={styles.lessonButtons}>
                        <IconButton text="Test your Knowledge" stylemode="light" onClick={() => navigate(`/lessons/quiz/5`)}><MdOutlineQuiz /></IconButton>
                        <IconButton text="Watch a Video" stylemode="dark" onClick={() => navigate(`/lessons/videos/5`)}><CiVideoOn /></IconButton>
                    </div>
                </Element>
            </section>

            <section>
                <Element className={styles.sectionAnchor} name="lesson6">
                    <div>
                        <h2 className={styles.title2}>{lesson6Title}</h2>
                        <p>This Chapter will explain to you the terms TENPAI, FURITEN, NO YAKU, THE DEALER and WINDS, what they mean and what they do.</p>
                    </div>
                    <div className={styles.outerNoteWrapper}>
                        <div className={styles.noteWrapper}>
                            <TextBox
                            title='What is a Yaku'
                            text='As already mentioned there are a total of 42 Yaku in the game and atleast 1 of them is required to win a hand. They are essential when you want to get serious about the game, but in my opinion they can be left out when teaching beginners to allow them to focus on learning the mechanics of the game and not have to worry for now about having a Yaku. And even then, we are now at the end of this guide and the only thing I will give you are some simple Yaku that are easy to aim for.'
                            row={false}
                            stylemode="xlight"
                            />
                        </div>
                        <div className={styles.noteWrapper}>
                            <TextBox
                            title='Riichi'
                            text='This one may be to most specific in my little list of Yaku but it is also the most important one. Because any hand can have the Riichi Yaku aslong as it stays closed the entire game up until Tenpai. When you are in Tenpai with a closed Hand, you can call Riichi to give your hand the Riichi Yaku. This announces that you are in Tenpai to the other players.'
                            row={false}
                            stylemode="light"
                            />
                            <TextBox
                            title='Yakuhai'
                            text='This Yaku is achieved whenever you have a triplet of any Dragon, the Round wind or your Seat Wind in your hand. It counts open and closed and you can for example PON a dragon to complete your Dragon-Yakuhai-Yaku. When you reach Tenpai this way you can still call RON or TSUMO even if you didnt or couldnt call Riichi.'
                            row={false}
                            stylemode="medium"
                            />
                            <TextBox
                            title='All Simples'
                            text='You achieve this Yaku by only having Tiles from 2-8 in your hand. If you have 4 Groups and 1 Pair with no 1 or 9 or Honor Tile your hand qualifies for the All Simples Yaku. It does not matter if your hand is open or closed also. You just cannot have any Terminal or Honor Tiles in it.'
                            row={false}
                            stylemode="dark"
                            />
                        </div>
                        <div className={styles.noteWrapper}>
                            <TextBox
                            title='All Triplets'
                            text='As the name may suggest this Yaku is given to any hand open or closed that contains 4 Triplets and a Pair.'
                            row={true}
                            stylemode="xlight"
                            />
                        </div>
                        <div className={styles.noteWrapper}>
                            <TextBox
                            title='7 Pairs'
                            text='One of the 2 Hands that completely do not follow the 4 Groups 1 Pair Rule is this one. And it is exactly what the Yaku is called. When you have a hand that consists of 7 Pairs, your hand is awarded the 7 Pairs Yaku.'
                            row={false}
                            stylemode="light"
                            />
                            <TextBox
                            title='Pure Straight'
                            text='This Yaku requires the player to have the Sequences ”123, ”456” and ”789”, all in the same suit in their hand. The 4th Group can be any other Triplet, Quadriplet or Sequence. Then hand can be open.'
                            row={false}
                            stylemode="dark"
                            />
                        </div>
                    </div>
                    <div className={styles.lessonButtons}>
                        <IconButton text="Test your Knowledge" stylemode="light" onClick={() => navigate(`/lessons/quiz/6`)}><MdOutlineQuiz /></IconButton>
                        <IconButton text="Watch a Video" stylemode="dark" onClick={() => navigate(`/lessons/videos/6`)}><CiVideoOn /></IconButton>
                    </div>
                </Element>
            </section>
            
            <section>
                <Element className={styles.sectionAnchor} name="lesson7">
                    <div>
                        <h2 className={styles.title2}>{lesson7Title}</h2>
                        <p>Not that we have covered the basics. How does our Turn look like? A turn in mahjong consists of 3 steps. First you draw a tile from the wall. Then, if you can win from that tile you declare Tsumo. If not, you either keep the tile and discard one of the tiles in your hand. Or discard it if it does not help you in your current hand. </p>
                        <br />
                        <p>In theory you can also before you draw a new tile call Chi on the tile from the player to your left or Pon (from any player). Skipping step 1 and 2 and forcing you to discard something from your hand. Or ofcourse call Ron too anytime anyone discards your winning tile (except when you’re in furiten). Or if you have a closed kan you could declare it and draw from the dead wall to extend your turn before you discard a tile (there is also a chance to win from the dead wall draw), if that happens it is handled the same way as a natural tsumo. Funfact this is a stupidly specific and rare yaku, but super satisfying.</p>
                    </div>
                    <div className={styles.lessonButtons}>
                        <IconButton text="Test your Knowledge" stylemode="light" onClick={() => navigate(`/lessons/quiz/7`)}><MdOutlineQuiz /></IconButton>
                        <IconButton text="Watch a Video" stylemode="dark" onClick={() => navigate(`/lessons/videos/7`)}><CiVideoOn /></IconButton>
                    </div>
                </Element>
            </section>
                        
        </main>
    )
}