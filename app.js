const rulebook = [
 { title: "The field", category: "Field & Game Setup", tags: "field dimensions lines end zone hash marks", text: "An NFL field is 120 yards long by 53⅓ yards wide, including two 10-yard end zones. Yard lines are marked every 5 yards; the short hash marks are 70 feet, 9 inches apart. Goalposts sit on the end line, centered on each end zone." },
 { title: "Players on the field", category: "Field & Game Setup", tags: "players team 11 too many substitution", text: "Each team may have 11 players on the field for a down. If a team has more than 11 when the ball is snapped, it is a five-yard penalty for too many players. Substitutes must be off the field before the snap." },
 { title: "Game length", category: "Field & Game Setup", tags: "quarters duration clock time", text: "An NFL game has four 15-minute quarters. The second and fourth quarters end with a period-ending play; the first and third quarters end when time expires, with the teams changing ends. The clock stops and starts under specific rules." },
 { title: "Halftime and quarter breaks", category: "Field & Game Setup", tags: "halftime break intermission quarter", text: "Halftime is 13 minutes in a standard NFL game, with longer halftime for the Super Bowl. The break between the first and second quarters and between the third and fourth is two minutes, subject to broadcast timing." },
 { title: "Play clock", category: "Field & Game Setup", tags: "play clock 40 25 delay", text: "The offense generally has 40 seconds to snap the ball after the previous play ends. After certain administrative stoppages, the play clock is set to 25 seconds. Failing to snap in time is delay of game, a five-yard penalty." },
 { title: "Timeouts", category: "Field & Game Setup", tags: "timeout timeouts stoppage coach", text: "Each team gets three charged timeouts per half. Unused first-half timeouts do not carry over. A team cannot call a timeout when it has none remaining; an invalid request can be ignored or penalized depending on the situation." },
 { title: "Coin toss", category: "Field & Game Setup", tags: "coin toss kickoff receive choose defer", text: "Before the game, the visiting captain calls the coin toss. The winner chooses to kick, receive, defend a goal, or defer the choice to the second half. If the choice is deferred, the other team chooses at the start of the game." },
 { title: "Possessions and change of ends", category: "Field & Game Setup", tags: "possession change ends kickoff", text: "Teams switch which goal they defend after the first and third quarters. Possession changes through a punt, kickoff, turnover, score, or turnover on downs; the next play follows the resulting spot and game situation." },
 { title: "The four downs", category: "Downs & Possession", tags: "down downs four fourth", text: "The offense has four downs (plays) to advance the ball at least 10 yards. The line to gain is usually 10 yards beyond the ball's starting spot, except near the opponent's goal line. The offense may run, pass, kick, or go for it." },
 { title: "First down", category: "Downs & Possession", tags: "first down line gain 10 yards", text: "A new series of four downs is awarded when the ball reaches or crosses the line to gain while live. The ball's position is measured at its forward-most point when it becomes dead. Goal-to-go series begin when the line to gain would be the goal line." },
 { title: "Turnover on downs", category: "Downs & Possession", tags: "turnover downs fourth fail", text: "If the offense fails to reach the line to gain by the end of fourth down, the defense takes possession at the dead-ball spot. Teams commonly punt or attempt a field goal on fourth down instead of risking this turnover." },
 { title: "Spotting the ball", category: "Downs & Possession", tags: "spot ball forward progress mark", text: "Officials spot the ball where the runner's forward progress is stopped or where the ball becomes dead, whichever applicable rule controls. The nose of the ball determines whether it reached a line to gain or goal line." },
 { title: "Forward progress", category: "Downs & Possession", tags: "forward progress stopped push backward", text: "Forward progress is the furthest point a runner advances before being driven backward by a defender. When the runner is held up and clearly cannot advance, officials can stop the play and award that forward spot." },
 { title: "Down by contact", category: "Downs & Possession", tags: "down contact knee elbow ground", text: "An NFL runner is down when a body part other than a hand or foot touches the ground while held or touched by an opponent. A runner who falls without opponent contact may get up and continue; a quarterback sliding feet-first gives himself up." },
 { title: "Fumbles", category: "Downs & Possession", tags: "fumble loose ball drop possession", text: "A fumble is a loss of possession other than by passing, kicking, or handing the ball. A live fumble can be recovered and advanced by either team, subject to special last-two-minutes and fourth-down restrictions on who may advance an offensive fumble." },
 { title: "The two-minute fumble rule", category: "Downs & Possession", tags: "fumble two minute fourth down advance", text: "On fourth down or after the two-minute warning in either half, if the offense fumbles, only the fumbler may recover and advance it. A teammate may recover, but the ball is dead at the recovery spot. This prevents a teammate from intentionally fumbling forward." },
 { title: "Fair catch", category: "Kicking & Returns", tags: "fair catch signal punt kickoff return", text: "A returner can signal for a fair catch by clearly waving one arm above the head before catching a kick. The ball is dead when caught, and the returner may not advance it. Contacting a fair-catch receiver before or during the catch is a foul." },
 { title: "Punts", category: "Kicking & Returns", tags: "punt punting fourth down kick", text: "A punt is a kick made by dropping the ball and kicking it before it touches the ground. It is usually used on fourth down to move the opponent farther from the goal. The receiving team may return a live punt unless a fair catch is made." },
 { title: "Kickoff", category: "Kicking & Returns", tags: "kickoff kick start game half score", text: "A kickoff starts each half and follows most scoring plays. In the 2025 NFL format, the ball is kicked from the kicking team's 35-yard line and players line up in a prescribed setup zone; touchbacks and return placement depend on where the kick lands." },
 { title: "Kickoff touchback", category: "Kicking & Returns", tags: "touchback kickoff end zone return", text: "A kickoff that becomes dead in the end zone without being returned is a touchback. Under the NFL's 2025 dynamic kickoff rules, touchback placement depends on how the kick enters the end zone: a kick landing in the landing zone and then reaching the end zone differs from one kicked directly there." },
 { title: "Punt touchback", category: "Kicking & Returns", tags: "touchback punt end zone", text: "A punt that goes into the receiving team's end zone, or is downed there, results in a touchback. The receiving team begins its possession at the applicable touchback spot, generally its 20-yard line." },
 { title: "Onside kick", category: "Kicking & Returns", tags: "onside kick recover kickoff fourth quarter", text: "A kicking team may attempt an onside kick to regain possession. The kick must travel the required 10 yards before the kicking team can touch it, unless the receiving team touches it first. NFL kickoff alignment and onside-kick declaration rules apply." },
 { title: "Kicking-team recovery", category: "Kicking & Returns", tags: "kick recovery kicking team punt kickoff", text: "On a free kick, the kicking team generally cannot touch or recover the ball until it has traveled 10 yards or the receiving team touches it. On a scrimmage kick, different rules apply; the kicking team cannot advance its own kick beyond the line of scrimmage." },
 { title: "Touchdown", category: "Scoring", tags: "touchdown score 6 points goal line", text: "A touchdown is worth six points. A player scores by possessing the ball while it breaks the plane of the opponent's goal line, or by completing a catch in the end zone under catch rules. The scoring team then tries a one- or two-point conversion." },
 { title: "Field goal", category: "Scoring", tags: "field goal 3 points upright kick", text: "A successful field goal is worth three points. The ball must pass above the crossbar and between the uprights. If missed, the opponent takes possession at the spot of the kick or at its own 20-yard line if the kick was from beyond that point." },
 { title: "Extra point", category: "Scoring", tags: "extra point point after touchdown PAT 1 point", text: "After a touchdown, the scoring team may attempt a one-point kick from the 15-yard line. The snap is from the 15, with the holder typically setting up farther back. A successful kick is worth one point." },
 { title: "Two-point conversion", category: "Scoring", tags: "two point conversion 2 points try", text: "After a touchdown, a team may run or pass from the opponent's 2-yard line for a two-point conversion. The try ends when either team scores, the ball is dead, or possession changes. Defensive returns of a failed try can score two points." },
 { title: "Safety", category: "Scoring", tags: "safety 2 points own end zone", text: "A safety scores two points for the defense when the offense causes the ball to become dead in its own end zone, subject to exceptions. The team that gave up the safety then free-kicks the ball to its opponent." },
 { title: "How a catch is completed", category: "Passing & Receiving", tags: "catch possession feet ground receiver complete", text: "To complete a catch in bounds, a receiver must control the ball, get both feet or another body part down in bounds, and perform an act common to the game or maintain control long enough. If the receiver goes to the ground, control must survive contact with the ground." },
 { title: "Catch versus interception", category: "Passing & Receiving", tags: "catch interception defense possession", text: "The catch requirements apply to both teams. A defender who secures a legal catch of the opponent's forward pass gains possession and makes an interception. The defender can usually return it until tackled, out of bounds, or otherwise down." },
 { title: "Forward pass", category: "Passing & Receiving", tags: "forward pass throw line scrimmage", text: "A team may throw one forward pass on a down, and it must be released from behind the line of scrimmage. A pass that crosses the line and is then thrown forward is illegal. A backward pass may be made from anywhere." },
 { title: "Backward pass and lateral", category: "Passing & Receiving", tags: "backward pass lateral pitch behind", text: "A backward pass travels parallel to or toward the passer's own goal line. It may be thrown or pitched from anywhere and can be caught by either team. If it hits the ground, it remains a live ball, unlike an incomplete forward pass." },
 { title: "Incomplete pass", category: "Passing & Receiving", tags: "incomplete pass clock stops ground", text: "A forward pass is incomplete if it hits the ground before a player completes a catch, goes out of bounds uncaught, or is legally touched by an ineligible player. The ball returns to the previous spot and the game clock generally stops." },
 { title: "Pass interference", category: "Passing & Receiving", tags: "pass interference PI defensive offensive contact", text: "Pass interference is significant illegal contact that hinders an eligible player's opportunity to catch a forward pass. Defensive pass interference is generally a spot foul, capped at the defense's 1-yard line. Offensive pass interference is 10 yards from the previous spot." },
 { title: "Defensive holding", category: "Passing & Receiving", tags: "defensive holding receiver 5 yards automatic first down", text: "Defensive holding is illegal grabbing or restricting an opponent other than the runner. It is generally a five-yard penalty and an automatic first down when committed before the pass is thrown, subject to the rule's enforcement details." },
 { title: "Intentional grounding", category: "Passing & Receiving", tags: "intentional grounding throw away pressure tackle box", text: "A passer may not intentionally throw an incomplete pass to avoid a likely loss of yardage unless an eligible receiver has a realistic chance to catch it or the passer is outside the tackle box and the pass reaches the line of scrimmage. The penalty is loss of down and loss of five yards from the spot of the foul; a passer in the end zone can cause a safety." },
 { title: "Eligible receivers", category: "Passing & Receiving", tags: "eligible receiver jersey number lineman", text: "Eligible receivers include players on the ends of the line and players legally positioned in the backfield, subject to numbering and reporting rules. Offensive linemen wearing ineligible numbers may not catch a forward pass unless they report eligible and line up legally." },
 { title: "Ineligible player downfield", category: "Passing & Receiving", tags: "ineligible downfield lineman pass", text: "On a legal forward pass, an ineligible offensive player generally cannot be more than one yard beyond the line of scrimmage before the pass is thrown. The penalty is five yards from the previous spot." },
 { title: "Roughing the passer", category: "Passing & Receiving", tags: "roughing passer quarterback hit penalty", text: "Defenders must avoid prohibited contact with a passer after the ball is released, including certain forcible hits to the head, neck, or lower body and avoidable late contact. Roughing the passer is generally 15 yards and an automatic first down." },
 { title: "Intentional grounding exceptions", category: "Passing & Receiving", tags: "grounding spike clock spike exception", text: "A passer may legally throw the ball away when outside the tackle box if it reaches or crosses the line of scrimmage. A spike immediately after receiving the snap is an intentional incomplete pass exception used to stop the clock." },
 { title: "False start", category: "Pre-Snap & Formation", tags: "false start offense movement snap 5 yards", text: "After taking a set position, an offensive player may not make a sudden movement that simulates the start of the play. A false start is a five-yard penalty and the ball remains dead; the play clock is reset." },
 { title: "Offside", category: "Pre-Snap & Formation", tags: "offside defense line scrimmage snap", text: "A defender is offside when any part of the player is beyond the neutral zone when the ball is snapped. It is a five-yard penalty. If the defender gets back onside before the snap and does not cause an offensive player to react, there may be no foul." },
 { title: "Neutral zone infraction", category: "Pre-Snap & Formation", tags: "neutral zone infraction encroachment defense", text: "A neutral zone infraction occurs when a defender enters the neutral zone and causes an offensive player to react, or has an unabated path to the quarterback. The play is blown dead and the penalty is five yards." },
 { title: "Encroachment", category: "Pre-Snap & Formation", tags: "encroachment defender contact offensive player", text: "Encroachment is a defender contacting an offensive player or the ball before the snap. The ball is dead and the penalty is five yards. It is distinct from offside, where a defender crosses the neutral zone without triggering the same immediate contact or reaction." },
 { title: "Illegal formation", category: "Pre-Snap & Formation", tags: "formation seven line scrimmage illegal", text: "At the snap, the offense must have at least seven players on the line of scrimmage, and eligible receivers must be positioned legally at the ends or in the backfield. An illegal formation is usually a five-yard penalty." },
 { title: "Motion and shifts", category: "Pre-Snap & Formation", tags: "motion shift players moving snap", text: "One offensive player may be in motion at the snap if moving parallel to or away from the line of scrimmage. After a shift, all players must be set for at least one second before the snap. Multiple players moving at the snap is illegal motion." },
 { title: "Delay of game", category: "Pre-Snap & Formation", tags: "delay game play clock snap 5 yards", text: "If the offense does not snap the ball before the play clock expires, it is delay of game, a five-yard penalty. The official's visible signal or whistle controls; the ball must be snapped before the clock reaches zero." },
 { title: "Illegal substitution", category: "Pre-Snap & Formation", tags: "substitution illegal 12 players huddle", text: "A team must complete substitutions before the snap. A substitute who enters and does not leave, or a team that has more than 11 players at the snap, can be penalized. The defense is given a reasonable chance to match offensive substitutions." },
 { title: "Holding", category: "Fouls & Penalties", tags: "holding offensive defensive block grab", text: "Holding is illegally grabbing or restricting an opponent who is not the runner. Offensive holding is generally 10 yards from the previous spot. Defensive holding is generally five yards and an automatic first down, with specific enforcement depending on the play." },
 { title: "False start versus offsides", category: "Fouls & Penalties", tags: "difference false start offside penalty", text: "A false start is an offensive movement foul before the snap that simulates the start of the play; the ball is dead and the usual penalty is five yards. Offside is a defender in the neutral zone at the snap; the play may continue unless the foul causes an immediate dead ball." },
 { title: "Facemask", category: "Fouls & Penalties", tags: "facemask grab helmet 15 yards", text: "Grasping and twisting, turning, or pulling an opponent's face mask is prohibited. The penalty is 15 yards; a flagrant act can lead to disqualification. Incidental contact without grasping is not the same foul." },
 { title: "Unnecessary roughness", category: "Fouls & Penalties", tags: "unnecessary roughness late hit defenseless 15 yards", text: "Unnecessary roughness covers prohibited violent or late contact, including certain hits on defenseless players. It is generally a 15-yard penalty and may result in disqualification if flagrant." },
 { title: "Horse-collar tackle", category: "Fouls & Penalties", tags: "horse collar tackle back shoulder pads", text: "A defender may not grab the inside back collar of the shoulder pads or jersey, or the nameplate area, and pull a runner down. The horse-collar tackle is a 15-yard personal foul, with listed exceptions such as a runner in the tackle box." },
 { title: "Taunting", category: "Fouls & Penalties", tags: "taunting unsportsmanlike conduct celebration", text: "Taunting an opponent or engaging in prohibited unsportsmanlike conduct is a 15-yard penalty. Two unsportsmanlike conduct fouls by one player in the same game result in disqualification." },
 { title: "Roughing the kicker", category: "Fouls & Penalties", tags: "roughing kicker punter field goal contact", text: "A defender may not run into or rough a kicker who is protected by the rule after a kick. Running into the kicker is generally five yards; roughing the kicker is 15 yards and an automatic first down. Exceptions apply if the defender touches the kick or is blocked into the kicker." },
 { title: "Penalty enforcement", category: "Fouls & Penalties", tags: "penalty yards spot foul decline offset", text: "The offended team may generally accept or decline a penalty. Many accepted fouls are enforced from the previous spot; some are spot fouls or carry automatic first downs. Live-ball fouls by both teams often offset and replay the down, with rule-specific exceptions." },
 { title: "Out of bounds", category: "Clock & Reviews", tags: "out bounds sideline clock stop", text: "A player is out of bounds when touching the sideline or anything beyond it. The game clock stops when a runner goes out, but when it restarts depends on the time remaining and whether the runner went out by force or on their own." },
 { title: "Two-minute warning", category: "Clock & Reviews", tags: "two minute warning stop clock half", text: "The two-minute warning is an automatic timeout at the first dead ball when two minutes or less remain in each half. It affects clock administration and specific rules, including the offensive fumble advancement restriction." },
 { title: "Clock after a first down", category: "Clock & Reviews", tags: "clock first down in bounds two minutes", text: "When a runner is tackled in bounds after gaining a first down, the game clock generally keeps running, except in the final two minutes of the first half and final five minutes of the second half, when it stops to award the new series." },
 { title: "Instant replay review", category: "Clock & Reviews", tags: "review replay challenge coach booth", text: "The replay system can review specified plays, including scoring plays and turnovers. A coach may challenge certain reviewable rulings before the cutoff, using a timeout; a team needs a timeout to challenge. The replay official initiates reviews in designated late-game situations." },
 { title: "Coach's challenge", category: "Clock & Reviews", tags: "challenge red flag coach replay", text: "A coach signals a challenge with a red flag before the next snap and before the play becomes non-reviewable. If the ruling is changed, the team generally retains its timeout; if it stands or is confirmed, the team loses one. Some plays are not reviewable." },
 { title: "What replay can change", category: "Clock & Reviews", tags: "replay review possession catch spot", text: "Replay can change reviewable facts such as possession, catch status, whether a player was in bounds, the spot of the ball, and whether a score occurred. The video must provide clear and obvious evidence to overturn the on-field ruling." },
 { title: "Overtime", category: "Clock & Reviews", tags: "overtime OT regular season playoffs rules", text: "NFL overtime rules differ between regular-season and postseason games. Both teams are guaranteed an opportunity to possess the ball in overtime, even if the first team scores a touchdown; the exception is a defensive score on the opening possession. Regular-season overtime is limited to 10 minutes; postseason continues with additional periods until a winner is determined." },
 { title: "Overtime coin toss", category: "Clock & Reviews", tags: "overtime coin toss receive possession", text: "A coin toss determines the first choice in overtime. Teams may choose to receive, kick, defend a goal, or defer where permitted. Both teams' guaranteed-possession opportunity means a first-drive touchdown no longer automatically ends overtime." },
 { title: "Safety kick", category: "Kicking & Returns", tags: "safety free kick punt drop kick", text: "After a safety, the team that conceded points puts the ball in play with a free kick from its 20-yard line. The kick may be a punt, drop kick, or place kick using a holder; a tee is not allowed for this safety kick." },
 { title: "Illegal forward pass", category: "Passing & Receiving", tags: "illegal forward pass second pass beyond line", text: "A forward pass is illegal if thrown by a player beyond the line of scrimmage, if it is a second forward pass on the same down, or if it is thrown after a change of possession. The usual penalty is five yards plus loss of down." },
 { title: "Touching a forward pass", category: "Passing & Receiving", tags: "touch pass tip eligible ineligible", text: "Any eligible player may touch a forward pass after it is released. An ineligible offensive player who touches a forward pass before it has been touched by a defender commits illegal touching, usually a five-yard penalty from the previous spot." },
 { title: "Defenseless player", category: "Fouls & Penalties", tags: "defenseless receiver hit helmet targeting", text: "NFL rules protect players in defenseless postures, including a receiver attempting to catch a pass, a passer after release, and a returner focused on a kick. Prohibited forcible contact to the head or neck can draw a 15-yard personal foul and possible disqualification." },
 { title: "Jersey numbers", category: "Pre-Snap & Formation", tags: "jersey number eligible receiver report", text: "NFL jersey-number ranges help identify eligible and ineligible receivers. Players with normally ineligible numbers can report eligible to the referee and must line up accordingly. An eligible receiver wearing an unusual number must report when required." },
 { title: "End zone possession", category: "Scoring", tags: "end zone catch touchdown possession goal line", text: "A receiver who catches the ball in the end zone must satisfy the catch requirements in bounds. A runner scores when the ball breaks the plane of the goal line while the runner has possession; the player's body does not need to enter the end zone." },
 { title: "Blocked kicks", category: "Kicking & Returns", tags: "blocked punt field goal scrimmage kick", text: "A blocked scrimmage kick remains live if it stays behind the line of scrimmage. If it crosses the line and returns behind it, either team may recover, but only the receiving team may advance it. A blocked kick recovered by the offense can be advanced." },
 { title: "Declaring a player down", category: "Downs & Possession", tags: "give self up slide knee down", text: "A runner may end the play by giving himself up, including a feet-first slide. The ball is dead at the spot where the slide begins. A quarterback who slides is protected from being hit after giving himself up." },
 { title: "Illegal contact", category: "Passing & Receiving", tags: "illegal contact five yards beyond line receiver", text: "Beyond five yards from the line of scrimmage, a defender may not initiate prohibited contact that restricts a receiver before the pass is thrown. Illegal contact is generally five yards and an automatic first down." },
 { title: "Touchback after an interception", category: "Downs & Possession", tags: "interception touchback end zone kneel", text: "If a defender intercepts a pass in the end zone and downs the ball there, the result is a touchback. If the defender runs it out and is tackled, the ball is spotted where the return ends." },
 { title: "The line of scrimmage", category: "Pre-Snap & Formation", tags: "line scrimmage neutral zone ball snap", text: "The line of scrimmage is the yard line passing through the point of the ball nearest each team's goal line. The neutral zone is the length of the ball; players may not enter it illegally before the snap." },
 { title: "Game-ending clock rules", category: "Clock & Reviews", tags: "clock run out game end kneel", text: "A half can end on a down in progress when time expires, subject to rules that extend a period for certain accepted penalties. A team leading late may kneel to use game time while avoiding a risky play; the play clock still applies." },
 { title: "Penalty on a scoring play", category: "Fouls & Penalties", tags: "penalty touchdown score extra point enforcement", text: "Penalty enforcement after a touchdown depends on who fouled and when. Many defensive fouls on a scoring play are enforced on the try or kickoff, while some fouls can negate the score. The referee announces the specific enforcement choice." },
 { title: "Touching a kick", category: "Kicking & Returns", tags: "kick touching muff punt receiver", text: "A kick becomes eligible for recovery by the kicking team after it has traveled the required distance or been touched by the receiving team. A receiving-team player who touches but fails to secure a punt has muffed it; the ball remains live." },
 { title: "The pocket", category: "Passing & Receiving", tags: "pocket tackle box grounding quarterback", text: "For intentional-grounding purposes, the tackle box is the area between the outside shoulders of the offensive tackles at the snap, extending backward. A passer outside it may throw the ball away if it reaches the line of scrimmage." },
 { title: "Dead-ball fouls", category: "Fouls & Penalties", tags: "dead ball foul after play whistle", text: "A dead-ball foul occurs after the play has ended or before the next snap. The penalty is usually enforced from the succeeding spot and does not change the down. Personal fouls after a play can add 15 yards." },
 { title: "Blocking", category: "Fouls & Penalties", tags: "block blocking illegal block back low", text: "Blocking is regulated by where contact occurs and how it is made. Prohibited actions include holding, certain blocks below the waist, blindside blocks, and blocks in the back outside permitted circumstances. The penalty depends on the foul and location." },
 { title: "Catch at the sideline", category: "Passing & Receiving", tags: "sideline catch feet in bounds", text: "An NFL receiver needs two feet down in bounds, or another body part such as a knee, after gaining control. A receiver who catches the ball airborne may establish possession by getting both feet down before going out." },
 { title: "Loose ball out of bounds", category: "Downs & Possession", tags: "loose fumble out bounds sideline", text: "A fumble that goes out of bounds belongs to the fumbling team at the out-of-bounds spot, except when it goes forward out of bounds inside the opponent's end zone, which is a touchback. Special end-of-half restrictions can affect advancement." },
 { title: "Special teams substitutions", category: "Pre-Snap & Formation", tags: "special teams substitute kickoff formation", text: "Kickoff and scrimmage-kick formations have additional alignment requirements. Players must be onside and meet the prescribed spacing rules at the kick. Illegal formations can result in a five-yard penalty." },
 { title: "Scoring by the defense on a try", category: "Scoring", tags: "defensive conversion return interception two points", text: "During a conversion try, the defense may score two points by returning a turnover or a blocked kick to the opponent's end zone. The try is live after a change of possession until the ball is dead or a score occurs." },
 { title: "One-point safety on a try", category: "Scoring", tags: "one point safety conversion try", text: "A one-point safety can occur during a conversion try if either team causes the ball to become dead in its own end zone under the applicable scoring rules. This unusual play is worth one point to the opponent." },
 { title: "Spot foul", category: "Fouls & Penalties", tags: "spot foul pass interference enforcement", text: "A spot foul is enforced from the location of the foul rather than the previous spot. Defensive pass interference is generally enforced at the foul spot, with a maximum penalty of placing the ball at the 1-yard line." },
 { title: "Automatic first down penalties", category: "Fouls & Penalties", tags: "automatic first down penalty defensive", text: "Several defensive penalties award an automatic first down regardless of the yards gained, including defensive holding, illegal contact, roughing the passer, and most pass interference. The referee's announcement states the enforcement." },
];


