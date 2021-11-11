// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { mitchthebakerInstrument } from './instruments/mitchthebaker';
import { WaveformVisualizer } from './visualizers/Waveform';
import { mitchthebakerVisualizer } from './visualizers/mitchthebaker';

/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */

/**
 * Observation: pure map (compare and contrast with impure map)
 *
 * 'instrument': Instrument
 * 'visualizer': Visualizer
 */
export type AppState = Map<string, any>;

const instruments = List([PianoInstrument, mitchthebakerInstrument]);
const visualizers = List([WaveformVisualizer, mitchthebakerVisualizer]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
