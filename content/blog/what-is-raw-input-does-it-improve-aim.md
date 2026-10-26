---
title: 'What Is Raw Input and Does It Improve Aim?'
seoTitle: 'What Is Raw Input and Does It Improve Aim?'
date: '2026-10-25'
description: 'Raw input removes mouse acceleration, but does it improve aim? Learn the real answer and the exact Windows settings to fix today.'
author: 'MouseTester Team'
coverImage: '/images/raw-input-vs-accelerated-mouse-path.webp'
readTime: '7 min read'
tags:
  - 'raw input'
  - 'mouse acceleration'
  - 'gaming mouse'
  - 'aim consistency'
  - 'windows settings'
faqSchema: |
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Should raw input be on or off?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Leave it on when a game offers the option, because it keeps movement consistent. If the toggle doesn't exist, as in CS2, the game handles input its own way."
        }
      },
      {
        "@type": "Question",
        "name": "Does raw input reduce input lag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It can remove some pointer processing, but the gain is small. Fix frame pacing and polling stability first."
        }
      },
      {
        "@type": "Question",
        "name": "Does raw input change mouse DPI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, because DPI is a sensor setting inside your mouse. Raw input only changes how the game receives movement."
        }
      },
      {
        "@type": "Question",
        "name": "What is raw input buffer in Valorant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's a Valorant setting from patch 3.07 that changes how the game processes mouse input. It helps most on 8000Hz mice, so test it before you keep it."
        }
      },
      {
        "@type": "Question",
        "name": "Does raw input bypass Windows sensitivity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "During gameplay, yes: games ignore Windows pointer speed. Menus and launchers still use it, so keep the default."
        }
      }
    ]
  }
schema: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "What Is Raw Input? 5 Costly Mistakes That Hurt Aim",
        "description": "Raw input removes mouse acceleration, but does it improve aim? Learn the real answer and the exact Windows settings to fix today.",
        "dateModified": "2026-10-25",
        "author": {
          "@type": "Person",
          "name": "MouseTester Team"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Should raw input be on or off?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Leave it on when a game offers the option, because it keeps movement consistent. If the toggle doesn't exist, as in CS2, the game handles input its own way."
            }
          },
          {
            "@type": "Question",
            "name": "Does raw input reduce input lag?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It can remove some pointer processing, but the gain is small. Fix frame pacing and polling stability first."
            }
          },
          {
            "@type": "Question",
            "name": "Does raw input change mouse DPI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, because DPI is a sensor setting inside your mouse. Raw input only changes how the game receives movement."
            }
          },
          {
            "@type": "Question",
            "name": "What is raw input buffer in Valorant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It's a Valorant setting from patch 3.07 that changes how the game processes mouse input. It helps most on 8000Hz mice, so test it before you keep it."
            }
          },
          {
            "@type": "Question",
            "name": "Does raw input bypass Windows sensitivity?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "During gameplay, yes: games ignore Windows pointer speed. Menus and launchers still use it, so keep the default."
            }
          }
        ]
      }
    ]
  }
---

![What Is Raw Input and Does It Improve Aim?](/images/raw-input-vs-accelerated-mouse-path.webp)

You land a perfect flick in the practice range, then miss the same shot in a real match. Hidden mouse acceleration often causes that gap, because identical hand movements land in different places. Raw input fixes it by sending your mouse movement to the game untouched. Here's what raw input does, what it can't fix, and how to set it up.

> **Quick answer:**
> - **Raw input** sends mouse movement to the game without Windows acceleration.
> - **It improves consistency**, not reaction time or raw skill.
> - **Pair it with one DPI value**, one sensitivity and Enhance Pointer Precision switched off.

## What Is Raw Input in Gaming?

Raw input is a Windows feature that lets a game read mouse movement directly. Microsoft Learn describes the Windows Raw Input API as the way apps receive device data through WM_INPUT messages. Normal desktop pointer movement arrives as WM_MOUSEMOVE, and Windows can adjust it before any app sees it.

Think of a desktop cursor and a game camera as two different jobs. The cursor needs comfort, so Windows speeds it up. The camera needs raw mouse movement data from the Human Interface Device (HID) stack, with no extras. That's why raw input matters for FPS mouse settings and barely matters on a webpage.

## Does Raw Input Improve Aim? Not the Way You Think

