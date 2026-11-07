---
title: 'How to Fix Scroll Wheel Not Working'
seoTitle: 'How to Fix Scroll Wheel Not Working'
date: '2026-11-07'
dateModified: '2026-11-07'
description: 'Learn how to fix scroll wheel not working in Windows 11 and 10 with 9 easy fixes. Test your mouse and fix it today.'
author: 'MouseTester Team'
coverImage: '/images/how-to-fix-scroll-wheel-not-working.webp'
readTime: '7 min read'
tags:
  - 'scroll wheel not working'
  - 'mouse scroll wheel'
  - 'mouse troubleshooting'
  - 'windows settings'
  - 'scroll wheel test'
faqSchema: |
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is my mouse scroll wheel not working?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common causes include wrong scroll settings, a corrupted driver, dust in the encoder and a weak battery. Run the Scroll Wheel Test to narrow down which one applies."
        }
      },
      {
        "@type": "Question",
        "name": "Why does my mouse scroll wheel jump up and down?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dirt or a worn encoder can send false signals, and the one screen at a time setting causes page-sized jumps. Clean the wheel, then check your Windows scroll settings."
        }
      },
      {
        "@type": "Question",
        "name": "How do I clean a mouse scroll wheel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Switch the mouse off and blow compressed air beside the wheel. Then dab the edges with a swab lightly dampened with 90% isopropyl alcohol."
        }
      },
      {
        "@type": "Question",
        "name": "Why does my wireless mouse stop scrolling after sleep?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Power saving on the Bluetooth adapter is a likely cause. Disable that option in Device Manager, or pair the mouse again."
        }
      },
      {
        "@type": "Question",
        "name": "How do I change mouse wheel scrolling speed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Open Settings, then Bluetooth & devices, then Mouse, and change the lines to scroll at a time. Higher numbers scroll faster."
        }
      }
    ]
  }
---

![How to Fix Scroll Wheel Not Working](/images/how-to-fix-scroll-wheel-not-working.webp)

Your scroll wheel spins, but the page refuses to move. Annoying, and it gets old fast. A stuck wheel ruins browsing, gaming and spreadsheet work alike.

Here is how to fix scroll wheel not working problems in Windows 11 and 10. Test the wheel, reset your scroll settings, clean the encoder, and reinstall the driver. Most software causes take minutes to fix, and the early fixes need no tools.

## Run a 60-Second Test Before You Change Anything

