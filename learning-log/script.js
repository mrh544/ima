const app = {
  initialize: function () {
    $('.key').click(function() {
      const note = $(this).text();
      app.playNote(note);
    });

    $('.song').click(function() {
      app.playSong();
    });
  },

  playNote: function(note) {
    const synth = new Tone.Synth().toDestination();

    synth.triggerAttackRelease(note + "4", "8n");
  },

  playSong: function() {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();

    synth.triggerAttackRelease("C4", "8n", now);
    synth.triggerAttackRelease("D4", "8n", now + 0.5);
    synth.triggerAttackRelease("E4", "8n", now + 1);
    synth.triggerAttackRelease("F4", "8n", now + 1.5);
    synth.triggerAttackRelease("G4", "8n", now + 2);
    synth.triggerAttackRelease("E4", "8n", now + 2.5);
    synth.triggerAttackRelease("G4", "8n", now + 3);

    synth.triggerAttackRelease("F4", "8n", now + 4);
    synth.triggerAttackRelease("D4", "8n", now + 4.5);
    synth.triggerAttackRelease("F4", "8n", now + 5);

    synth.triggerAttackRelease("G4", "8n", now + 6);
    synth.triggerAttackRelease("E4", "8n", now + 6.5);
    synth.triggerAttackRelease("G4", "8n", now + 7);

    // melody copy
    synth.triggerAttackRelease("C4", "8n", now + 8);
    synth.triggerAttackRelease("D4", "8n", now + 8.5);
    synth.triggerAttackRelease("E4", "8n", now + 9);
    synth.triggerAttackRelease("F4", "8n", now + 9.5);
    synth.triggerAttackRelease("G4", "8n", now + 10);
    synth.triggerAttackRelease("E4", "8n", now + 10.5);
    synth.triggerAttackRelease("G4", "8n", now + 11);

    synth.triggerAttackRelease("D4", "8n", now + 12);
    synth.triggerAttackRelease("G4", "8n", now + 13);
    synth.triggerAttackRelease("C4", "8n", now + 14);
  }
}
