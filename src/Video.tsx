import { Composition } from 'remotion'

import { LetterT } from './VideoIntro/LetterT'
import { LetterC } from './VideoIntro/LetterC'

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="LetterT"
        component={LetterT}
        durationInFrames={60 * 3}
        fps={60}
        width={1920}
        height={1080}
      />
      <Composition
        id="LetterC"
        component={LetterC}
        durationInFrames={60 * 3}
        fps={60}
        width={1920}
        height={1080}
      />
      {/* <Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Logo"
				component={Logo}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Title"
				component={Title}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Subtitle"
				component={Subtitle}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/> */}
    </>
  )
}
