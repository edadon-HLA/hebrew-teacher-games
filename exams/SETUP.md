# Exams + Teachers Hub – one-time setup (about 10 minutes, free)

The site is static (GitHub Pages), so shared data (teacher logins, audio, student codes, results) lives in **Firebase** (free "Spark" plan – no credit card, no Storage needed).

1. Go to https://console.firebase.google.com → **Add project** (name e.g. `hebrew-exams`, Analytics off).
2. **Build → Authentication → Get started → Sign-in method → Google → Enable** (choose a support email → Save).
3. **Authentication → Settings → Authorized domains → Add domain:** `edadon-hla.github.io`
4. **Build → Firestore Database → Create database** → *Production mode* → pick a location (e.g. `eur3` or `nam5`).
5. Firestore → **Rules** tab → paste the whole content of `exams/firestore.rules` → **Publish**.
6. **Project settings (gear) → General → Your apps → Web (`</>`)** → register an app → copy the `firebaseConfig` values (`apiKey`, `authDomain`, `projectId`, `appId`) into `exams/firebase-config.js` and push to GitHub.
7. Open `/exams/teachers.html`, sign in with `edadon@hlacharterschool.org` (the owner), then use the **Teachers** tab to add other teachers by email.

Notes
- Teachers sign in with Google using the email you add (Google Workspace / Gmail accounts).
- Students never log in: they type their personal code at `/exams/index.html`. Each code works once.
- Exam answers are stored with the exam definition so the page can score instantly; a technical student could read them from the browser tools. For classroom exams this is a reasonable trade-off, supervise as usual.
- Until `firebase-config.js` is filled in, the site runs in **DEMO mode** (everything stays in one browser) – good for trying it out.

## Niflaot lessons – teachers only
- Every page in `niflaot-lessons/` loads `niflaot-lessons/gate.js`, which asks for Google sign-in and opens the page only for the owner or for emails on the **niflaotAccess** list.
- The owner manages the list on the Niflaot Lessons page (box "ניהול גישה"). This list is separate from the Exams teachers list.
- After changing `exams/firestore.rules`, paste it again in Firestore → **Rules** → **Publish**.
- Under each lesson title on the Niflaot Lessons page, teachers can set the date the lesson is taught (Monday–Thursday) and can add manual lessons (notes + links) between the interactive ones; they are saved in Firestore (collections `niflaotSchedule` and `niflaotCustom`), so the rules must be published for it to work.
- This is a login screen, not encryption: the files are still public in the GitHub repository.
