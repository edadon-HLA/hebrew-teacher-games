# QA report: WZO conference page (Agent 3)
Date: 2026-11-12. Tested locally on http://localhost:8124 (preview server "repo"), built-in browser.
Files tested: `hebrew-teacher-games/wzo-conference/index.html`, `hebrew-teacher-games/wzo-conference/backup/index.html`.

## PASS
- Both pages load with no console errors or warnings (also after every test action).
- All relative links return 200: control page site nav (home, games, Olam Street), backup link, Olam Street card, footer link; backup page nav (7 site links), "back to control page" (`../index.html`), and the 4 in-page anchors (#warmup, #words, #game, #exit).
- Olam Street card and SpellQuest card both have `target="_blank" rel="noopener"`.
- SpellQuest card URL `https://eldar1234334.github.io/SpellQuest-AlphaBet/test/` = **404** (known, not counted). Live app `https://eldar1234334.github.io/SpellQuest-AlphaBet/` = 200.
- `<meta name="robots" content="noindex">` on both pages.
- No external CDN / font / script / image / stylesheet on either page (no `src`, no `<link>`; the only external URLs are `<a href>` SpellQuest links; `http://www.w3.org/2000/svg` is just the SVG namespace).
- Empty topic and whitespace-only topic: friendly bilingual message, prompt area stays hidden (on first use; see FAILED 1).
- Prompt text matches the template character for character for: `פֵּרוֹת` (Hebrew with nikud), `Fruits and Vegetables`, mixed `חגים Holidays בבית`, and `Tom's "best" day $& $1 <b>bold</b> & co` in line 1 (no broken characters, `$&` / `$1` inserted literally).
- Slugs: Hebrew only gives `lesson-1794524499415`; English gives `fruits-and-vegetables`; mixed gives `holidays`; special chars give `tom-s-best-day-1-b-bold-b-co`.
- Grade dropdown 6 gives "grade 6" in the prompt; default 5 gives "grade 5".
- Copy button, normal path: clipboard got the exact prompt (checked from the Windows clipboard: 1436 chars = 1423 + 13 CRLF line breaks, same text). The icon turns into a check plus "✓ Copied!" and goes back to the copy icon after ~2 s.
- Copy button with `navigator.clipboard.writeText` rejecting (NotAllowedError): the `execCommand('copy')` fallback ran and returned true. The check mark appeared and the Windows clipboard held the exact prompt (it had been set to a sentinel value first).
- Copy button with `navigator.clipboard` undefined: the fallback ran and returned true, with the check mark and the correct clipboard contents.
- Both methods failing (execCommand returns false): the prompt text is left fully selected, with "Press Ctrl+C (or ⌘+C)" shown in orange. Good last resort.
- Slot markers: exactly the three required lines, in order (lines 169–171).
- Simulated slot edit (`_tmp-slot-test.html`, now deleted): no errors. The link shows as a green, white-text, padded button, href resolves to `lessons/test/index.html`. `#backupLink` is the very next element after the slot section (18 px gap). Generate prompt and tips still work.
- Backup warm-up (3 questions): a wrong answer shows "❌ נַסּוּ שׁוּב / Try again" and disables that option; the right answer shows praise and locks the question.
- Backup: 10 word cards render.
- Backup game: 10 rounds, 4 unique options each with the right answer always present. The counter reads "1 / 10" … "10 / 10" in the DOM and visually (checked on screenshots at both sizes). Score counts first try only (6/10 with 4 deliberate misses). The result screen shows the score, stars, message and "שַׂחֲקוּ שׁוּב". Play again resets to "1 / 10", score 0.
- Backup exit ticket: one try per question. A wrong answer shows the right one in green. The summary "2/3 כׇּל הַכָּבוֹד! / Good work!" appears after all 3. Instructions and feedback are in English.
- Layout at 1280x720, both pages: no horizontal scroll, body font 22 px. The copy button sits in the 100 px right padding of the prompt box (button left edge 1032 px, text ends at 1016 px), so it never covers the text.
- Layout at 375x812, control page: scrollWidth 375 = innerWidth, body font 20 px, and the copy button sits in the 86 px top padding (button bottom at 76 px). Smallest text is the shared site-nav buttons (13 px), same as the rest of the site.
- Layout at 375x812, backup: no overflow even with its `overflow-x:hidden` turned off. Body font 22 px, game laid out as a 2x2 grid.
- `git diff --stat origin/main` lists only `wzo-conference/backup/index.html` and `wzo-conference/index.html` (636 insertions, no existing page changed). Working tree clean.

## FAILED
1. **Old prompt stays on screen after an empty submit (minor).** Steps: generate a prompt for "Fruits", clear the box (or type spaces), and press Generate. The friendly message appears, but the old "Fruits" prompt and its copy button stay visible below it. The spec says "Empty topic → friendly message, no prompt".
   Fix (index.html, in the `if (!topic) {` branch): add `area.hidden = true;` before `return`.

2. **The slot markers appear twice in the source (risk for the live-edit step).** Besides lines 169–171, the literal text `<!-- NEW-LESSON-SLOT-START -->` and `<!-- NEW-LESSON-SLOT-END -->` also appears inside the JS `TEMPLATE` string (line 251). A careful edit (first START to the next END) works, as my simulation showed. But a greedy or "last END" replacement by the on-stage Claude session would delete everything from line 169 to line 251: the backup button, the cards, the tips and half the script.
   Fix: break the literal in the script so it exists only once in the file, e.g. `'... between <!-- NEW-LESSON-' + 'SLOT-START --> and <!-- NEW-LESSON-' + 'SLOT-END --> with exactly:'`. The generated prompt text stays identical.

3. **Hebrew nikud: two prefixes have no vowel** (control page, TIPS array):
   - Tip 1: `ו-Claude יַעֲשֶׂה` should be `וְ-Claude יַעֲשֶׂה`.
   - Tip 8: `ה-AI בּוֹנֶה` should be `הַ-AI בּוֹנֶה`.
   (The page already writes `בְּ-AI` with nikud in the intro, so these two are inconsistent.)

## Notes (not failures)
- The prompt's step-5 link line uses an HTML-escaped topic (`{TOPIC_HTML}`): `&` becomes `&amp;`, `<` becomes `&lt;` and `>` becomes `&gt;`. Line 1 uses the topic exactly as typed. This differs from the template word for word, but only for topics containing `& < >`, and it is the safer choice for HTML. It looks intentional, so I kept it.
- Nikud consistency: the control page writes `כָּל פַּעַם` (tip 1) while the backup writes `כׇּל` (qamatz katan). Both are acceptable; pick one style if you care.
- The button says `צוֹר פְּרוֹמְפְּט` (singular), but every other instruction on the page is plural (`כִּתְבוּ`, `פִּתְחוּ`, `שִׁמְרוּ`). Consider `צְרוּ פְּרוֹמְפְּט`. `צוֹר` is not wrong.
- Hebrew typed into the topic shows in the monospace prompt box in a thin, small fallback font (Consolas has no Hebrew), so the nikud is hard to see from the back of the room. The copied text is correct. Purely cosmetic.
- Backup uses 🫒 for שֶׁמֶן (Emoji 13). It may show as an empty box on an old Windows 10 presenter PC. It rendered fine here.
- All other Hebrew on both pages was proofread and looks correct, for example תִּקְשֹׁרֶת, נִסָּיוֹן, מַעַרְכֵי שִׁעוּר, לִבְנִיַּת, תָּאֲרוּ, שַׁפְּרוּ, חֲנֻכִּיָּה, סֻפְגָּנִיָּה, לְבִיבָה, שְׁמוֹנָה וְשַׁמָּשׁ, נְקֻדּוֹת and שַׂחֲקוּ שׁוּב.

## Not tested
- The live GitHub Pages site (pages are not merged to `main` yet). Everything above was checked on localhost.
- A real phone or a real no-permission browser: both were simulated (375x812 emulation; clipboard API overridden). file:// was not tested.
- The real projector.

## Fixes after QA (lead, 2026-11-12)
- Failure 1 fixed: an empty submit now hides the old prompt (`area.hidden = true`).
- Failure 2 fixed: the slot markers now appear only once in the file; the script builds them from split strings, and the generated prompt text is unchanged (re-checked in the browser).
- Failure 3 fixed: וְ-Claude, הַ-AI. Also the button now says צְרוּ (plural).
