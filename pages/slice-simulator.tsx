import {
  SliceSimulator,
  SliceSimulatorProps,
} from '@prismicio/slice-simulator-react'
import state from '@slicemachine/libraries-state.json'
import Slices from '@components/slices/Slices'
import type { FunctionComponent } from 'react'
import type SliceTypes from '@slices/sliceTypes'

const SliceSimulatorPage = () => (
  <SliceSimulator
    sliceZone={({ slices }) =>
      (
        <Slices slices={slices as unknown as SliceTypes[]} />
      ) as unknown as FunctionComponent
    }
    state={state as unknown as SliceSimulatorProps['state']}
  />
)

export default SliceSimulatorPage