const categoryOrder = ["All rules", "Field & Game Setup", "Downs & Possession", "Kicking & Returns", "Scoring", "Passing & Receiving", "Pre-Snap & Formation", "Fouls & Penalties", "Clock & Reviews"];
const categoryIcons = { "All rules": "✳", "Field & Game Setup": "▦", "Downs & Possession": "↗", "Kicking & Returns": "⌁", Scoring: "+", "Passing & Receiving": "↝", "Pre-Snap & Formation": "Ⅱ", "Fouls & Penalties": "⚑", "Clock & Reviews": "◷" };
const messages = document.querySelector("#messages");
const input = document.querySelector("#question-input");
const form = document.querySelector("#question-form");
const categoryNav = document.querySelector("#category-nav");
const searchInput = document.querySelector("#rule-search");
const sidebar = document.querySelector("#sidebar");
let activeCategory = "All rules";


function renderCategories(query = "") {
 const normalized = query.trim().toLowerCase();
 const filtered = rulebook.filter((rule) => {
   const categoryMatches = activeCategory === "All rules" || rule.category === activeCategory;
   const textMatches = !normalized || `${rule.title} ${rule.category} ${rule.tags} ${rule.text}`.toLowerCase().includes(normalized);
   return categoryMatches && textMatches;
 });
 document.querySelector("#rule-count").textContent = filtered.length;
 categoryNav.replaceChildren();


 if (normalized) {
   const label = document.createElement("div");
   label.className = "category-label";
   label.textContent = `${filtered.length} MATCH${filtered.length === 1 ? "" : "ES"}`;
   categoryNav.append(label);
   filtered.forEach((rule) => {
     const button = document.createElement("button");
     button.className = "category-link";
     button.type = "button";
     button.innerHTML = `<span>${escapeHtml(rule.title)}</span><span class="category-total">↗</span>`;
     button.addEventListener("click", () => ask(rule.title));
     categoryNav.append(button);
   });
   if (!filtered.length) categoryNav.innerHTML = '<div class="empty-state">No rules match that search.</div>';
   return;
 }


 categoryOrder.forEach((category) => {
   const count = category === "All rules" ? rulebook.length : rulebook.filter((rule) => rule.category === category).length;
   const button = document.createElement("button");
   button.className = `category-link${category === activeCategory ? " active" : ""}`;
   button.type = "button";
   button.setAttribute("aria-current", category === activeCategory ? "page" : "false");
   button.innerHTML = `<span>${categoryIcons[category]} &nbsp; ${escapeHtml(category)}</span><span class="category-total">${count}</span>`;
   button.addEventListener("click", () => {
     activeCategory = category;
     renderCategories(searchInput.value);
   });
   categoryNav.append(button);
 });
}


