# Vue3 Sound Player

You can add an audio - sound player to your website with the Vue3 Sound Player library.

All you have to do is pass the sound list to the player with the props.

## Install

```html
npm i vue3-sound-player
```

## Example

### Template Code

```html
<template>
  <sound-player :sounds="sounds" />
</template>
```

### Setup Code

```javascript
import SoundPlayer from "vue3-sound-player";
const sounds = [
  {
    id: 1,
    title: "Sound 1",
    file_url: "/sound/sound-1.mp3",
  },
  {
    id: 2,
    title: "Sound 2",
    file_url: "/sound/sound-2.mp3",
  },
  {
    id: 3,
    title: "Sound 3",
    file_url: "/sound/sound-3.mp3",
  },
  {
    id: 4,
    title: "Sound 4",
    file_url: "/sound/sound-4.mp3",
  },
];
```

## Props

| Props Title | Default Value | Required |
| ----------- | ------------- | -------- |
| sounds      | -             | true     |
| darkMode    | false         | false    |
| draggable   | true          | false    |
