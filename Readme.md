# Mercury 🍵
AI powered manager for code review, feature and Employee Productivity Index (EPI) reports and all a manager can do.
---

## 🚀 Features

- 📦 Automatically triggered by GitLab commits
- 🤖 AI-powered code analysis (via Google Cloud AI / API)
- 📝 Auto-generates detailed reports in Markdown format
- 🔄 Writes the report (`report.md`) back to the GitLab repo
- 🌐 Built with Next.js and Node.js
- 🔐 Secure integration using GitLab API & webhooks

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: [Node.js](https://nodejs.org/)
- **AI Services**: [Google Cloud AI](https://cloud.google.com/ai)
- **Version Control**: [GitLab API](https://docs.gitlab.com/ee/api/)
- **Deployment**: Google Cloud Functions / App Engine

---

## ⚙️ How It Works

1. **User pushes code** ➝ Triggers a GitLab webhook.
2. **Server receives webhook** ➝ Pulls the latest code.
3. **AI engine processes the code** ➝ Generates insights.
4. **Report is created** ➝ Saved as `report.md`.
5. **Markdown file is committed** ➝ Automatically pushed to the repo.

---