Testing first saves you from fixing the wrong thing. Open the [Scroll Wheel Test](https://www.clickmousetest.com/mouse-scroll-wheel-test) and roll the mouse scroll wheel slowly in both directions. Every notch should register once, in the right direction.

> **Quick check:** Press the wheel down on any webpage. If the four-way autoscroll icon appears, your mouse still has power and a working connection. The fault then sits in settings, drivers or a dirty encoder.

Next, repeat the roll in two apps, such as a browser and Notepad. A wheel that fails in only one app points to that app, not Windows. Use the [Mouse Test](https://www.clickmousetest.com/) to confirm the middle button registers on its own. Then try the mouse on a second computer, where the same fault proves the mouse hardware is to blame.

## Match Your Symptom to the Right Fix

Symptoms tell you where to start. Use this table to find how to fix scroll wheel not working for your exact symptom.

| Symptom | Likely cause | Go to |
| --- | --- | --- |
| Wheel does nothing | Settings or driver | Fixes 3, 4 and 6 |
| Page jumps a full screen | One screen at a time setting | Fix 3 |
| Works only after you click | Inactive window scrolling off | Fix 3 |
| Scrolls the wrong way | Dirty or worn encoder | Fixes 5 and 9 |
| Stops after sleep | Bluetooth power saving | Fix 2 |
| Fails in one app only | Profile or extension | Fix 8 |
| Mouse wheel scrolling slowly | Low line count or heavy CPU load | Fixes 1 and 3 |

These mouse troubleshooting fixes run from fastest to most involved. Stop as soon as the wheel behaves.

## Fix 1: Power Cycle the Mouse and Restart Windows

Temporary glitches are a common reason for scroll wheel not working errors. A full restart clears stuck driver states and frozen background tasks.

1. Shut the PC down completely instead of choosing sleep.
2. Unplug a USB mouse, or switch off a wireless mouse and remove its batteries.
3. Wait half a minute, reconnect everything, and start Windows.

After restarting, open Task Manager and check CPU and memory use. A program hogging resources can make scrolling lag, which looks like a faulty wheel.

## Fix 2: How to Fix Scroll Wheel Not Working on a Bluetooth Mouse

Low mouse battery power can stop the wheel before it stops the cursor. Install fresh cells or charge the mouse fully, then test again.

Windows can also switch off the Bluetooth adapter to save power, which can break scrolling after sleep. Open Device Manager, expand Bluetooth, and open your adapter's Properties. Clear the box that lets the computer turn off the device. If the Power Management tab is missing, remove the mouse in Settings and pair it again.

## Fix 3: How to Fix Scroll Wheel Not Working in Windows Settings

Wrong scroll wheel sensitivity values make a healthy wheel look dead. One notch might move a single line or an entire page.

1. Press `Win + I` to open Windows Settings, then select Bluetooth & devices and Mouse.
2. Under Scrolling, set the Roll the mouse wheel to scroll option to Multiple lines at a time.
3. Set the lines slider to 3, the Windows default.
4. Switch on Scroll inactive windows when hovering over them.

Raise the line count to increase scroll speed, and lower it if the page jumps. Windows 10 users find the same options under Settings, Devices, then Mouse. The inactive window scrolling toggle lets you scroll a background window without clicking it first.

## Fix 4: Reset the Wheel Tab in Mouse Properties

Older apps and remote sessions still read vertical scrolling values from the classic Mouse Properties window. A bad value there can still break scrolling in those apps.

1. Press `Win + R`, type `main.cpl`, and press Enter.
2. Open the Wheel tab at the top of the window.
3. Select The following number of lines at a time and enter `3`.
4. For a tilt wheel, set horizontal scrolling to `3` characters.
5. Click Apply, then click OK to save the change.

Without a Wheel tab, Windows is not detecting a wheel-capable device, so skip ahead to Fix 6. Return to the [Scroll Wheel Test](https://www.clickmousetest.com/mouse-scroll-wheel-test) after saving to confirm the change.

### Optional: Check Scroll Values in Registry Editor or PowerShell

Advanced users can open Registry Editor and inspect the `WheelScrollLines` value under `HKEY_CURRENT_USER\Control Panel\Desktop`. Microsoft Learn documents the matching system setting, where `3` is the default and `0` turns scrolling off. Back up the key first, and sign out and back in after any change. To restore the default quickly, run this command in PowerShell:

```powershell
Set-ItemProperty -Path "HKCU:\Control Panel\Desktop" -Name "WheelScrollLines" -Value "3"
```

## Fix 5: Clean Dust and Debris From the Scroll Wheel

![Clean Mouse Scroll Wheel With Compressed Air](/images/clean-mouse-scroll-wheel-compressed-air.webp)

Dust, lint and hair collect around the wheel over months of use. That dust and debris can block the rotary encoder and make the wheel skip or reverse.

1. Unplug the mouse or switch it off completely.
2. Hold it upside down and blow short bursts of compressed air beside the wheel.
3. Roll the wheel back and forth while you blow air into the gaps.
4. Dab a cotton swab dampened with 90% isopropyl alcohol around the wheel edges.
5. Let everything dry fully before you reconnect the mouse.

Household sprays and oils attract more grime and can damage the plastic, so skip them. A dirty encoder can also make the wheel [scroll the wrong way](/blog/scroll-wheel-jumping), and cleaning can fix it.

## Fix 6: Reinstall the HID-Compliant Mouse Driver

Outdated drivers or corrupted ones can pass cursor movement while dropping wheel signals. After an update, how to fix the scroll wheel not working often comes down to a clean driver. Reinstalling the HID-compliant mouse entry lets Windows build one.

1. Press `Win + X` and open Device Manager.
2. Expand Mice and other pointing devices.
3. Right-click the HID-compliant mouse and choose Uninstall device.
4. Replug a USB mouse, or restart Windows to reinstall automatically.

Keep a keyboard nearby during mouse driver reinstallation, because the cursor stops once you uninstall the device. For a mouse driver update, open Settings, Windows Update, Advanced options, then Optional updates. [Microsoft Support](https://support.microsoft.com/en-us/) points to Windows Update as the first place to check for driver updates. If a new driver broke scrolling, use Roll Back Driver on the Driver tab.

## Fix 7: Switch the USB Port and Skip the USB Hub

Crowded USB hubs can delay or drop mouse data. Plug the USB mouse or wireless receiver straight into a rear motherboard USB port.

Front-panel ports and unpowered hubs share limited power with other devices. Unplug external drives while you test, and keep a 2.4 GHz receiver away from routers. Then run the [Polling Rate Test](https://www.clickmousetest.com/polling-rate-test), because unstable readings suggest a connection problem.

## Fix 8: How to Fix Scroll Wheel Not Working in One App Only

Companion apps such as Logitech G HUB, Razer Synapse and Corsair iCUE can remap the wheel or apply per-app profiles. [Logitech Support](https://support.logi.com/) and [Razer Support](https://mysupport.razer.com/) both describe profiles tied to specific programs.

1. Open the companion app and check what the wheel is assigned to.
2. Switch to the default profile and test again.
3. Check the manufacturer's site for a mouse firmware update.
4. Uninstall the app if the problem stays, then test with the native Windows driver.

Browser extensions cause their own trouble. Chrome Help pages recommend turning extensions off one at a time, and smooth-scrolling add-ons can be suspects. Some premium wheels have a mode-shift button, so check it is not stuck between ratchet and free-spin.

## Fix 9: Check for Hardware Failure and Replace Parts

Persistent faults after Fixes 1 to 8 point to hardware failure inside the mouse. A worn optical encoder or mechanical encoder, a cracked wheel or moisture damage can all stop scrolling. Optical encoders read an infrared beam through a slotted disc, while mechanical ones use physical contacts.

Shops sell replacement encoders as spare parts, but fitting one needs soldering skill. Check your [warranty](/blog/how-to-test-your-mouse-before-making-a-warranty-claim) first, because the maker may repair or swap a faulty mouse. For a budget model, buying a new mouse usually makes more sense. If the cursor also stutters, run the [DPI Analyzer](https://www.clickmousetest.com/mouse-dpi-analyzer), and add the [Double Click Test](https://www.clickmousetest.com/double-click-test) to check for worn switches.

## FAQs

### Why is my mouse scroll wheel not working?

Common causes include wrong scroll settings, a corrupted driver, dust in the encoder and a weak battery. Run the [Scroll Wheel Test](https://www.clickmousetest.com/mouse-scroll-wheel-test) to narrow down which one applies.

### Why does my mouse scroll wheel jump up and down?

Dirt or a worn encoder can send false signals, and the one screen at a time setting causes page-sized jumps. Clean the wheel, then check your Windows scroll settings.

### How do I clean a mouse scroll wheel?

Switch the mouse off and blow compressed air beside the wheel. Then dab the edges with a swab lightly dampened with 90% isopropyl alcohol.

### Why does my wireless mouse stop scrolling after sleep?

Power saving on the Bluetooth adapter is a likely cause. Disable that option in Device Manager, or pair the mouse again.

### How do I change mouse wheel scrolling speed?

Open Settings, then Bluetooth & devices, then Mouse, and change the lines to scroll at a time. Higher numbers scroll faster.

## Final Thoughts

Learning how to fix scroll wheel not working problems comes down to order. Test the wheel first, then rule out settings and drivers before you clean or replace anything. Software settings and dirt cost nothing to check, so start there.

Hardware failure should be your last suspect. Only a worn encoder, wheel or board survives all the earlier checks. Repair it only if you enjoy soldering, and otherwise replace the mouse.

Bookmark the [Mouse Test](https://www.clickmousetest.com/) and rerun it after major Windows updates in 2026. A two-minute check now prevents a long troubleshooting session later. Your scroll wheel should feel smooth and predictable again.

