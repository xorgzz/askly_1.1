let titles = ["Pol-eng person", "Eng-eng person", "Family & Marriage", "Job & Work"];
let all_sets = [
// Eng-Pol Personality
[[["absent-minded"],["roztargniony"]],
[["adventurous"],["śmiały","zuchwały","żądny przygód"]],
[["affectionate"],["serdeczny","czuły"]],
[["aggressive"],["agresywny"]],
[["alert"],["czujny","bystry"]],
[["ambitious"],["ambitny"]],
[["amusing"],["zabawny"]],
[["arrogant"],["arogancki"]],
[["articulate"],["jasno wysławiający się","elokwentny"]],
[["assertive"],["asertywny"]],
[["bad-tempered"],["wybuchowy"]],
[["bashful"],["wstydliwy"]],
[["big-headed"],["zarozumiały"]],
[["bigoted"],["dogmatyczny","bigoteryjny"]],
[["blunt"],["szczery do bólu","otwarty"]],
[["boastful"],["chełpliwy","przechwalający się"]],
[["bold"],["odważny","zuchwały"]],
[["bossy"],["władczy","apodyktyczny"]],
[["brave"],["odważny"]],
[["bright"],["bystry","radosny"]],
[["broad-minded"],["tolerancyjny","o otwartym umyśle"]],
[["brutal"],["brutalny"]],
[["callous"],["bezduszny","bezwzględny"]],
[["calm"],["spokojny"]],
[["candid"],["szczery"]],
[["carefree"],["beztroski"]],
[["caring"],["troskliwy"]],
[["cautious"],["ostrożny"]],
[["changeable"],["zmienny"]],
[["charismatic"],["charyzmatyczny"]],
[["cheeky"],["bezczelny"]],
[["cheerful"],["pogodny","radosny"]],
[["cocky"],["pewny siebie","chojrak"]],
[["competitive"],["lubiący rywalizować"]],
[["conceited"],["zarozumiały","przemądrzały"]],
[["conscientious"],["sumienny","skrupulatny"]],
[["considerate"],["taktowny","liczący się z innymi"]],
[["courageous"],["odważny"]],
[["cowardly"],["tchórzliwy"]],
[["creative"],["kreatywny"]],
[["critical"],["krytyczny"]],
[["cruel"],["okrutny"]],
[["curious"],["ciekawy"]],
[["cynical"],["cyniczny"]],
[["dedicated"],["oddany"]],
[["demanding"],["wymagający"]],
[["dependable"],["godny zaufania / niezawodny"]],
[["dependent"],["zależny"]],
[["depressed"],["przygnębiony"]],
[["determined"],["zdeterminowany"]],
[["devoted"],["oddany","wierny"]],
[["dishonest"],["nieuczciwy"]],
[["disorganised","disorganized"],["zdezorganizowany"]],
[["dominant","domineering"],["dominujący"]],
[["down-to-earth"],["praktyczny","twardo stąpa po ziemi"]],
[["easy-going"],["wyrozumiały / mało wymagający / spokojny"]],
[["eccentric"],["ekscentryczny","dziwaczny"]],
[["efficient"],["sprawny / kompetentny / efektywny"]],
[["egocentric"],["egocentryczny"]],
[["emotional"],["emocjonalny","uczuciowy"]],
[["energetic"],["energiczny"]],
[["enthusiastic"],["entuzjastyczny"]],
[["excitable"],["pobudliwy"]],
[["extravagant"],["ekstrawagancki"]],
[["extrovert"],["ekstrawertywny"]],
[["fair-minded"],["bezstronny"]],
[["fanatical"],["fanatyczny"]],
[["flexible"],["elastyczny"]],
[["focused"],["dążący do celu","skupiony"]],
[["forgetful"],["zapominalski"]],
[["forgiving"],["wielkoduszny"]],
[["frank"],["szczery"]],
[["frustrated"],["sfrustrowany"]],
[["fun-loving"],["lubiący się bawić"]],
[["funny"],["śmieszny","zabawny"]],
[["fussy"],["wybredny","grymaśny"]],
[["generous"],["hojny"]],
[["gentle"],["łagodny","delikatny"]],
[["good-tempered"],["łagodny"]],
[["gullible"],["naiwny","łatwowierny"]],
[["helpful"],["pomocny"]],
[["highly-strung"],["bardzo nerwowy"]],
[["hospitable"],["gościnny"]],
[["hot-blooded"],["porywczy"]],
[["humble"],["skromny","pokorny"]],
[["hypocritical"],["zakłamany"]],
[["illiterate"],["niepiśmienny"]],
[["illogical"],["nielogiczny"]],
[["imaginative"],["obdarzony wyobraźnią"]],
[["immature"],["niedojrzały"]],
[["impatient"],["niecierpliwy"]],
[["impetuous"],["porywczy","impulsywny"]],
[["impressionable"],["podatny na wpływy"]],
[["impulsive"],["impulsywny"]],
[["indecisive"],["niezdecydowany"]],
[["independent"],["niezależny"]],
[["individualistic"],["indywidualistyczny","oryginalny"]],
[["ingenious"],["pomysłowy"]],
[["insecure"],["niepewny"]],
[["insensitive"],["niewrażliwy"]],
[["insincere"],["nieszczery"]],
[["intelligent"],["inteligentny"]],
[["intolerant"],["nietolerancyjny"]],
[["introvert"],["zamknięty w sobie"]],
[["inventive"],["pomysłowy"]],
[["ironic"],["ironiczny"]],
[["irresponsible"],["nieodpowiedzialny"]],
[["laid-back"],["wyluzowany"]],
[["level-headed"],["trzeźwo myślący"]],
[["light-hearted"],["radosny","beztroski"]],
[["likeable"],["sympatyczny","miły"]],
[["lively"],["pełen życia"]],
[["logical"],["logiczny"]],
[["loyal"],["lojalny"]],
[["malicious"],["złośliwy"]],
[["materialistic"],["materialistyczny"]],
[["mature"],["dojrzały"]],
[["mean"],["skąpy / podły"]],
[["mercenary"],["wyrachowany"]],
[["modest"],["skromny"]],
[["moody"],["kapryśny","humorzasty"]],
[["naive"],["naiwny"]],
[["narrow-minded"],["ograniczony","nietolerancyjny"]],
[["neurotic"],["przewrażliwiony","nerwicowy"]],
[["obedient"],["posłuszny"]],
[["obsessive"],["obsesyjny"]],
[["obstinate"],["uparty"]],
[["open-minded"],["otwarty","pozbawiony uprzedzeń"]],
[["optimistic"],["optymistyczny"]],
[["organised", "organized"],["zorganizowany"]],
[["outgoing"],["towarzyski"]],
[["overbearing"],["apodyktyczny"]],
[["passionate"],["pełen pasji"]],
[["passive"],["pasywny"]],
[["peaceful"],["spokojny"]],
[["pessimistic"],["pesymistyczny"]],
[["petty"],["małostkowy"]],
[["pompous"],["pompatyczny","napuszony"]],
[["possessive"],["zaborczy"]],
[["practical"],["praktyczny"]],
[["prejudiced"],["uprzedzony"]],
[["presentable"],["porządny","dobrze się prezentujący"]],
[["protective"],["opiekuńczy"]],
[["proud"],["dumny"]],
[["pushy"],["bezczelny","rozpychający się łokciami"]],
[["quiet"],["cichy"]],
[["rash"],["pochopny","lekkomyślny"]],
[["rational"],["racjonalny","rozsądny"]],
[["realistic"],["realistyczny"]],
[["rebellious"],["buntowniczy"]],
[["relaxed"],["zrelaksowany"]],
[["reliable"],["niezawodny","można na nim polegać"]],
[["reserved"],["skryty","zamknięty w sobie"]],
[["resourceful"],["przedsiębiorczy","zaradny"]],
[["respectable"],["szanowany"]],
[["responsible"],["odpowiedzialny"]],
[["revolutionary"],["rewolucyjny"]],
[["ruthless"],["bezwzględny","bezlitosny"]],
[["sarcastic"],["sarkastyczny"]],
[["secretive"],["skryty","mający tajemnice"]],
[["self-assured"],["pewny siebie"]],
[["self-centered", "self-centred"],["egocentryczny"]],
[["self-confident"],["pewny siebie"]],
[["self-conscious"],["nieśmiały","skrępowany","samokrytyczny"]],
[["self-critical"],["samokrytyczny"]],
[["selfish"],["samolubny"]],
[["self-sufficient"],["samowystarczalny"]],
[["sensible"],["rozsądny"]],
[["sensitive"],["wrażliwy"]],
[["shrewd"],["bystry","sprytny"]],
[["shy"],["nieśmiały"]],
[["single-minded"],["zdeterminowany"]],
[["smug"],["zadowolony z siebie"]],
[["snobbish"],["snobistyczny"]],
[["sociable"],["towarzyski"]],
[["soft-hearted"],["gołebiego serca","pobłażliwy"]],
[["spiteful"],["złośliwy","mściwy"]],
[["spontaneous"],["spontaniczny"]],
[["stable"],["stabilny","zrównoważony"]],
[["steady"],["solidny"]],
[["straightforward"],["prostolinijny","bezpośredni"]],
[["strict"],["surowy"]],
[["strong-willed"],["uparty (dwa-słowa)"]],
[["stubborn"],["uparty"]],
[["superstitious"],["przesądny"]],
[["sympathetic"],["pełen współczucia / życzliwy"]],
[["tactful"],["taktowny"]],
[["talented"],["utalentowany"]],
[["talkative"],["rozmowny","gadatliwy"]],
[["temperamental"],["wybuchowy"]],
[["tender"],["czuły"]],
[["thorough"],["skrupulatny","dokładny"]],
[["thoughtful"],["zamyślony","życzliwy","myślący o innych"]],
[["thrifty"],["gospodarny","oszczędny"]],
[["tight-fisted"],["skąpy"]],
[["timid"],["nieśmiały"]],
[["tolerant"],["tolerancyjny"]],
[["tough-minded"],["twardy","bezkompromisowy"]],
[["truthful"],["prawdomówny"]],
[["two-faced"],["dwulicowy"]],
[["uncontrollable"],["nieokiełznany","niepohamowany"]],
[["understanding"],["wyrozumiały"]],
[["unpredictable"],["nieprzewidywalny"]],
[["unreliable"],["niesolidny","zawodny"]],
[["unscrupulous"],["pozbawiony skrupułów"]],
[["unstable"],["niestabilny"]],
[["vain"],["próżny"]],
[["versatile"],["wszechstronny"]],
[["vicious"],["bezwzględny","brutalny","bestialski"]],
[["vindictive"],["mściwy"]],
[["violent"],["agresywny","gwałtowny"]],
[["warm"],["ciepły"]],
[["weak-willed"],["mający słaby charakter"]],
[["well-balanced"],["zrównoważony"]],
[["well-mannered"],["dobrze-wychowany"]],
[["wise"],["mądry"]],
[["witty"],["dowcipny"]]],
// Eng-Eng Personality
[[["agnostic"], ["a person who believes that it is not possible to know whether God exists or not"]],
[["bully"], ["a person who uses their strength or power to frighten or hurt weaker people"]],
[["castaway"], ["a person whose ship has sunk and who has had to swim to a lonely place, usually an island"]],
[["conscientious objector"], ["a person who refuses to serve in the armed forces for moral reasons"]],
[["deserter"], ["a person who leaves the army without permission"]],
[["picket"], ["a person or group of people who stand outside the entrance to a building in order to protest about something"]],
[["proprietor"], ["the owner of a business, a hotel"]],
[["sadist"], ["a person who gets pleasure from hurting other people"]],
[["scapegoat"], ["a person who is blamed for something bad that somebody else has done or for some failure"]],
[["snob"], ["a person who admires people in the higher social classes too much and has no respect for people in the lower social classes"]],
[["spendthrift"], ["a person who spends too much money or who wastes money"]],
[["sponger"], ["a person who gets money, food, etc. from other people without doing anything for them or offering to pay"]],
[["squatter"], ["a person who is living in a building or on land without permission and without paying rent"]],
[["teetotaller"], ["a person who does not drink alcohol"]],
[["veteran"], ["a person who has been a soldier, sailor, etc. in a war"]],
[["big shot"], ["an important person"]],
[["blackleg"], ["a person who continues to work when the people they work with are on strike"]],
[["busybody"], ["a person who is too interested in what other people are doing"]],
[["chatterbox"], ["a person who talks a lot, especially a child"]],
[["daredevil"], ["a person who enjoys doing dangerous things, in a way that other people may think is stupid"]],
[["dark horse"], ["a person who does not tell other people much about their life, and who surprises other people by having interesting qualities"]],
[["gatecrasher"], ["a person who goes to a party or social event without being invited"]],
[["grass widow"], ["a woman whose husband is away from home for long periods of time"]],
[["guinea pig"], ["a person used in medical or other experiments"]],
[["lame duck"], ["a person or an organization that is not very successful and that needs help"]],
[["pain in the neck"], ["a person or thing that is very annoying"]],
[["road hog"], ["a person who drives in a dangerous way without thinking about the safety of other road users"]],
[["underdog"], ["a person that is thought to be in a weaker position than others and therefore not likely to be successful"]],
[["wet blanket"], ["a person who is not enthusiastic about anything and who stops other people from enjoying themselves"]],
[["whizz-kid"], ["a person who is very good and successful at something, especially at a young age"]],
[["adolescent"], ["a young person who is no longer a child but not yet an adult"]],
[["atheist"], ["doesn't believe in the existence of God"]],
[["benefactor"], ["helps people by giving them money or other aid"]],
[["bigot"], ["has strong and often unreasonable opinions and won't change them even when proved wrong"]],
[["charlatan"], ["falsely claims to have special skills or knowledge, especially in medicine"]],
[["civilian"], ["anyone who is not a soldier or any other member of the armed force"]],
[["genius"], ["has very great ability and intelligence"]],
[["hermit"], ["deliberately lives alone, away from other people and society"]],
[["infant"], ["a very young child or baby"]],
[["invigilator"], ["supervises people taking an examination and makes sure they don't cheat"]],
[["miser"], ["keeps count of every penny and really hates spending money"]],
[["patriot"], ["loves and supports his or her country and is willing to defend it"]],
[["penfriend"], ["someone you write to but may never have met. He or she often lives abroad."]],
[["sceptic"], ["does not readily believe claims or promises made by people"]],
[["tycoon"], ["a rich and powerful businessman or industrialist"]],
[["adjudicator"], ["judges a competition"]],
[["anarchist"], ["believes that all forms of government are oppressive and should be destroyed"]],
[["arbitrator"], ["is called in to settle a dispute between people or groups, usually at their request"]],
[["beneficiary"], ["receives money or property from a will"]],
[["bystander"], ["is present when something happens and sees it, but doesn't take part in it"]],
[["conscript"], ["is made to serve in the armed forces of a country whether he wishes or not"]],
[["crank"], ["has peculiar ideas and behaves in a strange way"]],
[["cynic"], ["thinks people tend to act only in their own interests and are motivated by selfishness"]],
[["degenerate"], ["behaves in a way that many people might find shocking or disgusting"]],
[["expatriate"], ["is someone living in a country that is not their own"]],
[["imposter"], ["dishonestly pretends to be someone else in order to get something he wants"]],
[["juvenile"], ["is a child or young person who is not yet old enough to be regarded as an adult"]],
[["loner"], ["prefers to spend time alone rather than in the company of other people"]],
[["nationalist"], ["is very proud of his country and believes it to be better than other countries"]],
[["scrounger"], ["tries to get food and money without working for them"]]],
// Family & Marriage
[[["extended family"],["rodzina wielopokoleniowa"]],
[["father figure"],["autorytet ojcowski"]],
[["great-grandparents"],["pradziadkowie"]],
[["grow up"],["dorastać"]],
[["grow"],["rosnąć, urosnąć"]],
[["step-parents"],["ojczym + macocha"]],
[["half-brother"],["przyrodni brat"]],
[["step-brother"],["przyrodni brat (no blood connections)"]],
[["half-sister"],["przyrodnia siostra"]],
[["step-sister"],["przyrodnia siostra (no blood connections)"]],
[["spouse"],["mąż lub żona"]],
[["groom", "bride"], ["pan młody"]],
[["best man"],["drużba"]],
[["acquaintance"] ["znajomy"]],
[["breadwinner"],["żywiciel rodziny"]],
[["bridesmaid"], ["druhna"]],
[["fiance"], ["narzeczony"]],
[["fiancee"], ["narzeczona"]],
[["foster"], ["przybrany"]],
[["bride"], ["panna młoda"]],
[["god"],["chrzestny (przedrostek)"]],
[["hen party"], ["wieczór panieński"]],
[["identical twins"], ["bliźnięta jednojajowe"]],
[["heir"], ["spadkobierca"]],
[["heritage"], ["dziedzictwo"]],
[["marital"],["małżeński"]],
[["marriage"],["małżeństwo"]],
[["upbringing"],["wychowanie"]],
[["in-laws"], ["powinowaci (krewni poprzez małżeństwo)"]],
[["reception"],["przyjęcie (wesele)"]],
[["stag night"],["wieczór kawalerski"]],
[["members"],["czlonkowie (e.g. of family)"]],
[["nuclear family"],["rodzina (father+mother+siblings)"]],
[["relative"],["krewny"]],
[["look after"],["opiekować się"]],
[["single-parent family"],["rodzic samotnie wychowujący dziecko"]],
[["spread out"],["rozproszyć się"]],
[["alike"],["jednakowy", "podobny"]],
[["bring up"],["wychować", "wychowywać"]],
[["close family"],["bliska rodzina"]],
[["distant relative"],["daleki krewny"]],
[["only child"],["jedynak"]],
[["relation"],["krewny", "krewność"]],
[["relationship"],["stosunki, relacje"]],
[["take after"],["być podobnym do"]],
[["family get-together"],["spotkanie rodzinne"]],
[["have a skeleton in the cupboard"],["mieć tajemnice"]],
[["on speaking terms"],["rozmawiać ze sobą"]],
[["run in the family"],["coś jest rodzinne/genetyczne"]],
[["see eye-to-eye"],["podzielać punkt widzenia"]],
[["the black sheep of the family"],["czarna owca rodziny"]],
[["wear the pants","wear the trousers"],["rządzić"]],
[["your own flesh and blood"],["ktoś z rodziny"]],
[["maternity"],["macierzyństwo"]],
[["paternity"],["ojcostwo"]],
[["maternal"],["macierzyński"]],
[["paternal"],["ojcowski"]],
[["miscarriage"],["poronienie"]],
[["recuperation"],["powrót do zdrowia"]],
[["brother-in-law"],["szwagier"]],
[["mother-in-law"],["teściowa"]],
[["niece"],["siostrzenica, bratanica"]],
[["nephew"],["siostrzeniec, bratanek"]],
[["origin"],["pochodzenie"]],
[["family traits"],["cechy rodzinne (genetyczne)"]],
[["ancestor"],["przodek"]],
[["descendant"],["potomek"]],
[["sibling"],["rodzeństwo"]]],
// Jobs
[[["voluntary"], ["ochotniczo", "dobrowolnie"]],
[["bonus"],["premia"]],
[["monotonous"],["jednostajny"]],
[["motivating"],["motywujący"]],
[["training"],["szkolenie"]],
[["unpaid"],["nieodpłatnie"]],
[["wage"],["tygodniówka"]],
[["position"],["stanowisko"]],
[["quit"],["odejść"]],
[["rewarding"],["satysfakcjonujący"]],
[["salary"],["pensja"]],
[["skills"],["umiejętności"]],
[["staff"],["personel"]],
[["tedious"],["nużący"]],
[["perk"],["dodatek"]],
[["benefits"],["dodatki","świadczenia socjalne"]],
[["hire"],["zatrudnić", "wynająć"]],
[["hours"],["godziny pracy"]],
[["impatient"],["niecierpliwy"]],
[["intern"],["stażysta"]],
[["internship"],["staż"]],
[["irrelevant"],["nieistotny"]],
[["demanding"],["wymagający"]],
[["demoralizing"],["demoralizujący"]],
[["unemployment"],["bezrobocie"]],
[["commute"],["dojeżdżać do pracy"]],
[["pension"],["emerytura"]],
[["high-flyer"],["młody ambitny"]],
[["on welfare"],["na zasiłku"]],
[["unsociable hours"],["nietypowe godziny (pracy)"]],
[["night shift"],["nocna zmiana"]],
[["carry the can for sb"],["płacić za winy kogoś innego"]],
[["work overtime"],["pracować w nadgodzinach"]],
[["white collar worker"],["pracownik umysłowy"]],
[["incentive"],["premia, motywacja"]],
[["semi-skilled"],["przyuczony, bez pełnych kwalifikacji"]],
[["fixed income"],["stały dochód"]],
[["hand in your notice"],["wręczyć wypowiedzenie"]],
[["sickness benefit"],["zasiłek chorobowy"]],
[["dismiss"],["zwolnić"]],
[["employ"],["zatrudnić"]],
[["be out of work"],["nie mieć pracy"]],
[["be responsible for"],["być odpowiedzialnym za coś"]],
[["job security"],["pewność stałego zatrudnienia"]],
[["employee"],["pracownik"]],
[["career ladder"],["szczeble kariery"]],
[["challenging"],["wymagający, ambitny"]],
[["clock off"],["wyjść z pracy","odbić kartę zegarową"]],
[["colleague"],["kolega z pracy"]],
[["compassionate leave"],["urlop okolicznościowy"]],
[["co-worker"],["współpracownik"]],
[["deal with"],["zajmować się czymś"]],
[["events management"],["organizacja imprez"]],
[["fixed-term contract"],["umowa na czas określony"]],
[["freelance contract"],["umowa zlecenie"]],
[["full-time contract"],["umowa o pracę na pełen etat"]],
[["full-time occupation"],["zajęcie na pełen etat"]],
[["get a rise"],["dostać podwyżkę"]],
[["get promoted"],["awansować"]],
[["part-time contract"],["umowa na część etatu"]],
[["permanent contract"],["umowa na czas nieokreślony"]],
[["repetitive"],["powtarzalny, monotonny"]],
[["resign"],["odejść z pracy, zrezygnować"]],
[["self-employed"],["samozatrudniony (self-...)"]],
[["sick leave"],["zwolnienie lekarskie"]],
[["temporary contract"],["umowa na czas określony"]],
[["timetable"],["plan lekcji, zajęć"]],
[["unpaid leave"],["urlop bezpłatny"]],
[["work experience"],["doświadczenie zawodowe"]],
[["employer"],["pracodawca"]],
[["be sacked"],["być wylanym"]],
[["ability"],["umiejętność"]],
[["workforce"],["zatrudnieni"]],
[["academic achievement"], ["osiągnięcia naukowe"]],
[["apply for"], ["starać się o (pracę)"]],
[["be fired"],["zostać zwolnionym"]],
[["be off work"],["mieć wolne w pracy"]],
[["be made redundant"],["zostać zredukowanym"]],
[["good prospects"],["dobre perspektywy"]],
[["job-hunting"],["poszukiwanie pracy"]],
[["maternity leave"],["urlop macierzyński"]],
[["paternity leave"],["urlop ojcowski"]],
[["be in charge of"],["być odpowiedzialnym za coś, zarządzać"]],
[["be laid off"],["być zwolnionym (możliwe, że tymczasowo)"]]]

];


