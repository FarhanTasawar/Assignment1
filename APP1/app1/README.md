SkillSwap — MVP (Frontend)
Overview

SkillSwap is a mobile app prototype built with React Native (Expo) that allows students to exchange skills with peers. This MVP includes login, skill posting, browsing, booking, and profile management. It runs entirely on Snack Expo with dummy authentication.

Features

Login (dummy credentials: test@student.com / 12345)

Create skill offers (title + description)

Browse offers (feed of available skills)

Book a session (local confirmation)

Profile screen (view/edit local info)

Project Structure
App.js
/navigation
   MainTabs.js
/screens
   LoginScreen.js
   HomeScreen.js
   CreatePostScreen.js
   ProfileScreen.js
/components
   OfferCard.js

Setup & Run (Snack Expo)

Open https://snack.expo.dev
.

Create a new project.

Replace the default App.js with the provided App.js.

Add the additional files (navigation/, screens/, components/) with their code.

Run on Web or scan the QR code with Expo Go on your phone.

Dummy Login

Email: test@student.com

Password: 12345

Notes

This is a prototype with local state only (no backend).

Offers, bookings, and reviews reset when the app restarts.

Future improvements:

Persistent storage (AsyncStorage / backend API)

Real authentication

Payments and messaging