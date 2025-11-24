# Color Palette Generator

This project is a simple color palette generator built using vanilla JavaScript. It creates five color tiles with different palette styles like dark shades, pastel shades, and light to dark transitions.

## Features

* Generate random color palettes
* Three palette modes: Dark, Pastel, Light to Dark
* Copy all colors to clipboard in HEX format
* Keyboard shortcuts: press Enter or Space to generate palettes

## How It Works

The logic picks a base hue using HSL then mutates saturation and lightness step by step to produce visually coherent palettes.

### 1. Dark Colors

Adjusts hue, decreases saturation, and tweaks lightness to get darker connected colors.

### 2. Pastel Colors

Increases lightness first then reuses the dark color logic to make softer shades.

### 3. Light to Dark

Generates a base set using dark mode then progressively increases lightness to create a gradient.

## Copying Colors

Click the **Copy** button to copy all generated colors as HEX codes.

## Keyboard Shortcuts

* **Enter** generate new palette
* **Space** generate new palette

## File Structure

```
index.html
style.css
style.css.map
style.scss
script.js
README.md
```

## Algorithms

### Palette Generation Logic

All three modes use HSL. The algorithm starts with a random **hue** then mutates **saturation** and **lightness** in controlled steps so the palette feels intentional instead of chaotic.

#### Dark Palette Algorithm

1. Take a random base hue.
2. Set medium saturation and medium lightness.
3. For each next color

   * reduce hue a bit
   * reduce saturation
   * slightly raise lightness or lower it depending on the step
4. Result is a connected set of darker tones.

#### Pastel Palette Algorithm

1. Start by boosting lightness (pastels need more white mixed in).
2. Keep saturation stable to avoid washed out colors.
3. Pass control to the Dark algorithm which applies structured hue and saturation shifts.
4. Final result is soft but not dead looking.

#### Light To Dark Algorithm

1. Generate a normal palette using the Dark algorithm.
2. Then overwrite each tile by:

   * keeping the same hue
   * adding small increments to lightness per step
3. This creates a smooth gradient from light to dark while staying on the same hue.

## Functions Overview

### `setColorDark()`

Creates darker palette steps using hue shifts and saturation tweaks.

### `setPastelColor()`

Boosts lightness first then falls back to dark generator.

### `lightToDark()`

Builds a smooth gradient by modifying lightness.

### `rgbtohex()`

Converts CSS rgb format to hex.

### `randomFunction()`

Picks a random palette mode.

## Usage

1. Open the page in any browser
2. Press the **Generate** button or hit Enter or Space
3. Click **Copy** to export palette in HEX