function escapeHtml(value) {
 return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}


function addMessage({ role, text, rules = [] }) {
 const wrapper = document.createElement("article");
 wrapper.className = `message ${role}`;
 const now = new Date();
 const time = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
 const cards = rules.length ? `<div class="answer-list">${rules.map((rule) => `<section class="answer-card"><h3>${escapeHtml(rule.title)}</h3><p>${escapeHtml(rule.text)}</p><div class="answer-category">${escapeHtml(rule.category)}</div></section>`).join("")}</div>` : "";
 wrapper.innerHTML = `<div class="message-mark">${role === "assistant" ? "G" : "YOU"}</div><div class="message-content"><div class="message-meta"><span>${role === "assistant" ? "RULEBOOK" : "YOUR QUESTION"}</span><time>${time}</time></div><div class="message-text">${escapeHtml(text)}</div>${cards}</div>`;
 messages.append(wrapper);
 messages.scrollTop = messages.scrollHeight;
}


function findRules(question) {
 const terms = question.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter((term) => term.length > 2 && !["the", "and", "for", "does", "what", "when", "how", "can", "are", "with", "from", "about", "explain", "tell", "please", "rule", "rules"].includes(term));
 const expanded = new Set(terms);
 const synonyms = {
   catch: ["receiver", "possession", "complete"], score: ["touchdown", "field goal", "points"], scoring: ["touchdown", "field goal", "points"],
   penalty: ["foul", "yards"], penalties: ["foul", "yards"], clock: ["time", "timeout", "play clock"], time: ["clock", "quarter"],
   kick: ["kickoff", "punt", "field goal"], kickoff: ["kick", "touchback", "return"], punt: ["kick", "return", "touchback"],
   pass: ["passing", "receiver", "throw"], passing: ["pass", "receiver", "throw"], fumble: ["loose", "ball", "possession"],
   turnover: ["fumble", "interception", "downs"], interference: ["contact", "receiver", "pass"],
   touchdown: ["score", "end zone", "points"], first: ["down", "yards", "line"], downs: ["first", "fourth", "yards"],
   overtime: ["OT", "possession", "coin toss"], challenge: ["review", "replay", "coach"], replay: ["review", "challenge"],
   offside: ["neutral zone", "defense", "snap"], false: ["start", "offense", "movement"], holding: ["grab", "restrict", "block"],
   endzone: ["end zone", "goal line", "touchdown"], "end zone": ["goal line", "touchdown", "safety"],
 };
 terms.forEach((term) => (synonyms[term] || []).forEach((synonym) => expanded.add(synonym)));


 const scored = rulebook.map((rule) => {
   const title = rule.title.toLowerCase();
   const haystack = `${title} ${rule.category.toLowerCase()} ${rule.tags.toLowerCase()} ${rule.text.toLowerCase()}`;
   let score = 0;
   terms.forEach((term) => {
     if (title.includes(term)) score += 6;
     if (rule.tags.toLowerCase().includes(term)) score += 4;
     else if (haystack.includes(term)) score += 1;
   });
   expanded.forEach((term) => {
     if (!terms.includes(term) && title.includes(term)) score += 2;
     else if (!terms.includes(term) && rule.tags.toLowerCase().includes(term)) score += 1;
   });
   return { rule, score };
 }).filter((result) => result.score > 0).sort((a, b) => b.score - a.score);
 const bestScore = scored[0]?.score ?? 0;
 return scored.filter((result) => result.score >= bestScore - 3).slice(0, 3).map((result) => result.rule);
}


