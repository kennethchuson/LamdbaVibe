// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { mitchthebakerInstrument } from './instruments/mitchthebaker';
import { WaveformVisualizer } from './visualizers/Waveform';
import { mitchthebakerVisualizer } from './visualizers/mitchthebaker';
import { KennethVisualizer } from './visualizers/KennethVisualizers'
import { KalimbaInstrument } from './instruments/Kalimba';
//import { Kalimba } from './instruments/Kalimba'

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

const instruments = List([PianoInstrument, mitchthebakerInstrument, KalimbaInstrument]);
const visualizers = List([WaveformVisualizer, mitchthebakerVisualizer, KennethVisualizer]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
