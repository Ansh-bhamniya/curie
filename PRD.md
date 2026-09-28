# Product Requirements Document — Flux

## 1. Summary

Flux is a SaaS platform that scrapes job postings directly from company career
pages, matches them against a user's resume, and lets the user apply to a job
with a single click. Applications are submitted by an AI agent that navigates
to the company's own careers site, fills out the application form, and
confirms submission via email — asking the user for help only when it hits a
question it cannot answer on its own.

## 2. Problem

- Job boards (LinkedIn, Indeed, etc.) are noisy, often list stale or
  duplicate postings, and rarely reflect what's actually live on a company's
  own careers page.
- Applying to each job individually — re-entering the same personal details,
  uploading the same resume, answering similar screening questions — is
  repetitive and time-consuming for job seekers applying at scale.

## 3. Goal

Let a user upload their resume once and then discover and apply to relevant,
up-to-date jobs — sourced straight from company career pages — with minimal
manual effort, while staying in the loop for anything the AI agent can't
safely decide on its own.

## 4. Target Users

Active job seekers who want to apply to a high volume of relevant roles
without manually repeating the same application steps on every company
website.

## 5. Core Features

### 5.1 Job Scraping
- Scrape job postings directly from company career pages (not third-party
  boards), keeping listings closer to the source and up to date.
- Normalize scraped postings (title, location, description, requirements,
  application URL) into a consistent internal format.

### 5.2 Signup & Resume Intake
- User creates an account and uploads their resume.
- System parses the resume to extract skills, experience, and other
  structured data used for matching.

### 5.3 Job Matching
- System scans available scraped jobs and surfaces the most relevant, latest
  postings to each user based on their resume.

### 5.4 One-Click AI Apply
- User clicks "Apply" on a matched job.
- An AI agent:
  1. Navigates to that specific job's page on the company's own careers
     website.
  2. Fills in the user's details into the application form.
  3. Submits the application.
  4. Verifies submission succeeded by checking for a confirmation email.

### 5.5 Human-in-the-Loop ("Needs You")
- If the agent encounters a question on the application it cannot answer
  confidently, it **does not guess**.
- It pauses the application and raises a "Needs You" request on the
  platform, prompting the user to answer that specific question.
- Once the user responds, the agent resumes/re-runs the application from
  where it left off, using the provided answer.

## 6. Key User Flow

1. Sign up → upload resume.
2. Browse relevant, freshly scraped jobs matched to the resume.
3. Click "Apply" on a job.
4. Agent applies on the company's site and confirms via email.
5. If blocked by an unanswerable question, user gets a "Needs You" prompt,
   answers it, and the agent re-runs and completes the application.
6. User sees the final application status (applied / needs input / failed).

## 7. Out of Scope (for now)

- Anything not described above (e.g. interview prep, salary negotiation,
  employer-side tooling) is not part of this version of the product.

## 8. Open Questions

- Which company career page platforms (Greenhouse, Lever, Workday, custom,
  etc.) need to be supported first for scraping and auto-fill?
- How is application status tracked and surfaced to the user over time?
- What data is stored from the resume, and how is it kept in sync if the
  user updates it?