let sets = all_sets[0];
let done = [];
let wranswer = 0;

function chck () {
    let question;
    inpt = document.getElementById("inpt").value;
    question_num = document.getElementById("num").innerHTML;
    inpt = inpt.toUpperCase();
    for (let i=0; i<=sets[question_num][0].length-1; i++) {
        question = sets[question_num][0][i].toUpperCase();
        if (inpt == question) {
            document.getElementById("ans").style = "color:green"
            document.getElementById("ans").innerHTML = "Correct"; 
            console.log(`${inpt} == ${question}`);
            if (wranswer == 0) {
                done.push(question_num);
            }
            setTimeout(questGen, 2000);
            return;

        }
    }
    if (wranswer == 0) {
        wranswer = 1;
        document.getElementById("ans").style = "color:red"
        document.getElementById("inpt").value = "";
        document.getElementById("ans").innerHTML = `Incorrect, write it again<br>
        ${sets[question_num][0][0][0].toUpperCase() + sets[question_num][0][0].substr(1)}`; 
        console.log(`${inpt} != ${question}`);

        // setTimeout(questGen, 5000);
    }
}

function switcher(who) {
    if (sets != all_sets[who]) sets = all_sets[who];
    done = [];
    document.getElementById("inpt").style = "display:1";
    questGen();
}

