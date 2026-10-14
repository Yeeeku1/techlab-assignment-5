# TechLab — Assignment 5

**Student:** Yerasyl Dauyl  
**Group:** SE-2527

## Project links

- Repository: https://github.com/Yeeeku1/techlab-assignment-5
- Website: https://yeeeku1.github.io/techlab-assignment-5/

An interactive JavaScript learning workspace with nine separate task pages. Built with plain HTML, CSS, and JavaScript. The interface is English, source code is consistently formatted, and code contains no comments.

## Run locally

Extract the ZIP and open `index.html` in the TechLab folder. No installation, internet connection, build process, or server is required. All assets are local. Each page includes `common.js` for mobile navigation and its own task script for easy review.

## Tasks

| Task | Page | Script | Requirements implemented |
| --- | --- | --- | --- |
| 0 | `index.html` | `task0.js` | Logs the student's name and group on load; Run greeting shows the exact alert `Hello, JavaScript World!`. |
| 1 | `task1.html` | `task1.js` | String, number, boolean variables; arithmetic and string concatenation logged to the console and mirrored on the page. |
| 2 | `task2.html` | `task2.js` | A button changes a paragraph using `textContent`; an additional button resets it. |
| 3 | `task3.html` | `task3.js` | Separate buttons change a div's background and its text's font size. |
| 4 | `task4.html` | `task4.js` | Add Item creates a new `li`; Remove Item removes the last item safely. |
| 5 | `task5.html` | `task5.js` | `mouseover` changes the box color; `mouseout` restores it. Keyboard and touch interaction are also supported. |
| 6 | `task6.html` | `task6.js` | `keyup` displays the input value live. An additional `input` listener handles paste, mobile input, and clearing. |
| 7 | `task7.html` | `task7.js` | Addition, subtraction, multiplication, division; required inputs, decimal values, and division-by-zero handling. |
| 8 | `task8.html` | `task8.js` | Add, complete with strike-through, and delete tasks. Tasks are held in a temporary JavaScript array. |

All pages share a navigation menu with links to Tasks 0–8, an active-page indicator, previous/next links, student details, and responsive styling in `styles.css`.

## Important behavior

- Open browser Developer Tools → Console to see Task 0 and Task 1 console output. The greeting alert is triggered by the Run greeting button, so visitors can read the page before opening it.
- Task 4 item numbers remain unique within the session, even after deleting items.
- Task 5 ignores mouseout events between children of the box, so the color resets only when leaving the box.
- Task 7 displays up to 12 significant digits and reports overflow or division by zero. Changing inputs clears an old result.
- Task 8 rejects blank and whitespace-only tasks, permits duplicate task text with distinct IDs, and safely renders input as text. Tasks disappear on reload or navigation away. There is no database, local storage, or account system.

## Verification and defense

See `VERIFICATION.md` for the checks performed. For a classroom demonstration, visit each task in order and use its controls. Be ready to explain variable types, arithmetic operators, `querySelector`, `textContent`, `style`, `createElement`, `appendChild`, `remove`, `addEventListener`, `keyup`, `mouseover`, `mouseout`, arrays, and event handlers.

## Deployment

Upload these files to the root of a GitHub repository. Under Settings → Pages, deploy from `main` and `/ (root)`. Submit the repository and live website links through the course platform. Alternatively, upload this folder to Netlify with no build command.

## Assignment source

`assignment5_frontend.docx` — Assignment #5, JavaScript Basics (DOM Manipulation & Events).
