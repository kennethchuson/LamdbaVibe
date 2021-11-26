
   // 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';
import "../css/ukulele.css";

// project imports
import { Instrument, InstrumentProps } from '../Instruments';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

interface UkuleleFretProps {
  note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  minor?: boolean; // True if minor key, false if major key
  index: number; // octave + index together give a location for the piano key
}

export function UkuleleFret({
  note,
  synth,
  index,
}: UkuleleFretProps): JSX.Element {
  /**
   * This React component corresponds to either a major or minor key in the piano.
   * See `PianoKeyWithoutJSX` for the React component without JSX.
   */
  return (
    // Observations:
    // 1. The JSX refers to the HTML-looking syntax within TypeScript.
    // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
    // 3. The curly braces `{` and `}` should remind you of string interpolation.
    <div 
      className="ukulele-fret"
      onMouseDown={() => {
        console.log(note);
        synth?.triggerAttack(`${note}`);
      }}
      onMouseUp={() => synth?.triggerRelease('+0.25')}
    >
    </div>
  );
}

/*<div
      onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      className={classNames('ba pointer absolute dim', {
        'bg-black black h3': minor, // minor keys are black
        'black bg-white h4': !minor, // major keys are white
      })}
      style={{
        // CSS
        top: 0,
        left: `${index * 2}rem`,
        zIndex: minor ? 1 : 0,
        width: minor ? '1.5rem' : '2rem',
        marginLeft: minor ? '0.25rem' : 0,
      }}
    ></div>*/

function Ukulele({ synth, setSynth }: InstrumentProps): JSX.Element {
  //const keys = List([
  //  { note: 'C', idx: 0 },
  //  { note: 'Db', idx: 0.5 },
  //  { note: 'D', idx: 1 },
  //  { note: 'Eb', idx: 1.5 },
  //  { note: 'E', idx: 2 },
  //  { note: 'F', idx: 3 },
  //  { note: 'Gb', idx: 3.5 },
  //  { note: 'G', idx: 4 },
  //  { note: 'Ab', idx: 4.5 },
  //  { note: 'A', idx: 5 },
  //  { note: 'Bb', idx: 5.5 },
  //  { note: 'B', idx: 6 },
  //]);

  const frets = List([
    [{ note: 'Ab', octave: 5, idx: 0 }, { note: 'Db', octave: 5, idx: 1 }, { note: 'F', octave: 5, idx: 2 }, { note: 'Bb', octave: 5, idx: 3 }],
    [{ note: 'A', octave: 5, idx: 4 }, { note: 'D', octave: 5, idx: 5 }, { note: 'Gb', octave: 5, idx: 6 }, { note: 'B', octave: 5, idx: 7 }],
    [{ note: 'Bb', octave: 5, idx: 8 }, { note: 'Eb', octave: 5, idx: 9 }, { note: 'G', octave: 5, idx: 10 }, { note: 'C', octave: 5, idx: 11 }],
    [{ note: 'B', octave: 5, idx: 12}, { note: 'E', octave: 5, idx: 13}, { note: 'Ab', octave: 5, idx: 14}, { note: 'Db', octave: 5, idx: 15}],
    [{ note: 'C', octave: 5, idx: 16}, { note: 'F', octave: 5, idx: 17}, { note: 'A', octave: 5, idx: 18}, { note: 'D', octave: 5, idx: 19}],
    [{ note: 'Db', octave: 5, idx: 20}, { note: 'Gb', octave: 5, idx: 21}, { note: 'Bb', octave: 5, idx: 22}, { note: 'Eb', octave: 5, idx: 23}],
    [{ note: 'D', octave: 5, idx: 24}, { note: 'G', octave: 5, idx: 25}, { note: 'B', octave: 5, idx: 26}, { note: 'E', octave: 5, idx: 27}],
    [{ note: 'Eb', octave: 5, idx: 28}, { note: 'Ab', octave: 5, idx: 29}, { note: 'C', octave: 5, idx: 30}, { note: 'F', octave: 5, idx: 31}],
    [{ note: 'E', octave: 5, idx: 32}, { note: 'A', octave: 5, idx: 33}, { note: 'Db', octave: 5, idx: 34}, { note: 'Gb', octave: 5, idx: 35}],
    [{ note: 'F', octave: 5, idx: 36}, { note: 'Bb', octave: 5, idx: 37}, { note: 'D', octave: 5, idx: 38}, { note: 'G', octave: 5, idx: 39}],
    [{ note: 'Gb', octave: 5, idx: 40}, { note: 'B', octave: 5, idx: 42}, { note: 'Eb', octave: 5, idx: 43}, { note: 'Ab', octave: 5, idx: 44}],
    [{ note: 'G', octave: 5, idx: 45}, { note: 'C', octave: 5, idx: 46}, { note: 'E', octave: 5, idx: 47}, { note: 'A', octave: 5, idx: 48}]
  ]);

  const setOscillator = (newType: Tone.ToneOscillatorType) => {
    setSynth(oldSynth => {
      oldSynth.disconnect();

      return new Tone.Synth({
        oscillator: { type: newType } as Tone.OmniOscillatorOptions,
      }).toDestination();
    });
  };

  const oscillators: List<OscillatorType> = List([
    'sine',
    'sawtooth',
    'square',
    'triangle',
    'fmsine',
    'fmsawtooth',
    'fmtriangle',
    'amsine',
    'amsawtooth',
    'amtriangle',
  ]) as List<OscillatorType>;

  return (
    <div className="pv4">
      <div className="relative dib h4 w-100 ml4 ukulele">
        {
          frets.map(fret => (
            <div className="fret">
              {fret.map(aFret => {
                const note = `${aFret.note}${aFret.octave}`;
                

                return (
                  <UkuleleFret 
                    note={note}
                    synth={synth}
                    index={aFret.idx}
                  />
                );
              })}
            </div>
          ))
        }
        {/*Range(2, 7).map(octave =>
          keys.map(key => {
            const isMinor = key.note.indexOf('b') !== -1;
            const note = `${key.note}${octave}`;
            return (
              <PianoKey
                key={note} //react key
                note={note}
                synth={synth}
                minor={isMinor}
                octave={octave}
                index={(octave - 2) * 7 + key.idx}
              />
            );
          }),
        )*/}
      </div>

      {/*<div className={'pl4 pt4 flex'}>
        {oscillators.map(o => (
          <PianoType
            key={o}
            title={o}
            onClick={() => setOscillator(o)}
            active={synth?.oscillator.type === o}
          />
        ))}
        </div>*/}
    </div>
  );
}

export const mitchthebakerInstrument = new Instrument('Ukulele', Ukulele);