Not in the way most players hope. Raw input won't speed up your reactions or steady your hands. What it delivers is aim consistency, because your crosshair movement matches your hand movement every single time.

Picture a basketball hoop that changes height depending on how hard you throw. You'd never build reliable muscle memory. Mouse acceleration does the same thing to flick aiming: a fast swipe travels farther than a slow one. Remove that variable, and practice in an aim trainer transfers to real matches.

## Mouse Acceleration Is the Real Aim Killer

Enhance Pointer Precision sounds helpful, but it's simply pointer acceleration under a friendlier name. It multiplies your movement when you move fast. That helps on a large desktop and wrecks mouse movement accuracy in a shooter.

### Why Acceleration Breaks Muscle Memory

Acceleration scales your movement based on speed, while raw input passes movement through untouched. In a supporting game, Windows acceleration shouldn't reach your crosshair. However, you should still switch it off, because menus, launchers and other games may not use it.

### Why Pointer Speed Still Matters

Windows pointer speed only changes how far your desktop cursor travels. A game reading raw data ignores that slider during gameplay, so your in-game sensitivity won't change when you move it. Keep the slider at its default middle position anyway. There, Windows applies a 1:1 ratio, so desktop tests and older games behave predictably.

| Setting | What it controls | Reaches your crosshair in gameplay? |
|---|---|---|
| Raw input | How the game receives movement | It is the input path |
| Enhance Pointer Precision | Speed-based cursor acceleration | No |
| Windows pointer speed | Desktop cursor distance | No |
| Mouse DPI | Sensor counts per inch | Yes |
| In-game sensitivity | Crosshair turn per count | Yes |

## How to Set Up Clean Mouse Input on Windows 10 and 11

Setup takes about two minutes, so start with your Windows mouse settings and then move into the game.

1. On Windows 11, open Settings, then Bluetooth & devices, then Mouse. On Windows 10, open Settings, then Devices, then Mouse.
2. Click Additional mouse settings, then open the Pointer Options tab.
3. Uncheck Enhance Pointer Precision.
4. Set pointer speed to the sixth notch of 11. In the Settings slider, that's the default value of 10 out of 20.
5. Click Apply, then OK.

![Windows 11 Mouse Properties - Enhance Pointer Precision](/images/windows-11-raw-input-mouse-settings.png)

Pick one DPI value, such as 800, and keep a 1000Hz polling rate while you test.

Turn on raw input in the game if it offers the option, and switch off mouse smoothing.

