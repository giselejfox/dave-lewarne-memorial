const memories = [
    {
        name: "Alexa and Steve Johnson",
        message: "Dave - You were such a friend to us in our young married days, and the best neighbor in the world. We loved our dinners together, the backyard hangouts, the chats over the fence. To this day, when we play cards, its still always 3 to 13, we always reminisce about you,  and we still need a card shuffler. And sometimes theres a little JYD involved! You taught me about being a dedicated teacher that does more than teach content, but to love your students and meet them where they are and with what they need. You shared your dog for the Furry 5K, you taught us to always take our kids out for pancakes on a snow day (I'll never forget walking down to Kate's with five babies and toddlers in tobogans!), had mountain bike adventures with Steve (until that didn't end well), but most of all you made us feel welcomed into your heart and family. We have missed you so much in recent years, and now we will miss you forever. All our love,"
    },
    {
        name: "",
        message: "I remember once at XC practice, Coach LeWarne brought in a picture of his wife, Anne. She was dressed as Snow White for Halloween. I could tell that Mr. LeWarne thought Anne was such a special and beautiful woman, and he was so proud to show us the picture of the woman he loved. 🩷"
    },
    {
        name: "Rylee A ",
        message: "A couple days I was late to school, and every single time he would be walking to the office and smile and say good morning. His humor is amazing, and you could tell he enjoyed his job. He was an amazing teacher and coach."
    },
    {
        name: "",
        message: "Lewarne was my cross-country coach for 4 years. He had a great sense of humor and an inspiring demeanor. One of my core memories of him was when I and a friend were stressing over an upcoming race. We told him how anxious we were and he told us that no matter what happened and how we ran, the sun would still come up the next day, and the world would keep spinning. As a nervous teenager, this put me at ease. He always wanted us to try our best, but he also never pushed too hard or made us feel pressured. He fostered an inclusive and uplifting team culture. LeWarne always cared about our well-being and our lives outside of school or XC. When I decided to apply to colleges in Ireland, he wrote me a recommendation letter that nearly brought my mom to tears. He helped me achieve my goals and I am very grateful to have known him. "
    },
    {
        name: "Anya Bohuta",
        message: "I got the pleasure of knowing LeWarne and his family through cross country and track. Coach LeWarne was part of the reason I fell in love with running and it has become such a big part of my life! LeWarne inspired and brought so much joy and laughter to cross country. He made hard workout days still enjoyable with his humor and always bringing a smile. He made sure everyone felt included and was part of the team, he didn’t only care about your times as a runner/athlete; he cared about each person as an individual. I remember he always made an effort to learn everyone’s name on the team within the first couple days of practices starting. He is going to be so missed! "
    },
    {
        name: "Elisa",
        message: "Mr LeWarne made my exchange year easier and funnier. He was such an amazing person. I’m going to miss him."
    },
    {
        name: "",
        message: "Mr. Lewarne was the first coach to really have an impact on me. I always felt so welcomed and comfortable around him. His presence was everywhere and everyday I could expect a hi from him while walking through the c building hallway. "
    },
    {
        name: "Lila Vice, SHS Class of ‘24",
        message: "Mr. LeWarne was always one of my favorite teachers at SHS. He had so much compassion, and lit up the room with his humor. He made me feel so welcome my freshman year, and was so helpful and understanding if I struggled with keeping up with class work, when things in my personal life felt like my world was crashing down. He was a light in my life, and I have looked up to him since I had him as a biology teacher, even requesting to be his TA my senior year just so I could be in his class. I didn’t see him as just a teacher, but someone to confide in, and a friend when it didn’t feel like I had many. I will always be so incredibly grateful for having him as a role model in my life.🩷"
    },
    {
        name: "Erika Klein, EHS ‘89",
        message: "All those miles and all those smiles…I was fortunate to have grown up around Dave.  He was an amazing leader, teammate, and friend.  We had so many fun memories from Chase Lake elementary school, College Place middle and Edmonds high school with our XC and track teams. Mile repeats, Yost Hills, Maltby, speeding ticket on the way back from TC’s cabin, the 87 Strike, Cougar run, leading stretches, slideshows, McLeod’s biology class, togas and tuxes, and many more. Dave was one of those people you could not see for two or three years and still be able to pick up the conversation like no time at all had passed and of course he always made others laugh. It is no surprise he was such a beloved teacher and coach in his career.  I admire how he always looked out for others around him. He will be greatly missed. "
    },
    {
        name: "",
        message: "What can I say? There are so many memories and so many ridiculous phrases/sayings of LeWarne's to list them all. He had a massive impact on the trajectory of my character, life, and career. I can't thank him (and the rest of the coaching staff - Weber, Marci, Reilly - at MTHS) for all they did for me. I can't fathom how different my life would be without the impact that running had on me, and I owe that to LeWarne. Growing up I didn't have a lot of positive support, so as a freshman runner, I was amazed that teammates and coaches cheered for me during races. I was so thankful that I would smile and wave thanks to them. LeWarne had to teach me how to race and helped me to build some confidence. He would tease me in his own goofy way about how I probably could run faster if I could smile and wave at everyone. I am forever grateful and am proud that I was one of his athletes. FLAMING T's FOREVER"
    },
    {
        name: "Jessica Batley",
        message: " I met Mr. LeWarne in 1998 at MTHS in health class, and my favorite, P.E.  He had just begun his teaching career.  He was a natural in the classroom, like it was in his genes and his destiny to teach and make a difference to so many kids.  He had a knack of making every student special.  I never felt like he had favorites.  His positivity and sense of humor were among his best qualities.  He always called me out when I was sneaking snacks in class!  Just yesterday while logging into an account, I had to answer a security question: who was your favorite teacher.  Teary eyed I answered without a doubt, Mr LeWarne.  Teachers make a huge impact in students lives, he certainly did in mine.  I will never forget him, and my heart goes out to his family.  What a man, and what a lasting legacy he imprinted on so many people.  "
    },
    {
        name: "Braden Kallstrom",
        message: "As many as I have, no memory of LeWarne is as valuable as the effect he’s had on me. I first met him through XC, but over the time I’ve known him, he’s become so much more than a coach for me. LeWarne was able to balance the high expectations he held his athletes to with genuine care for our wellbeing and future. His personality filled every room he stepped into, and he brought an incredible vibrance to the XC team. He never let up, never settled for less, and always, always, wanted the best for everyone in his life. I’ve never had more respect for anyone, ever. He made me want to succeed; if I was feeling rough one day and couldn’t put the work in for myself, I'd run for LeWarne. He supported me 100%, every day, through everything. Through failures and successes LeWarne was there, letting me know where to improve, what went wrong, and how to fix it. Above all else, he wanted to make sure that I never stopped pursuing the things he thought I was great at, even if I didn’t agree. The undeniably genuine nature of every interaction I had with him led me to trust LeWarne absolutely; if I was struggling with some issue, running-related or otherwise, LeWarne would be there to walk me through it. The little things he did, little quirks that at the time were easily overlooked, are now central to how I remember him, like him telling me freshman year not to call him “coach” because that felt like too much of a football thing (god forbid), or that little smirky smile he’d give me when I hit a PR; nothing has ever evoked a stronger sense of pride. We will always be your runners, and getting to captain under your leadership has been more valuable than any PR will ever be. You played a massive role in shaping me into someone I can be proud of, and I wish I could tell you that now, but it’s too late, and I waited too long. Really missing you, LeWarne. Love ya. "
    },
    {
        name: "Miriam Escoto",
        message: "The LeWarnes knew I needed to end up at UOregon before I knew it. While Grace and I went down to tour Eugene, we kept our parents updated through a family group chat where Dave was always quick to respond to our pictures with a funny comment. Knowing how anxious I was about choosing a college, LeWarne told me an old friend of his went to UO and she could answer any questions I had. So, I called this woman and simply hearing that she loved UO 20 something years ago sold me—I signed the dotted lines to go the next day after a track meet where I was cheered on and coached by Dave. When the sun would shine extra bright on Hayward, I would always send him a picture. I am so grateful and credit him and Grace for helping me make the decision I was too stubborn to realize, but forever glad I made."
    },
    {
        name: "Michelle Mauro, class of 2011",
        message: "Dave was one of those teachers that made you feel like you could tell him anything and he wouldn’t judge you or turn you away. Okay, he might judge you a little but he would always listen and be there for you. My sophomore year was the first year I had LeWarne as my science teacher (Biology) and that was where my love of science began. I made sure after that year that he would be my teacher every year I was at SHS. I took Anatomy and Advanced Anatomy with him as well as TA’ed for one of his Biology classes my Senior year. He would always walk around the classroom bending a yard stick that he would inevitably break from bending it too much. He must’ve gone through at least 100 during my time at SHS. On my final day of class I brought him a yard stick and asked him to break it for me and sign it. He signed it “don’t break this” with his name. Today it still rests above my door as a reminder to not take life too seriously. I have been his student, his friend, and even taught his classes as a substitute teacher for the school district. There is no denying that he will be missed greatly and C building won’t be the same without him. Much love,"
    },
    {
        name: "",
        message: "I have worked with Dave through the College in the High School class for the past 2 1/2 years. He sought out connecting with Edmonds College to teach the CHS class for his students because he recognized and valued the opportunity to take a college course while in high school.  I enjoyed talking to him about human anatomy and physiology and he would seek out better ways to engage his students to learn the material.  Always kind, happy, and ready to teach, Dave even would search for materials to be donated so his students could experience the content more actively.  I am glad to have known Dave in this short time and will miss him, as I am sure many of his students and fellow faculty will as well."
    },
    {
        name: "Malcolm Fox",
        message: "When I went to college, Dave told me that I had one get out of jail free card. If I ever got arrested, I should use my one free phone call to call him, and he would help me out. I never needed it, but knowing that Dave was always there for me kept me on the straight and narrow. I knew he was serious about this because he repeatedly reassured me. I choose to think that it wasn't because he felt it was inevitable that I would ever get booked in jail, but because that was his funny way of telling me that he loved me enough to never judge me for any mistakes I could ever make."
    },
    {
        name: "Fox Serviss",
        message: "He was a wonder to behold in all his tough bio-teacher, XC loving, teenage teaching glory. I'll never forget those times during Bio where he would play the sound of seals going up the river barking and whatnot. It always wakes me up in the mornings. Just remember, whenever you're down, \"The Mitochondria is the powerhouse of the cell!\" In all seriousness though, love you LeWarne!"
    },
    {
        name: "Milda McCormick ",
        message: "At XC practice Coach Lewarne would always say and do such random/funny things and also sing weird songs and Allie and I would just constantly be saying to each other, \“I love Lewarne so much\""
    },
    {
        name: "Aric and Lena Wagner",
        message: "I’ll never forget his first year as an assistant coach at MTHS, when I asked the head coach if I had a chance to make it to state my senior year, he said no.  Dave heard that pulled me aside and said I could make it if I wanted it bad enough.  He spent the season mentoring me, encouraging me and helped me get to state.  Since then, every time Lena or I run into him, he always asks how we are doing and how our kids are doing in their sports as he keeps tabs on us even 20+ years after Lena and I ran with him as our coach. "
    },
    {
        name: "Tony Wentworth",
        message: "I've know Dave since elementary school because our sisters were friends.  We played basketball when we were 8 or 9 years old - on different teams but we practiced next to each other in the gym.  I don't remember learning much about basketball.....but I do remember Dave playfully chasing us before and after practices.  There was a lot laughing, smiling, fun, and looking over my shoulder running away from Dave so he wouldn't catch us and tickle us.  I just remember Dave making basketball practice FUN every night at Chase Lake Elementary in the early 1980s."
    },
    {
        name: "Cheevs, MTHS 2007",
        message: "By shear luck I saw LeWarne walk by me in Mazama a few years ago. We were all in masks, but I recognized his walk. I guess that's what you remember after running countless miles for 4 years with him as your coach. I got to give him a hug and thank him for telling me \"Cheevs, go to Bellingham, you are never going to move back\". I got to tell him I had bought a house in Bellingham, was working with agriculture and while I didn't join the circus like he suggested, I did learn to juggle. I got to tell him how happy I was and thank him for his huge impact on my life. LeWarne had a way of making each person feel seen, valued and that we mattered. He was the best coach and role model. Since high school I have switched to racing bikes but my race strategy is still everything LeWarne coached."
    },
    {
        name: "",
        message: "This story goes waaayyy back . . . Dave and I both ran on the PLU cross country team back in the early 90’s. He was a freshman and I was a senior when I ran with him, so I was used to being the “mentor” and he the “mentee” to some extent. But I remember that Dave turned this relationship on it’s head occasionally. I remember my last cross country race of my college career when I had a particularly bad race. I was standing around moping and feeling sorry for myself near the finish line. Dave had a similarly poor race and crossed the line shortly after me. He came up to me with his typical half-smile and sarcasm and said “well, I guess we won’t be turning pro in this running thing after-all”. That comment pulled me out of my funk and lightened the mood. We joked around the whole way home on the bus after that.  The real ironic thing, thinking back on this now, is that I guess Dave did turn pro in running after-all, coaching cross-country and track for most of his career. I’ll definitely miss that positive attitude and wit that he always displayed . . ."
    },
    {
        name: "Pieter Caruso, sophomore on the SHS cross country team.",
        message: "Coach LeWarne was by far the best coach I’ve ever had in any sport I’ve ever played. From the moment I first showed up to practice on my first day as a freshman, he made sure to make me feel like I was already part of the family. That is my favorite part of his cross country team. He had a way of bringing people together and making them feel welcome. He was also one of the most encouraging and inspirational people I know. He always pushed me to do my best. My favorite thing to hear while running a race was his voice shouting “You got it kid!” as I ran by. Hearing that always made me go a little faster, even if only for a minute. I truly believe that Coach had an enormous impact on the person I am today, and I’m certainly not the only one who can say that. I’m going to miss him more than words can ever say."
    },
    {
        name: "",
        message: "Dave was my CC Captain his senior year at Edmonds HS. The coaches and teachers went on strike for 4 weeks at the start. I could not coach the runners so Dave was in charge of the turnouts.  When the strike ended our turnouts became official and we could run in some meets.  We qualified for the State CC Meet and when it was finished, Edmonds Boys had captured the STATE CHAMPIONSHIP!!! With Dave's leadership we overcame the roadblocks. To be fair, our girls team under Captain Erika Klein also captured the girls STATE CHAMPIONSHIP that season.  After driving back home over the Cascade Mountains.....the boys and girls got together to celebrate their impossible victory.  At least once a week even today.....I sit back and think about what the Edmonds runners had achieved!!!"
    },
    {
        name: "Karl Smoth",
        message: "Rest in peace Gentle Soul"
    },
    {
        name: "Angela Lyon (Simonet)",
        message: "I first Dave LeWarne when I was a 8th grader in College Place Middle school and was getting ready to head into Edmonds high-school as a freshman. It was the spring if 1985 and there was a recruiting assembly in the cafeteria for 8th graders looking to join the Track team at Edmonds High School. I remember meeting Dave. He was like the #1 track star in Washingtin state. Edmonds High School was #1 for track in the state at the time and Dave was their star. I also have to add \"More than a feeling\" by Boston was playing in the background while the slide show, yes...slide show was being shown on the movie screen. Many, many years ago. Dave got me sucked into all the excitement of being on the track team. He was so kind, real, and gracious. I joined track. The twist and turns life takes you. Dave LeWarne ended up living across the street from my very best friend back then and still today, Chelaine Schneider (Wilson). We would see him running CONSTANTLY. Always with a smile and a happy \"hello\" to us lower classmates. Dave was one of the most sincere, real, kindest, regimented humans I have ever known. He had a heart of gold. Seriously. Alot if people will say that about others but Dave was the real deal. I received a phone call from Chelaine on 1/1/25 letting me know the horrible news of Dave's passing. Breaks my heart and I am still in utter shock. He has shown up in my life in many obscure ways. Homeschooling my son and noticing the Washington State history book was written by Dave's father. Teaching at a High School in a town I have lived in for years. I just found this out this week. As the saying goes\" Only the good die young\". This is definitely applies to Dave. He was such an amazing human being. I want to send my condolences, prayers, and love to his family and friends. Absolutely heart breaking. A huge loss for many. "
    },
    {
        name: "Matt Goddard",
        message: "I was obsessive with everything in high school. Whether it was my training or in life, I had to have it perfect. One thing that always sticks with me that LeWarne told me was, “you run the mileage, the mileage doesn’t run you.” Even though it was in reference to running, I see how relative it is in my life too. There isn’t enough I can say about you LeWarne. Thank you for the laughs and the guidance. Thank you for everything LeWarne. Until next time,"
    },
    {
        name: "Jessica Batley",
        message: "I met Mr. LeWarne in 1998 my freshman year at MTHS, right as he began his teaching career.  He was my health teacher and teacher for my best subject, P.E. :)  He has a special place in my heart, as I always referred to him as my very favorite teacher.  He had a way of making every student feel important.  I love reading all the stories from former students, as it is clear he made an impact in so many lives.  Sending heartfelt condolences to his family.  "
    },
    {
        name: "The Dremousis Family",
        message: "Before we all had kids, George and I hung out with Dave and Anne all the time. We always had so much fun, and Dave still tops the list as one of the funniest people I know. When Dave and Anne bought their first house, they did much of the remodeling themselves, which included Dave installing the kitchen cabinets. One of the cabinets, while full of dishes, ripped off the wall (in the middle of the night, if I recall correctly!) Although that was years ago, to this very day, I think of Dave and his cabinet every time I load our kitchen cabinet up with dishes, questioning its integrity. It has been a while since we have seen each other, but it seems like just yesterday. The loss feels immeasurable and we are absolutely heartbroken, but we are so lucky and honored that Dave would have us as his friends."
    },
    {
        name: "George Markabi",
        message: "I coached with Dave at SHS for XC team. He took us to White River summer camp. The first night there nobody could sleep from mosquitos' attack. In the morning, he looked at me and said: next year we are not coming back again! What about this year Dave? Smiled, hey let's go to the river and jump, it will help! It was the iciest freezing water as I remember. Now what I want to tell you that I am going this year to White River to jump again with Dave. But I will keep him warm in my heart. I will be the freezing alone this time."
    },
    {
        name: "Kristin, Peyton and Paige Hanning. ",
        message: "I got to know Dave when Greta and Paige were in elementary school playing SJAA basketball, and somehow Dave and I were coaching the girls. He always made me feel like I was doing a great job, and had it all under control, (which I didn’t!) but then at a critical point in the game, I’d get frantic and he’d jump in, gather the girls, tell them what to do, and voila, perfection! He was always a friendly face, and had a kind word over the years. Peyton said he related well to ALL of the different kids in his class. We all send you so much love."
    },
    {
        name: "Bri Gibson, ’15",
        message: "It’s hard to put into words the impact Coach LeWarne had on so many lives, including mine. He was the heart of our team, though he would never agree. He always insisted the spotlight belonged to us, his runners. He would even shy away from being in team photos sometimes, saying “You all did the work, not me.” That humility defined who he was—a man who truly believed in the potential of others and dedicated himself to bringing it out. Coach LeWarne wasn’t just a coach; he was a mentor, a cheerleader, and a constant source of encouragement. He had this remarkable way of making every runner feel important, whether you were leading the pack or fighting to finish. He believed in us on the tough days and inspired us to believe in ourselves. His lessons went beyond running. He taught us grit, grace and how to persevere, shaping us into better athletes and better people. Coach LeWarne’s impact will always live on in the lives he touched and the stories we’ll continue to tell."
    },
    {
        name: "",
        message: "We had a travel race in San Francisco, and Meghan Finegan and I asked LeWarne to drive us to Philz Coffee so we could get our caffeine fix—and escape the chaos of traveling with 10 high schoolers. He graciously stepped away from his busy day to take us to the coffee shop we had seen a girl on YouTube visit. I’m sure we added more stress to his day, but he didn’t let it show. I also remember him calling Ann on the way to catch up with her. LeWarne was such a wonderful example of what it means to be a caring husband, dad, and mentor."
    },
    {
        name: "Jim Matthias",
        message: "I was a fellow freshman XC/track harrier with Dave at PLU.  It’s been fun reminiscing- the PLU senior year photograph of Robert Dufres (Dave as a freshman) still cracks me up to this day.  I can still hear his witty remarks and laughter in my mind. Later, he was known on the running squad as “Booty Time”. Good memories and conversations in his parked Honda - which was where we could have a beer “off campus” while he was an RA at Hinderlie Hall. Wonderful human.  Sorely missed"
    },
    {
        name: "Sarah & Dave Larson",
        message: "Your hope as parents is that your kids have friends with family who feel like family; they love up your kids. The LeWarne family has been that special friend/family for us. They’ve shown my girls how to cheer at football games and arrive early to get the best spot. They’ve been leaders on the XC team and demonstrated how to be a team captain. They’ve driven my girls to concerts and games. Most recently when we had the huge storm & power outage, they reached out and offered for our girls to stay at their house in town instead of driving home on Three Lakes late at night after basketball practice. They offered us dinner and laundry, and Dave joked with me about living in the library for those several days without power. We’d run into Dave and Anne regularly at Costco, and Dave was never without a twinkle in his eye and a dry joke. His classroom was a regular hangout and safe space; before school, during class and times in between. LeWarne was special—as a coach, a teacher and a friend. His story was too short, and he will be greatly missed. We will continue to love up his family as our forever friends. ♥️"
    },
    {
        name: "",
        message: "Every interaction with Dave was kind, positive, full of laughter and left you appreciating him even more. What a gift he was and will forever be to all that crossed his path. A huge light in this world and someone that was so great to so many and loved by everyone. We all have heavy broken hearts on this one. If we all could take just a piece of the amazingness of Dave and put it into our lives, the world would be a better place. #livelikedave Sending love to the LeWarne family and all that are hurting during this difficult time. He will be missed is a dramatic understatement. hugs and love! "
    },
    {
        name: "Bobby Olsen",
        message: "I remember telling Dave and Anne (and girls) about my new summer job with the PUD, which included becoming a certified flagger. Dave was quick to add that he was once a flagger for the city of Edmonds, and he loved it - \"what other job has this much power? Even if a single car was driving up and there was no reason for them to stop, I would flip the sign to STOP and have them wait until I was ready to let them through.\" Dave was always so quick with a story that left others laughing!"
    },
    {
        name: "Alissa Max (Lee)",
        message: "I was fortunate enough to have Mr. LeWarne as my XC and distance track coach all 4 years of high school at MTHS. The most valuable thing that he taught me is that when one puts in the work and is consistent, one will see results. This was important to me when running and continues to translate to so many areas of my life. He always made me laugh with his quick wit and clever phrases. Practices, trips with the team, and meets were fun because of his leadership. He said he believed in coaching the whole person, not just churning out runners. He always celebrated our successes, no matter whether you were a faster or slower runner, and he held us accountable when we didn't race to our potential. I remember having a really good race senior year and he said I was \"hot city disco out there.\" Another race I didn't do well and he said, \"I couldn't figure out what you were doing.\" I also remember he thought arch support inserts would help with some injuries I had, so he bought them for me and delivered them to me in class one day. I still wear green Superfeet in all of my shoes 20+ years later. I always enjoyed seeing his name and quotes in The Herald when he was interviewed as XC coach at Snohomish HS. 7 years ago I ran into him at a meet at a park where I happened to be with my kids. It was fun to catch up with him. He had such a positive impact on so many people. My thoughts are with his family and many friends."
    },
    {
        name: "Kelly Edgerton Richards",
        message: "Dave was a college teammate at PLU,  and later on became a fellow coach.  I was lucky enough to coach with him for one season at MLT, then see him at meets each fall and spring when we had each moved on to different schools.  I always appreciated his smile, love for life, and positive attitude.  I learned so much from watching him coach the one season I had with him at MLT, and carried many of his fun loving traditions to my own teams at Inglemoor.  What a wonderful soul and human being.  A life cut way too short, but what an impact he made on the people around him."
    },
    {
        name: "Shana",
        message: "Dave’s stocked his garage with just about anything you could want, and he was always the first to offer a drink or loan out sports equipment. One of my favorite memories is our after dinner bike rides to “the girls” house to get “water” pops. I think Dave kept a Costco size box of Otter Pops in his garage just for the boys. I love that his girls are just as warm and welcoming as he."
    },
    {
        name: "",
        message: "I met my now husband running cross country. When LeWarne found out we were dating, he cornered Hans on a run one day to talk to him about it. Hans never brought a lunch to school so I would share some of mine. LeWarne told him \“Well you can’t look at her to be your mommy all the time because she’s not the type of girl that will put on her apron and stay in the kitchen if you ask her to.\” Hans replied \“I know, that’s why I like her so much.\” LeWarne was the ultimate girl dad. To his 3 amazing daughters but also to the rest of us."
    },
    {
        name: "Lindsey Wolfe (Sieb) ",
        message: "LeWarne was such a fun and funny teacher and coach! He had such a dry sense of humor. I remember in class he DESPISED gum! Big pet peeve. I had my mom print off an article to share with him about how gum helps kids focus in class and I “presented” it to him… with which he laughed and said I still couldn't chew gum in class. Now I am a teacher, and my mom later became a coworker at SHS as a second-career teacher. He will be dearly missed by this community! "
    },
    {
        name: "Jenna",
        message: "So many stories but one is when I was walking into school and I fell in mud. He gave me his socks to wear because mine were all muddy. "
    },
    {
        name: "Katie (Brister) Frank - MTHS Class of 2003",
        message: "Mr. LeWarne was my health teacher in 9th grade at Terrace and created such a warm atmosphere in that classroom. There was something about him that just felt like “home”. I think it was his consistent humor and obvious care students. He convinced me to join cross country the following year, and so began some of the most memorable times of my high school career. It’s because of him that I learned that I could be a distance runner, something I had never previously aspired to. (I thought all my teammates  were all crazy for the first week of practice, for running so far every day! And then I caught the bug. :)) It’s also because of his gracious leadership that our team had so many good and funny memories - from practice, spaghetti nights, meets, and traveling together. I am shocked and so sad he’s gone. I really wish I would’ve stopped by to say hello these last few years. I pray God’s comfort over his whole family. I’ll miss you Coach!"
    },
    {
        name: "The Benson Family",
        message: "Dave was the epitome of a wonderful coach, teacher, mentor and friend.  He was encouraging, funny, creative, forgiving, inclusive and empathetic. He was the perfect person to RUN THIS TOWN! XC was the one place where people in the back mattered just as much as people in the front. LeWarne made that possible. He seemed more concerned about building character than winning. He made running fun with things like: Watermelon run, team dinners, trips: Monteray, CA, Redwoods, swimming in the ocean, Tillamook Mud Run, running to hit golf balls, meat-locker, poker runs, cereal boxes hidden at Lord Hill. Annual favorite was Dirty Face camp, running up 4000ft, playing Yahtzee, Ice cream run, bacon explosion. Supporting others through: Alex Hopkins Memorial Run, Pumpkin Runs for grade school kids, helping at Eason & Special Olympics. He was great about including people in a casual Turkey Trot – never for fastest time, but building community.  I would like to continue this tradition in his honor."
    },
    {
        name: "Bridget Thomsen daughter Kendall Thomsen (Wheeler)",
        message: "My daughter had Dave her senior at SHS back in 2017 . She had lost her grandma the year before was having a hard time getting to the finish line to graduate. He was a big supporter for her and helped and encouraged her along the way and when she went to graduation rehearsal. There was an encouraging and positive letter to her from Dave telling her how proud he was of her! His support and what that letter meant never left her or us❤️"
    },
    {
        name: "Tina Baxter",
        message: "Our family has been blessed by friendship with the Fox-LeWarne family since our girls were babies, and feel so very lucky we ended up in Snohomish where our girls could go through high school (and beyond) seeing Dave’s leadership and love at work, every day. We have all learned so much from him - in how we approach teamwork, challenges and life. His joyful greeting, laughter, mentorship during tough times, steady coaching, teaching, caring, cheering, crazy multiple font cross country/ distance team handouts, classroom breakfasts, and support of our family far beyond the walls and track of SHS are just a few of the things we will terribly miss, and never forget, about LeWarne.❤️🐾🎈"
    },
    {
        name: "Bruce and Jo Caldwell",
        message: "What a pleasure to read all the wonderful comments about David from those who were students and colleagues of his. However, those of us who knew him as Pauline and Chuck's son saw a wonderful side of his love and care for his parents. They are both in their 90s, and David was a rock to them. He was always helping them with projects and ensuring their wellbeing. He once told me, \"Any time Dad wants to barbeque, I show up to make sure nothing goes wrong.\" He, along with Charlie and Anne, have been wonderful kids to their parents. I grieve for the family with this unexpected tragic loss of a son, brother and father. Chuck and Pauline raised some great kids, and those kids, including David, have reciprocated in caring for their folks. What more can we say, except David was a terrific son."
    },
    {
        name: "Alex",
        message: "It’s hard to pick a favorite story. LeWarne was like a second dad to me. It’s difficult to overstate the tremendous positive impact he had on my life.  I guess I’ll pick a fairly dull story but one that is representative of how patient and caring he (and Anne) were. Probably once a week during the track or cross season I would think of something I’d need to ask LeWarne about around 9pm at night, and I’d call his house phone. Inevitably Anne would pick up and say “Hello Alex, hold on let me get Dave”. And then Dave would pick up and make some joke about how I’m lucky Jane just went to bed. And then he’d listen patiently to whatever I’d want to talk about even though he was probably dead tired. That’s just the kind of guy he was, always ready to set aside whatever he was doing and listen and care. The world has lost one of the great ones "
    },
    // {
    //     name: "",
    //     message: "Dave always packed a closet full of  clothes in his car. After our runs at the gulch (8 miles from his house) he would smell an article of clothing to see if it was good to go before we had our post run beer. "
    // },
    {
        name: "Bailey Jensen (former student and cross country team member 2009-2012) ",
        message: "Dave was an amazing teacher and coach! I always felt that he always cared about the well being of his athletes and truly wanted the best for them. He was always looking out for us. I will always remember him on the sidelines of each race cheering each of us on and encouraging the team to do the same. To me he will always be a great example of strength and kindness. Coach Dave, you will be missed! Thank you for everything you taught me through the years. "
    },
    {
        name: "Leiran Cornish, SHS class of 2012",
        message: "I, and many of my teammates were blessed by Coach Dave. We freshman girls...class of 2012...were his 1st XC team that he took under his coaching wing. We could tell that to Dave, we were special. Dave was more than a coach. He was a kind, genuine, honest man. We knew how much he cared about each of us on the team. \"If it were easy....everyone would do it.\" -Coach Dave. This was played over and over and over to myself after leaving SHS to go run collegiate track and field at Eastern Washington University. It's what fueled me to get through tough workouts under Coach Dave's instruction and it continued to fuel me years after. Dave left a legacy- there are no perfect words to capture everything he did and all that he meant to the people he spent time with. "
    },
    {
        name: "",
        message: "Always looking out for every kid. Seeing potential in everyone. Making the mood positive and fun. Encouraging us to do our best. I remember one time after a race I was having a hard time on he reminded me about how hard I’ve been working and not to be hard on myself. That’s the type of person he was, he could see when you needed help and was always there for others."
    },
    {
        name: "Bernadette McIver",
        message: "My first memory of Dave was at Nate's senior year xc banquet when the senior boys got up to pass out their shirts. Dave shook his head and laid no claim to what was about to happen - I came to love this same scenario every year at the banquets! It was my first inkling into the humor and wit that was Coach LeWarne. My kids have had many coaches across many sports at SHS since 2012, and hands down LeWarne is my favorite along with his coaching staff. He always said he was lucky to coach such great kids/runners. But, in a world where many coaches destroy the psyche of young athletes, it was truly our kids that were lucky to have him as their coach/teacher/mentor!"
    },
    {
        name: "Carol Krause",
        message: "For several years Coach LeWarne would bring his Panther CC team to the farm for an afternoon of running in the fields and thru the corn maze, on these afternoons I enjoyed watching the interactions between team and coach, it was plain to see there was a mutual fondness and shared good humor, but also the certain expectation of hard work and personal accountability. Most usually Coach would have at least one or two of his sweet daughters tagging along with him, and in later years as Panthers training with their teammates. In addition the LeWarne family as a thankyou would bring us a meal, which was so very thoughtful, and I know not always easy given their busy family life. I have enjoyed this family, seeing and visiting with each one on one or together. I am heartbroken for them , but am grateful I had the pleasure to have known such a wonderful man. Our community his family and friends will miss his presence deeply. Love and Prayers for Anne, Jane, Grace and Greta"
    },
    {
        name: "Lauryn LePoidevin",
        message: "It’s hard to choose a favorite memory with LeWarne because he brought so much positive energy and influence into my life—and to everyone around him. LeWarne was an incredible coach and mentor who always believed in you. I’m so lucky to have had him coach me in high school and to have had his support in endeavors beyond that. My most recent memory with LeWarne was just before I was going to graduate college in 2023. I met up with him, Grace, and our dogs, of course, and we got to catch up on life. I remember LeWarne being filled with joy just hearing about my college journey, and he was SO excited to hear about my plans for the future. This moment exemplifies the lasting impression LeWarne left on me. He always made time for others, put them first, and genuinely cared about everyone around him. His positivity and kindness were contagious. These are values I will continue to hold and uphold dearly."
    },
    {
        name: "Evans",
        message: "LeWarne was my anatomy teacher in highschool, and I also was a TA for him during 2 semesters. Every week I asked to watch Finding Nemo, to no avail… until the last day of my senior year, he played it on the projector but upside down and in Spanish… “Surprise Evans!” was the first thing he said when I walked into class, and it still makes me laugh to this day. In college I reached out for some advice in my 200 level anatomy class, he replied immediately with links to all the books he used in his curriculum and coloring books to help me study. He always looked out for all of us, but made it so fun along the way. Rest in peace, LeWarne. 2nd floor of C Building will never be the same!❤️"
    },
    {
        name: "",
        message: "Coach LeWarne was the catalyst for so many of my favorite high school memories. Cold plunges in the Pilchuck River after mile intervals, trail runs at Lord Hill park, and cereal team breakfasts after cold and rainy morning runs. His humor, kindness, and mentorship were truly something special ❤️ "
    },
    {
        name: "",
        message: "I didn't miss one x-country or track meet in the first four years Dave started to coach at Snohomish HS as my son ran those years for Dave.  I have the best memories of how special of a coach and teacher Dave was and I will truly miss him.  My son and all those students were so blessed to have known Dave and have had him part of our lives."
    },
    {
        name: "",
        message: "Since the first year Dave started coaching at Snohomish HS I have always texted him the day before state x-country \"Good luck at State the kids are so blessed to have you as coach\" Dave always texted back, I will miss those text."
    },
    {
        name: "Doug Lehning",
        message: "I met Dave the first year he started to coach x-country at Snohomish HS.  My son Jared Lehning was a freshman and Dave's first coaching challenge.  I have taken thousands of photos during those four years of him coaching Jared but these four were take a few years later while Dave was competing at the Lake Stevens Half Ironman.  As Dave passed me at the run water station he says to me \"okay Doug one and Done\" I never laughed so hard.  Dave was a kind, funny awesome coach and person and I will miss texting with him every x-country season."
    },
    {
        name: "Ham",
        message: "Dave taught me how to drive a stick shift up at TC’s cabin. Fortunately we were out in the sticks so nobody was harmed :) "
    },
    {
        name: "Miriam",
        message: "One of my first experiences with him was at my first XC camp, I had bad blisters and Grace was like, no worries! my dad can help you, so she takes me to him and this guy I barely know is putting ointment and bandaids on my feet and while I sit on the table hahhaha."
    },
    {
        name: "Ann Lepse",
        message: "Many times I drove the school bus for the XC team and track team for the seven years my boys ran long distance. Driving back after meets, Dave always had “helpful”, but not always legal, suggestions of how to get back to the school faster. There were many laughs, and some “we won’t mention this moment”, with him and the other coaches on those trips."
    },
    {
        name: "Shelby Mills",
        message: "From day one of track practice in 2009 “Coach” Dave LeWarne taught us the value of “levity” and “synergy” and that life doesn’t always have to be so serious. He followed up on these words with actions, creating a space that kids wanted to come and just be themselves. He brought joy and laughter to practice and races, “if I can write it you can run it”, and supported all runners at the back of the pack just as he did the front. He fostered a sense of community in his annual bacon-explosions with an ever-expanding open-door policy of an invite list. He helped us to feel both welcomed and celebrated for our weird teenage idiosyncrasies (but didn’t shy at an opportunity to roast us mid-run), and also held us to the standards he believed we were capable of. He made big daunting races or life decisions feel approachable and supported. He came to the hospital (and also brought me a milkshake and an autographed drawing from Jane) after I broke my leg and my teenage world felt devastated. When I was torn about where to go to college I went to his class at lunch and he encouraged and ultimately helped me decide on Gonzaga. He road-tripped to Eugene, OR to come watch a race at Hayward, and was always up to date on milestone races with encouraging texts or words of wisdom. He went out of his way to nerd out over how to help me be a better runner, and also remember how to be a good kind thoughtful patient person. He helped shape the person I am today and I am so grateful for his lasting impact. Thank you LeWarne, you’re so very missed."
    },
    {
        name: "Kathie Beach",
        message: "Dave was always supportive and very much a family man.  He was such a great addition to our family on a very snowy evening on December 27, 1996.  There were about 15\" of snow on the ground and many people weren't able to attend the wedding.  So as to not miss work, he and Anne married on winter break.  It was a very memorable evening for many reasons."
    },
    {
        name: "Nick McIver",
        message: "Desert Twilight in Arizona the Fall of 2017. LeWarne took the brand new rental car off roading in the desert. There may have been a few new scratches when we were done. Getting to coach with him this cross country season was a blast. But I got to see him find the joy in coaching again. That was really special to be apart of."
    },
    {
        name: "Garrett Oliphant",
        message: "It was my Junior year of high school and Lewarne let me and my buddy Steven study for our trapping test during class and we ended up passing. Then a couple weeks later we convinced him to come out early in the morning before school in the frigid January temperatures to come out and check our traps with us around Snohomish. I wish I still have those photos from that morning. That is one of many stories I have with Lewarne. Or stopping traffic in Snohomish when I would see him running and I would cause a backup while we would shoot the breeze."
    },
    {
        name: "Nancy Olsen",
        message: "This Dave memory involves a kitten.  One December night we got a call from Anne and Dave asking if we could secretly keep a kitten at our house for the ten days before Christmas. Milo, the kitten, would be a surprise for Jane, Grace, and Greta on Christmas morning.  Our kids were very surprised to come home from college and see we had a kitten!  Anne snuck down to play with Milo every day.  Sometimes she brought Greta, who was too young to speak - so the secret was safe. Early Christmas morning when it was still dark, Dave and Steve met on Colby for the kitten transfer.  Dave quickly walked home, snuggling little Milo.  Not too much later our phone rang, the girls excitedly asking us to come up and meet the kitten Santa brought them. Jane, Grace, and Greta did not know for over ten years that we had been a part of the Milo surprise!"
    },
    {
        name: "Betsy (Olsen) Haines",
        message: "After my grandma Betty had a brain aneurism and we were at Swedish in Seattle day after day, I went up to Dave and Anne’s house to see if they could take me to Costco to get a bunch of groceries. Dave answered the door and I just started bawling about my grandma. He was so kind and he took me and Greta to Costco. We got everything on our list and afterwards he bought us each a smoothie!!! I thought it was the best thing ever! I had never bought anything from the Costco food court before!! It was really a bright spot during a difficult time and I won’t ever forget his generosity!"
    },
    {
        name: "Lisa Muilenburg ",
        message: "I am forever grateful to Coach Dave. He started coaching at Mountlake Terrace High School my Junior year and helped me go from a good runner to a great runner, making it to State that year and the next. Then convinced me I was good enough to run in college and was a listening ear as I made that decision. In college I ran on 2 national times and more importantly meet my husband. Now my son runs cross country, it was so fun talking to Dave at Districts about him. Still coaching and encouraging. Thanks Coach."
    },
    {
        name: "Noelle Moore",
        message: "when we went to a store with the cross country team and he fell asleep on one of the bean bags in the store. he also taught me how to cook spam in his classroom one morning before school. he was such a wonderful person, and his impact on me and so many other students was profound. i’m really grateful to have known him."
    },
    {
        name: "Ethan Beccari",
        message: "My favorite story about Coach LeWarne is from my sophomore year. I was in the hospital for two months. When I returned, I wasn't sure if I would ever run again. Coach LeWarne was the only one who believed in me. He was with me every step of the way. He is the reason I run so much, even though I'm not the best at it. He taught me the importance of doing my best, even when I don't think it will matter. That is my favorite story; this is just one of the things he has taught me."
    },
    {
        name: "Natalie Harkins",
        message: "I always loved yoga days and having him do yoga with us and also when Greta had her opossum testicle incident and was telling us about it and he came up behind and was like “what went on in my class?!” And also freshman breakfast was a blast. "
    },
    {
        name: "Marina Sorby",
        message: "One of my favorite memories of coach Lewarne was how he would greet me every time I came to class or practice yelling “SORBYYYY”. He always showed up for everyone around him ready to be present and give it his all to make sure everyone felt heard and supported. He was the most energetic and compassionate teacher and coach I could have ever asked for. I am so lucky to have had the majority of my high school experience shaped by such an influential and inspiring man like Lewarne❤️"
    },
    {
        name: "Suzy (Olsen) Lavis",
        message: "Most of the moments we had with Dave involved laughter. He could make anyone and everyone laugh! However, one of my favorite Dave stories involves his bravery. When I was 15 or 16 and new to driving, we had a fairly big snow. We were spending time with the LeWarne family and I was saying that I had never driven in the snow before. My dad did not trust my driving enough at that point to let me drive in the snow. My mom didn’t even trust me enough to drive her anywhere, even when it was dry! But Dave acted like it was no big deal and took me out the next day in his big suburban to practice! Such a kind and brave thing for him to do! "
    },
    {
        name: "Mykel Watt",
        message: "The first CA XC trip with the team in 2016 Danika and I crashing the travel plans and becoming the unofficial team moms all weekend. Photographers, bookkeepers and Goddards private investigators, retrieving his lost items. We had the best time with the runners and coaches. And 10 years of reminding LeWarne not to set prices until he had checked with his treasurer. He never did!"
    },
    {
        name: "Michole (Clemans) Mattix",
        message: "I loved teaching with Dave at Terrace. His perspective was always refreshing and profound, and his delivery was warm and hilarious. I can’t remember a specific story, but I do remember what it felt like to be around him. He always made you feel good about life, making you smile, laugh and keeping it real. I treasure our memories."
    },
    {
        name: "Claire Gillings, Class of 2019",
        message: "There isn’t one single memory that stands out to me; instead, it’s the way he lived his life that has stayed with me. When I switched from soccer to cross country, I never expected that I’d gain a new father figure in my life. What I remember most is the deep care he had for all of us and his desire for us to thrive both inside and outside of sport and school. When I chose not to start college right after high school, LeWarne helped me in ways that meant so much to me. He let me borrow Jane’s Tundra to drive myself to work, and he helped arrange a volunteer position at Centennial, where I worked with the middle school cross country team—including Greta. I watched their kitty during the holidays before I embarked on my journey to NAU. We kept in touch during my time at NAU, and I’d tell him about the famous runners I’d seen around campus. And, of course, LeWarne started the Hoka trend, back when we all thought they were just orthopedic shoes! I’m so deeply grateful for the time I had with him and his family. I’ll keep on running for you, LeWarne. ❤️🏃🏻‍♀️"
    },
    {
        name: "Ame Albrecht",
        message: "One of my favorite memories with Dave was when I was subbing at SHS long term for Tony. Dave would come in each morning to check in, hype me up, and tell me that I was doing a good job. He made me feel welcome and like I'd been part of the team all along. Another great memory I had with Dave was skiing with the stoke squad at Stevens. I remember going down a run that I definitely was not skilled enough for and constantly falling out of my skis. Dave was extremely patient with me and would help grab my skis for me and assure me that we were there to just have a good time and to not take things so seriously! He also made a mean stir fry that trip. Dave was the GOAT and I feel incredibly lucky to have had him in my life as a teacher and a friend. His love for life, adventure, and his family are things that I will never forget about him. Rest easy Dave."
    },
    {
        name: "Angela Reid",
        message: "I think we were in middle school when our older siblings dated, and so we started to feel like we were siblings. I was so lucky to have a \"brother\" like Dave. He was kind and funny and just so easy to be around. Dave and I ran track together and before we could drive, we'd walk home after practice together. We would always stop by WesternCo Donuts and buy the dollar day-olds. Like, bags of them. I’m pretty sure this was all Dave’s idea. We also skied together on Saturdays at Stevens Pass, carpooling to the school at 4:30 AM, and loading into the big yellow schoolbus that smelled like Fritos and feet. We had a lesson in the mornings and then had the afternoons to ski on our own. I’d ski with Dave and some other guys, who pushed me out of my comfort zone in such a fun way, and made me a better skier. I remember one day deciding we should ski Seventh (maybe the most expert run at Stevens at that time), and getting to the top and realizing those moguls were so much bigger up close than they'd looked from a distance—and we all basically slid down on our butts. And this was back when we’d ski in jeans. But hey, we had \"skied\" Seventh.  And there was a time when a classmate of ours who was developmentally disabled had a huge crush on Dave. She thought his eyes looked like almonds, so she called him “Almond.” It may have been awkward for Dave to be the focus of her attentions for so long, but he was never cruel, only kind and gracious. I’ll always remember that about him. Dave was a good human. We need more Daves. I’m so sorry he’s gone. "
    },
    {
        name: "Susie Roberts",
        message: "Dave and I started teaching at Mountlake Terrace HS at the same time. Our son, Tyler, was in Dave's class. One day Tyler skipped the class to go home for lunch. Dave did not report him, but instead asked me if I knew he had skipped. I did know and it was never mentioned again. Such a good guy! Tyler always respected Dave. Tyler passed away in March 2023 so now they are together in heaven. 😇 Ironically, Dave became my niece's coach at Snohomish (Baxter's). "
    },
    {
        name: "",
        message: "There’s crazier, cooler, funnier things that he has done but I think about one moment with him so often in particular, we were running on the p5000 trail out by lake roesiger with a group during the off season and I often would get into trouble at home or school and Lewarne would always know some how idk how but he did, but he was the only adult who would relate on some level to what or why i was such a trouble maker making me feel like it wasn’t a mistake but something to learn and grow from. Thank you Dave for waxing me skis no one did it like you. One of my favorite things is when you’d be walking to the parking lot after the bell rings and the coolest people in the school would come step out on there little balcony in there tropical shirts yelling random crap and telling kids to have a good weekend. There’s truly no one like Dave Lewarne I think of that guy every step I take in snohomish because he’s the guy who kinda made me go run every block."
    },
    {
        name: "Chelan",
        message: "My life simply changed meeting Dave and his family. I still remember the little blue index card where he selflessly wrote me my first running training plan. I never looked back after that moment. I grew to be the person I am today because of Dave, because of him taking me into his family, because of the culture he created in SHS cross country, and because of the belief he instilled in me and others to work hard for what we wanted. I know he would want us to continue celebrating his life on every run that we go on from now. Much love to the entire Lewarne and Fox family. "
    },
    {
        name: "Jane LeWarne",
        message: "First time teaching me to drive in the snow he took me to a church parking lot because he said he wanted to be closer to god."
    },
    {
        name: "Jane LeWarne",
        message: "He consistently thought every time that we needed a Christmas tree that it needed to be trimmed. But he would only trim it from the top and cut random limbs so every year we had a wacky looking Christmas tree."
    },
    {
        name: "Jane LeWarne",
        message: "We were coming back from Idaho and he got stopped by TSA because he had wrapped bask chorizo in a brown paper bag and blue tape."
    },

];
  
export default memories;