const memories = [
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
        name: "",
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