Afterward, run the [Mouse Test](https://www.clickmousetest.com/) to confirm every button and scroll step registers cleanly. Then open the [DPI Analyzer](https://www.clickmousetest.com/mouse-dpi-analyzer) to check that your mouse reports the mouse DPI you chose.

## Valorant, CS2 and Apex Legends Handle Input Differently

Every game labels input settings differently, so advice from one title can mislead you in another. Use the table as a starting map, then confirm each setting in your current build.

| Game | What you'll find | What to do |
|---|---|---|
| Valorant | Raw mouse data since launch, plus an optional buffer setting | Test the buffer with your real polling rate |
| CS2 | No visible toggle, and reports say the old m_rawinput command is gone | Skip CS:GO advice and tune eDPI |
| Overwatch | Blizzard forum threads describe raw mouse data use | Keep Enhance Pointer Precision off |
| Apex Legends | An in-game mouse acceleration toggle | Turn it off in the game and in Windows |
| Browser trainers | Pointer Lock with unadjusted movement | Use a Chromium browser and verify cm/360 |

### Valorant and the Buffer Setting

Valorant has used raw input since launch, so the setting you'll actually see is Raw Input Buffer. Riot Games added it in patch 3.07, and it mainly helps mice polling at 8000Hz. On slower PCs it can cost frames, so test it in the range with your real frame pacing first.

### CS2 and the Missing Toggle

CS2 players should ignore old CS:GO advice. Command references report that m_rawinput is gone and that the game reads mouse data as raw input by default. Menus change between updates, so check yours after patches. Then tune eDPI instead of hunting for a switch.

## Mouse Input Lag Has Many Suspects, Not Just One Setting

Latency doesn't live in one place. Raw input can trim some pointer processing, yet it's only one link in a long chain. That chain starts at the mouse sensor and mouse firmware, then runs through USB polling and the game engine. It ends at your display refresh rate and monitor response time.

| Layer | What it affects |
|---|---|
| Game input path | How the game receives movement |
| Mouse polling rate | How often the mouse reports |
| Frame pacing | How evenly frames reach the screen |
| Display refresh rate | How often the monitor updates |
| Monitor response time | How fast pixels change |
| In-game sensitivity | Crosshair distance per count |

High polling rates need extra care. A 1000Hz mouse reports every millisecond, while an 8000Hz mouse reports every 0.125 milliseconds. However, faster reporting demands more from your CPU, so stutter can appear. Run the [Polling Rate Test](https://www.clickmousetest.com/polling-rate-test), then let the FPS Calculator and [Bottleneck Calculator](https://perfcalcpro.com/tools/bottleneck-calculator) show what limits your frames.

## How to Test Your Setup and Measure cm/360

Never judge settings in a ranked match. Use a repeatable routine instead, and change one thing at a time.

1. Write down your DPI, polling rate and sensitivity.
2. Load the same range or aim trainer scenario every time.
3. Play ten minutes with the toggle on, restarting the game if it needs it.
4. Play ten minutes with it off where the game allows, then compare mouse tracking, flick recovery and small corrections.

Next, run the cm/360 check using 914.4 ÷ (DPI × sensitivity × yaw). In CS2, yaw is 0.022, so 800 DPI at sensitivity 1.0 gives about 52 cm. Turn a full 360 degrees in game, then measure the mouse travel with a ruler. A big gap means something is scaling your input, and pointer acceleration is the usual suspect.

## 5 Raw Input Mistakes That Hurt Your Aim

Usually, the toggle isn't the culprit. Something else in the chain gets the blame, and these five mistakes cause most of the confusion.

1. **Leaving acceleration on elsewhere.** Most shooters ignore it, but your browser, launcher and other titles don't.
2. **Changing DPI and sensitivity together.** Keep your eDPI constant, and let any eDPI calculator confirm it: 400 DPI at 2.0 and 800 DPI at 1.0 both equal 800. Our guide on the [best DPI and sensitivity settings for gaming](/blog/best-dpi-and-sensitivity-settings-for-gaming) helps you choose.
3. **Chasing high polling rates blindly.** Stutter feels like bad input, so confirm frame pacing first, and read our guide on [what polling rate means](/blog/mouse-polling-rate).
4. **Skipping the restart.** Some games read input settings at launch, so restart before you judge a change.
5. **Expecting a miracle.** A dirty mouse sensor, a distant wireless mouse receiver or an unstable frame rate still hurts tracking.

Fix these five first, and raw input becomes what it should be: a quiet, reliable foundation.

## Browser Aim Trainers Chase the Same Goal

Web pages don't read mouse data through the Windows API themselves. They use the Browser Pointer Lock API instead. According to web.dev, calling requestPointerLock with unadjustedMovement set to true disables OS-level acceleration, so mouse movement data arrives without it.

Chrome added that option in version 88, and Chromium-based browsers such as Edge support it. For practice that transfers, pick a trainer that requests unadjusted movement. Then compare its cm/360 with the number you measured in game.

## FAQs

### Should raw input be on or off?
Leave it on when a game offers the option, because it keeps movement consistent. If the toggle doesn't exist, as in CS2, the game handles input its own way.

### Does raw input reduce input lag?
It can remove some pointer processing, but the gain is small. Fix frame pacing and polling stability first.

### Does raw input change mouse DPI?
No, because DPI is a sensor setting inside your mouse. Raw input only changes how the game receives movement.

### What is raw input buffer in Valorant?
It's a Valorant setting from patch 3.07 that changes how the game processes mouse input. It helps most on 8000Hz mice, so test it before you keep it.

### Does raw input bypass Windows sensitivity?
During gameplay, yes: games ignore Windows pointer speed. Menus and launchers still use it, so keep the default.

## Final Thoughts

Skill still comes from practice, not from a toggle. Raw input won't turn you into a better aimer overnight. It does remove one hidden variable between your hand and your crosshair. Once that variable disappears, every practice session means the same thing.

Start by switching off Enhance Pointer Precision, keeping Windows pointer speed at its default and picking one DPI. Then enable raw input where the game offers it, and test extras like the buffer setting one at a time.

Measure instead of guessing, and change one setting at a time. A ruler and ten quiet minutes in the range will teach you more than any forum thread. Save the profile that feels steady, then leave it alone and let practice do the work.
