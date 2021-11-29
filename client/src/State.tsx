// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { mitchthebakerInstrument } from './instruments/mitchthebaker';
import { KalimbaInstrument } from './instruments/Kalimba';
import { FluteInstrument } from './instruments/Flute';

import { WaveformVisualizer } from './visualizers/Waveform';
import { mitchthebakerVisualizer } from './visualizers/mitchthebaker';
import { KennethVisualizer } from './visualizers/KennethVisualizers'
import { MichaelWaveformVisualizer } from './visualizers/MichaelWaveform';
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

const instruments = List([PianoInstrument, mitchthebakerInstrument, KalimbaInstrument, FluteInstrument]);
const visualizers = List([WaveformVisualizer, mitchthebakerVisualizer, KennethVisualizer, MichaelWaveformVisualizer]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
