import { Composition } from 'remotion'

import { letterSize, logoWidth } from './config'
import * as Letter from './VideoIntro/Letter'
import { Logo } from './VideoIntro/Logo'
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
        id="Logo"
        component={Logo}
        durationInFrames={60 * 4}
        fps={60}
        width={logoWidth}
        height={letterSize}
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