function ask(question) {
 const trimmed = question.trim();
 if (!trimmed) return;
 addMessage({ role: "user", text: trimmed });
 input.value = "";
 const matches = findRules(trimmed);
 if (matches.length) {
   addMessage({ role: "assistant", text: matches.length === 1 ? "Here's the rulebook read on that:" : "Here's what the NFL rulebook says:", rules: matches });
 } else {
   addMessage({ role: "assistant", text: "I couldn't match that to a rule yet. Try a topic like catches, downs, penalties, kickoffs, scoring, or overtime, or search the field guide on the left." });
 }
}


form.addEventListener("submit", (event) => {
 event.preventDefault();
 ask(input.value);
});


document.querySelector("#suggestions").addEventListener("click", (event) => {
 const button = event.target.closest("button[data-question]");
 if (button) ask(button.dataset.question);
});


searchInput.addEventListener("input", () => {
 activeCategory = "All rules";
 renderCategories(searchInput.value);
});


document.querySelector("#index-toggle").addEventListener("click", () => sidebar.classList.toggle("open"));
document.addEventListener("keydown", (event) => {
 if (event.key === "/" && document.activeElement.tagName !== "INPUT") {
   event.preventDefault();
   searchInput.focus();
 }
 if (event.key === "Escape") sidebar.classList.remove("open");
});


renderCategories();
addMessage({ role: "assistant", text: `Welcome to the NFL Rules Desk. I have ${rulebook.length} hardcoded rules ready to go. Ask a question or pick a topic from the field guide.\n\nMy coverage is the NFL rulebook; college, high school, and other leagues play by different rules.` });


if (window.p5) {
 new window.p5((p) => {
   p.setup = () => {
     const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
     canvas.parent("field-canvas");
     p.noLoop();
   };
   p.draw = () => {
     p.clear();
     p.stroke(183, 243, 107, 22);
     p.strokeWeight(1);
     const spacing = 86;
     for (let x = spacing; x < p.width; x += spacing) {
       p.line(x, 0, x, p.height);
       p.line(x - 5, p.height / 2 - 13, x + 5, p.height / 2 - 13);
       p.line(x - 5, p.height / 2 + 13, x + 5, p.height / 2 + 13);
     }
     p.stroke(240, 240, 233, 9);
     p.line(0, p.height - 1, p.width, p.height - 1);
   };
   p.windowResized = () => {
     p.resizeCanvas(p.windowWidth, p.windowHeight);
     p.redraw();
   };
 });
}

