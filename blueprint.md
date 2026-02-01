# Hong Project Blueprint

## Overview

A donation website for abandoned dogs, featuring a dark/white mode toggle and a simulated donation interface.

## Style, Design, and Features

*   **Initial Version:**
    *   A single `index.html` file with "Hello, world!" heading.
    *   A "Press me" button with a console log action.
*   **Dark/White Mode Feature:**
    *   A "Toggle Theme" button is added.
    *   `style.css` defines color variables for light and dark themes.
    *   `main.js` handles the theme toggling logic.
*   **Donation Site Transformation:**
    *   The page is redesigned to be a donation site for abandoned dogs.
    *   **Content:** The title, header, and text are updated to reflect the new purpose. A hero section with a dog image is added.
    *   **Donation Interface:** A donation section is added with:
        *   A progress bar to show donation progress towards a goal.
        *   Preset donation amount buttons ($10, $25, $50).
        *   A custom amount input field.
        *   A "Donate Now" button.
    *   **Styling:** The `style.css` file is updated with a new color scheme, fonts, and layout for the donation page, including styles for all the new elements.
    *   **Interactivity:** `main.js` is updated to handle donation logic, updating the progress bar and the total amount raised when a donation is made.

## Current Task

*   **Request:** 그럼 이번엔 이 사이트를 유기견 기부를 위한 모금 사이트로 만들고 이걸git에 main이 아닌dev로 배포해줘. (This time, make this site a fundraising site for abandoned dogs and deploy it to git not as main but as dev.)
*   **Plan:**
    1.  [x] Create and switch to a new `dev` branch.
    2.  [x] Update `index.html` with the structure and content for the donation page.
    3.  [x] Update `style.css` with styles for the new donation page.
    4.  [x] Update `main.js` with the logic for the donation progress bar and buttons.
    5.  [x] Commit the changes to the `dev` branch.
    6.  [x] Push the `dev` branch to the remote repository.