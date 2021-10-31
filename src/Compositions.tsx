import { Composition } from 'remotion'

import { letterSize } from './config'
import * as Letter from './VideoIntro/Letter'
import { VideoIntro } from './VideoIntro'

export const Compositions: React.FC = () => {
  return (
    <>
      <Composition
        id="VideoIntro"
        component={VideoIntro}
        durationInFrames={60 * 5}
        fps={60}
        width={1920}
        height={1080}
      />
      <Composition
        id="T"
        component={Letter.T}
        durationInFrames={60 * 4}
        fps={60}
        width={letterSize}
        height={letterSize}
        defaultProps={{
          lastFrame: 60 * 3,
        }}
      />
      <Composition
        id="C"
        component={Letter.C}
        durationInFrames={60 * 4}
        fps={60}
        width={letterSize}
        height={letterSize}
        defaultProps={{
          lastFrame: 60 * 3,
        }}
      />
      <Composition
        id="N"
        component={Letter.N}
        durationInFrames={60 * 4}
        fps={60}
        width={letterSize}
        height={letterSize}
        defaultProps={{
          lastFrame: 60 * 3,
        }}
      />
    </>
  )
}