function deploy_div() {
	document.getElementById("menu").innerHTML="";
	for (let i=0; i<titles.length; i++) {
		document.getElementById("menu").innerHTML += `<button onclick="switcher(${i})">${titles[i]}</button>`
	}
}

function press () {
    if (event.keyCode == 13) {
        chck();
    }
}

function youreDone () {
    document.getElementById("questionBox").innerHTML = "You've finished";
    document.getElementById("ans").innerHTML = "";
    document.getElementById("ratio").innerHTML = `${done.length}/${sets.length}`;
    document.getElementById("inpt").style = "display:none";
}

function inDone(num) {
    for (let i=0; i<done.length; i++) {
        if (done[i] == num) {
            return true;
        }
    }
    return false;
}

function openNav() {
	deploy_div();
	document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

function questGen () {
    if (done.length == sets.length) {
        youreDone();
    }
    else {
        wranswer = 0;
        document.getElementById("ans").innerHTML = "";
        document.getElementById("ratio").innerHTML = `${done.length}/${sets.length}`;
        document.getElementById("inpt").value = "";
        let question_num;
        do {
            question_num = Math.floor(Math.random() * sets.length);
        } while (inDone(question_num))
        let tmpStr = "";

        for (let i=0; i<sets[question_num][1].length; i++) {
            if (i > 0) tmpStr += ", ";
            tmpStr += sets[question_num][1][i][0].toUpperCase() + sets[question_num][1][i].substr(1);
        }

        document.getElementById("questionBox").innerHTML=tmpStr;   
        document.getElementById("num").innerHTML=question_num;  
    }
}