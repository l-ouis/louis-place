export const content = `

### Duet
A MIDI transformer model that can be used to generate harmonies based off a given melody. I built this with a partner in a month for Brown CS1470.

One of the hardest parts of any machine learning model regarding music is how to represent data. Music can take lots of form - to our ears, sound is a very continuous motion,
with decrescendo and crescendo, vibrato, and other effects. In file form, it's very discrete -- either frequencies in an mp3 or wav, or note values in a MIDI file.

Tokenizing text is a breeze compared to MIDI. Text (at least in English) is a linear sequence of characters, easily tokenized.
However, music isn't linear, and a single note can have many attributes, like pitch, duration, and velocity.
Notes can be played at the same time, time signatures can change, and dynamics are always being applied in real-time.
It's like tokenizing an entire room of people from all different languages talking at once.
`;