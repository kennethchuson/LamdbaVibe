// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List } from 'immutable';
import React from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

interface FluteKeyProps {
  note: string; 
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  minor?: boolean; // True if minor key, false if major key
  index: number; // octave + index together give a location for the piano key
}

export function FluteKey({
  note,
  synth,
  minor,
  index,
}: FluteKeyProps): JSX.Element {
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
      onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.025')} // Question: what is `onMouseUp`?
      className={classNames('ba pointer absolute dim', {
        'black bg-white h4': !minor, // major keys are white
      })}
      style={{
        // CSS
        top: 6,
        left: `${index * 6.85}rem`,
        zIndex: minor ? 4 : 2,
        width: minor ? '2rem' : '5rem',
        height: minor ? '2rem' : '5rem',
        borderRadius: 88/2,
        marginLeft: minor ? '0.25rem' : 25,
      }}
    ></div>
  );
}

// // eslint-disable-next-line
// function PianoKeyWithoutJSX({
//   note,
//   synth,
//   minor,
//   index,
// }: FluteKeyProps): JSX.Element {
//   /**
//    * This React component for pedagogical purposes.
//    * See `PianoKey` for the React component with JSX (JavaScript XML).
//    */
//   return React.createElement(
//     'div',
//     {
//       onMouseDown: () => synth?.triggerAttack(`${note}`),
//       onMouseUp: () => synth?.triggerRelease('+0.25'),
//       className: classNames('ba pointer absolute dim', {
//         'bg-black black h3': minor,
//         'black bg-white h4': !minor,
//       }),
//       style: {
//         top: 0,
//         left: `${index * 25}rem`,
//         zIndex: minor ? 1 : 0,
//         width: minor ? '1.5rem' : '2rem',
//         marginLeft: minor ? '0.25rem' : 0,
//       },
//     },
//     [],
//   );
//}


function Flute({ synth }: InstrumentProps): JSX.Element {

  const flute = List([
    [{ note: 'Ab', octave: 6, idx: 9 }, 
    { note: 'Db', octave: 6, idx: 1 }, 
    { note: 'F', octave: 6, idx: 2 }, 
    { note: 'Bb', octave: 4, idx: 3 }],
    [{ note: 'A', octave: 4, idx: 4 }, 
    { note: 'D', octave: 4, idx: 5 }, 
    { note: 'Gb', octave: 6, idx: 6 }, 
    { note: 'B', octave: 6, idx: 7 }],
    [{ note: 'Bb', octave: 6, idx: 8 }, 
    { note: 'Eb', octave: 6, idx: 9 }, 
    { note: 'G', octave: 4, idx: 10 }, 
    { note: 'C', octave: 4, idx: 11 }],
  ]);

  return (
    <div className="pv4">
      <div className="relative dib h4 w-50">
        <div className="flute">
          {flute.map(blow => (
              <div className="blow">
                {blow.map(blow => {
                  const note = `${blow.note}${blow.octave}`;
                  return (
                    <FluteKey 
                      note={note}
                      synth={synth}
                      index={blow.idx}
                    />
                  );
                })}
              </div>
            ))
          }
        </div> 
        <div className={'pl4 pt4 flex'}>
          </div>
      </div>   
      </div> 
  );
}

export const FluteInstrument = new Instrument('Flute', Flute);